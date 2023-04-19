goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__31665 = arguments.length;
switch (G__31665) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__31673 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31674 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31674);

try{var G__31675 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__31675);

return G__31675;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31673);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__31694 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31695 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31695);

try{var G__31696 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__31696);

return G__31696;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31694);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__31697 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31698 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31698);

try{var G__31700 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__31700);

return G__31700;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31697);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__31705 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31706 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31706);

try{var G__31708 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__31708);

return G__31708;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31705);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__31727 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__31728 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31728);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31727);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32028 = arguments.length;
var i__5770__auto___32029 = (0);
while(true){
if((i__5770__auto___32029 < len__5769__auto___32028)){
args__5775__auto__.push((arguments[i__5770__auto___32029]));

var G__32030 = (i__5770__auto___32029 + (1));
i__5770__auto___32029 = G__32030;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__31736 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__31737 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31738 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31739 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31740 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31741 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31742 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__31743 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__31744 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31745 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31746 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31747 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31748 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31749 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31743);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31744);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31745);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31746);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31747);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31748);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31749);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31742);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31741);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31740);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31739);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31738);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31737);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31736);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq31729){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31729));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__31777 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__31778 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31778);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31777);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32032 = arguments.length;
var i__5770__auto___32033 = (0);
while(true){
if((i__5770__auto___32033 < len__5769__auto___32032)){
args__5775__auto__.push((arguments[i__5770__auto___32033]));

var G__32034 = (i__5770__auto___32033 + (1));
i__5770__auto___32033 = G__32034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__31790 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31791 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31792 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31793 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31794 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31795 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__31796 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31797 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31798 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31799 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31800 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31801 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31796);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31797);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31798);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31799);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31800);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31801);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31795);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31794);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31793);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31792);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31791);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31790);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq31782){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31782));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32038 = arguments.length;
var i__5770__auto___32039 = (0);
while(true){
if((i__5770__auto___32039 < len__5769__auto___32038)){
args__5775__auto__.push((arguments[i__5770__auto___32039]));

var G__32040 = (i__5770__auto___32039 + (1));
i__5770__auto___32039 = G__32040;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__31812 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__31813 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31814 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31815 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31816 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31817 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__31819 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__31820 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31821 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31822 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31823 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31824 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31825 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31819);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31820);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31821);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31822);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31823);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31824);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31825);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31818);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31817);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31816);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31815);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31814);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31813);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31812);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq31811){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31811));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32041 = arguments.length;
var i__5770__auto___32042 = (0);
while(true){
if((i__5770__auto___32042 < len__5769__auto___32041)){
args__5775__auto__.push((arguments[i__5770__auto___32042]));

var G__32043 = (i__5770__auto___32042 + (1));
i__5770__auto___32042 = G__32043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__31827 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31828 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31829 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31830 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31831 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__31833 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31834 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31835 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31836 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31837 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31838 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31833);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31834);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31835);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31836);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31837);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31838);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31832);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31831);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31830);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31829);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31828);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31827);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq31826){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31826));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32048 = arguments.length;
var i__5770__auto___32049 = (0);
while(true){
if((i__5770__auto___32049 < len__5769__auto___32048)){
args__5775__auto__.push((arguments[i__5770__auto___32049]));

var G__32051 = (i__5770__auto___32049 + (1));
i__5770__auto___32049 = G__32051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__31850 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__31851 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31852 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31853 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31854 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__31856 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__31857 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31858 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__31859 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31860 = null;
var _STAR_print_newline_STAR__temp_val__31861 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31856);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31857);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31858);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31859);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31860);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31861);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31855);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31854);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31853);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31852);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31851);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31850);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq31849){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31849));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32055 = arguments.length;
var i__5770__auto___32056 = (0);
while(true){
if((i__5770__auto___32056 < len__5769__auto___32055)){
args__5775__auto__.push((arguments[i__5770__auto___32056]));

var G__32057 = (i__5770__auto___32056 + (1));
i__5770__auto___32056 = G__32057;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__31863 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31864 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31865 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31866 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31867 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31868 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__31869 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31870 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31871 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31872 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31873 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31874 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31869);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31870);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31871);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31872);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31873);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31874);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31868);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31867);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31866);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31865);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31864);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31863);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq31862){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31862));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32062 = arguments.length;
var i__5770__auto___32063 = (0);
while(true){
if((i__5770__auto___32063 < len__5769__auto___32062)){
args__5775__auto__.push((arguments[i__5770__auto___32063]));

var G__32064 = (i__5770__auto___32063 + (1));
i__5770__auto___32063 = G__32064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__31879 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__31880 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31881 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31882 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31883 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31884 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__31886 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__31887 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31888 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31889 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31890 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31891 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31892 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31886);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31887);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31888);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31889);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31890);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31891);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31892);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31885);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31884);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31883);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31882);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31881);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31880);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31879);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq31876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31876));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32071 = arguments.length;
var i__5770__auto___32072 = (0);
while(true){
if((i__5770__auto___32072 < len__5769__auto___32071)){
args__5775__auto__.push((arguments[i__5770__auto___32072]));

var G__32073 = (i__5770__auto___32072 + (1));
i__5770__auto___32072 = G__32073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__31906__auto__","s__31906__auto__",-1690892827,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__31907__auto__","x__31907__auto__",-2107058972,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__31906__auto__","s__31906__auto__",-1690892827,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__31907__auto__","x__31907__auto__",-2107058972,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__31906__auto__","s__31906__auto__",-1690892827,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq31909){
var G__31910 = cljs.core.first(seq31909);
var seq31909__$1 = cljs.core.next(seq31909);
var G__31911 = cljs.core.first(seq31909__$1);
var seq31909__$2 = cljs.core.next(seq31909__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31910,G__31911,seq31909__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
