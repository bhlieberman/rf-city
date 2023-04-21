goog.provide('reagent_mui.util');
goog.scope(function(){
  reagent_mui.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$mui$material$node$SvgIcon$index=shadow.js.require("module$node_modules$$mui$material$node$SvgIcon$index", {});
reagent_mui.util.ref_key_QMARK_ = (function reagent_mui$util$ref_key_QMARK_(k){
var and__5043__auto__ = typeof k === 'string';
if(and__5043__auto__){
var or__5045__auto__ = k.endsWith("ref");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return k.endsWith("Ref");
}
} else {
return and__5043__auto__;
}
});
reagent_mui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_mui.util.numeric_string_QMARK_ = (function reagent_mui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(/[0-9]+/,s) == null)))));
});
reagent_mui.util.pascal_case_QMARK_ = (function reagent_mui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first(s))));
});
reagent_mui.util.keyword_safe_QMARK_ = (function reagent_mui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches(/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_mui.util.key__GT_str = (function reagent_mui$util$key__GT_str(k){
var n = cljs.core.name(k);
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"aria-")){
return n;
} else {
if(reagent_mui.util.pascal_case_QMARK_(n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString(k);

}
}
}
}
});
reagent_mui.util.convert_map_keys = (function reagent_mui$util$convert_map_keys(m,f){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33094 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33094) : f.call(null,G__33094));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),m);
});
reagent_mui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_mui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js(reagent_mui.util.convert_map_keys(obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_mui.util.key__GT_str(k);
} else {
return k;
}
})));
});
reagent_mui.util.js_key__GT_clj = (function reagent_mui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(reagent_mui.util.numeric_string_QMARK_(k)){
return parseInt(k);
} else {
if(reagent_mui.util.keyword_safe_QMARK_(k)){
if(reagent_mui.util.pascal_case_QMARK_(k)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword(k);
}
} else {
return k;

}
}
}
}
});
reagent_mui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_(x)){
return (new cljs.core.MapEntry(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.key(x)),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.val(x)),null));
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33102_SHARP_,p2__33104_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__33102_SHARP_,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(p2__33104_SHARP_));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(x))){
return x;
} else {
if((cljs.core.type(x) === Object)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,reagent_mui.util.js_key__GT_clj(k),(cljs.core.truth_(reagent_mui.util.ref_key_QMARK_(k))?reagent_mui.util.goog$module$goog$object.get(x,k):reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(reagent_mui.util.goog$module$goog$object.get(x,k))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x)));
} else {
return x;

}
}
}
}
}
}
});
return convert(obj);
});
reagent_mui.util.wrap_clj_function = (function reagent_mui$util$wrap_clj_function(f){
return (function() { 
var G__33127__delegate = function (args){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__33127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33128__i = 0, G__33128__a = new Array(arguments.length -  0);
while (G__33128__i < G__33128__a.length) {G__33128__a[G__33128__i] = arguments[G__33128__i + 0]; ++G__33128__i;}
  args = new cljs.core.IndexedSeq(G__33128__a,0,null);
} 
return G__33127__delegate.call(this,args);};
G__33127.cljs$lang$maxFixedArity = 0;
G__33127.cljs$lang$applyTo = (function (arglist__33129){
var args = cljs.core.seq(arglist__33129);
return G__33127__delegate(args);
});
G__33127.cljs$core$IFn$_invoke$arity$variadic = G__33127__delegate;
return G__33127;
})()
;
});
reagent_mui.util.wrap_js_function = (function reagent_mui$util$wrap_js_function(f){
return (function() { 
var G__33130__delegate = function (args){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__33130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33131__i = 0, G__33131__a = new Array(arguments.length -  0);
while (G__33131__i < G__33131__a.length) {G__33131__a[G__33131__i] = arguments[G__33131__i + 0]; ++G__33131__i;}
  args = new cljs.core.IndexedSeq(G__33131__a,0,null);
} 
return G__33130__delegate.call(this,args);};
G__33130.cljs$lang$maxFixedArity = 0;
G__33130.cljs$lang$applyTo = (function (arglist__33132){
var args = cljs.core.seq(arglist__33132);
return G__33130__delegate(args);
});
G__33130.cljs$core$IFn$_invoke$arity$variadic = G__33130__delegate;
return G__33130;
})()
;
});
reagent_mui.util.wrap_all_clj_functions = (function reagent_mui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_mui.util.wrap_clj_function(x);
} else {
return x;
}
}),m);
});
reagent_mui.util.wrap_all_js_functions = (function reagent_mui$util$wrap_all_js_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_mui.util.wrap_js_function(x);
} else {
return x;
}
}),m);
});
reagent_mui.util.reactify_component = (function reagent_mui$util$reactify_component(component){
var reactified = module$node_modules$react$index.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent_mui.util.js__GT_clj_SINGLEQUOTE_(props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name(component));

return reactified;
});
reagent_mui.util.wrap_styles = (function reagent_mui$util$wrap_styles(styles){
if(cljs.core.fn_QMARK_(styles)){
return (function (theme){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions((function (){var G__33109 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__33109) : styles.call(null,G__33109));
})()));
});
} else {
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions(styles));
}
});
reagent_mui.util.apply_hoc = (function reagent_mui$util$apply_hoc(hoc,component){
return reagent.core.adapt_react_class((function (){var G__33110 = reagent_mui.util.reactify_component(component);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__33110) : hoc.call(null,G__33110));
})());
});
reagent_mui.util.get_anycase = (function reagent_mui$util$get_anycase(var_args){
var G__33112 = arguments.length;
switch (G__33112) {
case 2:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3(m,k,null);
}));

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5802__auto__ = (function (){var or__5045__auto__ = cljs.core.find(m,camel_snake_kebab.core.__GT_kebab_case_keyword(k));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.find(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var entry = temp__5802__auto__;
return cljs.core.val(entry);
} else {
return default$;
}
}));

