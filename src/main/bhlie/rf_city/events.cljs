(ns bhlie.rf-city.events
  (:require [re-frame.core :as re-frame :refer [inject-cofx reg-fx reg-cofx reg-event-fx reg-event-db dispatch]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe :refer [push-state]]
            [day8.re-frame.http-fx]
            [re-chain.core :as chain :refer [reg-chain]]
            [ajax.core :as ajax]
            [fork.re-frame :as fork]
            [goog.object :as gobj]
            [goog.dom :as gdom]
            [shadow.cljs.modern :refer [js-await]]))

(reg-event-fx
 :config/load-google-maps
 (fn [_ [_ opts]]
   {:google-maps opts}))

(reg-fx
 :google-maps
 (fn [{:keys [canvas lat lon zoom]}]
   (js-await [lib (js/google.maps.importLibrary "maps")]
             (let [Map (gobj/get lib "Map")
                   BicyclingLayer (gobj/get lib "BicyclingLayer")
                   bike-layer (BicyclingLayer.)]
               (.setMap bike-layer (Map. canvas #js {:center #js {:lat lat
                                               :lng lon}
                                  :zoom zoom}))))))

(reg-event-fx
 :app/show-google-map
 (fn [{:keys [db]} [_ map]]
   {:db (assoc db :goog-map map)}))

(reg-event-fx
 :app/handle-form-submission
 [(inject-cofx :config/api-keys)]
 (fn [{:keys [location-iq-api-key db]} [_ {:keys [path values]}]]
   {:db (fork/set-submitting db path true)
    :http-xhrio {:method :get
                 :uri "https://us1.locationiq.com/v1/search.php"
                 :timeout 8000
                 :params {:key location-iq-api-key
                          :q (get values "destination")
                          :format "json"}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:data/valid-geo-data]
                 :on-failure [:errors/invalid-geo-data]}}))

(reg-event-fx
 :data/valid-geo-data
 (fn [{:keys [db]} [_ data path]]
   (let [{:keys [lat lon display_name]} (first data)]
     {:db (-> db
              (assoc-in [:data :api :geo] data)
              (fork/set-submitting path false)
              (fork/set-server-message path "Map Lookup succeeded!"))
      :fx [[:dispatch [:data/maps [lat lon]]]
           [:dispatch [:data/weather [lat lon]]]
           [:dispatch [:data/movies display_name]]]})))

(reg-event-db
 :errors/invalid-geo-data
 (fn [db [_ [error path]]]
   (-> db
       (assoc-in [:errors :api :geo] error)
       (fork/set-submitting path false)
       (fork/set-server-message path "Map Lookup failed!"))))

