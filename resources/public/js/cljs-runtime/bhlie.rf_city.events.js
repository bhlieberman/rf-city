goog.provide('bhlie.rf_city.events');
goog.scope(function(){
  bhlie.rf_city.events.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$googlemaps$js_api_loader$dist$index_umd=shadow.js.require("module$node_modules$$googlemaps$js_api_loader$dist$index_umd", {});
/**
 * @define {string}
 */
bhlie.rf_city.events.GOOG_MAPS_KEY = goog.define("bhlie.rf_city.events.GOOG_MAPS_KEY","");
/**
 * @define {string}
 */
bhlie.rf_city.events.CITY_KEY = goog.define("bhlie.rf_city.events.CITY_KEY","");
/**
 * @define {string}
 */
bhlie.rf_city.events.WEATHER_KEY = goog.define("bhlie.rf_city.events.WEATHER_KEY","");
/**
 * @define {string}
 */
bhlie.rf_city.events.MOVIE_KEY = goog.define("bhlie.rf_city.events.MOVIE_KEY","");
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","load-google-maps","config/load-google-maps",-1301242987),(function (_,p__30461){
var vec__30462 = p__30461;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30462,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30462,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"google-maps","google-maps",1481920049),opts], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"google-maps","google-maps",1481920049),(function (p__30465){
var map__30466 = p__30465;
var map__30466__$1 = cljs.core.__destructure_map(map__30466);
var opts = map__30466__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return (new module$node_modules$$googlemaps$js_api_loader$dist$index_umd.Loader(({"apiKey": bhlie.rf_city.events.GOOG_MAPS_KEY, "version": "weekly"}))).load().then((function (_){
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","handle-form-submission","app/handle-form-submission",1628325002),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__30467,p__30468){
var map__30469 = p__30467;
var map__30469__$1 = cljs.core.__destructure_map(map__30469);
var location_iq_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30469__$1,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30469__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30470 = p__30468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30470,(0),null);
var map__30473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30470,(1),null);
var map__30473__$1 = cljs.core.__destructure_map(map__30473);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30473__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30473__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_submitting(db,path,true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://us1.locationiq.com/v1/search.php",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),location_iq_api_key,new cljs.core.Keyword(null,"q","q",689001697),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"destination"),new cljs.core.Keyword(null,"format","format",-1306924766),"json"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-geo-data","data/valid-geo-data",1492361269)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-geo-data","errors/invalid-geo-data",-1682398467)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-geo-data","data/valid-geo-data",1492361269),(function (p__30474,p__30475){
var map__30476 = p__30474;
var map__30476__$1 = cljs.core.__destructure_map(map__30476);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30476__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30477 = p__30475;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30477,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30477,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30477,(2),null);
var map__30480 = cljs.core.first(data);
var map__30480__$1 = cljs.core.__destructure_map(map__30480);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30480__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30480__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30480__$1,new cljs.core.Keyword(null,"display_name","display_name",-1494335013));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_server_message(fork.re_frame.set_submitting(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null),data),path,false),path,"Map Lookup succeeded!"),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","maps","data/maps",-1712408836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","weather","data/weather",1317253374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","movies","data/movies",-250887080),display_name], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-geo-data","errors/invalid-geo-data",-1682398467),(function (db,p__30481){
var vec__30482 = p__30481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30482,(0),null);
var vec__30485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30482,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30485,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30485,(1),null);
return fork.re_frame.set_server_message(fork.re_frame.set_submitting(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null),error),path,false),path,"Map Lookup failed!");
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629),(function (coeffects){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffects,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925),bhlie.rf_city.events.CITY_KEY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573),bhlie.rf_city.events.WEATHER_KEY,new cljs.core.Keyword(null,"moviedb-api-key","moviedb-api-key",886455078),bhlie.rf_city.events.MOVIE_KEY,new cljs.core.Keyword(null,"goog-maps-api-key","goog-maps-api-key",403573553),bhlie.rf_city.events.GOOG_MAPS_KEY], 0));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","save-current-location","app/save-current-location",2067143454),(function (db,p__30488){
var vec__30489 = p__30488;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30489,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30489,(1),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30489,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-loc","current-loc",243720301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","maps","data/maps",-1712408836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__30498,p__30499){
var map__30500 = p__30498;
var map__30500__$1 = cljs.core.__destructure_map(map__30500);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30500__$1,new cljs.core.Keyword(null,"db","db",993250759));
var location_iq_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30500__$1,new cljs.core.Keyword(null,"location-iq-api-key","location-iq-api-key",2015735925));
var vec__30501 = p__30499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30501,(0),null);
var vec__30504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30501,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30504,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30504,(1),null);
var map_uri = ["https://maps.locationiq.com/v3/staticmap?key=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_iq_api_key),"&center=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),"&zoom=18"].join('');
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"map","map",1371690461),map_uri)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","weather","data/weather",1317253374),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__30520,p__30521){
var map__30522 = p__30520;
var map__30522__$1 = cljs.core.__destructure_map(map__30522);
var weatherbit_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30522__$1,new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573));
var vec__30523 = p__30521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30523,(0),null);
var vec__30526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30523,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30526,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30526,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.weatherbit.io/v2.0/forecast/daily",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"key","key",-1516042587),weatherbit_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-weather-data","data/valid-weather-data",-2122338622)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295)], null)], null)], null);
}));
re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-weather","get-weather",2141418122),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__30535,p__30536){
var map__30541 = p__30535;
var map__30541__$1 = cljs.core.__destructure_map(map__30541);
var weatherbit_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30541__$1,new cljs.core.Keyword(null,"weatherbit-api-key","weatherbit-api-key",1149901573));
var vec__30542 = p__30536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30542,(0),null);
var vec__30545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30542,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://api.weatherbit.io/v2.0/forecast/daily",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"key","key",-1516042587),weatherbit_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295)], null)], null)], null);
}),(function (p__30559,p__30560){
var map__30561 = p__30559;
var map__30561__$1 = cljs.core.__destructure_map(map__30561);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30562 = p__30560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30562,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30562,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),data)], null);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("data","movies","data/movies",-250887080),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("config","api-keys","config/api-keys",224975629))], null),(function (p__30584,p__30585){
var map__30587 = p__30584;
var map__30587__$1 = cljs.core.__destructure_map(map__30587);
var moviedb_api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30587__$1,new cljs.core.Keyword(null,"moviedb-api-key","moviedb-api-key",886455078));
var vec__30588 = p__30585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.themoviedb.org/3/search/movie",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"api_key","api_key",-1567758224),moviedb_api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","valid-movie-data","data/valid-movie-data",791780264)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","invalid-movie-data","errors/invalid-movie-data",-330310500)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-movie-data","data/valid-movie-data",791780264),(function (db,p__30595){
var vec__30596 = p__30595;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-movie-data","errors/invalid-movie-data",-330310500),(function (db,p__30599){
var vec__30600 = p__30599;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","valid-weather-data","data/valid-weather-data",-2122338622),(function (db,p__30603){
var vec__30604 = p__30603;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("errors","invalid-weather-data","errors/invalid-weather-data",-200973295),(function (db,p__30607){
var vec__30608 = p__30607;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30608,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30608,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","initialize-app","config/initialize-app",-1648013668),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","geolocation-enabled?","config/geolocation-enabled?",840354214)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","navigated","app/navigated",540990475),(function (p__30611,p__30612){
var map__30613 = p__30611;
var map__30613__$1 = cljs.core.__destructure_map(map__30613);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30614 = p__30612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30614,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30614,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"active-links","active-links",1849958377),old_match], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"active-links","active-links",1849958377),(function (l){
var link_name = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(l));
var li = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30617_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(link_name,p1__30617_SHARP_.textContent);
}),document.querySelectorAll("#route-link"));
var G__30618 = li;
var G__30618__$1 = (((G__30618 == null))?null:cljs.core.first(G__30618));
var G__30618__$2 = (((G__30618__$1 == null))?null:G__30618__$1.classList);
if((G__30618__$2 == null)){
return null;
} else {
var G__30619 = G__30618__$2;
G__30619.remove("bg-pink-200");

G__30619.remove("border-pink-100");

G__30619.remove("rounded-lg");

G__30619.remove("shadow-lg");

G__30619.remove("p-3");

return G__30619;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","push-state","events/push-state",1594240717),(function (_,p__30620){
var vec__30621 = p__30620;
var seq__30622 = cljs.core.seq(vec__30621);
var first__30623 = cljs.core.first(seq__30622);
var seq__30622__$1 = cljs.core.next(seq__30622);
var ___$1 = first__30623;
var route = seq__30622__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("movies","sort-key","movies/sort-key",-1942435516),(function (db,p__30624){
var vec__30625 = p__30624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30625,(0),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30625,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),param);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291),(function (_,___$1){
var links = document.getElementsByTagName("li");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight-active-links","highlight-active-links",2041615393),links], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"highlight-active-links","highlight-active-links",2041615393),(function (links){
var seq__30628 = cljs.core.seq(links);
var chunk__30629 = null;
var count__30630 = (0);
var i__30631 = (0);
while(true){
if((i__30631 < count__30630)){
var link = chunk__30629.cljs$core$IIndexed$_nth$arity$2(null,i__30631);
link.addEventListener("click",((function (seq__30628,chunk__30629,count__30630,i__30631,link){
return (function (e){
var G__30636 = e.currentTarget.classList;
G__30636.add("bg-pink-200");

G__30636.add("border-pink-100");

G__30636.add("rounded-lg");

G__30636.add("shadow-lg");

G__30636.add("p-3");

return G__30636;
});})(seq__30628,chunk__30629,count__30630,i__30631,link))
);


var G__30638 = seq__30628;
var G__30639 = chunk__30629;
var G__30640 = count__30630;
var G__30641 = (i__30631 + (1));
seq__30628 = G__30638;
chunk__30629 = G__30639;
count__30630 = G__30640;
i__30631 = G__30641;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30628);
if(temp__5804__auto__){
var seq__30628__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30628__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30628__$1);
var G__30642 = cljs.core.chunk_rest(seq__30628__$1);
var G__30643 = c__5568__auto__;
var G__30644 = cljs.core.count(c__5568__auto__);
var G__30645 = (0);
seq__30628 = G__30642;
chunk__30629 = G__30643;
count__30630 = G__30644;
i__30631 = G__30645;
continue;
} else {
var link = cljs.core.first(seq__30628__$1);
link.addEventListener("click",((function (seq__30628,chunk__30629,count__30630,i__30631,link,seq__30628__$1,temp__5804__auto__){
return (function (e){
var G__30637 = e.currentTarget.classList;
G__30637.add("bg-pink-200");

G__30637.add("border-pink-100");

G__30637.add("rounded-lg");

G__30637.add("shadow-lg");

G__30637.add("p-3");

return G__30637;
});})(seq__30628,chunk__30629,count__30630,i__30631,link,seq__30628__$1,temp__5804__auto__))
);


var G__30646 = cljs.core.next(seq__30628__$1);
var G__30647 = null;
var G__30648 = (0);
var G__30649 = (0);
seq__30628 = G__30646;
chunk__30629 = G__30647;
count__30630 = G__30648;
i__30631 = G__30649;
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
