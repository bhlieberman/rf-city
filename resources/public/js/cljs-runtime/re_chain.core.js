goog.provide('re_chain.core');
re_chain.core._STAR_replace_pointers_STAR_ = false;
re_chain.core.links = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_chain.core.seqify = (function re_chain$core$seqify(x){
if(((cljs.core.sequential_QMARK_(x)) || (cljs.core.set_QMARK_(x)))){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
re_chain.core.step_id = (function re_chain$core$step_id(event_id,counter){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),counter)){
return event_id;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(event_id),(cljs.core.truth_(cljs.core.namespace(event_id))?"/":null),cljs.core.name(event_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join(''));
}
});
re_chain.core.replace_pointers = (function re_chain$core$replace_pointers(next_event,effects){
return clojure.walk.postwalk((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215))){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Keyword :kee-frame.core/next is deprecated, use :chain/next instead."], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__31512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215),null,new cljs.core.Keyword("chain","next","chain/next",-480219822),null], null), null);
return (fexpr__31512.cljs$core$IFn$_invoke$arity$1 ? fexpr__31512.cljs$core$IFn$_invoke$arity$1(x) : fexpr__31512.call(null,x));
})())){
return next_event;
} else {
return x;
}
}),effects);
});
re_chain.core.single_valid_link = (function re_chain$core$single_valid_link(effects){
var links = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31515){
var map__31516 = p__31515;
var map__31516__$1 = cljs.core.__destructure_map(map__31516);
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31516__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var effect_present_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31516__$1,new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804));
var and__5043__auto__ = (effect_present_QMARK_.cljs$core$IFn$_invoke$arity$1 ? effect_present_QMARK_.cljs$core$IFn$_invoke$arity$1(effects) : effect_present_QMARK_.call(null,effects));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects)));
} else {
return and__5043__auto__;
}
}),cljs.core.deref(re_chain.core.links));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(links))){
return cljs.core.first(links);
} else {
return null;
}
});
re_chain.core.dispatch_empty_or_next = (function re_chain$core$dispatch_empty_or_next(effects,next_event_id){
if(((cljs.core.not(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects)),next_event_id)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects__$1,event){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(effects__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event);
})], null);
} else {
return null;
}
});
re_chain.core.single_valid_next = (function re_chain$core$single_valid_next(next_event_id,effects){
var xs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31528){
var map__31529 = p__31528;
var map__31529__$1 = cljs.core.__destructure_map(map__31529);
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31529__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_event_id,cljs.core.first((get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects))));
}),cljs.core.deref(re_chain.core.links));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs))){
return cljs.core.first(xs);
} else {
return null;
}
});
re_chain.core.select_link = (function re_chain$core$select_link(next_event_id,effects){
var or__5045__auto__ = re_chain.core.single_valid_next(next_event_id,effects);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = re_chain.core.single_valid_link(effects);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = re_chain.core.dispatch_empty_or_next(effects,next_event_id);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not possible to select next in chain",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_event_id,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.deref(re_chain.core.links)], null));
}
}
}
});
re_chain.core.make_event = (function re_chain$core$make_event(next_event_id,previous_event_params,p__31542){
var vec__31543 = p__31542;
var seq__31544 = cljs.core.seq(vec__31543);
var first__31545 = cljs.core.first(seq__31544);
var seq__31544__$1 = cljs.core.next(seq__31544);
var _ = first__31545;
var params = seq__31544__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_event_id], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(previous_event_params,params));
});
re_chain.core.link_effects = (function re_chain$core$link_effects(next_event_id,event_params,effects){
if(cljs.core.truth_(next_event_id)){
var temp__5802__auto__ = re_chain.core.select_link(next_event_id,effects);
if(cljs.core.truth_(temp__5802__auto__)){
var map__31546 = temp__5802__auto__;
var map__31546__$1 = cljs.core.__destructure_map(map__31546);
var set_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31546__$1,new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401));
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31546__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var G__31547 = effects;
var G__31548 = re_chain.core.make_event(next_event_id,event_params,(get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects)));
return (set_dispatch.cljs$core$IFn$_invoke$arity$2 ? set_dispatch.cljs$core$IFn$_invoke$arity$2(G__31547,G__31548) : set_dispatch.call(null,G__31547,G__31548));
} else {
return effects;
}
} else {
return effects;
}
});
re_chain.core.effect_postprocessor = (function re_chain$core$effect_postprocessor(next_event_id){
return (function (ctx){
var event_params = cljs.core.rest(re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"event","event",301435442)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"effects","effects",-282369292),(function (p1__31549_SHARP_){
var G__31550 = p1__31549_SHARP_;
var G__31550__$1 = (cljs.core.truth_(re_chain.core._STAR_replace_pointers_STAR_)?re_chain.core.replace_pointers(next_event_id,G__31550):G__31550);
return re_chain.core.link_effects(next_event_id,event_params,G__31550__$1);

}));
});
});
re_chain.core.chain_interceptor = (function re_chain$core$chain_interceptor(current_event_id,next_event_id){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),current_event_id,new cljs.core.Keyword(null,"after","after",594996914),re_chain.core.effect_postprocessor(next_event_id)], 0));
});
re_chain.core.conform_named_handlers = (function re_chain$core$conform_named_handlers(handlers){
var G__31560 = handlers;
var vec__31561 = G__31560;
var seq__31562 = cljs.core.seq(vec__31561);
var first__31563 = cljs.core.first(seq__31562);
var seq__31562__$1 = cljs.core.next(seq__31562);
var id = first__31563;
var first__31563__$1 = cljs.core.first(seq__31562__$1);
var seq__31562__$2 = cljs.core.next(seq__31562__$1);
var interceptors_or_handler = first__31563__$1;
var rest = seq__31562__$2;
var matches = cljs.core.PersistentVector.EMPTY;
var G__31560__$1 = G__31560;
var matches__$1 = matches;
while(true){
var vec__31571 = G__31560__$1;
var seq__31572 = cljs.core.seq(vec__31571);
var first__31573 = cljs.core.first(seq__31572);
var seq__31572__$1 = cljs.core.next(seq__31572);
var id__$1 = first__31573;
var first__31573__$1 = cljs.core.first(seq__31572__$1);
var seq__31572__$2 = cljs.core.next(seq__31572__$1);
var interceptors_or_handler__$1 = first__31573__$1;
var rest__$1 = seq__31572__$2;
var matches__$2 = matches__$1;
if(cljs.core.truth_(id__$1)){
if(cljs.core.fn_QMARK_(interceptors_or_handler__$1)){
var G__31736 = rest__$1;
var G__31737 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),interceptors_or_handler__$1], null));
G__31560__$1 = G__31736;
matches__$1 = G__31737;
continue;
} else {
var vec__31574 = rest__$1;
var seq__31575 = cljs.core.seq(vec__31574);
var first__31576 = cljs.core.first(seq__31575);
var seq__31575__$1 = cljs.core.next(seq__31575);
var handler = first__31576;
var rest__$2 = seq__31575__$1;
if(cljs.core.fn_QMARK_(handler)){
var G__31738 = rest__$2;
var G__31739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),handler], null));
G__31560__$1 = G__31738;
matches__$1 = G__31739;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No valid handler found for ",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}
}
} else {
return matches__$2;
}
break;
}
});
re_chain.core.collect_named_event_instructions = (function re_chain$core$collect_named_event_instructions(step_fns){
var chain_handlers = re_chain.core.conform_named_handlers(step_fns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31583){
var vec__31584 = p__31583;
var map__31587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31584,(0),null);
var map__31587__$1 = cljs.core.__destructure_map(map__31587);
var handler_1 = map__31587__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31587__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31587__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var handler_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31584,(1),null);
var next_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(handler_2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(handler_1,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (){var G__31589 = interceptors;
if((G__31589 == null)){
return null;
} else {
return re_chain.core.seqify(G__31589);
}
})(),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(handler_1),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor(id,next_id)], 0));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.conform_handlers = (function re_chain$core$conform_handlers(handlers){
var G__31594 = handlers;
var vec__31596 = G__31594;
var seq__31597 = cljs.core.seq(vec__31596);
var first__31598 = cljs.core.first(seq__31597);
var seq__31597__$1 = cljs.core.next(seq__31597);
var interceptors_or_handler = first__31598;
var rest = seq__31597__$1;
var matches = cljs.core.PersistentVector.EMPTY;
var G__31594__$1 = G__31594;
var matches__$1 = matches;
while(true){
var vec__31607 = G__31594__$1;
var seq__31608 = cljs.core.seq(vec__31607);
var first__31609 = cljs.core.first(seq__31608);
var seq__31608__$1 = cljs.core.next(seq__31608);
var interceptors_or_handler__$1 = first__31609;
var rest__$1 = seq__31608__$1;
var matches__$2 = matches__$1;
if(cljs.core.truth_(interceptors_or_handler__$1)){
if(cljs.core.fn_QMARK_(interceptors_or_handler__$1)){
var G__31747 = rest__$1;
var G__31748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),interceptors_or_handler__$1], null));
G__31594__$1 = G__31747;
matches__$1 = G__31748;
continue;
} else {
var vec__31612 = rest__$1;
var seq__31613 = cljs.core.seq(vec__31612);
var first__31614 = cljs.core.first(seq__31613);
var seq__31613__$1 = cljs.core.next(seq__31613);
var handler = first__31614;
var rest__$2 = seq__31613__$1;
if(cljs.core.fn_QMARK_(handler)){
var G__31750 = rest__$2;
var G__31751 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),handler], null));
G__31594__$1 = G__31750;
matches__$1 = G__31751;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interceptor without matching handler",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}
}
} else {
return matches__$2;
}
break;
}
});
re_chain.core.collect_event_instructions = (function re_chain$core$collect_event_instructions(key,step_fns){
var chain_handlers = re_chain.core.conform_handlers(step_fns);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (counter,p__31618){
var vec__31619 = p__31618;
var current_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31619,(0),null);
var next_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31619,(1),null);
var map__31623 = current_handler;
var map__31623__$1 = cljs.core.__destructure_map(map__31623);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31623__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31623__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var id = re_chain.core.step_id(key,counter);
var next_id = (cljs.core.truth_(next_handler)?re_chain.core.step_id(key,(counter + (1))):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),fn,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor(id,next_id)], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.register_chain_handlers_BANG_ = (function re_chain$core$register_chain_handlers_BANG_(instructions,user_interceptors){
var seq__31624 = cljs.core.seq(instructions);
var chunk__31625 = null;
var count__31626 = (0);
var i__31627 = (0);
while(true){
if((i__31627 < count__31626)){
var map__31646 = chunk__31625.cljs$core$IIndexed$_nth$arity$2(null,i__31627);
var map__31646__$1 = cljs.core.__destructure_map(map__31646);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(user_interceptors,interceptors)),event_handler);


var G__31756 = seq__31624;
var G__31757 = chunk__31625;
var G__31758 = count__31626;
var G__31759 = (i__31627 + (1));
seq__31624 = G__31756;
chunk__31625 = G__31757;
count__31626 = G__31758;
i__31627 = G__31759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31624);
if(temp__5804__auto__){
var seq__31624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31624__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31624__$1);
var G__31760 = cljs.core.chunk_rest(seq__31624__$1);
var G__31761 = c__5568__auto__;
var G__31762 = cljs.core.count(c__5568__auto__);
var G__31763 = (0);
seq__31624 = G__31760;
chunk__31625 = G__31761;
count__31626 = G__31762;
i__31627 = G__31763;
continue;
} else {
var map__31659 = cljs.core.first(seq__31624__$1);
var map__31659__$1 = cljs.core.__destructure_map(map__31659);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31659__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31659__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31659__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(user_interceptors,interceptors)),event_handler);


