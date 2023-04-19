goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55308 = arguments.length;
var i__5770__auto___55309 = (0);
while(true){
if((i__5770__auto___55309 < len__5769__auto___55308)){
args__5775__auto__.push((arguments[i__5770__auto___55309]));

var G__55310 = (i__5770__auto___55309 + (1));
i__5770__auto___55309 = G__55310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54536){
var G__54537 = cljs.core.first(seq54536);
var seq54536__$1 = cljs.core.next(seq54536);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54537,seq54536__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54545 = cljs.core.seq(sources);
var chunk__54546 = null;
var count__54547 = (0);
var i__54548 = (0);
while(true){
if((i__54548 < count__54547)){
var map__54558 = chunk__54546.cljs$core$IIndexed$_nth$arity$2(null,i__54548);
var map__54558__$1 = cljs.core.__destructure_map(map__54558);
var src = map__54558__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54560){var e_55312 = e54560;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55312);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55312.message)].join('')));
}

var G__55314 = seq__54545;
var G__55315 = chunk__54546;
var G__55316 = count__54547;
var G__55317 = (i__54548 + (1));
seq__54545 = G__55314;
chunk__54546 = G__55315;
count__54547 = G__55316;
i__54548 = G__55317;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54545);
if(temp__5804__auto__){
var seq__54545__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54545__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54545__$1);
var G__55319 = cljs.core.chunk_rest(seq__54545__$1);
var G__55320 = c__5568__auto__;
var G__55321 = cljs.core.count(c__5568__auto__);
var G__55322 = (0);
seq__54545 = G__55319;
chunk__54546 = G__55320;
count__54547 = G__55321;
i__54548 = G__55322;
continue;
} else {
var map__54567 = cljs.core.first(seq__54545__$1);
var map__54567__$1 = cljs.core.__destructure_map(map__54567);
var src = map__54567__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54568){var e_55324 = e54568;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55324);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55324.message)].join('')));
}

var G__55325 = cljs.core.next(seq__54545__$1);
var G__55326 = null;
var G__55327 = (0);
var G__55328 = (0);
seq__54545 = G__55325;
chunk__54546 = G__55326;
count__54547 = G__55327;
i__54548 = G__55328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54578 = cljs.core.seq(js_requires);
var chunk__54579 = null;
var count__54580 = (0);
var i__54581 = (0);
while(true){
if((i__54581 < count__54580)){
var js_ns = chunk__54579.cljs$core$IIndexed$_nth$arity$2(null,i__54581);
var require_str_55329 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55329);


var G__55330 = seq__54578;
var G__55331 = chunk__54579;
var G__55332 = count__54580;
var G__55333 = (i__54581 + (1));
seq__54578 = G__55330;
chunk__54579 = G__55331;
count__54580 = G__55332;
i__54581 = G__55333;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54578);
if(temp__5804__auto__){
var seq__54578__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54578__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54578__$1);
var G__55334 = cljs.core.chunk_rest(seq__54578__$1);
var G__55335 = c__5568__auto__;
var G__55336 = cljs.core.count(c__5568__auto__);
var G__55337 = (0);
seq__54578 = G__55334;
chunk__54579 = G__55335;
count__54580 = G__55336;
i__54581 = G__55337;
continue;
} else {
var js_ns = cljs.core.first(seq__54578__$1);
var require_str_55338 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55338);


