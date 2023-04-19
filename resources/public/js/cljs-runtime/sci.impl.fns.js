goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__34349 = (fixed_arity | (0));
switch (G__34349) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34351 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__34350){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34351,G__34350);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35586 = cljs.core._nth(recur_val,(0));
G__34350 = G__35586;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34353 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__34352){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34353,G__34352);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35587 = cljs.core._nth(recur_val,(0));
G__34352 = G__35587;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34356 = cljs.core._nth(params,(0));
var G__34357 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__34354,G__34355){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34356,G__34354);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34357,G__34355);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35588 = cljs.core._nth(recur_val,(0));
var G__35589 = cljs.core._nth(recur_val,(1));
G__34354 = G__35588;
G__34355 = G__35589;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34360 = cljs.core._nth(params,(0));
var G__34361 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__34358,G__34359){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34360,G__34358);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34361,G__34359);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35591 = cljs.core._nth(recur_val,(0));
var G__35592 = cljs.core._nth(recur_val,(1));
G__34358 = G__35591;
G__34359 = G__35592;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34365 = cljs.core._nth(params,(0));
var G__34366 = cljs.core._nth(params,(1));
var G__34367 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__34362,G__34363,G__34364){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34365,G__34362);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34366,G__34363);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34367,G__34364);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35596 = cljs.core._nth(recur_val,(0));
var G__35597 = cljs.core._nth(recur_val,(1));
var G__35598 = cljs.core._nth(recur_val,(2));
G__34362 = G__35596;
G__34363 = G__35597;
G__34364 = G__35598;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34372 = cljs.core._nth(params,(0));
var G__34373 = cljs.core._nth(params,(1));
var G__34374 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__34369,G__34370,G__34371){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34372,G__34369);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34373,G__34370);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34374,G__34371);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35599 = cljs.core._nth(recur_val,(0));
var G__35600 = cljs.core._nth(recur_val,(1));
var G__35601 = cljs.core._nth(recur_val,(2));
G__34369 = G__35599;
G__34370 = G__35600;
G__34371 = G__35601;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34379 = cljs.core._nth(params,(0));
var G__34380 = cljs.core._nth(params,(1));
var G__34381 = cljs.core._nth(params,(2));
var G__34382 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__34375,G__34376,G__34377,G__34378){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34379,G__34375);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34380,G__34376);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34381,G__34377);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34382,G__34378);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35605 = cljs.core._nth(recur_val,(0));
var G__35606 = cljs.core._nth(recur_val,(1));
var G__35607 = cljs.core._nth(recur_val,(2));
var G__35608 = cljs.core._nth(recur_val,(3));
G__34375 = G__35605;
G__34376 = G__35606;
G__34377 = G__35607;
G__34378 = G__35608;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34387 = cljs.core._nth(params,(0));
var G__34388 = cljs.core._nth(params,(1));
var G__34389 = cljs.core._nth(params,(2));
var G__34390 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__34383,G__34384,G__34385,G__34386){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34387,G__34383);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34388,G__34384);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34389,G__34385);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34390,G__34386);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35611 = cljs.core._nth(recur_val,(0));
var G__35612 = cljs.core._nth(recur_val,(1));
var G__35613 = cljs.core._nth(recur_val,(2));
var G__35614 = cljs.core._nth(recur_val,(3));
G__34383 = G__35611;
G__34384 = G__35612;
G__34385 = G__35613;
G__34386 = G__35614;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34396 = cljs.core._nth(params,(0));
var G__34397 = cljs.core._nth(params,(1));
var G__34398 = cljs.core._nth(params,(2));
var G__34399 = cljs.core._nth(params,(3));
var G__34400 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__34391,G__34392,G__34393,G__34394,G__34395){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34396,G__34391);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34397,G__34392);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34398,G__34393);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34399,G__34394);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34400,G__34395);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35616 = cljs.core._nth(recur_val,(0));
var G__35617 = cljs.core._nth(recur_val,(1));
var G__35618 = cljs.core._nth(recur_val,(2));
var G__35619 = cljs.core._nth(recur_val,(3));
var G__35620 = cljs.core._nth(recur_val,(4));
G__34391 = G__35616;
G__34392 = G__35617;
G__34393 = G__35618;
G__34394 = G__35619;
G__34395 = G__35620;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34406 = cljs.core._nth(params,(0));
var G__34407 = cljs.core._nth(params,(1));
var G__34408 = cljs.core._nth(params,(2));
var G__34409 = cljs.core._nth(params,(3));
var G__34410 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__34401,G__34402,G__34403,G__34404,G__34405){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34406,G__34401);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34407,G__34402);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34408,G__34403);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34409,G__34404);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34410,G__34405);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35621 = cljs.core._nth(recur_val,(0));
var G__35622 = cljs.core._nth(recur_val,(1));
var G__35623 = cljs.core._nth(recur_val,(2));
var G__35624 = cljs.core._nth(recur_val,(3));
var G__35625 = cljs.core._nth(recur_val,(4));
G__34401 = G__35621;
G__34402 = G__35622;
G__34403 = G__35623;
G__34404 = G__35624;
G__34405 = G__35625;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34418 = cljs.core._nth(params,(0));
var G__34419 = cljs.core._nth(params,(1));
var G__34420 = cljs.core._nth(params,(2));
var G__34421 = cljs.core._nth(params,(3));
var G__34422 = cljs.core._nth(params,(4));
var G__34423 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__34412,G__34413,G__34414,G__34415,G__34416,G__34417){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34418,G__34412);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34419,G__34413);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34420,G__34414);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34421,G__34415);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34422,G__34416);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34423,G__34417);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35627 = cljs.core._nth(recur_val,(0));
var G__35628 = cljs.core._nth(recur_val,(1));
var G__35629 = cljs.core._nth(recur_val,(2));
var G__35630 = cljs.core._nth(recur_val,(3));
var G__35631 = cljs.core._nth(recur_val,(4));
var G__35632 = cljs.core._nth(recur_val,(5));
G__34412 = G__35627;
G__34413 = G__35628;
G__34414 = G__35629;
G__34415 = G__35630;
G__34416 = G__35631;
G__34417 = G__35632;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34430 = cljs.core._nth(params,(0));
var G__34431 = cljs.core._nth(params,(1));
var G__34432 = cljs.core._nth(params,(2));
var G__34433 = cljs.core._nth(params,(3));
var G__34434 = cljs.core._nth(params,(4));
var G__34435 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__34424,G__34425,G__34426,G__34427,G__34428,G__34429){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34430,G__34424);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34431,G__34425);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34432,G__34426);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34433,G__34427);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34434,G__34428);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34435,G__34429);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35633 = cljs.core._nth(recur_val,(0));
var G__35634 = cljs.core._nth(recur_val,(1));
var G__35635 = cljs.core._nth(recur_val,(2));
var G__35636 = cljs.core._nth(recur_val,(3));
var G__35637 = cljs.core._nth(recur_val,(4));
var G__35638 = cljs.core._nth(recur_val,(5));
G__34424 = G__35633;
G__34425 = G__35634;
G__34426 = G__35635;
G__34427 = G__35636;
G__34428 = G__35637;
G__34429 = G__35638;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34443 = cljs.core._nth(params,(0));
var G__34444 = cljs.core._nth(params,(1));
var G__34445 = cljs.core._nth(params,(2));
var G__34446 = cljs.core._nth(params,(3));
var G__34447 = cljs.core._nth(params,(4));
var G__34448 = cljs.core._nth(params,(5));
var G__34449 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__34436,G__34437,G__34438,G__34439,G__34440,G__34441,G__34442){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34443,G__34436);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34444,G__34437);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34445,G__34438);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34446,G__34439);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34447,G__34440);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34448,G__34441);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34449,G__34442);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35641 = cljs.core._nth(recur_val,(0));
var G__35642 = cljs.core._nth(recur_val,(1));
var G__35643 = cljs.core._nth(recur_val,(2));
var G__35644 = cljs.core._nth(recur_val,(3));
var G__35645 = cljs.core._nth(recur_val,(4));
var G__35646 = cljs.core._nth(recur_val,(5));
var G__35647 = cljs.core._nth(recur_val,(6));
G__34436 = G__35641;
G__34437 = G__35642;
G__34438 = G__35643;
G__34439 = G__35644;
G__34440 = G__35645;
G__34441 = G__35646;
G__34442 = G__35647;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34457 = cljs.core._nth(params,(0));
var G__34458 = cljs.core._nth(params,(1));
var G__34459 = cljs.core._nth(params,(2));
var G__34460 = cljs.core._nth(params,(3));
var G__34461 = cljs.core._nth(params,(4));
var G__34462 = cljs.core._nth(params,(5));
var G__34463 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__34450,G__34451,G__34452,G__34453,G__34454,G__34455,G__34456){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34457,G__34450);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34458,G__34451);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34459,G__34452);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34460,G__34453);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34461,G__34454);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34462,G__34455);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34463,G__34456);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35649 = cljs.core._nth(recur_val,(0));
var G__35650 = cljs.core._nth(recur_val,(1));
var G__35651 = cljs.core._nth(recur_val,(2));
var G__35652 = cljs.core._nth(recur_val,(3));
var G__35653 = cljs.core._nth(recur_val,(4));
var G__35654 = cljs.core._nth(recur_val,(5));
var G__35655 = cljs.core._nth(recur_val,(6));
G__34450 = G__35649;
G__34451 = G__35650;
G__34452 = G__35651;
G__34453 = G__35652;
G__34454 = G__35653;
G__34455 = G__35654;
G__34456 = G__35655;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34472 = cljs.core._nth(params,(0));
var G__34473 = cljs.core._nth(params,(1));
var G__34474 = cljs.core._nth(params,(2));
var G__34475 = cljs.core._nth(params,(3));
var G__34476 = cljs.core._nth(params,(4));
var G__34477 = cljs.core._nth(params,(5));
var G__34478 = cljs.core._nth(params,(6));
var G__34479 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,G__34471){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34472,G__34464);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34473,G__34465);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34474,G__34466);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34475,G__34467);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34476,G__34468);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34477,G__34469);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34478,G__34470);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34479,G__34471);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35657 = cljs.core._nth(recur_val,(0));
var G__35658 = cljs.core._nth(recur_val,(1));
var G__35659 = cljs.core._nth(recur_val,(2));
var G__35660 = cljs.core._nth(recur_val,(3));
var G__35661 = cljs.core._nth(recur_val,(4));
var G__35662 = cljs.core._nth(recur_val,(5));
var G__35663 = cljs.core._nth(recur_val,(6));
var G__35664 = cljs.core._nth(recur_val,(7));
G__34464 = G__35657;
G__34465 = G__35658;
G__34466 = G__35659;
G__34467 = G__35660;
G__34468 = G__35661;
G__34469 = G__35662;
G__34470 = G__35663;
G__34471 = G__35664;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34488 = cljs.core._nth(params,(0));
var G__34489 = cljs.core._nth(params,(1));
var G__34490 = cljs.core._nth(params,(2));
var G__34491 = cljs.core._nth(params,(3));
var G__34492 = cljs.core._nth(params,(4));
var G__34493 = cljs.core._nth(params,(5));
var G__34494 = cljs.core._nth(params,(6));
var G__34495 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__34480,G__34481,G__34482,G__34483,G__34484,G__34485,G__34486,G__34487){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34488,G__34480);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34489,G__34481);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34490,G__34482);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34491,G__34483);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34492,G__34484);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34493,G__34485);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34494,G__34486);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34495,G__34487);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35668 = cljs.core._nth(recur_val,(0));
var G__35669 = cljs.core._nth(recur_val,(1));
var G__35670 = cljs.core._nth(recur_val,(2));
var G__35671 = cljs.core._nth(recur_val,(3));
var G__35672 = cljs.core._nth(recur_val,(4));
var G__35673 = cljs.core._nth(recur_val,(5));
var G__35674 = cljs.core._nth(recur_val,(6));
var G__35675 = cljs.core._nth(recur_val,(7));
G__34480 = G__35668;
G__34481 = G__35669;
G__34482 = G__35670;
G__34483 = G__35671;
G__34484 = G__35672;
G__34485 = G__35673;
G__34486 = G__35674;
G__34487 = G__35675;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34505 = cljs.core._nth(params,(0));
var G__34506 = cljs.core._nth(params,(1));
var G__34507 = cljs.core._nth(params,(2));
var G__34508 = cljs.core._nth(params,(3));
var G__34509 = cljs.core._nth(params,(4));
var G__34510 = cljs.core._nth(params,(5));
var G__34511 = cljs.core._nth(params,(6));
var G__34512 = cljs.core._nth(params,(7));
var G__34513 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__34496,G__34497,G__34498,G__34499,G__34500,G__34501,G__34502,G__34503,G__34504){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34505,G__34496);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34506,G__34497);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34507,G__34498);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34508,G__34499);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34509,G__34500);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34510,G__34501);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34511,G__34502);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34512,G__34503);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34513,G__34504);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35677 = cljs.core._nth(recur_val,(0));
var G__35678 = cljs.core._nth(recur_val,(1));
var G__35679 = cljs.core._nth(recur_val,(2));
var G__35680 = cljs.core._nth(recur_val,(3));
var G__35681 = cljs.core._nth(recur_val,(4));
var G__35682 = cljs.core._nth(recur_val,(5));
var G__35683 = cljs.core._nth(recur_val,(6));
var G__35684 = cljs.core._nth(recur_val,(7));
var G__35685 = cljs.core._nth(recur_val,(8));
G__34496 = G__35677;
G__34497 = G__35678;
G__34498 = G__35679;
G__34499 = G__35680;
G__34500 = G__35681;
G__34501 = G__35682;
G__34502 = G__35683;
G__34503 = G__35684;
G__34504 = G__35685;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34528 = cljs.core._nth(params,(0));
var G__34529 = cljs.core._nth(params,(1));
var G__34530 = cljs.core._nth(params,(2));
var G__34531 = cljs.core._nth(params,(3));
var G__34532 = cljs.core._nth(params,(4));
var G__34533 = cljs.core._nth(params,(5));
var G__34534 = cljs.core._nth(params,(6));
var G__34535 = cljs.core._nth(params,(7));
var G__34536 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__34519,G__34520,G__34521,G__34522,G__34523,G__34524,G__34525,G__34526,G__34527){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34528,G__34519);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34529,G__34520);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34530,G__34521);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34531,G__34522);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34532,G__34523);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34533,G__34524);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34534,G__34525);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34535,G__34526);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34536,G__34527);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35689 = cljs.core._nth(recur_val,(0));
var G__35690 = cljs.core._nth(recur_val,(1));
var G__35691 = cljs.core._nth(recur_val,(2));
var G__35692 = cljs.core._nth(recur_val,(3));
var G__35693 = cljs.core._nth(recur_val,(4));
var G__35694 = cljs.core._nth(recur_val,(5));
var G__35695 = cljs.core._nth(recur_val,(6));
var G__35696 = cljs.core._nth(recur_val,(7));
var G__35697 = cljs.core._nth(recur_val,(8));
G__34519 = G__35689;
G__34520 = G__35690;
G__34521 = G__35691;
G__34522 = G__35692;
G__34523 = G__35693;
G__34524 = G__35694;
G__34525 = G__35695;
G__34526 = G__35696;
G__34527 = G__35697;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34551 = cljs.core._nth(params,(0));
var G__34552 = cljs.core._nth(params,(1));
var G__34553 = cljs.core._nth(params,(2));
var G__34554 = cljs.core._nth(params,(3));
var G__34555 = cljs.core._nth(params,(4));
var G__34556 = cljs.core._nth(params,(5));
var G__34557 = cljs.core._nth(params,(6));
var G__34558 = cljs.core._nth(params,(7));
var G__34559 = cljs.core._nth(params,(8));
var G__34560 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__34541,G__34542,G__34543,G__34544,G__34545,G__34546,G__34547,G__34548,G__34549,G__34550){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34551,G__34541);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34552,G__34542);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34553,G__34543);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34554,G__34544);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34555,G__34545);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34556,G__34546);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34557,G__34547);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34558,G__34548);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34559,G__34549);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34560,G__34550);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35699 = cljs.core._nth(recur_val,(0));
var G__35700 = cljs.core._nth(recur_val,(1));
var G__35701 = cljs.core._nth(recur_val,(2));
var G__35702 = cljs.core._nth(recur_val,(3));
var G__35703 = cljs.core._nth(recur_val,(4));
var G__35704 = cljs.core._nth(recur_val,(5));
var G__35705 = cljs.core._nth(recur_val,(6));
var G__35706 = cljs.core._nth(recur_val,(7));
var G__35707 = cljs.core._nth(recur_val,(8));
var G__35708 = cljs.core._nth(recur_val,(9));
G__34541 = G__35699;
G__34542 = G__35700;
G__34543 = G__35701;
G__34544 = G__35702;
G__34545 = G__35703;
G__34546 = G__35704;
G__34547 = G__35705;
G__34548 = G__35706;
G__34549 = G__35707;
G__34550 = G__35708;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34573 = cljs.core._nth(params,(0));
var G__34574 = cljs.core._nth(params,(1));
var G__34575 = cljs.core._nth(params,(2));
var G__34576 = cljs.core._nth(params,(3));
var G__34577 = cljs.core._nth(params,(4));
var G__34578 = cljs.core._nth(params,(5));
var G__34579 = cljs.core._nth(params,(6));
var G__34580 = cljs.core._nth(params,(7));
var G__34581 = cljs.core._nth(params,(8));
var G__34582 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__34563,G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34573,G__34563);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34574,G__34564);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34575,G__34565);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34576,G__34566);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34577,G__34567);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34578,G__34568);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34579,G__34569);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34580,G__34570);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34581,G__34571);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34582,G__34572);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35712 = cljs.core._nth(recur_val,(0));
var G__35713 = cljs.core._nth(recur_val,(1));
var G__35714 = cljs.core._nth(recur_val,(2));
var G__35715 = cljs.core._nth(recur_val,(3));
var G__35716 = cljs.core._nth(recur_val,(4));
var G__35717 = cljs.core._nth(recur_val,(5));
var G__35718 = cljs.core._nth(recur_val,(6));
var G__35719 = cljs.core._nth(recur_val,(7));
var G__35720 = cljs.core._nth(recur_val,(8));
var G__35721 = cljs.core._nth(recur_val,(9));
G__34563 = G__35712;
G__34564 = G__35713;
G__34565 = G__35714;
G__34566 = G__35715;
G__34567 = G__35716;
G__34568 = G__35717;
G__34569 = G__35718;
G__34570 = G__35719;
G__34571 = G__35720;
G__34572 = G__35721;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34604 = cljs.core._nth(params,(0));
var G__34605 = cljs.core._nth(params,(1));
var G__34606 = cljs.core._nth(params,(2));
var G__34607 = cljs.core._nth(params,(3));
var G__34608 = cljs.core._nth(params,(4));
var G__34609 = cljs.core._nth(params,(5));
var G__34610 = cljs.core._nth(params,(6));
var G__34611 = cljs.core._nth(params,(7));
var G__34612 = cljs.core._nth(params,(8));
var G__34613 = cljs.core._nth(params,(9));
var G__34614 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__34593,G__34594,G__34595,G__34596,G__34597,G__34598,G__34599,G__34600,G__34601,G__34602,G__34603){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34604,G__34593);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34605,G__34594);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34606,G__34595);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34607,G__34596);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34608,G__34597);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34609,G__34598);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34610,G__34599);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34611,G__34600);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34612,G__34601);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34613,G__34602);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34614,G__34603);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35723 = cljs.core._nth(recur_val,(0));
var G__35724 = cljs.core._nth(recur_val,(1));
var G__35725 = cljs.core._nth(recur_val,(2));
var G__35726 = cljs.core._nth(recur_val,(3));
var G__35727 = cljs.core._nth(recur_val,(4));
var G__35728 = cljs.core._nth(recur_val,(5));
var G__35729 = cljs.core._nth(recur_val,(6));
var G__35730 = cljs.core._nth(recur_val,(7));
var G__35731 = cljs.core._nth(recur_val,(8));
var G__35732 = cljs.core._nth(recur_val,(9));
var G__35733 = cljs.core._nth(recur_val,(10));
G__34593 = G__35723;
G__34594 = G__35724;
G__34595 = G__35725;
G__34596 = G__35726;
G__34597 = G__35727;
G__34598 = G__35728;
G__34599 = G__35729;
G__34600 = G__35730;
G__34601 = G__35731;
G__34602 = G__35732;
G__34603 = G__35733;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34628 = cljs.core._nth(params,(0));
var G__34629 = cljs.core._nth(params,(1));
var G__34630 = cljs.core._nth(params,(2));
var G__34631 = cljs.core._nth(params,(3));
var G__34632 = cljs.core._nth(params,(4));
var G__34633 = cljs.core._nth(params,(5));
var G__34634 = cljs.core._nth(params,(6));
var G__34635 = cljs.core._nth(params,(7));
var G__34636 = cljs.core._nth(params,(8));
var G__34637 = cljs.core._nth(params,(9));
var G__34638 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__34617,G__34618,G__34619,G__34620,G__34621,G__34622,G__34623,G__34624,G__34625,G__34626,G__34627){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34628,G__34617);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34629,G__34618);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34630,G__34619);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34631,G__34620);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34632,G__34621);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34633,G__34622);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34634,G__34623);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34635,G__34624);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34636,G__34625);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34637,G__34626);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34638,G__34627);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35737 = cljs.core._nth(recur_val,(0));
var G__35738 = cljs.core._nth(recur_val,(1));
var G__35739 = cljs.core._nth(recur_val,(2));
var G__35740 = cljs.core._nth(recur_val,(3));
var G__35741 = cljs.core._nth(recur_val,(4));
var G__35742 = cljs.core._nth(recur_val,(5));
var G__35743 = cljs.core._nth(recur_val,(6));
var G__35744 = cljs.core._nth(recur_val,(7));
var G__35745 = cljs.core._nth(recur_val,(8));
var G__35746 = cljs.core._nth(recur_val,(9));
var G__35747 = cljs.core._nth(recur_val,(10));
G__34617 = G__35737;
G__34618 = G__35738;
G__34619 = G__35739;
G__34620 = G__35740;
G__34621 = G__35741;
G__34622 = G__35742;
G__34623 = G__35743;
G__34624 = G__35744;
G__34625 = G__35745;
G__34626 = G__35746;
G__34627 = G__35747;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34661 = cljs.core._nth(params,(0));
var G__34662 = cljs.core._nth(params,(1));
var G__34663 = cljs.core._nth(params,(2));
var G__34664 = cljs.core._nth(params,(3));
var G__34665 = cljs.core._nth(params,(4));
var G__34666 = cljs.core._nth(params,(5));
var G__34667 = cljs.core._nth(params,(6));
var G__34668 = cljs.core._nth(params,(7));
var G__34669 = cljs.core._nth(params,(8));
var G__34670 = cljs.core._nth(params,(9));
var G__34671 = cljs.core._nth(params,(10));
var G__34672 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__34649,G__34650,G__34651,G__34652,G__34653,G__34654,G__34655,G__34656,G__34657,G__34658,G__34659,G__34660){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34661,G__34649);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34662,G__34650);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34663,G__34651);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34664,G__34652);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34665,G__34653);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34666,G__34654);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34667,G__34655);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34668,G__34656);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34669,G__34657);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34670,G__34658);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34671,G__34659);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34672,G__34660);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35749 = cljs.core._nth(recur_val,(0));
var G__35750 = cljs.core._nth(recur_val,(1));
var G__35751 = cljs.core._nth(recur_val,(2));
var G__35752 = cljs.core._nth(recur_val,(3));
var G__35753 = cljs.core._nth(recur_val,(4));
var G__35754 = cljs.core._nth(recur_val,(5));
var G__35755 = cljs.core._nth(recur_val,(6));
var G__35756 = cljs.core._nth(recur_val,(7));
var G__35757 = cljs.core._nth(recur_val,(8));
var G__35758 = cljs.core._nth(recur_val,(9));
var G__35759 = cljs.core._nth(recur_val,(10));
var G__35760 = cljs.core._nth(recur_val,(11));
G__34649 = G__35749;
G__34650 = G__35750;
G__34651 = G__35751;
G__34652 = G__35752;
G__34653 = G__35753;
G__34654 = G__35754;
G__34655 = G__35755;
G__34656 = G__35756;
G__34657 = G__35757;
G__34658 = G__35758;
G__34659 = G__35759;
G__34660 = G__35760;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34706 = cljs.core._nth(params,(0));
var G__34707 = cljs.core._nth(params,(1));
var G__34708 = cljs.core._nth(params,(2));
var G__34709 = cljs.core._nth(params,(3));
var G__34710 = cljs.core._nth(params,(4));
var G__34711 = cljs.core._nth(params,(5));
var G__34712 = cljs.core._nth(params,(6));
var G__34713 = cljs.core._nth(params,(7));
var G__34714 = cljs.core._nth(params,(8));
var G__34715 = cljs.core._nth(params,(9));
var G__34716 = cljs.core._nth(params,(10));
var G__34717 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__34694,G__34695,G__34696,G__34697,G__34698,G__34699,G__34700,G__34701,G__34702,G__34703,G__34704,G__34705){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34706,G__34694);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34707,G__34695);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34708,G__34696);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34709,G__34697);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34710,G__34698);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34711,G__34699);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34712,G__34700);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34713,G__34701);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34714,G__34702);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34715,G__34703);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34716,G__34704);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34717,G__34705);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35763 = cljs.core._nth(recur_val,(0));
var G__35764 = cljs.core._nth(recur_val,(1));
var G__35765 = cljs.core._nth(recur_val,(2));
var G__35766 = cljs.core._nth(recur_val,(3));
var G__35767 = cljs.core._nth(recur_val,(4));
var G__35768 = cljs.core._nth(recur_val,(5));
var G__35769 = cljs.core._nth(recur_val,(6));
var G__35770 = cljs.core._nth(recur_val,(7));
var G__35771 = cljs.core._nth(recur_val,(8));
var G__35772 = cljs.core._nth(recur_val,(9));
var G__35773 = cljs.core._nth(recur_val,(10));
var G__35774 = cljs.core._nth(recur_val,(11));
G__34694 = G__35763;
G__34695 = G__35764;
G__34696 = G__35765;
G__34697 = G__35766;
G__34698 = G__35767;
G__34699 = G__35768;
G__34700 = G__35769;
G__34701 = G__35770;
G__34702 = G__35771;
G__34703 = G__35772;
G__34704 = G__35773;
G__34705 = G__35774;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34747 = cljs.core._nth(params,(0));
var G__34748 = cljs.core._nth(params,(1));
var G__34749 = cljs.core._nth(params,(2));
var G__34750 = cljs.core._nth(params,(3));
var G__34751 = cljs.core._nth(params,(4));
var G__34752 = cljs.core._nth(params,(5));
var G__34753 = cljs.core._nth(params,(6));
var G__34754 = cljs.core._nth(params,(7));
var G__34755 = cljs.core._nth(params,(8));
var G__34756 = cljs.core._nth(params,(9));
var G__34757 = cljs.core._nth(params,(10));
var G__34758 = cljs.core._nth(params,(11));
var G__34759 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__34734,G__34735,G__34736,G__34737,G__34738,G__34739,G__34740,G__34741,G__34742,G__34743,G__34744,G__34745,G__34746){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34747,G__34734);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34748,G__34735);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34749,G__34736);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34750,G__34737);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34751,G__34738);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34752,G__34739);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34753,G__34740);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34754,G__34741);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34755,G__34742);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34756,G__34743);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34757,G__34744);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34758,G__34745);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34759,G__34746);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35777 = cljs.core._nth(recur_val,(0));
var G__35778 = cljs.core._nth(recur_val,(1));
var G__35779 = cljs.core._nth(recur_val,(2));
var G__35780 = cljs.core._nth(recur_val,(3));
var G__35781 = cljs.core._nth(recur_val,(4));
var G__35782 = cljs.core._nth(recur_val,(5));
var G__35783 = cljs.core._nth(recur_val,(6));
var G__35784 = cljs.core._nth(recur_val,(7));
var G__35785 = cljs.core._nth(recur_val,(8));
var G__35786 = cljs.core._nth(recur_val,(9));
var G__35787 = cljs.core._nth(recur_val,(10));
var G__35788 = cljs.core._nth(recur_val,(11));
var G__35789 = cljs.core._nth(recur_val,(12));
G__34734 = G__35777;
G__34735 = G__35778;
G__34736 = G__35779;
G__34737 = G__35780;
G__34738 = G__35781;
G__34739 = G__35782;
G__34740 = G__35783;
G__34741 = G__35784;
G__34742 = G__35785;
G__34743 = G__35786;
G__34744 = G__35787;
G__34745 = G__35788;
G__34746 = G__35789;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34784 = cljs.core._nth(params,(0));
var G__34785 = cljs.core._nth(params,(1));
var G__34786 = cljs.core._nth(params,(2));
var G__34787 = cljs.core._nth(params,(3));
var G__34788 = cljs.core._nth(params,(4));
var G__34789 = cljs.core._nth(params,(5));
var G__34790 = cljs.core._nth(params,(6));
var G__34791 = cljs.core._nth(params,(7));
var G__34792 = cljs.core._nth(params,(8));
var G__34793 = cljs.core._nth(params,(9));
var G__34794 = cljs.core._nth(params,(10));
var G__34795 = cljs.core._nth(params,(11));
var G__34796 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__34771,G__34772,G__34773,G__34774,G__34775,G__34776,G__34777,G__34778,G__34779,G__34780,G__34781,G__34782,G__34783){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34784,G__34771);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34785,G__34772);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34786,G__34773);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34787,G__34774);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34788,G__34775);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34789,G__34776);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34790,G__34777);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34791,G__34778);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34792,G__34779);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34793,G__34780);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34794,G__34781);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34795,G__34782);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34796,G__34783);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35796 = cljs.core._nth(recur_val,(0));
var G__35797 = cljs.core._nth(recur_val,(1));
var G__35798 = cljs.core._nth(recur_val,(2));
var G__35799 = cljs.core._nth(recur_val,(3));
var G__35800 = cljs.core._nth(recur_val,(4));
var G__35801 = cljs.core._nth(recur_val,(5));
var G__35802 = cljs.core._nth(recur_val,(6));
var G__35803 = cljs.core._nth(recur_val,(7));
var G__35804 = cljs.core._nth(recur_val,(8));
var G__35805 = cljs.core._nth(recur_val,(9));
var G__35806 = cljs.core._nth(recur_val,(10));
var G__35807 = cljs.core._nth(recur_val,(11));
var G__35808 = cljs.core._nth(recur_val,(12));
G__34771 = G__35796;
G__34772 = G__35797;
G__34773 = G__35798;
G__34774 = G__35799;
G__34775 = G__35800;
G__34776 = G__35801;
G__34777 = G__35802;
G__34778 = G__35803;
G__34779 = G__35804;
G__34780 = G__35805;
G__34781 = G__35806;
G__34782 = G__35807;
G__34783 = G__35808;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34813 = cljs.core._nth(params,(0));
var G__34814 = cljs.core._nth(params,(1));
var G__34815 = cljs.core._nth(params,(2));
var G__34816 = cljs.core._nth(params,(3));
var G__34817 = cljs.core._nth(params,(4));
var G__34818 = cljs.core._nth(params,(5));
var G__34819 = cljs.core._nth(params,(6));
var G__34820 = cljs.core._nth(params,(7));
var G__34821 = cljs.core._nth(params,(8));
var G__34822 = cljs.core._nth(params,(9));
var G__34823 = cljs.core._nth(params,(10));
var G__34824 = cljs.core._nth(params,(11));
var G__34825 = cljs.core._nth(params,(12));
var G__34826 = cljs.core._nth(params,(13));
var G__34827 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__34798,G__34799,G__34800,G__34801,G__34802,G__34803,G__34804,G__34805,G__34806,G__34807,G__34808,G__34809,G__34810,G__34811,G__34812){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34813,G__34798);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34814,G__34799);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34815,G__34800);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34816,G__34801);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34817,G__34802);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34818,G__34803);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34819,G__34804);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34820,G__34805);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34821,G__34806);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34822,G__34807);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34823,G__34808);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34824,G__34809);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34825,G__34810);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__34826,G__34811);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__34827,G__34812);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35813 = cljs.core._nth(recur_val,(0));
var G__35814 = cljs.core._nth(recur_val,(1));
var G__35815 = cljs.core._nth(recur_val,(2));
var G__35816 = cljs.core._nth(recur_val,(3));
var G__35817 = cljs.core._nth(recur_val,(4));
var G__35818 = cljs.core._nth(recur_val,(5));
var G__35819 = cljs.core._nth(recur_val,(6));
var G__35820 = cljs.core._nth(recur_val,(7));
var G__35821 = cljs.core._nth(recur_val,(8));
var G__35822 = cljs.core._nth(recur_val,(9));
var G__35823 = cljs.core._nth(recur_val,(10));
var G__35824 = cljs.core._nth(recur_val,(11));
var G__35825 = cljs.core._nth(recur_val,(12));
var G__35826 = cljs.core._nth(recur_val,(13));
var G__35827 = cljs.core._nth(recur_val,(14));
G__34798 = G__35813;
G__34799 = G__35814;
G__34800 = G__35815;
G__34801 = G__35816;
G__34802 = G__35817;
G__34803 = G__35818;
G__34804 = G__35819;
G__34805 = G__35820;
G__34806 = G__35821;
G__34807 = G__35822;
G__34808 = G__35823;
G__34809 = G__35824;
G__34810 = G__35825;
G__34811 = G__35826;
G__34812 = G__35827;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34845 = cljs.core._nth(params,(0));
var G__34846 = cljs.core._nth(params,(1));
var G__34847 = cljs.core._nth(params,(2));
var G__34848 = cljs.core._nth(params,(3));
var G__34849 = cljs.core._nth(params,(4));
var G__34850 = cljs.core._nth(params,(5));
var G__34851 = cljs.core._nth(params,(6));
var G__34852 = cljs.core._nth(params,(7));
var G__34853 = cljs.core._nth(params,(8));
var G__34854 = cljs.core._nth(params,(9));
var G__34855 = cljs.core._nth(params,(10));
var G__34856 = cljs.core._nth(params,(11));
var G__34857 = cljs.core._nth(params,(12));
var G__34858 = cljs.core._nth(params,(13));
var G__34859 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__34830,G__34831,G__34832,G__34833,G__34834,G__34835,G__34836,G__34837,G__34838,G__34839,G__34840,G__34841,G__34842,G__34843,G__34844){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34845,G__34830);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34846,G__34831);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34847,G__34832);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34848,G__34833);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34849,G__34834);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34850,G__34835);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34851,G__34836);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34852,G__34837);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34853,G__34838);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34854,G__34839);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34855,G__34840);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34856,G__34841);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34857,G__34842);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__34858,G__34843);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__34859,G__34844);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35829 = cljs.core._nth(recur_val,(0));
var G__35830 = cljs.core._nth(recur_val,(1));
var G__35831 = cljs.core._nth(recur_val,(2));
var G__35832 = cljs.core._nth(recur_val,(3));
var G__35833 = cljs.core._nth(recur_val,(4));
var G__35834 = cljs.core._nth(recur_val,(5));
var G__35835 = cljs.core._nth(recur_val,(6));
var G__35836 = cljs.core._nth(recur_val,(7));
var G__35837 = cljs.core._nth(recur_val,(8));
var G__35838 = cljs.core._nth(recur_val,(9));
var G__35839 = cljs.core._nth(recur_val,(10));
var G__35840 = cljs.core._nth(recur_val,(11));
var G__35841 = cljs.core._nth(recur_val,(12));
var G__35842 = cljs.core._nth(recur_val,(13));
var G__35843 = cljs.core._nth(recur_val,(14));
G__34830 = G__35829;
G__34831 = G__35830;
G__34832 = G__35831;
G__34833 = G__35832;
G__34834 = G__35833;
G__34835 = G__35834;
G__34836 = G__35835;
G__34837 = G__35836;
G__34838 = G__35837;
G__34839 = G__35838;
G__34840 = G__35839;
G__34841 = G__35840;
G__34842 = G__35841;
G__34843 = G__35842;
G__34844 = G__35843;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34880 = cljs.core._nth(params,(0));
var G__34881 = cljs.core._nth(params,(1));
var G__34882 = cljs.core._nth(params,(2));
var G__34883 = cljs.core._nth(params,(3));
var G__34884 = cljs.core._nth(params,(4));
var G__34885 = cljs.core._nth(params,(5));
var G__34886 = cljs.core._nth(params,(6));
var G__34887 = cljs.core._nth(params,(7));
var G__34888 = cljs.core._nth(params,(8));
var G__34889 = cljs.core._nth(params,(9));
var G__34890 = cljs.core._nth(params,(10));
var G__34891 = cljs.core._nth(params,(11));
var G__34892 = cljs.core._nth(params,(12));
var G__34893 = cljs.core._nth(params,(13));
var G__34894 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__34865,G__34866,G__34867,G__34868,G__34869,G__34870,G__34871,G__34872,G__34873,G__34874,G__34875,G__34876,G__34877,G__34878,G__34879){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34880,G__34865);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34881,G__34866);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34882,G__34867);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34883,G__34868);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34884,G__34869);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34885,G__34870);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34886,G__34871);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34887,G__34872);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34888,G__34873);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34889,G__34874);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34890,G__34875);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34891,G__34876);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34892,G__34877);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__34893,G__34878);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__34894,G__34879);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35856 = cljs.core._nth(recur_val,(0));
var G__35857 = cljs.core._nth(recur_val,(1));
var G__35858 = cljs.core._nth(recur_val,(2));
var G__35859 = cljs.core._nth(recur_val,(3));
var G__35860 = cljs.core._nth(recur_val,(4));
var G__35861 = cljs.core._nth(recur_val,(5));
var G__35862 = cljs.core._nth(recur_val,(6));
var G__35863 = cljs.core._nth(recur_val,(7));
var G__35864 = cljs.core._nth(recur_val,(8));
var G__35865 = cljs.core._nth(recur_val,(9));
var G__35866 = cljs.core._nth(recur_val,(10));
var G__35867 = cljs.core._nth(recur_val,(11));
var G__35868 = cljs.core._nth(recur_val,(12));
var G__35869 = cljs.core._nth(recur_val,(13));
var G__35870 = cljs.core._nth(recur_val,(14));
G__34865 = G__35856;
G__34866 = G__35857;
G__34867 = G__35858;
G__34868 = G__35859;
G__34869 = G__35860;
G__34870 = G__35861;
G__34871 = G__35862;
G__34872 = G__35863;
G__34873 = G__35864;
G__34874 = G__35865;
G__34875 = G__35866;
G__34876 = G__35867;
G__34877 = G__35868;
G__34878 = G__35869;
G__34879 = G__35870;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__34912 = cljs.core._nth(params,(0));
var G__34913 = cljs.core._nth(params,(1));
var G__34914 = cljs.core._nth(params,(2));
var G__34915 = cljs.core._nth(params,(3));
var G__34916 = cljs.core._nth(params,(4));
var G__34917 = cljs.core._nth(params,(5));
var G__34918 = cljs.core._nth(params,(6));
var G__34919 = cljs.core._nth(params,(7));
var G__34920 = cljs.core._nth(params,(8));
var G__34921 = cljs.core._nth(params,(9));
var G__34922 = cljs.core._nth(params,(10));
var G__34923 = cljs.core._nth(params,(11));
var G__34924 = cljs.core._nth(params,(12));
var G__34925 = cljs.core._nth(params,(13));
var G__34926 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__34897,G__34898,G__34899,G__34900,G__34901,G__34902,G__34903,G__34904,G__34905,G__34906,G__34907,G__34908,G__34909,G__34910,G__34911){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__34912,G__34897);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34913,G__34898);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34914,G__34899);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34915,G__34900);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34916,G__34901);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34917,G__34902);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34918,G__34903);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34919,G__34904);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34920,G__34905);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34921,G__34906);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34922,G__34907);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34923,G__34908);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34924,G__34909);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__34925,G__34910);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__34926,G__34911);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35888 = cljs.core._nth(recur_val,(0));
var G__35889 = cljs.core._nth(recur_val,(1));
var G__35890 = cljs.core._nth(recur_val,(2));
var G__35891 = cljs.core._nth(recur_val,(3));
var G__35892 = cljs.core._nth(recur_val,(4));
var G__35893 = cljs.core._nth(recur_val,(5));
var G__35894 = cljs.core._nth(recur_val,(6));
var G__35895 = cljs.core._nth(recur_val,(7));
var G__35896 = cljs.core._nth(recur_val,(8));
var G__35897 = cljs.core._nth(recur_val,(9));
var G__35898 = cljs.core._nth(recur_val,(10));
var G__35899 = cljs.core._nth(recur_val,(11));
var G__35900 = cljs.core._nth(recur_val,(12));
var G__35901 = cljs.core._nth(recur_val,(13));
var G__35902 = cljs.core._nth(recur_val,(14));
G__34897 = G__35888;
G__34898 = G__35889;
G__34899 = G__35890;
G__34900 = G__35891;
G__34901 = G__35892;
G__34902 = G__35893;
G__34903 = G__35894;
G__34904 = G__35895;
G__34905 = G__35896;
G__34906 = G__35897;
G__34907 = G__35898;
G__34908 = G__35899;
G__34909 = G__35900;
G__34910 = G__35901;
G__34911 = G__35902;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__34949 = cljs.core._nth(params,(0));
var G__34950 = cljs.core._nth(params,(1));
var G__34951 = cljs.core._nth(params,(2));
var G__34952 = cljs.core._nth(params,(3));
var G__34953 = cljs.core._nth(params,(4));
var G__34954 = cljs.core._nth(params,(5));
var G__34955 = cljs.core._nth(params,(6));
var G__34956 = cljs.core._nth(params,(7));
var G__34957 = cljs.core._nth(params,(8));
var G__34958 = cljs.core._nth(params,(9));
var G__34959 = cljs.core._nth(params,(10));
var G__34960 = cljs.core._nth(params,(11));
var G__34961 = cljs.core._nth(params,(12));
var G__34962 = cljs.core._nth(params,(13));
var G__34963 = cljs.core._nth(params,(14));
var G__34964 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__34933,G__34934,G__34935,G__34936,G__34937,G__34938,G__34939,G__34940,G__34941,G__34942,G__34943,G__34944,G__34945,G__34946,G__34947,G__34948){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__34949,G__34933);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__34950,G__34934);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__34951,G__34935);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__34952,G__34936);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__34953,G__34937);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__34954,G__34938);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__34955,G__34939);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__34956,G__34940);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__34957,G__34941);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__34958,G__34942);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__34959,G__34943);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__34960,G__34944);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__34961,G__34945);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__34962,G__34946);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__34963,G__34947);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__34964,G__34948);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35912 = cljs.core._nth(recur_val,(0));
var G__35913 = cljs.core._nth(recur_val,(1));
var G__35914 = cljs.core._nth(recur_val,(2));
var G__35915 = cljs.core._nth(recur_val,(3));
var G__35916 = cljs.core._nth(recur_val,(4));
var G__35917 = cljs.core._nth(recur_val,(5));
var G__35918 = cljs.core._nth(recur_val,(6));
var G__35919 = cljs.core._nth(recur_val,(7));
var G__35920 = cljs.core._nth(recur_val,(8));
var G__35921 = cljs.core._nth(recur_val,(9));
var G__35922 = cljs.core._nth(recur_val,(10));
var G__35923 = cljs.core._nth(recur_val,(11));
var G__35924 = cljs.core._nth(recur_val,(12));
var G__35925 = cljs.core._nth(recur_val,(13));
var G__35926 = cljs.core._nth(recur_val,(14));
var G__35927 = cljs.core._nth(recur_val,(15));
G__34933 = G__35912;
G__34934 = G__35913;
G__34935 = G__35914;
G__34936 = G__35915;
G__34937 = G__35916;
G__34938 = G__35917;
G__34939 = G__35918;
G__34940 = G__35919;
G__34941 = G__35920;
G__34942 = G__35921;
G__34943 = G__35922;
G__34944 = G__35923;
G__34945 = G__35924;
G__34946 = G__35925;
G__34947 = G__35926;
G__34948 = G__35927;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__35122 = cljs.core._nth(params,(0));
var G__35123 = cljs.core._nth(params,(1));
var G__35124 = cljs.core._nth(params,(2));
var G__35125 = cljs.core._nth(params,(3));
var G__35126 = cljs.core._nth(params,(4));
var G__35127 = cljs.core._nth(params,(5));
var G__35128 = cljs.core._nth(params,(6));
var G__35129 = cljs.core._nth(params,(7));
var G__35130 = cljs.core._nth(params,(8));
var G__35131 = cljs.core._nth(params,(9));
var G__35132 = cljs.core._nth(params,(10));
var G__35133 = cljs.core._nth(params,(11));
var G__35134 = cljs.core._nth(params,(12));
var G__35135 = cljs.core._nth(params,(13));
var G__35136 = cljs.core._nth(params,(14));
var G__35137 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__35106,G__35107,G__35108,G__35109,G__35110,G__35111,G__35112,G__35113,G__35114,G__35115,G__35116,G__35117,G__35118,G__35119,G__35120,G__35121){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__35122,G__35106);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35123,G__35107);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35124,G__35108);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35125,G__35109);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35126,G__35110);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35127,G__35111);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35128,G__35112);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35129,G__35113);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35130,G__35114);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35131,G__35115);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35132,G__35116);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35133,G__35117);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35134,G__35118);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35135,G__35119);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35136,G__35120);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35137,G__35121);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35937 = cljs.core._nth(recur_val,(0));
var G__35938 = cljs.core._nth(recur_val,(1));
var G__35939 = cljs.core._nth(recur_val,(2));
var G__35940 = cljs.core._nth(recur_val,(3));
var G__35941 = cljs.core._nth(recur_val,(4));
var G__35942 = cljs.core._nth(recur_val,(5));
var G__35943 = cljs.core._nth(recur_val,(6));
var G__35944 = cljs.core._nth(recur_val,(7));
var G__35945 = cljs.core._nth(recur_val,(8));
var G__35946 = cljs.core._nth(recur_val,(9));
var G__35947 = cljs.core._nth(recur_val,(10));
var G__35948 = cljs.core._nth(recur_val,(11));
var G__35949 = cljs.core._nth(recur_val,(12));
var G__35950 = cljs.core._nth(recur_val,(13));
var G__35951 = cljs.core._nth(recur_val,(14));
var G__35952 = cljs.core._nth(recur_val,(15));
G__35106 = G__35937;
G__35107 = G__35938;
G__35108 = G__35939;
G__35109 = G__35940;
G__35110 = G__35941;
G__35111 = G__35942;
G__35112 = G__35943;
G__35113 = G__35944;
G__35114 = G__35945;
G__35115 = G__35946;
G__35116 = G__35947;
G__35117 = G__35948;
G__35118 = G__35949;
G__35119 = G__35950;
G__35120 = G__35951;
G__35121 = G__35952;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__35156 = cljs.core._nth(params,(0));
var G__35157 = cljs.core._nth(params,(1));
var G__35158 = cljs.core._nth(params,(2));
var G__35159 = cljs.core._nth(params,(3));
var G__35160 = cljs.core._nth(params,(4));
var G__35161 = cljs.core._nth(params,(5));
var G__35162 = cljs.core._nth(params,(6));
var G__35163 = cljs.core._nth(params,(7));
var G__35164 = cljs.core._nth(params,(8));
var G__35165 = cljs.core._nth(params,(9));
var G__35166 = cljs.core._nth(params,(10));
var G__35167 = cljs.core._nth(params,(11));
var G__35168 = cljs.core._nth(params,(12));
var G__35169 = cljs.core._nth(params,(13));
var G__35170 = cljs.core._nth(params,(14));
var G__35171 = cljs.core._nth(params,(15));
var G__35172 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,G__35150,G__35151,G__35152,G__35153,G__35154,G__35155){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__35156,G__35139);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35157,G__35140);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35158,G__35141);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35159,G__35142);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35160,G__35143);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35161,G__35144);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35162,G__35145);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35163,G__35146);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35164,G__35147);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35165,G__35148);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35166,G__35149);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35167,G__35150);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35168,G__35151);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35169,G__35152);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35170,G__35153);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35171,G__35154);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35172,G__35155);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35955 = cljs.core._nth(recur_val,(0));
var G__35956 = cljs.core._nth(recur_val,(1));
var G__35957 = cljs.core._nth(recur_val,(2));
var G__35958 = cljs.core._nth(recur_val,(3));
var G__35959 = cljs.core._nth(recur_val,(4));
var G__35960 = cljs.core._nth(recur_val,(5));
var G__35961 = cljs.core._nth(recur_val,(6));
var G__35962 = cljs.core._nth(recur_val,(7));
var G__35963 = cljs.core._nth(recur_val,(8));
var G__35964 = cljs.core._nth(recur_val,(9));
var G__35965 = cljs.core._nth(recur_val,(10));
var G__35966 = cljs.core._nth(recur_val,(11));
var G__35967 = cljs.core._nth(recur_val,(12));
var G__35968 = cljs.core._nth(recur_val,(13));
var G__35969 = cljs.core._nth(recur_val,(14));
var G__35970 = cljs.core._nth(recur_val,(15));
var G__35971 = cljs.core._nth(recur_val,(16));
G__35139 = G__35955;
G__35140 = G__35956;
G__35141 = G__35957;
G__35142 = G__35958;
G__35143 = G__35959;
G__35144 = G__35960;
G__35145 = G__35961;
G__35146 = G__35962;
G__35147 = G__35963;
G__35148 = G__35964;
G__35149 = G__35965;
G__35150 = G__35966;
G__35151 = G__35967;
G__35152 = G__35968;
G__35153 = G__35969;
G__35154 = G__35970;
G__35155 = G__35971;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__35197 = cljs.core._nth(params,(0));
var G__35198 = cljs.core._nth(params,(1));
var G__35199 = cljs.core._nth(params,(2));
var G__35200 = cljs.core._nth(params,(3));
var G__35201 = cljs.core._nth(params,(4));
var G__35202 = cljs.core._nth(params,(5));
var G__35203 = cljs.core._nth(params,(6));
var G__35204 = cljs.core._nth(params,(7));
var G__35205 = cljs.core._nth(params,(8));
var G__35206 = cljs.core._nth(params,(9));
var G__35207 = cljs.core._nth(params,(10));
var G__35208 = cljs.core._nth(params,(11));
var G__35209 = cljs.core._nth(params,(12));
var G__35210 = cljs.core._nth(params,(13));
var G__35211 = cljs.core._nth(params,(14));
var G__35212 = cljs.core._nth(params,(15));
var G__35213 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__35180,G__35181,G__35182,G__35183,G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__35197,G__35180);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35198,G__35181);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35199,G__35182);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35200,G__35183);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35201,G__35184);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35202,G__35185);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35203,G__35186);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35204,G__35187);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35205,G__35188);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35206,G__35189);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35207,G__35190);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35208,G__35191);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35209,G__35192);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35210,G__35193);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35211,G__35194);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35212,G__35195);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35213,G__35196);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__35979 = cljs.core._nth(recur_val,(0));
var G__35980 = cljs.core._nth(recur_val,(1));
var G__35981 = cljs.core._nth(recur_val,(2));
var G__35982 = cljs.core._nth(recur_val,(3));
var G__35983 = cljs.core._nth(recur_val,(4));
var G__35984 = cljs.core._nth(recur_val,(5));
var G__35985 = cljs.core._nth(recur_val,(6));
var G__35986 = cljs.core._nth(recur_val,(7));
var G__35987 = cljs.core._nth(recur_val,(8));
var G__35988 = cljs.core._nth(recur_val,(9));
var G__35989 = cljs.core._nth(recur_val,(10));
var G__35990 = cljs.core._nth(recur_val,(11));
var G__35991 = cljs.core._nth(recur_val,(12));
var G__35992 = cljs.core._nth(recur_val,(13));
var G__35993 = cljs.core._nth(recur_val,(14));
var G__35994 = cljs.core._nth(recur_val,(15));
var G__35995 = cljs.core._nth(recur_val,(16));
G__35180 = G__35979;
G__35181 = G__35980;
G__35182 = G__35981;
G__35183 = G__35982;
G__35184 = G__35983;
G__35185 = G__35984;
G__35186 = G__35985;
G__35187 = G__35986;
G__35188 = G__35987;
G__35189 = G__35988;
G__35190 = G__35989;
G__35191 = G__35990;
G__35192 = G__35991;
G__35193 = G__35992;
G__35194 = G__35993;
G__35195 = G__35994;
G__35196 = G__35995;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__35244 = cljs.core._nth(params,(0));
var G__35245 = cljs.core._nth(params,(1));
var G__35246 = cljs.core._nth(params,(2));
var G__35247 = cljs.core._nth(params,(3));
var G__35248 = cljs.core._nth(params,(4));
var G__35249 = cljs.core._nth(params,(5));
var G__35250 = cljs.core._nth(params,(6));
var G__35251 = cljs.core._nth(params,(7));
var G__35252 = cljs.core._nth(params,(8));
var G__35253 = cljs.core._nth(params,(9));
var G__35254 = cljs.core._nth(params,(10));
var G__35255 = cljs.core._nth(params,(11));
var G__35256 = cljs.core._nth(params,(12));
var G__35257 = cljs.core._nth(params,(13));
var G__35258 = cljs.core._nth(params,(14));
var G__35259 = cljs.core._nth(params,(15));
var G__35260 = cljs.core._nth(params,(16));
var G__35261 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__35226,G__35227,G__35228,G__35229,G__35230,G__35231,G__35232,G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,G__35240,G__35241,G__35242,G__35243){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__35244,G__35226);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35245,G__35227);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35246,G__35228);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35247,G__35229);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35248,G__35230);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35249,G__35231);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35250,G__35232);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35251,G__35233);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35252,G__35234);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35253,G__35235);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35254,G__35236);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35255,G__35237);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35256,G__35238);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35257,G__35239);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35258,G__35240);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35259,G__35241);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35260,G__35242);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__35261,G__35243);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__36001 = cljs.core._nth(recur_val,(0));
var G__36002 = cljs.core._nth(recur_val,(1));
var G__36003 = cljs.core._nth(recur_val,(2));
var G__36004 = cljs.core._nth(recur_val,(3));
var G__36005 = cljs.core._nth(recur_val,(4));
var G__36006 = cljs.core._nth(recur_val,(5));
var G__36007 = cljs.core._nth(recur_val,(6));
var G__36008 = cljs.core._nth(recur_val,(7));
var G__36009 = cljs.core._nth(recur_val,(8));
var G__36010 = cljs.core._nth(recur_val,(9));
var G__36011 = cljs.core._nth(recur_val,(10));
var G__36012 = cljs.core._nth(recur_val,(11));
var G__36013 = cljs.core._nth(recur_val,(12));
var G__36014 = cljs.core._nth(recur_val,(13));
var G__36015 = cljs.core._nth(recur_val,(14));
var G__36016 = cljs.core._nth(recur_val,(15));
var G__36017 = cljs.core._nth(recur_val,(16));
var G__36018 = cljs.core._nth(recur_val,(17));
G__35226 = G__36001;
G__35227 = G__36002;
G__35228 = G__36003;
G__35229 = G__36004;
G__35230 = G__36005;
G__35231 = G__36006;
G__35232 = G__36007;
G__35233 = G__36008;
G__35234 = G__36009;
G__35235 = G__36010;
G__35236 = G__36011;
G__35237 = G__36012;
G__35238 = G__36013;
G__35239 = G__36014;
G__35240 = G__36015;
G__35241 = G__36016;
G__35242 = G__36017;
G__35243 = G__36018;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__35293 = cljs.core._nth(params,(0));
var G__35294 = cljs.core._nth(params,(1));
var G__35295 = cljs.core._nth(params,(2));
var G__35296 = cljs.core._nth(params,(3));
var G__35297 = cljs.core._nth(params,(4));
var G__35298 = cljs.core._nth(params,(5));
var G__35299 = cljs.core._nth(params,(6));
var G__35300 = cljs.core._nth(params,(7));
var G__35301 = cljs.core._nth(params,(8));
var G__35302 = cljs.core._nth(params,(9));
var G__35303 = cljs.core._nth(params,(10));
var G__35304 = cljs.core._nth(params,(11));
var G__35305 = cljs.core._nth(params,(12));
var G__35306 = cljs.core._nth(params,(13));
var G__35307 = cljs.core._nth(params,(14));
var G__35308 = cljs.core._nth(params,(15));
var G__35309 = cljs.core._nth(params,(16));
var G__35310 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__35275,G__35276,G__35277,G__35278,G__35279,G__35280,G__35281,G__35282,G__35283,G__35284,G__35285,G__35286,G__35287,G__35288,G__35289,G__35290,G__35291,G__35292){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__35293,G__35275);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35294,G__35276);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35295,G__35277);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35296,G__35278);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35297,G__35279);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35298,G__35280);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35299,G__35281);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35300,G__35282);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35301,G__35283);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35302,G__35284);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35303,G__35285);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35304,G__35286);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35305,G__35287);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35306,G__35288);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35307,G__35289);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35308,G__35290);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35309,G__35291);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__35310,G__35292);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__36022 = cljs.core._nth(recur_val,(0));
var G__36023 = cljs.core._nth(recur_val,(1));
var G__36024 = cljs.core._nth(recur_val,(2));
var G__36025 = cljs.core._nth(recur_val,(3));
var G__36026 = cljs.core._nth(recur_val,(4));
var G__36027 = cljs.core._nth(recur_val,(5));
var G__36028 = cljs.core._nth(recur_val,(6));
var G__36029 = cljs.core._nth(recur_val,(7));
var G__36030 = cljs.core._nth(recur_val,(8));
var G__36031 = cljs.core._nth(recur_val,(9));
var G__36032 = cljs.core._nth(recur_val,(10));
var G__36033 = cljs.core._nth(recur_val,(11));
var G__36034 = cljs.core._nth(recur_val,(12));
var G__36035 = cljs.core._nth(recur_val,(13));
var G__36036 = cljs.core._nth(recur_val,(14));
var G__36037 = cljs.core._nth(recur_val,(15));
var G__36038 = cljs.core._nth(recur_val,(16));
var G__36039 = cljs.core._nth(recur_val,(17));
G__35275 = G__36022;
G__35276 = G__36023;
G__35277 = G__36024;
G__35278 = G__36025;
G__35279 = G__36026;
G__35280 = G__36027;
G__35281 = G__36028;
G__35282 = G__36029;
G__35283 = G__36030;
G__35284 = G__36031;
G__35285 = G__36032;
G__35286 = G__36033;
G__35287 = G__36034;
G__35288 = G__36035;
G__35289 = G__36036;
G__35290 = G__36037;
G__35291 = G__36038;
G__35292 = G__36039;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__35358 = cljs.core._nth(params,(0));
var G__35359 = cljs.core._nth(params,(1));
var G__35360 = cljs.core._nth(params,(2));
var G__35361 = cljs.core._nth(params,(3));
var G__35362 = cljs.core._nth(params,(4));
var G__35363 = cljs.core._nth(params,(5));
var G__35364 = cljs.core._nth(params,(6));
var G__35365 = cljs.core._nth(params,(7));
var G__35366 = cljs.core._nth(params,(8));
var G__35367 = cljs.core._nth(params,(9));
var G__35368 = cljs.core._nth(params,(10));
var G__35369 = cljs.core._nth(params,(11));
var G__35370 = cljs.core._nth(params,(12));
var G__35371 = cljs.core._nth(params,(13));
var G__35372 = cljs.core._nth(params,(14));
var G__35373 = cljs.core._nth(params,(15));
var G__35374 = cljs.core._nth(params,(16));
var G__35375 = cljs.core._nth(params,(17));
var G__35376 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__35339,G__35340,G__35341,G__35342,G__35343,G__35344,G__35345,G__35346,G__35347,G__35348,G__35349,G__35350,G__35351,G__35352,G__35353,G__35354,G__35355,G__35356,G__35357){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__35358,G__35339);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35359,G__35340);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35360,G__35341);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35361,G__35342);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35362,G__35343);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35363,G__35344);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35364,G__35345);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35365,G__35346);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35366,G__35347);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35367,G__35348);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35368,G__35349);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35369,G__35350);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35370,G__35351);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35371,G__35352);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35372,G__35353);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35373,G__35354);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35374,G__35355);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__35375,G__35356);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__35376,G__35357);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__36042 = cljs.core._nth(recur_val,(0));
var G__36043 = cljs.core._nth(recur_val,(1));
var G__36044 = cljs.core._nth(recur_val,(2));
var G__36045 = cljs.core._nth(recur_val,(3));
var G__36046 = cljs.core._nth(recur_val,(4));
var G__36047 = cljs.core._nth(recur_val,(5));
var G__36048 = cljs.core._nth(recur_val,(6));
var G__36049 = cljs.core._nth(recur_val,(7));
var G__36050 = cljs.core._nth(recur_val,(8));
var G__36051 = cljs.core._nth(recur_val,(9));
var G__36052 = cljs.core._nth(recur_val,(10));
var G__36053 = cljs.core._nth(recur_val,(11));
var G__36054 = cljs.core._nth(recur_val,(12));
var G__36055 = cljs.core._nth(recur_val,(13));
var G__36056 = cljs.core._nth(recur_val,(14));
var G__36057 = cljs.core._nth(recur_val,(15));
var G__36058 = cljs.core._nth(recur_val,(16));
var G__36059 = cljs.core._nth(recur_val,(17));
var G__36060 = cljs.core._nth(recur_val,(18));
G__35339 = G__36042;
G__35340 = G__36043;
G__35341 = G__36044;
G__35342 = G__36045;
G__35343 = G__36046;
G__35344 = G__36047;
G__35345 = G__36048;
G__35346 = G__36049;
G__35347 = G__36050;
G__35348 = G__36051;
G__35349 = G__36052;
G__35350 = G__36053;
G__35351 = G__36054;
G__35352 = G__36055;
G__35353 = G__36056;
G__35354 = G__36057;
G__35355 = G__36058;
G__35356 = G__36059;
G__35357 = G__36060;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__35412 = cljs.core._nth(params,(0));
var G__35414 = cljs.core._nth(params,(1));
var G__35415 = cljs.core._nth(params,(2));
var G__35416 = cljs.core._nth(params,(3));
var G__35417 = cljs.core._nth(params,(4));
var G__35418 = cljs.core._nth(params,(5));
var G__35419 = cljs.core._nth(params,(6));
var G__35420 = cljs.core._nth(params,(7));
var G__35421 = cljs.core._nth(params,(8));
var G__35422 = cljs.core._nth(params,(9));
var G__35423 = cljs.core._nth(params,(10));
var G__35424 = cljs.core._nth(params,(11));
var G__35425 = cljs.core._nth(params,(12));
var G__35426 = cljs.core._nth(params,(13));
var G__35427 = cljs.core._nth(params,(14));
var G__35428 = cljs.core._nth(params,(15));
var G__35429 = cljs.core._nth(params,(16));
var G__35430 = cljs.core._nth(params,(17));
var G__35431 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__35393,G__35394,G__35395,G__35396,G__35397,G__35398,G__35399,G__35400,G__35401,G__35402,G__35403,G__35404,G__35405,G__35406,G__35407,G__35408,G__35409,G__35410,G__35411){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__35412,G__35393);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35414,G__35394);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35415,G__35395);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35416,G__35396);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35417,G__35397);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35418,G__35398);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35419,G__35399);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35420,G__35400);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35421,G__35401);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35422,G__35402);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35423,G__35403);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35424,G__35404);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35425,G__35405);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35426,G__35406);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35427,G__35407);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35428,G__35408);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35429,G__35409);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__35430,G__35410);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__35431,G__35411);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__36065 = cljs.core._nth(recur_val,(0));
var G__36066 = cljs.core._nth(recur_val,(1));
var G__36067 = cljs.core._nth(recur_val,(2));
var G__36068 = cljs.core._nth(recur_val,(3));
var G__36069 = cljs.core._nth(recur_val,(4));
var G__36070 = cljs.core._nth(recur_val,(5));
var G__36071 = cljs.core._nth(recur_val,(6));
var G__36072 = cljs.core._nth(recur_val,(7));
var G__36073 = cljs.core._nth(recur_val,(8));
var G__36074 = cljs.core._nth(recur_val,(9));
var G__36075 = cljs.core._nth(recur_val,(10));
var G__36076 = cljs.core._nth(recur_val,(11));
var G__36077 = cljs.core._nth(recur_val,(12));
var G__36078 = cljs.core._nth(recur_val,(13));
var G__36079 = cljs.core._nth(recur_val,(14));
var G__36080 = cljs.core._nth(recur_val,(15));
var G__36081 = cljs.core._nth(recur_val,(16));
var G__36082 = cljs.core._nth(recur_val,(17));
var G__36083 = cljs.core._nth(recur_val,(18));
G__35393 = G__36065;
G__35394 = G__36066;
G__35395 = G__36067;
G__35396 = G__36068;
G__35397 = G__36069;
G__35398 = G__36070;
G__35399 = G__36071;
G__35400 = G__36072;
G__35401 = G__36073;
G__35402 = G__36074;
G__35403 = G__36075;
G__35404 = G__36076;
G__35405 = G__36077;
G__35406 = G__36078;
G__35407 = G__36079;
G__35408 = G__36080;
G__35409 = G__36081;
G__35410 = G__36082;
G__35411 = G__36083;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__35464 = cljs.core._nth(params,(0));
var G__35465 = cljs.core._nth(params,(1));
var G__35466 = cljs.core._nth(params,(2));
var G__35467 = cljs.core._nth(params,(3));
var G__35468 = cljs.core._nth(params,(4));
var G__35469 = cljs.core._nth(params,(5));
var G__35470 = cljs.core._nth(params,(6));
var G__35471 = cljs.core._nth(params,(7));
var G__35472 = cljs.core._nth(params,(8));
var G__35473 = cljs.core._nth(params,(9));
var G__35474 = cljs.core._nth(params,(10));
var G__35475 = cljs.core._nth(params,(11));
var G__35476 = cljs.core._nth(params,(12));
var G__35477 = cljs.core._nth(params,(13));
var G__35478 = cljs.core._nth(params,(14));
var G__35479 = cljs.core._nth(params,(15));
var G__35480 = cljs.core._nth(params,(16));
var G__35481 = cljs.core._nth(params,(17));
var G__35482 = cljs.core._nth(params,(18));
var G__35483 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__35444,G__35445,G__35446,G__35447,G__35448,G__35449,G__35450,G__35451,G__35452,G__35453,G__35454,G__35455,G__35456,G__35457,G__35458,G__35459,G__35460,G__35461,G__35462,G__35463){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__35464,G__35444);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35465,G__35445);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35466,G__35446);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35467,G__35447);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35468,G__35448);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35469,G__35449);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35470,G__35450);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35471,G__35451);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35472,G__35452);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35473,G__35453);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35474,G__35454);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35475,G__35455);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35476,G__35456);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35477,G__35457);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35478,G__35458);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35479,G__35459);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35480,G__35460);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__35481,G__35461);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__35482,G__35462);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__35483,G__35463);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__36089 = cljs.core._nth(recur_val,(0));
var G__36090 = cljs.core._nth(recur_val,(1));
var G__36091 = cljs.core._nth(recur_val,(2));
var G__36092 = cljs.core._nth(recur_val,(3));
var G__36093 = cljs.core._nth(recur_val,(4));
var G__36094 = cljs.core._nth(recur_val,(5));
var G__36095 = cljs.core._nth(recur_val,(6));
var G__36096 = cljs.core._nth(recur_val,(7));
var G__36097 = cljs.core._nth(recur_val,(8));
var G__36098 = cljs.core._nth(recur_val,(9));
var G__36099 = cljs.core._nth(recur_val,(10));
var G__36100 = cljs.core._nth(recur_val,(11));
var G__36101 = cljs.core._nth(recur_val,(12));
var G__36102 = cljs.core._nth(recur_val,(13));
var G__36103 = cljs.core._nth(recur_val,(14));
var G__36104 = cljs.core._nth(recur_val,(15));
var G__36105 = cljs.core._nth(recur_val,(16));
var G__36106 = cljs.core._nth(recur_val,(17));
var G__36107 = cljs.core._nth(recur_val,(18));
var G__36108 = cljs.core._nth(recur_val,(19));
G__35444 = G__36089;
G__35445 = G__36090;
G__35446 = G__36091;
G__35447 = G__36092;
G__35448 = G__36093;
G__35449 = G__36094;
G__35450 = G__36095;
G__35451 = G__36096;
G__35452 = G__36097;
G__35453 = G__36098;
G__35454 = G__36099;
G__35455 = G__36100;
G__35456 = G__36101;
G__35457 = G__36102;
G__35458 = G__36103;
G__35459 = G__36104;
G__35460 = G__36105;
G__35461 = G__36106;
G__35462 = G__36107;
G__35463 = G__36108;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
} else {
var G__35514 = cljs.core._nth(params,(0));
var G__35515 = cljs.core._nth(params,(1));
var G__35516 = cljs.core._nth(params,(2));
var G__35517 = cljs.core._nth(params,(3));
var G__35518 = cljs.core._nth(params,(4));
var G__35519 = cljs.core._nth(params,(5));
var G__35520 = cljs.core._nth(params,(6));
var G__35521 = cljs.core._nth(params,(7));
var G__35522 = cljs.core._nth(params,(8));
var G__35523 = cljs.core._nth(params,(9));
var G__35524 = cljs.core._nth(params,(10));
var G__35525 = cljs.core._nth(params,(11));
var G__35526 = cljs.core._nth(params,(12));
var G__35527 = cljs.core._nth(params,(13));
var G__35528 = cljs.core._nth(params,(14));
var G__35529 = cljs.core._nth(params,(15));
var G__35530 = cljs.core._nth(params,(16));
var G__35531 = cljs.core._nth(params,(17));
var G__35532 = cljs.core._nth(params,(18));
var G__35533 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__35494,G__35495,G__35496,G__35497,G__35498,G__35499,G__35500,G__35501,G__35502,G__35503,G__35504,G__35505,G__35506,G__35507,G__35508,G__35509,G__35510,G__35511,G__35512,G__35513){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__35514,G__35494);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__35515,G__35495);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__35516,G__35496);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__35517,G__35497);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__35518,G__35498);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__35519,G__35499);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__35520,G__35500);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__35521,G__35501);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__35522,G__35502);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__35523,G__35503);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__35524,G__35504);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__35525,G__35505);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__35526,G__35506);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__35527,G__35507);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__35528,G__35508);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__35529,G__35509);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__35530,G__35510);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__35531,G__35511);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__35532,G__35512);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__35533,G__35513);
var ret__33588__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___33589__auto__ = (ret__33588__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___33589__auto__){
var recur_val = sci.impl.types.getVal(ret__33588__auto__);
var G__36118 = cljs.core._nth(recur_val,(0));
var G__36119 = cljs.core._nth(recur_val,(1));
var G__36120 = cljs.core._nth(recur_val,(2));
var G__36121 = cljs.core._nth(recur_val,(3));
var G__36122 = cljs.core._nth(recur_val,(4));
var G__36123 = cljs.core._nth(recur_val,(5));
var G__36124 = cljs.core._nth(recur_val,(6));
var G__36125 = cljs.core._nth(recur_val,(7));
var G__36126 = cljs.core._nth(recur_val,(8));
var G__36127 = cljs.core._nth(recur_val,(9));
var G__36128 = cljs.core._nth(recur_val,(10));
var G__36129 = cljs.core._nth(recur_val,(11));
var G__36130 = cljs.core._nth(recur_val,(12));
var G__36131 = cljs.core._nth(recur_val,(13));
var G__36132 = cljs.core._nth(recur_val,(14));
var G__36133 = cljs.core._nth(recur_val,(15));
var G__36134 = cljs.core._nth(recur_val,(16));
var G__36135 = cljs.core._nth(recur_val,(17));
var G__36136 = cljs.core._nth(recur_val,(18));
var G__36137 = cljs.core._nth(recur_val,(19));
G__35494 = G__36118;
G__35495 = G__36119;
G__35496 = G__36120;
G__35497 = G__36121;
G__35498 = G__36122;
G__35499 = G__36123;
G__35500 = G__36124;
G__35501 = G__36125;
G__35502 = G__36126;
G__35503 = G__36127;
G__35504 = G__36128;
G__35505 = G__36129;
G__35506 = G__36130;
G__35507 = G__36131;
G__35508 = G__36132;
G__35509 = G__36133;
G__35510 = G__36134;
G__35511 = G__36135;
G__35512 = G__36136;
G__35513 = G__36137;
continue;
} else {
return ret__33588__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__36143 = cljs.core.next(args_STAR_);
var G__36144 = cljs.core.next(params__$1);
var G__36145 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__36143;
params__$1 = G__36144;
ret = G__36145;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__35547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35547,(0),null);
var vec__35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35547,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35550,(0),null);
var G__36146 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__36146;
continue;
} else {
var G__36147 = recur_val;
args = G__36147;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36148__i = 0, G__36148__a = new Array(arguments.length -  0);
while (G__36148__i < G__36148__a.length) {G__36148__a[G__36148__i] = arguments[G__36148__i + 0]; ++G__36148__i;}
  args = new cljs.core.IndexedSeq(G__36148__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__36150){
var args = cljs.core.seq(arglist__36150);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__36151 = cljs.core.next(args_STAR_);
var G__36152 = cljs.core.next(params__$1);
var G__36153 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__36151;
params__$1 = G__36152;
ret = G__36153;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__35554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35554,(0),null);
var vec__35557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35554,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(0),null);
var G__36154 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__36154;
continue;
} else {
var G__36155 = recur_val;
args = G__36155;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36156__i = 0, G__36156__a = new Array(arguments.length -  0);
while (G__36156__i < G__36156__a.length) {G__36156__a[G__36156__i] = arguments[G__36156__i + 0]; ++G__36156__i;}
  args = new cljs.core.IndexedSeq(G__36156__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__36157){
var args = cljs.core.seq(arglist__36157);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__36160__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__36160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36161__i = 0, G__36161__a = new Array(arguments.length -  0);
while (G__36161__i < G__36161__a.length) {G__36161__a[G__36161__i] = arguments[G__36161__i + 0]; ++G__36161__i;}
  args = new cljs.core.IndexedSeq(G__36161__a,0,null);
} 
return G__36160__delegate.call(this,args);};
G__36160.cljs$lang$maxFixedArity = 0;
G__36160.cljs$lang$applyTo = (function (arglist__36162){
var args = cljs.core.seq(arglist__36162);
return G__36160__delegate(args);
});
G__36160.cljs$core$IFn$_invoke$arity$variadic = G__36160__delegate;
return G__36160;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__35567_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35567_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
