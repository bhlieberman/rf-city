goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32703 = arguments.length;
var i__5770__auto___32704 = (0);
while(true){
if((i__5770__auto___32704 < len__5769__auto___32703)){
args__5775__auto__.push((arguments[i__5770__auto___32704]));

var G__32705 = (i__5770__auto___32704 + (1));
i__5770__auto___32704 = G__32705;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__32697){
var map__32698 = p__32697;
var map__32698__$1 = cljs.core.__destructure_map(map__32698);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32698__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5802__auto__){
var vec__32699 = temp__5802__auto__;
var seq__32700 = cljs.core.seq(vec__32699);
var first__32701 = cljs.core.first(seq__32700);
var seq__32700__$1 = cljs.core.next(seq__32700);
var first = first__32701;
var rest = seq__32700__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq32686){
var G__32687 = cljs.core.first(seq32686);
var seq32686__$1 = cljs.core.next(seq32686);
var G__32688 = cljs.core.first(seq32686__$1);
var seq32686__$2 = cljs.core.next(seq32686__$1);
var G__32689 = cljs.core.first(seq32686__$2);
var seq32686__$3 = cljs.core.next(seq32686__$2);
var G__32690 = cljs.core.first(seq32686__$3);
var seq32686__$4 = cljs.core.next(seq32686__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32687,G__32688,G__32689,G__32690,seq32686__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5045__auto__ = (function (){var G__32702 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__32702) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__32702));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
