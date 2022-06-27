// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipArea ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),
function(q,r,e,u,v,w,h,g,E,F,G,x,y,z,A,B,C){const p=u.ofType({key:"type",base:z,typeMap:{rect:A,path:C,geometry:B}});q.LayerView2DMixin=b=>{b=function(k){function n(){var a=k.apply(this,arguments)||this;a.attached=!1;a.clips=new p;a.lastUpdateId=-1;a.moving=!1;a.updateRequested=!1;return a}r._inheritsLoose(n,k);var f=n.prototype;f.initialize=function(){var a,d,l,m;const D=null!=(a=null==(d=this.view)?void 0:d.spatialReferenceLocked)?a:!0;(null==(l=this.view)?0:l.spatialReference)&&D&&!this.spatialReferenceSupported?
this.addResolvingPromise(Promise.reject(new w("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new y.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([h.watch(()=>this.suspended,c=>{this.container&&(this.container.visible=!c);this.view&&!c&&this.updateRequested&&this.view.requestUpdate()},h.syncAndInitial),
h.watch(()=>{var c,t;return null!=(c=null==(t=this.layer)?void 0:t.opacity)?c:1},c=>{this.container&&(this.container.opacity=c)},h.syncAndInitial),h.watch(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",c=>{this.container&&(this.container.blendMode=c)},h.syncAndInitial),h.watch(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,c=>{this.container&&(this.container.effect=c)},h.syncAndInitial),h.on(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),
null!=(m=this.view)&&m.whenLayerView?this.view.whenLayerView(this.layer).then(c=>{c===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))};f.destroy=function(){this.processDetach();this.updateRequested=!1};f.processAttach=function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())};f.processDetach=function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=
!1)};f.isVisibleAtScale=function(a){const d=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!d)return!0;const {minScale:l,maxScale:m}=d;return(0===l||a<=l)&&(0===m||a>=m)};f.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};f.processUpdate=function(a){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",a),this.updateRequested&&!this.suspended&&
(this.updateRequested=!1,this.update(a)))};f.hitTest=function(a,d){return Promise.resolve(null)};f.supportsSpatialReference=function(a){return!0};f.canResume=function(){return this.spatialReferenceSupported?k.prototype.canResume.call(this)?this.visibleAtCurrentScale:!1:!1};f.getSuspendInfo=function(){const a=k.prototype.getSuspendInfo.call(this),d=!this.spatialReferenceSupported,l=this.visibleAtCurrentScale;d&&(a.spatialReferenceNotSupported=d);l&&(a.outsideScaleRange=l);return a};r._createClass(n,
[{key:"spatialReferenceSupported",get:function(){var a;const d=null==(a=this.view)?void 0:a.spatialReference;return null==d||this.supportsSpatialReference(d)}},{key:"updating",get:function(){var a;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(a=this.updatingHandles)||!a.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}}]);return n}(b);e.__decorate([g.property()],b.prototype,
"attached",void 0);e.__decorate([g.property({type:p,set(k){k=v.referenceSetter(k,this._get("clips"),p);this._set("clips",k)}})],b.prototype,"clips",void 0);e.__decorate([g.property()],b.prototype,"container",void 0);e.__decorate([g.property()],b.prototype,"moving",void 0);e.__decorate([g.property({readOnly:!0})],b.prototype,"spatialReferenceSupported",null);e.__decorate([g.property({readOnly:!0})],b.prototype,"updateParameters",void 0);e.__decorate([g.property()],b.prototype,"updateRequested",void 0);
e.__decorate([g.property()],b.prototype,"updating",null);e.__decorate([g.property()],b.prototype,"view",void 0);e.__decorate([g.property({readOnly:!0})],b.prototype,"visibleAtCurrentScale",null);return b=e.__decorate([x.subclass("esri.views.2d.layers.LayerView2D")],b)};Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});