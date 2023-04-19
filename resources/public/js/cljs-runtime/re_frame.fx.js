goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16331 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16332 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16332);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16471 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16471)){
var new_db_16472 = temp__5804__auto___16471;
var fexpr__16334_16473 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16334_16473.cljs$core$IFn$_invoke$arity$1 ? fexpr__16334_16473.cljs$core$IFn$_invoke$arity$1(new_db_16472) : fexpr__16334_16473.call(null,new_db_16472));
} else {
}

var seq__16335 = cljs.core.seq(effects_without_db);
var chunk__16336 = null;
var count__16337 = (0);
var i__16338 = (0);
while(true){
if((i__16338 < count__16337)){
var vec__16347 = chunk__16336.cljs$core$IIndexed$_nth$arity$2(null,i__16338);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(1),null);
var temp__5802__auto___16478 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16478)){
var effect_fn_16479 = temp__5802__auto___16478;
(effect_fn_16479.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16479.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16479.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16480 = seq__16335;
var G__16481 = chunk__16336;
var G__16482 = count__16337;
var G__16483 = (i__16338 + (1));
seq__16335 = G__16480;
chunk__16336 = G__16481;
count__16337 = G__16482;
i__16338 = G__16483;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16335);
if(temp__5804__auto__){
var seq__16335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16335__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16335__$1);
var G__16484 = cljs.core.chunk_rest(seq__16335__$1);
var G__16485 = c__5568__auto__;
var G__16486 = cljs.core.count(c__5568__auto__);
var G__16487 = (0);
seq__16335 = G__16484;
chunk__16336 = G__16485;
count__16337 = G__16486;
i__16338 = G__16487;
continue;
} else {
var vec__16351 = cljs.core.first(seq__16335__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351,(1),null);
var temp__5802__auto___16488 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16488)){
var effect_fn_16489 = temp__5802__auto___16488;
(effect_fn_16489.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16489.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16489.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16490 = cljs.core.next(seq__16335__$1);
var G__16491 = null;
var G__16492 = (0);
var G__16493 = (0);
seq__16335 = G__16490;
chunk__16336 = G__16491;
count__16337 = G__16492;
i__16338 = G__16493;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__15707__auto___16494 = re_frame.interop.now();
var duration__15708__auto___16495 = (end__15707__auto___16494 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15708__auto___16495,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__15707__auto___16494);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16331);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16500 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16500)){
var new_db_16501 = temp__5804__auto___16500;
var fexpr__16365_16502 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16365_16502.cljs$core$IFn$_invoke$arity$1 ? fexpr__16365_16502.cljs$core$IFn$_invoke$arity$1(new_db_16501) : fexpr__16365_16502.call(null,new_db_16501));
} else {
}

