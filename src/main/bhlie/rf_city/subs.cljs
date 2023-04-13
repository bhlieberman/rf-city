(ns bhlie.rf-city.subs
  (:require [re-frame.core :as re-frame :refer [reg-sub]]))

(reg-sub
 :geo/static-map
 :-> :map)

(reg-sub
 :geo/city-info
 :=> #(get-in % [:data :api :geo]))

(reg-sub
 :geo/city-top-match
 :<- [:geo/city-info]
 :=> first)

(reg-sub
 :geo/city-others-match
 :<- [:geo/city-info]
 :=> rest)

(reg-sub
 :geo/map-error 
 :=> #(get-in % [:errors :api :geo]))

(reg-sub
 :geo/weather-data
 :=> #(get-in % [:data :api :weather]))

(reg-sub
 :city/movie-data
 :=> #(get-in % [:data :api :movies]))

(reg-sub
 :movies/basic-info
 :<- [:city/movie-data]
 :=> #(for [movie (:results %)]
        (select-keys movie [:title :release_date :popularity])))

(reg-sub
 :app/current-route
 :-> :current-route)

(reg-sub
 :app/movies.sort-key
 :=> #(get-in % [:sort :movies]))

(reg-sub
 :movies/sorted
 :<- [:movies/basic-info]
 :<- [:app/movies.sort-key]
 (fn [[movies sort-key] _] (if (some? sort-key) (sort-by (keyword sort-key) movies) movies)))