(ns bhlie.rf-city.views
  (:require [bhlie.rf-city.subs]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [reagent.core :as r]
            [fork.re-frame :as fork]
            [goog.object :as gobj]
            [goog.dom :as gdom]
            [reitit.frontend :refer [router]]))

(defn get-city-info []
  [:div {:id :user-info-entry}
   [fork/form {:form-id "map-lookup"
               :path [:map-lookup]
               :prevent-default? true
               :clean-on-unmount? true
               :on-submit (fn [e] (dispatch [:app/handle-form-submission e])
                            (dispatch [:events/push-state :maps]))}
    (fn [{:keys [values form-id handle-change handle-blur submitting?
                 handle-submit]}]
      [:form {:name :travel-info
              :id form-id
              :on-submit handle-submit}
       [:input {:id :destination
                :required true
                :name "destination"
                :value (values "destination")
                :type "textarea"
                :on-change handle-change
                :on-blur handle-blur
                :placeholder "Destination"}]
       [:label "From: "
        [:input {:id :date-from
                 :type "date"
                 :min "2023-04-11"}]]
       [:label "To: "
        [:input {:id :date-to
                 :type "date"}]]
       [:button {:id :submit-search
                 :type :submit
                 :disabled submitting?} "Get trip info"]])]])

(defn gmap-inner []
  (let [{:keys [lat lon]} (r/props (r/current-component))]
    (r/create-class {:reagent-render (fn [] [:div
                                            [:div#map-canvas {:style {:height "400px"}}]])
                    :component-did-mount (fn [_] (let [canvas (gdom/getElement "map-canvas")]
                                                   (dispatch [:config/load-google-maps {:canvas canvas
                                                                                        :lat (js/parseFloat lat)
                                                                                        :lon (js/parseFloat lon)
                                                                                        :zoom 13}])))})))

(defn gmap-outer []
  (let [pos @(subscribe [:geo/live-map-coords])] 
    (fn [] [gmap-inner pos])))

(defn map-tile []
  [:div {:id :map-container}
   [:img {:src @(subscribe [:geo/static-map])
          :id :static-map}]
   [gmap-outer]])

(defn city-tile []
  (let [{:keys [display_name lat lon]} @(subscribe [:geo/city-top-match])
        err @(subscribe [:geo/map-error])]
    (cond (some? err)
          (throw (js/Error. "API is busted"))
          (some? (or lat lon))
          [:div {:id :city-info}
           [:h1 display_name]
           [map-tile]
           [:h4 "Latitude: " lat]
           [:h4 "Longitude: " lon]])))

(defn movies-tile []
  (let [movies @(subscribe [:movies/sorted])]
    [:div {:id :movies}
     [:h2 "Movies about this city"]
     [:label {:for "sort-by"} "Sort by: "]
     [:select {:name "sort-by"
               :id :select-filter
               :on-change (fn [e] (dispatch [:movies/sort-key (.. e -target -value)]))}
      [:option {:value "popularity"} "Popularity"]
      [:option {:value "title"} "Title"]
      [:option {:value "release_date"} "Release date"]]
     (into [:div {:id :movies-list}]
           (for [{:keys [title release_date popularity]} movies]
             [:div {:id :movie-each} [:h4 title]
              [:h6 "Release date: " release_date]
              [:p "Rating: " popularity]]))]))

(defn weather-tile []
  (let [weather @(subscribe [:geo/weather-data])]
    [:div {:id :seven-day-forecast}
     [:h2 "Seven-day weather forecast"]
     (for [{:keys [min_temp max_temp weather datetime]} (:data weather)
           :let [desc (:description weather)]]
       [:div {:id :daily-forecast}
        [:p {:id :date} datetime]
        [:p "Low: " min_temp (str "\u00B0" "C")]
        [:p "High " max_temp (str "\u00B0" "C")]
        [:p desc]])]))

(defn current-location []
  [:div {:id :user-loc}
   [:p#current-loc (str "Your current location is: " @(subscribe [:app/current-location]))]])

(defn home []
  [:div {:id :home-page}
   [:div {:id :welcome-msg}
    [:img {:src "/icons8-globe-30.png" :id :globe}]
    [:p "Welcome to City Explorer!"] 
    [:p "Here you can explore things to do in your favorite cities around the globe! Plan a trip in the search tab, or view maps, movies, or weather data."]]])

(def city-router (router ["/"
                          ["" {:name :home
                               :view home
                               :link-text "Home"
                               :controllers [{:start (fn [& _] (dispatch [:app/highlight-active-link]))}]}]
                          ["search" {:name :search
                                     :view get-city-info
                                     :link-text "Search"
                                     :controllers [{:start (fn [& _] (dispatch [:app/highlight-active-link]))}]}]
                          ["maps" {:name :maps
                                   :view city-tile
                                   :link-text "Maps"
                                   :controllers [{:start (fn [& _] ())}]}]
                          ["movies" {:name :movies
                                     :view movies-tile
                                     :link-text "Movies"
                                     :controllers [{:start (fn [& _] (dispatch [:app/highlight-active-link]))}]}]
                          ["weather" {:name :weather
                                      :view weather-tile
                                      :link-text "Weather"
                                      :controllers [{:start (fn [& _] (dispatch [:app/highlight-active-link]))}]}]]))