var G__55339 = cljs.core.next(seq__54578__$1);
var G__55340 = null;
var G__55341 = (0);
var G__55342 = (0);
seq__54578 = G__55339;
chunk__54579 = G__55340;
count__54580 = G__55341;
i__54581 = G__55342;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54587){
var map__54588 = p__54587;
var map__54588__$1 = cljs.core.__destructure_map(map__54588);
var msg = map__54588__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54589(s__54590){
return (new cljs.core.LazySeq(null,(function (){
var s__54590__$1 = s__54590;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__54590__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__54595 = cljs.core.first(xs__6360__auto__);
var map__54595__$1 = cljs.core.__destructure_map(map__54595);
var src = map__54595__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__54590__$1,map__54595,map__54595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54588,map__54588__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54589_$_iter__54591(s__54592){
return (new cljs.core.LazySeq(null,((function (s__54590__$1,map__54595,map__54595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54588,map__54588__$1,msg,info,reload_info){
return (function (){
var s__54592__$1 = s__54592;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__54592__$1);
if(temp__5804__auto____$1){
var s__54592__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54592__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__54592__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__54594 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__54593 = (0);
while(true){
if((i__54593 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__54593);
cljs.core.chunk_append(b__54594,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__55345 = (i__54593 + (1));
i__54593 = G__55345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54594),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54589_$_iter__54591(cljs.core.chunk_rest(s__54592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54594),null);
}
} else {
var warning = cljs.core.first(s__54592__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54589_$_iter__54591(cljs.core.rest(s__54592__$2)));
}
} else {
return null;
}
break;
}
});})(s__54590__$1,map__54595,map__54595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54588,map__54588__$1,msg,info,reload_info))
,null,null));
});})(s__54590__$1,map__54595,map__54595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54588,map__54588__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54589(cljs.core.rest(s__54590__$1)));
} else {
var G__55346 = cljs.core.rest(s__54590__$1);
s__54590__$1 = G__55346;
continue;
}
} else {
var G__55347 = cljs.core.rest(s__54590__$1);
s__54590__$1 = G__55347;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54599_55348 = cljs.core.seq(warnings);
var chunk__54600_55349 = null;
var count__54601_55350 = (0);
var i__54602_55351 = (0);
while(true){
if((i__54602_55351 < count__54601_55350)){
var map__54611_55352 = chunk__54600_55349.cljs$core$IIndexed$_nth$arity$2(null,i__54602_55351);
var map__54611_55353__$1 = cljs.core.__destructure_map(map__54611_55352);
var w_55354 = map__54611_55353__$1;
var msg_55355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611_55353__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611_55353__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611_55353__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611_55353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55358)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55356),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55357),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55355__$1)].join(''));


var G__55359 = seq__54599_55348;
var G__55360 = chunk__54600_55349;
var G__55361 = count__54601_55350;
var G__55362 = (i__54602_55351 + (1));
seq__54599_55348 = G__55359;
chunk__54600_55349 = G__55360;
count__54601_55350 = G__55361;
i__54602_55351 = G__55362;
continue;
} else {
var temp__5804__auto___55363 = cljs.core.seq(seq__54599_55348);
if(temp__5804__auto___55363){
var seq__54599_55364__$1 = temp__5804__auto___55363;
if(cljs.core.chunked_seq_QMARK_(seq__54599_55364__$1)){
var c__5568__auto___55365 = cljs.core.chunk_first(seq__54599_55364__$1);
var G__55366 = cljs.core.chunk_rest(seq__54599_55364__$1);
var G__55367 = c__5568__auto___55365;
var G__55368 = cljs.core.count(c__5568__auto___55365);
var G__55369 = (0);
seq__54599_55348 = G__55366;
chunk__54600_55349 = G__55367;
count__54601_55350 = G__55368;
i__54602_55351 = G__55369;
continue;
} else {
var map__54623_55370 = cljs.core.first(seq__54599_55364__$1);
var map__54623_55371__$1 = cljs.core.__destructure_map(map__54623_55370);
var w_55372 = map__54623_55371__$1;
var msg_55373__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623_55371__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623_55371__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623_55371__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623_55371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55376)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55374),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55375),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55373__$1)].join(''));


