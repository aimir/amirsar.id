// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(M,za){function F(a){return a?(a.nodeName||"").toLowerCase():null}function B(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function N(a){var b=B(a).Element;return a instanceof b||a instanceof Element}function z(a){var b=B(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function aa(a){if("undefined"===typeof ShadowRoot)return!1;var b=B(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}
function G(a){return a.split("-")[0]}function O(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;z(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=P(c.width)/a||1),0<b&&(e=P(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function ba(a){var b=O(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,
height:d}}function ia(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&aa(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function I(a){return B(a).getComputedStyle(a)}function K(a){return((N(a)?a.ownerDocument:a.document)||window.document).documentElement}function W(a){return"html"===F(a)?a:a.assignedSlot||a.parentNode||(aa(a)?a.host:null)||K(a)}function ja(a){return z(a)&&"fixed"!==I(a).position?a.offsetParent:null}function S(a){for(var b=
B(a),c=ja(a);c&&0<=["table","td","th"].indexOf(F(c))&&"static"===I(c).position;)c=ja(c);if(c&&("html"===F(c)||"body"===F(c)&&"static"===I(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!z(a)||"fixed"!==I(a).position)for(a=W(a),aa(a)&&(a=a.host);z(a)&&0>["html","body"].indexOf(F(a));){var d=I(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||
c&&"filter"===d.willChange||c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function ca(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function ka(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function la(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function Q(a){return a.split("-")[1]}function ma(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,k=a.position,n=a.gpuAcceleration,l=a.adaptive,m=a.roundOffsets,
q=a.isFixed;a=g.x;a=void 0===a?0:a;var p=g.y,h=void 0===p?0:p;p="function"===typeof m?m({x:a,y:h}):{x:a,y:h};a=p.x;h=p.y;p=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var u="left",v="top",w=window;if(l){var r=S(c),C="clientHeight",x="clientWidth";r===B(c)&&(r=K(c),"static"!==I(r).position&&"absolute"===k&&(C="scrollHeight",x="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)v="bottom",h-=(q&&r===w&&w.visualViewport?w.visualViewport.height:r[C])-d.height,h*=n?1:-1;if("left"===e||
("top"===e||"bottom"===e)&&"end"===f)u="right",a-=(q&&r===w&&w.visualViewport?w.visualViewport.width:r[x])-d.width,a*=n?1:-1}c=Object.assign({position:k},l&&Aa);!0===m?(m=h,d=window.devicePixelRatio||1,a={x:P(a*d)/d||0,y:P(m*d)/d||0}):a={x:a,y:h};m=a;a=m.x;h=m.y;if(n){var t;return Object.assign({},c,(t={},t[v]=g?"0":"",t[u]=p?"0":"",t.transform=1>=(w.devicePixelRatio||1)?"translate("+a+"px, "+h+"px)":"translate3d("+a+"px, "+h+"px, 0)",t))}return Object.assign({},c,(b={},b[v]=g?h+"px":"",b[u]=p?a+
"px":"",b.transform="",b))}function X(a){return a.replace(/left|right|bottom|top/g,function(b){return Ba[b]})}function na(a){return a.replace(/start|end/g,function(b){return Ca[b]})}function da(a){a=B(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function ea(a){return O(K(a)).left+da(a).scrollLeft}function fa(a){a=I(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function oa(a){return 0<=["html","body","#document"].indexOf(F(a))?a.ownerDocument.body:z(a)&&
fa(a)?a:oa(W(a))}function T(a,b){var c;void 0===b&&(b=[]);var d=oa(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=B(d);d=a?[c].concat(c.visualViewport||[],fa(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(T(W(d)))}function ha(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function pa(a,b){if("viewport"===b){b=B(a);var c=K(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||
(e=b.offsetLeft,f=b.offsetTop));a={width:d,height:c,x:e+ea(a),y:f};a=ha(a)}else N(b)?(a=O(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=K(a),a=K(f),d=da(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=D(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=D(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+ea(f),d=-d.scrollTop,
"rtl"===I(b||a).direction&&(f+=D(a.clientWidth,b?b.clientWidth:0)-c),a=ha({width:c,height:e,x:f,y:d}));return a}function Da(a){var b=T(W(a)),c=0<=["absolute","fixed"].indexOf(I(a).position)&&z(a)?S(a):a;return N(c)?b.filter(function(d){return N(d)&&ia(d,c)&&"body"!==F(d)}):[]}function Ea(a,b,c){b="clippingParents"===b?Da(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=pa(a,e);d.top=D(e.top,d.top);d.right=L(e.right,d.right);d.bottom=L(e.bottom,d.bottom);d.left=D(e.left,d.left);return d},
pa(a,c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function qa(a){var b=a.reference,c=a.element,d=(a=a.placement)?G(a):null;a=a?Q(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?ca(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function U(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,k=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=ka("number"!==typeof c?c:la(c,V));g=a.rects.popper;k=a.elements[k?"popper"===d?"reference":"popper":d];e=Ea(N(k)?k:k.contextElement||K(a.elements.popper),
e,f);f=O(a.elements.reference);k=qa({reference:f,element:g,strategy:"absolute",placement:b});g=ha(Object.assign({},g,k));f="popper"===d?g:f;var n={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var l=a[b];Object.keys(n).forEach(function(m){var q=0<=["right","bottom"].indexOf(m)?1:-1,p=0<=["top","bottom"].indexOf(m)?"y":"x";n[m]+=l[p]*q})}return n}function Fa(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,k=void 0===g?ra:g,n=Q(b.placement);b=n?f?sa:sa.filter(function(m){return Q(m)===n}):V;f=b.filter(function(m){return 0<=k.indexOf(m)});0===f.length&&(f=b);var l=f.reduce(function(m,q){m[q]=U(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[G(q)];return m},{});return Object.keys(l).sort(function(m,q){return l[m]-l[q]})}function Ga(a){if("auto"===G(a))return[];var b=X(a);return[na(a),b,na(b)]}function ta(a,b,c){void 0===
c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function ua(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Ha(a,b,c){void 0===c&&(c=!1);var d=z(b),e;if(e=z(b)){var f=b.getBoundingClientRect();e=P(f.width)/b.offsetWidth||1;f=P(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=K(b);a=O(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==F(b)||fa(e))f=b!==B(b)&&z(b)?
{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:da(b);z(b)?(g=O(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=ea(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Ia(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Ja(a){var b=
Ia(a);return Ka.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function La(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ma(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function va(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function wa(a,b){const c=["left","right"],d=["start","end"];"rtl"===za.getElementDir(a)&&(c.reverse(),d.reverse());return b.replace(/-leading/gi,`-${d[0]}`).replace(/-trailing/gi,`-${d[1]}`).replace(/leading/gi,c[0]).replace(/trailing/gi,c[1])}var V=["top","bottom","right","left"],sa=V.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),ra=[].concat(V,
["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Ka="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),D=Math.max,L=Math.min,P=Math.round,Aa={top:"auto",right:"auto",bottom:"auto",left:"auto"},Y={passive:!0},Ba={left:"right",right:"left",bottom:"top",top:"bottom"},Ca={start:"end",end:"start"},xa={placement:"bottom",modifiers:[],strategy:"absolute"},Na=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=
a.defaultOptions;var d=void 0===a?xa:a;return function(e,f,g){function k(){l.orderedModifiers.forEach(function(h){var u=h.name,v=h.options;v=void 0===v?{}:v;h=h.effect;"function"===typeof h&&(u=h({state:l,name:u,instance:p,options:v}),m.push(u||function(){}))})}function n(){m.forEach(function(h){return h()});m=[]}void 0===g&&(g=d);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xa,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},m=[],q=!1,p={state:l,
setOptions:function(h){h="function"===typeof h?h(l.options):h;n();l.options=Object.assign({},d,l.options,h);l.scrollParents={reference:N(e)?T(e):e.contextElement?T(e.contextElement):[],popper:T(f)};h=Ja(Ma([].concat(c,l.options.modifiers)));l.orderedModifiers=h.filter(function(u){return u.enabled});k();return p.update()},forceUpdate:function(){if(!q){var h=l.elements,u=h.reference;h=h.popper;if(va(u,h))for(l.rects={reference:Ha(u,S(h),"fixed"===l.options.strategy),popper:ba(h)},l.reset=!1,l.placement=
l.options.placement,l.orderedModifiers.forEach(function(r){return l.modifiersData[r.name]=Object.assign({},r.data)}),u=0;u<l.orderedModifiers.length;u++)if(!0===l.reset)l.reset=!1,u=-1;else{var v=l.orderedModifiers[u];h=v.fn;var w=v.options;w=void 0===w?{}:w;v=v.name;"function"===typeof h&&(l=h({state:l,options:w,name:v,instance:p})||l)}}},update:La(function(){return new Promise(function(h){p.forceUpdate();h(l)})}),destroy:function(){n();q=!0}};if(!va(e,f))return p;p.setOptions(g).then(function(h){if(!q&&
g.onFirstUpdate)g.onFirstUpdate(h)});return p}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=B(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&k.forEach(function(n){n.addEventListener("scroll",c.update,Y)});f&&g.addEventListener("resize",c.update,Y);return function(){e&&k.forEach(function(n){n.removeEventListener("scroll",
c.update,Y)});f&&g.removeEventListener("resize",c.update,Y)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=qa({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:G(b.placement),
variation:Q(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&(b.styles.popper=Object.assign({},b.styles.popper,ma(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,ma(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,
roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];z(f)&&F(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var k=e[g];!1===k?f.removeAttribute(g):f.setAttribute(g,!0===k?"":k)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,
left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,k){g[k]="";return g},{});z(e)&&F(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},
requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;var d=void 0===a?[0,0]:a;a=ra.reduce(function(g,k){var n=b.rects;var l=G(k);var m=0<=["left","top"].indexOf(l)?-1:1,q="function"===typeof d?d(Object.assign({},n,{placement:k})):d;n=q[0];q=q[1];n=n||0;q=(q||0)*m;l=0<=["left","right"].indexOf(l)?{x:q,y:n}:{x:n,y:q};g[k]=l;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&
(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,k=c.boundary,n=c.rootBoundary,l=c.altBoundary,m=c.flipVariations,q=void 0===m?!0:m,p=c.allowedAutoPlacements;c=b.options.placement;m=G(c);f=f||(m!==c&&q?Ga(c):[X(c)]);var h=[c].concat(f).reduce(function(E,
H){return E.concat("auto"===G(H)?Fa(b,{placement:H,boundary:k,rootBoundary:n,padding:g,flipVariations:q,allowedAutoPlacements:p}):H)},[]);c=b.rects.reference;f=b.rects.popper;var u=new Map;m=!0;for(var v=h[0],w=0;w<h.length;w++){var r=h[w],C=G(r),x="start"===Q(r),t=0<=["top","bottom"].indexOf(C),J=t?"width":"height",R=U(b,{placement:r,boundary:k,rootBoundary:n,altBoundary:l,padding:g});x=t?x?"right":"left":x?"bottom":"top";c[J]>f[J]&&(x=X(x));J=X(x);t=[];d&&t.push(0>=R[C]);e&&t.push(0>=R[x],0>=R[J]);
if(t.every(function(E){return E})){v=r;m=!1;break}u.set(r,t)}if(m)for(d=function(E){var H=h.find(function(y){if(y=u.get(y))return y.slice(0,E).every(function(Z){return Z})});if(H)return v=H,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==v&&(b.modifiersData[a]._skip=!0,b.placement=v,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=
void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var k=void 0===d?0:d,n=U(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,padding:c.padding,altBoundary:c.altBoundary}),l=G(b.placement),m=Q(b.placement),q=!m,p=ca(l);c="x"===p?"y":"x";d=b.modifiersData.popperOffsets;var h=b.rects.reference,u=b.rects.popper;k="function"===typeof k?k(Object.assign({},b.rects,{placement:b.placement})):k;var v="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),w=b.modifiersData.offset?
b.modifiersData.offset[b.placement]:null;k={x:0,y:0};if(d){if(e){var r,C="y"===p?"top":"left",x="y"===p?"bottom":"right",t="y"===p?"height":"width";e=d[p];var J=e+n[C],R=e-n[x],E=g?-u[t]/2:0,H="start"===m?h[t]:u[t];m="start"===m?-u[t]:-h[t];var y=b.elements.arrow;y=g&&y?ba(y):{width:0,height:0};var Z=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};C=Z[C];x=Z[x];y=D(0,L(h[t],y[t]));H=q?h[t]/2-E-y-C-v.mainAxis:H-y-C-v.mainAxis;q=q?-h[t]/
2+E+y+x+v.mainAxis:m+y+x+v.mainAxis;t=(t=b.elements.arrow&&S(b.elements.arrow))?"y"===p?t.clientTop||0:t.clientLeft||0:0;E=null!=(r=null==w?void 0:w[p])?r:0;r=e+q-E;J=g?L(J,e+H-E-t):J;r=g?D(R,r):R;r=D(J,L(e,r));d[p]=r;k[p]=r-e}if(f){var A;f=d[c];e="y"===c?"height":"width";r=f+n["x"===p?"top":"left"];n=f-n["x"===p?"bottom":"right"];l=-1!==["top","left"].indexOf(l);p=null!=(A=null==w?void 0:w[c])?A:0;A=l?r:f-h[e]-u[e]-p+v.altAxis;h=l?f+h[e]+u[e]-p-v.altAxis:n;g&&l?(A=D(A,L(f,h)),A=A>h?h:A):A=D(g?A:
r,L(f,g?h:n));d[c]=A;k[c]=A-f}b.modifiersData[a]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,k=G(c.placement);a=ca(k);k=0<=["left","right"].indexOf(k)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=ka("number"!==typeof e?e:la(e,V));var n=ba(f),l="y"===a?"top":"left",m="y"===a?"bottom":"right",q=c.rects.reference[k]+
c.rects.reference[a]-g[a]-c.rects.popper[k];g=g[a]-c.rects.reference[a];f=(f=S(f))?"y"===a?f.clientHeight||0:f.clientWidth||0:0;g=f/2-n[k]/2+(q/2-g/2);k=D(e[l],L(g,f-n[k]-e[m]));c.modifiersData[d]=(b={},b[a]=k,b.centerOffset=k-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;ia(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},
{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=U(b,{elementContext:"reference"}),g=U(b,{altBoundary:!0});c=ta(f,c);d=ta(g,d,e);e=ua(c);g=ua(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});
const ya="top bottom right left top-start top-end bottom-start bottom-end right-start right-end left-start left-end".split(" "),Oa=Math.ceil(Math.sqrt(Math.pow(4,2)+Math.pow(4,2)));M.CSS={animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"};M.createPopper=function({referenceEl:a,el:b,placement:c,overlayPositioning:d="absolute",modifiers:e}){return a?Na(a,b,{strategy:d,placement:wa(b,c),modifiers:e}):null};M.defaultMenuPlacement="bottom-leading";M.defaultOffsetDistance=Oa;
M.filterComputedPlacements=function(a,b){const c=a.filter(d=>ya.includes(d));c.length!==a.length&&console.warn(`${b.tagName}: Invalid value found in: flipPlacements. Try any of these: ${ya.map(d=>`"${d}"`).join(", ").trim()}`,{el:b});return c};M.popperMenuComputedPlacements="top-start top top-end bottom-start bottom bottom-end".split(" ");M.updatePopper=async function({el:a,modifiers:b,placement:c,popper:d}){a=wa(a,c);await d.setOptions({modifiers:b,placement:a})}});