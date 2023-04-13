(ns bhlie.rf-city.events
  (:require [re-frame.core :as re-frame :refer [inject-cofx reg-fx reg-cofx reg-event-fx reg-event-db]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe :refer [push-state]]
            [day8.re-frame.http-fx] 
            [ajax.core :as ajax]
            [goog.object :as gobj]))

(reg-event-fx
 :app/handle-form-submission
 [(inject-cofx :config/api-keys)]
 (fn [{:keys [location-iq-api-key]} [_ destination]]
   {:http-xhrio {:method :get
                 :uri "https://us1.locationiq.com/v1/search.php"
                 :timeout 8000
                 :params {:key location-iq-api-key
                          :q destination
                          :format "json"}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:data/valid-geo-data]
                 :on-failure [:errors/invalid-geo-data]}}))

(reg-event-db
 :data/valid-geo-data
 (fn [{:keys [db]} [_ data]]
   (assoc-in db [:data :api :geo] data)))

(reg-event-db
 :errors/invalid-geo-data
 (fn [db [_ error]]
   (assoc-in db [:errors :api :geo] error)))

(reg-cofx
 :config/api-keys
 (fn [coeffects]
   (assoc coeffects
          :location-iq-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.city_key")
          :weatherbit-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.weather_key")
          :moviedb-api-key (gobj/get js/CLOSURE_DEFINES "bhlie.rf_city.movie_key"))))

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
     (some-> li first .-classList (.remove "bg-pink-200")))))

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
                          (.. e -currentTarget -classList (add "bg-pink-200")))))))

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
