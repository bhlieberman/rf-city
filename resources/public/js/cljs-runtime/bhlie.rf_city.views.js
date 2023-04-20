goog.provide('bhlie.rf_city.views');
bhlie.rf_city.views.get_city_info = (function bhlie$rf_city$views$get_city_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"user-info-entry","user-info-entry",-1962190632)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.re_frame.form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),"map-lookup",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-lookup","map-lookup",-306152990)], null),new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","handle-form-submission","app/handle-form-submission",1628325002),e], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","push-state","events/push-state",1594240717),new cljs.core.Keyword(null,"maps","maps",-1711561134)], null));
})], null),(function (p__33337){
var map__33338 = p__33337;
var map__33338__$1 = cljs.core.__destructure_map(map__33338);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"values","values",372645556));
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var handle_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264));
var submitting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"submitting?","submitting?",1281507942));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"travel-info","travel-info",283476343),new cljs.core.Keyword(null,"id","id",-1388402092),form_id,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"name","name",1843675177),"destination",new cljs.core.Keyword(null,"value","value",305978217),(values.cljs$core$IFn$_invoke$arity$1 ? values.cljs$core$IFn$_invoke$arity$1("destination") : values.call(null,"destination")),new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),handle_blur,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Destination"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"From: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-from","date-from",274516948),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"min","min",444991522),"2023-04-11"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"To: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-to","date-to",827417363),new cljs.core.Keyword(null,"type","type",1174270348),"date"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"submit-search","submit-search",-1974879325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submitting_QMARK_], null),"Get trip info"], null)], null);
})], null)], null);
});
bhlie.rf_city.views.gmap_inner = (function bhlie$rf_city$views$gmap_inner(){
var map__33339 = reagent.core.props(reagent.core.current_component());
var map__33339__$1 = cljs.core.__destructure_map(map__33339);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map-canvas","div#map-canvas",1711905736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var canvas = goog.dom.getElement("map-canvas");
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","load-google-maps","config/load-google-maps",-1301242987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(lat),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(lon),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(13)], null)], null));
})], null));
});
bhlie.rf_city.views.gmap_outer = (function bhlie$rf_city$views$gmap_outer(){
var pos = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","live-map-coords","geo/live-map-coords",460554314)], null)));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bhlie.rf_city.views.gmap_inner,pos], null);
});
});
bhlie.rf_city.views.map_tile = (function bhlie$rf_city$views$map_tile(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"map-container","map-container",1333465834)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","static-map","geo/static-map",1881875803)], null))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"static-map","static-map",1882502188)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bhlie.rf_city.views.gmap_outer], null)], null);
});
bhlie.rf_city.views.city_tile = (function bhlie$rf_city$views$city_tile(){
var map__33340 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","city-top-match","geo/city-top-match",-1394810736)], null)));
var map__33340__$1 = cljs.core.__destructure_map(map__33340);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33340__$1,new cljs.core.Keyword(null,"display_name","display_name",-1494335013));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33340__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33340__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var err = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","map-error","geo/map-error",-923324150)], null)));
if((!((err == null)))){
throw (new Error("API is busted"));
} else {
if((!(((function (){var or__5045__auto__ = lat;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lon;
}
})() == null)))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-info","city-info",1621309463)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),display_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bhlie.rf_city.views.map_tile], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Latitude: ",lat], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Longitude: ",lon], null)], null);
} else {
return null;
}
}
});
bhlie.rf_city.views.movies_tile = (function bhlie$rf_city$views$movies_tile(){
var movies = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movies","sorted","movies/sorted",-1967615304)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"movies","movies",-255929346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Movies about this city"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sort-by"], null),"Sort by: "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"sort-by",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"select-filter","select-filter",-28495374),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movies","sort-key","movies/sort-key",-1942435516),e.target.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"popularity"], null),"Popularity"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"title"], null),"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"release_date"], null),"Release date"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"movies-list","movies-list",-727945041)], null)], null),(function (){var iter__5523__auto__ = (function bhlie$rf_city$views$movies_tile_$_iter__33341(s__33342){
return (new cljs.core.LazySeq(null,(function (){
var s__33342__$1 = s__33342;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33342__$1);
if(temp__5804__auto__){
var s__33342__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33342__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33342__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33344 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33343 = (0);
while(true){
if((i__33343 < size__5522__auto__)){
var map__33345 = cljs.core._nth(c__5521__auto__,i__33343);
var map__33345__$1 = cljs.core.__destructure_map(map__33345);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33345__$1,new cljs.core.Keyword(null,"title","title",636505583));
var release_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33345__$1,new cljs.core.Keyword(null,"release_date","release_date",-1770099066));
var popularity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33345__$1,new cljs.core.Keyword(null,"popularity","popularity",924297410));
cljs.core.chunk_append(b__33344,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"movie-each","movie-each",-490159196)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Release date: ",release_date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Rating: ",popularity], null)], null));

