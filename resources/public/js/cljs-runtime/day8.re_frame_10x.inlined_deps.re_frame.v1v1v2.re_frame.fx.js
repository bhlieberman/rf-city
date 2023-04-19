goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20637 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20638 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20638);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20790 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20790)){
var new_db_20791 = temp__5804__auto___20790;
var fexpr__20641_20793 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20641_20793.cljs$core$IFn$_invoke$arity$1 ? fexpr__20641_20793.cljs$core$IFn$_invoke$arity$1(new_db_20791) : fexpr__20641_20793.call(null,new_db_20791));
} else {
}

var seq__20642 = cljs.core.seq(effects_without_db);
var chunk__20643 = null;
var count__20644 = (0);
var i__20645 = (0);
while(true){
if((i__20645 < count__20644)){
var vec__20659 = chunk__20643.cljs$core$IIndexed$_nth$arity$2(null,i__20645);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20659,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20659,(1),null);
var temp__5802__auto___20795 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20795)){
var effect_fn_20796 = temp__5802__auto___20795;
(effect_fn_20796.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20796.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20796.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20798 = seq__20642;
var G__20799 = chunk__20643;
var G__20800 = count__20644;
var G__20801 = (i__20645 + (1));
seq__20642 = G__20798;
chunk__20643 = G__20799;
count__20644 = G__20800;
i__20645 = G__20801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20642);
if(temp__5804__auto__){
var seq__20642__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20642__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20642__$1);
var G__20803 = cljs.core.chunk_rest(seq__20642__$1);
var G__20804 = c__5568__auto__;
var G__20805 = cljs.core.count(c__5568__auto__);
var G__20806 = (0);
seq__20642 = G__20803;
chunk__20643 = G__20804;
count__20644 = G__20805;
i__20645 = G__20806;
continue;
} else {
var vec__20669 = cljs.core.first(seq__20642__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(1),null);
var temp__5802__auto___20807 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20807)){
var effect_fn_20808 = temp__5802__auto___20807;
(effect_fn_20808.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20808.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20808.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20810 = cljs.core.next(seq__20642__$1);
var G__20811 = null;
var G__20812 = (0);
var G__20813 = (0);
seq__20642 = G__20810;
chunk__20643 = G__20811;
count__20644 = G__20812;
i__20645 = G__20813;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__20008__auto___20815 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__20009__auto___20816 = (end__20008__auto___20815 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20009__auto___20816,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__20008__auto___20815);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20637);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20818 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20818)){
var new_db_20819 = temp__5804__auto___20818;
var fexpr__20677_20820 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20677_20820.cljs$core$IFn$_invoke$arity$1 ? fexpr__20677_20820.cljs$core$IFn$_invoke$arity$1(new_db_20819) : fexpr__20677_20820.call(null,new_db_20819));
} else {
}