var G__55377 = cljs.core.next(seq__54599_55364__$1);
var G__55378 = null;
var G__55379 = (0);
var G__55380 = (0);
seq__54599_55348 = G__55377;
chunk__54600_55349 = G__55378;
count__54601_55350 = G__55379;
i__54602_55351 = G__55380;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54583_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54583_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54638){
var map__54639 = p__54638;
var map__54639__$1 = cljs.core.__destructure_map(map__54639);
var msg = map__54639__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__54643 = cljs.core.seq(updates);
var chunk__54645 = null;
var count__54646 = (0);
var i__54647 = (0);
while(true){
if((i__54647 < count__54646)){
var path = chunk__54645.cljs$core$IIndexed$_nth$arity$2(null,i__54647);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54907_55381 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54911_55382 = null;
var count__54912_55383 = (0);
var i__54913_55384 = (0);
while(true){
if((i__54913_55384 < count__54912_55383)){
var node_55386 = chunk__54911_55382.cljs$core$IIndexed$_nth$arity$2(null,i__54913_55384);
if(cljs.core.not(node_55386.shadow$old)){
var path_match_55387 = shadow.cljs.devtools.client.browser.match_paths(node_55386.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55387)){
var new_link_55388 = (function (){var G__55029 = node_55386.cloneNode(true);
G__55029.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55387),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55029;
})();
(node_55386.shadow$old = true);

(new_link_55388.onload = ((function (seq__54907_55381,chunk__54911_55382,count__54912_55383,i__54913_55384,seq__54643,chunk__54645,count__54646,i__54647,new_link_55388,path_match_55387,node_55386,path,map__54639,map__54639__$1,msg,updates,reload_info){
return (function (e){
var seq__55031_55389 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55033_55390 = null;
var count__55034_55391 = (0);
var i__55035_55392 = (0);
while(true){
if((i__55035_55392 < count__55034_55391)){
var map__55052_55394 = chunk__55033_55390.cljs$core$IIndexed$_nth$arity$2(null,i__55035_55392);
var map__55052_55395__$1 = cljs.core.__destructure_map(map__55052_55394);
var task_55396 = map__55052_55395__$1;
var fn_str_55397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55052_55395__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55052_55395__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55399 = goog.getObjectByName(fn_str_55397,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55398)].join(''));

(fn_obj_55399.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55399.cljs$core$IFn$_invoke$arity$2(path,new_link_55388) : fn_obj_55399.call(null,path,new_link_55388));


var G__55401 = seq__55031_55389;
var G__55402 = chunk__55033_55390;
var G__55403 = count__55034_55391;
var G__55404 = (i__55035_55392 + (1));
seq__55031_55389 = G__55401;
chunk__55033_55390 = G__55402;
count__55034_55391 = G__55403;
i__55035_55392 = G__55404;
continue;
} else {
var temp__5804__auto___55405 = cljs.core.seq(seq__55031_55389);
if(temp__5804__auto___55405){
var seq__55031_55406__$1 = temp__5804__auto___55405;
if(cljs.core.chunked_seq_QMARK_(seq__55031_55406__$1)){
var c__5568__auto___55407 = cljs.core.chunk_first(seq__55031_55406__$1);
var G__55408 = cljs.core.chunk_rest(seq__55031_55406__$1);
var G__55409 = c__5568__auto___55407;
var G__55410 = cljs.core.count(c__5568__auto___55407);
var G__55411 = (0);
seq__55031_55389 = G__55408;
chunk__55033_55390 = G__55409;
count__55034_55391 = G__55410;
i__55035_55392 = G__55411;
continue;
} else {
var map__55059_55413 = cljs.core.first(seq__55031_55406__$1);
var map__55059_55414__$1 = cljs.core.__destructure_map(map__55059_55413);
var task_55415 = map__55059_55414__$1;
var fn_str_55416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55059_55414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55059_55414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55418 = goog.getObjectByName(fn_str_55416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55417)].join(''));

(fn_obj_55418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55418.cljs$core$IFn$_invoke$arity$2(path,new_link_55388) : fn_obj_55418.call(null,path,new_link_55388));


var G__55419 = cljs.core.next(seq__55031_55406__$1);
var G__55420 = null;
var G__55421 = (0);
var G__55422 = (0);
seq__55031_55389 = G__55419;
chunk__55033_55390 = G__55420;
count__55034_55391 = G__55421;
i__55035_55392 = G__55422;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55386);
});})(seq__54907_55381,chunk__54911_55382,count__54912_55383,i__54913_55384,seq__54643,chunk__54645,count__54646,i__54647,new_link_55388,path_match_55387,node_55386,path,map__54639,map__54639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55387], 0));

goog.dom.insertSiblingAfter(new_link_55388,node_55386);


var G__55424 = seq__54907_55381;
var G__55425 = chunk__54911_55382;
var G__55426 = count__54912_55383;
var G__55427 = (i__54913_55384 + (1));
seq__54907_55381 = G__55424;
chunk__54911_55382 = G__55425;
count__54912_55383 = G__55426;
i__54913_55384 = G__55427;
continue;
} else {
var G__55428 = seq__54907_55381;
var G__55429 = chunk__54911_55382;
var G__55430 = count__54912_55383;
var G__55431 = (i__54913_55384 + (1));
seq__54907_55381 = G__55428;
chunk__54911_55382 = G__55429;
count__54912_55383 = G__55430;
i__54913_55384 = G__55431;
continue;
}
} else {
var G__55432 = seq__54907_55381;
var G__55433 = chunk__54911_55382;
var G__55434 = count__54912_55383;
var G__55435 = (i__54913_55384 + (1));
seq__54907_55381 = G__55432;
chunk__54911_55382 = G__55433;
count__54912_55383 = G__55434;
i__54913_55384 = G__55435;
continue;
}
} else {
var temp__5804__auto___55436 = cljs.core.seq(seq__54907_55381);
if(temp__5804__auto___55436){
var seq__54907_55437__$1 = temp__5804__auto___55436;
if(cljs.core.chunked_seq_QMARK_(seq__54907_55437__$1)){
var c__5568__auto___55438 = cljs.core.chunk_first(seq__54907_55437__$1);
var G__55441 = cljs.core.chunk_rest(seq__54907_55437__$1);
var G__55442 = c__5568__auto___55438;
var G__55443 = cljs.core.count(c__5568__auto___55438);
var G__55444 = (0);
seq__54907_55381 = G__55441;
chunk__54911_55382 = G__55442;
count__54912_55383 = G__55443;
i__54913_55384 = G__55444;
continue;
} else {
var node_55446 = cljs.core.first(seq__54907_55437__$1);
if(cljs.core.not(node_55446.shadow$old)){
var path_match_55447 = shadow.cljs.devtools.client.browser.match_paths(node_55446.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55447)){
var new_link_55448 = (function (){var G__55073 = node_55446.cloneNode(true);
G__55073.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55447),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55073;
})();
(node_55446.shadow$old = true);

(new_link_55448.onload = ((function (seq__54907_55381,chunk__54911_55382,count__54912_55383,i__54913_55384,seq__54643,chunk__54645,count__54646,i__54647,new_link_55448,path_match_55447,node_55446,seq__54907_55437__$1,temp__5804__auto___55436,path,map__54639,map__54639__$1,msg,updates,reload_info){
return (function (e){
var seq__55082_55451 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55084_55452 = null;
var count__55085_55453 = (0);
var i__55086_55454 = (0);
while(true){
if((i__55086_55454 < count__55085_55453)){
var map__55125_55455 = chunk__55084_55452.cljs$core$IIndexed$_nth$arity$2(null,i__55086_55454);
var map__55125_55456__$1 = cljs.core.__destructure_map(map__55125_55455);
var task_55457 = map__55125_55456__$1;
var fn_str_55458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125_55456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125_55456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55460 = goog.getObjectByName(fn_str_55458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55459)].join(''));

(fn_obj_55460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55460.cljs$core$IFn$_invoke$arity$2(path,new_link_55448) : fn_obj_55460.call(null,path,new_link_55448));


var G__55461 = seq__55082_55451;
var G__55462 = chunk__55084_55452;
var G__55463 = count__55085_55453;
var G__55464 = (i__55086_55454 + (1));
seq__55082_55451 = G__55461;
chunk__55084_55452 = G__55462;
count__55085_55453 = G__55463;
i__55086_55454 = G__55464;
continue;
} else {
var temp__5804__auto___55465__$1 = cljs.core.seq(seq__55082_55451);
if(temp__5804__auto___55465__$1){
var seq__55082_55466__$1 = temp__5804__auto___55465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55082_55466__$1)){
var c__5568__auto___55467 = cljs.core.chunk_first(seq__55082_55466__$1);
var G__55468 = cljs.core.chunk_rest(seq__55082_55466__$1);
var G__55469 = c__5568__auto___55467;
var G__55470 = cljs.core.count(c__5568__auto___55467);
var G__55471 = (0);
seq__55082_55451 = G__55468;
chunk__55084_55452 = G__55469;
count__55085_55453 = G__55470;
i__55086_55454 = G__55471;
continue;
} else {
var map__55127_55472 = cljs.core.first(seq__55082_55466__$1);
var map__55127_55473__$1 = cljs.core.__destructure_map(map__55127_55472);
var task_55474 = map__55127_55473__$1;
var fn_str_55475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55127_55473__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55127_55473__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55478 = goog.getObjectByName(fn_str_55475,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55476)].join(''));

(fn_obj_55478.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55478.cljs$core$IFn$_invoke$arity$2(path,new_link_55448) : fn_obj_55478.call(null,path,new_link_55448));


var G__55480 = cljs.core.next(seq__55082_55466__$1);
var G__55481 = null;
var G__55482 = (0);
var G__55483 = (0);
seq__55082_55451 = G__55480;
chunk__55084_55452 = G__55481;
count__55085_55453 = G__55482;
i__55086_55454 = G__55483;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55446);
});})(seq__54907_55381,chunk__54911_55382,count__54912_55383,i__54913_55384,seq__54643,chunk__54645,count__54646,i__54647,new_link_55448,path_match_55447,node_55446,seq__54907_55437__$1,temp__5804__auto___55436,path,map__54639,map__54639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55447], 0));

goog.dom.insertSiblingAfter(new_link_55448,node_55446);


var G__55484 = cljs.core.next(seq__54907_55437__$1);
var G__55485 = null;
var G__55486 = (0);
var G__55487 = (0);
seq__54907_55381 = G__55484;
chunk__54911_55382 = G__55485;
count__54912_55383 = G__55486;
i__54913_55384 = G__55487;
continue;
} else {
var G__55488 = cljs.core.next(seq__54907_55437__$1);
var G__55489 = null;
var G__55490 = (0);
var G__55491 = (0);
seq__54907_55381 = G__55488;
chunk__54911_55382 = G__55489;
count__54912_55383 = G__55490;
i__54913_55384 = G__55491;
continue;
}
} else {
var G__55493 = cljs.core.next(seq__54907_55437__$1);
var G__55494 = null;
var G__55495 = (0);
var G__55496 = (0);
seq__54907_55381 = G__55493;
chunk__54911_55382 = G__55494;
count__54912_55383 = G__55495;
i__54913_55384 = G__55496;
continue;
}
}
} else {
}
}
break;
}


