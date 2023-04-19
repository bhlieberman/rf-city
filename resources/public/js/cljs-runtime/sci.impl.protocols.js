goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33770 = arguments.length;
var i__5770__auto___33771 = (0);
while(true){
if((i__5770__auto___33771 < len__5769__auto___33770)){
args__5775__auto__.push((arguments[i__5770__auto___33771]));

var G__33772 = (i__5770__auto___33771 + (1));
i__5770__auto___33771 = G__33772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__32596 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32596,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32596,(1),null);
var vec__32599 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32599,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32599,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32606){
var vec__32607 = p__32606;
var seq__32608 = cljs.core.seq(vec__32607);
var first__32609 = cljs.core.first(seq__32608);
var seq__32608__$1 = cljs.core.next(seq__32608);
var method_name = first__32609;
var ___$2 = seq__32608__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__32575__auto__","x__32575__auto__",1204669699,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__32576__auto__","args__32576__auto__",1158487397,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__32577__auto__","methods__32577__auto__",-555042306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32575__auto__","x__32575__auto__",1204669699,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__32577__auto__","methods__32577__auto__",-555042306,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32575__auto__","x__32575__auto__",1204669699,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__32576__auto__","args__32576__auto__",1158487397,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__32578__auto__","x__32578__auto__",1878279314,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__32579__auto__","args__32579__auto__",401177170,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__32580__auto__","meta__32580__auto__",-181277408,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32578__auto__","x__32578__auto__",1878279314,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__32581__auto__","method__32581__auto__",-1991089689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__32580__auto__","meta__32580__auto__",-181277408,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__32581__auto__","method__32581__auto__",-1991089689,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__32581__auto__","method__32581__auto__",-1991089689,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32578__auto__","x__32578__auto__",1878279314,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__32579__auto__","args__32579__auto__",401177170,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32578__auto__","x__32578__auto__",1878279314,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq32585){
var G__32586 = cljs.core.first(seq32585);
var seq32585__$1 = cljs.core.next(seq32585);
var G__32587 = cljs.core.first(seq32585__$1);
var seq32585__$2 = cljs.core.next(seq32585__$1);
var G__32588 = cljs.core.first(seq32585__$2);
var seq32585__$3 = cljs.core.next(seq32585__$2);
var G__32589 = cljs.core.first(seq32585__$3);
var seq32585__$4 = cljs.core.next(seq32585__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32586,G__32587,G__32588,G__32589,seq32585__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33855 = arguments.length;
var i__5770__auto___33856 = (0);
while(true){
if((i__5770__auto___33856 < len__5769__auto___33855)){
args__5775__auto__.push((arguments[i__5770__auto___33856]));

var G__33857 = (i__5770__auto___33856 + (1));
i__5770__auto___33856 = G__33857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__32882 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__32884 = null;
var count__32885 = (0);
var i__32886 = (0);
while(true){
if((i__32886 < count__32885)){
var vec__33247 = chunk__32884.cljs$core$IIndexed$_nth$arity$2(null,i__32886);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(1),null);
var extend_via_metadata_33859 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_33860 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_33861 = sci.impl.vars.getName(proto_ns_33860);
var pns_str_33862 = (cljs.core.truth_(extend_via_metadata_33859)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_33861):null);
var seq__33259_33865 = cljs.core.seq(mmap);
var chunk__33260_33866 = null;
var count__33261_33867 = (0);
var i__33262_33868 = (0);
while(true){
if((i__33262_33868 < count__33261_33867)){
var vec__33349_33869 = chunk__33260_33866.cljs$core$IIndexed$_nth$arity$2(null,i__33262_33868);
var meth_name_33870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33349_33869,(0),null);
var f_33871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33349_33869,(1),null);
var meth_str_33896 = cljs.core.name(meth_name_33870);
var meth_sym_33897 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_33896);
var env_33898 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33899 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_33898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33861,meth_sym_33897], null));
var multi_method_33900 = cljs.core.deref(multi_method_var_33899);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_33900,atype,(cljs.core.truth_(extend_via_metadata_33859)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_33862,meth_str_33896);
return ((function (seq__33259_33865,chunk__33260_33866,count__33261_33867,i__33262_33868,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_33896,meth_sym_33897,env_33898,multi_method_var_33899,multi_method_33900,vec__33349_33869,meth_name_33870,f_33871,extend_via_metadata_33859,proto_ns_33860,pns_33861,pns_str_33862,vec__33247,proto,mmap){
return (function() { 
var G__33902__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33871,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33871,this$,args);
}
};
var G__33902 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33903__i = 0, G__33903__a = new Array(arguments.length -  1);
while (G__33903__i < G__33903__a.length) {G__33903__a[G__33903__i] = arguments[G__33903__i + 1]; ++G__33903__i;}
  args = new cljs.core.IndexedSeq(G__33903__a,0,null);
} 
return G__33902__delegate.call(this,this$,args);};
G__33902.cljs$lang$maxFixedArity = 1;
G__33902.cljs$lang$applyTo = (function (arglist__33904){
var this$ = cljs.core.first(arglist__33904);
var args = cljs.core.rest(arglist__33904);
return G__33902__delegate(this$,args);
});
G__33902.cljs$core$IFn$_invoke$arity$variadic = G__33902__delegate;
return G__33902;
})()
;
;})(seq__33259_33865,chunk__33260_33866,count__33261_33867,i__33262_33868,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_33896,meth_sym_33897,env_33898,multi_method_var_33899,multi_method_33900,vec__33349_33869,meth_name_33870,f_33871,extend_via_metadata_33859,proto_ns_33860,pns_33861,pns_str_33862,vec__33247,proto,mmap))
})():f_33871));


