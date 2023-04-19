goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__31471){
var vec__31475 = p__31471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31475,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (k instanceof cljs.core.Symbol);
if(and__5043__auto__){
var and__5043__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__31491){
var map__31494 = p__31491;
var map__31494__$1 = cljs.core.__destructure_map(map__31494);
var _parsed_libspec = map__31494__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__31521 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31521,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___31875 = (function (){var G__31525 = the_loaded_ns;
var G__31525__$1 = (((G__31525 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__31525));
var G__31525__$2 = (((G__31525__$1 == null))?null:cljs.core.meta(G__31525__$1));
if((G__31525__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__31525__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___31875)){
var on_loaded_31877 = temp__5804__auto___31875;
var G__31532_31878 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_31877.cljs$core$IFn$_invoke$arity$1 ? on_loaded_31877.cljs$core$IFn$_invoke$arity$1(G__31532_31878) : on_loaded_31877.call(null,G__31532_31878));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var map__31555 = opts;
var map__31555__$1 = cljs.core.__destructure_map(map__31555);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31555__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31555__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = reload_all;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return uberscript;
}
}
}
})();
var temp__5802__auto___31893 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5802__auto___31893)){
var the_loaded_ns_31894 = temp__5802__auto___31893;
var loading_31895 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5043__auto__ = loading_31895;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_31895.indexOf(lib))));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_31895,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_31894,lib,opts));
}
} else {
var temp__5802__auto___31897__$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___31897__$1)){
var load_fn_31898 = temp__5802__auto___31897__$1;
var temp__5802__auto___31899__$2 = (function (){var G__31566 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_31898.cljs$core$IFn$_invoke$arity$1 ? load_fn_31898.cljs$core$IFn$_invoke$arity$1(G__31566) : load_fn_31898.call(null,G__31566));
})();
if(cljs.core.truth_(temp__5802__auto___31899__$2)){
var map__31567_31901 = temp__5802__auto___31899__$2;
var map__31567_31902__$1 = cljs.core.__destructure_map(map__31567_31901);
var file_31903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567_31902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_31904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567_31902__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_31905__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_31903]));

