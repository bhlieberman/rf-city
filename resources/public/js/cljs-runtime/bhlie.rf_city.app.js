goog.provide('bhlie.rf_city.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if((typeof bhlie !== 'undefined') && (typeof bhlie.rf_city !== 'undefined') && (typeof bhlie.rf_city.app !== 'undefined') && (typeof bhlie.rf_city.app.root !== 'undefined')){
} else {
bhlie.rf_city.app.root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("app"));
}
bhlie.rf_city.app.init_routes_BANG_ = (function bhlie$rf_city$app$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(bhlie.rf_city.views.city_router,(function (new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","navigated","app/navigated",540990475),new_match], null));
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});
bhlie.rf_city.app.nav = (function bhlie$rf_city$app$nav(p__32981){
var map__32982 = p__32981;
var map__32982__$1 = cljs.core.__destructure_map(map__32982);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32982__$1,new cljs.core.Keyword(null,"router","router",1091916230));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-banner","top-banner",2032563138)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function bhlie$rf_city$app$nav_$_iter__32983(s__32984){
return (new cljs.core.LazySeq(null,(function (){
var s__32984__$1 = s__32984;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32984__$1);
if(temp__5804__auto__){
var s__32984__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32984__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32984__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32986 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32985 = (0);
while(true){
if((i__32985 < size__5522__auto__)){
var route_name = cljs.core._nth(c__5521__auto__,i__32985);
var route = reitit.core.match_by_name(router,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
cljs.core.chunk_append(b__32986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"route-link","route-link",-1778351466),new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(route_name)], null),text], null)], null));

var G__33001 = (i__32985 + (1));
i__32985 = G__33001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32986),bhlie$rf_city$app$nav_$_iter__32983(cljs.core.chunk_rest(s__32984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32986),null);
}
} else {
var route_name = cljs.core.first(s__32984__$2);
var route = reitit.core.match_by_name(router,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"route-link","route-link",-1778351466),new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(route_name)], null),text], null)], null),bhlie$rf_city$app$nav_$_iter__32983(cljs.core.rest(s__32984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(reitit.core.route_names(router));
})()], null)], null);
});
bhlie.rf_city.app.router_component = (function bhlie$rf_city$app$router_component(p__32999){
var map__33000 = p__32999;
var map__33000__$1 = cljs.core.__destructure_map(map__33000);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33000__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","current-route","app/current-route",2067564805)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bhlie.rf_city.app.nav,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),router,new cljs.core.Keyword(null,"current-route","current-route",2067529448),current_route], null)], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))], null):null)], null);
});
bhlie.rf_city.app.mount_root = (function bhlie$rf_city$app$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return bhlie.rf_city.app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bhlie.rf_city.app.router_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),bhlie.rf_city.views.city_router], null)], null)));
});
bhlie.rf_city.app.init = (function bhlie$rf_city$app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","initialize-app","config/initialize-app",-1648013668)], null));

re_chain.core.configure_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804),(function (effects){
return new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(effects);
}),new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),(function (effects){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
}),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects,dispatch){
return cljs.core.assoc_in(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),dispatch);
})], null)], null));

bhlie.rf_city.app.init_routes_BANG_();

return bhlie.rf_city.app.mount_root();
});

//# sourceMappingURL=bhlie.rf_city.app.js.map