var G__33905 = seq__33259_33865;
var G__33906 = chunk__33260_33866;
var G__33907 = count__33261_33867;
var G__33908 = (i__33262_33868 + (1));
seq__33259_33865 = G__33905;
chunk__33260_33866 = G__33906;
count__33261_33867 = G__33907;
i__33262_33868 = G__33908;
continue;
} else {
var temp__5804__auto___33910 = cljs.core.seq(seq__33259_33865);
if(temp__5804__auto___33910){
var seq__33259_33911__$1 = temp__5804__auto___33910;
if(cljs.core.chunked_seq_QMARK_(seq__33259_33911__$1)){
var c__5568__auto___33912 = cljs.core.chunk_first(seq__33259_33911__$1);
var G__33913 = cljs.core.chunk_rest(seq__33259_33911__$1);
var G__33914 = c__5568__auto___33912;
var G__33915 = cljs.core.count(c__5568__auto___33912);
var G__33916 = (0);
seq__33259_33865 = G__33913;
chunk__33260_33866 = G__33914;
count__33261_33867 = G__33915;
i__33262_33868 = G__33916;
continue;
} else {
var vec__33393_33917 = cljs.core.first(seq__33259_33911__$1);
var meth_name_33918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33393_33917,(0),null);
var f_33919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33393_33917,(1),null);
var meth_str_33920 = cljs.core.name(meth_name_33918);
var meth_sym_33921 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_33920);
var env_33922 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33923 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_33922,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33861,meth_sym_33921], null));
var multi_method_33924 = cljs.core.deref(multi_method_var_33923);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_33924,atype,(cljs.core.truth_(extend_via_metadata_33859)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_33862,meth_str_33920);
return ((function (seq__33259_33865,chunk__33260_33866,count__33261_33867,i__33262_33868,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_33920,meth_sym_33921,env_33922,multi_method_var_33923,multi_method_33924,vec__33393_33917,meth_name_33918,f_33919,seq__33259_33911__$1,temp__5804__auto___33910,extend_via_metadata_33859,proto_ns_33860,pns_33861,pns_str_33862,vec__33247,proto,mmap){
return (function() { 
var G__33926__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33919,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33919,this$,args);
}
};
var G__33926 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33955__i = 0, G__33955__a = new Array(arguments.length -  1);
while (G__33955__i < G__33955__a.length) {G__33955__a[G__33955__i] = arguments[G__33955__i + 1]; ++G__33955__i;}
  args = new cljs.core.IndexedSeq(G__33955__a,0,null);
} 
return G__33926__delegate.call(this,this$,args);};
G__33926.cljs$lang$maxFixedArity = 1;
G__33926.cljs$lang$applyTo = (function (arglist__33956){
var this$ = cljs.core.first(arglist__33956);
var args = cljs.core.rest(arglist__33956);
return G__33926__delegate(this$,args);
});
G__33926.cljs$core$IFn$_invoke$arity$variadic = G__33926__delegate;
return G__33926;
})()
;
;})(seq__33259_33865,chunk__33260_33866,count__33261_33867,i__33262_33868,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_33920,meth_sym_33921,env_33922,multi_method_var_33923,multi_method_33924,vec__33393_33917,meth_name_33918,f_33919,seq__33259_33911__$1,temp__5804__auto___33910,extend_via_metadata_33859,proto_ns_33860,pns_33861,pns_str_33862,vec__33247,proto,mmap))
})():f_33919));


