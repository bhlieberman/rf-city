goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});



sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
var G__43506 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__43507 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43506,G__43507) : sci.impl.analyzer.analyze.call(null,G__43506,G__43507));
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
}catch (e43508){var _ = e43508;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)))){
return expr;
} else {
var f__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__5043__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5043__auto__;
}
})())?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__43510 = f__$1;
var G__43510__$1 = (((G__43510 == null))?null:cljs.core.meta(G__43510));
if((G__43510__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__43510__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(expr,analyzed_children){
var G__43521 = cljs.core.count(analyzed_children);
switch (G__43521) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

return sci.impl.evaluator.eval(ctx,bindings,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

sci.impl.evaluator.eval(ctx,bindings,arg1);

return sci.impl.evaluator.eval(ctx,bindings,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_do(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(expr,analyzed_children){
var G__43540 = cljs.core.count(analyzed_children);
switch (G__43540) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
var or__5045__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5045__auto____$16)){
return or__5045__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
var or__5045__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5045__auto____$16)){
return or__5045__auto____$16;
} else {
var or__5045__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(or__5045__auto____$17)){
return or__5045__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_or(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(expr,analyzed_children){
var G__43592 = cljs.core.count(analyzed_children);
switch (G__43592) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
return sci.impl.evaluator.eval(ctx,bindings,arg1);
} else {
return and__5043__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
return sci.impl.evaluator.eval(ctx,bindings,arg2);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
return sci.impl.evaluator.eval(ctx,bindings,arg3);
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
return sci.impl.evaluator.eval(ctx,bindings,arg4);
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
return sci.impl.evaluator.eval(ctx,bindings,arg5);
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
return sci.impl.evaluator.eval(ctx,bindings,arg6);
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
return sci.impl.evaluator.eval(ctx,bindings,arg7);
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
return sci.impl.evaluator.eval(ctx,bindings,arg8);
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
return sci.impl.evaluator.eval(ctx,bindings,arg9);
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
return sci.impl.evaluator.eval(ctx,bindings,arg10);
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
return sci.impl.evaluator.eval(ctx,bindings,arg11);
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
return sci.impl.evaluator.eval(ctx,bindings,arg12);
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
return sci.impl.evaluator.eval(ctx,bindings,arg13);
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
return sci.impl.evaluator.eval(ctx,bindings,arg14);
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
return sci.impl.evaluator.eval(ctx,bindings,arg15);
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
return sci.impl.evaluator.eval(ctx,bindings,arg16);
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
var and__5043__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5043__auto____$16)){
return sci.impl.evaluator.eval(ctx,bindings,arg17);
} else {
return and__5043__auto____$16;
}
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
var and__5043__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5043__auto____$16)){
var and__5043__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(and__5043__auto____$17)){
return sci.impl.evaluator.eval(ctx,bindings,arg18);
} else {
return and__5043__auto____$17;
}
} else {
return and__5043__auto____$16;
}
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_and(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.recur_0 = sci.impl.fns.__GT_Recur(cljs.core.PersistentVector.EMPTY);
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(expr,analyzed_children){
var G__43680 = cljs.core.count(analyzed_children);
switch (G__43680) {
case (0):
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_,_bindings){
return sci.impl.analyzer.recur_0;
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0)], null));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1)], null));
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2)], null));
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3)], null));
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4)], null));
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5)], null));
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6)], null));
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7)], null));
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8)], null));
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9)], null));
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10)], null));
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11)], null));
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12)], null));
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13)], null));
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14)], null));
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15)], null));
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16)], null));
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17)], null));
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17),sci.impl.evaluator.eval(ctx,bindings,arg18)], null));
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),analyzed_children);
}),expr);

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43753_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__43753_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__43753_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,bindings_fn,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.bindings_fn = bindings_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k43761,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__43779 = k43761;
var G__43779__$1 = (((G__43779 instanceof cljs.core.Keyword))?G__43779.fqn:null);
switch (G__43779__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "bindings-fn":
return self__.bindings_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43761,else__5346__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__43783){
var vec__43785 = p__43783;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43785,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43785,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43760){
var self__ = this;
var G__43760__$1 = this;
return (new cljs.core.RecordIter((0),G__43760__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43762,other43763){
var self__ = this;
var this43762__$1 = this;
return (((!((other43763 == null)))) && ((((this43762__$1.constructor === other43763.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43762__$1.params,other43763.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43762__$1.body,other43763.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43762__$1.fixed_arity,other43763.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43762__$1.var_arg_name,other43763.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43762__$1.bindings_fn,other43763.bindings_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43762__$1.__extmap,other43763.__extmap)))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k43761){
var self__ = this;
var this__5350__auto____$1 = this;
var G__43810 = k43761;
var G__43810__$1 = (((G__43810 instanceof cljs.core.Keyword))?G__43810.fqn:null);
switch (G__43810__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "bindings-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43761);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__43760){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__43811 = cljs.core.keyword_identical_QMARK_;
var expr__43812 = k__5352__auto__;
if(cljs.core.truth_((pred__43811.cljs$core$IFn$_invoke$arity$2 ? pred__43811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__43812) : pred__43811.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__43812)))){
return (new sci.impl.analyzer.FnBody(G__43760,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43811.cljs$core$IFn$_invoke$arity$2 ? pred__43811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__43812) : pred__43811.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__43812)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__43760,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43811.cljs$core$IFn$_invoke$arity$2 ? pred__43811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__43812) : pred__43811.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__43812)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__43760,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43811.cljs$core$IFn$_invoke$arity$2 ? pred__43811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__43812) : pred__43811.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__43812)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__43760,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43811.cljs$core$IFn$_invoke$arity$2 ? pred__43811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__43812) : pred__43811.call(null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__43812)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__43760,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__43760),null));
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__43760){
var self__ = this;
var this__5342__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,G__43760,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"bindings-fn","bindings-fn",1941331478,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,bindings_fn){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,bindings_fn,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__43765){
var extmap__5385__auto__ = (function (){var G__43820 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43765,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], 0));
if(cljs.core.record_QMARK_(G__43765)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43820);
} else {
return G__43820;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__43765),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__43765),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__43765),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__43765),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(G__43765),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__43832,p__43833,macro_QMARK_){
var map__43834 = p__43832;
var map__43834__$1 = cljs.core.__destructure_map(map__43834);
var ctx = map__43834__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__43835 = p__43833;
var seq__43836 = cljs.core.seq(vec__43835);
var first__43837 = cljs.core.first(seq__43836);
var seq__43836__$1 = cljs.core.next(seq__43836);
var binding_vector = first__43837;
var body_exprs = seq__43836__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__43827_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__43827_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__43828_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__43828_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__43845 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__43845__$1 = cljs.core.__destructure_map(map__43845);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43845__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43845__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var param_bindings = cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var binding_cnt = cljs.core.count(bindings);
var vec__43846 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings),cb], null);
} else {
if(cljs.core.empty_QMARK_(bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,null], null);
} else {
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings], 0)),cb], null);
}
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43846,(0),null);
var closure_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43846,(1),null);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ana_children = sci.impl.analyzer.analyze_children(ctx__$2,body);
var body__$1 = sci.impl.analyzer.return_do(fn_expr,ana_children);
var closure_bindings__$1 = (cljs.core.truth_(closure_bindings)?cljs.core.deref(closure_bindings):null);
var closure_binding_cnt = (cljs.core.truth_(closure_bindings__$1)?cljs.core.count(closure_bindings__$1):null);
var bindings_fn = (cljs.core.truth_(closure_bindings__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding_cnt,closure_binding_cnt))?cljs.core.identity:(function (p1__43830_SHARP_){
return cljs.core.select_keys(p1__43830_SHARP_,closure_bindings__$1);
})):cljs.core.identity);
return sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,bindings_fn);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__43869 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__43870 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43869,G__43870) : sci.impl.analyzer.analyze.call(null,G__43869,G__43870));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.expand_fn_STAR_ = (function sci$impl$analyzer$expand_fn_STAR_(ctx,p__43874,macro_QMARK_){
var vec__43876 = p__43874;
var seq__43877 = cljs.core.seq(vec__43876);
var first__43878 = cljs.core.first(seq__43877);
var seq__43877__$1 = cljs.core.next(seq__43877);
var _fn = first__43878;
var first__43878__$1 = cljs.core.first(seq__43877__$1);
var seq__43877__$2 = cljs.core.next(seq__43877__$1);
var name_QMARK_ = first__43878__$1;
var body = seq__43877__$2;
var fn_expr = vec__43876;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var self_ref = (cljs.core.truth_(fn_name)?cljs.core.volatile_BANG_(null):null);
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"self-ref","self-ref",1760385189),self_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794)):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43882,body__$2){
var map__43883 = p__43882;
var map__43883__$1 = cljs.core.__destructure_map(map__43883);
var acc = map__43883__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43883__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43883__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,body__$2,macro_QMARK_);
var var_arg_name = body__$3.var_arg_name;
var fixed_arity = body__$3.fixed_arity;
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_arg_name;
if(cljs.core.truth_(and__5043__auto__)){
return min_varargs;
} else {
return and__5043__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(var_arg_name);
if(and__5043__auto__){
var and__5043__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5043__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5130__auto__ = fixed_arity;
var y__5131__auto__ = max_fixed;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$3),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
var struct = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084),(cljs.core.truth_(self_ref)?cljs.core.deref(self_ref):null),new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref = new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
if(cljs.core.truth_(fn_meta)){
return (function (ctx,bindings){
var fn_meta__$1 = sci.impl.evaluator.handle_meta(ctx,bindings,fn_meta);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
});
} else {
return (function (ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
});
}
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(ctxfn,struct,fn_expr,null);
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var vec__43912 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43918,p__43919){
var vec__43920 = p__43918;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43920,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43920,(1),null);
var vec__43923 = p__43919;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43923,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43923,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43912,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43912,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_let(ctx__$2,bindings,new_let_bindings,body);
}),expr);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__43935){
var vec__43936 = p__43935;
var seq__43937 = cljs.core.seq(vec__43936);
var first__43938 = cljs.core.first(seq__43937);
var seq__43937__$1 = cljs.core.next(seq__43937);
var _let = first__43938;
var first__43938__$1 = cljs.core.first(seq__43937__$1);
var seq__43937__$2 = cljs.core.next(seq__43937__$1);
var let_bindings = first__43938__$1;
var exprs = seq__43937__$2;
var expr = vec__43936;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__43944 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43944,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43944,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43944,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43944,(3),null);
var G__43947_45655 = ctx;
var G__43948_45656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__43947_45655,G__43948_45656) : sci.impl.analyzer.expand_declare.call(null,G__43947_45655,G__43948_45656));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (function (){var G__43950 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__43951 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43950,G__43951) : sci.impl.analyzer.analyze.call(null,G__43950,G__43951));
})();
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,var_name,init__$1,m__$3);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__43962){
var vec__43963 = p__43962;
var seq__43964 = cljs.core.seq(vec__43963);
var first__43965 = cljs.core.first(seq__43964);
var seq__43964__$1 = cljs.core.next(seq__43964);
var op = first__43965;
var first__43965__$1 = cljs.core.first(seq__43964__$1);
var seq__43964__$2 = cljs.core.next(seq__43964__$1);
var fn_name = first__43965__$1;
var body = seq__43964__$2;
var expr = vec__43963;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__43966_45659 = ctx;
var G__43967_45660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__43966_45659,G__43967_45660) : sci.impl.analyzer.expand_declare.call(null,G__43966_45659,G__43967_45660));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__43970 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5804__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var ds = temp__5804__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5804__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__43973 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43973,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43973,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var meta_map__$3 = (function (){var G__43991 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__43992 = meta_map__$2;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43991,G__43992) : sci.impl.analyzer.analyze.call(null,G__43991,G__43992));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$3,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$5 = (function (){var G__43993 = meta_map__$4;
var G__43993__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43993,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__43993);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43993__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__43993__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3(ctxfn,f__$1,f__$1);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),expr);
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__43995 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43995,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43995,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ana = (function (){var G__44000 = ctx;
var G__44001 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44000,G__44001) : sci.impl.analyzer.analyze.call(null,G__44000,G__44001));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),null,null));
}),expr);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__44004 = cljs.core.count(children);
switch (G__44004) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return null;
}
}),null,expr,null);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,else$);
}
}),null,expr,null);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var case_val = (function (){var G__44011 = ctx;
var G__44012 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44011,G__44012) : sci.impl.analyzer.analyze.call(null,G__44011,G__44012));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__44008 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__44016 = ctx;
var G__44017 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44016,G__44017) : sci.impl.analyzer.analyze.call(null,G__44016,G__44017));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44008,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44008,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__44023 = cases__$1;
var seq__44024 = cljs.core.seq(vec__44023);
var first__44025 = cljs.core.first(seq__44024);
var seq__44024__$1 = cljs.core.next(seq__44024);
var k = first__44025;
var first__44025__$1 = cljs.core.first(seq__44024__$1);
var seq__44024__$2 = cljs.core.next(seq__44024__$1);
var v = first__44025__$1;
var cases__$2 = seq__44024__$2;
if(cljs.core.seq_QMARK_(k)){
var G__45677 = cases__$2;
var G__45678 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__44023,seq__44024,first__44025,seq__44024__$1,k,first__44025__$1,seq__44024__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__44008,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__44023,seq__44024,first__44025,seq__44024__$1,k,first__44025__$1,seq__44024__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__44008,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__45677;
ret_map = G__45678;
continue;
} else {
var G__45679 = cases__$2;
var G__45680 = assoc_new(ret_map,k,v);
cases__$1 = G__45679;
ret_map = G__45680;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}):(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(f,null,expr,null);
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var body = cljs.core.next(expr);
var vec__44029 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__45683 = exprs__$1;
var G__45684 = body_exprs;
var G__45685 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__45686 = finally_expr;
exprs = G__45683;
body_exprs = G__45684;
catch_exprs = G__45685;
finally_expr = G__45686;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__45688 = exprs__$1;
var G__45689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__45690 = catch_exprs;
var G__45691 = finally_expr;
exprs = G__45688;
body_exprs = G__45689;
catch_exprs = G__45690;
finally_expr = G__45691;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44029,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44029,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44029,(2),null);
var body__$1 = (function (){var G__44034 = ctx;
var G__44035 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44034,G__44035) : sci.impl.analyzer.analyze.call(null,G__44034,G__44035));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__44036 = c;
var seq__44037 = cljs.core.seq(vec__44036);
var first__44038 = cljs.core.first(seq__44037);
var seq__44037__$1 = cljs.core.next(seq__44037);
var _ = first__44038;
var first__44038__$1 = cljs.core.first(seq__44037__$1);
var seq__44037__$2 = cljs.core.next(seq__44037__$1);
var ex = first__44038__$1;
var first__44038__$2 = cljs.core.first(seq__44037__$2);
var seq__44037__$3 = cljs.core.next(seq__44037__$2);
var binding = first__44038__$2;
var body__$2 = seq__44037__$3;
var temp__5802__auto__ = (function (){var G__44039 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__44039)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__44039)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__44039)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__44041 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__44042 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44041,G__44042) : sci.impl.analyzer.analyze.call(null,G__44041,G__44042));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__44043 = ctx;
var G__44044 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44043,G__44044) : sci.impl.analyzer.analyze.call(null,G__44043,G__44044));
})():null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_try(ctx__$1,bindings,body__$1,catches__$1,finally$__$1);
}),expr);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__44047){
var vec__44048 = p__44047;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44048,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44048,(1),null);
var expr = vec__44048;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
throw sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0)));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__44053){
var vec__44054 = p__44053;
var seq__44055 = cljs.core.seq(vec__44054);
var first__44056 = cljs.core.first(seq__44055);
var seq__44055__$1 = cljs.core.next(seq__44055);
var _declare = first__44056;
var names = seq__44055__$1;
var expr = vec__44054;
var cnn_45706 = sci.impl.vars.current_ns_name();
var env_45707 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_45708 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_45707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_45706], null));
var refers_45709 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_45708);
var the_current_ns_45710__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5802__auto__ = (function (){var and__5043__auto__ = refers_45709;
if(cljs.core.truth_(and__5043__auto__)){
return refers_45709.get(name);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_45706)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_45708,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__44058 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_45706),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__44058.sci$impl$vars$IVar$unbind$arity$1(null);

return G__44058;
})());
} else {
return the_current_ns_45708;
}
}
}),the_current_ns_45708,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_45707,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_45706,the_current_ns_45710__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__44060){
var vec__44061 = p__44060;
var seq__44062 = cljs.core.seq(vec__44061);
var first__44063 = cljs.core.first(seq__44062);
var seq__44062__$1 = cljs.core.next(seq__44062);
var _dot = first__44063;
var first__44063__$1 = cljs.core.first(seq__44062__$1);
var seq__44062__$2 = cljs.core.next(seq__44062__$1);
var instance_expr = first__44063__$1;
var first__44063__$2 = cljs.core.first(seq__44062__$2);
var seq__44062__$3 = cljs.core.next(seq__44062__$2);
var method_expr = first__44063__$2;
var args = seq__44062__$3;
var expr = vec__44061;
var vec__44065 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__44066 = cljs.core.seq(vec__44065);
var first__44067 = cljs.core.first(seq__44066);
var seq__44066__$1 = cljs.core.next(seq__44066);
var method_expr__$1 = first__44067;
var args__$1 = seq__44066__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5802__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var t = temp__5802__auto__;
var clazz = (function (){var or__5045__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$1,bindings,instance_expr__$2,meth_name,field_access,args__$2,allowed_QMARK_);
});
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$2,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null),expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__44072){
var vec__44073 = p__44072;
var seq__44074 = cljs.core.seq(vec__44073);
var first__44075 = cljs.core.first(seq__44074);
var seq__44074__$1 = cljs.core.next(seq__44074);
var method_name = first__44075;
var first__44075__$1 = cljs.core.first(seq__44074__$1);
var seq__44074__$2 = cljs.core.next(seq__44074__$1);
var obj = first__44075__$1;
var args = seq__44074__$2;
var expr = vec__44073;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__44081){
var vec__44082 = p__44081;
var seq__44083 = cljs.core.seq(vec__44082);
var first__44084 = cljs.core.first(seq__44083);
var seq__44083__$1 = cljs.core.next(seq__44083);
var _new = first__44084;
var first__44084__$1 = cljs.core.first(seq__44083__$1);
var seq__44083__$2 = cljs.core.next(seq__44083__$1);
var class_sym = first__44084__$1;
var args = seq__44083__$2;
var expr = vec__44082;
var temp__5802__auto__ = (function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var opts = temp__5804__auto__;
var or__5045__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var clazz = temp__5804__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,class_sym) : sci.impl.analyzer.analyze.call(null,ctx,class_sym));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
var var_QMARK_ = (class$ instanceof sci.impl.types.EvalVar);
var maybe_var = ((var_QMARK_)?sci.impl.types.getVal(class$):null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
if(cljs.core.truth_(maybe_record_constructor)){
var G__44086 = ctx;
var G__44087 = expr;
var G__44088 = maybe_record_constructor;
var G__44089 = args__$1;
var G__44090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__44091 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__44086,G__44087,G__44088,G__44089,G__44090,G__44091) : sci.impl.analyzer.return_call.call(null,G__44086,G__44087,G__44088,G__44089,G__44090,G__44091));
} else {
if(var_QMARK_){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44078_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__44078_SHARP_);
}),args__$1));
}),expr);
} else {
if((class$ instanceof sci.impl.types.EvalFn)){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.evaluator.eval(ctx__$1,bindings,class$),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44079_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__44079_SHARP_);
}),args__$1));
}),expr);
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44080_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__44080_SHARP_);
}),args__$1));
}),expr);

}
}
}
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5802__auto____$1)){
var record = temp__5802__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
var G__44094 = ctx;
var G__44095 = expr;
var G__44096 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__44097 = args__$1;
var G__44098 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__44099 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__44094,G__44095,G__44096,G__44097,G__44098,G__44099) : sci.impl.analyzer.return_call.call(null,G__44094,G__44095,G__44096,G__44097,G__44098,G__44099));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__44101){
var vec__44102 = p__44101;
var seq__44103 = cljs.core.seq(vec__44102);
var first__44104 = cljs.core.first(seq__44103);
var seq__44103__$1 = cljs.core.next(seq__44103);
var constructor_sym = first__44104;
var args = seq__44103__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__44107){
var vec__44108 = p__44107;
var seq__44109 = cljs.core.seq(vec__44108);
var first__44110 = cljs.core.first(seq__44109);
var seq__44109__$1 = cljs.core.next(seq__44109);
var _ns = first__44110;
var first__44110__$1 = cljs.core.first(seq__44109__$1);
var seq__44109__$2 = cljs.core.next(seq__44109__$1);
var ns_name = first__44110__$1;
var exprs = seq__44109__$2;
var expr = vec__44108;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__44112 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44112,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44112,(1),null);
var vec__44115 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44115,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44115,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__44141 = cljs.core.first(exprs__$3);
var seq__44142 = cljs.core.seq(vec__44141);
var first__44143 = cljs.core.first(seq__44142);
var seq__44142__$1 = cljs.core.next(seq__44142);
var k = first__44143;
var args = seq__44142__$1;
var expr__$1 = vec__44141;
var G__44144 = k;
var G__44144__$1 = (((G__44144 instanceof cljs.core.Keyword))?G__44144.fqn:null);
switch (G__44144__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__45732 = cljs.core.next(exprs__$3);
var G__45733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__44145 = k;
var G__44145__$1 = (((G__44145 instanceof cljs.core.Keyword))?G__44145.fqn:null);
switch (G__44145__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__44145,G__44145__$1,G__44144,G__44144__$1,vec__44141,seq__44142,first__44143,seq__44142__$1,k,args,expr__$1,vec__44112,docstring,exprs__$1,vec__44115,attr_map,exprs__$2,attr_map__$1,vec__44108,seq__44109,first__44110,seq__44109__$1,_ns,first__44110__$1,seq__44109__$2,ns_name,exprs,expr){
return (function() { 
var G__45735__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__45735 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__45737__i = 0, G__45737__a = new Array(arguments.length -  1);
while (G__45737__i < G__45737__a.length) {G__45737__a[G__45737__i] = arguments[G__45737__i + 1]; ++G__45737__i;}
  args__$1 = new cljs.core.IndexedSeq(G__45737__a,0,null);
} 
return G__45735__delegate.call(this,ctx__$1,args__$1);};
G__45735.cljs$lang$maxFixedArity = 1;
G__45735.cljs$lang$applyTo = (function (arglist__45738){
var ctx__$1 = cljs.core.first(arglist__45738);
var args__$1 = cljs.core.rest(arglist__45738);
return G__45735__delegate(ctx__$1,args__$1);
});
G__45735.cljs$core$IFn$_invoke$arity$variadic = G__45735__delegate;
return G__45735;
})()
;
;})(exprs__$3,ret,G__44145,G__44145__$1,G__44144,G__44144__$1,vec__44141,seq__44142,first__44143,seq__44142__$1,k,args,expr__$1,vec__44112,docstring,exprs__$1,vec__44115,attr_map,exprs__$2,attr_map__$1,vec__44108,seq__44109,first__44110,seq__44109__$1,_ns,first__44110__$1,seq__44109__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44145__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__45732;
ret = G__45733;
continue;

break;
case "gen-class":
var G__45740 = cljs.core.next(exprs__$3);
var G__45741 = ret;
exprs__$3 = G__45740;
ret = G__45741;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44144__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2(((function (exprs__$3,ret,vec__44112,docstring,exprs__$1,vec__44115,attr_map,exprs__$2,attr_map__$1,vec__44108,seq__44109,first__44110,seq__44109__$1,_ns,first__44110__$1,seq__44109__$2,ns_name,exprs,expr){
return (function (ctx__$1,_bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__44112,docstring,exprs__$1,vec__44115,attr_map,exprs__$2,attr_map__$1,vec__44108,seq__44109,first__44110,seq__44109__$1,_ns,first__44110__$1,seq__44109__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__44155){
var vec__44156 = p__44155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44156,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44156,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__44165){
var vec__44166 = p__44165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(2),null);
var expr = vec__44166;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.types.setVal(obj__$1,v__$2);
}),expr);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.info(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(obj__$2),(1));
var obj__$3 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(obj__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var obj__$4 = sci.impl.evaluator.eval(ctx__$1,bindings,obj__$3);
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$4,k,v__$2);
}),expr);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__44187 = cljs.core.count(analyzed_children);
switch (G__44187) {
case (0):
return (function (ctx,bindings){
var fexpr__44189 = bindings.get(f);
return (fexpr__44189.cljs$core$IFn$_invoke$arity$0 ? fexpr__44189.cljs$core$IFn$_invoke$arity$0() : fexpr__44189.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__44192 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__44191 = bindings.get(f);
return (fexpr__44191.cljs$core$IFn$_invoke$arity$1 ? fexpr__44191.cljs$core$IFn$_invoke$arity$1(G__44192) : fexpr__44191.call(null,G__44192));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__44194 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44195 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__44193 = bindings.get(f);
return (fexpr__44193.cljs$core$IFn$_invoke$arity$2 ? fexpr__44193.cljs$core$IFn$_invoke$arity$2(G__44194,G__44195) : fexpr__44193.call(null,G__44194,G__44195));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__44197 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44198 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44199 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__44196 = bindings.get(f);
return (fexpr__44196.cljs$core$IFn$_invoke$arity$3 ? fexpr__44196.cljs$core$IFn$_invoke$arity$3(G__44197,G__44198,G__44199) : fexpr__44196.call(null,G__44197,G__44198,G__44199));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__44201 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44202 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44203 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44204 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__44200 = bindings.get(f);
return (fexpr__44200.cljs$core$IFn$_invoke$arity$4 ? fexpr__44200.cljs$core$IFn$_invoke$arity$4(G__44201,G__44202,G__44203,G__44204) : fexpr__44200.call(null,G__44201,G__44202,G__44203,G__44204));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__44206 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44207 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44208 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44209 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44210 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__44205 = bindings.get(f);
return (fexpr__44205.cljs$core$IFn$_invoke$arity$5 ? fexpr__44205.cljs$core$IFn$_invoke$arity$5(G__44206,G__44207,G__44208,G__44209,G__44210) : fexpr__44205.call(null,G__44206,G__44207,G__44208,G__44209,G__44210));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__44212 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44213 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44214 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44215 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44216 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44217 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__44211 = bindings.get(f);
return (fexpr__44211.cljs$core$IFn$_invoke$arity$6 ? fexpr__44211.cljs$core$IFn$_invoke$arity$6(G__44212,G__44213,G__44214,G__44215,G__44216,G__44217) : fexpr__44211.call(null,G__44212,G__44213,G__44214,G__44215,G__44216,G__44217));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__44220 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44221 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44222 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44223 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44224 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44225 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44226 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__44219 = bindings.get(f);
return (fexpr__44219.cljs$core$IFn$_invoke$arity$7 ? fexpr__44219.cljs$core$IFn$_invoke$arity$7(G__44220,G__44221,G__44222,G__44223,G__44224,G__44225,G__44226) : fexpr__44219.call(null,G__44220,G__44221,G__44222,G__44223,G__44224,G__44225,G__44226));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__44228 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44229 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44230 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44231 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44232 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44233 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44234 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44235 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__44227 = bindings.get(f);
return (fexpr__44227.cljs$core$IFn$_invoke$arity$8 ? fexpr__44227.cljs$core$IFn$_invoke$arity$8(G__44228,G__44229,G__44230,G__44231,G__44232,G__44233,G__44234,G__44235) : fexpr__44227.call(null,G__44228,G__44229,G__44230,G__44231,G__44232,G__44233,G__44234,G__44235));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__44242 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44243 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44244 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44245 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44246 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44247 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44248 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44249 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44250 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__44241 = bindings.get(f);
return (fexpr__44241.cljs$core$IFn$_invoke$arity$9 ? fexpr__44241.cljs$core$IFn$_invoke$arity$9(G__44242,G__44243,G__44244,G__44245,G__44246,G__44247,G__44248,G__44249,G__44250) : fexpr__44241.call(null,G__44242,G__44243,G__44244,G__44245,G__44246,G__44247,G__44248,G__44249,G__44250));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__44252 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44253 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44254 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44255 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44256 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44257 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44258 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44259 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44260 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44261 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__44251 = bindings.get(f);
return (fexpr__44251.cljs$core$IFn$_invoke$arity$10 ? fexpr__44251.cljs$core$IFn$_invoke$arity$10(G__44252,G__44253,G__44254,G__44255,G__44256,G__44257,G__44258,G__44259,G__44260,G__44261) : fexpr__44251.call(null,G__44252,G__44253,G__44254,G__44255,G__44256,G__44257,G__44258,G__44259,G__44260,G__44261));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__44263 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44264 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44265 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44266 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44267 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44268 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44269 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44270 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44271 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44272 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44273 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__44262 = bindings.get(f);
return (fexpr__44262.cljs$core$IFn$_invoke$arity$11 ? fexpr__44262.cljs$core$IFn$_invoke$arity$11(G__44263,G__44264,G__44265,G__44266,G__44267,G__44268,G__44269,G__44270,G__44271,G__44272,G__44273) : fexpr__44262.call(null,G__44263,G__44264,G__44265,G__44266,G__44267,G__44268,G__44269,G__44270,G__44271,G__44272,G__44273));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__44276 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44277 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44278 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44279 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44280 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44281 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44282 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44283 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44284 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44285 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44286 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44287 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__44275 = bindings.get(f);
return (fexpr__44275.cljs$core$IFn$_invoke$arity$12 ? fexpr__44275.cljs$core$IFn$_invoke$arity$12(G__44276,G__44277,G__44278,G__44279,G__44280,G__44281,G__44282,G__44283,G__44284,G__44285,G__44286,G__44287) : fexpr__44275.call(null,G__44276,G__44277,G__44278,G__44279,G__44280,G__44281,G__44282,G__44283,G__44284,G__44285,G__44286,G__44287));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__44290 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44291 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44292 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44293 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44294 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44295 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44296 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44297 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44298 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44299 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44300 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44301 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44302 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__44289 = bindings.get(f);
return (fexpr__44289.cljs$core$IFn$_invoke$arity$13 ? fexpr__44289.cljs$core$IFn$_invoke$arity$13(G__44290,G__44291,G__44292,G__44293,G__44294,G__44295,G__44296,G__44297,G__44298,G__44299,G__44300,G__44301,G__44302) : fexpr__44289.call(null,G__44290,G__44291,G__44292,G__44293,G__44294,G__44295,G__44296,G__44297,G__44298,G__44299,G__44300,G__44301,G__44302));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__44305 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44306 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44307 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44308 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44309 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44310 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44311 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44312 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44313 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44314 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44315 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44316 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44317 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44318 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__44304 = bindings.get(f);
return (fexpr__44304.cljs$core$IFn$_invoke$arity$14 ? fexpr__44304.cljs$core$IFn$_invoke$arity$14(G__44305,G__44306,G__44307,G__44308,G__44309,G__44310,G__44311,G__44312,G__44313,G__44314,G__44315,G__44316,G__44317,G__44318) : fexpr__44304.call(null,G__44305,G__44306,G__44307,G__44308,G__44309,G__44310,G__44311,G__44312,G__44313,G__44314,G__44315,G__44316,G__44317,G__44318));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__44322 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44323 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44324 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44325 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44326 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44327 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44328 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44329 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44330 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44331 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44332 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44333 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44334 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44335 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44336 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__44321 = bindings.get(f);
return (fexpr__44321.cljs$core$IFn$_invoke$arity$15 ? fexpr__44321.cljs$core$IFn$_invoke$arity$15(G__44322,G__44323,G__44324,G__44325,G__44326,G__44327,G__44328,G__44329,G__44330,G__44331,G__44332,G__44333,G__44334,G__44335,G__44336) : fexpr__44321.call(null,G__44322,G__44323,G__44324,G__44325,G__44326,G__44327,G__44328,G__44329,G__44330,G__44331,G__44332,G__44333,G__44334,G__44335,G__44336));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__44340 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44341 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44342 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44343 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44344 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44345 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44346 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44347 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44348 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44349 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44350 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44351 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44352 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44353 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44354 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44355 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__44339 = bindings.get(f);
return (fexpr__44339.cljs$core$IFn$_invoke$arity$16 ? fexpr__44339.cljs$core$IFn$_invoke$arity$16(G__44340,G__44341,G__44342,G__44343,G__44344,G__44345,G__44346,G__44347,G__44348,G__44349,G__44350,G__44351,G__44352,G__44353,G__44354,G__44355) : fexpr__44339.call(null,G__44340,G__44341,G__44342,G__44343,G__44344,G__44345,G__44346,G__44347,G__44348,G__44349,G__44350,G__44351,G__44352,G__44353,G__44354,G__44355));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__44358 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44359 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44360 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44361 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44362 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44363 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44364 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44365 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44366 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44367 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44368 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44369 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44370 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44371 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44372 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44373 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__44374 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__44357 = bindings.get(f);
return (fexpr__44357.cljs$core$IFn$_invoke$arity$17 ? fexpr__44357.cljs$core$IFn$_invoke$arity$17(G__44358,G__44359,G__44360,G__44361,G__44362,G__44363,G__44364,G__44365,G__44366,G__44367,G__44368,G__44369,G__44370,G__44371,G__44372,G__44373,G__44374) : fexpr__44357.call(null,G__44358,G__44359,G__44360,G__44361,G__44362,G__44363,G__44364,G__44365,G__44366,G__44367,G__44368,G__44369,G__44370,G__44371,G__44372,G__44373,G__44374));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__44377 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44378 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44379 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44380 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44381 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44382 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44383 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44384 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44385 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44386 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44387 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44388 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44389 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44390 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44391 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44392 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__44393 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__44394 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__44376 = bindings.get(f);
return (fexpr__44376.cljs$core$IFn$_invoke$arity$18 ? fexpr__44376.cljs$core$IFn$_invoke$arity$18(G__44377,G__44378,G__44379,G__44380,G__44381,G__44382,G__44383,G__44384,G__44385,G__44386,G__44387,G__44388,G__44389,G__44390,G__44391,G__44392,G__44393,G__44394) : fexpr__44376.call(null,G__44377,G__44378,G__44379,G__44380,G__44381,G__44382,G__44383,G__44384,G__44385,G__44386,G__44387,G__44388,G__44389,G__44390,G__44391,G__44392,G__44393,G__44394));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__44399 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44400 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44401 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44402 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44403 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44404 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44405 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44406 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44407 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44408 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44409 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44410 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44411 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44412 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44413 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44414 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__44415 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__44416 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__44417 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__44398 = bindings.get(f);
return (fexpr__44398.cljs$core$IFn$_invoke$arity$19 ? fexpr__44398.cljs$core$IFn$_invoke$arity$19(G__44399,G__44400,G__44401,G__44402,G__44403,G__44404,G__44405,G__44406,G__44407,G__44408,G__44409,G__44410,G__44411,G__44412,G__44413,G__44414,G__44415,G__44416,G__44417) : fexpr__44398.call(null,G__44399,G__44400,G__44401,G__44402,G__44403,G__44404,G__44405,G__44406,G__44407,G__44408,G__44409,G__44410,G__44411,G__44412,G__44413,G__44414,G__44415,G__44416,G__44417));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,bindings.get(f),analyzed_children);
});

}
})(),null,expr,stack);
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var G__44421 = cljs.core.count(analyzed_children);
switch (G__44421) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__44422 = ctx;
var G__44423 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44422,G__44423) : f.call(null,G__44422,G__44423));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__44431 = ctx;
var G__44432 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44433 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44431,G__44432,G__44433) : f.call(null,G__44431,G__44432,G__44433));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__44436 = ctx;
var G__44437 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44438 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44439 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44436,G__44437,G__44438,G__44439) : f.call(null,G__44436,G__44437,G__44438,G__44439));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__44440 = ctx;
var G__44441 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44442 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44443 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44444 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__44440,G__44441,G__44442,G__44443,G__44444) : f.call(null,G__44440,G__44441,G__44442,G__44443,G__44444));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__44446 = ctx;
var G__44447 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44448 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44449 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44450 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44451 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__44446,G__44447,G__44448,G__44449,G__44450,G__44451) : f.call(null,G__44446,G__44447,G__44448,G__44449,G__44450,G__44451));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__44453 = ctx;
var G__44454 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44455 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44456 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44457 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44458 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44459 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__44453,G__44454,G__44455,G__44456,G__44457,G__44458,G__44459) : f.call(null,G__44453,G__44454,G__44455,G__44456,G__44457,G__44458,G__44459));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__44465 = ctx;
var G__44466 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44467 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44468 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44469 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44470 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44471 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44472 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__44465,G__44466,G__44467,G__44468,G__44469,G__44470,G__44471,G__44472) : f.call(null,G__44465,G__44466,G__44467,G__44468,G__44469,G__44470,G__44471,G__44472));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__44478 = ctx;
var G__44479 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44480 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44481 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44482 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44483 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44484 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44485 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44486 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__44478,G__44479,G__44480,G__44481,G__44482,G__44483,G__44484,G__44485,G__44486) : f.call(null,G__44478,G__44479,G__44480,G__44481,G__44482,G__44483,G__44484,G__44485,G__44486));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__44491 = ctx;
var G__44492 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44493 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44494 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44495 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44496 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44497 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44498 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44499 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44500 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__44491,G__44492,G__44493,G__44494,G__44495,G__44496,G__44497,G__44498,G__44499,G__44500) : f.call(null,G__44491,G__44492,G__44493,G__44494,G__44495,G__44496,G__44497,G__44498,G__44499,G__44500));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__44509 = ctx;
var G__44510 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44511 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44512 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44513 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44514 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44515 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44516 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44517 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44518 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44519 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__44509,G__44510,G__44511,G__44512,G__44513,G__44514,G__44515,G__44516,G__44517,G__44518,G__44519) : f.call(null,G__44509,G__44510,G__44511,G__44512,G__44513,G__44514,G__44515,G__44516,G__44517,G__44518,G__44519));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__44531 = ctx;
var G__44532 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44533 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44534 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44535 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44536 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44537 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44538 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44539 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44540 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44541 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44542 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__44531,G__44532,G__44533,G__44534,G__44535,G__44536,G__44537,G__44538,G__44539,G__44540,G__44541,G__44542) : f.call(null,G__44531,G__44532,G__44533,G__44534,G__44535,G__44536,G__44537,G__44538,G__44539,G__44540,G__44541,G__44542));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__44547 = ctx;
var G__44548 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44549 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44550 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44551 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44552 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44553 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44554 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44555 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44556 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44557 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44558 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44559 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__44547,G__44548,G__44549,G__44550,G__44551,G__44552,G__44553,G__44554,G__44555,G__44556,G__44557,G__44558,G__44559) : f.call(null,G__44547,G__44548,G__44549,G__44550,G__44551,G__44552,G__44553,G__44554,G__44555,G__44556,G__44557,G__44558,G__44559));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__44567 = ctx;
var G__44568 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44569 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44570 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44571 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44572 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44573 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44574 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44575 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44576 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44577 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44578 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44579 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44580 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__44567,G__44568,G__44569,G__44570,G__44571,G__44572,G__44573,G__44574,G__44575,G__44576,G__44577,G__44578,G__44579,G__44580) : f.call(null,G__44567,G__44568,G__44569,G__44570,G__44571,G__44572,G__44573,G__44574,G__44575,G__44576,G__44577,G__44578,G__44579,G__44580));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__44590 = ctx;
var G__44591 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44592 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44593 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44594 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44595 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44596 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44597 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44598 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44599 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44600 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44601 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44602 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44603 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44604 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__44590,G__44591,G__44592,G__44593,G__44594,G__44595,G__44596,G__44597,G__44598,G__44599,G__44600,G__44601,G__44602,G__44603,G__44604) : f.call(null,G__44590,G__44591,G__44592,G__44593,G__44594,G__44595,G__44596,G__44597,G__44598,G__44599,G__44600,G__44601,G__44602,G__44603,G__44604));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__44614 = ctx;
var G__44615 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44616 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44617 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44618 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44619 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44620 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44621 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44622 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44623 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44624 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44625 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44626 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44627 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44628 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44629 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__44614,G__44615,G__44616,G__44617,G__44618,G__44619,G__44620,G__44621,G__44622,G__44623,G__44624,G__44625,G__44626,G__44627,G__44628,G__44629) : f.call(null,G__44614,G__44615,G__44616,G__44617,G__44618,G__44619,G__44620,G__44621,G__44622,G__44623,G__44624,G__44625,G__44626,G__44627,G__44628,G__44629));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__44637 = ctx;
var G__44638 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44639 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44640 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44641 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44642 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44643 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44644 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44645 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44646 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44647 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44648 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44649 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44650 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44651 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44652 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44653 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__44637,G__44638,G__44639,G__44640,G__44641,G__44642,G__44643,G__44644,G__44645,G__44646,G__44647,G__44648,G__44649,G__44650,G__44651,G__44652,G__44653) : f.call(null,G__44637,G__44638,G__44639,G__44640,G__44641,G__44642,G__44643,G__44644,G__44645,G__44646,G__44647,G__44648,G__44649,G__44650,G__44651,G__44652,G__44653));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__44659 = ctx;
var G__44660 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44661 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44662 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44663 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44664 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44665 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44666 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44667 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44668 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44669 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44670 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44671 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44672 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44673 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44674 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44675 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__44676 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__44659,G__44660,G__44661,G__44662,G__44663,G__44664,G__44665,G__44666,G__44667,G__44668,G__44669,G__44670,G__44671,G__44672,G__44673,G__44674,G__44675,G__44676) : f.call(null,G__44659,G__44660,G__44661,G__44662,G__44663,G__44664,G__44665,G__44666,G__44667,G__44668,G__44669,G__44670,G__44671,G__44672,G__44673,G__44674,G__44675,G__44676));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__44686 = ctx;
var G__44687 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44688 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44689 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44690 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44691 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44692 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44693 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44694 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44695 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44696 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44697 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44698 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44699 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44700 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44701 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44702 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__44703 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__44704 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__44686,G__44687,G__44688,G__44689,G__44690,G__44691,G__44692,G__44693,G__44694,G__44695,G__44696,G__44697,G__44698,G__44699,G__44700,G__44701,G__44702,G__44703,G__44704) : f.call(null,G__44686,G__44687,G__44688,G__44689,G__44690,G__44691,G__44692,G__44693,G__44694,G__44695,G__44696,G__44697,G__44698,G__44699,G__44700,G__44701,G__44702,G__44703,G__44704));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__44714 = ctx;
var G__44715 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44716 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44717 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44718 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44719 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44720 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44721 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44722 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44723 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44724 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44725 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44726 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44727 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__44728 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__44729 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__44730 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__44731 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__44732 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__44733 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__44714,G__44715,G__44716,G__44717,G__44718,G__44719,G__44720,G__44721,G__44722,G__44723,G__44724,G__44725,G__44726,G__44727,G__44728,G__44729,G__44730,G__44731,G__44732,G__44733) : f.call(null,G__44714,G__44715,G__44716,G__44717,G__44718,G__44719,G__44720,G__44721,G__44722,G__44723,G__44724,G__44725,G__44726,G__44727,G__44728,G__44729,G__44730,G__44731,G__44732,G__44733));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__44748 = cljs.core.count(analyzed_children);
switch (G__44748) {
case (0):
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var fexpr__44749 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44749.cljs$core$IFn$_invoke$arity$0 ? fexpr__44749.cljs$core$IFn$_invoke$arity$0() : fexpr__44749.call(null));
});
} else {
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44751 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__44750 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44750.cljs$core$IFn$_invoke$arity$1 ? fexpr__44750.cljs$core$IFn$_invoke$arity$1(G__44751) : fexpr__44750.call(null,G__44751));
});
} else {
return (function (ctx,bindings){
var G__44754 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44754) : f.call(null,G__44754));
});
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44758 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44759 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__44757 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44757.cljs$core$IFn$_invoke$arity$2 ? fexpr__44757.cljs$core$IFn$_invoke$arity$2(G__44758,G__44759) : fexpr__44757.call(null,G__44758,G__44759));
});
} else {
return (function (ctx,bindings){
var G__44760 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44761 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44760,G__44761) : f.call(null,G__44760,G__44761));
});
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44763 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44764 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44765 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__44762 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44762.cljs$core$IFn$_invoke$arity$3 ? fexpr__44762.cljs$core$IFn$_invoke$arity$3(G__44763,G__44764,G__44765) : fexpr__44762.call(null,G__44763,G__44764,G__44765));
});
} else {
return (function (ctx,bindings){
var G__44769 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44770 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44771 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44769,G__44770,G__44771) : f.call(null,G__44769,G__44770,G__44771));
});
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44775 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44776 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44777 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44778 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__44774 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44774.cljs$core$IFn$_invoke$arity$4 ? fexpr__44774.cljs$core$IFn$_invoke$arity$4(G__44775,G__44776,G__44777,G__44778) : fexpr__44774.call(null,G__44775,G__44776,G__44777,G__44778));
});
} else {
return (function (ctx,bindings){
var G__44780 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44781 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44782 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44783 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44780,G__44781,G__44782,G__44783) : f.call(null,G__44780,G__44781,G__44782,G__44783));
});
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44791 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44792 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44793 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44794 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44795 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__44790 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44790.cljs$core$IFn$_invoke$arity$5 ? fexpr__44790.cljs$core$IFn$_invoke$arity$5(G__44791,G__44792,G__44793,G__44794,G__44795) : fexpr__44790.call(null,G__44791,G__44792,G__44793,G__44794,G__44795));
});
} else {
return (function (ctx,bindings){
var G__44800 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44801 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44802 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44803 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44804 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__44800,G__44801,G__44802,G__44803,G__44804) : f.call(null,G__44800,G__44801,G__44802,G__44803,G__44804));
});
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44806 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44807 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44808 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44809 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44810 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44811 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__44805 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44805.cljs$core$IFn$_invoke$arity$6 ? fexpr__44805.cljs$core$IFn$_invoke$arity$6(G__44806,G__44807,G__44808,G__44809,G__44810,G__44811) : fexpr__44805.call(null,G__44806,G__44807,G__44808,G__44809,G__44810,G__44811));
});
} else {
return (function (ctx,bindings){
var G__44817 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44818 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44819 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44820 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44821 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44822 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__44817,G__44818,G__44819,G__44820,G__44821,G__44822) : f.call(null,G__44817,G__44818,G__44819,G__44820,G__44821,G__44822));
});
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44826 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44827 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44828 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44829 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44830 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44831 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44832 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__44825 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44825.cljs$core$IFn$_invoke$arity$7 ? fexpr__44825.cljs$core$IFn$_invoke$arity$7(G__44826,G__44827,G__44828,G__44829,G__44830,G__44831,G__44832) : fexpr__44825.call(null,G__44826,G__44827,G__44828,G__44829,G__44830,G__44831,G__44832));
});
} else {
return (function (ctx,bindings){
var G__44834 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44835 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44836 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44837 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44838 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44839 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44840 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__44834,G__44835,G__44836,G__44837,G__44838,G__44839,G__44840) : f.call(null,G__44834,G__44835,G__44836,G__44837,G__44838,G__44839,G__44840));
});
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44842 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44843 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44844 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44845 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44846 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44847 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44848 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44849 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__44841 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44841.cljs$core$IFn$_invoke$arity$8 ? fexpr__44841.cljs$core$IFn$_invoke$arity$8(G__44842,G__44843,G__44844,G__44845,G__44846,G__44847,G__44848,G__44849) : fexpr__44841.call(null,G__44842,G__44843,G__44844,G__44845,G__44846,G__44847,G__44848,G__44849));
});
} else {
return (function (ctx,bindings){
var G__44851 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44852 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44853 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44854 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44855 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44856 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44857 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44858 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__44851,G__44852,G__44853,G__44854,G__44855,G__44856,G__44857,G__44858) : f.call(null,G__44851,G__44852,G__44853,G__44854,G__44855,G__44856,G__44857,G__44858));
});
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44865 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44866 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44867 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44868 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44869 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44870 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44871 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44872 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44873 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__44864 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44864.cljs$core$IFn$_invoke$arity$9 ? fexpr__44864.cljs$core$IFn$_invoke$arity$9(G__44865,G__44866,G__44867,G__44868,G__44869,G__44870,G__44871,G__44872,G__44873) : fexpr__44864.call(null,G__44865,G__44866,G__44867,G__44868,G__44869,G__44870,G__44871,G__44872,G__44873));
});
} else {
return (function (ctx,bindings){
var G__44877 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44878 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44879 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44880 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44881 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44882 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44883 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44884 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44885 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__44877,G__44878,G__44879,G__44880,G__44881,G__44882,G__44883,G__44884,G__44885) : f.call(null,G__44877,G__44878,G__44879,G__44880,G__44881,G__44882,G__44883,G__44884,G__44885));
});
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44888 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44889 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44890 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44891 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44892 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44893 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44894 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44895 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44896 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44897 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__44887 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44887.cljs$core$IFn$_invoke$arity$10 ? fexpr__44887.cljs$core$IFn$_invoke$arity$10(G__44888,G__44889,G__44890,G__44891,G__44892,G__44893,G__44894,G__44895,G__44896,G__44897) : fexpr__44887.call(null,G__44888,G__44889,G__44890,G__44891,G__44892,G__44893,G__44894,G__44895,G__44896,G__44897));
});
} else {
return (function (ctx,bindings){
var G__44900 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44901 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44902 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44903 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44904 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44905 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44906 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44907 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44908 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44909 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__44900,G__44901,G__44902,G__44903,G__44904,G__44905,G__44906,G__44907,G__44908,G__44909) : f.call(null,G__44900,G__44901,G__44902,G__44903,G__44904,G__44905,G__44906,G__44907,G__44908,G__44909));
});
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44912 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44913 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44914 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44915 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44916 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44917 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44918 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44919 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44920 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44921 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44922 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__44911 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44911.cljs$core$IFn$_invoke$arity$11 ? fexpr__44911.cljs$core$IFn$_invoke$arity$11(G__44912,G__44913,G__44914,G__44915,G__44916,G__44917,G__44918,G__44919,G__44920,G__44921,G__44922) : fexpr__44911.call(null,G__44912,G__44913,G__44914,G__44915,G__44916,G__44917,G__44918,G__44919,G__44920,G__44921,G__44922));
});
} else {
return (function (ctx,bindings){
var G__44924 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44925 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44926 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44927 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44928 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44929 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44930 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44931 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44932 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44933 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44934 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__44924,G__44925,G__44926,G__44927,G__44928,G__44929,G__44930,G__44931,G__44932,G__44933,G__44934) : f.call(null,G__44924,G__44925,G__44926,G__44927,G__44928,G__44929,G__44930,G__44931,G__44932,G__44933,G__44934));
});
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44938 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44939 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44940 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44941 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44942 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44943 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44944 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44945 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44946 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44947 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44948 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44949 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__44937 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44937.cljs$core$IFn$_invoke$arity$12 ? fexpr__44937.cljs$core$IFn$_invoke$arity$12(G__44938,G__44939,G__44940,G__44941,G__44942,G__44943,G__44944,G__44945,G__44946,G__44947,G__44948,G__44949) : fexpr__44937.call(null,G__44938,G__44939,G__44940,G__44941,G__44942,G__44943,G__44944,G__44945,G__44946,G__44947,G__44948,G__44949));
});
} else {
return (function (ctx,bindings){
var G__44953 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44954 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44955 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44956 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44957 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44958 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44959 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44960 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44961 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44962 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44963 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44964 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__44953,G__44954,G__44955,G__44956,G__44957,G__44958,G__44959,G__44960,G__44961,G__44962,G__44963,G__44964) : f.call(null,G__44953,G__44954,G__44955,G__44956,G__44957,G__44958,G__44959,G__44960,G__44961,G__44962,G__44963,G__44964));
});
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__44971 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44972 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44973 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44974 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44975 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44976 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44977 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44978 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44979 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44980 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44981 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__44982 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__44983 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__44970 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__44970.cljs$core$IFn$_invoke$arity$13 ? fexpr__44970.cljs$core$IFn$_invoke$arity$13(G__44971,G__44972,G__44973,G__44974,G__44975,G__44976,G__44977,G__44978,G__44979,G__44980,G__44981,G__44982,G__44983) : fexpr__44970.call(null,G__44971,G__44972,G__44973,G__44974,G__44975,G__44976,G__44977,G__44978,G__44979,G__44980,G__44981,G__44982,G__44983));
});
} else {
return (function (ctx,bindings){
var G__44989 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__44990 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__44991 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__44992 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__44993 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__44994 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__44995 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__44996 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__44997 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__44998 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__44999 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45000 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45001 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__44989,G__44990,G__44991,G__44992,G__44993,G__44994,G__44995,G__44996,G__44997,G__44998,G__44999,G__45000,G__45001) : f.call(null,G__44989,G__44990,G__44991,G__44992,G__44993,G__44994,G__44995,G__44996,G__44997,G__44998,G__44999,G__45000,G__45001));
});
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__45010 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45011 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45012 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45013 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45014 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45015 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45016 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45017 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45018 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45019 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45020 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45021 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45022 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45023 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__45009 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__45009.cljs$core$IFn$_invoke$arity$14 ? fexpr__45009.cljs$core$IFn$_invoke$arity$14(G__45010,G__45011,G__45012,G__45013,G__45014,G__45015,G__45016,G__45017,G__45018,G__45019,G__45020,G__45021,G__45022,G__45023) : fexpr__45009.call(null,G__45010,G__45011,G__45012,G__45013,G__45014,G__45015,G__45016,G__45017,G__45018,G__45019,G__45020,G__45021,G__45022,G__45023));
});
} else {
return (function (ctx,bindings){
var G__45029 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45030 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45031 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45032 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45033 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45034 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45035 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45036 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45037 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45038 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45039 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45040 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45041 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45042 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__45029,G__45030,G__45031,G__45032,G__45033,G__45034,G__45035,G__45036,G__45037,G__45038,G__45039,G__45040,G__45041,G__45042) : f.call(null,G__45029,G__45030,G__45031,G__45032,G__45033,G__45034,G__45035,G__45036,G__45037,G__45038,G__45039,G__45040,G__45041,G__45042));
});
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__45046 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45047 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45048 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45049 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45050 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45051 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45052 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45053 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45054 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45055 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45056 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45057 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45058 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45059 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45060 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__45045 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__45045.cljs$core$IFn$_invoke$arity$15 ? fexpr__45045.cljs$core$IFn$_invoke$arity$15(G__45046,G__45047,G__45048,G__45049,G__45050,G__45051,G__45052,G__45053,G__45054,G__45055,G__45056,G__45057,G__45058,G__45059,G__45060) : fexpr__45045.call(null,G__45046,G__45047,G__45048,G__45049,G__45050,G__45051,G__45052,G__45053,G__45054,G__45055,G__45056,G__45057,G__45058,G__45059,G__45060));
});
} else {
return (function (ctx,bindings){
var G__45064 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45065 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45066 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45067 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45068 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45069 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45070 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45071 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45072 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45073 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45074 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45075 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45076 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45077 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45078 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__45064,G__45065,G__45066,G__45067,G__45068,G__45069,G__45070,G__45071,G__45072,G__45073,G__45074,G__45075,G__45076,G__45077,G__45078) : f.call(null,G__45064,G__45065,G__45066,G__45067,G__45068,G__45069,G__45070,G__45071,G__45072,G__45073,G__45074,G__45075,G__45076,G__45077,G__45078));
});
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__45086 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45087 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45088 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45089 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45090 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45091 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45092 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45093 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45094 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45095 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45096 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45097 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45098 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45099 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45100 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45101 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__45085 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__45085.cljs$core$IFn$_invoke$arity$16 ? fexpr__45085.cljs$core$IFn$_invoke$arity$16(G__45086,G__45087,G__45088,G__45089,G__45090,G__45091,G__45092,G__45093,G__45094,G__45095,G__45096,G__45097,G__45098,G__45099,G__45100,G__45101) : fexpr__45085.call(null,G__45086,G__45087,G__45088,G__45089,G__45090,G__45091,G__45092,G__45093,G__45094,G__45095,G__45096,G__45097,G__45098,G__45099,G__45100,G__45101));
});
} else {
return (function (ctx,bindings){
var G__45105 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45106 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45107 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45108 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45109 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45110 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45111 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45112 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45113 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45114 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45115 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45116 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45117 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45118 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45119 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45120 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__45105,G__45106,G__45107,G__45108,G__45109,G__45110,G__45111,G__45112,G__45113,G__45114,G__45115,G__45116,G__45117,G__45118,G__45119,G__45120) : f.call(null,G__45105,G__45106,G__45107,G__45108,G__45109,G__45110,G__45111,G__45112,G__45113,G__45114,G__45115,G__45116,G__45117,G__45118,G__45119,G__45120));
});
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__45127 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45128 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45129 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45130 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45131 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45132 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45133 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45134 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45135 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45136 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45137 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45138 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45139 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45140 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45141 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45142 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__45143 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__45126 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__45126.cljs$core$IFn$_invoke$arity$17 ? fexpr__45126.cljs$core$IFn$_invoke$arity$17(G__45127,G__45128,G__45129,G__45130,G__45131,G__45132,G__45133,G__45134,G__45135,G__45136,G__45137,G__45138,G__45139,G__45140,G__45141,G__45142,G__45143) : fexpr__45126.call(null,G__45127,G__45128,G__45129,G__45130,G__45131,G__45132,G__45133,G__45134,G__45135,G__45136,G__45137,G__45138,G__45139,G__45140,G__45141,G__45142,G__45143));
});
} else {
return (function (ctx,bindings){
var G__45145 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45146 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45147 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45148 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45149 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45150 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45151 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45152 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45153 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45154 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45155 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45156 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45157 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45158 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45159 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45160 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__45161 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__45145,G__45146,G__45147,G__45148,G__45149,G__45150,G__45151,G__45152,G__45153,G__45154,G__45155,G__45156,G__45157,G__45158,G__45159,G__45160,G__45161) : f.call(null,G__45145,G__45146,G__45147,G__45148,G__45149,G__45150,G__45151,G__45152,G__45153,G__45154,G__45155,G__45156,G__45157,G__45158,G__45159,G__45160,G__45161));
});
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__45167 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45168 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45169 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45170 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45171 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45172 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45173 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45174 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45175 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45176 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45177 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45178 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45179 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45180 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45181 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45182 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__45183 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__45184 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__45166 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__45166.cljs$core$IFn$_invoke$arity$18 ? fexpr__45166.cljs$core$IFn$_invoke$arity$18(G__45167,G__45168,G__45169,G__45170,G__45171,G__45172,G__45173,G__45174,G__45175,G__45176,G__45177,G__45178,G__45179,G__45180,G__45181,G__45182,G__45183,G__45184) : fexpr__45166.call(null,G__45167,G__45168,G__45169,G__45170,G__45171,G__45172,G__45173,G__45174,G__45175,G__45176,G__45177,G__45178,G__45179,G__45180,G__45181,G__45182,G__45183,G__45184));
});
} else {
return (function (ctx,bindings){
var G__45189 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45190 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45191 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45192 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45193 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45194 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45195 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45196 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45197 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45198 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45199 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45200 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45201 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45202 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45203 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45204 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__45205 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__45206 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__45189,G__45190,G__45191,G__45192,G__45193,G__45194,G__45195,G__45196,G__45197,G__45198,G__45199,G__45200,G__45201,G__45202,G__45203,G__45204,G__45205,G__45206) : f.call(null,G__45189,G__45190,G__45191,G__45192,G__45193,G__45194,G__45195,G__45196,G__45197,G__45198,G__45199,G__45200,G__45201,G__45202,G__45203,G__45204,G__45205,G__45206));
});
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__45211 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45212 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45213 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45214 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45215 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45216 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45217 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45218 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45219 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45220 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45221 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45222 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45223 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45224 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45225 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45226 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__45227 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__45228 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__45229 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__45210 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__45210.cljs$core$IFn$_invoke$arity$19 ? fexpr__45210.cljs$core$IFn$_invoke$arity$19(G__45211,G__45212,G__45213,G__45214,G__45215,G__45216,G__45217,G__45218,G__45219,G__45220,G__45221,G__45222,G__45223,G__45224,G__45225,G__45226,G__45227,G__45228,G__45229) : fexpr__45210.call(null,G__45211,G__45212,G__45213,G__45214,G__45215,G__45216,G__45217,G__45218,G__45219,G__45220,G__45221,G__45222,G__45223,G__45224,G__45225,G__45226,G__45227,G__45228,G__45229));
});
} else {
return (function (ctx,bindings){
var G__45233 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__45234 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__45235 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__45236 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__45237 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__45238 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__45239 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__45240 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__45241 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__45242 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__45243 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__45244 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__45245 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__45246 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__45247 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__45248 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__45249 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__45250 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__45251 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__45233,G__45234,G__45235,G__45236,G__45237,G__45238,G__45239,G__45240,G__45241,G__45242,G__45243,G__45244,G__45245,G__45246,G__45247,G__45248,G__45249,G__45250,G__45251) : f.call(null,G__45233,G__45234,G__45235,G__45236,G__45237,G__45238,G__45239,G__45240,G__45241,G__45242,G__45243,G__45244,G__45245,G__45246,G__45247,G__45248,G__45249,G__45250,G__45251));
});
}