var G__31764 = cljs.core.next(seq__31624__$1);
var G__31765 = null;
var G__31766 = (0);
var G__31767 = (0);
seq__31624 = G__31764;
chunk__31625 = G__31765;
count__31626 = G__31766;
i__31627 = G__31767;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Same as `reg-chain-named`, but with a vector of interceptors as the first parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_named_STAR_ = (function re_chain$core$reg_chain_named_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31769 = arguments.length;
var i__5770__auto___31770 = (0);
while(true){
if((i__5770__auto___31770 < len__5769__auto___31769)){
args__5775__auto__.push((arguments[i__5770__auto___31770]));

var G__31771 = (i__5770__auto___31770 + (1));
i__5770__auto___31770 = G__31771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (interceptors,step_fns){
var instructions = re_chain.core.collect_named_event_instructions(step_fns);
return re_chain.core.register_chain_handlers_BANG_(instructions,(function (){var G__31685 = interceptors;
if((G__31685 == null)){
return null;
} else {
return re_chain.core.seqify(G__31685);
}
})());
}));

(re_chain.core.reg_chain_named_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain_named_STAR_.cljs$lang$applyTo = (function (seq31669){
var G__31670 = cljs.core.first(seq31669);
var seq31669__$1 = cljs.core.next(seq31669);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31670,seq31669__$1);
}));