var G__33353 = (i__33343 + (1));
i__33343 = G__33353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33344),bhlie$rf_city$views$movies_tile_$_iter__33341(cljs.core.chunk_rest(s__33342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33344),null);
}
} else {
var map__33346 = cljs.core.first(s__33342__$2);
var map__33346__$1 = cljs.core.__destructure_map(map__33346);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"title","title",636505583));
var release_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"release_date","release_date",-1770099066));
var popularity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"popularity","popularity",924297410));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"movie-each","movie-each",-490159196)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Release date: ",release_date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Rating: ",popularity], null)], null),bhlie$rf_city$views$movies_tile_$_iter__33341(cljs.core.rest(s__33342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(movies);
})())], null);
});
bhlie.rf_city.views.weather_tile = (function bhlie$rf_city$views$weather_tile(){
var weather = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","weather-data","geo/weather-data",-663790040)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"seven-day-forecast","seven-day-forecast",-313228023)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Seven-day weather forecast"], null),(function (){var iter__5523__auto__ = (function bhlie$rf_city$views$weather_tile_$_iter__33347(s__33348){
return (new cljs.core.LazySeq(null,(function (){
var s__33348__$1 = s__33348;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33348__$1);
if(temp__5804__auto__){
var s__33348__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33348__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33348__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33350 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33349 = (0);
while(true){
if((i__33349 < size__5522__auto__)){
var map__33351 = cljs.core._nth(c__5521__auto__,i__33349);
var map__33351__$1 = cljs.core.__destructure_map(map__33351);
var min_temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33351__$1,new cljs.core.Keyword(null,"min_temp","min_temp",-1546007351));
var max_temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33351__$1,new cljs.core.Keyword(null,"max_temp","max_temp",-921096952));
var weather__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33351__$1,new cljs.core.Keyword(null,"weather","weather",1320452344));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33351__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var desc = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(weather__$1);
cljs.core.chunk_append(b__33350,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"daily-forecast","daily-forecast",127842942)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date","date",-1463434462)], null),datetime], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Low: ",min_temp,["\u00B0","C"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"High ",max_temp,["\u00B0","C"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),desc], null)], null));

var G__33354 = (i__33349 + (1));
i__33349 = G__33354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33350),bhlie$rf_city$views$weather_tile_$_iter__33347(cljs.core.chunk_rest(s__33348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33350),null);
}
} else {
var map__33352 = cljs.core.first(s__33348__$2);
var map__33352__$1 = cljs.core.__destructure_map(map__33352);
var min_temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"min_temp","min_temp",-1546007351));
var max_temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"max_temp","max_temp",-921096952));
var weather__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"weather","weather",1320452344));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var desc = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(weather__$1);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"daily-forecast","daily-forecast",127842942)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date","date",-1463434462)], null),datetime], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Low: ",min_temp,["\u00B0","C"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"High ",max_temp,["\u00B0","C"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),desc], null)], null),bhlie$rf_city$views$weather_tile_$_iter__33347(cljs.core.rest(s__33348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(weather));
})()], null);
});
bhlie.rf_city.views.current_location = (function bhlie$rf_city$views$current_location(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"user-loc","user-loc",-114759056)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#current-loc","p#current-loc",1440554970),["Your current location is: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","current-location","app/current-location",-1897736165)], null))))].join('')], null)], null);
});
bhlie.rf_city.views.home = (function bhlie$rf_city$views$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"welcome-msg","welcome-msg",-1118426379)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons8-globe-30.png",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"globe","globe",662172797)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to City Explorer!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here you can explore things to do in your favorite cities around the globe! Plan a trip in the search tab, or view maps, movies, or weather data."], null)], null)], null);
});
bhlie.rf_city.views.city_router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),bhlie.rf_city.views.home,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Home",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__33355__delegate = function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291)], null));
};
var G__33355 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__33356__i = 0, G__33356__a = new Array(arguments.length -  0);
while (G__33356__i < G__33356__a.length) {G__33356__a[G__33356__i] = arguments[G__33356__i + 0]; ++G__33356__i;}
  _ = new cljs.core.IndexedSeq(G__33356__a,0,null);
} 
return G__33355__delegate.call(this,_);};
G__33355.cljs$lang$maxFixedArity = 0;
G__33355.cljs$lang$applyTo = (function (arglist__33357){
var _ = cljs.core.seq(arglist__33357);
return G__33355__delegate(_);
});
G__33355.cljs$core$IFn$_invoke$arity$variadic = G__33355__delegate;
return G__33355;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"view","view",1247994814),bhlie.rf_city.views.get_city_info,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Search",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__33360__delegate = function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291)], null));
};
var G__33360 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__33361__i = 0, G__33361__a = new Array(arguments.length -  0);
while (G__33361__i < G__33361__a.length) {G__33361__a[G__33361__i] = arguments[G__33361__i + 0]; ++G__33361__i;}
  _ = new cljs.core.IndexedSeq(G__33361__a,0,null);
} 
return G__33360__delegate.call(this,_);};
G__33360.cljs$lang$maxFixedArity = 0;
G__33360.cljs$lang$applyTo = (function (arglist__33362){
var _ = cljs.core.seq(arglist__33362);
return G__33360__delegate(_);
});
G__33360.cljs$core$IFn$_invoke$arity$variadic = G__33360__delegate;
return G__33360;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maps",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maps","maps",-1711561134),new cljs.core.Keyword(null,"view","view",1247994814),bhlie.rf_city.views.city_tile,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Maps",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__33367__delegate = function (_){
return cljs.core.List.EMPTY;
};
var G__33367 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__33368__i = 0, G__33368__a = new Array(arguments.length -  0);
while (G__33368__i < G__33368__a.length) {G__33368__a[G__33368__i] = arguments[G__33368__i + 0]; ++G__33368__i;}
  _ = new cljs.core.IndexedSeq(G__33368__a,0,null);
} 
return G__33367__delegate.call(this,_);};
G__33367.cljs$lang$maxFixedArity = 0;
G__33367.cljs$lang$applyTo = (function (arglist__33369){
var _ = cljs.core.seq(arglist__33369);
return G__33367__delegate(_);
});
G__33367.cljs$core$IFn$_invoke$arity$variadic = G__33367__delegate;
return G__33367;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movies",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"movies","movies",-255929346),new cljs.core.Keyword(null,"view","view",1247994814),bhlie.rf_city.views.movies_tile,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Movies",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__33370__delegate = function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291)], null));
};
var G__33370 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__33371__i = 0, G__33371__a = new Array(arguments.length -  0);
while (G__33371__i < G__33371__a.length) {G__33371__a[G__33371__i] = arguments[G__33371__i + 0]; ++G__33371__i;}
  _ = new cljs.core.IndexedSeq(G__33371__a,0,null);
} 
return G__33370__delegate.call(this,_);};
G__33370.cljs$lang$maxFixedArity = 0;
G__33370.cljs$lang$applyTo = (function (arglist__33372){
var _ = cljs.core.seq(arglist__33372);
return G__33370__delegate(_);
});
G__33370.cljs$core$IFn$_invoke$arity$variadic = G__33370__delegate;
return G__33370;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weather",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"view","view",1247994814),bhlie.rf_city.views.weather_tile,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Weather",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__33373__delegate = function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","highlight-active-link","app/highlight-active-link",-91320291)], null));
};
var G__33373 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__33374__i = 0, G__33374__a = new Array(arguments.length -  0);
while (G__33374__i < G__33374__a.length) {G__33374__a[G__33374__i] = arguments[G__33374__i + 0]; ++G__33374__i;}
  _ = new cljs.core.IndexedSeq(G__33374__a,0,null);
} 
return G__33373__delegate.call(this,_);};
G__33373.cljs$lang$maxFixedArity = 0;
G__33373.cljs$lang$applyTo = (function (arglist__33375){
var _ = cljs.core.seq(arglist__33375);
return G__33373__delegate(_);
});
G__33373.cljs$core$IFn$_invoke$arity$variadic = G__33373__delegate;
return G__33373;
})()
], null)], null)], null)], null)], null));

//# sourceMappingURL=bhlie.rf_city.views.js.map