(reagent_mui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_mui.util.assoc_anycase = (function reagent_mui$util$assoc_anycase(var_args){
var G__33118 = arguments.length;
switch (G__33118) {
case 3:
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___33135 = arguments.length;
var i__5770__auto___33136 = (0);
while(true){
if((i__5770__auto___33136 < len__5769__auto___33135)){
args_arr__5794__auto__.push((arguments[i__5770__auto___33136]));

var G__33137 = (i__5770__auto___33136 + (1));
i__5770__auto___33136 = G__33137;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k)),camel_snake_kebab.core.__GT_kebab_case_keyword(k),v);
}));

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__33138 = ret;
var G__33139 = cljs.core.first(kvs);
var G__33140 = cljs.core.second(kvs);
var G__33141 = cljs.core.nnext(kvs);
m = G__33138;
k = G__33139;
v = G__33140;
kvs = G__33141;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_mui.util.assoc_anycase.cljs$lang$applyTo = (function (seq33114){
var G__33115 = cljs.core.first(seq33114);
var seq33114__$1 = cljs.core.next(seq33114);
var G__33116 = cljs.core.first(seq33114__$1);
var seq33114__$2 = cljs.core.next(seq33114__$1);
var G__33117 = cljs.core.first(seq33114__$2);
var seq33114__$3 = cljs.core.next(seq33114__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33115,G__33116,G__33117,seq33114__$3);
}));

(reagent_mui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_mui.util.remove_undefined_vals = (function reagent_mui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
});
reagent_mui.util.set_ref = (function reagent_mui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_(ref)){
(ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(value) : ref.call(null,value));
} else {
if(cljs.core.truth_(ref)){
(ref.current = value);
} else {
}
}

return undefined;
});
reagent_mui.util.swap_ref = (function reagent_mui$util$swap_ref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33146 = arguments.length;
var i__5770__auto___33147 = (0);
while(true){
if((i__5770__auto___33147 < len__5769__auto___33146)){
args__5775__auto__.push((arguments[i__5770__auto___33147]));

var G__33148 = (i__5770__auto___33147 + (1));
i__5770__auto___33147 = G__33148;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
return (ref.current = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ref.current,args));
}));

(reagent_mui.util.swap_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_mui.util.swap_ref.cljs$lang$applyTo = (function (seq33119){
var G__33120 = cljs.core.first(seq33119);
var seq33119__$1 = cljs.core.next(seq33119);
var G__33121 = cljs.core.first(seq33119__$1);
var seq33119__$2 = cljs.core.next(seq33119__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33120,G__33121,seq33119__$2);
}));

reagent_mui.util.use_fork_ref = (function reagent_mui$util$use_fork_ref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33149 = arguments.length;
var i__5770__auto___33150 = (0);
while(true){
if((i__5770__auto___33150 < len__5769__auto___33149)){
args__5775__auto__.push((arguments[i__5770__auto___33150]));

var G__33151 = (i__5770__auto___33150 + (1));
i__5770__auto___33150 = G__33151;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return module$node_modules$react$index.useMemo((function (){
if(cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__33123 = cljs.core.seq(refs);
var chunk__33124 = null;
var count__33125 = (0);
var i__33126 = (0);
while(true){
if((i__33126 < count__33125)){
var ref = chunk__33124.cljs$core$IIndexed$_nth$arity$2(null,i__33126);
reagent_mui.util.set_ref(ref,value);


var G__33152 = seq__33123;
var G__33153 = chunk__33124;
var G__33154 = count__33125;
var G__33155 = (i__33126 + (1));
seq__33123 = G__33152;
chunk__33124 = G__33153;
count__33125 = G__33154;
i__33126 = G__33155;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33123);
if(temp__5804__auto__){
var seq__33123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33123__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33123__$1);
var G__33156 = cljs.core.chunk_rest(seq__33123__$1);
var G__33157 = c__5568__auto__;
var G__33158 = cljs.core.count(c__5568__auto__);
var G__33159 = (0);
seq__33123 = G__33156;
chunk__33124 = G__33157;
count__33125 = G__33158;
i__33126 = G__33159;
continue;
} else {
var ref = cljs.core.first(seq__33123__$1);
reagent_mui.util.set_ref(ref,value);


var G__33160 = cljs.core.next(seq__33123__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__33123 = G__33160;
chunk__33124 = G__33161;
count__33125 = G__33162;
i__33126 = G__33163;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,refs));
}));

(reagent_mui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_mui.util.use_fork_ref.cljs$lang$applyTo = (function (seq33122){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33122));
}));

reagent_mui.util.use_callback = (function reagent_mui$util$use_callback(callback,props){
return module$node_modules$react$index.useCallback(callback,props);
});
reagent_mui.util.use_effect = (function reagent_mui$util$use_effect(effect,props){
return module$node_modules$react$index.useEffect(effect,props);
});
reagent_mui.util.use_layout_effect = (function reagent_mui$util$use_layout_effect(effect){
return module$node_modules$react$index.useLayoutEffect(effect);
});
reagent_mui.util.use_ref = (function reagent_mui$util$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
reagent_mui.util.use_state = (function reagent_mui$util$use_state(initial_state){
return module$node_modules$react$index.useState(initial_state);
});

//# sourceMappingURL=reagent_mui.util.js.map
