goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__33516 = xs;
args__$2 = G__33516;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__33520 = xs;
args__$2 = G__33520;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__32518 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__33521 = ctx__$1;
var G__33522 = bindings__$2;
var G__33523 = rest_let_bindings;
ctx__$1 = G__33521;
bindings__$1 = G__33522;
let_bindings__$1 = G__33523;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32518,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32518,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__33528 = nexprs;
exprs__$1 = G__33528;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__32526 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__32527 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__32526,G__32527) : sci.impl.utils.kw_identical_QMARK_.call(null,G__32526,G__32527));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32524_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__32524_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__32524_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32525_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__32525_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__32525_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__32532 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32532,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__32532;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__32534 = arguments.length;
switch (G__32534) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__32535 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__32543 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32543,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32543,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__32554 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__32555 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__32555);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__32554);
}}catch (e32547){if((e32547 instanceof Error)){
var e = e32547;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__32548 = ctx;
var G__32549 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__32550 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32548,G__32549,G__32550) : sci.impl.evaluator.eval.call(null,G__32548,G__32549,G__32550));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__32551 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e32547;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32559_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__32559_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__32559_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32571_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__32571_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__32571_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__32584 = arguments.length;
switch (G__32584) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__32591 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__32591.cljs$core$IFn$_invoke$arity$3 ? fexpr__32591.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__32591.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33591 = arguments.length;
var i__5770__auto___33592 = (0);
while(true){
if((i__5770__auto___33592 < len__5769__auto___33591)){
args__5775__auto__.push((arguments[i__5770__auto___33592]));

var G__33593 = (i__5770__auto___33592 + (1));
i__5770__auto___33592 = G__33593;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32592_SHARP_){
if(((cljs.core.seq_QMARK_(p1__32592_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__32592_SHARP_))))){
return cljs.core.second(p1__32592_SHARP_);
} else {
return p1__32592_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__32602 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32602,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32602,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq32593){
var G__32594 = cljs.core.first(seq32593);
var seq32593__$1 = cljs.core.next(seq32593);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32594,seq32593__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__32610 = ctx;
var G__32611 = bindings;
var G__32612 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32610,G__32611,G__32612) : sci.impl.evaluator.eval.call(null,G__32610,G__32611,G__32612));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__33613 = exprs__$3;
exprs__$2 = G__33613;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__32807 = cljs.core.count(args);
switch (G__32807) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg32617 = (function (){var G__32808 = ctx;
var G__32809 = bindings;
var G__32810 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32808,G__32809,G__32810) : sci.impl.evaluator.eval.call(null,G__32808,G__32809,G__32810));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg32617) : f.call(null,arg32617));

break;
case (2):
var arg32618 = (function (){var G__32811 = ctx;
var G__32812 = bindings;
var G__32813 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32811,G__32812,G__32813) : sci.impl.evaluator.eval.call(null,G__32811,G__32812,G__32813));
})();
var args__$1 = cljs.core.rest(args);
var arg32619 = (function (){var G__32814 = ctx;
var G__32815 = bindings;
var G__32816 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32814,G__32815,G__32816) : sci.impl.evaluator.eval.call(null,G__32814,G__32815,G__32816));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg32618,arg32619) : f.call(null,arg32618,arg32619));

break;
case (3):
var arg32620 = (function (){var G__32817 = ctx;
var G__32818 = bindings;
var G__32819 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32817,G__32818,G__32819) : sci.impl.evaluator.eval.call(null,G__32817,G__32818,G__32819));
})();
var args__$1 = cljs.core.rest(args);
var arg32621 = (function (){var G__32820 = ctx;
var G__32821 = bindings;
var G__32822 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32820,G__32821,G__32822) : sci.impl.evaluator.eval.call(null,G__32820,G__32821,G__32822));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32622 = (function (){var G__32824 = ctx;
var G__32825 = bindings;
var G__32826 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32824,G__32825,G__32826) : sci.impl.evaluator.eval.call(null,G__32824,G__32825,G__32826));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg32620,arg32621,arg32622) : f.call(null,arg32620,arg32621,arg32622));

break;
case (4):
var arg32623 = (function (){var G__32831 = ctx;
var G__32832 = bindings;
var G__32833 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32831,G__32832,G__32833) : sci.impl.evaluator.eval.call(null,G__32831,G__32832,G__32833));
})();
var args__$1 = cljs.core.rest(args);
var arg32624 = (function (){var G__32834 = ctx;
var G__32835 = bindings;
var G__32836 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32834,G__32835,G__32836) : sci.impl.evaluator.eval.call(null,G__32834,G__32835,G__32836));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32625 = (function (){var G__32837 = ctx;
var G__32838 = bindings;
var G__32839 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32837,G__32838,G__32839) : sci.impl.evaluator.eval.call(null,G__32837,G__32838,G__32839));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32626 = (function (){var G__32840 = ctx;
var G__32841 = bindings;
var G__32842 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32840,G__32841,G__32842) : sci.impl.evaluator.eval.call(null,G__32840,G__32841,G__32842));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg32623,arg32624,arg32625,arg32626) : f.call(null,arg32623,arg32624,arg32625,arg32626));

break;
case (5):
var arg32627 = (function (){var G__32845 = ctx;
var G__32846 = bindings;
var G__32847 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32845,G__32846,G__32847) : sci.impl.evaluator.eval.call(null,G__32845,G__32846,G__32847));
})();
var args__$1 = cljs.core.rest(args);
var arg32628 = (function (){var G__32851 = ctx;
var G__32852 = bindings;
var G__32853 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32851,G__32852,G__32853) : sci.impl.evaluator.eval.call(null,G__32851,G__32852,G__32853));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32629 = (function (){var G__32854 = ctx;
var G__32855 = bindings;
var G__32856 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32854,G__32855,G__32856) : sci.impl.evaluator.eval.call(null,G__32854,G__32855,G__32856));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32630 = (function (){var G__32858 = ctx;
var G__32859 = bindings;
var G__32860 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32858,G__32859,G__32860) : sci.impl.evaluator.eval.call(null,G__32858,G__32859,G__32860));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32631 = (function (){var G__32861 = ctx;
var G__32862 = bindings;
var G__32863 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32861,G__32862,G__32863) : sci.impl.evaluator.eval.call(null,G__32861,G__32862,G__32863));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg32627,arg32628,arg32629,arg32630,arg32631) : f.call(null,arg32627,arg32628,arg32629,arg32630,arg32631));