var seq__16372 = cljs.core.seq(effects_without_db);
var chunk__16373 = null;
var count__16374 = (0);
var i__16375 = (0);
while(true){
if((i__16375 < count__16374)){
var vec__16392 = chunk__16373.cljs$core$IIndexed$_nth$arity$2(null,i__16375);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(1),null);
var temp__5802__auto___16504 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16504)){
var effect_fn_16508 = temp__5802__auto___16504;
(effect_fn_16508.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16508.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16508.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16509 = seq__16372;
var G__16510 = chunk__16373;
var G__16511 = count__16374;
var G__16512 = (i__16375 + (1));
seq__16372 = G__16509;
chunk__16373 = G__16510;
count__16374 = G__16511;
i__16375 = G__16512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16372);
if(temp__5804__auto__){
var seq__16372__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16372__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16372__$1);
var G__16513 = cljs.core.chunk_rest(seq__16372__$1);
var G__16514 = c__5568__auto__;
var G__16515 = cljs.core.count(c__5568__auto__);
var G__16516 = (0);
seq__16372 = G__16513;
chunk__16373 = G__16514;
count__16374 = G__16515;
i__16375 = G__16516;
continue;
} else {
var vec__16395 = cljs.core.first(seq__16372__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16395,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16395,(1),null);
var temp__5802__auto___16518 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16518)){
var effect_fn_16519 = temp__5802__auto___16518;
(effect_fn_16519.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16519.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16519.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16523 = cljs.core.next(seq__16372__$1);
var G__16524 = null;
var G__16525 = (0);
var G__16526 = (0);
seq__16372 = G__16523;
chunk__16373 = G__16524;
count__16374 = G__16525;
i__16375 = G__16526;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16398){
var map__16399 = p__16398;
var map__16399__$1 = cljs.core.__destructure_map(map__16399);
var effect = map__16399__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16399__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16399__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__16400 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16401 = null;
var count__16402 = (0);
var i__16403 = (0);
while(true){
if((i__16403 < count__16402)){
var effect = chunk__16401.cljs$core$IIndexed$_nth$arity$2(null,i__16403);
re_frame.fx.dispatch_later(effect);


var G__16527 = seq__16400;
var G__16528 = chunk__16401;
var G__16529 = count__16402;
var G__16530 = (i__16403 + (1));
seq__16400 = G__16527;
chunk__16401 = G__16528;
count__16402 = G__16529;
i__16403 = G__16530;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16400);
if(temp__5804__auto__){
var seq__16400__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16400__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16400__$1);
var G__16531 = cljs.core.chunk_rest(seq__16400__$1);
var G__16532 = c__5568__auto__;
var G__16533 = cljs.core.count(c__5568__auto__);
var G__16534 = (0);
seq__16400 = G__16531;
chunk__16401 = G__16532;
count__16402 = G__16533;
i__16403 = G__16534;
continue;
} else {
var effect = cljs.core.first(seq__16400__$1);
re_frame.fx.dispatch_later(effect);


var G__16535 = cljs.core.next(seq__16400__$1);
var G__16536 = null;
var G__16537 = (0);
var G__16538 = (0);
seq__16400 = G__16535;
chunk__16401 = G__16536;
count__16402 = G__16537;
i__16403 = G__16538;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16404 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16405 = null;
var count__16406 = (0);
var i__16407 = (0);
while(true){
if((i__16407 < count__16406)){
var vec__16414 = chunk__16405.cljs$core$IIndexed$_nth$arity$2(null,i__16407);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16414,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16414,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16539 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16539)){
var effect_fn_16542 = temp__5802__auto___16539;
(effect_fn_16542.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16542.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16542.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16543 = seq__16404;
var G__16544 = chunk__16405;
var G__16545 = count__16406;
var G__16546 = (i__16407 + (1));
seq__16404 = G__16543;
chunk__16405 = G__16544;
count__16406 = G__16545;
i__16407 = G__16546;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16404);
if(temp__5804__auto__){
var seq__16404__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16404__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16404__$1);
var G__16547 = cljs.core.chunk_rest(seq__16404__$1);
var G__16548 = c__5568__auto__;
var G__16549 = cljs.core.count(c__5568__auto__);
var G__16550 = (0);
seq__16404 = G__16547;
chunk__16405 = G__16548;
count__16406 = G__16549;
i__16407 = G__16550;
continue;
} else {
var vec__16421 = cljs.core.first(seq__16404__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16421,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16421,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16551 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16551)){
var effect_fn_16552 = temp__5802__auto___16551;
(effect_fn_16552.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16552.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16552.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16553 = cljs.core.next(seq__16404__$1);
var G__16554 = null;
var G__16555 = (0);
var G__16556 = (0);
seq__16404 = G__16553;
chunk__16405 = G__16554;
count__16406 = G__16555;
i__16407 = G__16556;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16434 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16435 = null;
var count__16436 = (0);
var i__16437 = (0);
while(true){
if((i__16437 < count__16436)){
var event = chunk__16435.cljs$core$IIndexed$_nth$arity$2(null,i__16437);
re_frame.router.dispatch(event);


var G__16559 = seq__16434;
var G__16560 = chunk__16435;
var G__16561 = count__16436;
var G__16562 = (i__16437 + (1));
seq__16434 = G__16559;
chunk__16435 = G__16560;
count__16436 = G__16561;
i__16437 = G__16562;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16434);
if(temp__5804__auto__){
var seq__16434__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16434__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16434__$1);
var G__16563 = cljs.core.chunk_rest(seq__16434__$1);
var G__16564 = c__5568__auto__;
var G__16565 = cljs.core.count(c__5568__auto__);
var G__16566 = (0);
seq__16434 = G__16563;
chunk__16435 = G__16564;
count__16436 = G__16565;
i__16437 = G__16566;
continue;
} else {
var event = cljs.core.first(seq__16434__$1);
re_frame.router.dispatch(event);


var G__16567 = cljs.core.next(seq__16434__$1);
var G__16568 = null;
var G__16569 = (0);
var G__16570 = (0);
seq__16434 = G__16567;
chunk__16435 = G__16568;
count__16436 = G__16569;
i__16437 = G__16570;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16447 = cljs.core.seq(value);
var chunk__16448 = null;
var count__16449 = (0);
var i__16450 = (0);
while(true){
if((i__16450 < count__16449)){
var event = chunk__16448.cljs$core$IIndexed$_nth$arity$2(null,i__16450);
clear_event(event);


var G__16573 = seq__16447;
var G__16574 = chunk__16448;
var G__16575 = count__16449;
var G__16576 = (i__16450 + (1));
seq__16447 = G__16573;
chunk__16448 = G__16574;
count__16449 = G__16575;
i__16450 = G__16576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16447);
if(temp__5804__auto__){
var seq__16447__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16447__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16447__$1);
var G__16577 = cljs.core.chunk_rest(seq__16447__$1);
var G__16578 = c__5568__auto__;
var G__16579 = cljs.core.count(c__5568__auto__);
var G__16580 = (0);
seq__16447 = G__16577;
chunk__16448 = G__16578;
count__16449 = G__16579;
i__16450 = G__16580;
continue;
} else {
var event = cljs.core.first(seq__16447__$1);
clear_event(event);


var G__16581 = cljs.core.next(seq__16447__$1);
var G__16582 = null;
var G__16583 = (0);
var G__16584 = (0);
seq__16447 = G__16581;
chunk__16448 = G__16582;
count__16449 = G__16583;
i__16450 = G__16584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