var G__55497 = seq__54643;
var G__55498 = chunk__54645;
var G__55499 = count__54646;
var G__55500 = (i__54647 + (1));
seq__54643 = G__55497;
chunk__54645 = G__55498;
count__54646 = G__55499;
i__54647 = G__55500;
continue;
} else {
var G__55501 = seq__54643;
var G__55502 = chunk__54645;
var G__55503 = count__54646;
var G__55504 = (i__54647 + (1));
seq__54643 = G__55501;
chunk__54645 = G__55502;
count__54646 = G__55503;
i__54647 = G__55504;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54643);
if(temp__5804__auto__){
var seq__54643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54643__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54643__$1);
var G__55505 = cljs.core.chunk_rest(seq__54643__$1);
var G__55506 = c__5568__auto__;
var G__55507 = cljs.core.count(c__5568__auto__);
var G__55508 = (0);
seq__54643 = G__55505;
chunk__54645 = G__55506;
count__54646 = G__55507;
i__54647 = G__55508;
continue;
} else {
var path = cljs.core.first(seq__54643__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__55129_55509 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__55133_55510 = null;
var count__55134_55511 = (0);
var i__55135_55512 = (0);
while(true){
if((i__55135_55512 < count__55134_55511)){
var node_55513 = chunk__55133_55510.cljs$core$IIndexed$_nth$arity$2(null,i__55135_55512);
if(cljs.core.not(node_55513.shadow$old)){
var path_match_55515 = shadow.cljs.devtools.client.browser.match_paths(node_55513.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55515)){
var new_link_55516 = (function (){var G__55201 = node_55513.cloneNode(true);
G__55201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55515),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55201;
})();
(node_55513.shadow$old = true);

(new_link_55516.onload = ((function (seq__55129_55509,chunk__55133_55510,count__55134_55511,i__55135_55512,seq__54643,chunk__54645,count__54646,i__54647,new_link_55516,path_match_55515,node_55513,path,seq__54643__$1,temp__5804__auto__,map__54639,map__54639__$1,msg,updates,reload_info){
return (function (e){
var seq__55204_55517 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55206_55518 = null;
var count__55207_55519 = (0);
var i__55208_55520 = (0);
while(true){
if((i__55208_55520 < count__55207_55519)){
var map__55221_55521 = chunk__55206_55518.cljs$core$IIndexed$_nth$arity$2(null,i__55208_55520);
var map__55221_55522__$1 = cljs.core.__destructure_map(map__55221_55521);
var task_55523 = map__55221_55522__$1;
var fn_str_55524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221_55522__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221_55522__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55526 = goog.getObjectByName(fn_str_55524,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55525)].join(''));

(fn_obj_55526.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55526.cljs$core$IFn$_invoke$arity$2(path,new_link_55516) : fn_obj_55526.call(null,path,new_link_55516));


var G__55528 = seq__55204_55517;
var G__55529 = chunk__55206_55518;
var G__55530 = count__55207_55519;
var G__55531 = (i__55208_55520 + (1));
seq__55204_55517 = G__55528;
chunk__55206_55518 = G__55529;
count__55207_55519 = G__55530;
i__55208_55520 = G__55531;
continue;
} else {
var temp__5804__auto___55533__$1 = cljs.core.seq(seq__55204_55517);
if(temp__5804__auto___55533__$1){
var seq__55204_55534__$1 = temp__5804__auto___55533__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55204_55534__$1)){
var c__5568__auto___55535 = cljs.core.chunk_first(seq__55204_55534__$1);
var G__55536 = cljs.core.chunk_rest(seq__55204_55534__$1);
var G__55537 = c__5568__auto___55535;
var G__55538 = cljs.core.count(c__5568__auto___55535);
var G__55539 = (0);
seq__55204_55517 = G__55536;
chunk__55206_55518 = G__55537;
count__55207_55519 = G__55538;
i__55208_55520 = G__55539;
continue;
} else {
var map__55227_55540 = cljs.core.first(seq__55204_55534__$1);
var map__55227_55541__$1 = cljs.core.__destructure_map(map__55227_55540);
var task_55542 = map__55227_55541__$1;
var fn_str_55543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55227_55541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55227_55541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55545 = goog.getObjectByName(fn_str_55543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55544)].join(''));

(fn_obj_55545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55545.cljs$core$IFn$_invoke$arity$2(path,new_link_55516) : fn_obj_55545.call(null,path,new_link_55516));


var G__55546 = cljs.core.next(seq__55204_55534__$1);
var G__55547 = null;
var G__55548 = (0);
var G__55549 = (0);
seq__55204_55517 = G__55546;
chunk__55206_55518 = G__55547;
count__55207_55519 = G__55548;
i__55208_55520 = G__55549;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55513);
});})(seq__55129_55509,chunk__55133_55510,count__55134_55511,i__55135_55512,seq__54643,chunk__54645,count__54646,i__54647,new_link_55516,path_match_55515,node_55513,path,seq__54643__$1,temp__5804__auto__,map__54639,map__54639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55515], 0));

goog.dom.insertSiblingAfter(new_link_55516,node_55513);


var G__55551 = seq__55129_55509;
var G__55552 = chunk__55133_55510;
var G__55553 = count__55134_55511;
var G__55554 = (i__55135_55512 + (1));
seq__55129_55509 = G__55551;
chunk__55133_55510 = G__55552;
count__55134_55511 = G__55553;
i__55135_55512 = G__55554;
continue;
} else {
var G__55555 = seq__55129_55509;
var G__55556 = chunk__55133_55510;
var G__55557 = count__55134_55511;
var G__55558 = (i__55135_55512 + (1));
seq__55129_55509 = G__55555;
chunk__55133_55510 = G__55556;
count__55134_55511 = G__55557;
i__55135_55512 = G__55558;
continue;
}
} else {
var G__55559 = seq__55129_55509;
var G__55560 = chunk__55133_55510;
var G__55561 = count__55134_55511;
var G__55562 = (i__55135_55512 + (1));
seq__55129_55509 = G__55559;
chunk__55133_55510 = G__55560;
count__55134_55511 = G__55561;
i__55135_55512 = G__55562;
continue;
}
} else {
var temp__5804__auto___55563__$1 = cljs.core.seq(seq__55129_55509);
if(temp__5804__auto___55563__$1){
var seq__55129_55564__$1 = temp__5804__auto___55563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55129_55564__$1)){
var c__5568__auto___55565 = cljs.core.chunk_first(seq__55129_55564__$1);
var G__55566 = cljs.core.chunk_rest(seq__55129_55564__$1);
var G__55567 = c__5568__auto___55565;
var G__55568 = cljs.core.count(c__5568__auto___55565);
var G__55569 = (0);
seq__55129_55509 = G__55566;
chunk__55133_55510 = G__55567;
count__55134_55511 = G__55568;
i__55135_55512 = G__55569;
continue;
} else {
var node_55570 = cljs.core.first(seq__55129_55564__$1);
if(cljs.core.not(node_55570.shadow$old)){
var path_match_55571 = shadow.cljs.devtools.client.browser.match_paths(node_55570.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55571)){
var new_link_55572 = (function (){var G__55228 = node_55570.cloneNode(true);
G__55228.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55571),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55228;
})();
(node_55570.shadow$old = true);

(new_link_55572.onload = ((function (seq__55129_55509,chunk__55133_55510,count__55134_55511,i__55135_55512,seq__54643,chunk__54645,count__54646,i__54647,new_link_55572,path_match_55571,node_55570,seq__55129_55564__$1,temp__5804__auto___55563__$1,path,seq__54643__$1,temp__5804__auto__,map__54639,map__54639__$1,msg,updates,reload_info){
return (function (e){
var seq__55229_55573 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55231_55574 = null;
var count__55232_55575 = (0);
var i__55233_55576 = (0);
while(true){
if((i__55233_55576 < count__55232_55575)){
var map__55239_55577 = chunk__55231_55574.cljs$core$IIndexed$_nth$arity$2(null,i__55233_55576);
var map__55239_55578__$1 = cljs.core.__destructure_map(map__55239_55577);
var task_55579 = map__55239_55578__$1;
var fn_str_55580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239_55578__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239_55578__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55582 = goog.getObjectByName(fn_str_55580,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55581)].join(''));

(fn_obj_55582.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55582.cljs$core$IFn$_invoke$arity$2(path,new_link_55572) : fn_obj_55582.call(null,path,new_link_55572));


var G__55584 = seq__55229_55573;
var G__55585 = chunk__55231_55574;
var G__55586 = count__55232_55575;
var G__55587 = (i__55233_55576 + (1));
seq__55229_55573 = G__55584;
chunk__55231_55574 = G__55585;
count__55232_55575 = G__55586;
i__55233_55576 = G__55587;
continue;
} else {
var temp__5804__auto___55588__$2 = cljs.core.seq(seq__55229_55573);
if(temp__5804__auto___55588__$2){
var seq__55229_55589__$1 = temp__5804__auto___55588__$2;
if(cljs.core.chunked_seq_QMARK_(seq__55229_55589__$1)){
var c__5568__auto___55590 = cljs.core.chunk_first(seq__55229_55589__$1);
var G__55591 = cljs.core.chunk_rest(seq__55229_55589__$1);
var G__55592 = c__5568__auto___55590;
var G__55593 = cljs.core.count(c__5568__auto___55590);
var G__55594 = (0);
seq__55229_55573 = G__55591;
chunk__55231_55574 = G__55592;
count__55232_55575 = G__55593;
i__55233_55576 = G__55594;
continue;
} else {
var map__55240_55595 = cljs.core.first(seq__55229_55589__$1);
var map__55240_55596__$1 = cljs.core.__destructure_map(map__55240_55595);
var task_55597 = map__55240_55596__$1;
var fn_str_55598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55240_55596__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55240_55596__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55600 = goog.getObjectByName(fn_str_55598,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55599)].join(''));

(fn_obj_55600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55600.cljs$core$IFn$_invoke$arity$2(path,new_link_55572) : fn_obj_55600.call(null,path,new_link_55572));


var G__55601 = cljs.core.next(seq__55229_55589__$1);
var G__55602 = null;
var G__55603 = (0);
var G__55604 = (0);
seq__55229_55573 = G__55601;
chunk__55231_55574 = G__55602;
count__55232_55575 = G__55603;
i__55233_55576 = G__55604;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55570);
});})(seq__55129_55509,chunk__55133_55510,count__55134_55511,i__55135_55512,seq__54643,chunk__54645,count__54646,i__54647,new_link_55572,path_match_55571,node_55570,seq__55129_55564__$1,temp__5804__auto___55563__$1,path,seq__54643__$1,temp__5804__auto__,map__54639,map__54639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55571], 0));