break;
case (6):
var arg32632 = (function (){var G__32867 = ctx;
var G__32868 = bindings;
var G__32869 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32867,G__32868,G__32869) : sci.impl.evaluator.eval.call(null,G__32867,G__32868,G__32869));
})();
var args__$1 = cljs.core.rest(args);
var arg32633 = (function (){var G__32870 = ctx;
var G__32871 = bindings;
var G__32872 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32870,G__32871,G__32872) : sci.impl.evaluator.eval.call(null,G__32870,G__32871,G__32872));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32634 = (function (){var G__32873 = ctx;
var G__32874 = bindings;
var G__32875 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32873,G__32874,G__32875) : sci.impl.evaluator.eval.call(null,G__32873,G__32874,G__32875));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32635 = (function (){var G__32876 = ctx;
var G__32877 = bindings;
var G__32878 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32876,G__32877,G__32878) : sci.impl.evaluator.eval.call(null,G__32876,G__32877,G__32878));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32636 = (function (){var G__32879 = ctx;
var G__32880 = bindings;
var G__32881 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32879,G__32880,G__32881) : sci.impl.evaluator.eval.call(null,G__32879,G__32880,G__32881));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32637 = (function (){var G__32888 = ctx;
var G__32889 = bindings;
var G__32890 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32888,G__32889,G__32890) : sci.impl.evaluator.eval.call(null,G__32888,G__32889,G__32890));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg32632,arg32633,arg32634,arg32635,arg32636,arg32637) : f.call(null,arg32632,arg32633,arg32634,arg32635,arg32636,arg32637));

break;
case (7):
var arg32638 = (function (){var G__32894 = ctx;
var G__32895 = bindings;
var G__32896 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32894,G__32895,G__32896) : sci.impl.evaluator.eval.call(null,G__32894,G__32895,G__32896));
})();
var args__$1 = cljs.core.rest(args);
var arg32639 = (function (){var G__32897 = ctx;
var G__32898 = bindings;
var G__32899 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32897,G__32898,G__32899) : sci.impl.evaluator.eval.call(null,G__32897,G__32898,G__32899));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32640 = (function (){var G__32901 = ctx;
var G__32902 = bindings;
var G__32903 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32901,G__32902,G__32903) : sci.impl.evaluator.eval.call(null,G__32901,G__32902,G__32903));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32641 = (function (){var G__32908 = ctx;
var G__32909 = bindings;
var G__32910 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32908,G__32909,G__32910) : sci.impl.evaluator.eval.call(null,G__32908,G__32909,G__32910));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32642 = (function (){var G__32917 = ctx;
var G__32918 = bindings;
var G__32919 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32917,G__32918,G__32919) : sci.impl.evaluator.eval.call(null,G__32917,G__32918,G__32919));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32643 = (function (){var G__32921 = ctx;
var G__32922 = bindings;
var G__32923 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32921,G__32922,G__32923) : sci.impl.evaluator.eval.call(null,G__32921,G__32922,G__32923));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32644 = (function (){var G__32925 = ctx;
var G__32926 = bindings;
var G__32927 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32925,G__32926,G__32927) : sci.impl.evaluator.eval.call(null,G__32925,G__32926,G__32927));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg32638,arg32639,arg32640,arg32641,arg32642,arg32643,arg32644) : f.call(null,arg32638,arg32639,arg32640,arg32641,arg32642,arg32643,arg32644));

break;
case (8):
var arg32645 = (function (){var G__32928 = ctx;
var G__32929 = bindings;
var G__32930 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32928,G__32929,G__32930) : sci.impl.evaluator.eval.call(null,G__32928,G__32929,G__32930));
})();
var args__$1 = cljs.core.rest(args);
var arg32646 = (function (){var G__32935 = ctx;
var G__32936 = bindings;
var G__32937 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32935,G__32936,G__32937) : sci.impl.evaluator.eval.call(null,G__32935,G__32936,G__32937));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32647 = (function (){var G__32938 = ctx;
var G__32939 = bindings;
var G__32940 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32938,G__32939,G__32940) : sci.impl.evaluator.eval.call(null,G__32938,G__32939,G__32940));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32648 = (function (){var G__32941 = ctx;
var G__32942 = bindings;
var G__32943 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32941,G__32942,G__32943) : sci.impl.evaluator.eval.call(null,G__32941,G__32942,G__32943));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32649 = (function (){var G__32945 = ctx;
var G__32946 = bindings;
var G__32947 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32945,G__32946,G__32947) : sci.impl.evaluator.eval.call(null,G__32945,G__32946,G__32947));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32650 = (function (){var G__32948 = ctx;
var G__32949 = bindings;
var G__32950 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32948,G__32949,G__32950) : sci.impl.evaluator.eval.call(null,G__32948,G__32949,G__32950));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32651 = (function (){var G__32951 = ctx;
var G__32952 = bindings;
var G__32953 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32951,G__32952,G__32953) : sci.impl.evaluator.eval.call(null,G__32951,G__32952,G__32953));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32652 = (function (){var G__32954 = ctx;
var G__32955 = bindings;
var G__32956 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32954,G__32955,G__32956) : sci.impl.evaluator.eval.call(null,G__32954,G__32955,G__32956));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg32645,arg32646,arg32647,arg32648,arg32649,arg32650,arg32651,arg32652) : f.call(null,arg32645,arg32646,arg32647,arg32648,arg32649,arg32650,arg32651,arg32652));

