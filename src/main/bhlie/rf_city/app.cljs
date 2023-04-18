(ns bhlie.rf-city.app
  (:require [re-frame.core :as re-frame :refer [dispatch]]
            [reagent.core :as r]
            [goog.dom :as gdom]
            [bhlie.rf-city.events]
            [bhlie.rf-city.views :refer [city-router]]
            [reitit.core :as rc]
            [reitit.frontend.easy :as rfe :refer [start! href]]
            ["react-dom/client" :refer [createRoot]]))

(defonce root (createRoot (gdom/getElement "app")))

(defn init-routes! []
  (.log js/console "initializing routes")
  (start! city-router (fn [new-match] (when new-match (dispatch [:app/navigated new-match])))
          {:use-fragment false}))

(defn nav [{:keys [router]}]
  [:div {:id :top-banner}
   [:ul
    (for [route-name (rc/route-names router)
          :let       [route (rc/match-by-name router route-name)
                      text (-> route :data :link-text)]]
      [:li {:id :route-link :key route-name}
       [:a {:href (href route-name)} text]])]])

(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [:app/current-route])]
    [:div
     [nav {:router router :current-route current-route}]
     (when current-route
       [(-> current-route :data :view)])]))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!) 
  (.render root (r/as-element [router-component {:router city-router}])))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init []
  (re-frame/dispatch-sync [:config/initialize-app])
  (init-routes!)
  (mount-root))