(reg-cofx
 :config/api-keys
 (fn [coeffects]
   (assoc coeffects
          :location-iq-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.city_key")
          :weatherbit-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.weather_key")
          :moviedb-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.movie_key")
          :goog-maps-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.goog_maps_key"))))

(reg-event-fx
 :config/geolocation-enabled?
 (fn [_ _]
   {:current-location nil}))

(defn get-current-position []
  (js/Promise. (fn [resolve reject] (.. js/window -navigator -geolocation (getCurrentPosition resolve reject)))))

(reg-fx
 :current-location
 (fn [_]
   (-> (get-current-position)
       (.then (fn [data] (dispatch [:app/save-current-location (.. data -coords -latitude)
                                    (.. data -coords -longitude)]))))))

(reg-event-db
 :app/save-current-location
 (fn [db [_ lat lon]]
   (assoc db :current-loc {:lat lat :lon lon})))

(reg-event-fx
 :data/maps
 [(inject-cofx :config/api-keys)]
 (fn [{:keys [db location-iq-api-key]} [_ [lat lon]]]
   (let [map-uri (str "https://maps.locationiq.com/v3/staticmap?key=" location-iq-api-key
                      "&center=" lat "," lon "&zoom=18")]
     {:db (assoc db :map map-uri)})))

(reg-event-fx
 :data/weather
 [(inject-cofx :config/api-keys)]
 (fn [{:keys [weatherbit-api-key]} [_ [lat lon]]]
   {:http-xhrio {:method :get
                 :uri "http://api.weatherbit.io/v2.0/forecast/daily"
                 :timeout 8000
                 :params {:lat lat
                          :lon lon
                          :key weatherbit-api-key}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:data/valid-weather-data]
                 :on-failure [:errors/invalid-weather-data]}}))

(reg-chain
 :get-weather
 [(inject-cofx :config/api-keys)]
 (fn [{:keys [weatherbit-api-key]} [_ [lat lon]]]
   {:http-xhrio {:method :get
                 :uri "http://api.weatherbit.io/v2.0/forecast/daily"
                 :timeout 8000
                 :params {:lat lat
                          :lon lon
                          :key weatherbit-api-key}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-failure [:errors/invalid-weather-data]}})
 (fn [{:keys [db]} [_ data]]
   {:db (assoc-in db [:data :api :weather] data)}))

(reg-event-fx
 :data/movies
 [(inject-cofx :config/api-keys)]
 (fn [{:keys [moviedb-api-key]} [_ query]]
   {:http-xhrio {:method :get
                 :uri "https://api.themoviedb.org/3/search/movie"
                 :timeout 8000
                 :params {:query query
                          :api_key moviedb-api-key}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:data/valid-movie-data]
                 :on-failure [:errors/invalid-movie-data]}}))

(reg-event-db
 :data/valid-movie-data
 (fn [db [_ data]]
   (assoc-in db [:data :api :movies] data)))

(reg-event-db
 :errors/invalid-movie-data
 (fn [db [_ error]]
   (assoc-in db [:errors :api :movies] error)))

(reg-event-db
 :data/valid-weather-data
 (fn [db [_ data]]
   (assoc-in db [:data :api :weather] data)))

(reg-event-db
 :errors/invalid-weather-data
 (fn [db [_ error]]
   (assoc-in db [:errors :api :weather] error)))

#_(defn get-geolocation-data []
    {:first-dispatch [:config/geolocation-enabled?]
     :rules [{:when :seen? :events :config/geolocation-enabled? :dispatch [:app/get-current-location]}]})

(reg-event-fx
 :config/initialize-app
 (fn [_ _]
   {:db {:current-route nil}
    :fx [[:dispatch [:config/geolocation-enabled?]]]
    #_:async-flow #_(get-geolocation-data)}))

(reg-event-fx
 :app/navigated
 (fn [{:keys [db]} [_ new-match]]
   (let [old-match   (:current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)]
     {:db (assoc db :current-route (assoc new-match :controllers controllers))
      :active-links old-match})))

(reg-fx
 :active-links
 (fn [l]
   (let [link-name (-> l :data :link-text)
         li (filter #(= link-name (.-textContent %))
                    (.querySelectorAll js/document "#route-link"))]
     (some-> li first .-classList (doto
                                   (.remove "bg-pink-200")
                                    (.remove "border-pink-100")
                                    (.remove "rounded-lg")
                                    (.remove "shadow-lg")
                                    (.remove "p-3"))))))

(reg-fx
 :push-state
 (fn [route]
   (apply push-state route)))

(reg-event-fx
 :events/push-state
 (fn [_ [_ & route]]
   {:push-state route}))

(reg-event-db
 :movies/sort-key
 (fn [db [_ param]]
   (assoc-in db [:sort :movies] param)))

(reg-event-fx
 :app/highlight-active-link
 (fn [_ _]
   (let [links (.getElementsByTagName js/document "li")]
     {:highlight-active-links links})))

(reg-fx
 :highlight-active-links
 (fn [links]
   (doseq [link links]
     (.addEventListener link "click"
                        (fn [e]
                          (doto (.. e -currentTarget -classList)
                            (.add "bg-pink-200")
                            (.add "border-pink-100")
                            (.add "rounded-lg")
                            (.add "shadow-lg")
                            (.add "p-3")))))))