break;
case (9):
var arg32653 = (function (){var G__32960 = ctx;
var G__32961 = bindings;
var G__32962 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32960,G__32961,G__32962) : sci.impl.evaluator.eval.call(null,G__32960,G__32961,G__32962));
})();
var args__$1 = cljs.core.rest(args);
var arg32654 = (function (){var G__32963 = ctx;
var G__32964 = bindings;
var G__32965 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32963,G__32964,G__32965) : sci.impl.evaluator.eval.call(null,G__32963,G__32964,G__32965));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32655 = (function (){var G__32966 = ctx;
var G__32967 = bindings;
var G__32968 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32966,G__32967,G__32968) : sci.impl.evaluator.eval.call(null,G__32966,G__32967,G__32968));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32656 = (function (){var G__32970 = ctx;
var G__32971 = bindings;
var G__32972 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32970,G__32971,G__32972) : sci.impl.evaluator.eval.call(null,G__32970,G__32971,G__32972));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32657 = (function (){var G__32973 = ctx;
var G__32974 = bindings;
var G__32975 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32973,G__32974,G__32975) : sci.impl.evaluator.eval.call(null,G__32973,G__32974,G__32975));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32658 = (function (){var G__32976 = ctx;
var G__32977 = bindings;
var G__32978 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32976,G__32977,G__32978) : sci.impl.evaluator.eval.call(null,G__32976,G__32977,G__32978));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32659 = (function (){var G__32979 = ctx;
var G__32980 = bindings;
var G__32981 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32979,G__32980,G__32981) : sci.impl.evaluator.eval.call(null,G__32979,G__32980,G__32981));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32660 = (function (){var G__32982 = ctx;
var G__32983 = bindings;
var G__32984 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32982,G__32983,G__32984) : sci.impl.evaluator.eval.call(null,G__32982,G__32983,G__32984));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32661 = (function (){var G__32989 = ctx;
var G__32990 = bindings;
var G__32991 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32989,G__32990,G__32991) : sci.impl.evaluator.eval.call(null,G__32989,G__32990,G__32991));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg32653,arg32654,arg32655,arg32656,arg32657,arg32658,arg32659,arg32660,arg32661) : f.call(null,arg32653,arg32654,arg32655,arg32656,arg32657,arg32658,arg32659,arg32660,arg32661));

break;
case (10):
var arg32662 = (function (){var G__32995 = ctx;
var G__32996 = bindings;
var G__32997 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32995,G__32996,G__32997) : sci.impl.evaluator.eval.call(null,G__32995,G__32996,G__32997));
})();
var args__$1 = cljs.core.rest(args);
var arg32663 = (function (){var G__32998 = ctx;
var G__32999 = bindings;
var G__33000 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__32998,G__32999,G__33000) : sci.impl.evaluator.eval.call(null,G__32998,G__32999,G__33000));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32664 = (function (){var G__33001 = ctx;
var G__33002 = bindings;
var G__33003 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33001,G__33002,G__33003) : sci.impl.evaluator.eval.call(null,G__33001,G__33002,G__33003));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32665 = (function (){var G__33004 = ctx;
var G__33005 = bindings;
var G__33006 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33004,G__33005,G__33006) : sci.impl.evaluator.eval.call(null,G__33004,G__33005,G__33006));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32666 = (function (){var G__33007 = ctx;
var G__33008 = bindings;
var G__33009 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33007,G__33008,G__33009) : sci.impl.evaluator.eval.call(null,G__33007,G__33008,G__33009));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32667 = (function (){var G__33010 = ctx;
var G__33011 = bindings;
var G__33012 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33010,G__33011,G__33012) : sci.impl.evaluator.eval.call(null,G__33010,G__33011,G__33012));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32668 = (function (){var G__33013 = ctx;
var G__33014 = bindings;
var G__33015 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33013,G__33014,G__33015) : sci.impl.evaluator.eval.call(null,G__33013,G__33014,G__33015));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32669 = (function (){var G__33016 = ctx;
var G__33017 = bindings;
var G__33018 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33016,G__33017,G__33018) : sci.impl.evaluator.eval.call(null,G__33016,G__33017,G__33018));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32670 = (function (){var G__33019 = ctx;
var G__33020 = bindings;
var G__33021 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33019,G__33020,G__33021) : sci.impl.evaluator.eval.call(null,G__33019,G__33020,G__33021));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32671 = (function (){var G__33022 = ctx;
var G__33023 = bindings;
var G__33024 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33022,G__33023,G__33024) : sci.impl.evaluator.eval.call(null,G__33022,G__33023,G__33024));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg32662,arg32663,arg32664,arg32665,arg32666,arg32667,arg32668,arg32669,arg32670,arg32671) : f.call(null,arg32662,arg32663,arg32664,arg32665,arg32666,arg32667,arg32668,arg32669,arg32670,arg32671));

break;
case (11):
var arg32672 = (function (){var G__33025 = ctx;
var G__33026 = bindings;
var G__33027 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33025,G__33026,G__33027) : sci.impl.evaluator.eval.call(null,G__33025,G__33026,G__33027));
})();
var args__$1 = cljs.core.rest(args);
var arg32673 = (function (){var G__33028 = ctx;
var G__33029 = bindings;
var G__33030 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33028,G__33029,G__33030) : sci.impl.evaluator.eval.call(null,G__33028,G__33029,G__33030));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32674 = (function (){var G__33034 = ctx;
var G__33035 = bindings;
var G__33036 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33034,G__33035,G__33036) : sci.impl.evaluator.eval.call(null,G__33034,G__33035,G__33036));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32675 = (function (){var G__33037 = ctx;
var G__33038 = bindings;
var G__33039 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33037,G__33038,G__33039) : sci.impl.evaluator.eval.call(null,G__33037,G__33038,G__33039));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32676 = (function (){var G__33040 = ctx;
var G__33041 = bindings;
var G__33042 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33040,G__33041,G__33042) : sci.impl.evaluator.eval.call(null,G__33040,G__33041,G__33042));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32677 = (function (){var G__33043 = ctx;
var G__33044 = bindings;
var G__33045 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33043,G__33044,G__33045) : sci.impl.evaluator.eval.call(null,G__33043,G__33044,G__33045));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32678 = (function (){var G__33046 = ctx;
var G__33047 = bindings;
var G__33048 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33046,G__33047,G__33048) : sci.impl.evaluator.eval.call(null,G__33046,G__33047,G__33048));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32679 = (function (){var G__33049 = ctx;
var G__33050 = bindings;
var G__33051 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33049,G__33050,G__33051) : sci.impl.evaluator.eval.call(null,G__33049,G__33050,G__33051));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32680 = (function (){var G__33052 = ctx;
var G__33053 = bindings;
var G__33054 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33052,G__33053,G__33054) : sci.impl.evaluator.eval.call(null,G__33052,G__33053,G__33054));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32681 = (function (){var G__33055 = ctx;
var G__33056 = bindings;
var G__33057 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33055,G__33056,G__33057) : sci.impl.evaluator.eval.call(null,G__33055,G__33056,G__33057));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32682 = (function (){var G__33058 = ctx;
var G__33059 = bindings;
var G__33060 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33058,G__33059,G__33060) : sci.impl.evaluator.eval.call(null,G__33058,G__33059,G__33060));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg32672,arg32673,arg32674,arg32675,arg32676,arg32677,arg32678,arg32679,arg32680,arg32681,arg32682) : f.call(null,arg32672,arg32673,arg32674,arg32675,arg32676,arg32677,arg32678,arg32679,arg32680,arg32681,arg32682));

