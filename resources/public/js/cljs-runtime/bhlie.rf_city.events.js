goog.provide('bhlie.rf_city.events');
goog.scope(function(){
  bhlie.rf_city.events.goog$module$goog$object = goog.module.get('goog.object');
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","load-google-maps","config/load-google-maps",-1301242987),(function (_,p__32864){
var vec__32865 = p__32864;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32865,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32865,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"google-maps","google-maps",1481920049),opts], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"google-maps","google-maps",1481920049),(function (p__32868){
var map__32869 = p__32868;
var map__32869__$1 = cljs.core.__destructure_map(map__32869);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32869__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32869__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32869__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32869__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return google.maps.importLibrary("maps").then((function (lib){
var Map = bhlie.rf_city.events.goog$module$goog$object.get(lib,"Map");
var BicyclingLayer = bhlie.rf_city.events.goog$module$goog$object.get(lib,"BicyclingLayer");
var bike_layer = (new BicyclingLayer());
return bike_layer.setMap((new Map(canvas,({"center": ({"lat": lat, "lng": lon}), "zoom": zoom}))));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","show-google-map","app/show-google-map",2068572992),(function (p__32870,p__32871){
var map__32872 = p__32870;
var map__32872__$1 = cljs.core.__destructure_map(map__32872);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32872__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32873 = p__32871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32873,(0),null);
var map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32873,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"goog-map","goog-map",356359339),map)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","handle-form-submission","app/handle-form-submission",1628325002),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__32876,p__32877){
var map__32878 = p__32876;
var map__32878__$1 = cljs.core.__destructure_map(map__32878);
var location_iq_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32878__$1,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32878__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32879 = p__32877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32879,(0),null);
var map__32882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32879,(1),null);
var map__32882__$1 = cljs.core.__destructure_map(map__32882);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32882__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32882__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_submitting(db,path,true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://us1.locationiq.com/v1/search.php",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),location_iq_api_key,new cljs.core.Keyword(null,"q","q",689001697),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"destination"),new cljs.core.Keyword(null,"format","format",-1306924766),"json"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-geo-data","data/valid-geo-data",1492361269)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-geo-data","errors/invalid-geo-data",-1682398467)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-geo-data","data/valid-geo-data",1492361269),(function (p__32883,p__32884){
var map__32885 = p__32883;
var map__32885__$1 = cljs.core.__destructure_map(map__32885);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32885__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32886 = p__32884;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32886,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32886,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32886,(2),null);
var map__32889 = cljs.core.first(data);
var map__32889__$1 = cljs.core.__destructure_map(map__32889);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,new cljs.core.Keyword(null,"display_name","display_name",-1494335013));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_server_message(fork.re_frame.set_submitting(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null),data),path,false),path,"Map Lookup succeeded!"),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","maps","data/maps",-1712408836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","weather","data/weather",1317253374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","movies","data/movies",-250887080),display_name], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-geo-data","errors/invalid-geo-data",-1682398467),(function (db,p__32890){
var vec__32891 = p__32890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32891,(0),null);
var vec__32894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32891,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32894,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32894,(1),null);
return fork.re_frame.set_server_message(fork.re_frame.set_submitting(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null),error),path,false),path,"Map Lookup failed!");
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629),(function (coeffects){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffects,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925),bhlie.rf_city.events.goog$module$goog$object.get(CLOSURE_DEFINES,"bhlie.rf_city.city_key"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573),bhlie.rf_city.events.goog$module$goog$object.get(CLOSURE_DEFINES,"bhlie.rf_city.weather_key"),new cljs.core.Keyword(null,"moviedb-api-key","moviedb-api-key",886455078),bhlie.rf_city.events.goog$module$goog$object.get(CLOSURE_DEFINES,"bhlie.rf_city.movie_key"),new cljs.core.Keyword(null,"goog-maps-api-key","goog-maps-api-key",403573553),bhlie.rf_city.events.goog$module$goog$object.get(CLOSURE_DEFINES,"bhlie.rf_city.goog_maps_key")], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","geolocation-enabled?","config/geolocation-enabled?",840354214),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-location","current-location",-1897906618),null], null);
}));
bhlie.rf_city.events.get_current_position = (function bhlie$rf_city$events$get_current_position(){
return (new Promise((function (resolve,reject){
return window.navigator.geolocation.getCurrentPosition(resolve,reject);
})));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"current-location","current-location",-1897906618),(function (_){
return bhlie.rf_city.events.get_current_position().then((function (data){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","save-current-location","app/save-current-location",2067143454),data.coords.latitude,data.coords.longitude], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","save-current-location","app/save-current-location",2067143454),(function (db,p__32897){
var vec__32898 = p__32897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32898,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32898,(1),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32898,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-loc","current-loc",243720301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","maps","data/maps",-1712408836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__32901,p__32902){
var map__32903 = p__32901;
var map__32903__$1 = cljs.core.__destructure_map(map__32903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var location_iq_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32903__$1,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925));
var vec__32904 = p__32902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32904,(0),null);
var vec__32907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32904,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(1),null);
var map_uri = ["https://maps.locationiq.com/v3/staticmap?key=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_iq_api_key),"&center=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),"&zoom=18"].join('');
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"map","map",1371690461),map_uri)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","weather","data/weather",1317253374),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__32910,p__32911){
var map__32912 = p__32910;
var map__32912__$1 = cljs.core.__destructure_map(map__32912);
var weatherbit_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32912__$1,new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573));
var vec__32913 = p__32911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32913,(0),null);
var vec__32916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32913,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32916,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32916,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://api.weatherbit.io/v2.0/forecast/daily",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"key","key",-1516042587),weatherbit_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-weather-data","data/valid-weather-data",-2122338622)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295)], null)], null)], null);
}));
re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-weather","get-weather",2141418122),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__32919,p__32920){
var map__32921 = p__32919;
var map__32921__$1 = cljs.core.__destructure_map(map__32921);
var weatherbit_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32921__$1,new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573));
var vec__32922 = p__32920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32922,(0),null);
var vec__32925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32922,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://api.weatherbit.io/v2.0/forecast/daily",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"key","key",-1516042587),weatherbit_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295)], null)], null)], null);
}),(function (p__32928,p__32929){
var map__32930 = p__32928;
var map__32930__$1 = cljs.core.__destructure_map(map__32930);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32930__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32931 = p__32929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),data)], null);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","movies","data/movies",-250887080),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__32934,p__32935){
var map__32936 = p__32934;
var map__32936__$1 = cljs.core.__destructure_map(map__32936);
var moviedb_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,new cljs.core.Keyword(null,"moviedb-api-key","moviedb-api-key",886455078));
var vec__32937 = p__32935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.themoviedb.org/3/search/movie",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"api_key","api_key",-1567758224),moviedb_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-movie-data","data/valid-movie-data",791780264)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-movie-data","errors/invalid-movie-data",-330310500)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-movie-data","data/valid-movie-data",791780264),(function (db,p__32940){
var vec__32941 = p__32940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-movie-data","errors/invalid-movie-data",-330310500),(function (db,p__32944){
var vec__32945 = p__32944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32945,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32945,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-weather-data","data/valid-weather-data",-2122338622),(function (db,p__32948){
var vec__32949 = p__32948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32949,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32949,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295),(function (db,p__32952){
var vec__32953 = p__32952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","initialize-app","config/initialize-app",-1648013668),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","geolocation-enabled?","config/geolocation-enabled?",840354214)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","navigated","app/navigated",540990475),(function (p__32956,p__32957){
var map__32958 = p__32956;
var map__32958__$1 = cljs.core.__destructure_map(map__32958);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32958__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32959 = p__32957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32959,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32959,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"active-links","active-links",1849958377),old_match], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"active-links","active-links",1849958377),(function (l){
var link_name = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(l));
var li = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(link_name,p1__32962_SHARP_.textContent);
}),document.querySelectorAll("#route-link"));
var G__32963 = li;
var G__32963__$1 = (((G__32963 == null))?null:cljs.core.first(G__32963));
var G__32963__$2 = (((G__32963__$1 == null))?null:G__32963__$1.classList);
if((G__32963__$2 == null)){
return null;
} else {
var G__32964 = G__32963__$2;
G__32964.remove("bg-pink-200");

G__32964.remove("border-pink-100");

G__32964.remove("rounded-lg");

G__32964.remove("shadow-lg");

G__32964.remove("p-3");

return G__32964;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","push-state","events/push-state",1594240717),(function (_,p__32965){
var vec__32966 = p__32965;
var seq__32967 = cljs.core.seq(vec__32966);
var first__32968 = cljs.core.first(seq__32967);
var seq__32967__$1 = cljs.core.next(seq__32967);
var ___$1 = first__32968;
var route = seq__32967__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("movies","sort-key","movies/sort-key",-1942435516),(function (db,p__32969){
var vec__32970 = p__32969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32970,(0),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32970,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),param);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291),(function (_,___$1){
var links = document.getElementsByTagName("li");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight-active-links","highlight-active-links",2041615393),links], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"highlight-active-links","highlight-active-links",2041615393),(function (links){
var seq__32973 = cljs.core.seq(links);
var chunk__32974 = null;
var count__32975 = (0);
var i__32976 = (0);
while(true){
if((i__32976 < count__32975)){
var link = chunk__32974.cljs$core$IIndexed$_nth$arity$2(null,i__32976);
link.addEventListener("click",((function (seq__32973,chunk__32974,count__32975,i__32976,link){
return (function (e){
var G__32979 = e.currentTarget.classList;
G__32979.add("bg-pink-200");

G__32979.add("border-pink-100");

G__32979.add("rounded-lg");

G__32979.add("shadow-lg");

G__32979.add("p-3");

return G__32979;
});})(seq__32973,chunk__32974,count__32975,i__32976,link))
);


var G__32987 = seq__32973;
var G__32988 = chunk__32974;
var G__32989 = count__32975;
var G__32990 = (i__32976 + (1));
seq__32973 = G__32987;
chunk__32974 = G__32988;
count__32975 = G__32989;
i__32976 = G__32990;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32973);
if(temp__5804__auto__){
var seq__32973__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32973__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32973__$1);
var G__32991 = cljs.core.chunk_rest(seq__32973__$1);
var G__32992 = c__5568__auto__;
var G__32993 = cljs.core.count(c__5568__auto__);
var G__32994 = (0);
seq__32973 = G__32991;
chunk__32974 = G__32992;
count__32975 = G__32993;
i__32976 = G__32994;
continue;
} else {
var link = cljs.core.first(seq__32973__$1);
link.addEventListener("click",((function (seq__32973,chunk__32974,count__32975,i__32976,link,seq__32973__$1,temp__5804__auto__){
return (function (e){
var G__32980 = e.currentTarget.classList;
G__32980.add("bg-pink-200");

G__32980.add("border-pink-100");

G__32980.add("rounded-lg");

G__32980.add("shadow-lg");

G__32980.add("p-3");

return G__32980;
});})(seq__32973,chunk__32974,count__32975,i__32976,link,seq__32973__$1,temp__5804__auto__))
);


var G__32995 = cljs.core.next(seq__32973__$1);
var G__32996 = null;
var G__32997 = (0);
var G__32998 = (0);
seq__32973 = G__32995;
chunk__32974 = G__32996;
count__32975 = G__32997;
i__32976 = G__32998;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=bhlie.rf_city.events.js.map
