goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_52057 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_52057(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_52058 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_52058(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50953 = coll;
var G__50954 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50953,G__50954) : shadow.dom.lazy_native_coll_seq.call(null,G__50953,G__50954));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50992 = arguments.length;
switch (G__50992) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51018 = arguments.length;
switch (G__51018) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51032 = arguments.length;
switch (G__51032) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51052 = arguments.length;
switch (G__51052) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51088 = arguments.length;
switch (G__51088) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51096 = arguments.length;
switch (G__51096) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51109){if((e51109 instanceof Object)){
var e = e51109;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51109;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51118 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51119 = null;
var count__51120 = (0);
var i__51121 = (0);
while(true){
if((i__51121 < count__51120)){
var el = chunk__51119.cljs$core$IIndexed$_nth$arity$2(null,i__51121);
var handler_52066__$1 = ((function (seq__51118,chunk__51119,count__51120,i__51121,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51118,chunk__51119,count__51120,i__51121,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52066__$1);


var G__52068 = seq__51118;
var G__52069 = chunk__51119;
var G__52070 = count__51120;
var G__52071 = (i__51121 + (1));
seq__51118 = G__52068;
chunk__51119 = G__52069;
count__51120 = G__52070;
i__51121 = G__52071;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51118);
if(temp__5804__auto__){
var seq__51118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51118__$1);
var G__52073 = cljs.core.chunk_rest(seq__51118__$1);
var G__52074 = c__5568__auto__;
var G__52075 = cljs.core.count(c__5568__auto__);
var G__52076 = (0);
seq__51118 = G__52073;
chunk__51119 = G__52074;
count__51120 = G__52075;
i__51121 = G__52076;
continue;
} else {
var el = cljs.core.first(seq__51118__$1);
var handler_52077__$1 = ((function (seq__51118,chunk__51119,count__51120,i__51121,el,seq__51118__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51118,chunk__51119,count__51120,i__51121,el,seq__51118__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52077__$1);


var G__52079 = cljs.core.next(seq__51118__$1);
var G__52080 = null;
var G__52081 = (0);
var G__52082 = (0);
seq__51118 = G__52079;
chunk__51119 = G__52080;
count__51120 = G__52081;
i__51121 = G__52082;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51135 = arguments.length;
switch (G__51135) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51145 = cljs.core.seq(events);
var chunk__51146 = null;
var count__51147 = (0);
var i__51148 = (0);
while(true){
if((i__51148 < count__51147)){
var vec__51162 = chunk__51146.cljs$core$IIndexed$_nth$arity$2(null,i__51148);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51162,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52093 = seq__51145;
var G__52094 = chunk__51146;
var G__52095 = count__51147;
var G__52096 = (i__51148 + (1));
seq__51145 = G__52093;
chunk__51146 = G__52094;
count__51147 = G__52095;
i__51148 = G__52096;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51145);
if(temp__5804__auto__){
var seq__51145__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51145__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51145__$1);
var G__52097 = cljs.core.chunk_rest(seq__51145__$1);
var G__52098 = c__5568__auto__;
var G__52099 = cljs.core.count(c__5568__auto__);
var G__52100 = (0);
seq__51145 = G__52097;
chunk__51146 = G__52098;
count__51147 = G__52099;
i__51148 = G__52100;
continue;
} else {
var vec__51168 = cljs.core.first(seq__51145__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51168,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52101 = cljs.core.next(seq__51145__$1);
var G__52102 = null;
var G__52103 = (0);
var G__52104 = (0);
seq__51145 = G__52101;
chunk__51146 = G__52102;
count__51147 = G__52103;
i__51148 = G__52104;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51173 = cljs.core.seq(styles);
var chunk__51174 = null;
var count__51175 = (0);
var i__51176 = (0);
while(true){
if((i__51176 < count__51175)){
var vec__51183 = chunk__51174.cljs$core$IIndexed$_nth$arity$2(null,i__51176);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51183,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52106 = seq__51173;
var G__52107 = chunk__51174;
var G__52108 = count__51175;
var G__52109 = (i__51176 + (1));
seq__51173 = G__52106;
chunk__51174 = G__52107;
count__51175 = G__52108;
i__51176 = G__52109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51173);
if(temp__5804__auto__){
var seq__51173__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51173__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51173__$1);
var G__52110 = cljs.core.chunk_rest(seq__51173__$1);
var G__52111 = c__5568__auto__;
var G__52112 = cljs.core.count(c__5568__auto__);
var G__52113 = (0);
seq__51173 = G__52110;
chunk__51174 = G__52111;
count__51175 = G__52112;
i__51176 = G__52113;
continue;
} else {
var vec__51187 = cljs.core.first(seq__51173__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51187,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52117 = cljs.core.next(seq__51173__$1);
var G__52118 = null;
var G__52119 = (0);
var G__52120 = (0);
seq__51173 = G__52117;
chunk__51174 = G__52118;
count__51175 = G__52119;
i__51176 = G__52120;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51194_52121 = key;
var G__51194_52122__$1 = (((G__51194_52121 instanceof cljs.core.Keyword))?G__51194_52121.fqn:null);
switch (G__51194_52122__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_52129 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_52129,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_52129,"aria-");
}
})())){
el.setAttribute(ks_52129,value);
} else {
(el[ks_52129] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51210){
var map__51211 = p__51210;
var map__51211__$1 = cljs.core.__destructure_map(map__51211);
var props = map__51211__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51211__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51213 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51213,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51213,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51213,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51216 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51216,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51216;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51221 = arguments.length;
switch (G__51221) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51229){
var vec__51230 = p__51229;
var seq__51231 = cljs.core.seq(vec__51230);
var first__51232 = cljs.core.first(seq__51231);
var seq__51231__$1 = cljs.core.next(seq__51231);
var nn = first__51232;
var first__51232__$1 = cljs.core.first(seq__51231__$1);
var seq__51231__$2 = cljs.core.next(seq__51231__$1);
var np = first__51232__$1;
var nc = seq__51231__$2;
var node = vec__51230;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51237 = nn;
var G__51238 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51237,G__51238) : create_fn.call(null,G__51237,G__51238));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51241 = nn;
var G__51242 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51241,G__51242) : create_fn.call(null,G__51241,G__51242));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51247 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51247,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51247,(1),null);
var seq__51250_52149 = cljs.core.seq(node_children);
var chunk__51251_52150 = null;
var count__51252_52151 = (0);
var i__51253_52152 = (0);
while(true){
if((i__51253_52152 < count__51252_52151)){
var child_struct_52156 = chunk__51251_52150.cljs$core$IIndexed$_nth$arity$2(null,i__51253_52152);
var children_52157 = shadow.dom.dom_node(child_struct_52156);
if(cljs.core.seq_QMARK_(children_52157)){
var seq__51287_52158 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52157));
var chunk__51289_52159 = null;
var count__51290_52160 = (0);
var i__51291_52161 = (0);
while(true){
if((i__51291_52161 < count__51290_52160)){
var child_52162 = chunk__51289_52159.cljs$core$IIndexed$_nth$arity$2(null,i__51291_52161);
if(cljs.core.truth_(child_52162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52162);


var G__52163 = seq__51287_52158;
var G__52164 = chunk__51289_52159;
var G__52165 = count__51290_52160;
var G__52166 = (i__51291_52161 + (1));
seq__51287_52158 = G__52163;
chunk__51289_52159 = G__52164;
count__51290_52160 = G__52165;
i__51291_52161 = G__52166;
continue;
} else {
var G__52168 = seq__51287_52158;
var G__52169 = chunk__51289_52159;
var G__52170 = count__51290_52160;
var G__52171 = (i__51291_52161 + (1));
seq__51287_52158 = G__52168;
chunk__51289_52159 = G__52169;
count__51290_52160 = G__52170;
i__51291_52161 = G__52171;
continue;
}
} else {
var temp__5804__auto___52172 = cljs.core.seq(seq__51287_52158);
if(temp__5804__auto___52172){
var seq__51287_52174__$1 = temp__5804__auto___52172;
if(cljs.core.chunked_seq_QMARK_(seq__51287_52174__$1)){
var c__5568__auto___52175 = cljs.core.chunk_first(seq__51287_52174__$1);
var G__52183 = cljs.core.chunk_rest(seq__51287_52174__$1);
var G__52184 = c__5568__auto___52175;
var G__52185 = cljs.core.count(c__5568__auto___52175);
var G__52186 = (0);
seq__51287_52158 = G__52183;
chunk__51289_52159 = G__52184;
count__51290_52160 = G__52185;
i__51291_52161 = G__52186;
continue;
} else {
var child_52187 = cljs.core.first(seq__51287_52174__$1);
if(cljs.core.truth_(child_52187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52187);


var G__52188 = cljs.core.next(seq__51287_52174__$1);
var G__52189 = null;
var G__52190 = (0);
var G__52191 = (0);
seq__51287_52158 = G__52188;
chunk__51289_52159 = G__52189;
count__51290_52160 = G__52190;
i__51291_52161 = G__52191;
continue;
} else {
var G__52192 = cljs.core.next(seq__51287_52174__$1);
var G__52193 = null;
var G__52194 = (0);
var G__52195 = (0);
seq__51287_52158 = G__52192;
chunk__51289_52159 = G__52193;
count__51290_52160 = G__52194;
i__51291_52161 = G__52195;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52157);
}


var G__52196 = seq__51250_52149;
var G__52197 = chunk__51251_52150;
var G__52198 = count__51252_52151;
var G__52199 = (i__51253_52152 + (1));
seq__51250_52149 = G__52196;
chunk__51251_52150 = G__52197;
count__51252_52151 = G__52198;
i__51253_52152 = G__52199;
continue;
} else {
var temp__5804__auto___52200 = cljs.core.seq(seq__51250_52149);
if(temp__5804__auto___52200){
var seq__51250_52201__$1 = temp__5804__auto___52200;
if(cljs.core.chunked_seq_QMARK_(seq__51250_52201__$1)){
var c__5568__auto___52202 = cljs.core.chunk_first(seq__51250_52201__$1);
var G__52203 = cljs.core.chunk_rest(seq__51250_52201__$1);
var G__52204 = c__5568__auto___52202;
var G__52205 = cljs.core.count(c__5568__auto___52202);
var G__52206 = (0);
seq__51250_52149 = G__52203;
chunk__51251_52150 = G__52204;
count__51252_52151 = G__52205;
i__51253_52152 = G__52206;
continue;
} else {
var child_struct_52207 = cljs.core.first(seq__51250_52201__$1);
var children_52208 = shadow.dom.dom_node(child_struct_52207);
if(cljs.core.seq_QMARK_(children_52208)){
var seq__51311_52211 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52208));
var chunk__51313_52212 = null;
var count__51314_52213 = (0);
var i__51315_52214 = (0);
while(true){
if((i__51315_52214 < count__51314_52213)){
var child_52218 = chunk__51313_52212.cljs$core$IIndexed$_nth$arity$2(null,i__51315_52214);
if(cljs.core.truth_(child_52218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52218);


var G__52219 = seq__51311_52211;
var G__52220 = chunk__51313_52212;
var G__52221 = count__51314_52213;
var G__52222 = (i__51315_52214 + (1));
seq__51311_52211 = G__52219;
chunk__51313_52212 = G__52220;
count__51314_52213 = G__52221;
i__51315_52214 = G__52222;
continue;
} else {
var G__52223 = seq__51311_52211;
var G__52224 = chunk__51313_52212;
var G__52225 = count__51314_52213;
var G__52226 = (i__51315_52214 + (1));
seq__51311_52211 = G__52223;
chunk__51313_52212 = G__52224;
count__51314_52213 = G__52225;
i__51315_52214 = G__52226;
continue;
}
} else {
var temp__5804__auto___52228__$1 = cljs.core.seq(seq__51311_52211);
if(temp__5804__auto___52228__$1){
var seq__51311_52229__$1 = temp__5804__auto___52228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51311_52229__$1)){
var c__5568__auto___52232 = cljs.core.chunk_first(seq__51311_52229__$1);
var G__52233 = cljs.core.chunk_rest(seq__51311_52229__$1);
var G__52234 = c__5568__auto___52232;
var G__52235 = cljs.core.count(c__5568__auto___52232);
var G__52236 = (0);
seq__51311_52211 = G__52233;
chunk__51313_52212 = G__52234;
count__51314_52213 = G__52235;
i__51315_52214 = G__52236;
continue;
} else {
var child_52237 = cljs.core.first(seq__51311_52229__$1);
if(cljs.core.truth_(child_52237)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52237);


var G__52239 = cljs.core.next(seq__51311_52229__$1);
var G__52240 = null;
var G__52241 = (0);
var G__52242 = (0);
seq__51311_52211 = G__52239;
chunk__51313_52212 = G__52240;
count__51314_52213 = G__52241;
i__51315_52214 = G__52242;
continue;
} else {
var G__52243 = cljs.core.next(seq__51311_52229__$1);
var G__52244 = null;
var G__52245 = (0);
var G__52246 = (0);
seq__51311_52211 = G__52243;
chunk__51313_52212 = G__52244;
count__51314_52213 = G__52245;
i__51315_52214 = G__52246;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52208);
}


var G__52247 = cljs.core.next(seq__51250_52201__$1);
var G__52248 = null;
var G__52249 = (0);
var G__52250 = (0);
seq__51250_52149 = G__52247;
chunk__51251_52150 = G__52248;
count__51252_52151 = G__52249;
i__51253_52152 = G__52250;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51344 = cljs.core.seq(node);
var chunk__51345 = null;
var count__51346 = (0);
var i__51347 = (0);
while(true){
if((i__51347 < count__51346)){
var n = chunk__51345.cljs$core$IIndexed$_nth$arity$2(null,i__51347);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52252 = seq__51344;
var G__52253 = chunk__51345;
var G__52254 = count__51346;
var G__52255 = (i__51347 + (1));
seq__51344 = G__52252;
chunk__51345 = G__52253;
count__51346 = G__52254;
i__51347 = G__52255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51344);
if(temp__5804__auto__){
var seq__51344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51344__$1);
var G__52257 = cljs.core.chunk_rest(seq__51344__$1);
var G__52258 = c__5568__auto__;
var G__52259 = cljs.core.count(c__5568__auto__);
var G__52260 = (0);
seq__51344 = G__52257;
chunk__51345 = G__52258;
count__51346 = G__52259;
i__51347 = G__52260;
continue;
} else {
var n = cljs.core.first(seq__51344__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52261 = cljs.core.next(seq__51344__$1);
var G__52262 = null;
var G__52263 = (0);
var G__52264 = (0);
seq__51344 = G__52261;
chunk__51345 = G__52262;
count__51346 = G__52263;
i__51347 = G__52264;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51356 = arguments.length;
switch (G__51356) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51371 = arguments.length;
switch (G__51371) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51404 = arguments.length;
switch (G__51404) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52287 = arguments.length;
var i__5770__auto___52288 = (0);
while(true){
if((i__5770__auto___52288 < len__5769__auto___52287)){
args__5775__auto__.push((arguments[i__5770__auto___52288]));

var G__52293 = (i__5770__auto___52288 + (1));
i__5770__auto___52288 = G__52293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51421_52296 = cljs.core.seq(nodes);
var chunk__51422_52297 = null;
var count__51423_52298 = (0);
var i__51424_52299 = (0);
while(true){
if((i__51424_52299 < count__51423_52298)){
var node_52305 = chunk__51422_52297.cljs$core$IIndexed$_nth$arity$2(null,i__51424_52299);
fragment.appendChild(shadow.dom._to_dom(node_52305));


var G__52307 = seq__51421_52296;
var G__52308 = chunk__51422_52297;
var G__52309 = count__51423_52298;
var G__52310 = (i__51424_52299 + (1));
seq__51421_52296 = G__52307;
chunk__51422_52297 = G__52308;
count__51423_52298 = G__52309;
i__51424_52299 = G__52310;
continue;
} else {
var temp__5804__auto___52315 = cljs.core.seq(seq__51421_52296);
if(temp__5804__auto___52315){
var seq__51421_52317__$1 = temp__5804__auto___52315;
if(cljs.core.chunked_seq_QMARK_(seq__51421_52317__$1)){
var c__5568__auto___52322 = cljs.core.chunk_first(seq__51421_52317__$1);
var G__52323 = cljs.core.chunk_rest(seq__51421_52317__$1);
var G__52324 = c__5568__auto___52322;
var G__52325 = cljs.core.count(c__5568__auto___52322);
var G__52326 = (0);
seq__51421_52296 = G__52323;
chunk__51422_52297 = G__52324;
count__51423_52298 = G__52325;
i__51424_52299 = G__52326;
continue;
} else {
var node_52328 = cljs.core.first(seq__51421_52317__$1);
fragment.appendChild(shadow.dom._to_dom(node_52328));


var G__52334 = cljs.core.next(seq__51421_52317__$1);
var G__52335 = null;
var G__52336 = (0);
var G__52337 = (0);
seq__51421_52296 = G__52334;
chunk__51422_52297 = G__52335;
count__51423_52298 = G__52336;
i__51424_52299 = G__52337;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51417){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51417));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51470_52346 = cljs.core.seq(scripts);
var chunk__51471_52347 = null;
var count__51472_52348 = (0);
var i__51473_52349 = (0);
while(true){
if((i__51473_52349 < count__51472_52348)){
var vec__51496_52352 = chunk__51471_52347.cljs$core$IIndexed$_nth$arity$2(null,i__51473_52349);
var script_tag_52353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51496_52352,(0),null);
var script_body_52354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51496_52352,(1),null);
eval(script_body_52354);


var G__52359 = seq__51470_52346;
var G__52360 = chunk__51471_52347;
var G__52361 = count__51472_52348;
var G__52362 = (i__51473_52349 + (1));
seq__51470_52346 = G__52359;
chunk__51471_52347 = G__52360;
count__51472_52348 = G__52361;
i__51473_52349 = G__52362;
continue;
} else {
var temp__5804__auto___52363 = cljs.core.seq(seq__51470_52346);
if(temp__5804__auto___52363){
var seq__51470_52364__$1 = temp__5804__auto___52363;
if(cljs.core.chunked_seq_QMARK_(seq__51470_52364__$1)){
var c__5568__auto___52365 = cljs.core.chunk_first(seq__51470_52364__$1);
var G__52366 = cljs.core.chunk_rest(seq__51470_52364__$1);
var G__52367 = c__5568__auto___52365;
var G__52368 = cljs.core.count(c__5568__auto___52365);
var G__52369 = (0);
seq__51470_52346 = G__52366;
chunk__51471_52347 = G__52367;
count__51472_52348 = G__52368;
i__51473_52349 = G__52369;
continue;
} else {
var vec__51502_52371 = cljs.core.first(seq__51470_52364__$1);
var script_tag_52372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51502_52371,(0),null);
var script_body_52373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51502_52371,(1),null);
eval(script_body_52373);


var G__52374 = cljs.core.next(seq__51470_52364__$1);
var G__52375 = null;
var G__52376 = (0);
var G__52377 = (0);
seq__51470_52346 = G__52374;
chunk__51471_52347 = G__52375;
count__51472_52348 = G__52376;
i__51473_52349 = G__52377;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51506){
var vec__51508 = p__51506;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51508,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51508,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51539 = arguments.length;
switch (G__51539) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51607 = cljs.core.seq(style_keys);
var chunk__51609 = null;
var count__51610 = (0);
var i__51611 = (0);
while(true){
if((i__51611 < count__51610)){
var it = chunk__51609.cljs$core$IIndexed$_nth$arity$2(null,i__51611);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52383 = seq__51607;
var G__52384 = chunk__51609;
var G__52385 = count__51610;
var G__52386 = (i__51611 + (1));
seq__51607 = G__52383;
chunk__51609 = G__52384;
count__51610 = G__52385;
i__51611 = G__52386;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51607);
if(temp__5804__auto__){
var seq__51607__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51607__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51607__$1);
var G__52388 = cljs.core.chunk_rest(seq__51607__$1);
var G__52389 = c__5568__auto__;
var G__52390 = cljs.core.count(c__5568__auto__);
var G__52391 = (0);
seq__51607 = G__52388;
chunk__51609 = G__52389;
count__51610 = G__52390;
i__51611 = G__52391;
continue;
} else {
var it = cljs.core.first(seq__51607__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52392 = cljs.core.next(seq__51607__$1);
var G__52393 = null;
var G__52394 = (0);
var G__52395 = (0);
seq__51607 = G__52392;
chunk__51609 = G__52393;
count__51610 = G__52394;
i__51611 = G__52395;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k51625,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__51634 = k51625;
var G__51634__$1 = (((G__51634 instanceof cljs.core.Keyword))?G__51634.fqn:null);
switch (G__51634__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51625,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__51637){
var vec__51639 = p__51637;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51639,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51639,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51624){
var self__ = this;
var G__51624__$1 = this;
return (new cljs.core.RecordIter((0),G__51624__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51626,other51627){
var self__ = this;
var this51626__$1 = this;
return (((!((other51627 == null)))) && ((((this51626__$1.constructor === other51627.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51626__$1.x,other51627.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51626__$1.y,other51627.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51626__$1.__extmap,other51627.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k51625){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51666 = k51625;
var G__51666__$1 = (((G__51666 instanceof cljs.core.Keyword))?G__51666.fqn:null);
switch (G__51666__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51625);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__51624){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51669 = cljs.core.keyword_identical_QMARK_;
var expr__51670 = k__5352__auto__;
if(cljs.core.truth_((pred__51669.cljs$core$IFn$_invoke$arity$2 ? pred__51669.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51670) : pred__51669.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51670)))){
return (new shadow.dom.Coordinate(G__51624,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51669.cljs$core$IFn$_invoke$arity$2 ? pred__51669.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51670) : pred__51669.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51670)))){
return (new shadow.dom.Coordinate(self__.x,G__51624,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__51624),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__51624){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51624,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51630){
var extmap__5385__auto__ = (function (){var G__51684 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51630,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51630)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51684);
} else {
return G__51684;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51630),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51630),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k51690,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__51698 = k51690;
var G__51698__$1 = (((G__51698 instanceof cljs.core.Keyword))?G__51698.fqn:null);
switch (G__51698__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51690,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__51702){
var vec__51704 = p__51702;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51704,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51704,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51689){
var self__ = this;
var G__51689__$1 = this;
return (new cljs.core.RecordIter((0),G__51689__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51691,other51692){
var self__ = this;
var this51691__$1 = this;
return (((!((other51692 == null)))) && ((((this51691__$1.constructor === other51692.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51691__$1.w,other51692.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51691__$1.h,other51692.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51691__$1.__extmap,other51692.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k51690){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51740 = k51690;
var G__51740__$1 = (((G__51740 instanceof cljs.core.Keyword))?G__51740.fqn:null);
switch (G__51740__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51690);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__51689){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51747 = cljs.core.keyword_identical_QMARK_;
var expr__51748 = k__5352__auto__;
if(cljs.core.truth_((pred__51747.cljs$core$IFn$_invoke$arity$2 ? pred__51747.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51748) : pred__51747.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51748)))){
return (new shadow.dom.Size(G__51689,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51747.cljs$core$IFn$_invoke$arity$2 ? pred__51747.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51748) : pred__51747.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51748)))){
return (new shadow.dom.Size(self__.w,G__51689,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__51689),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__51689){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51689,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51693){
var extmap__5385__auto__ = (function (){var G__51766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51693,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51766);
} else {
return G__51766;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51693),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51693),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__52442 = (i + (1));
var G__52443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52442;
ret = G__52443;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51790){
var vec__51791 = p__51790;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51791,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51803 = arguments.length;
switch (G__51803) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52456 = ps;
var G__52457 = (i + (1));
el__$1 = G__52456;
i = G__52457;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51843 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51843,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51843,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51843,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51849_52463 = cljs.core.seq(props);
var chunk__51850_52464 = null;
var count__51851_52465 = (0);
var i__51852_52466 = (0);
while(true){
if((i__51852_52466 < count__51851_52465)){
var vec__51876_52467 = chunk__51850_52464.cljs$core$IIndexed$_nth$arity$2(null,i__51852_52466);
var k_52468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876_52467,(0),null);
var v_52469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876_52467,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_52468);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52468),v_52469);


var G__52470 = seq__51849_52463;
var G__52471 = chunk__51850_52464;
var G__52472 = count__51851_52465;
var G__52473 = (i__51852_52466 + (1));
seq__51849_52463 = G__52470;
chunk__51850_52464 = G__52471;
count__51851_52465 = G__52472;
i__51852_52466 = G__52473;
continue;
} else {
var temp__5804__auto___52474 = cljs.core.seq(seq__51849_52463);
if(temp__5804__auto___52474){
var seq__51849_52475__$1 = temp__5804__auto___52474;
if(cljs.core.chunked_seq_QMARK_(seq__51849_52475__$1)){
var c__5568__auto___52476 = cljs.core.chunk_first(seq__51849_52475__$1);
var G__52477 = cljs.core.chunk_rest(seq__51849_52475__$1);
var G__52478 = c__5568__auto___52476;
var G__52479 = cljs.core.count(c__5568__auto___52476);
var G__52480 = (0);
seq__51849_52463 = G__52477;
chunk__51850_52464 = G__52478;
count__51851_52465 = G__52479;
i__51852_52466 = G__52480;
continue;
} else {
var vec__51887_52481 = cljs.core.first(seq__51849_52475__$1);
var k_52482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51887_52481,(0),null);
var v_52483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51887_52481,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_52482);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52482),v_52483);


var G__52484 = cljs.core.next(seq__51849_52475__$1);
var G__52485 = null;
var G__52486 = (0);
var G__52487 = (0);
seq__51849_52463 = G__52484;
chunk__51850_52464 = G__52485;
count__51851_52465 = G__52486;
i__51852_52466 = G__52487;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51904 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51904,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51904,(1),null);
var seq__51918_52491 = cljs.core.seq(node_children);
var chunk__51920_52492 = null;
var count__51921_52493 = (0);
var i__51922_52494 = (0);
while(true){
if((i__51922_52494 < count__51921_52493)){
var child_struct_52496 = chunk__51920_52492.cljs$core$IIndexed$_nth$arity$2(null,i__51922_52494);
if((!((child_struct_52496 == null)))){
if(typeof child_struct_52496 === 'string'){
var text_52497 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52497),child_struct_52496].join(''));
} else {
var children_52498 = shadow.dom.svg_node(child_struct_52496);
if(cljs.core.seq_QMARK_(children_52498)){
var seq__51950_52499 = cljs.core.seq(children_52498);
var chunk__51953_52500 = null;
var count__51954_52501 = (0);
var i__51955_52502 = (0);
while(true){
if((i__51955_52502 < count__51954_52501)){
var child_52503 = chunk__51953_52500.cljs$core$IIndexed$_nth$arity$2(null,i__51955_52502);
if(cljs.core.truth_(child_52503)){
node.appendChild(child_52503);


var G__52504 = seq__51950_52499;
var G__52505 = chunk__51953_52500;
var G__52506 = count__51954_52501;
var G__52507 = (i__51955_52502 + (1));
seq__51950_52499 = G__52504;
chunk__51953_52500 = G__52505;
count__51954_52501 = G__52506;
i__51955_52502 = G__52507;
continue;
} else {
var G__52508 = seq__51950_52499;
var G__52509 = chunk__51953_52500;
var G__52510 = count__51954_52501;
var G__52511 = (i__51955_52502 + (1));
seq__51950_52499 = G__52508;
chunk__51953_52500 = G__52509;
count__51954_52501 = G__52510;
i__51955_52502 = G__52511;
continue;
}
} else {
var temp__5804__auto___52515 = cljs.core.seq(seq__51950_52499);
if(temp__5804__auto___52515){
var seq__51950_52516__$1 = temp__5804__auto___52515;
if(cljs.core.chunked_seq_QMARK_(seq__51950_52516__$1)){
var c__5568__auto___52517 = cljs.core.chunk_first(seq__51950_52516__$1);
var G__52518 = cljs.core.chunk_rest(seq__51950_52516__$1);
var G__52519 = c__5568__auto___52517;
var G__52520 = cljs.core.count(c__5568__auto___52517);
var G__52521 = (0);
seq__51950_52499 = G__52518;
chunk__51953_52500 = G__52519;
count__51954_52501 = G__52520;
i__51955_52502 = G__52521;
continue;
} else {
var child_52522 = cljs.core.first(seq__51950_52516__$1);
if(cljs.core.truth_(child_52522)){
node.appendChild(child_52522);


var G__52523 = cljs.core.next(seq__51950_52516__$1);
var G__52524 = null;
var G__52525 = (0);
var G__52526 = (0);
seq__51950_52499 = G__52523;
chunk__51953_52500 = G__52524;
count__51954_52501 = G__52525;
i__51955_52502 = G__52526;
continue;
} else {
var G__52528 = cljs.core.next(seq__51950_52516__$1);
var G__52529 = null;
var G__52530 = (0);
var G__52531 = (0);
seq__51950_52499 = G__52528;
chunk__51953_52500 = G__52529;
count__51954_52501 = G__52530;
i__51955_52502 = G__52531;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52498);
}
}


var G__52532 = seq__51918_52491;
var G__52533 = chunk__51920_52492;
var G__52534 = count__51921_52493;
var G__52535 = (i__51922_52494 + (1));
seq__51918_52491 = G__52532;
chunk__51920_52492 = G__52533;
count__51921_52493 = G__52534;
i__51922_52494 = G__52535;
continue;
} else {
var G__52536 = seq__51918_52491;
var G__52537 = chunk__51920_52492;
var G__52538 = count__51921_52493;
var G__52539 = (i__51922_52494 + (1));
seq__51918_52491 = G__52536;
chunk__51920_52492 = G__52537;
count__51921_52493 = G__52538;
i__51922_52494 = G__52539;
continue;
}
} else {
var temp__5804__auto___52540 = cljs.core.seq(seq__51918_52491);
if(temp__5804__auto___52540){
var seq__51918_52541__$1 = temp__5804__auto___52540;
if(cljs.core.chunked_seq_QMARK_(seq__51918_52541__$1)){
var c__5568__auto___52542 = cljs.core.chunk_first(seq__51918_52541__$1);
var G__52546 = cljs.core.chunk_rest(seq__51918_52541__$1);
var G__52547 = c__5568__auto___52542;
var G__52548 = cljs.core.count(c__5568__auto___52542);
var G__52549 = (0);
seq__51918_52491 = G__52546;
chunk__51920_52492 = G__52547;
count__51921_52493 = G__52548;
i__51922_52494 = G__52549;
continue;
} else {
var child_struct_52550 = cljs.core.first(seq__51918_52541__$1);
if((!((child_struct_52550 == null)))){
if(typeof child_struct_52550 === 'string'){
var text_52551 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52551),child_struct_52550].join(''));
} else {
var children_52552 = shadow.dom.svg_node(child_struct_52550);
if(cljs.core.seq_QMARK_(children_52552)){
var seq__51962_52553 = cljs.core.seq(children_52552);
var chunk__51964_52554 = null;
var count__51965_52555 = (0);
var i__51966_52556 = (0);
while(true){
if((i__51966_52556 < count__51965_52555)){
var child_52557 = chunk__51964_52554.cljs$core$IIndexed$_nth$arity$2(null,i__51966_52556);
if(cljs.core.truth_(child_52557)){
node.appendChild(child_52557);


var G__52558 = seq__51962_52553;
var G__52559 = chunk__51964_52554;
var G__52560 = count__51965_52555;
var G__52561 = (i__51966_52556 + (1));
seq__51962_52553 = G__52558;
chunk__51964_52554 = G__52559;
count__51965_52555 = G__52560;
i__51966_52556 = G__52561;
continue;
} else {
var G__52562 = seq__51962_52553;
var G__52563 = chunk__51964_52554;
var G__52564 = count__51965_52555;
var G__52565 = (i__51966_52556 + (1));
seq__51962_52553 = G__52562;
chunk__51964_52554 = G__52563;
count__51965_52555 = G__52564;
i__51966_52556 = G__52565;
continue;
}
} else {
var temp__5804__auto___52566__$1 = cljs.core.seq(seq__51962_52553);
if(temp__5804__auto___52566__$1){
var seq__51962_52567__$1 = temp__5804__auto___52566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51962_52567__$1)){
var c__5568__auto___52568 = cljs.core.chunk_first(seq__51962_52567__$1);
var G__52569 = cljs.core.chunk_rest(seq__51962_52567__$1);
var G__52570 = c__5568__auto___52568;
var G__52571 = cljs.core.count(c__5568__auto___52568);
var G__52572 = (0);
seq__51962_52553 = G__52569;
chunk__51964_52554 = G__52570;
count__51965_52555 = G__52571;
i__51966_52556 = G__52572;
continue;
} else {
var child_52573 = cljs.core.first(seq__51962_52567__$1);
if(cljs.core.truth_(child_52573)){
node.appendChild(child_52573);


var G__52574 = cljs.core.next(seq__51962_52567__$1);
var G__52575 = null;
var G__52576 = (0);
var G__52577 = (0);
seq__51962_52553 = G__52574;
chunk__51964_52554 = G__52575;
count__51965_52555 = G__52576;
i__51966_52556 = G__52577;
continue;
} else {
var G__52578 = cljs.core.next(seq__51962_52567__$1);
var G__52579 = null;
var G__52580 = (0);
var G__52581 = (0);
seq__51962_52553 = G__52578;
chunk__51964_52554 = G__52579;
count__51965_52555 = G__52580;
i__51966_52556 = G__52581;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52552);
}
}


var G__52582 = cljs.core.next(seq__51918_52541__$1);
var G__52583 = null;
var G__52584 = (0);
var G__52585 = (0);
seq__51918_52491 = G__52582;
chunk__51920_52492 = G__52583;
count__51921_52493 = G__52584;
i__51922_52494 = G__52585;
continue;
} else {
var G__52586 = cljs.core.next(seq__51918_52541__$1);
var G__52587 = null;
var G__52588 = (0);
var G__52589 = (0);
seq__51918_52491 = G__52586;
chunk__51920_52492 = G__52587;
count__51921_52493 = G__52588;
i__51922_52494 = G__52589;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52595 = arguments.length;
var i__5770__auto___52596 = (0);
while(true){
if((i__5770__auto___52596 < len__5769__auto___52595)){
args__5775__auto__.push((arguments[i__5770__auto___52596]));

var G__52598 = (i__5770__auto___52596 + (1));
i__5770__auto___52596 = G__52598;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51996){
var G__51998 = cljs.core.first(seq51996);
var seq51996__$1 = cljs.core.next(seq51996);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51998,seq51996__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__52030 = arguments.length;
switch (G__52030) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__48186__auto___52614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_52037){
var state_val_52038 = (state_52037[(1)]);
if((state_val_52038 === (1))){
var state_52037__$1 = state_52037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52037__$1,(2),once_or_cleanup);
} else {
if((state_val_52038 === (2))){
var inst_52034 = (state_52037[(2)]);
var inst_52035 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_52037__$1 = (function (){var statearr_52043 = state_52037;
(statearr_52043[(7)] = inst_52034);

return statearr_52043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52037__$1,inst_52035);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48084__auto__ = null;
var shadow$dom$state_machine__48084__auto____0 = (function (){
var statearr_52048 = [null,null,null,null,null,null,null,null];
(statearr_52048[(0)] = shadow$dom$state_machine__48084__auto__);

(statearr_52048[(1)] = (1));

return statearr_52048;
});
var shadow$dom$state_machine__48084__auto____1 = (function (state_52037){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_52037);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e52053){var ex__48087__auto__ = e52053;
var statearr_52054_52623 = state_52037;
(statearr_52054_52623[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_52037[(4)]))){
var statearr_52055_52624 = state_52037;
(statearr_52055_52624[(1)] = cljs.core.first((state_52037[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52625 = state_52037;
state_52037 = G__52625;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
shadow$dom$state_machine__48084__auto__ = function(state_52037){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48084__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48084__auto____1.call(this,state_52037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48084__auto____0;
shadow$dom$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48084__auto____1;
return shadow$dom$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_52056 = f__48187__auto__();
(statearr_52056[(6)] = c__48186__auto___52614);

return statearr_52056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