break;
case (12):
var arg32683 = (function (){var G__33061 = ctx;
var G__33062 = bindings;
var G__33063 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33061,G__33062,G__33063) : sci.impl.evaluator.eval.call(null,G__33061,G__33062,G__33063));
})();
var args__$1 = cljs.core.rest(args);
var arg32684 = (function (){var G__33064 = ctx;
var G__33065 = bindings;
var G__33066 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33064,G__33065,G__33066) : sci.impl.evaluator.eval.call(null,G__33064,G__33065,G__33066));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32685 = (function (){var G__33067 = ctx;
var G__33068 = bindings;
var G__33069 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33067,G__33068,G__33069) : sci.impl.evaluator.eval.call(null,G__33067,G__33068,G__33069));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32686 = (function (){var G__33073 = ctx;
var G__33074 = bindings;
var G__33075 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33073,G__33074,G__33075) : sci.impl.evaluator.eval.call(null,G__33073,G__33074,G__33075));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32687 = (function (){var G__33076 = ctx;
var G__33077 = bindings;
var G__33078 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33076,G__33077,G__33078) : sci.impl.evaluator.eval.call(null,G__33076,G__33077,G__33078));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32688 = (function (){var G__33079 = ctx;
var G__33080 = bindings;
var G__33081 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33079,G__33080,G__33081) : sci.impl.evaluator.eval.call(null,G__33079,G__33080,G__33081));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32689 = (function (){var G__33086 = ctx;
var G__33087 = bindings;
var G__33088 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33086,G__33087,G__33088) : sci.impl.evaluator.eval.call(null,G__33086,G__33087,G__33088));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32690 = (function (){var G__33089 = ctx;
var G__33090 = bindings;
var G__33091 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33089,G__33090,G__33091) : sci.impl.evaluator.eval.call(null,G__33089,G__33090,G__33091));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32691 = (function (){var G__33095 = ctx;
var G__33096 = bindings;
var G__33097 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33095,G__33096,G__33097) : sci.impl.evaluator.eval.call(null,G__33095,G__33096,G__33097));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32692 = (function (){var G__33098 = ctx;
var G__33099 = bindings;
var G__33100 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33098,G__33099,G__33100) : sci.impl.evaluator.eval.call(null,G__33098,G__33099,G__33100));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32693 = (function (){var G__33101 = ctx;
var G__33102 = bindings;
var G__33103 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33101,G__33102,G__33103) : sci.impl.evaluator.eval.call(null,G__33101,G__33102,G__33103));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32694 = (function (){var G__33104 = ctx;
var G__33105 = bindings;
var G__33106 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33104,G__33105,G__33106) : sci.impl.evaluator.eval.call(null,G__33104,G__33105,G__33106));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg32683,arg32684,arg32685,arg32686,arg32687,arg32688,arg32689,arg32690,arg32691,arg32692,arg32693,arg32694) : f.call(null,arg32683,arg32684,arg32685,arg32686,arg32687,arg32688,arg32689,arg32690,arg32691,arg32692,arg32693,arg32694));

break;
case (13):
var arg32695 = (function (){var G__33107 = ctx;
var G__33108 = bindings;
var G__33109 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33107,G__33108,G__33109) : sci.impl.evaluator.eval.call(null,G__33107,G__33108,G__33109));
})();
var args__$1 = cljs.core.rest(args);
var arg32696 = (function (){var G__33110 = ctx;
var G__33111 = bindings;
var G__33112 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33110,G__33111,G__33112) : sci.impl.evaluator.eval.call(null,G__33110,G__33111,G__33112));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32697 = (function (){var G__33113 = ctx;
var G__33114 = bindings;
var G__33115 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33113,G__33114,G__33115) : sci.impl.evaluator.eval.call(null,G__33113,G__33114,G__33115));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32698 = (function (){var G__33116 = ctx;
var G__33117 = bindings;
var G__33118 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33116,G__33117,G__33118) : sci.impl.evaluator.eval.call(null,G__33116,G__33117,G__33118));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32699 = (function (){var G__33119 = ctx;
var G__33120 = bindings;
var G__33121 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33119,G__33120,G__33121) : sci.impl.evaluator.eval.call(null,G__33119,G__33120,G__33121));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32700 = (function (){var G__33122 = ctx;
var G__33123 = bindings;
var G__33124 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33122,G__33123,G__33124) : sci.impl.evaluator.eval.call(null,G__33122,G__33123,G__33124));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32701 = (function (){var G__33125 = ctx;
var G__33126 = bindings;
var G__33127 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33125,G__33126,G__33127) : sci.impl.evaluator.eval.call(null,G__33125,G__33126,G__33127));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32702 = (function (){var G__33128 = ctx;
var G__33129 = bindings;
var G__33130 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33128,G__33129,G__33130) : sci.impl.evaluator.eval.call(null,G__33128,G__33129,G__33130));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32703 = (function (){var G__33134 = ctx;
var G__33135 = bindings;
var G__33136 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33134,G__33135,G__33136) : sci.impl.evaluator.eval.call(null,G__33134,G__33135,G__33136));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32704 = (function (){var G__33138 = ctx;
var G__33139 = bindings;
var G__33140 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33138,G__33139,G__33140) : sci.impl.evaluator.eval.call(null,G__33138,G__33139,G__33140));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32705 = (function (){var G__33141 = ctx;
var G__33142 = bindings;
var G__33143 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33141,G__33142,G__33143) : sci.impl.evaluator.eval.call(null,G__33141,G__33142,G__33143));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32706 = (function (){var G__33144 = ctx;
var G__33145 = bindings;
var G__33146 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33144,G__33145,G__33146) : sci.impl.evaluator.eval.call(null,G__33144,G__33145,G__33146));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32707 = (function (){var G__33147 = ctx;
var G__33148 = bindings;
var G__33149 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33147,G__33148,G__33149) : sci.impl.evaluator.eval.call(null,G__33147,G__33148,G__33149));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg32695,arg32696,arg32697,arg32698,arg32699,arg32700,arg32701,arg32702,arg32703,arg32704,arg32705,arg32706,arg32707) : f.call(null,arg32695,arg32696,arg32697,arg32698,arg32699,arg32700,arg32701,arg32702,arg32703,arg32704,arg32705,arg32706,arg32707));