try{var fexpr__31577_31908 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__31577_31908.cljs$core$IFn$_invoke$arity$2 ? fexpr__31577_31908.cljs$core$IFn$_invoke$arity$2(ctx_31905__$1,source_31904) : fexpr__31577_31908.call(null,ctx_31905__$1,source_31904));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e31573){if((e31573 instanceof Error)){
var e_31912 = e31573;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_31912;
} else {
throw e31573;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5045__auto___31917 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5045__auto___31917)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31919 = arguments.length;
var i__5770__auto___31920 = (0);
while(true){
if((i__5770__auto___31920 < len__5769__auto___31919)){
args__5775__auto__.push((arguments[i__5770__auto___31920]));

var G__31921 = (i__5770__auto___31920 + (1));
i__5770__auto___31920 = G__31921;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq31581){
var G__31582 = cljs.core.first(seq31581);
var seq31581__$1 = cljs.core.next(seq31581);
var G__31583 = cljs.core.first(seq31581__$1);
var seq31581__$2 = cljs.core.next(seq31581__$1);
var G__31584 = cljs.core.first(seq31581__$2);
var seq31581__$3 = cljs.core.next(seq31581__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31582,G__31583,G__31584,seq31581__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_31927 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_31928 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_31927,flags));
if(unsupported_31928){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_31928)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__31617 = cljs.core.seq(args_STAR___$1);
var chunk__31619 = null;
var count__31620 = (0);
var i__31621 = (0);
while(true){
if((i__31621 < count__31620)){
var arg = chunk__31619.cljs$core$IIndexed$_nth$arity$2(null,i__31621);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__31650_31931 = arg;
var seq__31651_31932 = cljs.core.seq(vec__31650_31931);
var first__31652_31933 = cljs.core.first(seq__31651_31932);
var seq__31651_31934__$1 = cljs.core.next(seq__31651_31932);
var prefix_31935 = first__31652_31933;
var args_STAR__31936__$2 = seq__31651_31934__$1;
if((prefix_31935 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__31655_31940 = cljs.core.seq(args_STAR__31936__$2);
var chunk__31656_31941 = null;
var count__31657_31942 = (0);
var i__31658_31943 = (0);
while(true){
if((i__31658_31943 < count__31657_31942)){
var arg_31944__$1 = chunk__31656_31941.cljs$core$IIndexed$_nth$arity$2(null,i__31658_31943);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_31935,sci.impl.load.prependss(arg_31944__$1,opts));


var G__31946 = seq__31655_31940;
var G__31947 = chunk__31656_31941;
var G__31948 = count__31657_31942;
var G__31949 = (i__31658_31943 + (1));
seq__31655_31940 = G__31946;
chunk__31656_31941 = G__31947;
count__31657_31942 = G__31948;
i__31658_31943 = G__31949;
continue;
} else {
var temp__5804__auto___31950 = cljs.core.seq(seq__31655_31940);
if(temp__5804__auto___31950){
var seq__31655_31954__$1 = temp__5804__auto___31950;
if(cljs.core.chunked_seq_QMARK_(seq__31655_31954__$1)){
var c__5568__auto___31955 = cljs.core.chunk_first(seq__31655_31954__$1);
var G__31956 = cljs.core.chunk_rest(seq__31655_31954__$1);
var G__31957 = c__5568__auto___31955;
var G__31958 = cljs.core.count(c__5568__auto___31955);
var G__31959 = (0);
seq__31655_31940 = G__31956;
chunk__31656_31941 = G__31957;
count__31657_31942 = G__31958;
i__31658_31943 = G__31959;
continue;
} else {
var arg_31960__$1 = cljs.core.first(seq__31655_31954__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_31935,sci.impl.load.prependss(arg_31960__$1,opts));


var G__31961 = cljs.core.next(seq__31655_31954__$1);
var G__31962 = null;
var G__31963 = (0);
var G__31964 = (0);
seq__31655_31940 = G__31961;
chunk__31656_31941 = G__31962;
count__31657_31942 = G__31963;
i__31658_31943 = G__31964;
continue;
}
} else {
}
}
break;
}
}


var G__31966 = seq__31617;
var G__31967 = chunk__31619;
var G__31968 = count__31620;
var G__31969 = (i__31621 + (1));
seq__31617 = G__31966;
chunk__31619 = G__31967;
count__31620 = G__31968;
i__31621 = G__31969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31617);
if(temp__5804__auto__){
var seq__31617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31617__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31617__$1);
var G__31971 = cljs.core.chunk_rest(seq__31617__$1);
var G__31972 = c__5568__auto__;
var G__31973 = cljs.core.count(c__5568__auto__);
var G__31974 = (0);
seq__31617 = G__31971;
chunk__31619 = G__31972;
count__31620 = G__31973;
i__31621 = G__31974;
continue;
} else {
var arg = cljs.core.first(seq__31617__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__31682_31976 = arg;
var seq__31683_31977 = cljs.core.seq(vec__31682_31976);
var first__31684_31978 = cljs.core.first(seq__31683_31977);
var seq__31683_31979__$1 = cljs.core.next(seq__31683_31977);
var prefix_31980 = first__31684_31978;
var args_STAR__31981__$2 = seq__31683_31979__$1;
if((prefix_31980 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__31688_31982 = cljs.core.seq(args_STAR__31981__$2);
var chunk__31689_31983 = null;
var count__31690_31984 = (0);
var i__31691_31985 = (0);
while(true){
if((i__31691_31985 < count__31690_31984)){
var arg_31987__$1 = chunk__31689_31983.cljs$core$IIndexed$_nth$arity$2(null,i__31691_31985);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_31980,sci.impl.load.prependss(arg_31987__$1,opts));


var G__31990 = seq__31688_31982;
var G__31991 = chunk__31689_31983;
var G__31992 = count__31690_31984;
var G__31993 = (i__31691_31985 + (1));
seq__31688_31982 = G__31990;
chunk__31689_31983 = G__31991;
count__31690_31984 = G__31992;
i__31691_31985 = G__31993;
continue;
} else {
var temp__5804__auto___31994__$1 = cljs.core.seq(seq__31688_31982);
if(temp__5804__auto___31994__$1){
var seq__31688_31995__$1 = temp__5804__auto___31994__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31688_31995__$1)){
var c__5568__auto___31996 = cljs.core.chunk_first(seq__31688_31995__$1);
var G__31997 = cljs.core.chunk_rest(seq__31688_31995__$1);
var G__31998 = c__5568__auto___31996;
var G__31999 = cljs.core.count(c__5568__auto___31996);
var G__32000 = (0);
seq__31688_31982 = G__31997;
chunk__31689_31983 = G__31998;
count__31690_31984 = G__31999;
i__31691_31985 = G__32000;
continue;
} else {
var arg_32001__$1 = cljs.core.first(seq__31688_31995__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_31980,sci.impl.load.prependss(arg_32001__$1,opts));


var G__32002 = cljs.core.next(seq__31688_31995__$1);
var G__32003 = null;
var G__32004 = (0);
var G__32005 = (0);
seq__31688_31982 = G__32002;
chunk__31689_31983 = G__32003;
count__31690_31984 = G__32004;
i__31691_31985 = G__32005;
continue;
}
} else {
}
}
break;
}
}


var G__32007 = cljs.core.next(seq__31617__$1);
var G__32008 = null;
var G__32009 = (0);
var G__32010 = (0);
seq__31617 = G__32007;
chunk__31619 = G__32008;
count__31620 = G__32009;
i__31621 = G__32010;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32012 = arguments.length;
var i__5770__auto___32014 = (0);
while(true){
if((i__5770__auto___32014 < len__5769__auto___32012)){
args__5775__auto__.push((arguments[i__5770__auto___32014]));

var G__32015 = (i__5770__auto___32014 + (1));
i__5770__auto___32014 = G__32015;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq31719){
var G__31720 = cljs.core.first(seq31719);
var seq31719__$1 = cljs.core.next(seq31719);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31720,seq31719__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32019 = arguments.length;
var i__5770__auto___32021 = (0);
while(true){
if((i__5770__auto___32021 < len__5769__auto___32019)){
args__5775__auto__.push((arguments[i__5770__auto___32021]));

var G__32022 = (i__5770__auto___32021 + (1));
i__5770__auto___32021 = G__32022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq31732){
var G__31733 = cljs.core.first(seq31732);
var seq31732__$1 = cljs.core.next(seq31732);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31733,seq31732__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__31783 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31783,(1),null);
var G__31787_32025 = k;
var G__31787_32026__$1 = (((G__31787_32025 instanceof cljs.core.Keyword))?G__31787_32025.fqn:null);
switch (G__31787_32026__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym){
return (function (acc,p__31803){
var vec__31805 = p__31803;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31805,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31805,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__31787_32025,G__31787_32026__$1,vec__31783,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31787_32026__$1)].join('')));

}

var G__32031 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__32031;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = to_do;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5043__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32035 = arguments.length;
var i__5770__auto___32036 = (0);
while(true){
if((i__5770__auto___32036 < len__5769__auto___32035)){
args__5775__auto__.push((arguments[i__5770__auto___32036]));

var G__32037 = (i__5770__auto___32036 + (1));
i__5770__auto___32036 = G__32037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq31846){
var G__31847 = cljs.core.first(seq31846);
var seq31846__$1 = cljs.core.next(seq31846);
var G__31848 = cljs.core.first(seq31846__$1);
var seq31846__$2 = cljs.core.next(seq31846__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31847,G__31848,seq31846__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
