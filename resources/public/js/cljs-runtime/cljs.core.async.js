goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48263 = (function (f,blockable,meta48264){
this.f = f;
this.blockable = blockable;
this.meta48264 = meta48264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48265,meta48264__$1){
var self__ = this;
var _48265__$1 = this;
return (new cljs.core.async.t_cljs$core$async48263(self__.f,self__.blockable,meta48264__$1));
}));

(cljs.core.async.t_cljs$core$async48263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48265){
var self__ = this;
var _48265__$1 = this;
return self__.meta48264;
}));

(cljs.core.async.t_cljs$core$async48263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48264","meta48264",1192279213,null)], null);
}));

(cljs.core.async.t_cljs$core$async48263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48263");

(cljs.core.async.t_cljs$core$async48263.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48263.
 */
cljs.core.async.__GT_t_cljs$core$async48263 = (function cljs$core$async$__GT_t_cljs$core$async48263(f,blockable,meta48264){
return (new cljs.core.async.t_cljs$core$async48263(f,blockable,meta48264));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48259 = arguments.length;
switch (G__48259) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async48263(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48295 = arguments.length;
switch (G__48295) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48311 = arguments.length;
switch (G__48311) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48328 = arguments.length;
switch (G__48328) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50816 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50816) : fn1.call(null,val_50816));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50816) : fn1.call(null,val_50816));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48343 = arguments.length;
switch (G__48343) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___50851 = n;
var x_50852 = (0);
while(true){
if((x_50852 < n__5636__auto___50851)){
(a[x_50852] = x_50852);

var G__50853 = (x_50852 + (1));
x_50852 = G__50853;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48356 = (function (flag,meta48357){
this.flag = flag;
this.meta48357 = meta48357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48358,meta48357__$1){
var self__ = this;
var _48358__$1 = this;
return (new cljs.core.async.t_cljs$core$async48356(self__.flag,meta48357__$1));
}));

(cljs.core.async.t_cljs$core$async48356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48358){
var self__ = this;
var _48358__$1 = this;
return self__.meta48357;
}));

(cljs.core.async.t_cljs$core$async48356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48357","meta48357",-1281002220,null)], null);
}));

(cljs.core.async.t_cljs$core$async48356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48356");

(cljs.core.async.t_cljs$core$async48356.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48356.
 */
cljs.core.async.__GT_t_cljs$core$async48356 = (function cljs$core$async$__GT_t_cljs$core$async48356(flag,meta48357){
return (new cljs.core.async.t_cljs$core$async48356(flag,meta48357));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async48356(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48362 = (function (flag,cb,meta48363){
this.flag = flag;
this.cb = cb;
this.meta48363 = meta48363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48364,meta48363__$1){
var self__ = this;
var _48364__$1 = this;
return (new cljs.core.async.t_cljs$core$async48362(self__.flag,self__.cb,meta48363__$1));
}));

(cljs.core.async.t_cljs$core$async48362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48364){
var self__ = this;
var _48364__$1 = this;
return self__.meta48363;
}));

(cljs.core.async.t_cljs$core$async48362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48363","meta48363",985874925,null)], null);
}));