break;
case (14):
var arg32708 = (function (){var G__33153 = ctx;
var G__33154 = bindings;
var G__33155 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33153,G__33154,G__33155) : sci.impl.evaluator.eval.call(null,G__33153,G__33154,G__33155));
})();
var args__$1 = cljs.core.rest(args);
var arg32709 = (function (){var G__33156 = ctx;
var G__33157 = bindings;
var G__33158 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33156,G__33157,G__33158) : sci.impl.evaluator.eval.call(null,G__33156,G__33157,G__33158));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32710 = (function (){var G__33159 = ctx;
var G__33160 = bindings;
var G__33161 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33159,G__33160,G__33161) : sci.impl.evaluator.eval.call(null,G__33159,G__33160,G__33161));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32711 = (function (){var G__33162 = ctx;
var G__33163 = bindings;
var G__33164 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33162,G__33163,G__33164) : sci.impl.evaluator.eval.call(null,G__33162,G__33163,G__33164));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32712 = (function (){var G__33165 = ctx;
var G__33166 = bindings;
var G__33167 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33165,G__33166,G__33167) : sci.impl.evaluator.eval.call(null,G__33165,G__33166,G__33167));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32713 = (function (){var G__33171 = ctx;
var G__33172 = bindings;
var G__33173 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33171,G__33172,G__33173) : sci.impl.evaluator.eval.call(null,G__33171,G__33172,G__33173));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32714 = (function (){var G__33174 = ctx;
var G__33175 = bindings;
var G__33176 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33174,G__33175,G__33176) : sci.impl.evaluator.eval.call(null,G__33174,G__33175,G__33176));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32715 = (function (){var G__33177 = ctx;
var G__33178 = bindings;
var G__33179 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33177,G__33178,G__33179) : sci.impl.evaluator.eval.call(null,G__33177,G__33178,G__33179));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32716 = (function (){var G__33180 = ctx;
var G__33181 = bindings;
var G__33182 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33180,G__33181,G__33182) : sci.impl.evaluator.eval.call(null,G__33180,G__33181,G__33182));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32717 = (function (){var G__33183 = ctx;
var G__33184 = bindings;
var G__33185 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33183,G__33184,G__33185) : sci.impl.evaluator.eval.call(null,G__33183,G__33184,G__33185));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32718 = (function (){var G__33186 = ctx;
var G__33187 = bindings;
var G__33188 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33186,G__33187,G__33188) : sci.impl.evaluator.eval.call(null,G__33186,G__33187,G__33188));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32719 = (function (){var G__33189 = ctx;
var G__33190 = bindings;
var G__33191 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33189,G__33190,G__33191) : sci.impl.evaluator.eval.call(null,G__33189,G__33190,G__33191));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32720 = (function (){var G__33192 = ctx;
var G__33193 = bindings;
var G__33194 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33192,G__33193,G__33194) : sci.impl.evaluator.eval.call(null,G__33192,G__33193,G__33194));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg32721 = (function (){var G__33195 = ctx;
var G__33196 = bindings;
var G__33197 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33195,G__33196,G__33197) : sci.impl.evaluator.eval.call(null,G__33195,G__33196,G__33197));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg32708,arg32709,arg32710,arg32711,arg32712,arg32713,arg32714,arg32715,arg32716,arg32717,arg32718,arg32719,arg32720,arg32721) : f.call(null,arg32708,arg32709,arg32710,arg32711,arg32712,arg32713,arg32714,arg32715,arg32716,arg32717,arg32718,arg32719,arg32720,arg32721));

break;
case (15):
var arg32722 = (function (){var G__33198 = ctx;
var G__33199 = bindings;
var G__33200 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33198,G__33199,G__33200) : sci.impl.evaluator.eval.call(null,G__33198,G__33199,G__33200));
})();
var args__$1 = cljs.core.rest(args);
var arg32723 = (function (){var G__33201 = ctx;
var G__33202 = bindings;
var G__33203 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33201,G__33202,G__33203) : sci.impl.evaluator.eval.call(null,G__33201,G__33202,G__33203));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32724 = (function (){var G__33204 = ctx;
var G__33205 = bindings;
var G__33206 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33204,G__33205,G__33206) : sci.impl.evaluator.eval.call(null,G__33204,G__33205,G__33206));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32725 = (function (){var G__33210 = ctx;
var G__33211 = bindings;
var G__33212 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33210,G__33211,G__33212) : sci.impl.evaluator.eval.call(null,G__33210,G__33211,G__33212));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32726 = (function (){var G__33213 = ctx;
var G__33214 = bindings;
var G__33215 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33213,G__33214,G__33215) : sci.impl.evaluator.eval.call(null,G__33213,G__33214,G__33215));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32727 = (function (){var G__33216 = ctx;
var G__33217 = bindings;
var G__33218 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33216,G__33217,G__33218) : sci.impl.evaluator.eval.call(null,G__33216,G__33217,G__33218));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32728 = (function (){var G__33220 = ctx;
var G__33221 = bindings;
var G__33222 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33220,G__33221,G__33222) : sci.impl.evaluator.eval.call(null,G__33220,G__33221,G__33222));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32729 = (function (){var G__33223 = ctx;
var G__33224 = bindings;
var G__33225 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33223,G__33224,G__33225) : sci.impl.evaluator.eval.call(null,G__33223,G__33224,G__33225));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32730 = (function (){var G__33226 = ctx;
var G__33227 = bindings;
var G__33228 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33226,G__33227,G__33228) : sci.impl.evaluator.eval.call(null,G__33226,G__33227,G__33228));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32731 = (function (){var G__33229 = ctx;
var G__33230 = bindings;
var G__33231 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33229,G__33230,G__33231) : sci.impl.evaluator.eval.call(null,G__33229,G__33230,G__33231));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32732 = (function (){var G__33232 = ctx;
var G__33233 = bindings;
var G__33234 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33232,G__33233,G__33234) : sci.impl.evaluator.eval.call(null,G__33232,G__33233,G__33234));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32733 = (function (){var G__33235 = ctx;
var G__33236 = bindings;
var G__33237 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33235,G__33236,G__33237) : sci.impl.evaluator.eval.call(null,G__33235,G__33236,G__33237));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32734 = (function (){var G__33238 = ctx;
var G__33239 = bindings;
var G__33240 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33238,G__33239,G__33240) : sci.impl.evaluator.eval.call(null,G__33238,G__33239,G__33240));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg32735 = (function (){var G__33241 = ctx;
var G__33242 = bindings;
var G__33243 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33241,G__33242,G__33243) : sci.impl.evaluator.eval.call(null,G__33241,G__33242,G__33243));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg32736 = (function (){var G__33244 = ctx;
var G__33245 = bindings;
var G__33246 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33244,G__33245,G__33246) : sci.impl.evaluator.eval.call(null,G__33244,G__33245,G__33246));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg32722,arg32723,arg32724,arg32725,arg32726,arg32727,arg32728,arg32729,arg32730,arg32731,arg32732,arg32733,arg32734,arg32735,arg32736) : f.call(null,arg32722,arg32723,arg32724,arg32725,arg32726,arg32727,arg32728,arg32729,arg32730,arg32731,arg32732,arg32733,arg32734,arg32735,arg32736));

