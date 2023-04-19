goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51271){
var map__51273 = p__51271;
var map__51273__$1 = cljs.core.__destructure_map(map__51273);
var m = map__51273__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51281_51513 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51282_51514 = null;
var count__51283_51515 = (0);
var i__51284_51516 = (0);
while(true){
if((i__51284_51516 < count__51283_51515)){
var f_51518 = chunk__51282_51514.cljs$core$IIndexed$_nth$arity$2(null,i__51284_51516);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51518], 0));


var G__51519 = seq__51281_51513;
var G__51520 = chunk__51282_51514;
var G__51521 = count__51283_51515;
var G__51522 = (i__51284_51516 + (1));
seq__51281_51513 = G__51519;
chunk__51282_51514 = G__51520;
count__51283_51515 = G__51521;
i__51284_51516 = G__51522;
continue;
} else {
var temp__5804__auto___51523 = cljs.core.seq(seq__51281_51513);
if(temp__5804__auto___51523){
var seq__51281_51524__$1 = temp__5804__auto___51523;
if(cljs.core.chunked_seq_QMARK_(seq__51281_51524__$1)){
var c__5568__auto___51525 = cljs.core.chunk_first(seq__51281_51524__$1);
var G__51526 = cljs.core.chunk_rest(seq__51281_51524__$1);
var G__51527 = c__5568__auto___51525;
var G__51528 = cljs.core.count(c__5568__auto___51525);
var G__51529 = (0);
seq__51281_51513 = G__51526;
chunk__51282_51514 = G__51527;
count__51283_51515 = G__51528;
i__51284_51516 = G__51529;
continue;
} else {
var f_51530 = cljs.core.first(seq__51281_51524__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51530], 0));


var G__51531 = cljs.core.next(seq__51281_51524__$1);
var G__51532 = null;
var G__51533 = (0);
var G__51534 = (0);
seq__51281_51513 = G__51531;
chunk__51282_51514 = G__51532;
count__51283_51515 = G__51533;
i__51284_51516 = G__51534;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51536 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51536], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51536)))?cljs.core.second(arglists_51536):arglists_51536)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51301_51540 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51302_51541 = null;
var count__51303_51542 = (0);
var i__51304_51543 = (0);
while(true){
if((i__51304_51543 < count__51303_51542)){
var vec__51323_51544 = chunk__51302_51541.cljs$core$IIndexed$_nth$arity$2(null,i__51304_51543);
var name_51545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51323_51544,(0),null);
var map__51326_51546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51323_51544,(1),null);
var map__51326_51547__$1 = cljs.core.__destructure_map(map__51326_51546);
var doc_51548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326_51547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326_51547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51545], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51549], 0));

if(cljs.core.truth_(doc_51548)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51548], 0));
} else {
}


var G__51551 = seq__51301_51540;
var G__51552 = chunk__51302_51541;
var G__51553 = count__51303_51542;
var G__51554 = (i__51304_51543 + (1));
seq__51301_51540 = G__51551;
chunk__51302_51541 = G__51552;
count__51303_51542 = G__51553;
i__51304_51543 = G__51554;
continue;
} else {
var temp__5804__auto___51555 = cljs.core.seq(seq__51301_51540);
if(temp__5804__auto___51555){
var seq__51301_51557__$1 = temp__5804__auto___51555;
if(cljs.core.chunked_seq_QMARK_(seq__51301_51557__$1)){
var c__5568__auto___51558 = cljs.core.chunk_first(seq__51301_51557__$1);
var G__51559 = cljs.core.chunk_rest(seq__51301_51557__$1);
var G__51560 = c__5568__auto___51558;
var G__51561 = cljs.core.count(c__5568__auto___51558);
var G__51562 = (0);
seq__51301_51540 = G__51559;
chunk__51302_51541 = G__51560;
count__51303_51542 = G__51561;
i__51304_51543 = G__51562;
continue;
} else {
var vec__51328_51564 = cljs.core.first(seq__51301_51557__$1);
var name_51565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51328_51564,(0),null);
var map__51331_51566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51328_51564,(1),null);
var map__51331_51567__$1 = cljs.core.__destructure_map(map__51331_51566);
var doc_51568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331_51567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331_51567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51565], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51569], 0));

if(cljs.core.truth_(doc_51568)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51568], 0));
} else {
}


var G__51572 = cljs.core.next(seq__51301_51557__$1);
var G__51573 = null;
var G__51574 = (0);
var G__51575 = (0);
seq__51301_51540 = G__51572;
chunk__51302_51541 = G__51573;
count__51303_51542 = G__51574;
i__51304_51543 = G__51575;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51335 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51336 = null;
var count__51337 = (0);
var i__51338 = (0);
while(true){
if((i__51338 < count__51337)){
var role = chunk__51336.cljs$core$IIndexed$_nth$arity$2(null,i__51338);
var temp__5804__auto___51578__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___51578__$1)){
var spec_51580 = temp__5804__auto___51578__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51580)], 0));
} else {
}


