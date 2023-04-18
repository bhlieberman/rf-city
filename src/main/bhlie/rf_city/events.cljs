(ns bhlie.rf-city.events
  (:require [re-frame.core :as re-frame :refer [inject-cofx reg-fx reg-cofx reg-event-fx reg-event-db]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe :refer [push-state]]
            [day8.re-frame.http-fx]
            [re-chain.core :as chain]
            [ajax.core :as ajax]
            [fork.re-frame :as fork]
            [goog.object :as gobj]))

(reg-event-fx
 :debug/test-submit
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
                 :on-success [:debug/log-success]
                 :on-failure [:debug/log-failure]}}))

(reg-event-fx
 :debug/log-success
 (fn [{:keys [db]} [_ result path]]
   (js/console.log (str result))
   {:db (-> db
            (assoc :result result)
            (fork/set-submitting path false)
            (fork/set-server-message path "Map lookup succeeded!"))}))

(reg-event-fx
 :debug/log-failure
 (fn [{:keys [db]} [_ result path]]
   (js/console.log result)
   {:db (-> db
            (fork/set-submitting path false)
            (fork/set-server-message path "Map lookup failed!"))}))

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

#_(reg-cofx
 :config/geolocation-enabled?
 (fn [coeffects]
   (.addEventListener js/window "DOMContentLoaded"
                      (fn [_]
                        (.. js/window -navigator -geolocation
                            (getCurrentPosition (fn [position] (let [lat (.. position -coords -latitude)
                                                                     lon (.. position -coords -longitude)]
                                                                 (-> coeffects
                                                                     (assoc :current-lat lat)
                                                                     (assoc :current-lon lon))))))))))

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

(reg-event-fx
 :config/initialize-app
 
 (fn [_ _]
   {:db {:current-route nil}}))

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

(reg-event-fx
 :config/remove-event-listeners-on-reload
 (fn [_ _]
   {:remove-event-listeners (.querySelectorAll js/document "#route-link")}))

(reg-fx
 :remove-event-listeners
 (fn [links]
   (doseq [l links]
     (.removeEventListener l "click" (fn [e]
                                       (.. e -currentTarget -classList (add "bg-pink-200")))))))