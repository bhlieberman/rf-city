goog.provide('bhlie.rf_city.events');
goog.scope(function(){
  bhlie.rf_city.events.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$googlemaps$js_api_loader$dist$index_umd=shadow.js.require("module$node_modules$$googlemaps$js_api_loader$dist$index_umd", {});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","load-google-maps","config/load-google-maps",-1301242987),(function (_,p__41457){
var vec__41458 = p__41457;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41458,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41458,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"google-maps","google-maps",1481920049),opts], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"google-maps","google-maps",1481920049),(function (p__41461){
var map__41462 = p__41461;
var map__41462__$1 = cljs.core.__destructure_map(map__41462);
var opts = map__41462__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return (new module$node_modules$$googlemaps$js_api_loader$dist$index_umd.Loader(({"apiKey": bhlie.rf_city.events.goog$module$goog$object.get(CLOSURE_DEFINES,"bhlie.rf_city.goog_maps_key"), "version": "weekly"}))).load().then((function (_){
return google.maps.importLibrary("maps").then((function (lib){
var Map = bhlie.rf_city.events.goog$module$goog$object.get(lib,"Map");
var WebGLOverlayView = bhlie.rf_city.events.goog$module$goog$object.get(lib,"WebGLOverlayView");
var BicyclingLayer = bhlie.rf_city.events.goog$module$goog$object.get(lib,"BicyclingLayer");
var bike_layer = (new BicyclingLayer());
bhlie.rf_city.webgl.init_map((new Map(canvas,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lon], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom], null)))),(new WebGLOverlayView()),({"tilt": (0), "heading": (0), "zoom": (18), "center": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lon], null), "mapId": "15431d2b469f209e", "disableDefaultUI": true, "gestureHandling": "none", "keyboardShortcuts": false}));

return bike_layer.setMap((new Map(canvas,({"center": ({"lat": lat, "lng": lon}), "zoom": zoom}))));
}));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","handle-form-submission","app/handle-form-submission",1628325002),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__41463,p__41464){
var map__41465 = p__41463;
var map__41465__$1 = cljs.core.__destructure_map(map__41465);
var location_iq_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41466 = p__41464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41466,(0),null);
var map__41469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41466,(1),null);
var map__41469__$1 = cljs.core.__destructure_map(map__41469);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_submitting(db,path,true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://us1.locationiq.com/v1/search.php",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),location_iq_api_key,new cljs.core.Keyword(null,"q","q",689001697),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"destination"),new cljs.core.Keyword(null,"format","format",-1306924766),"json"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-geo-data","data/valid-geo-data",1492361269)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-geo-data","errors/invalid-geo-data",-1682398467)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-geo-data","data/valid-geo-data",1492361269),(function (p__41470,p__41471){
var map__41472 = p__41470;
var map__41472__$1 = cljs.core.__destructure_map(map__41472);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41473 = p__41471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(2),null);
var map__41476 = cljs.core.first(data);
var map__41476__$1 = cljs.core.__destructure_map(map__41476);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"display_name","display_name",-1494335013));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_server_message(fork.re_frame.set_submitting(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null),data),path,false),path,"Map Lookup succeeded!"),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","maps","data/maps",-1712408836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","weather","data/weather",1317253374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","movies","data/movies",-250887080),display_name], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-geo-data","errors/invalid-geo-data",-1682398467),(function (db,p__41477){
var vec__41478 = p__41477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41478,(0),null);
var vec__41481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41478,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41481,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41481,(1),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","save-current-location","app/save-current-location",2067143454),(function (db,p__41484){
var vec__41485 = p__41484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(1),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-loc","current-loc",243720301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","maps","data/maps",-1712408836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__41488,p__41489){
var map__41490 = p__41488;
var map__41490__$1 = cljs.core.__destructure_map(map__41490);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,new cljs.core.Keyword(null,"db","db",993250759));
var location_iq_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925));
var vec__41491 = p__41489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41491,(0),null);
var vec__41494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41491,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41494,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41494,(1),null);
var map_uri = ["https://maps.locationiq.com/v3/staticmap?key=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_iq_api_key),"&center=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),"&zoom=18"].join('');
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"map","map",1371690461),map_uri)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","weather","data/weather",1317253374),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__41497,p__41498){
var map__41499 = p__41497;
var map__41499__$1 = cljs.core.__destructure_map(map__41499);
var weatherbit_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41499__$1,new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573));
var vec__41500 = p__41498;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500,(0),null);
var vec__41503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41503,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41503,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.weatherbit.io/v2.0/forecast/daily",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"key","key",-1516042587),weatherbit_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-weather-data","data/valid-weather-data",-2122338622)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295)], null)], null)], null);
}));
re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-weather","get-weather",2141418122),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__41506,p__41507){
var map__41508 = p__41506;
var map__41508__$1 = cljs.core.__destructure_map(map__41508);
var weatherbit_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573));
var vec__41509 = p__41507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41509,(0),null);
var vec__41512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41509,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://api.weatherbit.io/v2.0/forecast/daily",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"key","key",-1516042587),weatherbit_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295)], null)], null)], null);
}),(function (p__41515,p__41516){
var map__41517 = p__41515;
var map__41517__$1 = cljs.core.__destructure_map(map__41517);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41518 = p__41516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),data)], null);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","movies","data/movies",-250887080),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__41521,p__41522){
var map__41523 = p__41521;
var map__41523__$1 = cljs.core.__destructure_map(map__41523);
var moviedb_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41523__$1,new cljs.core.Keyword(null,"moviedb-api-key","moviedb-api-key",886455078));
var vec__41524 = p__41522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41524,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41524,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.themoviedb.org/3/search/movie",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"api_key","api_key",-1567758224),moviedb_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-movie-data","data/valid-movie-data",791780264)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-movie-data","errors/invalid-movie-data",-330310500)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-movie-data","data/valid-movie-data",791780264),(function (db,p__41527){
var vec__41528 = p__41527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-movie-data","errors/invalid-movie-data",-330310500),(function (db,p__41531){
var vec__41532 = p__41531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41532,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41532,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-weather-data","data/valid-weather-data",-2122338622),(function (db,p__41535){
var vec__41536 = p__41535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41536,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41536,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295),(function (db,p__41539){
var vec__41540 = p__41539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","initialize-app","config/initialize-app",-1648013668),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","geolocation-enabled?","config/geolocation-enabled?",840354214)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","navigated","app/navigated",540990475),(function (p__41543,p__41544){
var map__41545 = p__41543;
var map__41545__$1 = cljs.core.__destructure_map(map__41545);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41545__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41546 = p__41544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41546,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41546,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"active-links","active-links",1849958377),old_match], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"active-links","active-links",1849958377),(function (l){
var link_name = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(l));
var li = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41549_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(link_name,p1__41549_SHARP_.textContent);
}),document.querySelectorAll("#route-link"));
var G__41550 = li;
var G__41550__$1 = (((G__41550 == null))?null:cljs.core.first(G__41550));
var G__41550__$2 = (((G__41550__$1 == null))?null:G__41550__$1.classList);
if((G__41550__$2 == null)){
return null;
} else {
var G__41551 = G__41550__$2;
G__41551.remove("bg-pink-200");

G__41551.remove("border-pink-100");

G__41551.remove("rounded-lg");

G__41551.remove("shadow-lg");

G__41551.remove("p-3");

return G__41551;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","push-state","events/push-state",1594240717),(function (_,p__41552){
var vec__41553 = p__41552;
var seq__41554 = cljs.core.seq(vec__41553);
var first__41555 = cljs.core.first(seq__41554);
var seq__41554__$1 = cljs.core.next(seq__41554);
var ___$1 = first__41555;
var route = seq__41554__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("movies","sort-key","movies/sort-key",-1942435516),(function (db,p__41556){
var vec__41557 = p__41556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557,(0),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),param);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291),(function (_,___$1){
var links = document.getElementsByTagName("li");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight-active-links","highlight-active-links",2041615393),links], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"highlight-active-links","highlight-active-links",2041615393),(function (links){
var seq__41560 = cljs.core.seq(links);
var chunk__41561 = null;
var count__41562 = (0);
var i__41563 = (0);
while(true){
if((i__41563 < count__41562)){
var link = chunk__41561.cljs$core$IIndexed$_nth$arity$2(null,i__41563);
link.addEventListener("click",((function (seq__41560,chunk__41561,count__41562,i__41563,link){
return (function (e){
var G__41566 = e.currentTarget.classList;
G__41566.add("bg-pink-200");

G__41566.add("border-pink-100");

G__41566.add("rounded-lg");

G__41566.add("shadow-lg");

G__41566.add("p-3");

return G__41566;
});})(seq__41560,chunk__41561,count__41562,i__41563,link))
);


var G__41568 = seq__41560;
var G__41569 = chunk__41561;
var G__41570 = count__41562;
var G__41571 = (i__41563 + (1));
seq__41560 = G__41568;
chunk__41561 = G__41569;
count__41562 = G__41570;
i__41563 = G__41571;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41560);
if(temp__5804__auto__){
var seq__41560__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41560__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41560__$1);
var G__41572 = cljs.core.chunk_rest(seq__41560__$1);
var G__41573 = c__5568__auto__;
var G__41574 = cljs.core.count(c__5568__auto__);
var G__41575 = (0);
seq__41560 = G__41572;
chunk__41561 = G__41573;
count__41562 = G__41574;
i__41563 = G__41575;
continue;
} else {
var link = cljs.core.first(seq__41560__$1);
link.addEventListener("click",((function (seq__41560,chunk__41561,count__41562,i__41563,link,seq__41560__$1,temp__5804__auto__){
return (function (e){
var G__41567 = e.currentTarget.classList;
G__41567.add("bg-pink-200");

G__41567.add("border-pink-100");

G__41567.add("rounded-lg");

G__41567.add("shadow-lg");

G__41567.add("p-3");

return G__41567;
});})(seq__41560,chunk__41561,count__41562,i__41563,link,seq__41560__$1,temp__5804__auto__))
);


var G__41576 = cljs.core.next(seq__41560__$1);
var G__41577 = null;
var G__41578 = (0);
var G__41579 = (0);
seq__41560 = G__41576;
chunk__41561 = G__41577;
count__41562 = G__41578;
i__41563 = G__41579;
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
