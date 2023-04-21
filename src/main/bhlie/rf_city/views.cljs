(ns bhlie.rf-city.views
  #_{:clj-kondo/ignore [:unused-namespace]}

  (:require [bhlie.rf-city.subs]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [reagent.core :as r]
            [fork.re-frame :as fork]
            [goog.dom :as gdom]
            [reitit.frontend :refer [router]]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.material.form-control :refer   #_{:clj-kondo/ignore [:unused-referred-var]} [form-control]]
            [reagent-mui.material.text-field :refer [text-field]]
            [reagent-mui.material.tabs :refer [tabs]]
            [reagent-mui.material.tab :refer [tab]]
            [reagent-mui.material.box :refer [box]]
            [reagent-mui.material.typography :refer [typography]]
            [reagent-mui.x.date-picker :refer    #_{:clj-kondo/ignore [:unused-referred-var]}[date-picker]]
            [reagent-mui.x.localization-provider :refer   #_{:clj-kondo/ignore [:unused-referred-var]}[localization-provider]]
            [reagent-mui.cljs-time-adapter :refer   #_{:clj-kondo/ignore [:unused-referred-var]}[cljs-time-adapter]]))

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
              :on-submit handle-submit
              :class :form-entry}
       [text-field {:id :destination
                    :required true
                    :name "destination"
                    :value (values "destination")
                    :type "textarea"
                    :on-change handle-change
                    :on-blur handle-blur
                    :placeholder "Destination"
                    :variant "outlined"}]
       #_[:label {:id :from-label} "From: "
        [localization-provider {:date-adapter cljs-time-adapter}
         [date-picker {:id :date-from
                       :disablePast true}]]]
       #_[:label {:id :to-label} "To: "
        [localization-provider {:id :date-from
                                :date-adapter cljs-time-adapter}
         [date-picker {:id :date-to
                       :type "date"}]]]
       [button {:variant "contained" :color "primary" :id :submit-search
                :disabled submitting?} "Search"]])]])

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

(defn webgl-map-inner []
  (let [{:keys [lat lon]} (r/props (r/current-component))]
    (r/create-class {:reagent-render (fn [] [:div
                                             [:div#gl-map-canvas {:style {:height "700px" :width "500px"}}]])
                     :component-did-mount (fn [_] (let [canvas (gdom/getElement "gl-map-canvas")]
                                                    (dispatch [:config/load-google-maps {:canvas canvas
                                                                                    :lat (js/parseFloat lat)
                                                                                    :lon (js/parseFloat lon)
                                                                                    :zoom 18}])))})))

(defn webgl-map-outer []
  (let [pos @(subscribe [:geo/live-map-coords])]
    (fn [] [webgl-map-inner pos])))

(defn tab-panel [props]
  (let [{:keys [children value index]} props]
    [:div {:role :tabpanel
           :hidden (not= value index)
           :id (str "simple-tabpanel-" index)
           :aria-labelledby (str "simple-tab-" index)}
     (when (= value index) [box {:sx {:p 3}}
                            [typography children]])]))

(defn map-tile []
  (let [value (r/atom 0)
        handle-change (fn [_ new-val] (reset! value new-val))]
    (fn []
      [:div {:id :map-container}
      [box {:sx {:width "100%"}}
       [box {:sx {:border-bottom 1 :border-color :divider}}
        [tabs {:value @value :on-change handle-change :id :map-tabs}
         [tab {:label :static}]
         [tab {:label :google-maps}]
         [tab {:label :webgl-map}]]]
       [tab-panel {:value @value 
                   :index 0 
                   :children [:img {:src @(subscribe [:geo/static-map])
                                                 :id :static-map}]}]
       [tab-panel {:value @value 
                   :index 1 
                   :children [gmap-outer]}]
       [tab-panel {:value @value :index 2 :children "WebGL Map to be created here"#_[webgl-map-outer]}]]
      
      ])))

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