var seq__20678 = cljs.core.seq(effects_without_db);
var chunk__20679 = null;
var count__20680 = (0);
var i__20681 = (0);
while(true){
if((i__20681 < count__20680)){
var vec__20705 = chunk__20679.cljs$core$IIndexed$_nth$arity$2(null,i__20681);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705,(1),null);
var temp__5802__auto___20824 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20824)){
var effect_fn_20826 = temp__5802__auto___20824;
(effect_fn_20826.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20826.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20826.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20827 = seq__20678;
var G__20828 = chunk__20679;
var G__20829 = count__20680;
var G__20830 = (i__20681 + (1));
seq__20678 = G__20827;
chunk__20679 = G__20828;
count__20680 = G__20829;
i__20681 = G__20830;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20678);
if(temp__5804__auto__){
var seq__20678__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20678__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20678__$1);
var G__20831 = cljs.core.chunk_rest(seq__20678__$1);
var G__20832 = c__5568__auto__;
var G__20833 = cljs.core.count(c__5568__auto__);
var G__20834 = (0);
seq__20678 = G__20831;
chunk__20679 = G__20832;
count__20680 = G__20833;
i__20681 = G__20834;
continue;
} else {
var vec__20712 = cljs.core.first(seq__20678__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20712,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20712,(1),null);
var temp__5802__auto___20835 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20835)){
var effect_fn_20836 = temp__5802__auto___20835;
(effect_fn_20836.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20836.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20836.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20840 = cljs.core.next(seq__20678__$1);
var G__20841 = null;
var G__20842 = (0);
var G__20843 = (0);
seq__20678 = G__20840;
chunk__20679 = G__20841;
count__20680 = G__20842;
i__20681 = G__20843;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__20717){
var map__20718 = p__20717;
var map__20718__$1 = cljs.core.__destructure_map(map__20718);
var effect = map__20718__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__20720 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20721 = null;
var count__20722 = (0);
var i__20723 = (0);
while(true){
if((i__20723 < count__20722)){
var effect = chunk__20721.cljs$core$IIndexed$_nth$arity$2(null,i__20723);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__20846 = seq__20720;
var G__20847 = chunk__20721;
var G__20848 = count__20722;
var G__20849 = (i__20723 + (1));
seq__20720 = G__20846;
chunk__20721 = G__20847;
count__20722 = G__20848;
i__20723 = G__20849;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20720);
if(temp__5804__auto__){
var seq__20720__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20720__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20720__$1);
var G__20850 = cljs.core.chunk_rest(seq__20720__$1);
var G__20851 = c__5568__auto__;
var G__20852 = cljs.core.count(c__5568__auto__);
var G__20853 = (0);
seq__20720 = G__20850;
chunk__20721 = G__20851;
count__20722 = G__20852;
i__20723 = G__20853;
continue;
} else {
var effect = cljs.core.first(seq__20720__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__20855 = cljs.core.next(seq__20720__$1);
var G__20856 = null;
var G__20857 = (0);
var G__20858 = (0);
seq__20720 = G__20855;
chunk__20721 = G__20856;
count__20722 = G__20857;
i__20723 = G__20858;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20728 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20729 = null;
var count__20730 = (0);
var i__20731 = (0);
while(true){
if((i__20731 < count__20730)){
var vec__20745 = chunk__20729.cljs$core$IIndexed$_nth$arity$2(null,i__20731);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20745,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20862 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20862)){
var effect_fn_20864 = temp__5802__auto___20862;
(effect_fn_20864.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20864.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20864.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20866 = seq__20728;
var G__20867 = chunk__20729;
var G__20868 = count__20730;
var G__20869 = (i__20731 + (1));
seq__20728 = G__20866;
chunk__20729 = G__20867;
count__20730 = G__20868;
i__20731 = G__20869;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20728);
if(temp__5804__auto__){
var seq__20728__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20728__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20728__$1);
var G__20871 = cljs.core.chunk_rest(seq__20728__$1);
var G__20872 = c__5568__auto__;
var G__20873 = cljs.core.count(c__5568__auto__);
var G__20874 = (0);
seq__20728 = G__20871;
chunk__20729 = G__20872;
count__20730 = G__20873;
i__20731 = G__20874;
continue;
} else {
var vec__20751 = cljs.core.first(seq__20728__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20751,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20751,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20876 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20876)){
var effect_fn_20877 = temp__5802__auto___20876;
(effect_fn_20877.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20877.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20877.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20878 = cljs.core.next(seq__20728__$1);
var G__20879 = null;
var G__20880 = (0);
var G__20881 = (0);
seq__20728 = G__20878;
chunk__20729 = G__20879;
count__20730 = G__20880;
i__20731 = G__20881;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20764 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20765 = null;
var count__20766 = (0);
var i__20767 = (0);
while(true){
if((i__20767 < count__20766)){
var event = chunk__20765.cljs$core$IIndexed$_nth$arity$2(null,i__20767);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__20884 = seq__20764;
var G__20885 = chunk__20765;
var G__20886 = count__20766;
var G__20887 = (i__20767 + (1));
seq__20764 = G__20884;
chunk__20765 = G__20885;
count__20766 = G__20886;
i__20767 = G__20887;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20764);
if(temp__5804__auto__){
var seq__20764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20764__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20764__$1);
var G__20890 = cljs.core.chunk_rest(seq__20764__$1);
var G__20891 = c__5568__auto__;
var G__20892 = cljs.core.count(c__5568__auto__);
var G__20893 = (0);
seq__20764 = G__20890;
chunk__20765 = G__20891;
count__20766 = G__20892;
i__20767 = G__20893;
continue;
} else {
var event = cljs.core.first(seq__20764__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__20894 = cljs.core.next(seq__20764__$1);
var G__20895 = null;
var G__20896 = (0);
var G__20897 = (0);
seq__20764 = G__20894;
chunk__20765 = G__20895;
count__20766 = G__20896;
i__20767 = G__20897;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20771 = cljs.core.seq(value);
var chunk__20772 = null;
var count__20773 = (0);
var i__20774 = (0);
while(true){
if((i__20774 < count__20773)){
var event = chunk__20772.cljs$core$IIndexed$_nth$arity$2(null,i__20774);
clear_event(event);


var G__20901 = seq__20771;
var G__20902 = chunk__20772;
var G__20903 = count__20773;
var G__20904 = (i__20774 + (1));
seq__20771 = G__20901;
chunk__20772 = G__20902;
count__20773 = G__20903;
i__20774 = G__20904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20771);
if(temp__5804__auto__){
var seq__20771__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20771__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20771__$1);
var G__20906 = cljs.core.chunk_rest(seq__20771__$1);
var G__20907 = c__5568__auto__;
var G__20908 = cljs.core.count(c__5568__auto__);
var G__20909 = (0);
seq__20771 = G__20906;
chunk__20772 = G__20907;
count__20773 = G__20908;
i__20774 = G__20909;
continue;
} else {
var event = cljs.core.first(seq__20771__$1);
clear_event(event);


var G__20910 = cljs.core.next(seq__20771__$1);
var G__20911 = null;
var G__20912 = (0);
var G__20913 = (0);
seq__20771 = G__20910;
chunk__20772 = G__20911;
count__20773 = G__20912;
i__20774 = G__20913;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
