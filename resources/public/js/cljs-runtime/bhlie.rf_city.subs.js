goog.provide('bhlie.rf_city.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("geo","static-map","geo/static-map",1881875803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"map","map",1371690461)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("geo","city-info","geo/city-info",1621395272),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32811_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__32811_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("geo","city-top-match","geo/city-top-match",-1394810736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","city-info","geo/city-info",1621395272)], null),new cljs.core.Keyword(null,"=>","=>",1841166128),cljs.core.first], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("geo","live-map-coords","geo/live-map-coords",460554314),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("geo","city-top-match","geo/city-top-match",-1394810736)], null),new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p__32812){
var map__32813 = p__32812;
var map__32813__$1 = cljs.core.__destructure_map(map__32813);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("geo","map-error","geo/map-error",-923324150),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32814_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__32814_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"geo","geo",-2054400503)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("geo","weather-data","geo/weather-data",-663790040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32815_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__32815_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"weather","weather",1320452344)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("city","movie-data","city/movie-data",1202478589),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32816_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__32816_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"movies","movies",-255929346)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("movies","basic-info","movies/basic-info",2089894189),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("city","movie-data","city/movie-data",1202478589)], null),new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32817_SHARP_){
var iter__5523__auto__ = (function bhlie$rf_city$subs$iter__32818(s__32819){
return (new cljs.core.LazySeq(null,(function (){
var s__32819__$1 = s__32819;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32819__$1);
if(temp__5804__auto__){
var s__32819__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32819__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32819__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32821 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32820 = (0);
while(true){
if((i__32820 < size__5522__auto__)){
var movie = cljs.core._nth(c__5521__auto__,i__32820);
cljs.core.chunk_append(b__32821,cljs.core.select_keys(movie,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"release_date","release_date",-1770099066),new cljs.core.Keyword(null,"popularity","popularity",924297410)], null)));

var G__32830 = (i__32820 + (1));
i__32820 = G__32830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32821),bhlie$rf_city$subs$iter__32818(cljs.core.chunk_rest(s__32819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32821),null);
}
} else {
var movie = cljs.core.first(s__32819__$2);
return cljs.core.cons(cljs.core.select_keys(movie,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"release_date","release_date",-1770099066),new cljs.core.Keyword(null,"popularity","popularity",924297410)], null)),bhlie$rf_city$subs$iter__32818(cljs.core.rest(s__32819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(p1__32817_SHARP_));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","current-route","app/current-route",2067564805),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"current-route","current-route",2067529448)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","movies.sort-key","app/movies.sort-key",-517902917),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32822_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__32822_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"movies","movies",-255929346)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("movies","sorted","movies/sorted",-1967615304),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movies","basic-info","movies/basic-info",2089894189)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","movies.sort-key","app/movies.sort-key",-517902917)], null),(function (p__32823,_){
var vec__32824 = p__32823;
var movies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32824,(0),null);
var sort_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32824,(1),null);
if((!((sort_key == null)))){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(sort_key),movies);
} else {
return movies;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("config","current-location","config/current-location",-559890180),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p1__32827_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__32827_SHARP_,new cljs.core.Keyword(null,"current-loc","current-loc",243720301));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","current-location","app/current-location",-1897736165),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","current-location","config/current-location",-559890180)], null),new cljs.core.Keyword(null,"=>","=>",1841166128),(function (p__32828){
var map__32829 = p__32828;
var map__32829__$1 = cljs.core.__destructure_map(map__32829);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
return ["Latitude: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)," Longitude: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon)].join('');
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","goog-map","app/goog-map",356268236),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"goog-map","goog-map",356359339)], 0));

//# sourceMappingURL=bhlie.rf_city.subs.js.map