goog.dom.insertSiblingAfter(new_link_55572,node_55570);


var G__55605 = cljs.core.next(seq__55129_55564__$1);
var G__55606 = null;
var G__55607 = (0);
var G__55608 = (0);
seq__55129_55509 = G__55605;
chunk__55133_55510 = G__55606;
count__55134_55511 = G__55607;
i__55135_55512 = G__55608;
continue;
} else {
var G__55609 = cljs.core.next(seq__55129_55564__$1);
var G__55610 = null;
var G__55611 = (0);
var G__55612 = (0);
seq__55129_55509 = G__55609;
chunk__55133_55510 = G__55610;
count__55134_55511 = G__55611;
i__55135_55512 = G__55612;
continue;
}
} else {
var G__55613 = cljs.core.next(seq__55129_55564__$1);
var G__55614 = null;
var G__55615 = (0);
var G__55616 = (0);
seq__55129_55509 = G__55613;
chunk__55133_55510 = G__55614;
count__55134_55511 = G__55615;
i__55135_55512 = G__55616;
continue;
}
}
} else {
}
}
break;
}


var G__55617 = cljs.core.next(seq__54643__$1);
var G__55618 = null;
var G__55619 = (0);
var G__55620 = (0);
seq__54643 = G__55617;
chunk__54645 = G__55618;
count__54646 = G__55619;
i__54647 = G__55620;
continue;
} else {
var G__55621 = cljs.core.next(seq__54643__$1);
var G__55622 = null;
var G__55623 = (0);
var G__55624 = (0);
seq__54643 = G__55621;
chunk__54645 = G__55622;
count__54646 = G__55623;
i__54647 = G__55624;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__55252){
var map__55253 = p__55252;
var map__55253__$1 = cljs.core.__destructure_map(map__55253);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__55254,done,error){
var map__55255 = p__55254;
var map__55255__$1 = cljs.core.__destructure_map(map__55255);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55255__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__55256,done,error){
var map__55259 = p__55256;
var map__55259__$1 = cljs.core.__destructure_map(map__55259);
var msg = map__55259__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55261){
var map__55262 = p__55261;
var map__55262__$1 = cljs.core.__destructure_map(map__55262);
var src = map__55262__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55262__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__55266 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__55266) : done.call(null,G__55266));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__55267){
var map__55268 = p__55267;
var map__55268__$1 = cljs.core.__destructure_map(map__55268);
var msg__$1 = map__55268__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55268__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e55272){var ex = e55272;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__55273){
var map__55275 = p__55273;
var map__55275__$1 = cljs.core.__destructure_map(map__55275);
var env = map__55275__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55275__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__55287){
var map__55289 = p__55287;
var map__55289__$1 = cljs.core.__destructure_map(map__55289);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55289__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55289__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__55299){
var map__55301 = p__55299;
var map__55301__$1 = cljs.core.__destructure_map(map__55301);
var svc = map__55301__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