var G__33957 = cljs.core.next(seq__33259_33911__$1);
var G__33958 = null;
var G__33959 = (0);
var G__33960 = (0);
seq__33259_33865 = G__33957;
chunk__33260_33866 = G__33958;
count__33261_33867 = G__33959;
i__33262_33868 = G__33960;
continue;
}
} else {
}
}
break;
}


var G__33961 = seq__32882;
var G__33962 = chunk__32884;
var G__33963 = count__32885;
var G__33964 = (i__32886 + (1));
seq__32882 = G__33961;
chunk__32884 = G__33962;
count__32885 = G__33963;
i__32886 = G__33964;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32882);
if(temp__5804__auto__){
var seq__32882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32882__$1);
var G__33965 = cljs.core.chunk_rest(seq__32882__$1);
var G__33966 = c__5568__auto__;
var G__33967 = cljs.core.count(c__5568__auto__);
var G__33968 = (0);
seq__32882 = G__33965;
chunk__32884 = G__33966;
count__32885 = G__33967;
i__32886 = G__33968;
continue;
} else {
var vec__33436 = cljs.core.first(seq__32882__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33436,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33436,(1),null);
var extend_via_metadata_33969 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_33970 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_33971 = sci.impl.vars.getName(proto_ns_33970);
var pns_str_33972 = (cljs.core.truth_(extend_via_metadata_33969)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_33971):null);
var seq__33452_33973 = cljs.core.seq(mmap);
var chunk__33453_33974 = null;
var count__33454_33975 = (0);
var i__33455_33976 = (0);
while(true){
if((i__33455_33976 < count__33454_33975)){
var vec__33503_33977 = chunk__33453_33974.cljs$core$IIndexed$_nth$arity$2(null,i__33455_33976);
var meth_name_33978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503_33977,(0),null);
var f_33979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503_33977,(1),null);
var meth_str_33980 = cljs.core.name(meth_name_33978);
var meth_sym_33981 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_33980);
var env_33982 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_33982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33971,meth_sym_33981], null));
var multi_method_33984 = cljs.core.deref(multi_method_var_33983);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_33984,atype,(cljs.core.truth_(extend_via_metadata_33969)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_33972,meth_str_33980);
return ((function (seq__33452_33973,chunk__33453_33974,count__33454_33975,i__33455_33976,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_33980,meth_sym_33981,env_33982,multi_method_var_33983,multi_method_33984,vec__33503_33977,meth_name_33978,f_33979,extend_via_metadata_33969,proto_ns_33970,pns_33971,pns_str_33972,vec__33436,proto,mmap,seq__32882__$1,temp__5804__auto__){
return (function() { 
var G__33987__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33979,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33979,this$,args);
}
};
var G__33987 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33988__i = 0, G__33988__a = new Array(arguments.length -  1);
while (G__33988__i < G__33988__a.length) {G__33988__a[G__33988__i] = arguments[G__33988__i + 1]; ++G__33988__i;}
  args = new cljs.core.IndexedSeq(G__33988__a,0,null);
} 
return G__33987__delegate.call(this,this$,args);};
G__33987.cljs$lang$maxFixedArity = 1;
G__33987.cljs$lang$applyTo = (function (arglist__33989){
var this$ = cljs.core.first(arglist__33989);
var args = cljs.core.rest(arglist__33989);
return G__33987__delegate(this$,args);
});
G__33987.cljs$core$IFn$_invoke$arity$variadic = G__33987__delegate;
return G__33987;
})()
;
;})(seq__33452_33973,chunk__33453_33974,count__33454_33975,i__33455_33976,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_33980,meth_sym_33981,env_33982,multi_method_var_33983,multi_method_33984,vec__33503_33977,meth_name_33978,f_33979,extend_via_metadata_33969,proto_ns_33970,pns_33971,pns_str_33972,vec__33436,proto,mmap,seq__32882__$1,temp__5804__auto__))
})():f_33979));