break;
default:
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
});
} else {
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
});
}

}
})(),null,expr,stack);
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_ctx__$1,_bindings){
return snd;
}),expr);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__45258 = ctx;
var G__45259 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__45258,G__45259) : sci.impl.analyzer.analyze.call(null,G__45258,G__45259));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var ns_sym = sci.impl.evaluator.eval(ctx__$1,bindings,ns_expr);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),expr);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = special_sym;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5043__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5045__auto__ = special_sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5043__auto__ = f_meta;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = f_meta;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5043__auto__;
}
})())){
var vec__45264 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = idx;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),expr);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(eval_QMARK_);
if(and__5043__auto__){
var or__5045__auto__ = special_sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__5043__auto__;
}
})())){
var G__45267 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__45267)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__45267)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__45267)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__45267)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__45267)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__45267)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__45267)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__45267)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__45267)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__45267)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__45267)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__45267)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__45267)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__45267)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__45267)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__45267)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__45267)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__45267)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__45267)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__45267)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__45267)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__45267)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__45267)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__45267)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__45267)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__45267)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__45267)){
return sci.impl.analyzer.return_or(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45267)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5043__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5043__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v__$1) : sci.impl.analyzer.analyze.call(null,ctx,v__$1));
})()
));
return expanded;
} else {
var temp__5802__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5802__auto__)){
var f__$2 = temp__5802__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5802__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5802__auto____$1)){
var op = temp__5802__auto____$1;
var G__45282 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__45282)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__45282)){
return sci.impl.analyzer.return_binding_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1)))){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e45274){if((e45274 instanceof Error)){
var e = e45274;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(null,null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0))));
} else {
throw e45274;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__45291 = ccount;
switch (G__45291) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,bindings,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,bindings,arg0),sci.impl.evaluator.eval(ctx__$1,bindings,arg1));
}),expr);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
var f__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,f__$1);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children,null,null);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children,null,null);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (((cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)))));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ctx)))?sci.impl.analyzer.return_map(ctx,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__45300 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__45301 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__45300,G__45301) : sci.impl.analyzer.analyze.call(null,G__45300,G__45301));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
var ret = (cljs.core.truth_(analyzed_meta__$1)?(((analyzed_map instanceof sci.impl.types.EvalFn))?sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.handle_meta(ctx__$1,bindings,analyzed_meta__$1);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_map);
return cljs.core.with_meta(coll,md);
}),expr):cljs.core.with_meta(analyzed_map,analyzed_meta__$1)):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_meta);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,ef);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null)));
return analyzed_coll;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45305_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__45305_SHARP_);
}),vs__$1)));
}),js_val);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var arr = [];
var seq__45306_45825 = cljs.core.seq(vs);
var chunk__45307_45826 = null;
var count__45308_45827 = (0);
var i__45309_45828 = (0);
while(true){
if((i__45309_45828 < count__45308_45827)){
var x_45829 = chunk__45307_45826.cljs$core$IIndexed$_nth$arity$2(null,i__45309_45828);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_45829));