/**
 * Same as `reg-chain`, but with a vector of interceptors as the second parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_STAR_ = (function re_chain$core$reg_chain_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31772 = arguments.length;
var i__5770__auto___31773 = (0);
while(true){
if((i__5770__auto___31773 < len__5769__auto___31772)){
args__5775__auto__.push((arguments[i__5770__auto___31773]));

var G__31774 = (i__5770__auto___31773 + (1));
i__5770__auto___31773 = G__31774;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (id,interceptors,step_fns){
var instructions = re_chain.core.collect_event_instructions(id,step_fns);
return re_chain.core.register_chain_handlers_BANG_(instructions,(function (){var G__31703 = interceptors;
if((G__31703 == null)){
return null;
} else {
return re_chain.core.seqify(G__31703);
}
})());
}));

(re_chain.core.reg_chain_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_chain.core.reg_chain_STAR_.cljs$lang$applyTo = (function (seq31690){
var G__31692 = cljs.core.first(seq31690);
var seq31690__$1 = cljs.core.next(seq31690);
var G__31693 = cljs.core.first(seq31690__$1);
var seq31690__$2 = cljs.core.next(seq31690__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31692,G__31693,seq31690__$2);
}));

/**
 * re-chain only supports the `dispatch` effect out of the box. To add more effects, call this function at the startup
 *   of your app.
 * 
 *   Parameters:
 * 
 *   `chain-links`: Vector of maps. Each map describes how to chain together events using a certain effect. The map should
 *   contain 3 keys:
 *   - `:effect-present?` : Is the effect present in the effects map returned from an event function?
 *   - `:get-dispatch` : Try to lookup the dispatch value from the effects map
 *   - `:set-dispatch` : Set the dispatch value in the effects map
 * 
 *   Usage:
 *   ```
 *   (chain/configure! [{:effect-present? (fn [effects] (:http-xhrio effects))
 *                    :get-dispatch    (fn [effects] (get-in effects [:http-xhrio :on-success]))
 *                    :set-dispatch    (fn [effects dispatch] (assoc-in effects [:http-xhrio :on-success] dispatch))}])
 *   ```
 *   
 */