(cljs.core.async.t_cljs$core$async48362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48362");

(cljs.core.async.t_cljs$core$async48362.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48362.
 */
cljs.core.async.__GT_t_cljs$core$async48362 = (function cljs$core$async$__GT_t_cljs$core$async48362(flag,cb,meta48363){
return (new cljs.core.async.t_cljs$core$async48362(flag,cb,meta48363));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async48362(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48378_SHARP_){
var G__48392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48378_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48392) : fret.call(null,G__48392));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48379_SHARP_){
var G__48393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48379_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48393) : fret.call(null,G__48393));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50913 = (i + (1));
i = G__50913;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50915 = arguments.length;
var i__5770__auto___50916 = (0);
while(true){
if((i__5770__auto___50916 < len__5769__auto___50915)){
args__5775__auto__.push((arguments[i__5770__auto___50916]));

var G__50917 = (i__5770__auto___50916 + (1));
i__5770__auto___50916 = G__50917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48414){
var map__48415 = p__48414;
var map__48415__$1 = cljs.core.__destructure_map(map__48415);
var opts = map__48415__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48409){
var G__48410 = cljs.core.first(seq48409);
var seq48409__$1 = cljs.core.next(seq48409);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48410,seq48409__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48417 = arguments.length;
switch (G__48417) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48186__auto___50921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48450){
var state_val_48451 = (state_48450[(1)]);
if((state_val_48451 === (7))){
var inst_48443 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
var statearr_48455_50922 = state_48450__$1;
(statearr_48455_50922[(2)] = inst_48443);

(statearr_48455_50922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (1))){
var state_48450__$1 = state_48450;
var statearr_48456_50923 = state_48450__$1;
(statearr_48456_50923[(2)] = null);

(statearr_48456_50923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (4))){
var inst_48426 = (state_48450[(7)]);
var inst_48426__$1 = (state_48450[(2)]);
var inst_48427 = (inst_48426__$1 == null);
var state_48450__$1 = (function (){var statearr_48460 = state_48450;
(statearr_48460[(7)] = inst_48426__$1);

return statearr_48460;
})();
if(cljs.core.truth_(inst_48427)){
var statearr_48461_50925 = state_48450__$1;
(statearr_48461_50925[(1)] = (5));

} else {
var statearr_48462_50926 = state_48450__$1;
(statearr_48462_50926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (13))){
var state_48450__$1 = state_48450;
var statearr_48463_50927 = state_48450__$1;
(statearr_48463_50927[(2)] = null);

(statearr_48463_50927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (6))){
var inst_48426 = (state_48450[(7)]);
var state_48450__$1 = state_48450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48450__$1,(11),to,inst_48426);
} else {
if((state_val_48451 === (3))){
var inst_48445 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48450__$1,inst_48445);
} else {
if((state_val_48451 === (12))){
var state_48450__$1 = state_48450;
var statearr_48467_50928 = state_48450__$1;
(statearr_48467_50928[(2)] = null);

(statearr_48467_50928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (2))){
var state_48450__$1 = state_48450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48450__$1,(4),from);
} else {
if((state_val_48451 === (11))){
var inst_48436 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
if(cljs.core.truth_(inst_48436)){
var statearr_48468_50933 = state_48450__$1;
(statearr_48468_50933[(1)] = (12));

} else {
var statearr_48469_50934 = state_48450__$1;
(statearr_48469_50934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (9))){
var state_48450__$1 = state_48450;
var statearr_48472_50935 = state_48450__$1;
(statearr_48472_50935[(2)] = null);

(statearr_48472_50935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (5))){
var state_48450__$1 = state_48450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48473_50940 = state_48450__$1;
(statearr_48473_50940[(1)] = (8));

} else {
var statearr_48474_50941 = state_48450__$1;
(statearr_48474_50941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (14))){
var inst_48441 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
var statearr_48476_50946 = state_48450__$1;
(statearr_48476_50946[(2)] = inst_48441);

(statearr_48476_50946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (10))){
var inst_48433 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
var statearr_48477_50949 = state_48450__$1;
(statearr_48477_50949[(2)] = inst_48433);

(statearr_48477_50949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (8))){
var inst_48430 = cljs.core.async.close_BANG_(to);
var state_48450__$1 = state_48450;
var statearr_48480_50952 = state_48450__$1;
(statearr_48480_50952[(2)] = inst_48430);

(statearr_48480_50952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_48481 = [null,null,null,null,null,null,null,null];
(statearr_48481[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_48481[(1)] = (1));

return statearr_48481;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_48450){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48450);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48482){var ex__48087__auto__ = e48482;
var statearr_48483_50955 = state_48450;
(statearr_48483_50955[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48450[(4)]))){
var statearr_48484_50965 = state_48450;
(statearr_48484_50965[(1)] = cljs.core.first((state_48450[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50966 = state_48450;
state_48450 = G__50966;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_48450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_48450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48485 = f__48187__auto__();
(statearr_48485[(6)] = c__48186__auto___50921);

return statearr_48485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__48489){
var vec__48490 = p__48489;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48490,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48490,(1),null);
var job = vec__48490;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48186__auto___50969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48508){
var state_val_48509 = (state_48508[(1)]);
if((state_val_48509 === (1))){
var state_48508__$1 = state_48508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48508__$1,(2),res,v);
} else {
if((state_val_48509 === (2))){
var inst_48504 = (state_48508[(2)]);
var inst_48506 = cljs.core.async.close_BANG_(res);
var state_48508__$1 = (function (){var statearr_48510 = state_48508;
(statearr_48510[(7)] = inst_48504);

return statearr_48510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48508__$1,inst_48506);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0 = (function (){
var statearr_48511 = [null,null,null,null,null,null,null,null];
(statearr_48511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__);

(statearr_48511[(1)] = (1));

return statearr_48511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1 = (function (state_48508){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48508);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48512){var ex__48087__auto__ = e48512;
var statearr_48513_50971 = state_48508;
(statearr_48513_50971[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48508[(4)]))){
var statearr_48514_50972 = state_48508;
(statearr_48514_50972[(1)] = cljs.core.first((state_48508[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50973 = state_48508;
state_48508 = G__50973;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = function(state_48508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1.call(this,state_48508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48515 = f__48187__auto__();
(statearr_48515[(6)] = c__48186__auto___50969);

return statearr_48515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48516){
var vec__48517 = p__48516;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48517,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48517,(1),null);
var job = vec__48517;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___50975 = n;
var __50976 = (0);
while(true){
if((__50976 < n__5636__auto___50975)){
var G__48520_50978 = type;
var G__48520_50979__$1 = (((G__48520_50978 instanceof cljs.core.Keyword))?G__48520_50978.fqn:null);
switch (G__48520_50979__$1) {
case "compute":
var c__48186__auto___50982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50976,c__48186__auto___50982,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async){
return (function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = ((function (__50976,c__48186__auto___50982,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async){
return (function (state_48533){
var state_val_48534 = (state_48533[(1)]);
if((state_val_48534 === (1))){
var state_48533__$1 = state_48533;
var statearr_48535_50983 = state_48533__$1;
(statearr_48535_50983[(2)] = null);

(statearr_48535_50983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (2))){
var state_48533__$1 = state_48533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48533__$1,(4),jobs);
} else {
if((state_val_48534 === (3))){
var inst_48531 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48533__$1,inst_48531);
} else {
if((state_val_48534 === (4))){
var inst_48523 = (state_48533[(2)]);
var inst_48524 = process__$1(inst_48523);
var state_48533__$1 = state_48533;
if(cljs.core.truth_(inst_48524)){
var statearr_48536_50984 = state_48533__$1;
(statearr_48536_50984[(1)] = (5));

} else {
var statearr_48537_50985 = state_48533__$1;
(statearr_48537_50985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (5))){
var state_48533__$1 = state_48533;
var statearr_48538_50986 = state_48533__$1;
(statearr_48538_50986[(2)] = null);

(statearr_48538_50986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (6))){
var state_48533__$1 = state_48533;
var statearr_48539_50987 = state_48533__$1;
(statearr_48539_50987[(2)] = null);

(statearr_48539_50987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (7))){
var inst_48529 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
var statearr_48540_50988 = state_48533__$1;
(statearr_48540_50988[(2)] = inst_48529);

(statearr_48540_50988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50976,c__48186__auto___50982,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async))
;
return ((function (__50976,switch__48083__auto__,c__48186__auto___50982,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0 = (function (){
var statearr_48541 = [null,null,null,null,null,null,null];
(statearr_48541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__);

(statearr_48541[(1)] = (1));

return statearr_48541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1 = (function (state_48533){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48533);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48542){var ex__48087__auto__ = e48542;
var statearr_48543_50990 = state_48533;
(statearr_48543_50990[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48533[(4)]))){
var statearr_48544_50991 = state_48533;
(statearr_48544_50991[(1)] = cljs.core.first((state_48533[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50993 = state_48533;
state_48533 = G__50993;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = function(state_48533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1.call(this,state_48533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__;
})()
;})(__50976,switch__48083__auto__,c__48186__auto___50982,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async))
})();
var state__48188__auto__ = (function (){var statearr_48545 = f__48187__auto__();
(statearr_48545[(6)] = c__48186__auto___50982);

return statearr_48545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
});})(__50976,c__48186__auto___50982,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async))
);


break;
case "async":
var c__48186__auto___50994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50976,c__48186__auto___50994,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async){
return (function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = ((function (__50976,c__48186__auto___50994,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async){
return (function (state_48558){
var state_val_48559 = (state_48558[(1)]);
if((state_val_48559 === (1))){
var state_48558__$1 = state_48558;
var statearr_48561_50995 = state_48558__$1;
(statearr_48561_50995[(2)] = null);

(statearr_48561_50995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48559 === (2))){
var state_48558__$1 = state_48558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48558__$1,(4),jobs);
} else {
if((state_val_48559 === (3))){
var inst_48556 = (state_48558[(2)]);
var state_48558__$1 = state_48558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48558__$1,inst_48556);
} else {
if((state_val_48559 === (4))){
var inst_48548 = (state_48558[(2)]);
var inst_48549 = async(inst_48548);
var state_48558__$1 = state_48558;
if(cljs.core.truth_(inst_48549)){
var statearr_48563_50996 = state_48558__$1;
(statearr_48563_50996[(1)] = (5));

} else {
var statearr_48564_50999 = state_48558__$1;
(statearr_48564_50999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48559 === (5))){
var state_48558__$1 = state_48558;
var statearr_48565_51001 = state_48558__$1;
(statearr_48565_51001[(2)] = null);

(statearr_48565_51001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48559 === (6))){
var state_48558__$1 = state_48558;
var statearr_48566_51002 = state_48558__$1;
(statearr_48566_51002[(2)] = null);

(statearr_48566_51002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48559 === (7))){
var inst_48554 = (state_48558[(2)]);
var state_48558__$1 = state_48558;
var statearr_48567_51003 = state_48558__$1;
(statearr_48567_51003[(2)] = inst_48554);

(statearr_48567_51003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50976,c__48186__auto___50994,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async))
;
return ((function (__50976,switch__48083__auto__,c__48186__auto___50994,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0 = (function (){
var statearr_48568 = [null,null,null,null,null,null,null];
(statearr_48568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__);

(statearr_48568[(1)] = (1));

return statearr_48568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1 = (function (state_48558){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48558);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48569){var ex__48087__auto__ = e48569;
var statearr_48570_51013 = state_48558;
(statearr_48570_51013[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48558[(4)]))){
var statearr_48571_51019 = state_48558;
(statearr_48571_51019[(1)] = cljs.core.first((state_48558[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51020 = state_48558;
state_48558 = G__51020;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = function(state_48558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1.call(this,state_48558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__;
})()
;})(__50976,switch__48083__auto__,c__48186__auto___50994,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async))
})();
var state__48188__auto__ = (function (){var statearr_48572 = f__48187__auto__();
(statearr_48572[(6)] = c__48186__auto___50994);

return statearr_48572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
});})(__50976,c__48186__auto___50994,G__48520_50978,G__48520_50979__$1,n__5636__auto___50975,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48520_50979__$1)].join('')));

}

var G__51029 = (__50976 + (1));
__50976 = G__51029;
continue;
} else {
}
break;
}

var c__48186__auto___51030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48606){
var state_val_48607 = (state_48606[(1)]);
if((state_val_48607 === (7))){
var inst_48602 = (state_48606[(2)]);
var state_48606__$1 = state_48606;
var statearr_48608_51033 = state_48606__$1;
(statearr_48608_51033[(2)] = inst_48602);

(statearr_48608_51033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48607 === (1))){
var state_48606__$1 = state_48606;
var statearr_48609_51034 = state_48606__$1;
(statearr_48609_51034[(2)] = null);

(statearr_48609_51034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48607 === (4))){
var inst_48581 = (state_48606[(7)]);
var inst_48581__$1 = (state_48606[(2)]);
var inst_48582 = (inst_48581__$1 == null);
var state_48606__$1 = (function (){var statearr_48616 = state_48606;
(statearr_48616[(7)] = inst_48581__$1);

return statearr_48616;
})();
if(cljs.core.truth_(inst_48582)){
var statearr_48617_51035 = state_48606__$1;
(statearr_48617_51035[(1)] = (5));

} else {
var statearr_48618_51036 = state_48606__$1;
(statearr_48618_51036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48607 === (6))){
var inst_48586 = (state_48606[(8)]);
var inst_48581 = (state_48606[(7)]);
var inst_48586__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48587 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48594 = [inst_48581,inst_48586__$1];
var inst_48595 = (new cljs.core.PersistentVector(null,2,(5),inst_48587,inst_48594,null));
var state_48606__$1 = (function (){var statearr_48619 = state_48606;
(statearr_48619[(8)] = inst_48586__$1);

return statearr_48619;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48606__$1,(8),jobs,inst_48595);
} else {
if((state_val_48607 === (3))){
var inst_48604 = (state_48606[(2)]);
var state_48606__$1 = state_48606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48606__$1,inst_48604);
} else {
if((state_val_48607 === (2))){
var state_48606__$1 = state_48606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48606__$1,(4),from);
} else {
if((state_val_48607 === (9))){
var inst_48599 = (state_48606[(2)]);
var state_48606__$1 = (function (){var statearr_48626 = state_48606;
(statearr_48626[(9)] = inst_48599);

return statearr_48626;
})();
var statearr_48627_51037 = state_48606__$1;
(statearr_48627_51037[(2)] = null);

(statearr_48627_51037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48607 === (5))){
var inst_48584 = cljs.core.async.close_BANG_(jobs);
var state_48606__$1 = state_48606;
var statearr_48629_51038 = state_48606__$1;
(statearr_48629_51038[(2)] = inst_48584);

(statearr_48629_51038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48607 === (8))){
var inst_48586 = (state_48606[(8)]);
var inst_48597 = (state_48606[(2)]);
var state_48606__$1 = (function (){var statearr_48630 = state_48606;
(statearr_48630[(10)] = inst_48597);

return statearr_48630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48606__$1,(9),results,inst_48586);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0 = (function (){
var statearr_48631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__);

(statearr_48631[(1)] = (1));

return statearr_48631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1 = (function (state_48606){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48606);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48632){var ex__48087__auto__ = e48632;
var statearr_48633_51039 = state_48606;
(statearr_48633_51039[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48606[(4)]))){
var statearr_48634_51040 = state_48606;
(statearr_48634_51040[(1)] = cljs.core.first((state_48606[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51041 = state_48606;
state_48606 = G__51041;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = function(state_48606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1.call(this,state_48606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48635 = f__48187__auto__();
(statearr_48635[(6)] = c__48186__auto___51030);

return statearr_48635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


var c__48186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48676){
var state_val_48677 = (state_48676[(1)]);
if((state_val_48677 === (7))){
var inst_48669 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
var statearr_48678_51042 = state_48676__$1;
(statearr_48678_51042[(2)] = inst_48669);

(statearr_48678_51042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (20))){
var state_48676__$1 = state_48676;
var statearr_48680_51043 = state_48676__$1;
(statearr_48680_51043[(2)] = null);

(statearr_48680_51043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (1))){
var state_48676__$1 = state_48676;
var statearr_48684_51044 = state_48676__$1;
(statearr_48684_51044[(2)] = null);

(statearr_48684_51044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (4))){
var inst_48638 = (state_48676[(7)]);
var inst_48638__$1 = (state_48676[(2)]);
var inst_48639 = (inst_48638__$1 == null);
var state_48676__$1 = (function (){var statearr_48685 = state_48676;
(statearr_48685[(7)] = inst_48638__$1);

return statearr_48685;
})();
if(cljs.core.truth_(inst_48639)){
var statearr_48686_51045 = state_48676__$1;
(statearr_48686_51045[(1)] = (5));

} else {
var statearr_48687_51046 = state_48676__$1;
(statearr_48687_51046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (15))){
var inst_48651 = (state_48676[(8)]);
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48676__$1,(18),to,inst_48651);
} else {
if((state_val_48677 === (21))){
var inst_48664 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
var statearr_48688_51047 = state_48676__$1;
(statearr_48688_51047[(2)] = inst_48664);

(statearr_48688_51047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (13))){
var inst_48666 = (state_48676[(2)]);
var state_48676__$1 = (function (){var statearr_48689 = state_48676;
(statearr_48689[(9)] = inst_48666);

return statearr_48689;
})();
var statearr_48693_51048 = state_48676__$1;
(statearr_48693_51048[(2)] = null);

(statearr_48693_51048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (6))){
var inst_48638 = (state_48676[(7)]);
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48676__$1,(11),inst_48638);
} else {
if((state_val_48677 === (17))){
var inst_48659 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
if(cljs.core.truth_(inst_48659)){
var statearr_48694_51050 = state_48676__$1;
(statearr_48694_51050[(1)] = (19));

} else {
var statearr_48695_51051 = state_48676__$1;
(statearr_48695_51051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (3))){
var inst_48671 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48676__$1,inst_48671);
} else {
if((state_val_48677 === (12))){
var inst_48648 = (state_48676[(10)]);
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48676__$1,(14),inst_48648);
} else {
if((state_val_48677 === (2))){
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48676__$1,(4),results);
} else {
if((state_val_48677 === (19))){
var state_48676__$1 = state_48676;
var statearr_48702_51053 = state_48676__$1;
(statearr_48702_51053[(2)] = null);

(statearr_48702_51053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (11))){
var inst_48648 = (state_48676[(2)]);
var state_48676__$1 = (function (){var statearr_48703 = state_48676;
(statearr_48703[(10)] = inst_48648);

return statearr_48703;
})();
var statearr_48704_51062 = state_48676__$1;
(statearr_48704_51062[(2)] = null);

(statearr_48704_51062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (9))){
var state_48676__$1 = state_48676;
var statearr_48705_51063 = state_48676__$1;
(statearr_48705_51063[(2)] = null);

(statearr_48705_51063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (5))){
var state_48676__$1 = state_48676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48706_51064 = state_48676__$1;
(statearr_48706_51064[(1)] = (8));

} else {
var statearr_48707_51069 = state_48676__$1;
(statearr_48707_51069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (14))){
var inst_48653 = (state_48676[(11)]);
var inst_48651 = (state_48676[(8)]);
var inst_48651__$1 = (state_48676[(2)]);
var inst_48652 = (inst_48651__$1 == null);
var inst_48653__$1 = cljs.core.not(inst_48652);
var state_48676__$1 = (function (){var statearr_48708 = state_48676;
(statearr_48708[(11)] = inst_48653__$1);

(statearr_48708[(8)] = inst_48651__$1);

return statearr_48708;
})();
if(inst_48653__$1){
var statearr_48709_51078 = state_48676__$1;
(statearr_48709_51078[(1)] = (15));

} else {
var statearr_48710_51079 = state_48676__$1;
(statearr_48710_51079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (16))){
var inst_48653 = (state_48676[(11)]);
var state_48676__$1 = state_48676;
var statearr_48712_51080 = state_48676__$1;
(statearr_48712_51080[(2)] = inst_48653);

(statearr_48712_51080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (10))){
var inst_48645 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
var statearr_48714_51081 = state_48676__$1;
(statearr_48714_51081[(2)] = inst_48645);

(statearr_48714_51081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (18))){
var inst_48656 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
var statearr_48715_51082 = state_48676__$1;
(statearr_48715_51082[(2)] = inst_48656);

(statearr_48715_51082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (8))){
var inst_48642 = cljs.core.async.close_BANG_(to);
var state_48676__$1 = state_48676;
var statearr_48722_51083 = state_48676__$1;
(statearr_48722_51083[(2)] = inst_48642);

(statearr_48722_51083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0 = (function (){
var statearr_48723 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__);

(statearr_48723[(1)] = (1));

return statearr_48723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1 = (function (state_48676){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48676);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48727){var ex__48087__auto__ = e48727;
var statearr_48728_51084 = state_48676;
(statearr_48728_51084[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48676[(4)]))){
var statearr_48729_51085 = state_48676;
(statearr_48729_51085[(1)] = cljs.core.first((state_48676[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51087 = state_48676;
state_48676 = G__51087;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__ = function(state_48676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1.call(this,state_48676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48730 = f__48187__auto__();
(statearr_48730[(6)] = c__48186__auto__);

return statearr_48730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

return c__48186__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48732 = arguments.length;
switch (G__48732) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48743 = arguments.length;
switch (G__48743) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48745 = arguments.length;
switch (G__48745) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48186__auto___51092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48777){
var state_val_48778 = (state_48777[(1)]);
if((state_val_48778 === (7))){
var inst_48773 = (state_48777[(2)]);
var state_48777__$1 = state_48777;
var statearr_48785_51094 = state_48777__$1;
(statearr_48785_51094[(2)] = inst_48773);

(statearr_48785_51094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (1))){
var state_48777__$1 = state_48777;
var statearr_48786_51095 = state_48777__$1;
(statearr_48786_51095[(2)] = null);

(statearr_48786_51095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (4))){
var inst_48751 = (state_48777[(7)]);
var inst_48751__$1 = (state_48777[(2)]);
var inst_48755 = (inst_48751__$1 == null);
var state_48777__$1 = (function (){var statearr_48787 = state_48777;
(statearr_48787[(7)] = inst_48751__$1);

return statearr_48787;
})();
if(cljs.core.truth_(inst_48755)){
var statearr_48788_51097 = state_48777__$1;
(statearr_48788_51097[(1)] = (5));

} else {
var statearr_48789_51098 = state_48777__$1;
(statearr_48789_51098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (13))){
var state_48777__$1 = state_48777;
var statearr_48793_51099 = state_48777__$1;
(statearr_48793_51099[(2)] = null);

(statearr_48793_51099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (6))){
var inst_48751 = (state_48777[(7)]);
var inst_48760 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48751) : p.call(null,inst_48751));
var state_48777__$1 = state_48777;
if(cljs.core.truth_(inst_48760)){
var statearr_48794_51100 = state_48777__$1;
(statearr_48794_51100[(1)] = (9));

} else {
var statearr_48795_51101 = state_48777__$1;
(statearr_48795_51101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (3))){
var inst_48775 = (state_48777[(2)]);
var state_48777__$1 = state_48777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48777__$1,inst_48775);
} else {
if((state_val_48778 === (12))){
var state_48777__$1 = state_48777;
var statearr_48796_51102 = state_48777__$1;
(statearr_48796_51102[(2)] = null);

(statearr_48796_51102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (2))){
var state_48777__$1 = state_48777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48777__$1,(4),ch);
} else {
if((state_val_48778 === (11))){
var inst_48751 = (state_48777[(7)]);
var inst_48764 = (state_48777[(2)]);
var state_48777__$1 = state_48777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48777__$1,(8),inst_48764,inst_48751);
} else {
if((state_val_48778 === (9))){
var state_48777__$1 = state_48777;
var statearr_48797_51103 = state_48777__$1;
(statearr_48797_51103[(2)] = tc);

(statearr_48797_51103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (5))){
var inst_48757 = cljs.core.async.close_BANG_(tc);
var inst_48758 = cljs.core.async.close_BANG_(fc);
var state_48777__$1 = (function (){var statearr_48798 = state_48777;
(statearr_48798[(8)] = inst_48757);

return statearr_48798;
})();
var statearr_48799_51104 = state_48777__$1;
(statearr_48799_51104[(2)] = inst_48758);

(statearr_48799_51104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (14))){
var inst_48771 = (state_48777[(2)]);
var state_48777__$1 = state_48777;
var statearr_48800_51105 = state_48777__$1;
(statearr_48800_51105[(2)] = inst_48771);

(statearr_48800_51105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (10))){
var state_48777__$1 = state_48777;
var statearr_48801_51106 = state_48777__$1;
(statearr_48801_51106[(2)] = fc);

(statearr_48801_51106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48778 === (8))){
var inst_48766 = (state_48777[(2)]);
var state_48777__$1 = state_48777;
if(cljs.core.truth_(inst_48766)){
var statearr_48802_51107 = state_48777__$1;
(statearr_48802_51107[(1)] = (12));

} else {
var statearr_48803_51108 = state_48777__$1;
(statearr_48803_51108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_48804 = [null,null,null,null,null,null,null,null,null];
(statearr_48804[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_48804[(1)] = (1));

return statearr_48804;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_48777){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48777);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48808){var ex__48087__auto__ = e48808;
var statearr_48809_51110 = state_48777;
(statearr_48809_51110[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48777[(4)]))){
var statearr_48810_51111 = state_48777;
(statearr_48810_51111[(1)] = cljs.core.first((state_48777[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51112 = state_48777;
state_48777 = G__51112;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_48777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_48777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48812 = f__48187__auto__();
(statearr_48812[(6)] = c__48186__auto___51092);

return statearr_48812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48836){
var state_val_48837 = (state_48836[(1)]);
if((state_val_48837 === (7))){
var inst_48832 = (state_48836[(2)]);
var state_48836__$1 = state_48836;
var statearr_48838_51113 = state_48836__$1;
(statearr_48838_51113[(2)] = inst_48832);

(statearr_48838_51113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (1))){
var inst_48814 = init;
var inst_48815 = inst_48814;
var state_48836__$1 = (function (){var statearr_48839 = state_48836;
(statearr_48839[(7)] = inst_48815);

return statearr_48839;
})();
var statearr_48840_51114 = state_48836__$1;
(statearr_48840_51114[(2)] = null);

(statearr_48840_51114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (4))){
var inst_48819 = (state_48836[(8)]);
var inst_48819__$1 = (state_48836[(2)]);
var inst_48820 = (inst_48819__$1 == null);
var state_48836__$1 = (function (){var statearr_48841 = state_48836;
(statearr_48841[(8)] = inst_48819__$1);

return statearr_48841;
})();
if(cljs.core.truth_(inst_48820)){
var statearr_48842_51115 = state_48836__$1;
(statearr_48842_51115[(1)] = (5));

} else {
var statearr_48844_51116 = state_48836__$1;
(statearr_48844_51116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (6))){
var inst_48815 = (state_48836[(7)]);
var inst_48819 = (state_48836[(8)]);
var inst_48823 = (state_48836[(9)]);
var inst_48823__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48815,inst_48819) : f.call(null,inst_48815,inst_48819));
var inst_48824 = cljs.core.reduced_QMARK_(inst_48823__$1);
var state_48836__$1 = (function (){var statearr_48847 = state_48836;
(statearr_48847[(9)] = inst_48823__$1);

return statearr_48847;
})();
if(inst_48824){
var statearr_48848_51117 = state_48836__$1;
(statearr_48848_51117[(1)] = (8));

} else {
var statearr_48849_51122 = state_48836__$1;
(statearr_48849_51122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (3))){
var inst_48834 = (state_48836[(2)]);
var state_48836__$1 = state_48836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48836__$1,inst_48834);
} else {
if((state_val_48837 === (2))){
var state_48836__$1 = state_48836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48836__$1,(4),ch);
} else {
if((state_val_48837 === (9))){
var inst_48823 = (state_48836[(9)]);
var inst_48815 = inst_48823;
var state_48836__$1 = (function (){var statearr_48850 = state_48836;
(statearr_48850[(7)] = inst_48815);

return statearr_48850;
})();
var statearr_48851_51123 = state_48836__$1;
(statearr_48851_51123[(2)] = null);

(statearr_48851_51123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (5))){
var inst_48815 = (state_48836[(7)]);
var state_48836__$1 = state_48836;
var statearr_48852_51124 = state_48836__$1;
(statearr_48852_51124[(2)] = inst_48815);

(statearr_48852_51124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (10))){
var inst_48830 = (state_48836[(2)]);
var state_48836__$1 = state_48836;
var statearr_48853_51125 = state_48836__$1;
(statearr_48853_51125[(2)] = inst_48830);

(statearr_48853_51125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (8))){
var inst_48823 = (state_48836[(9)]);
var inst_48826 = cljs.core.deref(inst_48823);
var state_48836__$1 = state_48836;
var statearr_48854_51126 = state_48836__$1;
(statearr_48854_51126[(2)] = inst_48826);

(statearr_48854_51126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48084__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48084__auto____0 = (function (){
var statearr_48855 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48855[(0)] = cljs$core$async$reduce_$_state_machine__48084__auto__);

(statearr_48855[(1)] = (1));

return statearr_48855;
});
var cljs$core$async$reduce_$_state_machine__48084__auto____1 = (function (state_48836){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48836);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48856){var ex__48087__auto__ = e48856;
var statearr_48857_51127 = state_48836;
(statearr_48857_51127[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48836[(4)]))){
var statearr_48858_51128 = state_48836;
(statearr_48858_51128[(1)] = cljs.core.first((state_48836[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51129 = state_48836;
state_48836 = G__51129;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48084__auto__ = function(state_48836){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48084__auto____1.call(this,state_48836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48084__auto____0;
cljs$core$async$reduce_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48084__auto____1;
return cljs$core$async$reduce_$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48860 = f__48187__auto__();
(statearr_48860[(6)] = c__48186__auto__);

return statearr_48860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

return c__48186__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48867){
var state_val_48868 = (state_48867[(1)]);
if((state_val_48868 === (1))){
var inst_48862 = cljs.core.async.reduce(f__$1,init,ch);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48867__$1,(2),inst_48862);
} else {
if((state_val_48868 === (2))){
var inst_48864 = (state_48867[(2)]);
var inst_48865 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48864) : f__$1.call(null,inst_48864));
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48867__$1,inst_48865);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48084__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48084__auto____0 = (function (){
var statearr_48872 = [null,null,null,null,null,null,null];
(statearr_48872[(0)] = cljs$core$async$transduce_$_state_machine__48084__auto__);

(statearr_48872[(1)] = (1));

return statearr_48872;
});
var cljs$core$async$transduce_$_state_machine__48084__auto____1 = (function (state_48867){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48867);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48873){var ex__48087__auto__ = e48873;
var statearr_48874_51130 = state_48867;
(statearr_48874_51130[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48867[(4)]))){
var statearr_48875_51131 = state_48867;
(statearr_48875_51131[(1)] = cljs.core.first((state_48867[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51132 = state_48867;
state_48867 = G__51132;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48084__auto__ = function(state_48867){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48084__auto____1.call(this,state_48867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48084__auto____0;
cljs$core$async$transduce_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48084__auto____1;
return cljs$core$async$transduce_$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48876 = f__48187__auto__();
(statearr_48876[(6)] = c__48186__auto__);

return statearr_48876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

return c__48186__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48878 = arguments.length;
switch (G__48878) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_48903){
var state_val_48904 = (state_48903[(1)]);
if((state_val_48904 === (7))){
var inst_48885 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
var statearr_48905_51136 = state_48903__$1;
(statearr_48905_51136[(2)] = inst_48885);

(statearr_48905_51136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (1))){
var inst_48879 = cljs.core.seq(coll);
var inst_48880 = inst_48879;
var state_48903__$1 = (function (){var statearr_48909 = state_48903;
(statearr_48909[(7)] = inst_48880);

return statearr_48909;
})();
var statearr_48910_51138 = state_48903__$1;
(statearr_48910_51138[(2)] = null);

(statearr_48910_51138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (4))){
var inst_48880 = (state_48903[(7)]);
var inst_48883 = cljs.core.first(inst_48880);
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48903__$1,(7),ch,inst_48883);
} else {
if((state_val_48904 === (13))){
var inst_48897 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
var statearr_48917_51139 = state_48903__$1;
(statearr_48917_51139[(2)] = inst_48897);

(statearr_48917_51139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (6))){
var inst_48888 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
if(cljs.core.truth_(inst_48888)){
var statearr_48918_51140 = state_48903__$1;
(statearr_48918_51140[(1)] = (8));

} else {
var statearr_48919_51141 = state_48903__$1;
(statearr_48919_51141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (3))){
var inst_48901 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48903__$1,inst_48901);
} else {
if((state_val_48904 === (12))){
var state_48903__$1 = state_48903;
var statearr_48920_51142 = state_48903__$1;
(statearr_48920_51142[(2)] = null);

(statearr_48920_51142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (2))){
var inst_48880 = (state_48903[(7)]);
var state_48903__$1 = state_48903;
if(cljs.core.truth_(inst_48880)){
var statearr_48921_51144 = state_48903__$1;
(statearr_48921_51144[(1)] = (4));

} else {
var statearr_48922_51152 = state_48903__$1;
(statearr_48922_51152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (11))){
var inst_48894 = cljs.core.async.close_BANG_(ch);
var state_48903__$1 = state_48903;
var statearr_48923_51153 = state_48903__$1;
(statearr_48923_51153[(2)] = inst_48894);

(statearr_48923_51153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (9))){
var state_48903__$1 = state_48903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48924_51154 = state_48903__$1;
(statearr_48924_51154[(1)] = (11));

} else {
var statearr_48925_51155 = state_48903__$1;
(statearr_48925_51155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (5))){
var inst_48880 = (state_48903[(7)]);
var state_48903__$1 = state_48903;
var statearr_48926_51159 = state_48903__$1;
(statearr_48926_51159[(2)] = inst_48880);

(statearr_48926_51159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (10))){
var inst_48899 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
var statearr_48927_51160 = state_48903__$1;
(statearr_48927_51160[(2)] = inst_48899);

(statearr_48927_51160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (8))){
var inst_48880 = (state_48903[(7)]);
var inst_48890 = cljs.core.next(inst_48880);
var inst_48880__$1 = inst_48890;
var state_48903__$1 = (function (){var statearr_48928 = state_48903;
(statearr_48928[(7)] = inst_48880__$1);

return statearr_48928;
})();
var statearr_48929_51161 = state_48903__$1;
(statearr_48929_51161[(2)] = null);

(statearr_48929_51161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_48930 = [null,null,null,null,null,null,null,null];
(statearr_48930[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_48930[(1)] = (1));

return statearr_48930;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_48903){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_48903);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e48931){var ex__48087__auto__ = e48931;
var statearr_48932_51165 = state_48903;
(statearr_48932_51165[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_48903[(4)]))){
var statearr_48933_51166 = state_48903;
(statearr_48933_51166[(1)] = cljs.core.first((state_48903[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51167 = state_48903;
state_48903 = G__51167;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_48903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_48903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_48938 = f__48187__auto__();
(statearr_48938[(6)] = c__48186__auto__);

return statearr_48938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

return c__48186__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48944 = arguments.length;
switch (G__48944) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51172 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51172(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51186 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51186(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51191 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51191(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51193 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51193(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48952 = (function (ch,cs,meta48953){
this.ch = ch;
this.cs = cs;
this.meta48953 = meta48953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48954,meta48953__$1){
var self__ = this;
var _48954__$1 = this;
return (new cljs.core.async.t_cljs$core$async48952(self__.ch,self__.cs,meta48953__$1));
}));

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48954){
var self__ = this;
var _48954__$1 = this;
return self__.meta48953;
}));

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48952.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48953","meta48953",-351516265,null)], null);
}));

(cljs.core.async.t_cljs$core$async48952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48952");

(cljs.core.async.t_cljs$core$async48952.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48952.
 */
cljs.core.async.__GT_t_cljs$core$async48952 = (function cljs$core$async$__GT_t_cljs$core$async48952(ch,cs,meta48953){
return (new cljs.core.async.t_cljs$core$async48952(ch,cs,meta48953));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async48952(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48186__auto___51195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49091){
var state_val_49092 = (state_49091[(1)]);
if((state_val_49092 === (7))){
var inst_49087 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49093_51196 = state_49091__$1;
(statearr_49093_51196[(2)] = inst_49087);

(statearr_49093_51196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (20))){
var inst_48992 = (state_49091[(7)]);
var inst_49004 = cljs.core.first(inst_48992);
var inst_49005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49004,(0),null);
var inst_49006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49004,(1),null);
var state_49091__$1 = (function (){var statearr_49094 = state_49091;
(statearr_49094[(8)] = inst_49005);

return statearr_49094;
})();
if(cljs.core.truth_(inst_49006)){
var statearr_49095_51197 = state_49091__$1;
(statearr_49095_51197[(1)] = (22));

} else {
var statearr_49096_51198 = state_49091__$1;
(statearr_49096_51198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (27))){
var inst_48959 = (state_49091[(9)]);
var inst_49034 = (state_49091[(10)]);
var inst_49036 = (state_49091[(11)]);
var inst_49041 = (state_49091[(12)]);
var inst_49041__$1 = cljs.core._nth(inst_49034,inst_49036);
var inst_49042 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49041__$1,inst_48959,done);
var state_49091__$1 = (function (){var statearr_49097 = state_49091;
(statearr_49097[(12)] = inst_49041__$1);

return statearr_49097;
})();
if(cljs.core.truth_(inst_49042)){
var statearr_49098_51199 = state_49091__$1;
(statearr_49098_51199[(1)] = (30));

} else {
var statearr_49099_51200 = state_49091__$1;
(statearr_49099_51200[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (1))){
var state_49091__$1 = state_49091;
var statearr_49100_51201 = state_49091__$1;
(statearr_49100_51201[(2)] = null);

(statearr_49100_51201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (24))){
var inst_48992 = (state_49091[(7)]);
var inst_49011 = (state_49091[(2)]);
var inst_49012 = cljs.core.next(inst_48992);
var inst_48968 = inst_49012;
var inst_48969 = null;
var inst_48970 = (0);
var inst_48971 = (0);
var state_49091__$1 = (function (){var statearr_49101 = state_49091;
(statearr_49101[(13)] = inst_48970);

(statearr_49101[(14)] = inst_48971);

(statearr_49101[(15)] = inst_49011);

(statearr_49101[(16)] = inst_48968);

(statearr_49101[(17)] = inst_48969);

return statearr_49101;
})();
var statearr_49103_51202 = state_49091__$1;
(statearr_49103_51202[(2)] = null);

(statearr_49103_51202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (39))){
var state_49091__$1 = state_49091;
var statearr_49108_51203 = state_49091__$1;
(statearr_49108_51203[(2)] = null);

(statearr_49108_51203[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (4))){
var inst_48959 = (state_49091[(9)]);
var inst_48959__$1 = (state_49091[(2)]);
var inst_48960 = (inst_48959__$1 == null);
var state_49091__$1 = (function (){var statearr_49109 = state_49091;
(statearr_49109[(9)] = inst_48959__$1);

return statearr_49109;
})();
if(cljs.core.truth_(inst_48960)){
var statearr_49110_51204 = state_49091__$1;
(statearr_49110_51204[(1)] = (5));

} else {
var statearr_49111_51205 = state_49091__$1;
(statearr_49111_51205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (15))){
var inst_48970 = (state_49091[(13)]);
var inst_48971 = (state_49091[(14)]);
var inst_48968 = (state_49091[(16)]);
var inst_48969 = (state_49091[(17)]);
var inst_48986 = (state_49091[(2)]);
var inst_48988 = (inst_48971 + (1));
var tmp49105 = inst_48970;
var tmp49106 = inst_48968;
var tmp49107 = inst_48969;
var inst_48968__$1 = tmp49106;
var inst_48969__$1 = tmp49107;
var inst_48970__$1 = tmp49105;
var inst_48971__$1 = inst_48988;
var state_49091__$1 = (function (){var statearr_49112 = state_49091;
(statearr_49112[(13)] = inst_48970__$1);

(statearr_49112[(14)] = inst_48971__$1);

(statearr_49112[(18)] = inst_48986);

(statearr_49112[(16)] = inst_48968__$1);

(statearr_49112[(17)] = inst_48969__$1);

return statearr_49112;
})();
var statearr_49113_51206 = state_49091__$1;
(statearr_49113_51206[(2)] = null);

(statearr_49113_51206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (21))){
var inst_49015 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49117_51207 = state_49091__$1;
(statearr_49117_51207[(2)] = inst_49015);

(statearr_49117_51207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (31))){
var inst_49041 = (state_49091[(12)]);
var inst_49045 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49041);
var state_49091__$1 = state_49091;
var statearr_49120_51208 = state_49091__$1;
(statearr_49120_51208[(2)] = inst_49045);

(statearr_49120_51208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (32))){
var inst_49033 = (state_49091[(19)]);
var inst_49034 = (state_49091[(10)]);
var inst_49036 = (state_49091[(11)]);
var inst_49035 = (state_49091[(20)]);
var inst_49047 = (state_49091[(2)]);
var inst_49048 = (inst_49036 + (1));
var tmp49114 = inst_49033;
var tmp49115 = inst_49034;
var tmp49116 = inst_49035;
var inst_49033__$1 = tmp49114;
var inst_49034__$1 = tmp49115;
var inst_49035__$1 = tmp49116;
var inst_49036__$1 = inst_49048;
var state_49091__$1 = (function (){var statearr_49121 = state_49091;
(statearr_49121[(19)] = inst_49033__$1);

(statearr_49121[(10)] = inst_49034__$1);

(statearr_49121[(21)] = inst_49047);

(statearr_49121[(11)] = inst_49036__$1);

(statearr_49121[(20)] = inst_49035__$1);

return statearr_49121;
})();
var statearr_49122_51209 = state_49091__$1;
(statearr_49122_51209[(2)] = null);

(statearr_49122_51209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (40))){
var inst_49060 = (state_49091[(22)]);
var inst_49064 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49060);
var state_49091__$1 = state_49091;
var statearr_49125_51217 = state_49091__$1;
(statearr_49125_51217[(2)] = inst_49064);

(statearr_49125_51217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (33))){
var inst_49051 = (state_49091[(23)]);
var inst_49053 = cljs.core.chunked_seq_QMARK_(inst_49051);
var state_49091__$1 = state_49091;
if(inst_49053){
var statearr_49128_51219 = state_49091__$1;
(statearr_49128_51219[(1)] = (36));

} else {
var statearr_49130_51220 = state_49091__$1;
(statearr_49130_51220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (13))){
var inst_48980 = (state_49091[(24)]);
var inst_48983 = cljs.core.async.close_BANG_(inst_48980);
var state_49091__$1 = state_49091;
var statearr_49131_51222 = state_49091__$1;
(statearr_49131_51222[(2)] = inst_48983);

(statearr_49131_51222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (22))){
var inst_49005 = (state_49091[(8)]);
var inst_49008 = cljs.core.async.close_BANG_(inst_49005);
var state_49091__$1 = state_49091;
var statearr_49132_51223 = state_49091__$1;
(statearr_49132_51223[(2)] = inst_49008);

(statearr_49132_51223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (36))){
var inst_49051 = (state_49091[(23)]);
var inst_49055 = cljs.core.chunk_first(inst_49051);
var inst_49056 = cljs.core.chunk_rest(inst_49051);
var inst_49057 = cljs.core.count(inst_49055);
var inst_49033 = inst_49056;
var inst_49034 = inst_49055;
var inst_49035 = inst_49057;
var inst_49036 = (0);
var state_49091__$1 = (function (){var statearr_49134 = state_49091;
(statearr_49134[(19)] = inst_49033);

(statearr_49134[(10)] = inst_49034);

(statearr_49134[(11)] = inst_49036);

(statearr_49134[(20)] = inst_49035);

return statearr_49134;
})();
var statearr_49135_51224 = state_49091__$1;
(statearr_49135_51224[(2)] = null);

(statearr_49135_51224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (41))){
var inst_49051 = (state_49091[(23)]);
var inst_49066 = (state_49091[(2)]);
var inst_49067 = cljs.core.next(inst_49051);
var inst_49033 = inst_49067;
var inst_49034 = null;
var inst_49035 = (0);
var inst_49036 = (0);
var state_49091__$1 = (function (){var statearr_49136 = state_49091;
(statearr_49136[(19)] = inst_49033);

(statearr_49136[(25)] = inst_49066);

(statearr_49136[(10)] = inst_49034);

(statearr_49136[(11)] = inst_49036);

(statearr_49136[(20)] = inst_49035);

return statearr_49136;
})();
var statearr_49141_51225 = state_49091__$1;
(statearr_49141_51225[(2)] = null);

(statearr_49141_51225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (43))){
var state_49091__$1 = state_49091;
var statearr_49142_51226 = state_49091__$1;
(statearr_49142_51226[(2)] = null);

(statearr_49142_51226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (29))){
var inst_49075 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49143_51227 = state_49091__$1;
(statearr_49143_51227[(2)] = inst_49075);

(statearr_49143_51227[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (44))){
var inst_49084 = (state_49091[(2)]);
var state_49091__$1 = (function (){var statearr_49144 = state_49091;
(statearr_49144[(26)] = inst_49084);

return statearr_49144;
})();
var statearr_49145_51228 = state_49091__$1;
(statearr_49145_51228[(2)] = null);

(statearr_49145_51228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (6))){
var inst_49025 = (state_49091[(27)]);
var inst_49024 = cljs.core.deref(cs);
var inst_49025__$1 = cljs.core.keys(inst_49024);
var inst_49026 = cljs.core.count(inst_49025__$1);
var inst_49027 = cljs.core.reset_BANG_(dctr,inst_49026);
var inst_49032 = cljs.core.seq(inst_49025__$1);
var inst_49033 = inst_49032;
var inst_49034 = null;
var inst_49035 = (0);
var inst_49036 = (0);
var state_49091__$1 = (function (){var statearr_49146 = state_49091;
(statearr_49146[(27)] = inst_49025__$1);

(statearr_49146[(19)] = inst_49033);

(statearr_49146[(28)] = inst_49027);

(statearr_49146[(10)] = inst_49034);

(statearr_49146[(11)] = inst_49036);

(statearr_49146[(20)] = inst_49035);

return statearr_49146;
})();
var statearr_49147_51233 = state_49091__$1;
(statearr_49147_51233[(2)] = null);

(statearr_49147_51233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (28))){
var inst_49033 = (state_49091[(19)]);
var inst_49051 = (state_49091[(23)]);
var inst_49051__$1 = cljs.core.seq(inst_49033);
var state_49091__$1 = (function (){var statearr_49148 = state_49091;
(statearr_49148[(23)] = inst_49051__$1);

return statearr_49148;
})();
if(inst_49051__$1){
var statearr_49149_51234 = state_49091__$1;
(statearr_49149_51234[(1)] = (33));

} else {
var statearr_49150_51235 = state_49091__$1;
(statearr_49150_51235[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (25))){
var inst_49036 = (state_49091[(11)]);
var inst_49035 = (state_49091[(20)]);
var inst_49038 = (inst_49036 < inst_49035);
var inst_49039 = inst_49038;
var state_49091__$1 = state_49091;
if(cljs.core.truth_(inst_49039)){
var statearr_49151_51236 = state_49091__$1;
(statearr_49151_51236[(1)] = (27));

} else {
var statearr_49152_51239 = state_49091__$1;
(statearr_49152_51239[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (34))){
var state_49091__$1 = state_49091;
var statearr_49153_51240 = state_49091__$1;
(statearr_49153_51240[(2)] = null);

(statearr_49153_51240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (17))){
var state_49091__$1 = state_49091;
var statearr_49154_51243 = state_49091__$1;
(statearr_49154_51243[(2)] = null);

(statearr_49154_51243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (3))){
var inst_49089 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49091__$1,inst_49089);
} else {
if((state_val_49092 === (12))){
var inst_49020 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49155_51244 = state_49091__$1;
(statearr_49155_51244[(2)] = inst_49020);

(statearr_49155_51244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (2))){
var state_49091__$1 = state_49091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49091__$1,(4),ch);
} else {
if((state_val_49092 === (23))){
var state_49091__$1 = state_49091;
var statearr_49156_51245 = state_49091__$1;
(statearr_49156_51245[(2)] = null);

(statearr_49156_51245[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (35))){
var inst_49073 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49158_51246 = state_49091__$1;
(statearr_49158_51246[(2)] = inst_49073);

(statearr_49158_51246[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (19))){
var inst_48992 = (state_49091[(7)]);
var inst_48996 = cljs.core.chunk_first(inst_48992);
var inst_48997 = cljs.core.chunk_rest(inst_48992);
var inst_48998 = cljs.core.count(inst_48996);
var inst_48968 = inst_48997;
var inst_48969 = inst_48996;
var inst_48970 = inst_48998;
var inst_48971 = (0);
var state_49091__$1 = (function (){var statearr_49162 = state_49091;
(statearr_49162[(13)] = inst_48970);

(statearr_49162[(14)] = inst_48971);

(statearr_49162[(16)] = inst_48968);

(statearr_49162[(17)] = inst_48969);

return statearr_49162;
})();
var statearr_49163_51254 = state_49091__$1;
(statearr_49163_51254[(2)] = null);

(statearr_49163_51254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (11))){
var inst_48992 = (state_49091[(7)]);
var inst_48968 = (state_49091[(16)]);
var inst_48992__$1 = cljs.core.seq(inst_48968);
var state_49091__$1 = (function (){var statearr_49164 = state_49091;
(statearr_49164[(7)] = inst_48992__$1);

return statearr_49164;
})();
if(inst_48992__$1){
var statearr_49165_51261 = state_49091__$1;
(statearr_49165_51261[(1)] = (16));

} else {
var statearr_49166_51262 = state_49091__$1;
(statearr_49166_51262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (9))){
var inst_49022 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49167_51263 = state_49091__$1;
(statearr_49167_51263[(2)] = inst_49022);

(statearr_49167_51263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (5))){
var inst_48966 = cljs.core.deref(cs);
var inst_48967 = cljs.core.seq(inst_48966);
var inst_48968 = inst_48967;
var inst_48969 = null;
var inst_48970 = (0);
var inst_48971 = (0);
var state_49091__$1 = (function (){var statearr_49168 = state_49091;
(statearr_49168[(13)] = inst_48970);

(statearr_49168[(14)] = inst_48971);

(statearr_49168[(16)] = inst_48968);

(statearr_49168[(17)] = inst_48969);

return statearr_49168;
})();
var statearr_49169_51264 = state_49091__$1;
(statearr_49169_51264[(2)] = null);

(statearr_49169_51264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (14))){
var state_49091__$1 = state_49091;
var statearr_49170_51272 = state_49091__$1;
(statearr_49170_51272[(2)] = null);

(statearr_49170_51272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (45))){
var inst_49081 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49171_51274 = state_49091__$1;
(statearr_49171_51274[(2)] = inst_49081);

(statearr_49171_51274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (26))){
var inst_49025 = (state_49091[(27)]);
var inst_49077 = (state_49091[(2)]);
var inst_49078 = cljs.core.seq(inst_49025);
var state_49091__$1 = (function (){var statearr_49172 = state_49091;
(statearr_49172[(29)] = inst_49077);

return statearr_49172;
})();
if(inst_49078){
var statearr_49173_51275 = state_49091__$1;
(statearr_49173_51275[(1)] = (42));

} else {
var statearr_49174_51276 = state_49091__$1;
(statearr_49174_51276[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (16))){
var inst_48992 = (state_49091[(7)]);
var inst_48994 = cljs.core.chunked_seq_QMARK_(inst_48992);
var state_49091__$1 = state_49091;
if(inst_48994){
var statearr_49176_51277 = state_49091__$1;
(statearr_49176_51277[(1)] = (19));

} else {
var statearr_49177_51278 = state_49091__$1;
(statearr_49177_51278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (38))){
var inst_49070 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49178_51279 = state_49091__$1;
(statearr_49178_51279[(2)] = inst_49070);

(statearr_49178_51279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (30))){
var state_49091__$1 = state_49091;
var statearr_49179_51280 = state_49091__$1;
(statearr_49179_51280[(2)] = null);

(statearr_49179_51280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (10))){
var inst_48971 = (state_49091[(14)]);
var inst_48969 = (state_49091[(17)]);
var inst_48979 = cljs.core._nth(inst_48969,inst_48971);
var inst_48980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48979,(0),null);
var inst_48981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48979,(1),null);
var state_49091__$1 = (function (){var statearr_49180 = state_49091;
(statearr_49180[(24)] = inst_48980);

return statearr_49180;
})();
if(cljs.core.truth_(inst_48981)){
var statearr_49181_51285 = state_49091__$1;
(statearr_49181_51285[(1)] = (13));

} else {
var statearr_49182_51286 = state_49091__$1;
(statearr_49182_51286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (18))){
var inst_49018 = (state_49091[(2)]);
var state_49091__$1 = state_49091;
var statearr_49183_51293 = state_49091__$1;
(statearr_49183_51293[(2)] = inst_49018);

(statearr_49183_51293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (42))){
var state_49091__$1 = state_49091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49091__$1,(45),dchan);
} else {
if((state_val_49092 === (37))){
var inst_49060 = (state_49091[(22)]);
var inst_48959 = (state_49091[(9)]);
var inst_49051 = (state_49091[(23)]);
var inst_49060__$1 = cljs.core.first(inst_49051);
var inst_49061 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49060__$1,inst_48959,done);
var state_49091__$1 = (function (){var statearr_49184 = state_49091;
(statearr_49184[(22)] = inst_49060__$1);

return statearr_49184;
})();
if(cljs.core.truth_(inst_49061)){
var statearr_49185_51294 = state_49091__$1;
(statearr_49185_51294[(1)] = (39));

} else {
var statearr_49186_51295 = state_49091__$1;
(statearr_49186_51295[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49092 === (8))){
var inst_48970 = (state_49091[(13)]);
var inst_48971 = (state_49091[(14)]);
var inst_48973 = (inst_48971 < inst_48970);
var inst_48974 = inst_48973;
var state_49091__$1 = state_49091;
if(cljs.core.truth_(inst_48974)){
var statearr_49187_51296 = state_49091__$1;
(statearr_49187_51296[(1)] = (10));

} else {
var statearr_49188_51297 = state_49091__$1;
(statearr_49188_51297[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__48084__auto__ = null;
var cljs$core$async$mult_$_state_machine__48084__auto____0 = (function (){
var statearr_49189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49189[(0)] = cljs$core$async$mult_$_state_machine__48084__auto__);

(statearr_49189[(1)] = (1));

return statearr_49189;
});
var cljs$core$async$mult_$_state_machine__48084__auto____1 = (function (state_49091){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49091);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49190){var ex__48087__auto__ = e49190;
var statearr_49191_51298 = state_49091;
(statearr_49191_51298[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49091[(4)]))){
var statearr_49192_51299 = state_49091;
(statearr_49192_51299[(1)] = cljs.core.first((state_49091[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51300 = state_49091;
state_49091 = G__51300;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48084__auto__ = function(state_49091){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48084__auto____1.call(this,state_49091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48084__auto____0;
cljs$core$async$mult_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48084__auto____1;
return cljs$core$async$mult_$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49193 = f__48187__auto__();
(statearr_49193[(6)] = c__48186__auto___51195);

return statearr_49193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49195 = arguments.length;
switch (G__49195) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_51310 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51310(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51321 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51321(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51322 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51322(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51327 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51327(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51332 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51332(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51333 = arguments.length;
var i__5770__auto___51334 = (0);
while(true){
if((i__5770__auto___51334 < len__5769__auto___51333)){
args__5775__auto__.push((arguments[i__5770__auto___51334]));

var G__51339 = (i__5770__auto___51334 + (1));
i__5770__auto___51334 = G__51339;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49216){
var map__49217 = p__49216;
var map__49217__$1 = cljs.core.__destructure_map(map__49217);
var opts = map__49217__$1;
var statearr_49221_51340 = state;
(statearr_49221_51340[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49225_51341 = state;
(statearr_49225_51341[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_49229_51342 = state;
(statearr_49229_51342[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49211){
var G__49212 = cljs.core.first(seq49211);
var seq49211__$1 = cljs.core.next(seq49211);
var G__49213 = cljs.core.first(seq49211__$1);
var seq49211__$2 = cljs.core.next(seq49211__$1);
var G__49214 = cljs.core.first(seq49211__$2);
var seq49211__$3 = cljs.core.next(seq49211__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49212,G__49213,G__49214,seq49211__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49247 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49248){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49248 = meta49248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49249,meta49248__$1){
var self__ = this;
var _49249__$1 = this;
return (new cljs.core.async.t_cljs$core$async49247(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49248__$1));
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49249){
var self__ = this;
var _49249__$1 = this;
return self__.meta49248;
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49248","meta49248",-1610102594,null)], null);
}));

(cljs.core.async.t_cljs$core$async49247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49247");

(cljs.core.async.t_cljs$core$async49247.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49247.
 */
cljs.core.async.__GT_t_cljs$core$async49247 = (function cljs$core$async$__GT_t_cljs$core$async49247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49248){
return (new cljs.core.async.t_cljs$core$async49247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49248));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async49247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__48186__auto___51348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49337){
var state_val_49338 = (state_49337[(1)]);
if((state_val_49338 === (7))){
var inst_49294 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
if(cljs.core.truth_(inst_49294)){
var statearr_49342_51349 = state_49337__$1;
(statearr_49342_51349[(1)] = (8));

} else {
var statearr_49343_51350 = state_49337__$1;
(statearr_49343_51350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (20))){
var inst_49287 = (state_49337[(7)]);
var state_49337__$1 = state_49337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49337__$1,(23),out,inst_49287);
} else {
if((state_val_49338 === (1))){
var inst_49270 = calc_state();
var inst_49271 = cljs.core.__destructure_map(inst_49270);
var inst_49272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49271,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49271,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49271,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49275 = inst_49270;
var state_49337__$1 = (function (){var statearr_49344 = state_49337;
(statearr_49344[(8)] = inst_49275);

(statearr_49344[(9)] = inst_49273);

(statearr_49344[(10)] = inst_49274);

(statearr_49344[(11)] = inst_49272);

return statearr_49344;
})();
var statearr_49345_51351 = state_49337__$1;
(statearr_49345_51351[(2)] = null);

(statearr_49345_51351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (24))){
var inst_49278 = (state_49337[(12)]);
var inst_49275 = inst_49278;
var state_49337__$1 = (function (){var statearr_49350 = state_49337;
(statearr_49350[(8)] = inst_49275);

return statearr_49350;
})();
var statearr_49351_51352 = state_49337__$1;
(statearr_49351_51352[(2)] = null);

(statearr_49351_51352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (4))){
var inst_49287 = (state_49337[(7)]);
var inst_49289 = (state_49337[(13)]);
var inst_49286 = (state_49337[(2)]);
var inst_49287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49286,(0),null);
var inst_49288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49286,(1),null);
var inst_49289__$1 = (inst_49287__$1 == null);
var state_49337__$1 = (function (){var statearr_49352 = state_49337;
(statearr_49352[(7)] = inst_49287__$1);

(statearr_49352[(13)] = inst_49289__$1);

(statearr_49352[(14)] = inst_49288);

return statearr_49352;
})();
if(cljs.core.truth_(inst_49289__$1)){
var statearr_49353_51354 = state_49337__$1;
(statearr_49353_51354[(1)] = (5));

} else {
var statearr_49354_51355 = state_49337__$1;
(statearr_49354_51355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (15))){
var inst_49279 = (state_49337[(15)]);
var inst_49308 = (state_49337[(16)]);
var inst_49308__$1 = cljs.core.empty_QMARK_(inst_49279);
var state_49337__$1 = (function (){var statearr_49355 = state_49337;
(statearr_49355[(16)] = inst_49308__$1);

return statearr_49355;
})();
if(inst_49308__$1){
var statearr_49356_51357 = state_49337__$1;
(statearr_49356_51357[(1)] = (17));

} else {
var statearr_49357_51358 = state_49337__$1;
(statearr_49357_51358[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (21))){
var inst_49278 = (state_49337[(12)]);
var inst_49275 = inst_49278;
var state_49337__$1 = (function (){var statearr_49361 = state_49337;
(statearr_49361[(8)] = inst_49275);

return statearr_49361;
})();
var statearr_49362_51359 = state_49337__$1;
(statearr_49362_51359[(2)] = null);

(statearr_49362_51359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (13))){
var inst_49301 = (state_49337[(2)]);
var inst_49302 = calc_state();
var inst_49275 = inst_49302;
var state_49337__$1 = (function (){var statearr_49363 = state_49337;
(statearr_49363[(17)] = inst_49301);

(statearr_49363[(8)] = inst_49275);

return statearr_49363;
})();
var statearr_49364_51360 = state_49337__$1;
(statearr_49364_51360[(2)] = null);

(statearr_49364_51360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (22))){
var inst_49331 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
var statearr_49365_51361 = state_49337__$1;
(statearr_49365_51361[(2)] = inst_49331);

(statearr_49365_51361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (6))){
var inst_49288 = (state_49337[(14)]);
var inst_49292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49288,change);
var state_49337__$1 = state_49337;
var statearr_49369_51362 = state_49337__$1;
(statearr_49369_51362[(2)] = inst_49292);

(statearr_49369_51362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (25))){
var state_49337__$1 = state_49337;
var statearr_49370_51363 = state_49337__$1;
(statearr_49370_51363[(2)] = null);

(statearr_49370_51363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (17))){
var inst_49288 = (state_49337[(14)]);
var inst_49280 = (state_49337[(18)]);
var inst_49310 = (inst_49280.cljs$core$IFn$_invoke$arity$1 ? inst_49280.cljs$core$IFn$_invoke$arity$1(inst_49288) : inst_49280.call(null,inst_49288));
var inst_49311 = cljs.core.not(inst_49310);
var state_49337__$1 = state_49337;
var statearr_49374_51364 = state_49337__$1;
(statearr_49374_51364[(2)] = inst_49311);

(statearr_49374_51364[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (3))){
var inst_49335 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49337__$1,inst_49335);
} else {
if((state_val_49338 === (12))){
var state_49337__$1 = state_49337;
var statearr_49379_51367 = state_49337__$1;
(statearr_49379_51367[(2)] = null);

(statearr_49379_51367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (2))){
var inst_49278 = (state_49337[(12)]);
var inst_49275 = (state_49337[(8)]);
var inst_49278__$1 = cljs.core.__destructure_map(inst_49275);
var inst_49279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49278__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49278__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49278__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49337__$1 = (function (){var statearr_49380 = state_49337;
(statearr_49380[(15)] = inst_49279);

(statearr_49380[(12)] = inst_49278__$1);

(statearr_49380[(18)] = inst_49280);

return statearr_49380;
})();
return cljs.core.async.ioc_alts_BANG_(state_49337__$1,(4),inst_49281);
} else {
if((state_val_49338 === (23))){
var inst_49319 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
if(cljs.core.truth_(inst_49319)){
var statearr_49384_51369 = state_49337__$1;
(statearr_49384_51369[(1)] = (24));

} else {
var statearr_49385_51370 = state_49337__$1;
(statearr_49385_51370[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (19))){
var inst_49314 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
var statearr_49386_51372 = state_49337__$1;
(statearr_49386_51372[(2)] = inst_49314);

(statearr_49386_51372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (11))){
var inst_49288 = (state_49337[(14)]);
var inst_49298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49288);
var state_49337__$1 = state_49337;
var statearr_49387_51377 = state_49337__$1;
(statearr_49387_51377[(2)] = inst_49298);

(statearr_49387_51377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (9))){
var inst_49279 = (state_49337[(15)]);
var inst_49305 = (state_49337[(19)]);
var inst_49288 = (state_49337[(14)]);
var inst_49305__$1 = (inst_49279.cljs$core$IFn$_invoke$arity$1 ? inst_49279.cljs$core$IFn$_invoke$arity$1(inst_49288) : inst_49279.call(null,inst_49288));
var state_49337__$1 = (function (){var statearr_49388 = state_49337;
(statearr_49388[(19)] = inst_49305__$1);

return statearr_49388;
})();
if(cljs.core.truth_(inst_49305__$1)){
var statearr_49389_51378 = state_49337__$1;
(statearr_49389_51378[(1)] = (14));

} else {
var statearr_49390_51379 = state_49337__$1;
(statearr_49390_51379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (5))){
var inst_49289 = (state_49337[(13)]);
var state_49337__$1 = state_49337;
var statearr_49391_51380 = state_49337__$1;
(statearr_49391_51380[(2)] = inst_49289);

(statearr_49391_51380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (14))){
var inst_49305 = (state_49337[(19)]);
var state_49337__$1 = state_49337;
var statearr_49392_51381 = state_49337__$1;
(statearr_49392_51381[(2)] = inst_49305);

(statearr_49392_51381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (26))){
var inst_49324 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
var statearr_49394_51382 = state_49337__$1;
(statearr_49394_51382[(2)] = inst_49324);

(statearr_49394_51382[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (16))){
var inst_49316 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
if(cljs.core.truth_(inst_49316)){
var statearr_49395_51383 = state_49337__$1;
(statearr_49395_51383[(1)] = (20));

} else {
var statearr_49396_51384 = state_49337__$1;
(statearr_49396_51384[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (10))){
var inst_49333 = (state_49337[(2)]);
var state_49337__$1 = state_49337;
var statearr_49397_51386 = state_49337__$1;
(statearr_49397_51386[(2)] = inst_49333);

(statearr_49397_51386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (18))){
var inst_49308 = (state_49337[(16)]);
var state_49337__$1 = state_49337;
var statearr_49398_51388 = state_49337__$1;
(statearr_49398_51388[(2)] = inst_49308);

(statearr_49398_51388[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49338 === (8))){
var inst_49287 = (state_49337[(7)]);
var inst_49296 = (inst_49287 == null);
var state_49337__$1 = state_49337;
if(cljs.core.truth_(inst_49296)){
var statearr_49401_51390 = state_49337__$1;
(statearr_49401_51390[(1)] = (11));

} else {
var statearr_49402_51391 = state_49337__$1;
(statearr_49402_51391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__48084__auto__ = null;
var cljs$core$async$mix_$_state_machine__48084__auto____0 = (function (){
var statearr_49403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49403[(0)] = cljs$core$async$mix_$_state_machine__48084__auto__);

(statearr_49403[(1)] = (1));

return statearr_49403;
});
var cljs$core$async$mix_$_state_machine__48084__auto____1 = (function (state_49337){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49337);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49404){var ex__48087__auto__ = e49404;
var statearr_49405_51394 = state_49337;
(statearr_49405_51394[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49337[(4)]))){
var statearr_49406_51395 = state_49337;
(statearr_49406_51395[(1)] = cljs.core.first((state_49337[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51397 = state_49337;
state_49337 = G__51397;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48084__auto__ = function(state_49337){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48084__auto____1.call(this,state_49337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48084__auto____0;
cljs$core$async$mix_$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48084__auto____1;
return cljs$core$async$mix_$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49409 = f__48187__auto__();
(statearr_49409[(6)] = c__48186__auto___51348);

return statearr_49409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_51402 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_51402(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_51405 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_51405(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_51409 = (function() {
var G__51410 = null;
var G__51410__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__51410__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__51410 = function(p,v){
switch(arguments.length){
case 1:
return G__51410__1.call(this,p);
case 2:
return G__51410__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51410.cljs$core$IFn$_invoke$arity$1 = G__51410__1;
G__51410.cljs$core$IFn$_invoke$arity$2 = G__51410__2;
return G__51410;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49422 = arguments.length;
switch (G__49422) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51409(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51409(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49436 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49437){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49437 = meta49437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49438,meta49437__$1){
var self__ = this;
var _49438__$1 = this;
return (new cljs.core.async.t_cljs$core$async49436(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49437__$1));
}));

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49438){
var self__ = this;
var _49438__$1 = this;
return self__.meta49437;
}));

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49437","meta49437",-500220952,null)], null);
}));

(cljs.core.async.t_cljs$core$async49436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49436");

(cljs.core.async.t_cljs$core$async49436.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49436.
 */
cljs.core.async.__GT_t_cljs$core$async49436 = (function cljs$core$async$__GT_t_cljs$core$async49436(ch,topic_fn,buf_fn,mults,ensure_mult,meta49437){
return (new cljs.core.async.t_cljs$core$async49436(ch,topic_fn,buf_fn,mults,ensure_mult,meta49437));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49426 = arguments.length;
switch (G__49426) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49423_SHARP_){
if(cljs.core.truth_((p1__49423_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49423_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49423_SHARP_.call(null,topic)))){
return p1__49423_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49423_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async49436(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__48186__auto___51420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49520){
var state_val_49521 = (state_49520[(1)]);
if((state_val_49521 === (7))){
var inst_49516 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
var statearr_49526_51425 = state_49520__$1;
(statearr_49526_51425[(2)] = inst_49516);

(statearr_49526_51425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (20))){
var state_49520__$1 = state_49520;
var statearr_49527_51426 = state_49520__$1;
(statearr_49527_51426[(2)] = null);

(statearr_49527_51426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (1))){
var state_49520__$1 = state_49520;
var statearr_49528_51428 = state_49520__$1;
(statearr_49528_51428[(2)] = null);

(statearr_49528_51428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (24))){
var inst_49499 = (state_49520[(7)]);
var inst_49508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49499);
var state_49520__$1 = state_49520;
var statearr_49530_51433 = state_49520__$1;
(statearr_49530_51433[(2)] = inst_49508);

(statearr_49530_51433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (4))){
var inst_49444 = (state_49520[(8)]);
var inst_49444__$1 = (state_49520[(2)]);
var inst_49445 = (inst_49444__$1 == null);
var state_49520__$1 = (function (){var statearr_49531 = state_49520;
(statearr_49531[(8)] = inst_49444__$1);

return statearr_49531;
})();
if(cljs.core.truth_(inst_49445)){
var statearr_49532_51435 = state_49520__$1;
(statearr_49532_51435[(1)] = (5));

} else {
var statearr_49533_51439 = state_49520__$1;
(statearr_49533_51439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (15))){
var inst_49493 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
var statearr_49534_51440 = state_49520__$1;
(statearr_49534_51440[(2)] = inst_49493);

(statearr_49534_51440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (21))){
var inst_49513 = (state_49520[(2)]);
var state_49520__$1 = (function (){var statearr_49535 = state_49520;
(statearr_49535[(9)] = inst_49513);

return statearr_49535;
})();
var statearr_49536_51441 = state_49520__$1;
(statearr_49536_51441[(2)] = null);

(statearr_49536_51441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (13))){
var inst_49468 = (state_49520[(10)]);
var inst_49472 = cljs.core.chunked_seq_QMARK_(inst_49468);
var state_49520__$1 = state_49520;
if(inst_49472){
var statearr_49537_51442 = state_49520__$1;
(statearr_49537_51442[(1)] = (16));

} else {
var statearr_49538_51443 = state_49520__$1;
(statearr_49538_51443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (22))){
var inst_49505 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
if(cljs.core.truth_(inst_49505)){
var statearr_49540_51444 = state_49520__$1;
(statearr_49540_51444[(1)] = (23));

} else {
var statearr_49541_51445 = state_49520__$1;
(statearr_49541_51445[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (6))){
var inst_49501 = (state_49520[(11)]);
var inst_49444 = (state_49520[(8)]);
var inst_49499 = (state_49520[(7)]);
var inst_49499__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49444) : topic_fn.call(null,inst_49444));
var inst_49500 = cljs.core.deref(mults);
var inst_49501__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49500,inst_49499__$1);
var state_49520__$1 = (function (){var statearr_49543 = state_49520;
(statearr_49543[(11)] = inst_49501__$1);

(statearr_49543[(7)] = inst_49499__$1);

return statearr_49543;
})();
if(cljs.core.truth_(inst_49501__$1)){
var statearr_49544_51456 = state_49520__$1;
(statearr_49544_51456[(1)] = (19));

} else {
var statearr_49545_51457 = state_49520__$1;
(statearr_49545_51457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (25))){
var inst_49510 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
var statearr_49546_51463 = state_49520__$1;
(statearr_49546_51463[(2)] = inst_49510);

(statearr_49546_51463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (17))){
var inst_49468 = (state_49520[(10)]);
var inst_49484 = cljs.core.first(inst_49468);
var inst_49485 = cljs.core.async.muxch_STAR_(inst_49484);
var inst_49486 = cljs.core.async.close_BANG_(inst_49485);
var inst_49487 = cljs.core.next(inst_49468);
var inst_49454 = inst_49487;
var inst_49455 = null;
var inst_49456 = (0);
var inst_49457 = (0);
var state_49520__$1 = (function (){var statearr_49547 = state_49520;
(statearr_49547[(12)] = inst_49454);

(statearr_49547[(13)] = inst_49486);

(statearr_49547[(14)] = inst_49456);

(statearr_49547[(15)] = inst_49457);

(statearr_49547[(16)] = inst_49455);

return statearr_49547;
})();
var statearr_49548_51468 = state_49520__$1;
(statearr_49548_51468[(2)] = null);

(statearr_49548_51468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (3))){
var inst_49518 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49520__$1,inst_49518);
} else {
if((state_val_49521 === (12))){
var inst_49495 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
var statearr_49570_51469 = state_49520__$1;
(statearr_49570_51469[(2)] = inst_49495);

(statearr_49570_51469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (2))){
var state_49520__$1 = state_49520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49520__$1,(4),ch);
} else {
if((state_val_49521 === (23))){
var state_49520__$1 = state_49520;
var statearr_49571_51478 = state_49520__$1;
(statearr_49571_51478[(2)] = null);

(statearr_49571_51478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (19))){
var inst_49501 = (state_49520[(11)]);
var inst_49444 = (state_49520[(8)]);
var inst_49503 = cljs.core.async.muxch_STAR_(inst_49501);
var state_49520__$1 = state_49520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49520__$1,(22),inst_49503,inst_49444);
} else {
if((state_val_49521 === (11))){
var inst_49468 = (state_49520[(10)]);
var inst_49454 = (state_49520[(12)]);
var inst_49468__$1 = cljs.core.seq(inst_49454);
var state_49520__$1 = (function (){var statearr_49572 = state_49520;
(statearr_49572[(10)] = inst_49468__$1);

return statearr_49572;
})();
if(inst_49468__$1){
var statearr_49573_51482 = state_49520__$1;
(statearr_49573_51482[(1)] = (13));

} else {
var statearr_49574_51483 = state_49520__$1;
(statearr_49574_51483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (9))){
var inst_49497 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
var statearr_49575_51484 = state_49520__$1;
(statearr_49575_51484[(2)] = inst_49497);

(statearr_49575_51484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (5))){
var inst_49451 = cljs.core.deref(mults);
var inst_49452 = cljs.core.vals(inst_49451);
var inst_49453 = cljs.core.seq(inst_49452);
var inst_49454 = inst_49453;
var inst_49455 = null;
var inst_49456 = (0);
var inst_49457 = (0);
var state_49520__$1 = (function (){var statearr_49577 = state_49520;
(statearr_49577[(12)] = inst_49454);

(statearr_49577[(14)] = inst_49456);

(statearr_49577[(15)] = inst_49457);

(statearr_49577[(16)] = inst_49455);

return statearr_49577;
})();
var statearr_49578_51485 = state_49520__$1;
(statearr_49578_51485[(2)] = null);

(statearr_49578_51485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (14))){
var state_49520__$1 = state_49520;
var statearr_49582_51491 = state_49520__$1;
(statearr_49582_51491[(2)] = null);

(statearr_49582_51491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (16))){
var inst_49468 = (state_49520[(10)]);
var inst_49475 = cljs.core.chunk_first(inst_49468);
var inst_49476 = cljs.core.chunk_rest(inst_49468);
var inst_49479 = cljs.core.count(inst_49475);
var inst_49454 = inst_49476;
var inst_49455 = inst_49475;
var inst_49456 = inst_49479;
var inst_49457 = (0);
var state_49520__$1 = (function (){var statearr_49583 = state_49520;
(statearr_49583[(12)] = inst_49454);

(statearr_49583[(14)] = inst_49456);

(statearr_49583[(15)] = inst_49457);

(statearr_49583[(16)] = inst_49455);

return statearr_49583;
})();
var statearr_49584_51495 = state_49520__$1;
(statearr_49584_51495[(2)] = null);

(statearr_49584_51495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (10))){
var inst_49454 = (state_49520[(12)]);
var inst_49456 = (state_49520[(14)]);
var inst_49457 = (state_49520[(15)]);
var inst_49455 = (state_49520[(16)]);
var inst_49462 = cljs.core._nth(inst_49455,inst_49457);
var inst_49463 = cljs.core.async.muxch_STAR_(inst_49462);
var inst_49464 = cljs.core.async.close_BANG_(inst_49463);
var inst_49465 = (inst_49457 + (1));
var tmp49579 = inst_49454;
var tmp49580 = inst_49456;
var tmp49581 = inst_49455;
var inst_49454__$1 = tmp49579;
var inst_49455__$1 = tmp49581;
var inst_49456__$1 = tmp49580;
var inst_49457__$1 = inst_49465;
var state_49520__$1 = (function (){var statearr_49585 = state_49520;
(statearr_49585[(12)] = inst_49454__$1);

(statearr_49585[(14)] = inst_49456__$1);

(statearr_49585[(17)] = inst_49464);

(statearr_49585[(15)] = inst_49457__$1);

(statearr_49585[(16)] = inst_49455__$1);

return statearr_49585;
})();
var statearr_49586_51499 = state_49520__$1;
(statearr_49586_51499[(2)] = null);

(statearr_49586_51499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (18))){
var inst_49490 = (state_49520[(2)]);
var state_49520__$1 = state_49520;
var statearr_49587_51500 = state_49520__$1;
(statearr_49587_51500[(2)] = inst_49490);

(statearr_49587_51500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49521 === (8))){
var inst_49456 = (state_49520[(14)]);
var inst_49457 = (state_49520[(15)]);
var inst_49459 = (inst_49457 < inst_49456);
var inst_49460 = inst_49459;
var state_49520__$1 = state_49520;
if(cljs.core.truth_(inst_49460)){
var statearr_49588_51501 = state_49520__$1;
(statearr_49588_51501[(1)] = (10));

} else {
var statearr_49589_51505 = state_49520__$1;
(statearr_49589_51505[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_49590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49590[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_49590[(1)] = (1));

return statearr_49590;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_49520){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49520);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49591){var ex__48087__auto__ = e49591;
var statearr_49592_51507 = state_49520;
(statearr_49592_51507[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49520[(4)]))){
var statearr_49593_51511 = state_49520;
(statearr_49593_51511[(1)] = cljs.core.first((state_49520[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51512 = state_49520;
state_49520 = G__51512;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_49520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_49520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49594 = f__48187__auto__();
(statearr_49594[(6)] = c__48186__auto___51420);

return statearr_49594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49596 = arguments.length;
switch (G__49596) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49601 = arguments.length;
switch (G__49601) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49606 = arguments.length;
switch (G__49606) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__48186__auto___51550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49656){
var state_val_49657 = (state_49656[(1)]);
if((state_val_49657 === (7))){
var state_49656__$1 = state_49656;
var statearr_49664_51556 = state_49656__$1;
(statearr_49664_51556[(2)] = null);

(statearr_49664_51556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (1))){
var state_49656__$1 = state_49656;
var statearr_49665_51563 = state_49656__$1;
(statearr_49665_51563[(2)] = null);

(statearr_49665_51563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (4))){
var inst_49615 = (state_49656[(7)]);
var inst_49614 = (state_49656[(8)]);
var inst_49617 = (inst_49615 < inst_49614);
var state_49656__$1 = state_49656;
if(cljs.core.truth_(inst_49617)){
var statearr_49666_51570 = state_49656__$1;
(statearr_49666_51570[(1)] = (6));

} else {
var statearr_49667_51571 = state_49656__$1;
(statearr_49667_51571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (15))){
var inst_49642 = (state_49656[(9)]);
var inst_49647 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49642);
var state_49656__$1 = state_49656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49656__$1,(17),out,inst_49647);
} else {
if((state_val_49657 === (13))){
var inst_49642 = (state_49656[(9)]);
var inst_49642__$1 = (state_49656[(2)]);
var inst_49643 = cljs.core.some(cljs.core.nil_QMARK_,inst_49642__$1);
var state_49656__$1 = (function (){var statearr_49673 = state_49656;
(statearr_49673[(9)] = inst_49642__$1);

return statearr_49673;
})();
if(cljs.core.truth_(inst_49643)){
var statearr_49674_51576 = state_49656__$1;
(statearr_49674_51576[(1)] = (14));

} else {
var statearr_49675_51577 = state_49656__$1;
(statearr_49675_51577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (6))){
var state_49656__$1 = state_49656;
var statearr_49676_51579 = state_49656__$1;
(statearr_49676_51579[(2)] = null);

(statearr_49676_51579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (17))){
var inst_49649 = (state_49656[(2)]);
var state_49656__$1 = (function (){var statearr_49684 = state_49656;
(statearr_49684[(10)] = inst_49649);

return statearr_49684;
})();
var statearr_49685_51585 = state_49656__$1;
(statearr_49685_51585[(2)] = null);

(statearr_49685_51585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (3))){
var inst_49654 = (state_49656[(2)]);
var state_49656__$1 = state_49656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49656__$1,inst_49654);
} else {
if((state_val_49657 === (12))){
var _ = (function (){var statearr_49686 = state_49656;
(statearr_49686[(4)] = cljs.core.rest((state_49656[(4)])));

return statearr_49686;
})();
var state_49656__$1 = state_49656;
var ex49681 = (state_49656__$1[(2)]);
var statearr_49687_51596 = state_49656__$1;
(statearr_49687_51596[(5)] = ex49681);


if((ex49681 instanceof Object)){
var statearr_49688_51601 = state_49656__$1;
(statearr_49688_51601[(1)] = (11));

(statearr_49688_51601[(5)] = null);

} else {
throw ex49681;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (2))){
var inst_49613 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49614 = cnt;
var inst_49615 = (0);
var state_49656__$1 = (function (){var statearr_49695 = state_49656;
(statearr_49695[(11)] = inst_49613);

(statearr_49695[(7)] = inst_49615);

(statearr_49695[(8)] = inst_49614);

return statearr_49695;
})();
var statearr_49700_51603 = state_49656__$1;
(statearr_49700_51603[(2)] = null);

(statearr_49700_51603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (11))){
var inst_49621 = (state_49656[(2)]);
var inst_49622 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49656__$1 = (function (){var statearr_49703 = state_49656;
(statearr_49703[(12)] = inst_49621);

return statearr_49703;
})();
var statearr_49707_51604 = state_49656__$1;
(statearr_49707_51604[(2)] = inst_49622);

(statearr_49707_51604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (9))){
var inst_49615 = (state_49656[(7)]);
var _ = (function (){var statearr_49708 = state_49656;
(statearr_49708[(4)] = cljs.core.cons((12),(state_49656[(4)])));

return statearr_49708;
})();
var inst_49628 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49615) : chs__$1.call(null,inst_49615));
var inst_49629 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49615) : done.call(null,inst_49615));
var inst_49630 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49628,inst_49629);
var ___$1 = (function (){var statearr_49710 = state_49656;
(statearr_49710[(4)] = cljs.core.rest((state_49656[(4)])));

return statearr_49710;
})();
var state_49656__$1 = state_49656;
var statearr_49712_51612 = state_49656__$1;
(statearr_49712_51612[(2)] = inst_49630);

(statearr_49712_51612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (5))){
var inst_49640 = (state_49656[(2)]);
var state_49656__$1 = (function (){var statearr_49713 = state_49656;
(statearr_49713[(13)] = inst_49640);

return statearr_49713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49656__$1,(13),dchan);
} else {
if((state_val_49657 === (14))){
var inst_49645 = cljs.core.async.close_BANG_(out);
var state_49656__$1 = state_49656;
var statearr_49714_51613 = state_49656__$1;
(statearr_49714_51613[(2)] = inst_49645);

(statearr_49714_51613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (16))){
var inst_49652 = (state_49656[(2)]);
var state_49656__$1 = state_49656;
var statearr_49715_51614 = state_49656__$1;
(statearr_49715_51614[(2)] = inst_49652);

(statearr_49715_51614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (10))){
var inst_49615 = (state_49656[(7)]);
var inst_49633 = (state_49656[(2)]);
var inst_49634 = (inst_49615 + (1));
var inst_49615__$1 = inst_49634;
var state_49656__$1 = (function (){var statearr_49716 = state_49656;
(statearr_49716[(14)] = inst_49633);

(statearr_49716[(7)] = inst_49615__$1);

return statearr_49716;
})();
var statearr_49718_51619 = state_49656__$1;
(statearr_49718_51619[(2)] = null);

(statearr_49718_51619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49657 === (8))){
var inst_49638 = (state_49656[(2)]);
var state_49656__$1 = state_49656;
var statearr_49722_51620 = state_49656__$1;
(statearr_49722_51620[(2)] = inst_49638);

(statearr_49722_51620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_49723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49723[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_49723[(1)] = (1));

return statearr_49723;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_49656){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49656);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49724){var ex__48087__auto__ = e49724;
var statearr_49725_51622 = state_49656;
(statearr_49725_51622[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49656[(4)]))){
var statearr_49726_51623 = state_49656;
(statearr_49726_51623[(1)] = cljs.core.first((state_49656[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51628 = state_49656;
state_49656 = G__51628;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_49656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_49656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49730 = f__48187__auto__();
(statearr_49730[(6)] = c__48186__auto___51550);

return statearr_49730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49736 = arguments.length;
switch (G__49736) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48186__auto___51631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49774){
var state_val_49775 = (state_49774[(1)]);
if((state_val_49775 === (7))){
var inst_49753 = (state_49774[(7)]);
var inst_49754 = (state_49774[(8)]);
var inst_49753__$1 = (state_49774[(2)]);
var inst_49754__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49753__$1,(0),null);
var inst_49755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49753__$1,(1),null);
var inst_49756 = (inst_49754__$1 == null);
var state_49774__$1 = (function (){var statearr_49776 = state_49774;
(statearr_49776[(9)] = inst_49755);

(statearr_49776[(7)] = inst_49753__$1);

(statearr_49776[(8)] = inst_49754__$1);

return statearr_49776;
})();
if(cljs.core.truth_(inst_49756)){
var statearr_49777_51632 = state_49774__$1;
(statearr_49777_51632[(1)] = (8));

} else {
var statearr_49778_51633 = state_49774__$1;
(statearr_49778_51633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (1))){
var inst_49743 = cljs.core.vec(chs);
var inst_49744 = inst_49743;
var state_49774__$1 = (function (){var statearr_49779 = state_49774;
(statearr_49779[(10)] = inst_49744);

return statearr_49779;
})();
var statearr_49780_51635 = state_49774__$1;
(statearr_49780_51635[(2)] = null);

(statearr_49780_51635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (4))){
var inst_49744 = (state_49774[(10)]);
var state_49774__$1 = state_49774;
return cljs.core.async.ioc_alts_BANG_(state_49774__$1,(7),inst_49744);
} else {
if((state_val_49775 === (6))){
var inst_49770 = (state_49774[(2)]);
var state_49774__$1 = state_49774;
var statearr_49781_51636 = state_49774__$1;
(statearr_49781_51636[(2)] = inst_49770);

(statearr_49781_51636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (3))){
var inst_49772 = (state_49774[(2)]);
var state_49774__$1 = state_49774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49774__$1,inst_49772);
} else {
if((state_val_49775 === (2))){
var inst_49744 = (state_49774[(10)]);
var inst_49746 = cljs.core.count(inst_49744);
var inst_49747 = (inst_49746 > (0));
var state_49774__$1 = state_49774;
if(cljs.core.truth_(inst_49747)){
var statearr_49785_51638 = state_49774__$1;
(statearr_49785_51638[(1)] = (4));

} else {
var statearr_49786_51642 = state_49774__$1;
(statearr_49786_51642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (11))){
var inst_49744 = (state_49774[(10)]);
var inst_49763 = (state_49774[(2)]);
var tmp49782 = inst_49744;
var inst_49744__$1 = tmp49782;
var state_49774__$1 = (function (){var statearr_49791 = state_49774;
(statearr_49791[(11)] = inst_49763);

(statearr_49791[(10)] = inst_49744__$1);

return statearr_49791;
})();
var statearr_49792_51643 = state_49774__$1;
(statearr_49792_51643[(2)] = null);

(statearr_49792_51643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (9))){
var inst_49754 = (state_49774[(8)]);
var state_49774__$1 = state_49774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49774__$1,(11),out,inst_49754);
} else {
if((state_val_49775 === (5))){
var inst_49768 = cljs.core.async.close_BANG_(out);
var state_49774__$1 = state_49774;
var statearr_49794_51644 = state_49774__$1;
(statearr_49794_51644[(2)] = inst_49768);

(statearr_49794_51644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (10))){
var inst_49766 = (state_49774[(2)]);
var state_49774__$1 = state_49774;
var statearr_49795_51646 = state_49774__$1;
(statearr_49795_51646[(2)] = inst_49766);

(statearr_49795_51646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49775 === (8))){
var inst_49755 = (state_49774[(9)]);
var inst_49753 = (state_49774[(7)]);
var inst_49754 = (state_49774[(8)]);
var inst_49744 = (state_49774[(10)]);
var inst_49758 = (function (){var cs = inst_49744;
var vec__49749 = inst_49753;
var v = inst_49754;
var c = inst_49755;
return (function (p1__49734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49734_SHARP_);
});
})();
var inst_49759 = cljs.core.filterv(inst_49758,inst_49744);
var inst_49744__$1 = inst_49759;
var state_49774__$1 = (function (){var statearr_49796 = state_49774;
(statearr_49796[(10)] = inst_49744__$1);

return statearr_49796;
})();
var statearr_49797_51650 = state_49774__$1;
(statearr_49797_51650[(2)] = null);

(statearr_49797_51650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_49798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49798[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_49798[(1)] = (1));

return statearr_49798;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_49774){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49774);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49799){var ex__48087__auto__ = e49799;
var statearr_49800_51651 = state_49774;
(statearr_49800_51651[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49774[(4)]))){
var statearr_49801_51652 = state_49774;
(statearr_49801_51652[(1)] = cljs.core.first((state_49774[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51653 = state_49774;
state_49774 = G__51653;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_49774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_49774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49802 = f__48187__auto__();
(statearr_49802[(6)] = c__48186__auto___51631);

return statearr_49802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49807 = arguments.length;
switch (G__49807) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48186__auto___51660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49839){
var state_val_49840 = (state_49839[(1)]);
if((state_val_49840 === (7))){
var inst_49821 = (state_49839[(7)]);
var inst_49821__$1 = (state_49839[(2)]);
var inst_49822 = (inst_49821__$1 == null);
var inst_49823 = cljs.core.not(inst_49822);
var state_49839__$1 = (function (){var statearr_49847 = state_49839;
(statearr_49847[(7)] = inst_49821__$1);

return statearr_49847;
})();
if(inst_49823){
var statearr_49848_51661 = state_49839__$1;
(statearr_49848_51661[(1)] = (8));

} else {
var statearr_49849_51662 = state_49839__$1;
(statearr_49849_51662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (1))){
var inst_49815 = (0);
var state_49839__$1 = (function (){var statearr_49851 = state_49839;
(statearr_49851[(8)] = inst_49815);

return statearr_49851;
})();
var statearr_49852_51663 = state_49839__$1;
(statearr_49852_51663[(2)] = null);

(statearr_49852_51663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (4))){
var state_49839__$1 = state_49839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49839__$1,(7),ch);
} else {
if((state_val_49840 === (6))){
var inst_49834 = (state_49839[(2)]);
var state_49839__$1 = state_49839;
var statearr_49853_51665 = state_49839__$1;
(statearr_49853_51665[(2)] = inst_49834);

(statearr_49853_51665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (3))){
var inst_49836 = (state_49839[(2)]);
var inst_49837 = cljs.core.async.close_BANG_(out);
var state_49839__$1 = (function (){var statearr_49854 = state_49839;
(statearr_49854[(9)] = inst_49836);

return statearr_49854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49839__$1,inst_49837);
} else {
if((state_val_49840 === (2))){
var inst_49815 = (state_49839[(8)]);
var inst_49817 = (inst_49815 < n);
var state_49839__$1 = state_49839;
if(cljs.core.truth_(inst_49817)){
var statearr_49861_51667 = state_49839__$1;
(statearr_49861_51667[(1)] = (4));

} else {
var statearr_49862_51668 = state_49839__$1;
(statearr_49862_51668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (11))){
var inst_49815 = (state_49839[(8)]);
var inst_49826 = (state_49839[(2)]);
var inst_49827 = (inst_49815 + (1));
var inst_49815__$1 = inst_49827;
var state_49839__$1 = (function (){var statearr_49863 = state_49839;
(statearr_49863[(10)] = inst_49826);

(statearr_49863[(8)] = inst_49815__$1);

return statearr_49863;
})();
var statearr_49864_51672 = state_49839__$1;
(statearr_49864_51672[(2)] = null);

(statearr_49864_51672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (9))){
var state_49839__$1 = state_49839;
var statearr_49866_51677 = state_49839__$1;
(statearr_49866_51677[(2)] = null);

(statearr_49866_51677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (5))){
var state_49839__$1 = state_49839;
var statearr_49867_51678 = state_49839__$1;
(statearr_49867_51678[(2)] = null);

(statearr_49867_51678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (10))){
var inst_49831 = (state_49839[(2)]);
var state_49839__$1 = state_49839;
var statearr_49868_51679 = state_49839__$1;
(statearr_49868_51679[(2)] = inst_49831);

(statearr_49868_51679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49840 === (8))){
var inst_49821 = (state_49839[(7)]);
var state_49839__$1 = state_49839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49839__$1,(11),out,inst_49821);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_49869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49869[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_49869[(1)] = (1));

return statearr_49869;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_49839){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49839);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49870){var ex__48087__auto__ = e49870;
var statearr_49871_51680 = state_49839;
(statearr_49871_51680[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49839[(4)]))){
var statearr_49872_51681 = state_49839;
(statearr_49872_51681[(1)] = cljs.core.first((state_49839[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51682 = state_49839;
state_49839 = G__51682;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_49839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_49839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49873 = f__48187__auto__();
(statearr_49873[(6)] = c__48186__auto___51660);

return statearr_49873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49890 = (function (f,ch,meta49876,_,fn1,meta49891){
this.f = f;
this.ch = ch;
this.meta49876 = meta49876;
this._ = _;
this.fn1 = fn1;
this.meta49891 = meta49891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49892,meta49891__$1){
var self__ = this;
var _49892__$1 = this;
return (new cljs.core.async.t_cljs$core$async49890(self__.f,self__.ch,self__.meta49876,self__._,self__.fn1,meta49891__$1));
}));

(cljs.core.async.t_cljs$core$async49890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49892){
var self__ = this;
var _49892__$1 = this;
return self__.meta49891;
}));

(cljs.core.async.t_cljs$core$async49890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49874_SHARP_){
var G__49904 = (((p1__49874_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49874_SHARP_) : self__.f.call(null,p1__49874_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49904) : f1.call(null,G__49904));
});
}));

(cljs.core.async.t_cljs$core$async49890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49876","meta49876",345738250,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49875","cljs.core.async/t_cljs$core$async49875",-419860511,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49891","meta49891",2109417105,null)], null);
}));

(cljs.core.async.t_cljs$core$async49890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49890");

(cljs.core.async.t_cljs$core$async49890.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49890.
 */
cljs.core.async.__GT_t_cljs$core$async49890 = (function cljs$core$async$__GT_t_cljs$core$async49890(f,ch,meta49876,_,fn1,meta49891){
return (new cljs.core.async.t_cljs$core$async49890(f,ch,meta49876,_,fn1,meta49891));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49875 = (function (f,ch,meta49876){
this.f = f;
this.ch = ch;
this.meta49876 = meta49876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49877,meta49876__$1){
var self__ = this;
var _49877__$1 = this;
return (new cljs.core.async.t_cljs$core$async49875(self__.f,self__.ch,meta49876__$1));
}));

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49877){
var self__ = this;
var _49877__$1 = this;
return self__.meta49876;
}));

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async49890(self__.f,self__.ch,self__.meta49876,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49911 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49911) : self__.f.call(null,G__49911));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49876","meta49876",345738250,null)], null);
}));

(cljs.core.async.t_cljs$core$async49875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49875");

(cljs.core.async.t_cljs$core$async49875.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49875.
 */
cljs.core.async.__GT_t_cljs$core$async49875 = (function cljs$core$async$__GT_t_cljs$core$async49875(f,ch,meta49876){
return (new cljs.core.async.t_cljs$core$async49875(f,ch,meta49876));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async49875(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49919 = (function (f,ch,meta49920){
this.f = f;
this.ch = ch;
this.meta49920 = meta49920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49921,meta49920__$1){
var self__ = this;
var _49921__$1 = this;
return (new cljs.core.async.t_cljs$core$async49919(self__.f,self__.ch,meta49920__$1));
}));

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49921){
var self__ = this;
var _49921__$1 = this;
return self__.meta49920;
}));

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49920","meta49920",452735324,null)], null);
}));

(cljs.core.async.t_cljs$core$async49919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49919");

(cljs.core.async.t_cljs$core$async49919.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49919.
 */
cljs.core.async.__GT_t_cljs$core$async49919 = (function cljs$core$async$__GT_t_cljs$core$async49919(f,ch,meta49920){
return (new cljs.core.async.t_cljs$core$async49919(f,ch,meta49920));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async49919(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49929 = (function (p,ch,meta49930){
this.p = p;
this.ch = ch;
this.meta49930 = meta49930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49931,meta49930__$1){
var self__ = this;
var _49931__$1 = this;
return (new cljs.core.async.t_cljs$core$async49929(self__.p,self__.ch,meta49930__$1));
}));

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49931){
var self__ = this;
var _49931__$1 = this;
return self__.meta49930;
}));

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49930","meta49930",-908235211,null)], null);
}));

(cljs.core.async.t_cljs$core$async49929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49929");

(cljs.core.async.t_cljs$core$async49929.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49929.
 */
cljs.core.async.__GT_t_cljs$core$async49929 = (function cljs$core$async$__GT_t_cljs$core$async49929(p,ch,meta49930){
return (new cljs.core.async.t_cljs$core$async49929(p,ch,meta49930));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async49929(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49944 = arguments.length;
switch (G__49944) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48186__auto___51703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_49966){
var state_val_49967 = (state_49966[(1)]);
if((state_val_49967 === (7))){
var inst_49962 = (state_49966[(2)]);
var state_49966__$1 = state_49966;
var statearr_49970_51707 = state_49966__$1;
(statearr_49970_51707[(2)] = inst_49962);

(statearr_49970_51707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (1))){
var state_49966__$1 = state_49966;
var statearr_49971_51708 = state_49966__$1;
(statearr_49971_51708[(2)] = null);

(statearr_49971_51708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (4))){
var inst_49948 = (state_49966[(7)]);
var inst_49948__$1 = (state_49966[(2)]);
var inst_49949 = (inst_49948__$1 == null);
var state_49966__$1 = (function (){var statearr_49972 = state_49966;
(statearr_49972[(7)] = inst_49948__$1);

return statearr_49972;
})();
if(cljs.core.truth_(inst_49949)){
var statearr_49973_51709 = state_49966__$1;
(statearr_49973_51709[(1)] = (5));

} else {
var statearr_49974_51712 = state_49966__$1;
(statearr_49974_51712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (6))){
var inst_49948 = (state_49966[(7)]);
var inst_49953 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49948) : p.call(null,inst_49948));
var state_49966__$1 = state_49966;
if(cljs.core.truth_(inst_49953)){
var statearr_49975_51715 = state_49966__$1;
(statearr_49975_51715[(1)] = (8));

} else {
var statearr_49976_51716 = state_49966__$1;
(statearr_49976_51716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (3))){
var inst_49964 = (state_49966[(2)]);
var state_49966__$1 = state_49966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49966__$1,inst_49964);
} else {
if((state_val_49967 === (2))){
var state_49966__$1 = state_49966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49966__$1,(4),ch);
} else {
if((state_val_49967 === (11))){
var inst_49956 = (state_49966[(2)]);
var state_49966__$1 = state_49966;
var statearr_49977_51718 = state_49966__$1;
(statearr_49977_51718[(2)] = inst_49956);

(statearr_49977_51718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (9))){
var state_49966__$1 = state_49966;
var statearr_49978_51722 = state_49966__$1;
(statearr_49978_51722[(2)] = null);

(statearr_49978_51722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (5))){
var inst_49951 = cljs.core.async.close_BANG_(out);
var state_49966__$1 = state_49966;
var statearr_49979_51723 = state_49966__$1;
(statearr_49979_51723[(2)] = inst_49951);

(statearr_49979_51723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (10))){
var inst_49959 = (state_49966[(2)]);
var state_49966__$1 = (function (){var statearr_49980 = state_49966;
(statearr_49980[(8)] = inst_49959);

return statearr_49980;
})();
var statearr_49981_51724 = state_49966__$1;
(statearr_49981_51724[(2)] = null);

(statearr_49981_51724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49967 === (8))){
var inst_49948 = (state_49966[(7)]);
var state_49966__$1 = state_49966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49966__$1,(11),out,inst_49948);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_49986 = [null,null,null,null,null,null,null,null,null];
(statearr_49986[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_49986[(1)] = (1));

return statearr_49986;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_49966){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_49966);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e49989){var ex__48087__auto__ = e49989;
var statearr_49990_51729 = state_49966;
(statearr_49990_51729[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_49966[(4)]))){
var statearr_49991_51730 = state_49966;
(statearr_49991_51730[(1)] = cljs.core.first((state_49966[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51732 = state_49966;
state_49966 = G__51732;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_49966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_49966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_49992 = f__48187__auto__();
(statearr_49992[(6)] = c__48186__auto___51703);

return statearr_49992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49995 = arguments.length;
switch (G__49995) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_50066){
var state_val_50067 = (state_50066[(1)]);
if((state_val_50067 === (7))){
var inst_50062 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50068_51739 = state_50066__$1;
(statearr_50068_51739[(2)] = inst_50062);

(statearr_50068_51739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (20))){
var inst_50031 = (state_50066[(7)]);
var inst_50042 = (state_50066[(2)]);
var inst_50043 = cljs.core.next(inst_50031);
var inst_50011 = inst_50043;
var inst_50012 = null;
var inst_50013 = (0);
var inst_50014 = (0);
var state_50066__$1 = (function (){var statearr_50069 = state_50066;
(statearr_50069[(8)] = inst_50011);

(statearr_50069[(9)] = inst_50013);

(statearr_50069[(10)] = inst_50014);

(statearr_50069[(11)] = inst_50042);

(statearr_50069[(12)] = inst_50012);

return statearr_50069;
})();
var statearr_50071_51745 = state_50066__$1;
(statearr_50071_51745[(2)] = null);

(statearr_50071_51745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (1))){
var state_50066__$1 = state_50066;
var statearr_50073_51746 = state_50066__$1;
(statearr_50073_51746[(2)] = null);

(statearr_50073_51746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (4))){
var inst_50000 = (state_50066[(13)]);
var inst_50000__$1 = (state_50066[(2)]);
var inst_50001 = (inst_50000__$1 == null);
var state_50066__$1 = (function (){var statearr_50084 = state_50066;
(statearr_50084[(13)] = inst_50000__$1);

return statearr_50084;
})();
if(cljs.core.truth_(inst_50001)){
var statearr_50085_51750 = state_50066__$1;
(statearr_50085_51750[(1)] = (5));

} else {
var statearr_50086_51751 = state_50066__$1;
(statearr_50086_51751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (15))){
var state_50066__$1 = state_50066;
var statearr_50100_51755 = state_50066__$1;
(statearr_50100_51755[(2)] = null);

(statearr_50100_51755[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (21))){
var state_50066__$1 = state_50066;
var statearr_50111_51757 = state_50066__$1;
(statearr_50111_51757[(2)] = null);

(statearr_50111_51757[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (13))){
var inst_50011 = (state_50066[(8)]);
var inst_50013 = (state_50066[(9)]);
var inst_50014 = (state_50066[(10)]);
var inst_50012 = (state_50066[(12)]);
var inst_50027 = (state_50066[(2)]);
var inst_50028 = (inst_50014 + (1));
var tmp50097 = inst_50011;
var tmp50098 = inst_50013;
var tmp50099 = inst_50012;
var inst_50011__$1 = tmp50097;
var inst_50012__$1 = tmp50099;
var inst_50013__$1 = tmp50098;
var inst_50014__$1 = inst_50028;
var state_50066__$1 = (function (){var statearr_50128 = state_50066;
(statearr_50128[(8)] = inst_50011__$1);

(statearr_50128[(9)] = inst_50013__$1);

(statearr_50128[(10)] = inst_50014__$1);

(statearr_50128[(14)] = inst_50027);

(statearr_50128[(12)] = inst_50012__$1);

return statearr_50128;
})();
var statearr_50129_51760 = state_50066__$1;
(statearr_50129_51760[(2)] = null);

(statearr_50129_51760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (22))){
var state_50066__$1 = state_50066;
var statearr_50141_51761 = state_50066__$1;
(statearr_50141_51761[(2)] = null);

(statearr_50141_51761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (6))){
var inst_50000 = (state_50066[(13)]);
var inst_50009 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50000) : f.call(null,inst_50000));
var inst_50010 = cljs.core.seq(inst_50009);
var inst_50011 = inst_50010;
var inst_50012 = null;
var inst_50013 = (0);
var inst_50014 = (0);
var state_50066__$1 = (function (){var statearr_50142 = state_50066;
(statearr_50142[(8)] = inst_50011);

(statearr_50142[(9)] = inst_50013);

(statearr_50142[(10)] = inst_50014);

(statearr_50142[(12)] = inst_50012);

return statearr_50142;
})();
var statearr_50153_51764 = state_50066__$1;
(statearr_50153_51764[(2)] = null);

(statearr_50153_51764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (17))){
var inst_50031 = (state_50066[(7)]);
var inst_50035 = cljs.core.chunk_first(inst_50031);
var inst_50036 = cljs.core.chunk_rest(inst_50031);
var inst_50037 = cljs.core.count(inst_50035);
var inst_50011 = inst_50036;
var inst_50012 = inst_50035;
var inst_50013 = inst_50037;
var inst_50014 = (0);
var state_50066__$1 = (function (){var statearr_50164 = state_50066;
(statearr_50164[(8)] = inst_50011);

(statearr_50164[(9)] = inst_50013);

(statearr_50164[(10)] = inst_50014);

(statearr_50164[(12)] = inst_50012);

return statearr_50164;
})();
var statearr_50165_51765 = state_50066__$1;
(statearr_50165_51765[(2)] = null);

(statearr_50165_51765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (3))){
var inst_50064 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50066__$1,inst_50064);
} else {
if((state_val_50067 === (12))){
var inst_50052 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50180_51767 = state_50066__$1;
(statearr_50180_51767[(2)] = inst_50052);

(statearr_50180_51767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (2))){
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50066__$1,(4),in$);
} else {
if((state_val_50067 === (23))){
var inst_50060 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50191_51768 = state_50066__$1;
(statearr_50191_51768[(2)] = inst_50060);

(statearr_50191_51768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (19))){
var inst_50046 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50193_51769 = state_50066__$1;
(statearr_50193_51769[(2)] = inst_50046);

(statearr_50193_51769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (11))){
var inst_50011 = (state_50066[(8)]);
var inst_50031 = (state_50066[(7)]);
var inst_50031__$1 = cljs.core.seq(inst_50011);
var state_50066__$1 = (function (){var statearr_50203 = state_50066;
(statearr_50203[(7)] = inst_50031__$1);

return statearr_50203;
})();
if(inst_50031__$1){
var statearr_50204_51770 = state_50066__$1;
(statearr_50204_51770[(1)] = (14));

} else {
var statearr_50205_51771 = state_50066__$1;
(statearr_50205_51771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (9))){
var inst_50054 = (state_50066[(2)]);
var inst_50055 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50066__$1 = (function (){var statearr_50216 = state_50066;
(statearr_50216[(15)] = inst_50054);

return statearr_50216;
})();
if(cljs.core.truth_(inst_50055)){
var statearr_50217_51772 = state_50066__$1;
(statearr_50217_51772[(1)] = (21));

} else {
var statearr_50218_51773 = state_50066__$1;
(statearr_50218_51773[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (5))){
var inst_50003 = cljs.core.async.close_BANG_(out);
var state_50066__$1 = state_50066;
var statearr_50229_51774 = state_50066__$1;
(statearr_50229_51774[(2)] = inst_50003);

(statearr_50229_51774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (14))){
var inst_50031 = (state_50066[(7)]);
var inst_50033 = cljs.core.chunked_seq_QMARK_(inst_50031);
var state_50066__$1 = state_50066;
if(inst_50033){
var statearr_50244_51775 = state_50066__$1;
(statearr_50244_51775[(1)] = (17));

} else {
var statearr_50245_51776 = state_50066__$1;
(statearr_50245_51776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (16))){
var inst_50049 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50256_51777 = state_50066__$1;
(statearr_50256_51777[(2)] = inst_50049);

(statearr_50256_51777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (10))){
var inst_50014 = (state_50066[(10)]);
var inst_50012 = (state_50066[(12)]);
var inst_50019 = cljs.core._nth(inst_50012,inst_50014);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50066__$1,(13),out,inst_50019);
} else {
if((state_val_50067 === (18))){
var inst_50031 = (state_50066[(7)]);
var inst_50040 = cljs.core.first(inst_50031);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50066__$1,(20),out,inst_50040);
} else {
if((state_val_50067 === (8))){
var inst_50013 = (state_50066[(9)]);
var inst_50014 = (state_50066[(10)]);
var inst_50016 = (inst_50014 < inst_50013);
var inst_50017 = inst_50016;
var state_50066__$1 = state_50066;
if(cljs.core.truth_(inst_50017)){
var statearr_50267_51779 = state_50066__$1;
(statearr_50267_51779[(1)] = (10));

} else {
var statearr_50268_51780 = state_50066__$1;
(statearr_50268_51780[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48084__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48084__auto____0 = (function (){
var statearr_50269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50269[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48084__auto__);

(statearr_50269[(1)] = (1));

return statearr_50269;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48084__auto____1 = (function (state_50066){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_50066);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e50271){var ex__48087__auto__ = e50271;
var statearr_50272_51788 = state_50066;
(statearr_50272_51788[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_50066[(4)]))){
var statearr_50283_51789 = state_50066;
(statearr_50283_51789[(1)] = cljs.core.first((state_50066[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51794 = state_50066;
state_50066 = G__51794;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48084__auto__ = function(state_50066){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48084__auto____1.call(this,state_50066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48084__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48084__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_50294 = f__48187__auto__();
(statearr_50294[(6)] = c__48186__auto__);

return statearr_50294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));

return c__48186__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50312 = arguments.length;
switch (G__50312) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50344 = arguments.length;
switch (G__50344) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50360 = arguments.length;
switch (G__50360) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48186__auto___51809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_50410){
var state_val_50411 = (state_50410[(1)]);
if((state_val_50411 === (7))){
var inst_50405 = (state_50410[(2)]);
var state_50410__$1 = state_50410;
var statearr_50413_51813 = state_50410__$1;
(statearr_50413_51813[(2)] = inst_50405);

(statearr_50413_51813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (1))){
var inst_50377 = null;
var state_50410__$1 = (function (){var statearr_50415 = state_50410;
(statearr_50415[(7)] = inst_50377);

return statearr_50415;
})();
var statearr_50416_51815 = state_50410__$1;
(statearr_50416_51815[(2)] = null);

(statearr_50416_51815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (4))){
var inst_50390 = (state_50410[(8)]);
var inst_50390__$1 = (state_50410[(2)]);
var inst_50391 = (inst_50390__$1 == null);
var inst_50392 = cljs.core.not(inst_50391);
var state_50410__$1 = (function (){var statearr_50417 = state_50410;
(statearr_50417[(8)] = inst_50390__$1);

return statearr_50417;
})();
if(inst_50392){
var statearr_50418_51816 = state_50410__$1;
(statearr_50418_51816[(1)] = (5));

} else {
var statearr_50419_51817 = state_50410__$1;
(statearr_50419_51817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (6))){
var state_50410__$1 = state_50410;
var statearr_50427_51818 = state_50410__$1;
(statearr_50427_51818[(2)] = null);

(statearr_50427_51818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (3))){
var inst_50407 = (state_50410[(2)]);
var inst_50408 = cljs.core.async.close_BANG_(out);
var state_50410__$1 = (function (){var statearr_50428 = state_50410;
(statearr_50428[(9)] = inst_50407);

return statearr_50428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50410__$1,inst_50408);
} else {
if((state_val_50411 === (2))){
var state_50410__$1 = state_50410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50410__$1,(4),ch);
} else {
if((state_val_50411 === (11))){
var inst_50390 = (state_50410[(8)]);
var inst_50399 = (state_50410[(2)]);
var inst_50377 = inst_50390;
var state_50410__$1 = (function (){var statearr_50431 = state_50410;
(statearr_50431[(7)] = inst_50377);

(statearr_50431[(10)] = inst_50399);

return statearr_50431;
})();
var statearr_50436_51821 = state_50410__$1;
(statearr_50436_51821[(2)] = null);

(statearr_50436_51821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (9))){
var inst_50390 = (state_50410[(8)]);
var state_50410__$1 = state_50410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50410__$1,(11),out,inst_50390);
} else {
if((state_val_50411 === (5))){
var inst_50390 = (state_50410[(8)]);
var inst_50377 = (state_50410[(7)]);
var inst_50394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50390,inst_50377);
var state_50410__$1 = state_50410;
if(inst_50394){
var statearr_50444_51822 = state_50410__$1;
(statearr_50444_51822[(1)] = (8));

} else {
var statearr_50445_51823 = state_50410__$1;
(statearr_50445_51823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (10))){
var inst_50402 = (state_50410[(2)]);
var state_50410__$1 = state_50410;
var statearr_50447_51824 = state_50410__$1;
(statearr_50447_51824[(2)] = inst_50402);

(statearr_50447_51824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50411 === (8))){
var inst_50377 = (state_50410[(7)]);
var tmp50437 = inst_50377;
var inst_50377__$1 = tmp50437;
var state_50410__$1 = (function (){var statearr_50449 = state_50410;
(statearr_50449[(7)] = inst_50377__$1);

return statearr_50449;
})();
var statearr_50450_51825 = state_50410__$1;
(statearr_50450_51825[(2)] = null);

(statearr_50450_51825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_50452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50452[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_50452[(1)] = (1));

return statearr_50452;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_50410){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_50410);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e50453){var ex__48087__auto__ = e50453;
var statearr_50454_51826 = state_50410;
(statearr_50454_51826[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_50410[(4)]))){
var statearr_50455_51827 = state_50410;
(statearr_50455_51827[(1)] = cljs.core.first((state_50410[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51828 = state_50410;
state_50410 = G__51828;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_50410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_50410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_50459 = f__48187__auto__();
(statearr_50459[(6)] = c__48186__auto___51809);

return statearr_50459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50471 = arguments.length;
switch (G__50471) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48186__auto___51830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_50526){
var state_val_50527 = (state_50526[(1)]);
if((state_val_50527 === (7))){
var inst_50522 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
var statearr_50530_51831 = state_50526__$1;
(statearr_50530_51831[(2)] = inst_50522);

(statearr_50530_51831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (1))){
var inst_50480 = (new Array(n));
var inst_50481 = inst_50480;
var inst_50482 = (0);
var state_50526__$1 = (function (){var statearr_50532 = state_50526;
(statearr_50532[(7)] = inst_50482);

(statearr_50532[(8)] = inst_50481);

return statearr_50532;
})();
var statearr_50533_51832 = state_50526__$1;
(statearr_50533_51832[(2)] = null);

(statearr_50533_51832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (4))){
var inst_50485 = (state_50526[(9)]);
var inst_50485__$1 = (state_50526[(2)]);
var inst_50486 = (inst_50485__$1 == null);
var inst_50487 = cljs.core.not(inst_50486);
var state_50526__$1 = (function (){var statearr_50536 = state_50526;
(statearr_50536[(9)] = inst_50485__$1);

return statearr_50536;
})();
if(inst_50487){
var statearr_50548_51833 = state_50526__$1;
(statearr_50548_51833[(1)] = (5));

} else {
var statearr_50555_51834 = state_50526__$1;
(statearr_50555_51834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (15))){
var inst_50513 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
var statearr_50562_51835 = state_50526__$1;
(statearr_50562_51835[(2)] = inst_50513);

(statearr_50562_51835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (13))){
var state_50526__$1 = state_50526;
var statearr_50564_51836 = state_50526__$1;
(statearr_50564_51836[(2)] = null);

(statearr_50564_51836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (6))){
var inst_50482 = (state_50526[(7)]);
var inst_50504 = (inst_50482 > (0));
var state_50526__$1 = state_50526;
if(cljs.core.truth_(inst_50504)){
var statearr_50566_51839 = state_50526__$1;
(statearr_50566_51839[(1)] = (12));

} else {
var statearr_50567_51840 = state_50526__$1;
(statearr_50567_51840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (3))){
var inst_50524 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50526__$1,inst_50524);
} else {
if((state_val_50527 === (12))){
var inst_50481 = (state_50526[(8)]);
var inst_50510 = cljs.core.vec(inst_50481);
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50526__$1,(15),out,inst_50510);
} else {
if((state_val_50527 === (2))){
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50526__$1,(4),ch);
} else {
if((state_val_50527 === (11))){
var inst_50498 = (state_50526[(2)]);
var inst_50499 = (new Array(n));
var inst_50481 = inst_50499;
var inst_50482 = (0);
var state_50526__$1 = (function (){var statearr_50571 = state_50526;
(statearr_50571[(10)] = inst_50498);

(statearr_50571[(7)] = inst_50482);

(statearr_50571[(8)] = inst_50481);

return statearr_50571;
})();
var statearr_50573_51842 = state_50526__$1;
(statearr_50573_51842[(2)] = null);

(statearr_50573_51842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (9))){
var inst_50481 = (state_50526[(8)]);
var inst_50496 = cljs.core.vec(inst_50481);
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50526__$1,(11),out,inst_50496);
} else {
if((state_val_50527 === (5))){
var inst_50491 = (state_50526[(11)]);
var inst_50485 = (state_50526[(9)]);
var inst_50482 = (state_50526[(7)]);
var inst_50481 = (state_50526[(8)]);
var inst_50489 = (inst_50481[inst_50482] = inst_50485);
var inst_50491__$1 = (inst_50482 + (1));
var inst_50492 = (inst_50491__$1 < n);
var state_50526__$1 = (function (){var statearr_50577 = state_50526;
(statearr_50577[(11)] = inst_50491__$1);

(statearr_50577[(12)] = inst_50489);

return statearr_50577;
})();
if(cljs.core.truth_(inst_50492)){
var statearr_50578_51846 = state_50526__$1;
(statearr_50578_51846[(1)] = (8));

} else {
var statearr_50579_51847 = state_50526__$1;
(statearr_50579_51847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (14))){
var inst_50518 = (state_50526[(2)]);
var inst_50520 = cljs.core.async.close_BANG_(out);
var state_50526__$1 = (function (){var statearr_50581 = state_50526;
(statearr_50581[(13)] = inst_50518);

return statearr_50581;
})();
var statearr_50583_51848 = state_50526__$1;
(statearr_50583_51848[(2)] = inst_50520);

(statearr_50583_51848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (10))){
var inst_50502 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
var statearr_50584_51853 = state_50526__$1;
(statearr_50584_51853[(2)] = inst_50502);

(statearr_50584_51853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (8))){
var inst_50491 = (state_50526[(11)]);
var inst_50481 = (state_50526[(8)]);
var tmp50580 = inst_50481;
var inst_50481__$1 = tmp50580;
var inst_50482 = inst_50491;
var state_50526__$1 = (function (){var statearr_50586 = state_50526;
(statearr_50586[(7)] = inst_50482);

(statearr_50586[(8)] = inst_50481__$1);

return statearr_50586;
})();
var statearr_50587_51857 = state_50526__$1;
(statearr_50587_51857[(2)] = null);

(statearr_50587_51857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_50589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50589[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_50589[(1)] = (1));

return statearr_50589;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_50526){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_50526);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e50596){var ex__48087__auto__ = e50596;
var statearr_50597_51862 = state_50526;
(statearr_50597_51862[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_50526[(4)]))){
var statearr_50598_51863 = state_50526;
(statearr_50598_51863[(1)] = cljs.core.first((state_50526[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51864 = state_50526;
state_50526 = G__51864;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_50526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_50526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_50602 = f__48187__auto__();
(statearr_50602[(6)] = c__48186__auto___51830);

return statearr_50602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50613 = arguments.length;
switch (G__50613) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48186__auto___51871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48187__auto__ = (function (){var switch__48083__auto__ = (function (state_50677){
var state_val_50678 = (state_50677[(1)]);
if((state_val_50678 === (7))){
var inst_50672 = (state_50677[(2)]);
var state_50677__$1 = state_50677;
var statearr_50685_51874 = state_50677__$1;
(statearr_50685_51874[(2)] = inst_50672);

(statearr_50685_51874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (1))){
var inst_50620 = [];
var inst_50622 = inst_50620;
var inst_50623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50677__$1 = (function (){var statearr_50686 = state_50677;
(statearr_50686[(7)] = inst_50623);

(statearr_50686[(8)] = inst_50622);

return statearr_50686;
})();
var statearr_50687_51875 = state_50677__$1;
(statearr_50687_51875[(2)] = null);

(statearr_50687_51875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (4))){
var inst_50626 = (state_50677[(9)]);
var inst_50626__$1 = (state_50677[(2)]);
var inst_50627 = (inst_50626__$1 == null);
var inst_50628 = cljs.core.not(inst_50627);
var state_50677__$1 = (function (){var statearr_50688 = state_50677;
(statearr_50688[(9)] = inst_50626__$1);

return statearr_50688;
})();
if(inst_50628){
var statearr_50689_51879 = state_50677__$1;
(statearr_50689_51879[(1)] = (5));

} else {
var statearr_50690_51880 = state_50677__$1;
(statearr_50690_51880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (15))){
var inst_50622 = (state_50677[(8)]);
var inst_50663 = cljs.core.vec(inst_50622);
var state_50677__$1 = state_50677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50677__$1,(18),out,inst_50663);
} else {
if((state_val_50678 === (13))){
var inst_50655 = (state_50677[(2)]);
var state_50677__$1 = state_50677;
var statearr_50692_51883 = state_50677__$1;
(statearr_50692_51883[(2)] = inst_50655);

(statearr_50692_51883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (6))){
var inst_50622 = (state_50677[(8)]);
var inst_50660 = inst_50622.length;
var inst_50661 = (inst_50660 > (0));
var state_50677__$1 = state_50677;
if(cljs.core.truth_(inst_50661)){
var statearr_50696_51884 = state_50677__$1;
(statearr_50696_51884[(1)] = (15));

} else {
var statearr_50697_51885 = state_50677__$1;
(statearr_50697_51885[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (17))){
var inst_50668 = (state_50677[(2)]);
var inst_50669 = cljs.core.async.close_BANG_(out);
var state_50677__$1 = (function (){var statearr_50698 = state_50677;
(statearr_50698[(10)] = inst_50668);

return statearr_50698;
})();
var statearr_50700_51886 = state_50677__$1;
(statearr_50700_51886[(2)] = inst_50669);

(statearr_50700_51886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (3))){
var inst_50674 = (state_50677[(2)]);
var state_50677__$1 = state_50677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50677__$1,inst_50674);
} else {
if((state_val_50678 === (12))){
var inst_50622 = (state_50677[(8)]);
var inst_50648 = cljs.core.vec(inst_50622);
var state_50677__$1 = state_50677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50677__$1,(14),out,inst_50648);
} else {
if((state_val_50678 === (2))){
var state_50677__$1 = state_50677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50677__$1,(4),ch);
} else {
if((state_val_50678 === (11))){
var inst_50634 = (state_50677[(11)]);
var inst_50622 = (state_50677[(8)]);
var inst_50626 = (state_50677[(9)]);
var inst_50645 = inst_50622.push(inst_50626);
var tmp50704 = inst_50622;
var inst_50622__$1 = tmp50704;
var inst_50623 = inst_50634;
var state_50677__$1 = (function (){var statearr_50705 = state_50677;
(statearr_50705[(7)] = inst_50623);

(statearr_50705[(12)] = inst_50645);

(statearr_50705[(8)] = inst_50622__$1);

return statearr_50705;
})();
var statearr_50706_51890 = state_50677__$1;
(statearr_50706_51890[(2)] = null);

(statearr_50706_51890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (9))){
var inst_50623 = (state_50677[(7)]);
var inst_50641 = cljs.core.keyword_identical_QMARK_(inst_50623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50677__$1 = state_50677;
var statearr_50707_51891 = state_50677__$1;
(statearr_50707_51891[(2)] = inst_50641);

(statearr_50707_51891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (5))){
var inst_50623 = (state_50677[(7)]);
var inst_50634 = (state_50677[(11)]);
var inst_50626 = (state_50677[(9)]);
var inst_50638 = (state_50677[(13)]);
var inst_50634__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50626) : f.call(null,inst_50626));
var inst_50638__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50634__$1,inst_50623);
var state_50677__$1 = (function (){var statearr_50708 = state_50677;
(statearr_50708[(11)] = inst_50634__$1);

(statearr_50708[(13)] = inst_50638__$1);

return statearr_50708;
})();
if(inst_50638__$1){
var statearr_50709_51894 = state_50677__$1;
(statearr_50709_51894[(1)] = (8));

} else {
var statearr_50710_51896 = state_50677__$1;
(statearr_50710_51896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (14))){
var inst_50634 = (state_50677[(11)]);
var inst_50626 = (state_50677[(9)]);
var inst_50650 = (state_50677[(2)]);
var inst_50651 = [];
var inst_50652 = inst_50651.push(inst_50626);
var inst_50622 = inst_50651;
var inst_50623 = inst_50634;
var state_50677__$1 = (function (){var statearr_50711 = state_50677;
(statearr_50711[(7)] = inst_50623);

(statearr_50711[(14)] = inst_50652);

(statearr_50711[(15)] = inst_50650);

(statearr_50711[(8)] = inst_50622);

return statearr_50711;
})();
var statearr_50712_51897 = state_50677__$1;
(statearr_50712_51897[(2)] = null);

(statearr_50712_51897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (16))){
var state_50677__$1 = state_50677;
var statearr_50714_51898 = state_50677__$1;
(statearr_50714_51898[(2)] = null);

(statearr_50714_51898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (10))){
var inst_50643 = (state_50677[(2)]);
var state_50677__$1 = state_50677;
if(cljs.core.truth_(inst_50643)){
var statearr_50715_51899 = state_50677__$1;
(statearr_50715_51899[(1)] = (11));

} else {
var statearr_50716_51900 = state_50677__$1;
(statearr_50716_51900[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (18))){
var inst_50665 = (state_50677[(2)]);
var state_50677__$1 = state_50677;
var statearr_50717_51901 = state_50677__$1;
(statearr_50717_51901[(2)] = inst_50665);

(statearr_50717_51901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50678 === (8))){
var inst_50638 = (state_50677[(13)]);
var state_50677__$1 = state_50677;
var statearr_50718_51902 = state_50677__$1;
(statearr_50718_51902[(2)] = inst_50638);

(statearr_50718_51902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__48084__auto__ = null;
var cljs$core$async$state_machine__48084__auto____0 = (function (){
var statearr_50722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50722[(0)] = cljs$core$async$state_machine__48084__auto__);

(statearr_50722[(1)] = (1));

return statearr_50722;
});
var cljs$core$async$state_machine__48084__auto____1 = (function (state_50677){
while(true){
var ret_value__48085__auto__ = (function (){try{while(true){
var result__48086__auto__ = switch__48083__auto__(state_50677);
if(cljs.core.keyword_identical_QMARK_(result__48086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48086__auto__;
}
break;
}
}catch (e50727){var ex__48087__auto__ = e50727;
var statearr_50728_51924 = state_50677;
(statearr_50728_51924[(2)] = ex__48087__auto__);


if(cljs.core.seq((state_50677[(4)]))){
var statearr_50729_51925 = state_50677;
(statearr_50729_51925[(1)] = cljs.core.first((state_50677[(4)])));

} else {
throw ex__48087__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51926 = state_50677;
state_50677 = G__51926;
continue;
} else {
return ret_value__48085__auto__;
}
break;
}
});
cljs$core$async$state_machine__48084__auto__ = function(state_50677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48084__auto____1.call(this,state_50677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48084__auto____0;
cljs$core$async$state_machine__48084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48084__auto____1;
return cljs$core$async$state_machine__48084__auto__;
})()
})();
var state__48188__auto__ = (function (){var statearr_50731 = f__48187__auto__();
(statearr_50731[(6)] = c__48186__auto___51871);

return statearr_50731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48188__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