break;
case (16):
var arg32737 = (function (){var G__33250 = ctx;
var G__33251 = bindings;
var G__33252 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33250,G__33251,G__33252) : sci.impl.evaluator.eval.call(null,G__33250,G__33251,G__33252));
})();
var args__$1 = cljs.core.rest(args);
var arg32738 = (function (){var G__33253 = ctx;
var G__33254 = bindings;
var G__33255 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33253,G__33254,G__33255) : sci.impl.evaluator.eval.call(null,G__33253,G__33254,G__33255));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32739 = (function (){var G__33256 = ctx;
var G__33257 = bindings;
var G__33258 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33256,G__33257,G__33258) : sci.impl.evaluator.eval.call(null,G__33256,G__33257,G__33258));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32740 = (function (){var G__33263 = ctx;
var G__33264 = bindings;
var G__33265 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33263,G__33264,G__33265) : sci.impl.evaluator.eval.call(null,G__33263,G__33264,G__33265));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32741 = (function (){var G__33269 = ctx;
var G__33270 = bindings;
var G__33271 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33269,G__33270,G__33271) : sci.impl.evaluator.eval.call(null,G__33269,G__33270,G__33271));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32742 = (function (){var G__33272 = ctx;
var G__33273 = bindings;
var G__33274 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33272,G__33273,G__33274) : sci.impl.evaluator.eval.call(null,G__33272,G__33273,G__33274));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32743 = (function (){var G__33275 = ctx;
var G__33276 = bindings;
var G__33277 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33275,G__33276,G__33277) : sci.impl.evaluator.eval.call(null,G__33275,G__33276,G__33277));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32744 = (function (){var G__33278 = ctx;
var G__33279 = bindings;
var G__33280 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33278,G__33279,G__33280) : sci.impl.evaluator.eval.call(null,G__33278,G__33279,G__33280));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32745 = (function (){var G__33281 = ctx;
var G__33282 = bindings;
var G__33283 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33281,G__33282,G__33283) : sci.impl.evaluator.eval.call(null,G__33281,G__33282,G__33283));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32746 = (function (){var G__33284 = ctx;
var G__33285 = bindings;
var G__33286 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33284,G__33285,G__33286) : sci.impl.evaluator.eval.call(null,G__33284,G__33285,G__33286));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32747 = (function (){var G__33287 = ctx;
var G__33288 = bindings;
var G__33289 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33287,G__33288,G__33289) : sci.impl.evaluator.eval.call(null,G__33287,G__33288,G__33289));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32748 = (function (){var G__33290 = ctx;
var G__33291 = bindings;
var G__33292 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33290,G__33291,G__33292) : sci.impl.evaluator.eval.call(null,G__33290,G__33291,G__33292));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32749 = (function (){var G__33293 = ctx;
var G__33294 = bindings;
var G__33295 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33293,G__33294,G__33295) : sci.impl.evaluator.eval.call(null,G__33293,G__33294,G__33295));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg32750 = (function (){var G__33296 = ctx;
var G__33297 = bindings;
var G__33298 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33296,G__33297,G__33298) : sci.impl.evaluator.eval.call(null,G__33296,G__33297,G__33298));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg32751 = (function (){var G__33299 = ctx;
var G__33300 = bindings;
var G__33301 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33299,G__33300,G__33301) : sci.impl.evaluator.eval.call(null,G__33299,G__33300,G__33301));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg32752 = (function (){var G__33302 = ctx;
var G__33303 = bindings;
var G__33304 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33302,G__33303,G__33304) : sci.impl.evaluator.eval.call(null,G__33302,G__33303,G__33304));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg32737,arg32738,arg32739,arg32740,arg32741,arg32742,arg32743,arg32744,arg32745,arg32746,arg32747,arg32748,arg32749,arg32750,arg32751,arg32752) : f.call(null,arg32737,arg32738,arg32739,arg32740,arg32741,arg32742,arg32743,arg32744,arg32745,arg32746,arg32747,arg32748,arg32749,arg32750,arg32751,arg32752));