var G__33991 = seq__33452_33973;
var G__33992 = chunk__33453_33974;
var G__33993 = count__33454_33975;
var G__33994 = (i__33455_33976 + (1));
seq__33452_33973 = G__33991;
chunk__33453_33974 = G__33992;
count__33454_33975 = G__33993;
i__33455_33976 = G__33994;
continue;
} else {
var temp__5804__auto___33996__$1 = cljs.core.seq(seq__33452_33973);
if(temp__5804__auto___33996__$1){
var seq__33452_33997__$1 = temp__5804__auto___33996__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33452_33997__$1)){
var c__5568__auto___33998 = cljs.core.chunk_first(seq__33452_33997__$1);
var G__33999 = cljs.core.chunk_rest(seq__33452_33997__$1);
var G__34000 = c__5568__auto___33998;
var G__34001 = cljs.core.count(c__5568__auto___33998);
var G__34002 = (0);
seq__33452_33973 = G__33999;
chunk__33453_33974 = G__34000;
count__33454_33975 = G__34001;
i__33455_33976 = G__34002;
continue;
} else {
var vec__33513_34005 = cljs.core.first(seq__33452_33997__$1);
var meth_name_34006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513_34005,(0),null);
var f_34007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513_34005,(1),null);
var meth_str_34008 = cljs.core.name(meth_name_34006);
var meth_sym_34009 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_34008);
var env_34010 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_34011 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_34010,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33971,meth_sym_34009], null));
var multi_method_34012 = cljs.core.deref(multi_method_var_34011);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_34012,atype,(cljs.core.truth_(extend_via_metadata_33969)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_33972,meth_str_34008);
return ((function (seq__33452_33973,chunk__33453_33974,count__33454_33975,i__33455_33976,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_34008,meth_sym_34009,env_34010,multi_method_var_34011,multi_method_34012,vec__33513_34005,meth_name_34006,f_34007,seq__33452_33997__$1,temp__5804__auto___33996__$1,extend_via_metadata_33969,proto_ns_33970,pns_33971,pns_str_33972,vec__33436,proto,mmap,seq__32882__$1,temp__5804__auto__){
return (function() { 
var G__34042__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_34007,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_34007,this$,args);
}
};
var G__34042 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__34043__i = 0, G__34043__a = new Array(arguments.length -  1);
while (G__34043__i < G__34043__a.length) {G__34043__a[G__34043__i] = arguments[G__34043__i + 1]; ++G__34043__i;}
  args = new cljs.core.IndexedSeq(G__34043__a,0,null);
} 
return G__34042__delegate.call(this,this$,args);};
G__34042.cljs$lang$maxFixedArity = 1;
G__34042.cljs$lang$applyTo = (function (arglist__34044){
var this$ = cljs.core.first(arglist__34044);
var args = cljs.core.rest(arglist__34044);
return G__34042__delegate(this$,args);
});
G__34042.cljs$core$IFn$_invoke$arity$variadic = G__34042__delegate;
return G__34042;
})()
;
;})(seq__33452_33973,chunk__33453_33974,count__33454_33975,i__33455_33976,seq__32882,chunk__32884,count__32885,i__32886,fq,meth_str_34008,meth_sym_34009,env_34010,multi_method_var_34011,multi_method_34012,vec__33513_34005,meth_name_34006,f_34007,seq__33452_33997__$1,temp__5804__auto___33996__$1,extend_via_metadata_33969,proto_ns_33970,pns_33971,pns_str_33972,vec__33436,proto,mmap,seq__32882__$1,temp__5804__auto__))
})():f_34007));


var G__34046 = cljs.core.next(seq__33452_33997__$1);
var G__34047 = null;
var G__34048 = (0);
var G__34049 = (0);
seq__33452_33973 = G__34046;
chunk__33453_33974 = G__34047;
count__33454_33975 = G__34048;
i__33455_33976 = G__34049;
continue;
}
} else {
}
}
break;
}


