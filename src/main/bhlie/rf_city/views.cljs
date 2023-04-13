(ns bhlie.rf-city.views
  (:require [bhlie.rf-city.subs] 
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [reagent.core :as r]
            [reitit.frontend :refer [router]]))

(defn error-boundary [& _]
  (let [err-state (r/atom nil)]
    (r/create-class {:display-name "ErrBoundary"
                     :reagent-render (fn [& children]
                                       (if (nil? @err-state)
                                         (into [:<>] children)
                                         [:p "Sorry, something went wrong..."]))
                     :get-derived-state-from-error (fn [error] (reset! err-state error))})))

(defn get-city-info []
  [:div {:id :user-info-entry}
   [:form {:name :travel-info
           :on-submit (fn [e] (.preventDefault e)
                        (dispatch [:app/handle-form-submission (.. e -target -firstChild -value)])
                        (dispatch [:events/push-state :maps]))}
    [:input {:id :destination 
             :name :destination 
             :type "textarea" 
             :placeholder "Destination"}]
    [:label "From: "
     [:input {:id :date-from 
              :type "date" 
              :min "2023-04-11"}]]
    [:label "To: "
     [:input {:id :date-to 
              :type "date"}]]
    [:input {:id :submit-search 
             :type :submit 
             :value "Get trip info"}]]])

(defn map-tile []
  [:div
   (when-some [{:keys [lat lon]} @(subscribe [:geo/city-top-match])]
     (dispatch [:data/maps [lat lon]])
     [:img {:src @(subscribe [:geo/static-map])
            :id :static-map}])])

(defn city-tile []
  (let [{:keys [display_name lat lon]} @(subscribe [:geo/city-top-match])
        err @(subscribe [:geo/map-error])]
    (dispatch [:data/movies display_name])
    (if (some? err)
      (throw (js/Error. "API is busted"))
      [:div {:id :city-info} 
       [map-tile]
       [:h1 display_name]
       [:h4 "Latitude: " lat]
       [:h4 "Longitude: " lon]])))

(defn movies-tile []
  (let [movies @(subscribe [:movies/sorted])]
    [:div 
     [:h2 "Movies about this city"]
     [:label {:for "sort-by"} "Sort by: "]
     [:select {:name "sort-by"
               :on-change (fn [e] (dispatch [:movies/sort-key (.. e -target -value)]))}
      [:option {:value "popularity"} "Popularity"]
      [:option {:value "title"} "Title"]
      [:option {:value "release_date"} "Release date"]]
     (into [:div]
           (for [{:keys [title release_date popularity]} movies]
             [:div [:h4 title]
              [:h6 "Release date: " release_date]
              [:p "Rating: " popularity]]))]))

(defn weather-tile []
  (when-some [{:keys [lat lon]} @(subscribe [:geo/city-top-match])]
    (dispatch [:data/weather [lat lon]])
    (let [weather @(subscribe [:geo/weather-data])]
      [:div {:id :seven-day-forecast} 
       [:h2 "Seven-day weather forecast"]
       (for [{:keys [min_temp max_temp weather datetime]} (:data weather)
             :let [desc (:description weather)]]
         [:div {:id :daily-forecast}
          [:p {:id :date} datetime]
          [:p "Low: " min_temp (str "\u00B0" "C")]
          [:p "High " max_temp (str "\u00B0" "C")]
          [:p desc]])])))

(defn home-page []
  [:div
   [:h1 "This is home page"]
   [:button
    {:on-click #(re-frame/dispatch [:events/push-state :search])}
    "Go to sub-page 2"]])

(def city-router (router ["/"
                          ["" {:name :home
                               :view home-page
                               :link-text "Home"
                               :controllers [{:start (fn [& params] (.log js/console (str "showing these " (or params "no params"))))}]}]
                          ["search" {:name :search
                                     :view get-city-info
                                     :link-text "Search"
                                     :controllers [{:start (fn [& params] (dispatch [:app/highlight-active-link]))}]}]
                          ["maps" {:name :maps
                                   :view city-tile
                                   :link-text "Maps"
                                   :controllers [{:start (fn [& _] ())}]}]]))