break;
case (17):
var arg32753 = (function (){var G__33305 = ctx;
var G__33306 = bindings;
var G__33307 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33305,G__33306,G__33307) : sci.impl.evaluator.eval.call(null,G__33305,G__33306,G__33307));
})();
var args__$1 = cljs.core.rest(args);
var arg32754 = (function (){var G__33311 = ctx;
var G__33312 = bindings;
var G__33313 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33311,G__33312,G__33313) : sci.impl.evaluator.eval.call(null,G__33311,G__33312,G__33313));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32755 = (function (){var G__33315 = ctx;
var G__33316 = bindings;
var G__33317 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33315,G__33316,G__33317) : sci.impl.evaluator.eval.call(null,G__33315,G__33316,G__33317));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32756 = (function (){var G__33318 = ctx;
var G__33319 = bindings;
var G__33320 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33318,G__33319,G__33320) : sci.impl.evaluator.eval.call(null,G__33318,G__33319,G__33320));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32757 = (function (){var G__33322 = ctx;
var G__33323 = bindings;
var G__33324 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33322,G__33323,G__33324) : sci.impl.evaluator.eval.call(null,G__33322,G__33323,G__33324));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32758 = (function (){var G__33325 = ctx;
var G__33326 = bindings;
var G__33327 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33325,G__33326,G__33327) : sci.impl.evaluator.eval.call(null,G__33325,G__33326,G__33327));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32759 = (function (){var G__33328 = ctx;
var G__33329 = bindings;
var G__33330 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33328,G__33329,G__33330) : sci.impl.evaluator.eval.call(null,G__33328,G__33329,G__33330));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32760 = (function (){var G__33331 = ctx;
var G__33332 = bindings;
var G__33333 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33331,G__33332,G__33333) : sci.impl.evaluator.eval.call(null,G__33331,G__33332,G__33333));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32761 = (function (){var G__33334 = ctx;
var G__33335 = bindings;
var G__33336 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33334,G__33335,G__33336) : sci.impl.evaluator.eval.call(null,G__33334,G__33335,G__33336));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32762 = (function (){var G__33337 = ctx;
var G__33338 = bindings;
var G__33339 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33337,G__33338,G__33339) : sci.impl.evaluator.eval.call(null,G__33337,G__33338,G__33339));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32763 = (function (){var G__33340 = ctx;
var G__33341 = bindings;
var G__33342 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33340,G__33341,G__33342) : sci.impl.evaluator.eval.call(null,G__33340,G__33341,G__33342));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32764 = (function (){var G__33343 = ctx;
var G__33344 = bindings;
var G__33345 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33343,G__33344,G__33345) : sci.impl.evaluator.eval.call(null,G__33343,G__33344,G__33345));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32765 = (function (){var G__33346 = ctx;
var G__33347 = bindings;
var G__33348 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33346,G__33347,G__33348) : sci.impl.evaluator.eval.call(null,G__33346,G__33347,G__33348));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg32766 = (function (){var G__33352 = ctx;
var G__33353 = bindings;
var G__33354 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33352,G__33353,G__33354) : sci.impl.evaluator.eval.call(null,G__33352,G__33353,G__33354));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg32767 = (function (){var G__33355 = ctx;
var G__33356 = bindings;
var G__33357 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33355,G__33356,G__33357) : sci.impl.evaluator.eval.call(null,G__33355,G__33356,G__33357));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg32768 = (function (){var G__33359 = ctx;
var G__33360 = bindings;
var G__33361 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33359,G__33360,G__33361) : sci.impl.evaluator.eval.call(null,G__33359,G__33360,G__33361));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg32769 = (function (){var G__33362 = ctx;
var G__33363 = bindings;
var G__33364 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33362,G__33363,G__33364) : sci.impl.evaluator.eval.call(null,G__33362,G__33363,G__33364));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg32753,arg32754,arg32755,arg32756,arg32757,arg32758,arg32759,arg32760,arg32761,arg32762,arg32763,arg32764,arg32765,arg32766,arg32767,arg32768,arg32769) : f.call(null,arg32753,arg32754,arg32755,arg32756,arg32757,arg32758,arg32759,arg32760,arg32761,arg32762,arg32763,arg32764,arg32765,arg32766,arg32767,arg32768,arg32769));

break;
case (18):
var arg32770 = (function (){var G__33365 = ctx;
var G__33366 = bindings;
var G__33367 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33365,G__33366,G__33367) : sci.impl.evaluator.eval.call(null,G__33365,G__33366,G__33367));
})();
var args__$1 = cljs.core.rest(args);
var arg32771 = (function (){var G__33372 = ctx;
var G__33373 = bindings;
var G__33374 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33372,G__33373,G__33374) : sci.impl.evaluator.eval.call(null,G__33372,G__33373,G__33374));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32772 = (function (){var G__33375 = ctx;
var G__33376 = bindings;
var G__33377 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33375,G__33376,G__33377) : sci.impl.evaluator.eval.call(null,G__33375,G__33376,G__33377));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32773 = (function (){var G__33378 = ctx;
var G__33379 = bindings;
var G__33380 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33378,G__33379,G__33380) : sci.impl.evaluator.eval.call(null,G__33378,G__33379,G__33380));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32774 = (function (){var G__33381 = ctx;
var G__33382 = bindings;
var G__33383 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33381,G__33382,G__33383) : sci.impl.evaluator.eval.call(null,G__33381,G__33382,G__33383));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32775 = (function (){var G__33384 = ctx;
var G__33385 = bindings;
var G__33386 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33384,G__33385,G__33386) : sci.impl.evaluator.eval.call(null,G__33384,G__33385,G__33386));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32776 = (function (){var G__33387 = ctx;
var G__33388 = bindings;
var G__33389 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33387,G__33388,G__33389) : sci.impl.evaluator.eval.call(null,G__33387,G__33388,G__33389));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32777 = (function (){var G__33390 = ctx;
var G__33391 = bindings;
var G__33392 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33390,G__33391,G__33392) : sci.impl.evaluator.eval.call(null,G__33390,G__33391,G__33392));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32778 = (function (){var G__33396 = ctx;
var G__33397 = bindings;
var G__33398 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33396,G__33397,G__33398) : sci.impl.evaluator.eval.call(null,G__33396,G__33397,G__33398));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32779 = (function (){var G__33399 = ctx;
var G__33400 = bindings;
var G__33401 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33399,G__33400,G__33401) : sci.impl.evaluator.eval.call(null,G__33399,G__33400,G__33401));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32780 = (function (){var G__33402 = ctx;
var G__33403 = bindings;
var G__33404 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33402,G__33403,G__33404) : sci.impl.evaluator.eval.call(null,G__33402,G__33403,G__33404));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32781 = (function (){var G__33405 = ctx;
var G__33406 = bindings;
var G__33407 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33405,G__33406,G__33407) : sci.impl.evaluator.eval.call(null,G__33405,G__33406,G__33407));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32782 = (function (){var G__33408 = ctx;
var G__33409 = bindings;
var G__33410 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33408,G__33409,G__33410) : sci.impl.evaluator.eval.call(null,G__33408,G__33409,G__33410));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg32783 = (function (){var G__33411 = ctx;
var G__33412 = bindings;
var G__33413 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33411,G__33412,G__33413) : sci.impl.evaluator.eval.call(null,G__33411,G__33412,G__33413));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg32784 = (function (){var G__33414 = ctx;
var G__33415 = bindings;
var G__33416 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33414,G__33415,G__33416) : sci.impl.evaluator.eval.call(null,G__33414,G__33415,G__33416));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg32785 = (function (){var G__33417 = ctx;
var G__33418 = bindings;
var G__33419 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33417,G__33418,G__33419) : sci.impl.evaluator.eval.call(null,G__33417,G__33418,G__33419));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg32786 = (function (){var G__33420 = ctx;
var G__33421 = bindings;
var G__33422 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33420,G__33421,G__33422) : sci.impl.evaluator.eval.call(null,G__33420,G__33421,G__33422));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg32787 = (function (){var G__33423 = ctx;
var G__33424 = bindings;
var G__33425 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33423,G__33424,G__33425) : sci.impl.evaluator.eval.call(null,G__33423,G__33424,G__33425));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg32770,arg32771,arg32772,arg32773,arg32774,arg32775,arg32776,arg32777,arg32778,arg32779,arg32780,arg32781,arg32782,arg32783,arg32784,arg32785,arg32786,arg32787) : f.call(null,arg32770,arg32771,arg32772,arg32773,arg32774,arg32775,arg32776,arg32777,arg32778,arg32779,arg32780,arg32781,arg32782,arg32783,arg32784,arg32785,arg32786,arg32787));

