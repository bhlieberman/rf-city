(ns bhlie.rf-city.webgl
  (:require [goog.dom :as gdom]
            [shadow.cljs.modern :refer [js-await]]
            ["three" :as three :refer [Scene PerspectiveCamera
                                       AmbientLight DirectionalLight
                                       Matrix4 WebGLRenderer]]
            ["three/examples/jsm/loaders/GLTFLoader" :refer [GLTFLoader]]))

(def ^js map-options #js {:tilt 0,
                          :heading 0,
                          :zoom 18,
                          :center {:lat 35.6594945, :lng 139.6999859},
                          :mapId "15431d2b469f209e",
                          :disableDefaultUI true,
                          :gestureHandling "none",
                          :keyboardShortcuts false})

(defn init-webgl-overlay-view [^js map web-gl ^js opts]
  (let [^js view web-gl
        scene (Scene.)
        camera (PerspectiveCamera.)
        loader (GLTFLoader.)
        renderer (WebGLRenderer.)]
    (set! (.-onAdd view) (fn [] (let [ambient-light (AmbientLight. 0xffffff 0.75)
                                      directional-light (DirectionalLight. 0xffffff 0.25)
                                      source "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf"]
                                  (.. directional-light -position (set 0.5 -1 0.5))
                                  (doto scene (.add ambient-light) (.add directional-light))
                                  (.load loader source
                                         (fn [gltf] (.. gltf -scene -scale (set 10 10 10))
                                           (set! (.. gltf -scene -rotation -x) js/Math.PI)
                                           (.add scene gltf))))))
    (set! (.-onContextRestored view) (fn [{:keys [gl]}]
                                       (let [renderer (WebGLRenderer. {:canvas (.-canvas gl)
                                                                       :context gl})]
                                         (set! (.-autoClear renderer) false)
                                         (set! (.. loader -manager -onload)
                                               (fn [] (.setAnimationLoop renderer (fn []
                                                                                    (.requestRedraw view)
                                                                                    (.moveCamera map (.-tilt opts) (.-heading opts) (.-zoom opts))
                                                                                    (cond (< (.-tilt opts) 67.5) (set! (.-tilt opts) (+ (.-tilt opts) 0.5))
                                                                                          (<= (.-heading opts) 360)
                                                                                          (do (set! (.-heading opts) (+ (.-heading opts) 0.2))
                                                                                              (set! (.-zoom opts) (- (.-zoom opts) 0.0005)))
                                                                                          :else (.setAnimationLoop renderer nil)))))))))
    (set! (.-onDraw view) (fn [{:keys [gl ^js transformer]}] (let [lat-long-alt {:lat (.. opts -center -lat)
                                                                                 :lng (.. opts -center -lng)
                                                                                 :alt 120}
                                                                   matrix (.fromLatLngAltitude transformer lat-long-alt)]
                                                               (set! (.-projectionMatrix camera) (.fromArray (Matrix4.) matrix))
                                                               (.requestRedraw view)
                                                               (.render renderer scene camera)
                                                               (.resetState renderer))))
    (.setMap view map)))

(defn init-map [map web-gl opts]
  (init-webgl-overlay-view map web-gl opts))