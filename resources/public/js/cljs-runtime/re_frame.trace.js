goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__15729){
var map__15730 = p__15729;
var map__15730__$1 = cljs.core.__destructure_map(map__15730);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__15732_15762 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__15733_15763 = null;
var count__15734_15764 = (0);
var i__15735_15765 = (0);
while(true){
if((i__15735_15765 < count__15734_15764)){
var vec__15748_15766 = chunk__15733_15763.cljs$core$IIndexed$_nth$arity$2(null,i__15735_15765);
var k_15767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748_15766,(0),null);
var cb_15768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748_15766,(1),null);
try{var G__15753_15769 = cljs.core.deref(re_frame.trace.traces);
(cb_15768.cljs$core$IFn$_invoke$arity$1 ? cb_15768.cljs$core$IFn$_invoke$arity$1(G__15753_15769) : cb_15768.call(null,G__15753_15769));
}catch (e15751){var e_15770 = e15751;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15767,"while storing",cljs.core.deref(re_frame.trace.traces),e_15770], 0));
}

var G__15771 = seq__15732_15762;
var G__15772 = chunk__15733_15763;
var G__15773 = count__15734_15764;
var G__15774 = (i__15735_15765 + (1));
seq__15732_15762 = G__15771;
chunk__15733_15763 = G__15772;
count__15734_15764 = G__15773;
i__15735_15765 = G__15774;
continue;
} else {
var temp__5804__auto___15775 = cljs.core.seq(seq__15732_15762);
if(temp__5804__auto___15775){
var seq__15732_15776__$1 = temp__5804__auto___15775;
if(cljs.core.chunked_seq_QMARK_(seq__15732_15776__$1)){
var c__5568__auto___15777 = cljs.core.chunk_first(seq__15732_15776__$1);
var G__15778 = cljs.core.chunk_rest(seq__15732_15776__$1);
var G__15779 = c__5568__auto___15777;
var G__15780 = cljs.core.count(c__5568__auto___15777);
var G__15781 = (0);
seq__15732_15762 = G__15778;
chunk__15733_15763 = G__15779;
count__15734_15764 = G__15780;
i__15735_15765 = G__15781;
continue;
} else {
var vec__15754_15782 = cljs.core.first(seq__15732_15776__$1);
var k_15783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15754_15782,(0),null);
var cb_15784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15754_15782,(1),null);
try{var G__15758_15785 = cljs.core.deref(re_frame.trace.traces);
(cb_15784.cljs$core$IFn$_invoke$arity$1 ? cb_15784.cljs$core$IFn$_invoke$arity$1(G__15758_15785) : cb_15784.call(null,G__15758_15785));
}catch (e15757){var e_15786 = e15757;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15783,"while storing",cljs.core.deref(re_frame.trace.traces),e_15786], 0));
}

var G__15787 = cljs.core.next(seq__15732_15776__$1);
var G__15788 = null;
var G__15789 = (0);
var G__15790 = (0);
seq__15732_15762 = G__15787;
chunk__15733_15763 = G__15788;
count__15734_15764 = G__15789;
i__15735_15765 = G__15790;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
