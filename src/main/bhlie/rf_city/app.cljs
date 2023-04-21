(ns bhlie.rf-city.app
  (:require [re-frame.core :as re-frame :refer [dispatch]]
            [reagent.core :as r]
            [goog.dom :as gdom]
            [bhlie.rf-city.events]
            [re-chain.core :as chain]
            [bhlie.rf-city.views :refer [city-router home]]
            [reitit.core :as rc]
            [reitit.frontend.easy :as rfe :refer [start! href]]
            [reagent-mui.material.app-bar :refer [app-bar]]
            [reagent-mui.material.container :refer [container]]
            [reagent-mui.material.toolbar :refer [toolbar]]
            [reagent-mui.material.tooltip :refer [tooltip]]
            [reagent-mui.material.box :refer [box]]
            [reagent-mui.material.button :refer [button]]
            ["react-dom/client" :refer [createRoot]]))

(defonce root (createRoot (gdom/getElement "app")))

(defn init-routes! []
  (.log js/console "initializing routes")
  (start! city-router (fn [new-match] (when new-match (dispatch [:app/navigated new-match])))
          {:use-fragment false}))

(defn nav [{:keys [router]}]
  [app-bar {:id :top-banner
            :position :static}
   [container {:max-width "xl"}
    [toolbar
     [box {:sx {:flex-grow 1 :display {:xs "none" :md "flex"}}}
      (for [route-name (rc/route-names router)
            :let       [route (rc/match-by-name router route-name)
                        text (-> route :data :link-text)]]
        [button {:id :route-link :key route-name
                 :sx {:my 2 :color "white" :display :block}}
         [:a {:href (href route-name)} text]])]]]])

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
  (chain/configure! [{:effect-present?   (fn [effects] (:http-xhrio effects))
                      :get-dispatch (fn [effects] (get-in effects [:http-xhrio :on-success]))
                      :set-dispatch   (fn [effects dispatch] (assoc-in effects [:http-xhrio :on-success] dispatch))}])
  (init-routes!)
  (mount-root))