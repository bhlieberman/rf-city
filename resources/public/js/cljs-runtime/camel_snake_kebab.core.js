goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32955 = arguments.length;
var i__5770__auto___32956 = (0);
while(true){
if((i__5770__auto___32956 < len__5769__auto___32955)){
args__5775__auto__.push((arguments[i__5770__auto___32956]));

var G__32957 = (i__5770__auto___32956 + (1));
i__5770__auto___32956 = G__32957;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq32894){
var G__32895 = cljs.core.first(seq32894);
var seq32894__$1 = cljs.core.next(seq32894);
var G__32896 = cljs.core.first(seq32894__$1);
var seq32894__$2 = cljs.core.next(seq32894__$1);
var G__32897 = cljs.core.first(seq32894__$2);
var seq32894__$3 = cljs.core.next(seq32894__$2);
var G__32898 = cljs.core.first(seq32894__$3);
var seq32894__$4 = cljs.core.next(seq32894__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32895,G__32896,G__32897,G__32898,seq32894__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32958 = arguments.length;
var i__5770__auto___32959 = (0);
while(true){
if((i__5770__auto___32959 < len__5769__auto___32958)){
args__5775__auto__.push((arguments[i__5770__auto___32959]));

var G__32960 = (i__5770__auto___32959 + (1));
i__5770__auto___32959 = G__32960;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq32899){
var G__32900 = cljs.core.first(seq32899);
var seq32899__$1 = cljs.core.next(seq32899);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32900,seq32899__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32961 = arguments.length;
var i__5770__auto___32962 = (0);
while(true){
if((i__5770__auto___32962 < len__5769__auto___32961)){
args__5775__auto__.push((arguments[i__5770__auto___32962]));

var G__32963 = (i__5770__auto___32962 + (1));
i__5770__auto___32962 = G__32963;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq32901){
var G__32902 = cljs.core.first(seq32901);
var seq32901__$1 = cljs.core.next(seq32901);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32902,seq32901__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32964 = arguments.length;
var i__5770__auto___32965 = (0);
while(true){
if((i__5770__auto___32965 < len__5769__auto___32964)){
args__5775__auto__.push((arguments[i__5770__auto___32965]));

var G__32966 = (i__5770__auto___32965 + (1));
i__5770__auto___32965 = G__32966;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq32903){
var G__32904 = cljs.core.first(seq32903);
var seq32903__$1 = cljs.core.next(seq32903);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32904,seq32903__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32967 = arguments.length;
var i__5770__auto___32968 = (0);
while(true){
if((i__5770__auto___32968 < len__5769__auto___32967)){
args__5775__auto__.push((arguments[i__5770__auto___32968]));

var G__32969 = (i__5770__auto___32968 + (1));
i__5770__auto___32968 = G__32969;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq32905){
var G__32906 = cljs.core.first(seq32905);
var seq32905__$1 = cljs.core.next(seq32905);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32906,seq32905__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32970 = arguments.length;
var i__5770__auto___32971 = (0);
while(true){
if((i__5770__auto___32971 < len__5769__auto___32970)){
args__5775__auto__.push((arguments[i__5770__auto___32971]));

var G__32972 = (i__5770__auto___32971 + (1));
i__5770__auto___32971 = G__32972;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq32907){
var G__32908 = cljs.core.first(seq32907);
var seq32907__$1 = cljs.core.next(seq32907);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32908,seq32907__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32977 = arguments.length;
var i__5770__auto___32978 = (0);
while(true){
if((i__5770__auto___32978 < len__5769__auto___32977)){
args__5775__auto__.push((arguments[i__5770__auto___32978]));

var G__32979 = (i__5770__auto___32978 + (1));
i__5770__auto___32978 = G__32979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq32909){
var G__32910 = cljs.core.first(seq32909);
var seq32909__$1 = cljs.core.next(seq32909);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32910,seq32909__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32982 = arguments.length;
var i__5770__auto___32983 = (0);
while(true){
if((i__5770__auto___32983 < len__5769__auto___32982)){
args__5775__auto__.push((arguments[i__5770__auto___32983]));

var G__32984 = (i__5770__auto___32983 + (1));
i__5770__auto___32983 = G__32984;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq32911){
var G__32912 = cljs.core.first(seq32911);
var seq32911__$1 = cljs.core.next(seq32911);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32912,seq32911__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32986 = arguments.length;
var i__5770__auto___32987 = (0);
while(true){
if((i__5770__auto___32987 < len__5769__auto___32986)){
args__5775__auto__.push((arguments[i__5770__auto___32987]));

var G__32988 = (i__5770__auto___32987 + (1));
i__5770__auto___32987 = G__32988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq32913){
var G__32914 = cljs.core.first(seq32913);
var seq32913__$1 = cljs.core.next(seq32913);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32914,seq32913__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32992 = arguments.length;
var i__5770__auto___32993 = (0);
while(true){
if((i__5770__auto___32993 < len__5769__auto___32992)){
args__5775__auto__.push((arguments[i__5770__auto___32993]));

var G__32994 = (i__5770__auto___32993 + (1));
i__5770__auto___32993 = G__32994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq32915){
var G__32916 = cljs.core.first(seq32915);
var seq32915__$1 = cljs.core.next(seq32915);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32916,seq32915__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32996 = arguments.length;
var i__5770__auto___32997 = (0);
while(true){
if((i__5770__auto___32997 < len__5769__auto___32996)){
args__5775__auto__.push((arguments[i__5770__auto___32997]));

var G__32998 = (i__5770__auto___32997 + (1));
i__5770__auto___32997 = G__32998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq32917){
var G__32918 = cljs.core.first(seq32917);
var seq32917__$1 = cljs.core.next(seq32917);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32918,seq32917__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33003 = arguments.length;
var i__5770__auto___33004 = (0);
while(true){
if((i__5770__auto___33004 < len__5769__auto___33003)){
args__5775__auto__.push((arguments[i__5770__auto___33004]));

var G__33005 = (i__5770__auto___33004 + (1));
i__5770__auto___33004 = G__33005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq32919){
var G__32920 = cljs.core.first(seq32919);
var seq32919__$1 = cljs.core.next(seq32919);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32920,seq32919__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33006 = arguments.length;
var i__5770__auto___33007 = (0);
while(true){
if((i__5770__auto___33007 < len__5769__auto___33006)){
args__5775__auto__.push((arguments[i__5770__auto___33007]));

var G__33011 = (i__5770__auto___33007 + (1));
i__5770__auto___33007 = G__33011;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq32921){
var G__32922 = cljs.core.first(seq32921);
var seq32921__$1 = cljs.core.next(seq32921);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32922,seq32921__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33013 = arguments.length;
var i__5770__auto___33014 = (0);
while(true){
if((i__5770__auto___33014 < len__5769__auto___33013)){
args__5775__auto__.push((arguments[i__5770__auto___33014]));

var G__33015 = (i__5770__auto___33014 + (1));
i__5770__auto___33014 = G__33015;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq32923){
var G__32924 = cljs.core.first(seq32923);
var seq32923__$1 = cljs.core.next(seq32923);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32924,seq32923__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33020 = arguments.length;
var i__5770__auto___33021 = (0);
while(true){
if((i__5770__auto___33021 < len__5769__auto___33020)){
args__5775__auto__.push((arguments[i__5770__auto___33021]));

var G__33022 = (i__5770__auto___33021 + (1));
i__5770__auto___33021 = G__33022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq32925){
var G__32926 = cljs.core.first(seq32925);
var seq32925__$1 = cljs.core.next(seq32925);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32926,seq32925__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33030 = arguments.length;
var i__5770__auto___33032 = (0);
while(true){
if((i__5770__auto___33032 < len__5769__auto___33030)){
args__5775__auto__.push((arguments[i__5770__auto___33032]));

var G__33033 = (i__5770__auto___33032 + (1));
i__5770__auto___33032 = G__33033;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq32927){
var G__32928 = cljs.core.first(seq32927);
var seq32927__$1 = cljs.core.next(seq32927);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32928,seq32927__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33043 = arguments.length;
var i__5770__auto___33044 = (0);
while(true){
if((i__5770__auto___33044 < len__5769__auto___33043)){
args__5775__auto__.push((arguments[i__5770__auto___33044]));

var G__33045 = (i__5770__auto___33044 + (1));
i__5770__auto___33044 = G__33045;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq32929){
var G__32930 = cljs.core.first(seq32929);
var seq32929__$1 = cljs.core.next(seq32929);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32930,seq32929__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33053 = arguments.length;
var i__5770__auto___33055 = (0);
while(true){
if((i__5770__auto___33055 < len__5769__auto___33053)){
args__5775__auto__.push((arguments[i__5770__auto___33055]));

var G__33056 = (i__5770__auto___33055 + (1));
i__5770__auto___33055 = G__33056;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq32931){
var G__32932 = cljs.core.first(seq32931);
var seq32931__$1 = cljs.core.next(seq32931);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32932,seq32931__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33068 = arguments.length;
var i__5770__auto___33069 = (0);
while(true){
if((i__5770__auto___33069 < len__5769__auto___33068)){
args__5775__auto__.push((arguments[i__5770__auto___33069]));

var G__33070 = (i__5770__auto___33069 + (1));
i__5770__auto___33069 = G__33070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq32933){
var G__32934 = cljs.core.first(seq32933);
var seq32933__$1 = cljs.core.next(seq32933);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32934,seq32933__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33072 = arguments.length;
var i__5770__auto___33073 = (0);
while(true){
if((i__5770__auto___33073 < len__5769__auto___33072)){
args__5775__auto__.push((arguments[i__5770__auto___33073]));

var G__33074 = (i__5770__auto___33073 + (1));
i__5770__auto___33073 = G__33074;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq32935){
var G__32936 = cljs.core.first(seq32935);
var seq32935__$1 = cljs.core.next(seq32935);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32936,seq32935__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33079 = arguments.length;
var i__5770__auto___33080 = (0);
while(true){
if((i__5770__auto___33080 < len__5769__auto___33079)){
args__5775__auto__.push((arguments[i__5770__auto___33080]));

var G__33081 = (i__5770__auto___33080 + (1));
i__5770__auto___33080 = G__33081;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq32937){
var G__32938 = cljs.core.first(seq32937);
var seq32937__$1 = cljs.core.next(seq32937);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32938,seq32937__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33082 = arguments.length;
var i__5770__auto___33083 = (0);
while(true){
if((i__5770__auto___33083 < len__5769__auto___33082)){
args__5775__auto__.push((arguments[i__5770__auto___33083]));

var G__33084 = (i__5770__auto___33083 + (1));
i__5770__auto___33083 = G__33084;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq32939){
var G__32940 = cljs.core.first(seq32939);
var seq32939__$1 = cljs.core.next(seq32939);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32940,seq32939__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33085 = arguments.length;
var i__5770__auto___33086 = (0);
while(true){
if((i__5770__auto___33086 < len__5769__auto___33085)){
args__5775__auto__.push((arguments[i__5770__auto___33086]));

var G__33087 = (i__5770__auto___33086 + (1));
i__5770__auto___33086 = G__33087;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq32941){
var G__32942 = cljs.core.first(seq32941);
var seq32941__$1 = cljs.core.next(seq32941);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32942,seq32941__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33088 = arguments.length;
var i__5770__auto___33089 = (0);
while(true){
if((i__5770__auto___33089 < len__5769__auto___33088)){
args__5775__auto__.push((arguments[i__5770__auto___33089]));

var G__33090 = (i__5770__auto___33089 + (1));
i__5770__auto___33089 = G__33090;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq32943){
var G__32944 = cljs.core.first(seq32943);
var seq32943__$1 = cljs.core.next(seq32943);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32944,seq32943__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33091 = arguments.length;
var i__5770__auto___33092 = (0);
while(true){
if((i__5770__auto___33092 < len__5769__auto___33091)){
args__5775__auto__.push((arguments[i__5770__auto___33092]));

var G__33093 = (i__5770__auto___33092 + (1));
i__5770__auto___33092 = G__33093;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq32945){
var G__32946 = cljs.core.first(seq32945);
var seq32945__$1 = cljs.core.next(seq32945);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32946,seq32945__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33095 = arguments.length;
var i__5770__auto___33096 = (0);
while(true){
if((i__5770__auto___33096 < len__5769__auto___33095)){
args__5775__auto__.push((arguments[i__5770__auto___33096]));

var G__33097 = (i__5770__auto___33096 + (1));
i__5770__auto___33096 = G__33097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__32859__auto__,rest__32860__auto__){
var convert_case__32861__auto__ = (function (p1__32858__32862__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__32858__32862__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32860__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__32859__auto__,convert_case__32861__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq32947){
var G__32948 = cljs.core.first(seq32947);
var seq32947__$1 = cljs.core.next(seq32947);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32948,seq32947__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33098 = arguments.length;
var i__5770__auto___33099 = (0);
while(true){
if((i__5770__auto___33099 < len__5769__auto___33098)){
args__5775__auto__.push((arguments[i__5770__auto___33099]));

var G__33100 = (i__5770__auto___33099 + (1));
i__5770__auto___33099 = G__33100;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq32949){
var G__32950 = cljs.core.first(seq32949);
var seq32949__$1 = cljs.core.next(seq32949);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32950,seq32949__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33101 = arguments.length;
var i__5770__auto___33103 = (0);
while(true){
if((i__5770__auto___33103 < len__5769__auto___33101)){
args__5775__auto__.push((arguments[i__5770__auto___33103]));

var G__33105 = (i__5770__auto___33103 + (1));
i__5770__auto___33103 = G__33105;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq32951){
var G__32952 = cljs.core.first(seq32951);
var seq32951__$1 = cljs.core.next(seq32951);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32952,seq32951__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33106 = arguments.length;
var i__5770__auto___33107 = (0);
while(true){
if((i__5770__auto___33107 < len__5769__auto___33106)){
args__5775__auto__.push((arguments[i__5770__auto___33107]));

var G__33108 = (i__5770__auto___33107 + (1));
i__5770__auto___33107 = G__33108;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__32864__auto__,rest__32865__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__32864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__32865__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq32953){
var G__32954 = cljs.core.first(seq32953);
var seq32953__$1 = cljs.core.next(seq32953);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32954,seq32953__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
