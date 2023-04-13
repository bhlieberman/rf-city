(ns bhlie.rf-city.router
  (:require [reagent.core :as r]
            [bhlie.rf-city.views :refer [get-city-info city-tile map-tile movies-tile weather-tile]]
   ["react-router-dom" :refer [useRouteError createBrowserRouter]]))

(defn error-page []
  (let [error (useRouteError)]
    [:div {:id :error-page}
     [:p "Sorry, a navigation error has occurred."]
     [:p [:i (.-message error)]]]))

(def b-router (createBrowserRouter #js [#js {:path "/"
                                             :element (r/as-element [:div
                                                                     [:p "Hello, welcome to City Explorer!"]])
                                             :error-element (r/as-element [error-page])}
                                        #js {:path "/search"
                                             :element (r/as-element [:f> get-city-info]) 
                                             :error-element (r/as-element [error-page])}
                                        #js {:path "/city_info"
                                             :element (r/as-element [city-tile])}
                                        #js {:path "/maps"
                                             :element (r/as-element [map-tile])}
                                        #js {:path "/movies"
                                             :element (r/as-element [movies-tile])}
                                        #js {:path "/weather"
                                             :element (r/as-element [weather-tile])}]))