break;
case (19):
var arg32788 = (function (){var G__33427 = ctx;
var G__33428 = bindings;
var G__33429 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33427,G__33428,G__33429) : sci.impl.evaluator.eval.call(null,G__33427,G__33428,G__33429));
})();
var args__$1 = cljs.core.rest(args);
var arg32789 = (function (){var G__33430 = ctx;
var G__33431 = bindings;
var G__33432 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33430,G__33431,G__33432) : sci.impl.evaluator.eval.call(null,G__33430,G__33431,G__33432));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg32790 = (function (){var G__33433 = ctx;
var G__33434 = bindings;
var G__33435 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33433,G__33434,G__33435) : sci.impl.evaluator.eval.call(null,G__33433,G__33434,G__33435));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg32791 = (function (){var G__33443 = ctx;
var G__33444 = bindings;
var G__33445 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33443,G__33444,G__33445) : sci.impl.evaluator.eval.call(null,G__33443,G__33444,G__33445));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg32792 = (function (){var G__33446 = ctx;
var G__33447 = bindings;
var G__33448 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33446,G__33447,G__33448) : sci.impl.evaluator.eval.call(null,G__33446,G__33447,G__33448));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg32793 = (function (){var G__33449 = ctx;
var G__33450 = bindings;
var G__33451 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33449,G__33450,G__33451) : sci.impl.evaluator.eval.call(null,G__33449,G__33450,G__33451));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg32794 = (function (){var G__33456 = ctx;
var G__33457 = bindings;
var G__33458 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33456,G__33457,G__33458) : sci.impl.evaluator.eval.call(null,G__33456,G__33457,G__33458));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg32795 = (function (){var G__33459 = ctx;
var G__33460 = bindings;
var G__33461 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33459,G__33460,G__33461) : sci.impl.evaluator.eval.call(null,G__33459,G__33460,G__33461));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg32796 = (function (){var G__33465 = ctx;
var G__33466 = bindings;
var G__33467 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33465,G__33466,G__33467) : sci.impl.evaluator.eval.call(null,G__33465,G__33466,G__33467));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg32797 = (function (){var G__33468 = ctx;
var G__33469 = bindings;
var G__33470 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33468,G__33469,G__33470) : sci.impl.evaluator.eval.call(null,G__33468,G__33469,G__33470));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg32798 = (function (){var G__33471 = ctx;
var G__33472 = bindings;
var G__33473 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33471,G__33472,G__33473) : sci.impl.evaluator.eval.call(null,G__33471,G__33472,G__33473));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg32799 = (function (){var G__33474 = ctx;
var G__33475 = bindings;
var G__33476 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33474,G__33475,G__33476) : sci.impl.evaluator.eval.call(null,G__33474,G__33475,G__33476));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg32800 = (function (){var G__33477 = ctx;
var G__33478 = bindings;
var G__33479 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33477,G__33478,G__33479) : sci.impl.evaluator.eval.call(null,G__33477,G__33478,G__33479));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg32801 = (function (){var G__33480 = ctx;
var G__33481 = bindings;
var G__33482 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33480,G__33481,G__33482) : sci.impl.evaluator.eval.call(null,G__33480,G__33481,G__33482));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg32802 = (function (){var G__33483 = ctx;
var G__33484 = bindings;
var G__33485 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33483,G__33484,G__33485) : sci.impl.evaluator.eval.call(null,G__33483,G__33484,G__33485));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg32803 = (function (){var G__33486 = ctx;
var G__33487 = bindings;
var G__33488 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33486,G__33487,G__33488) : sci.impl.evaluator.eval.call(null,G__33486,G__33487,G__33488));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg32804 = (function (){var G__33489 = ctx;
var G__33490 = bindings;
var G__33491 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33489,G__33490,G__33491) : sci.impl.evaluator.eval.call(null,G__33489,G__33490,G__33491));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg32805 = (function (){var G__33492 = ctx;
var G__33493 = bindings;
var G__33494 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33492,G__33493,G__33494) : sci.impl.evaluator.eval.call(null,G__33492,G__33493,G__33494));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg32806 = (function (){var G__33495 = ctx;
var G__33496 = bindings;
var G__33497 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__33495,G__33496,G__33497) : sci.impl.evaluator.eval.call(null,G__33495,G__33496,G__33497));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg32788,arg32789,arg32790,arg32791,arg32792,arg32793,arg32794,arg32795,arg32796,arg32797,arg32798,arg32799,arg32800,arg32801,arg32802,arg32803,arg32804,arg32805,arg32806) : f.call(null,arg32788,arg32789,arg32790,arg32791,arg32792,arg32793,arg32794,arg32795,arg32796,arg32797,arg32798,arg32799,arg32800,arg32801,arg32802,arg32803,arg32804,arg32805,arg32806));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__32282_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__32282_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__32282_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e33501){if((e33501 instanceof Error)){
var e = e33501;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e33501;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
