goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__52078,match){
var map__52083 = p__52078;
var map__52083__$1 = cljs.core.__destructure_map(map__52083);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__52089(s__52090){
return (new cljs.core.LazySeq(null,(function (){
var s__52090__$1 = s__52090;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__52090__$1);
if(temp__5804__auto__){
var s__52090__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52090__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52090__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52092 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52091 = (0);
while(true){
if((i__52091 < size__5522__auto__)){
var vec__52114 = cljs.core._nth(c__5521__auto__,i__52091);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52114,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52114,(1),null);
cljs.core.chunk_append(b__52092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__52265 = (i__52091 + (1));
i__52091 = G__52265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52092),reitit$frontend$controllers$get_identity_$_iter__52089(cljs.core.chunk_rest(s__52090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52092),null);
}
} else {
var vec__52125 = cljs.core.first(s__52090__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52125,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52125,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__52089(cljs.core.rest(s__52090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__52132 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52132) : f.call(null,G__52132));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__52136_52282 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__52137_52283 = null;
var count__52138_52284 = (0);
var i__52139_52285 = (0);
while(true){
if((i__52139_52285 < count__52138_52284)){
var controller_52286 = chunk__52137_52283.cljs$core$IIndexed$_nth$arity$2(null,i__52139_52285);
reitit.frontend.controllers.apply_controller(controller_52286,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52289 = seq__52136_52282;
var G__52290 = chunk__52137_52283;
var G__52291 = count__52138_52284;
var G__52292 = (i__52139_52285 + (1));
seq__52136_52282 = G__52289;
chunk__52137_52283 = G__52290;
count__52138_52284 = G__52291;
i__52139_52285 = G__52292;
continue;
} else {
var temp__5804__auto___52294 = cljs.core.seq(seq__52136_52282);
if(temp__5804__auto___52294){
var seq__52136_52295__$1 = temp__5804__auto___52294;
if(cljs.core.chunked_seq_QMARK_(seq__52136_52295__$1)){
var c__5568__auto___52300 = cljs.core.chunk_first(seq__52136_52295__$1);
var G__52301 = cljs.core.chunk_rest(seq__52136_52295__$1);
var G__52302 = c__5568__auto___52300;
var G__52303 = cljs.core.count(c__5568__auto___52300);
var G__52304 = (0);
seq__52136_52282 = G__52301;
chunk__52137_52283 = G__52302;
count__52138_52284 = G__52303;
i__52139_52285 = G__52304;
continue;
} else {
var controller_52306 = cljs.core.first(seq__52136_52295__$1);
reitit.frontend.controllers.apply_controller(controller_52306,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52311 = cljs.core.next(seq__52136_52295__$1);
var G__52312 = null;
var G__52313 = (0);
var G__52314 = (0);
seq__52136_52282 = G__52311;
chunk__52137_52283 = G__52312;
count__52138_52284 = G__52313;
i__52139_52285 = G__52314;
continue;
}
} else {
}
}
break;
}

var seq__52176_52318 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__52177_52319 = null;
var count__52178_52320 = (0);
var i__52179_52321 = (0);
while(true){
if((i__52179_52321 < count__52178_52320)){
var controller_52327 = chunk__52177_52319.cljs$core$IIndexed$_nth$arity$2(null,i__52179_52321);
reitit.frontend.controllers.apply_controller(controller_52327,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52330 = seq__52176_52318;
var G__52331 = chunk__52177_52319;
var G__52332 = count__52178_52320;
var G__52333 = (i__52179_52321 + (1));
seq__52176_52318 = G__52330;
chunk__52177_52319 = G__52331;
count__52178_52320 = G__52332;
i__52179_52321 = G__52333;
continue;
} else {
var temp__5804__auto___52338 = cljs.core.seq(seq__52176_52318);
if(temp__5804__auto___52338){
var seq__52176_52339__$1 = temp__5804__auto___52338;
if(cljs.core.chunked_seq_QMARK_(seq__52176_52339__$1)){
var c__5568__auto___52340 = cljs.core.chunk_first(seq__52176_52339__$1);
var G__52342 = cljs.core.chunk_rest(seq__52176_52339__$1);
var G__52343 = c__5568__auto___52340;
var G__52344 = cljs.core.count(c__5568__auto___52340);
var G__52345 = (0);
seq__52176_52318 = G__52342;
chunk__52177_52319 = G__52343;
count__52178_52320 = G__52344;
i__52179_52321 = G__52345;
continue;
} else {
var controller_52350 = cljs.core.first(seq__52176_52339__$1);
reitit.frontend.controllers.apply_controller(controller_52350,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52355 = cljs.core.next(seq__52176_52339__$1);
var G__52356 = null;
var G__52357 = (0);
var G__52358 = (0);
seq__52176_52318 = G__52355;
chunk__52177_52319 = G__52356;
count__52178_52320 = G__52357;
i__52179_52321 = G__52358;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
