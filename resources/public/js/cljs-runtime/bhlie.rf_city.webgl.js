goog.provide('bhlie.rf_city.webgl');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three$examples$jsm$loaders$GLTFLoader=shadow.js.require("module$node_modules$three$examples$jsm$loaders$GLTFLoader", {});
bhlie.rf_city.webgl.map_options = ({"tilt": (0), "heading": (0), "zoom": (18), "center": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),35.6594945,new cljs.core.Keyword(null,"lng","lng",1667213918),139.6999859], null), "mapId": "15431d2b469f209e", "disableDefaultUI": true, "gestureHandling": "none", "keyboardShortcuts": false});
bhlie.rf_city.webgl.init_webgl_overlay_view = (function bhlie$rf_city$webgl$init_webgl_overlay_view(map,web_gl,opts){
var view = web_gl;
var scene = (new module$node_modules$three$build$three.Scene());
var camera = (new module$node_modules$three$build$three.PerspectiveCamera());
var loader = (new module$node_modules$three$examples$jsm$loaders$GLTFLoader.GLTFLoader());
var renderer = (new module$node_modules$three$build$three.WebGLRenderer());
(view.onAdd = (function (){
var ambient_light = (new module$node_modules$three$build$three.AmbientLight((16777215),0.75));
var directional_light = (new module$node_modules$three$build$three.DirectionalLight((16777215),0.25));
var source = "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf";
directional_light.position.set(0.5,(-1),0.5);

var G__41451_41456 = scene;
G__41451_41456.add(ambient_light);

G__41451_41456.add(directional_light);


return loader.load(source,(function (gltf){
gltf.scene.scale.set((10),(10),(10));

(gltf.scene.rotation.x = Math.PI);

return scene.add(gltf);
}));
}));

(view.onContextRestored = (function (p__41452){
var map__41453 = p__41452;
var map__41453__$1 = cljs.core.__destructure_map(map__41453);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41453__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var renderer__$1 = (new module$node_modules$three$build$three.WebGLRenderer(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),gl.canvas,new cljs.core.Keyword(null,"context","context",-830191113),gl], null)));
(renderer__$1.autoClear = false);

return (loader.manager.onload = (function (){
return renderer__$1.setAnimationLoop((function (){
view.requestRedraw();

map.moveCamera(opts.tilt,opts.heading,opts.zoom);

if((opts.tilt < 67.5)){
return (opts.tilt = (opts.tilt + 0.5));
} else {
if((opts.heading <= (360))){
(opts.heading = (opts.heading + 0.2));

return (opts.zoom = (opts.zoom - 5.0E-4));
} else {
return renderer__$1.setAnimationLoop(null);

}
}
}));
}));
}));

(view.onDraw = (function (p__41454){
var map__41455 = p__41454;
var map__41455__$1 = cljs.core.__destructure_map(map__41455);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41455__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var transformer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41455__$1,new cljs.core.Keyword(null,"transformer","transformer",-1493470620));
var lat_long_alt = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),opts.center.lat,new cljs.core.Keyword(null,"lng","lng",1667213918),opts.center.lng,new cljs.core.Keyword(null,"alt","alt",-3214426),(120)], null);
var matrix = transformer.fromLatLngAltitude(lat_long_alt);
(camera.projectionMatrix = (new module$node_modules$three$build$three.Matrix4()).fromArray(matrix));

view.requestRedraw();

renderer.render(scene,camera);

return renderer.resetState();
}));

return view.setMap(map);
});
bhlie.rf_city.webgl.init_map = (function bhlie$rf_city$webgl$init_map(map,web_gl,opts){
return bhlie.rf_city.webgl.init_webgl_overlay_view(map,web_gl,opts);
});

//# sourceMappingURL=bhlie.rf_city.webgl.js.map