var G__51581 = seq__51335;
var G__51582 = chunk__51336;
var G__51583 = count__51337;
var G__51584 = (i__51338 + (1));
seq__51335 = G__51581;
chunk__51336 = G__51582;
count__51337 = G__51583;
i__51338 = G__51584;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__51335);
if(temp__5804__auto____$1){
var seq__51335__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51335__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51335__$1);
var G__51586 = cljs.core.chunk_rest(seq__51335__$1);
var G__51587 = c__5568__auto__;
var G__51588 = cljs.core.count(c__5568__auto__);
var G__51589 = (0);
seq__51335 = G__51586;
chunk__51336 = G__51587;
count__51337 = G__51588;
i__51338 = G__51589;
continue;
} else {
var role = cljs.core.first(seq__51335__$1);
var temp__5804__auto___51594__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___51594__$2)){
var spec_51595 = temp__5804__auto___51594__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51595)], 0));
} else {
}


var G__51597 = cljs.core.next(seq__51335__$1);
var G__51598 = null;
var G__51599 = (0);
var G__51600 = (0);
seq__51335 = G__51597;
chunk__51336 = G__51598;
count__51337 = G__51599;
i__51338 = G__51600;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51606 = cljs.core.ex_cause(t);
via = G__51605;
t = G__51606;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51373 = datafied_throwable;
var map__51373__$1 = cljs.core.__destructure_map(map__51373);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51373__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51374 = cljs.core.last(via);
var map__51374__$1 = cljs.core.__destructure_map(map__51374);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51374__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51374__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51374__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51375 = data;
var map__51375__$1 = cljs.core.__destructure_map(map__51375);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51375__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51375__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51375__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51376 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51376__$1 = cljs.core.__destructure_map(map__51376);
var top_data = map__51376__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51385 = phase;
var G__51385__$1 = (((G__51385 instanceof cljs.core.Keyword))?G__51385.fqn:null);
switch (G__51385__$1) {
case "read-source":
var map__51387 = data;
var map__51387__$1 = cljs.core.__destructure_map(map__51387);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51389 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51389__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51389,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51389);
var G__51389__$2 = (cljs.core.truth_((function (){var fexpr__51392 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51392.cljs$core$IFn$_invoke$arity$1 ? fexpr__51392.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51392.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51389__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51389__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51389__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51389__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51393 = top_data;
var G__51393__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51393,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51393);
var G__51393__$2 = (cljs.core.truth_((function (){var fexpr__51396 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51396.cljs$core$IFn$_invoke$arity$1 ? fexpr__51396.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51396.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51393__$1);
var G__51393__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51393__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51393__$2);
var G__51393__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51393__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51393__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51393__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51393__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51398 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(3),null);
var G__51403 = top_data;
var G__51403__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51403);
var G__51403__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51403__$1);
var G__51403__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51403__$2);
var G__51403__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51403__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51403__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51403__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51403__$4;
}

break;
case "execution":
var vec__51406 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51366_SHARP_){
var or__5045__auto__ = (p1__51366_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__51411 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51411.cljs$core$IFn$_invoke$arity$1 ? fexpr__51411.cljs$core$IFn$_invoke$arity$1(p1__51366_SHARP_) : fexpr__51411.call(null,p1__51366_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__51412 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51412__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51412);
var G__51412__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51412__$1);
var G__51412__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51412__$2);
var G__51412__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51412__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51412__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51385__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51416){
var map__51418 = p__51416;
var map__51418__$1 = cljs.core.__destructure_map(map__51418);
var triage_data = map__51418__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51427 = phase;
var G__51427__$1 = (((G__51427 instanceof cljs.core.Keyword))?G__51427.fqn:null);
switch (G__51427__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51429 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51431 = loc;
var G__51432 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51434_51656 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51436_51657 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51437_51658 = true;
var _STAR_print_fn_STAR__temp_val__51438_51659 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51437_51658);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51438_51659);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51414_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51414_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51436_51657);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51434_51656);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51429,G__51430,G__51431,G__51432) : format.call(null,G__51429,G__51430,G__51431,G__51432));

break;
case "macroexpansion":
var G__51446 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51447 = cause_type;
var G__51448 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51449 = loc;
var G__51450 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51446,G__51447,G__51448,G__51449,G__51450) : format.call(null,G__51446,G__51447,G__51448,G__51449,G__51450));

break;
case "compile-syntax-check":
var G__51451 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51452 = cause_type;
var G__51453 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51454 = loc;
var G__51455 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51451,G__51452,G__51453,G__51454,G__51455) : format.call(null,G__51451,G__51452,G__51453,G__51454,G__51455));

break;
case "compilation":
var G__51458 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51459 = cause_type;
var G__51460 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51461 = loc;
var G__51462 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51458,G__51459,G__51460,G__51461,G__51462) : format.call(null,G__51458,G__51459,G__51460,G__51461,G__51462));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51464 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51465 = symbol;
var G__51466 = loc;
var G__51467 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51474_51673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51475_51674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51476_51675 = true;
var _STAR_print_fn_STAR__temp_val__51477_51676 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51476_51675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51477_51676);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51415_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51415_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51475_51674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51474_51673);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51464,G__51465,G__51466,G__51467) : format.call(null,G__51464,G__51465,G__51466,G__51467));
} else {
var G__51486 = "Execution error%s at %s(%s).\n%s\n";
var G__51487 = cause_type;
var G__51488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51489 = loc;
var G__51490 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51486,G__51487,G__51488,G__51489,G__51490) : format.call(null,G__51486,G__51487,G__51488,G__51489,G__51490));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51427__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