var G__45830 = seq__45306_45825;
var G__45831 = chunk__45307_45826;
var G__45832 = count__45308_45827;
var G__45833 = (i__45309_45828 + (1));
seq__45306_45825 = G__45830;
chunk__45307_45826 = G__45831;
count__45308_45827 = G__45832;
i__45309_45828 = G__45833;
continue;
} else {
var temp__5804__auto___45834 = cljs.core.seq(seq__45306_45825);
if(temp__5804__auto___45834){
var seq__45306_45835__$1 = temp__5804__auto___45834;
if(cljs.core.chunked_seq_QMARK_(seq__45306_45835__$1)){
var c__5568__auto___45836 = cljs.core.chunk_first(seq__45306_45835__$1);
var G__45837 = cljs.core.chunk_rest(seq__45306_45835__$1);
var G__45838 = c__5568__auto___45836;
var G__45839 = cljs.core.count(c__5568__auto___45836);
var G__45840 = (0);
seq__45306_45825 = G__45837;
chunk__45307_45826 = G__45838;
count__45308_45827 = G__45839;
i__45309_45828 = G__45840;
continue;
} else {
var x_45841 = cljs.core.first(seq__45306_45835__$1);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_45841));


var G__45842 = cljs.core.next(seq__45306_45835__$1);
var G__45843 = null;
var G__45844 = (0);
var G__45845 = (0);
seq__45306_45825 = G__45842;
chunk__45307_45826 = G__45843;
count__45308_45827 = G__45844;
i__45309_45828 = G__45845;
continue;
}
} else {
}
}
break;
}

return arr;
}),js_val);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__45312 = arguments.length;
switch (G__45312) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