var G__34050 = cljs.core.next(seq__32882__$1);
var G__34051 = null;
var G__34052 = (0);
var G__34053 = (0);
seq__32882 = G__34050;
chunk__32884 = G__34051;
count__32885 = G__34052;
i__32886 = G__34053;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq32864){
var G__32865 = cljs.core.first(seq32864);
var seq32864__$1 = cljs.core.next(seq32864);
var G__32866 = cljs.core.first(seq32864__$1);
var seq32864__$2 = cljs.core.next(seq32864__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32865,G__32866,seq32864__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__33545){
var vec__33550 = p__33545;
var seq__33551 = cljs.core.seq(vec__33550);
var first__33552 = cljs.core.first(seq__33551);
var seq__33551__$1 = cljs.core.next(seq__33551);
var args = first__33552;
var body = seq__33551__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33534__auto__","farg__33534__auto__",-1504218049,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__33538__auto__","m__33538__auto__",925714982,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33534__auto__","farg__33534__auto__",-1504218049,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33539__auto__","meth__33539__auto__",1725870800,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33538__auto__","m__33538__auto__",925714982,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33539__auto__","meth__33539__auto__",1725870800,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33565){
var vec__33567 = p__33565;
var seq__33568 = cljs.core.seq(vec__33567);
var first__33569 = cljs.core.first(seq__33568);
var seq__33568__$1 = cljs.core.next(seq__33568);
var meth_name = first__33569;
var fn_body = seq__33568__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__33563_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__33563_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34072 = arguments.length;
var i__5770__auto___34073 = (0);
while(true){
if((i__5770__auto___34073 < len__5769__auto___34072)){
args__5775__auto__.push((arguments[i__5770__auto___34073]));

var G__34076 = (i__5770__auto___34073 + (1));
i__5770__auto___34073 = G__34076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__33575_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__33575_SHARP_)));
}),impls);
var protocol_var = (function (){var G__33597 = ctx;
var G__33598 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__33599 = protocol_name;
var fexpr__33596 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__33596.cljs$core$IFn$_invoke$arity$3 ? fexpr__33596.cljs$core$IFn$_invoke$arity$3(G__33597,G__33598,G__33599) : fexpr__33596.call(null,G__33597,G__33598,G__33599));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33611){
var vec__33614 = p__33611;
var seq__33615 = cljs.core.seq(vec__33614);
var first__33616 = cljs.core.first(seq__33615);
var seq__33615__$1 = cljs.core.next(seq__33615);
var type = first__33616;
var meths = seq__33615__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq33581){
var G__33582 = cljs.core.first(seq33581);
var seq33581__$1 = cljs.core.next(seq33581);
var G__33583 = cljs.core.first(seq33581__$1);
var seq33581__$2 = cljs.core.next(seq33581__$1);
var G__33584 = cljs.core.first(seq33581__$2);
var seq33581__$3 = cljs.core.next(seq33581__$2);
var G__33585 = cljs.core.first(seq33581__$3);
var seq33581__$4 = cljs.core.next(seq33581__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33582,G__33583,G__33584,G__33585,seq33581__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34113 = arguments.length;
var i__5770__auto___34114 = (0);
while(true){
if((i__5770__auto___34114 < len__5769__auto___34113)){
args__5775__auto__.push((arguments[i__5770__auto___34114]));

var G__34115 = (i__5770__auto___34114 + (1));
i__5770__auto___34114 = G__34115;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__33621_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__33621_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33638){
var vec__33641 = p__33638;
var seq__33642 = cljs.core.seq(vec__33641);
var first__33643 = cljs.core.first(seq__33642);
var seq__33642__$1 = cljs.core.next(seq__33642);
var proto = first__33643;
var meths = seq__33642__$1;
var protocol_var = (function (){var G__33645 = ctx;
var G__33646 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__33647 = proto;
var fexpr__33644 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__33644.cljs$core$IFn$_invoke$arity$3 ? fexpr__33644.cljs$core$IFn$_invoke$arity$3(G__33645,G__33646,G__33647) : fexpr__33644.call(null,G__33645,G__33646,G__33647));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq33622){
var G__33623 = cljs.core.first(seq33622);
var seq33622__$1 = cljs.core.next(seq33622);
var G__33624 = cljs.core.first(seq33622__$1);
var seq33622__$2 = cljs.core.next(seq33622__$1);
var G__33625 = cljs.core.first(seq33622__$2);
var seq33622__$3 = cljs.core.next(seq33622__$2);
var G__33626 = cljs.core.first(seq33622__$3);
var seq33622__$4 = cljs.core.next(seq33622__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33623,G__33624,G__33625,G__33626,seq33622__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__33657_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__33657_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__33657_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__33689 = cljs.core._EQ_;
var expr__33690 = p;
if(cljs.core.truth_((pred__33689.cljs$core$IFn$_invoke$arity$2 ? pred__33689.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__33690) : pred__33689.call(null,cljs.core.IDeref,expr__33690)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__33689.cljs$core$IFn$_invoke$arity$2 ? pred__33689.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__33690) : pred__33689.call(null,cljs.core.ISwap,expr__33690)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__33689.cljs$core$IFn$_invoke$arity$2 ? pred__33689.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__33690) : pred__33689.call(null,cljs.core.IReset,expr__33690)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33690)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__33730 = clazz;
var G__33730__$1 = (((G__33730 == null))?null:cljs.core.meta(G__33730));
if((G__33730__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__33730__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__33732_SHARP_){
return cljs.core.get_method(p1__33732_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