re_chain.core.configure_BANG_ = (function re_chain$core$configure_BANG_(chain_links){
return cljs.core.reset_BANG_(re_chain.core.links,chain_links);
});
/**
 * Same as `reg-chain`, but with manually named event handlers. Useful when you need more meaningful names in your
 *   event log.
 * 
 *   Parameters:
 * 
 *   `handlers`: pairs of id and event handler. Optionally with interceptors between id and handler.
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain-named
 * 
 *  :load-customer-data
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri "..."}})
 * 
 *  :receive-customer-data
 *   (fn [ctx [customer-id customer-data]]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain_named = (function re_chain$core$reg_chain_named(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31776 = arguments.length;
var i__5770__auto___31777 = (0);
while(true){
if((i__5770__auto___31777 < len__5769__auto___31776)){
args__5775__auto__.push((arguments[i__5770__auto___31777]));

var G__31778 = (i__5770__auto___31777 + (1));
i__5770__auto___31777 = G__31778;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_chain.core.reg_chain_named_STAR_,null,handlers);
}));

(re_chain.core.reg_chain_named.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_chain.core.reg_chain_named.cljs$lang$applyTo = (function (seq31708){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31708));
}));

/**
 * Register a list of re-frame fx handlers, chained together.
 * 
 *   The chaining is done through dispatch inference. https://github.com/Day8/re-frame-http-fx is supported by default,
 *   you can easily add your own like this: https://github.com/ingesolvoll/kee-frame#configuring-chains-since-020.
 * 
 *   Each handler's event vector is prepended with accumulated event vectors of previous handlers. So if the first handler
 *   receives [a b], and the second handler normally would receive [c], it will actually receive [a b c]. The purpose is
 *   to make all context available to the entire chain, without a complex framework or crazy scope tricks.
 * 
 *   Parameters:
 * 
 *   `id`: the id of the first re-frame event. The next events in the chain will get the same id followed by an index, so
 *   if your id is `add-todo`, the next one in chain will be called `add-todo-1`.
 * 
 *   `handlers`: re-frame event handler functions, registered with `re-frame.core/reg-event-fx`. Interceptors can be
 *            specified before the handler, same as with normal event handlers.
 * 
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain
 *  :load-customer-data
 * 
 *  (fn {ctx [customer-id]]
 *    {:http-xhrio {:uri    (str "/customer/" customer-id)
 *                  :method :get}})
 * 
 *  (fn [cxt [customer-id customer-data]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain = (function re_chain$core$reg_chain(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31779 = arguments.length;
var i__5770__auto___31780 = (0);
while(true){
if((i__5770__auto___31780 < len__5769__auto___31779)){
args__5775__auto__.push((arguments[i__5770__auto___31780]));

var G__31781 = (i__5770__auto___31780 + (1));
i__5770__auto___31780 = G__31781;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic = (function (id,handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_chain.core.reg_chain_STAR_,id,null,handlers);
}));

(re_chain.core.reg_chain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain.cljs$lang$applyTo = (function (seq31725){
var G__31726 = cljs.core.first(seq31725);
var seq31725__$1 = cljs.core.next(seq31725);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31726,seq31725__$1);
}));


//# sourceMappingURL=re_chain.core.js.map
