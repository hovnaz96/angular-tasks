/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.8"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.8",major:1,minor:7,dot:8,codeName:"enthusiastic-oblation"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&(a||(a={}),r(d,function(b,d){null==a[d]&&(a[d]="")}));a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.22
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('angular')) :
    typeof define === 'function' && define.amd ? define(['exports', 'angular'], factory) :
    (global = global || self, factory(global['@uirouter/angularjs'] = {}, global.angular));
}(this, function (exports, ng_from_import) { 'use strict';

    /** @publicapi @module ng1 */ /** */
    /** @hidden */ var ng_from_global = angular;
    /** @hidden */ var ng = ng_from_import && ng_from_import.module ? ng_from_import : ng_from_global;

    /**
     * Higher order functions
     *
     * These utility functions are exported, but are subject to change without notice.
     *
     * @module common_hof
     */ /** */
    /**
     * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
     *
     * Given a function with N parameters, returns a new function that supports partial application.
     * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
     * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
     * accept more parameters until all N parameters have been supplied.
     *
     *
     * This contrived example uses a partially applied function as an predicate, which returns true
     * if an object is found in both arrays.
     * @example
     * ```
     * // returns true if an object is in both of the two arrays
     * function inBoth(array1, array2, object) {
     *   return array1.indexOf(object) !== -1 &&
     *          array2.indexOf(object) !== 1;
     * }
     * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
     * let foos = [obj1, obj3]
     * let bars = [obj3, obj4, obj5]
     *
     * // A curried "copy" of inBoth
     * let curriedInBoth = curry(inBoth);
     * // Partially apply both the array1 and array2
     * let inFoosAndBars = curriedInBoth(foos, bars);
     *
     * // Supply the final argument; since all arguments are
     * // supplied, the original inBoth function is then called.
     * let obj1InBoth = inFoosAndBars(obj1); // false
     *
     * // Use the inFoosAndBars as a predicate.
     * // Filter, on each iteration, supplies the final argument
     * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
     * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
     *
     * ```
     *
     * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
     *
     * @param fn
     * @returns {*|function(): (*|any)}
     */
    function curry(fn) {
        var initial_args = [].slice.apply(arguments, [1]);
        var func_args_length = fn.length;
        function curried(args) {
            if (args.length >= func_args_length)
                return fn.apply(null, args);
            return function () {
                return curried(args.concat([].slice.apply(arguments)));
            };
        }
        return curried(initial_args);
    }
    /**
     * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
     * given: f(x), g(x), h(x)
     * let composed = compose(f,g,h)
     * then, composed is: f(g(h(x)))
     */
    function compose() {
        var args = arguments;
        var start = args.length - 1;
        return function () {
            var i = start, result = args[start].apply(this, arguments);
            while (i--)
                result = args[i].call(this, result);
            return result;
        };
    }
    /**
     * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
     * given: f(x), g(x), h(x)
     * let piped = pipe(f,g,h);
     * then, piped is: h(g(f(x)))
     */
    function pipe() {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        return compose.apply(null, [].slice.call(arguments).reverse());
    }
    /**
     * Given a property name, returns a function that returns that property from an object
     * let obj = { foo: 1, name: "blarg" };
     * let getName = prop("name");
     * getName(obj) === "blarg"
     */
    var prop = function (name) { return function (obj) { return obj && obj[name]; }; };
    /**
     * Given a property name and a value, returns a function that returns a boolean based on whether
     * the passed object has a property that matches the value
     * let obj = { foo: 1, name: "blarg" };
     * let getName = propEq("name", "blarg");
     * getName(obj) === true
     */
    var propEq = curry(function (name, _val, obj) { return obj && obj[name] === _val; });
    /**
     * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
     * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
     * let getName = prop("nestedObj.name");
     * getName(obj) === "blarg"
     * let propNotFound = prop("this.property.doesnt.exist");
     * propNotFound(obj) === undefined
     */
    var parse = function (name) { return pipe.apply(null, name.split('.').map(prop)); };
    /**
     * Given a function that returns a truthy or falsey value, returns a
     * function that returns the opposite (falsey or truthy) value given the same inputs
     */
    var not = function (fn) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !fn.apply(null, args);
    }; };
    /**
     * Given two functions that return truthy or falsey values, returns a function that returns truthy
     * if both functions return truthy for the given arguments
     */
    function and(fn1, fn2) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn1.apply(null, args) && fn2.apply(null, args);
        };
    }
    /**
     * Given two functions that return truthy or falsey values, returns a function that returns truthy
     * if at least one of the functions returns truthy for the given arguments
     */
    function or(fn1, fn2) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn1.apply(null, args) || fn2.apply(null, args);
        };
    }
    /**
     * Check if all the elements of an array match a predicate function
     *
     * @param fn1 a predicate function `fn1`
     * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
     */
    var all = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); }; };
    // tslint:disable-next-line:variable-name
    var any = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); }; };
    /** Given a class, returns a Predicate function that returns true if the object is of that class */
    var is = function (ctor) { return function (obj) {
        return (obj != null && obj.constructor === ctor) || obj instanceof ctor;
    }; };
    /** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
    var eq = function (value) { return function (other) { return value === other; }; };
    /** Given a value, returns a function which returns the value */
    var val = function (v) { return function () { return v; }; };
    function invoke(fnName, args) {
        return function (obj) { return obj[fnName].apply(obj, args); };
    }
    /**
     * Sorta like Pattern Matching (a functional programming conditional construct)
     *
     * See http://c2.com/cgi/wiki?PatternMatching
     *
     * This is a conditional construct which allows a series of predicates and output functions
     * to be checked and then applied.  Each predicate receives the input.  If the predicate
     * returns truthy, then its matching output function (mapping function) is provided with
     * the input and, then the result is returned.
     *
     * Each combination (2-tuple) of predicate + output function should be placed in an array
     * of size 2: [ predicate, mapFn ]
     *
     * These 2-tuples should be put in an outer array.
     *
     * @example
     * ```
     *
     * // Here's a 2-tuple where the first element is the isString predicate
     * // and the second element is a function that returns a description of the input
     * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
     *
     * // Second tuple: predicate "isNumber", mapfn returns a description
     * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
     *
     * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
     *
     * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
     *
     * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
     *
     * console.log(descriptionOf(undefined)); // 'notdefined'
     * console.log(descriptionOf(55)); // '(55) That's a number!'
     * console.log(descriptionOf("foo")); // 'Here's your string foo'
     * ```
     *
     * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
     * with a Predicate and a mapping/output function
     * @returns {function(any): *}
     */
    function pattern(struct) {
        return function (x) {
            for (var i = 0; i < struct.length; i++) {
                if (struct[i][0](x))
                    return struct[i][1](x);
            }
        };
    }

    /** Predicates
     *
     * These predicates return true/false based on the input.
     * Although these functions are exported, they are subject to change without notice.
     *
     * @module common_predicates
     */ /** */
    var toStr = Object.prototype.toString;
    var tis = function (t) { return function (x) { return typeof x === t; }; };
    var isUndefined = tis('undefined');
    var isDefined = not(isUndefined);
    var isNull = function (o) { return o === null; };
    var isNullOrUndefined = or(isNull, isUndefined);
    var isFunction = tis('function');
    var isNumber = tis('number');
    var isString = tis('string');
    var isObject = function (x) { return x !== null && typeof x === 'object'; };
    var isArray = Array.isArray;
    var isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
    var isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
    /**
     * Predicate which checks if a value is injectable
     *
     * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
     * where all the elements in the array are Strings, except the last one, which is a Function
     */
    function isInjectable(val$$1) {
        if (isArray(val$$1) && val$$1.length) {
            var head = val$$1.slice(0, -1), tail = val$$1.slice(-1);
            return !(head.filter(not(isString)).length || tail.filter(not(isFunction)).length);
        }
        return isFunction(val$$1);
    }
    /**
     * Predicate which checks if a value looks like a Promise
     *
     * It is probably a Promise if it's an object, and it has a `then` property which is a Function
     */
    var isPromise = and(isObject, pipe(prop('then'), isFunction));

    var noImpl = function (fnname) { return function () {
        throw new Error("No implementation for " + fnname + ". The framework specific code did not implement this method.");
    }; };
    var makeStub = function (service, methods) {
        return methods.reduce(function (acc, key) { return ((acc[key] = noImpl(service + "." + key + "()")), acc); }, {});
    };
    var services = {
        $q: undefined,
        $injector: undefined,
    };

    /**
     * Random utility functions used in the UI-Router code
     *
     * These functions are exported, but are subject to change without notice.
     *
     * @preferred @publicapi @module common
     */ /** */
    var root = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) ||
        undefined;
    var angular$1 = root.angular || {};
    var fromJson = angular$1.fromJson || JSON.parse.bind(JSON);
    var toJson = angular$1.toJson || JSON.stringify.bind(JSON);
    var forEach = angular$1.forEach || _forEach;
    var extend = Object.assign || _extend;
    var equals = angular$1.equals || _equals;
    function identity(x) {
        return x;
    }
    function noop() { }
    /**
     * Builds proxy functions on the `to` object which pass through to the `from` object.
     *
     * For each key in `fnNames`, creates a proxy function on the `to` object.
     * The proxy function calls the real function on the `from` object.
     *
     *
     * #### Example:
     * This example creates an new class instance whose functions are prebound to the new'd object.
     * ```js
     * class Foo {
     *   constructor(data) {
     *     // Binds all functions from Foo.prototype to 'this',
     *     // then copies them to 'this'
     *     bindFunctions(Foo.prototype, this, this);
     *     this.data = data;
     *   }
     *
     *   log() {
     *     console.log(this.data);
     *   }
     * }
     *
     * let myFoo = new Foo([1,2,3]);
     * var logit = myFoo.log;
     * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
     * ```
     *
     * #### Example:
     * This example creates a bound version of a service function, and copies it to another object
     * ```
     *
     * var SomeService = {
     *   this.data = [3, 4, 5];
     *   this.log = function() {
     *     console.log(this.data);
     *   }
     * }
     *
     * // Constructor fn
     * function OtherThing() {
     *   // Binds all functions from SomeService to SomeService,
     *   // then copies them to 'this'
     *   bindFunctions(SomeService, this, SomeService);
     * }
     *
     * let myOtherThing = new OtherThing();
     * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
     * ```
     *
     * @param source A function that returns the source object which contains the original functions to be bound
     * @param target A function that returns the target object which will receive the bound functions
     * @param bind A function that returns the object which the functions will be bound to
     * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
     * @param latebind If true, the binding of the function is delayed until the first time it's invoked
     */
    function createProxyFunctions(source, target, bind, fnNames, latebind) {
        if (latebind === void 0) { latebind = false; }
        var bindFunction = function (fnName) { return source()[fnName].bind(bind()); };
        var makeLateRebindFn = function (fnName) {
            return function lateRebindFunction() {
                target[fnName] = bindFunction(fnName);
                return target[fnName].apply(null, arguments);
            };
        };
        fnNames = fnNames || Object.keys(source());
        return fnNames.reduce(function (acc, name) {
            acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
            return acc;
        }, target);
    }
    /**
     * prototypal inheritance helper.
     * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
     */
    var inherit = function (parent, extra) { return extend(Object.create(parent), extra); };
    /** Given an array, returns true if the object is found in the array, (using indexOf) */
    var inArray = curry(_inArray);
    function _inArray(array, obj) {
        return array.indexOf(obj) !== -1;
    }
    /**
     * Given an array, and an item, if the item is found in the array, it removes it (in-place).
     * The same array is returned
     */
    var removeFrom = curry(_removeFrom);
    function _removeFrom(array, obj) {
        var idx = array.indexOf(obj);
        if (idx >= 0)
            array.splice(idx, 1);
        return array;
    }
    /** pushes a values to an array and returns the value */
    var pushTo = curry(_pushTo);
    function _pushTo(arr, val$$1) {
        return arr.push(val$$1), val$$1;
    }
    /** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
    var deregAll = function (functions) {
        return functions.slice().forEach(function (fn) {
            typeof fn === 'function' && fn();
            removeFrom(functions, fn);
        });
    };
    /**
     * Applies a set of defaults to an options object.  The options object is filtered
     * to only those properties of the objects in the defaultsList.
     * Earlier objects in the defaultsList take precedence when applying defaults.
     */
    function defaults(opts) {
        var defaultsList = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaultsList[_i - 1] = arguments[_i];
        }
        var defaultVals = extend.apply(void 0, [{}].concat(defaultsList.reverse()));
        return extend(defaultVals, pick(opts || {}, Object.keys(defaultVals)));
    }
    /** Reduce function that merges each element of the list into a single object, using extend */
    var mergeR = function (memo, item) { return extend(memo, item); };
    /**
     * Finds the common ancestor path between two states.
     *
     * @param {Object} first The first state.
     * @param {Object} second The second state.
     * @return {Array} Returns an array of state names in descending order, not including the root.
     */
    function ancestors(first, second) {
        var path = [];
        // tslint:disable-next-line:forin
        for (var n in first.path) {
            if (first.path[n] !== second.path[n])
                break;
            path.push(first.path[n]);
        }
        return path;
    }
    /**
     * Return a copy of the object only containing the whitelisted properties.
     *
     * #### Example:
     * ```
     * var foo = { a: 1, b: 2, c: 3 };
     * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
     * ```
     * @param obj the source object
     * @param propNames an Array of strings, which are the whitelisted property names
     */
    function pick(obj, propNames) {
        var objCopy = {};
        for (var _prop in obj) {
            if (propNames.indexOf(_prop) !== -1) {
                objCopy[_prop] = obj[_prop];
            }
        }
        return objCopy;
    }
    /**
     * Return a copy of the object omitting the blacklisted properties.
     *
     * @example
     * ```
     *
     * var foo = { a: 1, b: 2, c: 3 };
     * var ab = omit(foo, ['a', 'b']); // { c: 3 }
     * ```
     * @param obj the source object
     * @param propNames an Array of strings, which are the blacklisted property names
     */
    function omit(obj, propNames) {
        return Object.keys(obj)
            .filter(not(inArray(propNames)))
            .reduce(function (acc, key) { return ((acc[key] = obj[key]), acc); }, {});
    }
    /**
     * Maps an array, or object to a property (by name)
     */
    function pluck(collection, propName) {
        return map(collection, prop(propName));
    }
    /** Filters an Array or an Object's properties based on a predicate */
    function filter(collection, callback) {
        var arr = isArray(collection), result = arr ? [] : {};
        var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return (result[key] = x); };
        forEach(collection, function (item, i) {
            if (callback(item, i))
                accept(item, i);
        });
        return result;
    }
    /** Finds an object from an array, or a property of an object, that matches a predicate */
    function find(collection, callback) {
        var result;
        forEach(collection, function (item, i) {
            if (result)
                return;
            if (callback(item, i))
                result = item;
        });
        return result;
    }
    /** Given an object, returns a new object, where each property is transformed by the callback function */
    var mapObj = map;
    /** Maps an array or object properties using a callback function */
    function map(collection, callback, target) {
        target = target || (isArray(collection) ? [] : {});
        forEach(collection, function (item, i) { return (target[i] = callback(item, i)); });
        return target;
    }
    /**
     * Given an object, return its enumerable property values
     *
     * @example
     * ```
     *
     * let foo = { a: 1, b: 2, c: 3 }
     * let vals = values(foo); // [ 1, 2, 3 ]
     * ```
     */
    var values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
    /**
     * Reduce function that returns true if all of the values are truthy.
     *
     * @example
     * ```
     *
     * let vals = [ 1, true, {}, "hello world"];
     * vals.reduce(allTrueR, true); // true
     *
     * vals.push(0);
     * vals.reduce(allTrueR, true); // false
     * ```
     */
    var allTrueR = function (memo, elem) { return memo && elem; };
    /**
     * Reduce function that returns true if any of the values are truthy.
     *
     *  * @example
     * ```
     *
     * let vals = [ 0, null, undefined ];
     * vals.reduce(anyTrueR, true); // false
     *
     * vals.push("hello world");
     * vals.reduce(anyTrueR, true); // true
     * ```
     */
    var anyTrueR = function (memo, elem) { return memo || elem; };
    /**
     * Reduce function which un-nests a single level of arrays
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
     * ```
     */
    var unnestR = function (memo, elem) { return memo.concat(elem); };
    /**
     * Reduce function which recursively un-nests all arrays
     *
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
     * ```
     */
    var flattenR = function (memo, elem) {
        return isArray(elem) ? memo.concat(elem.reduce(flattenR, [])) : pushR(memo, elem);
    };
    /**
     * Reduce function that pushes an object to an array, then returns the array.
     * Mostly just for [[flattenR]] and [[uniqR]]
     */
    function pushR(arr, obj) {
        arr.push(obj);
        return arr;
    }
    /** Reduce function that filters out duplicates */
    var uniqR = function (acc, token) { return (inArray(acc, token) ? acc : pushR(acc, token)); };
    /**
     * Return a new array with a single level of arrays unnested.
     *
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
     * ```
     */
    var unnest = function (arr) { return arr.reduce(unnestR, []); };
    /**
     * Return a completely flattened version of an array.
     *
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
     * ```
     */
    var flatten = function (arr) { return arr.reduce(flattenR, []); };
    /**
     * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
     * @example
     * ```
     *
     * let isNumber = (obj) => typeof(obj) === 'number';
     * let allNumbers = [ 1, 2, 3, 4, 5 ];
     * allNumbers.filter(assertPredicate(isNumber)); //OK
     *
     * let oneString = [ 1, 2, 3, 4, "5" ];
     * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
     * ```
     */
    var assertPredicate = assertFn;
    /**
     * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
     * @example
     * ```
     *
     * var data = { foo: 1, bar: 2 };
     *
     * let keys = [ 'foo', 'bar' ]
     * let values = keys.map(assertMap(key => data[key], "Key not found"));
     * // values is [1, 2]
     *
     * let keys = [ 'foo', 'bar', 'baz' ]
     * let values = keys.map(assertMap(key => data[key], "Key not found"));
     * // throws Error("Key not found")
     * ```
     */
    var assertMap = assertFn;
    function assertFn(predicateOrMap, errMsg) {
        if (errMsg === void 0) { errMsg = 'assert failure'; }
        return function (obj) {
            var result = predicateOrMap(obj);
            if (!result) {
                throw new Error(isFunction(errMsg) ? errMsg(obj) : errMsg);
            }
            return result;
        };
    }
    /**
     * Like _.pairs: Given an object, returns an array of key/value pairs
     *
     * @example
     * ```
     *
     * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
     * ```
     */
    var pairs = function (obj) { return Object.keys(obj).map(function (key) { return [key, obj[key]]; }); };
    /**
     * Given two or more parallel arrays, returns an array of tuples where
     * each tuple is composed of [ a[i], b[i], ... z[i] ]
     *
     * @example
     * ```
     *
     * let foo = [ 0, 2, 4, 6 ];
     * let bar = [ 1, 3, 5, 7 ];
     * let baz = [ 10, 30, 50, 70 ];
     * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
     * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
     * ```
     */
    function arrayTuples() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0)
            return [];
        var maxArrayLen = args.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
        var result = [];
        var _loop_1 = function (i) {
            // This is a hot function
            // Unroll when there are 1-4 arguments
            switch (args.length) {
                case 1:
                    result.push([args[0][i]]);
                    break;
                case 2:
                    result.push([args[0][i], args[1][i]]);
                    break;
                case 3:
                    result.push([args[0][i], args[1][i], args[2][i]]);
                    break;
                case 4:
                    result.push([args[0][i], args[1][i], args[2][i], args[3][i]]);
                    break;
                default:
                    result.push(args.map(function (array) { return array[i]; }));
                    break;
            }
        };
        for (var i = 0; i < maxArrayLen; i++) {
            _loop_1(i);
        }
        return result;
    }
    /**
     * Reduce function which builds an object from an array of [key, value] pairs.
     *
     * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
     *
     * Each keyValueTuple should be an array with values [ key: string, value: any ]
     *
     * @example
     * ```
     *
     * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
     *
     * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
     * // pairsToObj == { fookey: "fooval", barkey: "barval" }
     *
     * // Or, more simply:
     * var pairsToObj = pairs.reduce(applyPairs, {})
     * // pairsToObj == { fookey: "fooval", barkey: "barval" }
     * ```
     */
    function applyPairs(memo, keyValTuple) {
        var key, value;
        if (isArray(keyValTuple))
            key = keyValTuple[0], value = keyValTuple[1];
        if (!isString(key))
            throw new Error('invalid parameters to applyPairs');
        memo[key] = value;
        return memo;
    }
    /** Get the last element of an array */
    function tail(arr) {
        return (arr.length && arr[arr.length - 1]) || undefined;
    }
    /**
     * shallow copy from src to dest
     */
    function copy(src, dest) {
        if (dest)
            Object.keys(dest).forEach(function (key) { return delete dest[key]; });
        if (!dest)
            dest = {};
        return extend(dest, src);
    }
    /** Naive forEach implementation works with Objects or Arrays */
    function _forEach(obj, cb, _this) {
        if (isArray(obj))
            return obj.forEach(cb, _this);
        Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
    }
    function _extend(toObj) {
        for (var i = 1; i < arguments.length; i++) {
            var obj = arguments[i];
            if (!obj)
                continue;
            var keys = Object.keys(obj);
            for (var j = 0; j < keys.length; j++) {
                toObj[keys[j]] = obj[keys[j]];
            }
        }
        return toObj;
    }
    function _equals(o1, o2) {
        if (o1 === o2)
            return true;
        if (o1 === null || o2 === null)
            return false;
        if (o1 !== o1 && o2 !== o2)
            return true; // NaN === NaN
        var t1 = typeof o1, t2 = typeof o2;
        if (t1 !== t2 || t1 !== 'object')
            return false;
        var tup = [o1, o2];
        if (all(isArray)(tup))
            return _arraysEq(o1, o2);
        if (all(isDate)(tup))
            return o1.getTime() === o2.getTime();
        if (all(isRegExp)(tup))
            return o1.toString() === o2.toString();
        if (all(isFunction)(tup))
            return true; // meh
        var predicates = [isFunction, isArray, isDate, isRegExp];
        if (predicates.map(any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
            return false;
        var keys = {};
        // tslint:disable-next-line:forin
        for (var key in o1) {
            if (!_equals(o1[key], o2[key]))
                return false;
            keys[key] = true;
        }
        for (var key in o2) {
            if (!keys[key])
                return false;
        }
        return true;
    }
    function _arraysEq(a1, a2) {
        if (a1.length !== a2.length)
            return false;
        return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
    }
    // issue #2676
    var silenceUncaughtInPromise = function (promise) { return promise.catch(function (e) { return 0; }) && promise; };
    var silentRejection = function (error) { return silenceUncaughtInPromise(services.$q.reject(error)); };

    /** @publicapi @module core */
    /**
     * Matches state names using glob-like pattern strings.
     *
     * Globs can be used in specific APIs including:
     *
     * - [[StateService.is]]
     * - [[StateService.includes]]
     * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
     *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
     *
     * A `Glob` string is a pattern which matches state names.
     * Nested state names are split into segments (separated by a dot) when processing.
     * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
     *
     * Globs work according to the following rules:
     *
     * ### Exact match:
     *
     * The glob `'A.B'` matches the state named exactly `'A.B'`.
     *
     * | Glob        |Matches states named|Does not match state named|
     * |:------------|:--------------------|:---------------------|
     * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
     * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
     * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
     *
     * ### Single star (`*`)
     *
     * A single star (`*`) is a wildcard that matches exactly one segment.
     *
     * | Glob        |Matches states named  |Does not match state named |
     * |:------------|:---------------------|:--------------------------|
     * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
     * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
     * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
     *
     * ### Double star (`**`)
     *
     * A double star (`'**'`) is a wildcard that matches *zero or more segments*
     *
     * | Glob        |Matches states named                           |Does not match state named         |
     * |:------------|:----------------------------------------------|:----------------------------------|
     * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
     * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
     * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
     * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
     *
     */
    var Glob = /** @class */ (function () {
        function Glob(text) {
            this.text = text;
            this.glob = text.split('.');
            var regexpString = this.text
                .split('.')
                .map(function (seg) {
                if (seg === '**')
                    return '(?:|(?:\\.[^.]*)*)';
                if (seg === '*')
                    return '\\.[^.]*';
                return '\\.' + seg;
            })
                .join('');
            this.regexp = new RegExp('^' + regexpString + '$');
        }
        /** Returns true if the string has glob-like characters in it */
        Glob.is = function (text) {
            return !!/[!,*]+/.exec(text);
        };
        /** Returns a glob from the string, or null if the string isn't Glob-like */
        Glob.fromString = function (text) {
            return Glob.is(text) ? new Glob(text) : null;
        };
        Glob.prototype.matches = function (name) {
            return this.regexp.test('.' + name);
        };
        return Glob;
    }());

    /** @publicapi @module common */ /** */
    var Queue = /** @class */ (function () {
        function Queue(_items, _limit) {
            if (_items === void 0) { _items = []; }
            if (_limit === void 0) { _limit = null; }
            this._items = _items;
            this._limit = _limit;
            this._evictListeners = [];
            this.onEvict = pushTo(this._evictListeners);
        }
        Queue.prototype.enqueue = function (item) {
            var items = this._items;
            items.push(item);
            if (this._limit && items.length > this._limit)
                this.evict();
            return item;
        };
        Queue.prototype.evict = function () {
            var item = this._items.shift();
            this._evictListeners.forEach(function (fn) { return fn(item); });
            return item;
        };
        Queue.prototype.dequeue = function () {
            if (this.size())
                return this._items.splice(0, 1)[0];
        };
        Queue.prototype.clear = function () {
            var current = this._items;
            this._items = [];
            return current;
        };
        Queue.prototype.size = function () {
            return this._items.length;
        };
        Queue.prototype.remove = function (item) {
            var idx = this._items.indexOf(item);
            return idx > -1 && this._items.splice(idx, 1)[0];
        };
        Queue.prototype.peekTail = function () {
            return this._items[this._items.length - 1];
        };
        Queue.prototype.peekHead = function () {
            if (this.size())
                return this._items[0];
        };
        return Queue;
    }());

    /** @publicapi @module transition */ /** */

    (function (RejectType) {
        /**
         * A new transition superseded this one.
         *
         * While this transition was running, a new transition started.
         * This transition is cancelled because it was superseded by new transition.
         */
        RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
        /**
         * The transition was aborted
         *
         * The transition was aborted by a hook which returned `false`
         */
        RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
        /**
         * The transition was invalid
         *
         * The transition was never started because it was invalid
         */
        RejectType[RejectType["INVALID"] = 4] = "INVALID";
        /**
         * The transition was ignored
         *
         * The transition was ignored because it would have no effect.
         *
         * Either:
         *
         * - The transition is targeting the current state and parameter values
         * - The transition is targeting the same state and parameter values as the currently running transition.
         */
        RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
        /**
         * The transition errored.
         *
         * This generally means a hook threw an error or returned a rejected promise
         */
        RejectType[RejectType["ERROR"] = 6] = "ERROR";
    })(exports.RejectType || (exports.RejectType = {}));
    /** @hidden */
    var id = 0;
    var Rejection = /** @class */ (function () {
        function Rejection(type, message, detail) {
            /** @hidden */
            this.$id = id++;
            this.type = type;
            this.message = message;
            this.detail = detail;
        }
        /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
        Rejection.isRejectionPromise = function (obj) {
            return obj && typeof obj.then === 'function' && is(Rejection)(obj._transitionRejection);
        };
        /** Returns a Rejection due to transition superseded */
        Rejection.superseded = function (detail, options) {
            var message = 'The transition has been superseded by a different transition';
            var rejection = new Rejection(exports.RejectType.SUPERSEDED, message, detail);
            if (options && options.redirected) {
                rejection.redirected = true;
            }
            return rejection;
        };
        /** Returns a Rejection due to redirected transition */
        Rejection.redirected = function (detail) {
            return Rejection.superseded(detail, { redirected: true });
        };
        /** Returns a Rejection due to invalid transition */
        Rejection.invalid = function (detail) {
            var message = 'This transition is invalid';
            return new Rejection(exports.RejectType.INVALID, message, detail);
        };
        /** Returns a Rejection due to ignored transition */
        Rejection.ignored = function (detail) {
            var message = 'The transition was ignored';
            return new Rejection(exports.RejectType.IGNORED, message, detail);
        };
        /** Returns a Rejection due to aborted transition */
        Rejection.aborted = function (detail) {
            var message = 'The transition has been aborted';
            return new Rejection(exports.RejectType.ABORTED, message, detail);
        };
        /** Returns a Rejection due to aborted transition */
        Rejection.errored = function (detail) {
            var message = 'The transition errored';
            return new Rejection(exports.RejectType.ERROR, message, detail);
        };
        /**
         * Returns a Rejection
         *
         * Normalizes a value as a Rejection.
         * If the value is already a Rejection, returns it.
         * Otherwise, wraps and returns the value as a Rejection (Rejection type: ERROR).
         *
         * @returns `detail` if it is already a `Rejection`, else returns an ERROR Rejection.
         */
        Rejection.normalize = function (detail) {
            return is(Rejection)(detail) ? detail : Rejection.errored(detail);
        };
        Rejection.prototype.toString = function () {
            var detailString = function (d) { return (d && d.toString !== Object.prototype.toString ? d.toString() : stringify(d)); };
            var detail = detailString(this.detail);
            var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
            return "Transition Rejection($id: " + $id + " type: " + type + ", message: " + message + ", detail: " + detail + ")";
        };
        Rejection.prototype.toPromise = function () {
            return extend(silentRejection(this), { _transitionRejection: this });
        };
        return Rejection;
    }());

    /**
     * Functions that manipulate strings
     *
     * Although these functions are exported, they are subject to change without notice.
     *
     * @module common_strings
     */ /** */
    /**
     * Returns a string shortened to a maximum length
     *
     * If the string is already less than the `max` length, return the string.
     * Else return the string, shortened to `max - 3` and append three dots ("...").
     *
     * @param max the maximum length of the string to return
     * @param str the input string
     */
    function maxLength(max, str) {
        if (str.length <= max)
            return str;
        return str.substr(0, max - 3) + '...';
    }
    /**
     * Returns a string, with spaces added to the end, up to a desired str length
     *
     * If the string is already longer than the desired length, return the string.
     * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
     *
     * @param length the desired length of the string to return
     * @param str the input string
     */
    function padString(length, str) {
        while (str.length < length)
            str += ' ';
        return str;
    }
    function kebobString(camelCase) {
        return camelCase
            .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
            .replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); }); // replace rest
    }
    function functionToString(fn) {
        var fnStr = fnToString(fn);
        var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
        var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
        var fnName = fn['name'] || '';
        if (fnName && toStr.match(/function \(/)) {
            return 'function ' + fnName + toStr.substr(9);
        }
        return toStr;
    }
    function fnToString(fn) {
        var _fn = isArray(fn) ? fn.slice(-1)[0] : fn;
        return (_fn && _fn.toString()) || 'undefined';
    }
    var isRejection = Rejection.isRejectionPromise;
    var hasToString = function (obj) {
        return isObject(obj) && !isArray(obj) && obj.constructor !== Object && isFunction(obj.toString);
    };
    var stringifyPattern = pattern([
        [isUndefined, val('undefined')],
        [isNull, val('null')],
        [isPromise, val('[Promise]')],
        [isRejection, function (x) { return x._transitionRejection.toString(); }],
        [hasToString, function (x) { return x.toString(); }],
        [isInjectable, functionToString],
        [val(true), identity],
    ]);
    function stringify(o) {
        var seen = [];
        function format(value) {
            if (isObject(value)) {
                if (seen.indexOf(value) !== -1)
                    return '[circular ref]';
                seen.push(value);
            }
            return stringifyPattern(value);
        }
        if (isUndefined(o)) {
            // Workaround for IE & Edge Spec incompatibility where replacer function would not be called when JSON.stringify
            // is given `undefined` as value. To work around that, we simply detect `undefined` and bail out early by
            // manually stringifying it.
            return format(o);
        }
        return JSON.stringify(o, function (key, value) { return format(value); }).replace(/\\"/g, '"');
    }
    /** Returns a function that splits a string on a character or substring */
    var beforeAfterSubstr = function (char) { return function (str) {
        if (!str)
            return ['', ''];
        var idx = str.indexOf(char);
        if (idx === -1)
            return [str, ''];
        return [str.substr(0, idx), str.substr(idx + 1)];
    }; };
    var hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/');
    var stripLastPathElement = function (str) { return str.replace(/\/[^/]*$/, ''); };
    var splitHash = beforeAfterSubstr('#');
    var splitQuery = beforeAfterSubstr('?');
    var splitEqual = beforeAfterSubstr('=');
    var trimHashVal = function (str) { return (str ? str.replace(/^#/, '') : ''); };
    /**
     * Splits on a delimiter, but returns the delimiters in the array
     *
     * #### Example:
     * ```js
     * var splitOnSlashes = splitOnDelim('/');
     * splitOnSlashes("/foo"); // ["/", "foo"]
     * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
     * ```
     */
    function splitOnDelim(delim) {
        var re = new RegExp('(' + delim + ')', 'g');
        return function (str) { return str.split(re).filter(identity); };
    }
    /**
     * Reduce fn that joins neighboring strings
     *
     * Given an array of strings, returns a new array
     * where all neighboring strings have been joined.
     *
     * #### Example:
     * ```js
     * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
     * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
     * ```
     */
    function joinNeighborsR(acc, x) {
        if (isString(tail(acc)) && isString(x))
            return acc.slice(0, -1).concat(tail(acc) + x);
        return pushR(acc, x);
    }

    /**
     * # Transition tracing (debug)
     *
     * Enable transition tracing to print transition information to the console,
     * in order to help debug your application.
     * Tracing logs detailed information about each Transition to your console.
     *
     * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
     *
     * ### ES6
     * ```js
     * import {trace} from "@uirouter/core";
     * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
     * ```
     *
     * ### CJS
     * ```js
     * let trace = require("@uirouter/core").trace;
     * trace.enable("TRANSITION", "VIEWCONFIG");
     * ```
     *
     * ### Globals
     * ```js
     * let trace = window["@uirouter/core"].trace;
     * trace.enable(); // Trace everything (very verbose)
     * ```
     *
     * ### Angular 1:
     * ```js
     * app.run($trace => $trace.enable());
     * ```
     *
     * @publicapi @module trace
     */
    /** @hidden */
    function uiViewString(uiview) {
        if (!uiview)
            return 'ui-view (defunct)';
        var state = uiview.creationContext ? uiview.creationContext.name || '(root)' : '(none)';
        return "[ui-view#" + uiview.id + " " + uiview.$type + ":" + uiview.fqn + " (" + uiview.name + "@" + state + ")]";
    }
    /** @hidden */
    var viewConfigString = function (viewConfig) {
        var view = viewConfig.viewDecl;
        var state = view.$context.name || '(root)';
        return "[View#" + viewConfig.$id + " from '" + state + "' state]: target ui-view: '" + view.$uiViewName + "@" + view.$uiViewContextAnchor + "'";
    };
    /** @hidden */
    function normalizedCat(input) {
        return isNumber(input) ? exports.Category[input] : exports.Category[exports.Category[input]];
    }
    /** @hidden */
    var consoleLog = Function.prototype.bind.call(console.log, console);
    /** @hidden */
    var consoletable = isFunction(console.table) ? console.table.bind(console) : consoleLog.bind(console);
    /**
     * Trace categories Enum
     *
     * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
     *
     * `trace.enable(Category.TRANSITION)`
     *
     * These can also be provided using a matching string, or position ordinal
     *
     * `trace.enable("TRANSITION")`
     *
     * `trace.enable(1)`
     */

    (function (Category) {
        Category[Category["RESOLVE"] = 0] = "RESOLVE";
        Category[Category["TRANSITION"] = 1] = "TRANSITION";
        Category[Category["HOOK"] = 2] = "HOOK";
        Category[Category["UIVIEW"] = 3] = "UIVIEW";
        Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
    })(exports.Category || (exports.Category = {}));
    /** @hidden */
    var _tid = parse('$id');
    /** @hidden */
    var _rid = parse('router.$id');
    /** @hidden */
    var transLbl = function (trans) { return "Transition #" + _tid(trans) + "-" + _rid(trans); };
    /**
     * Prints UI-Router Transition trace information to the console.
     */
    var Trace = /** @class */ (function () {
        /** @hidden */
        function Trace() {
            /** @hidden */
            this._enabled = {};
            this.approximateDigests = 0;
        }
        /** @hidden */
        Trace.prototype._set = function (enabled, categories) {
            var _this = this;
            if (!categories.length) {
                categories = Object.keys(exports.Category)
                    .map(function (k) { return parseInt(k, 10); })
                    .filter(function (k) { return !isNaN(k); })
                    .map(function (key) { return exports.Category[key]; });
            }
            categories.map(normalizedCat).forEach(function (category) { return (_this._enabled[category] = enabled); });
        };
        Trace.prototype.enable = function () {
            var categories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                categories[_i] = arguments[_i];
            }
            this._set(true, categories);
        };
        Trace.prototype.disable = function () {
            var categories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                categories[_i] = arguments[_i];
            }
            this._set(false, categories);
        };
        /**
         * Retrieves the enabled stateus of a [[Category]]
         *
         * ```js
         * trace.enabled("VIEWCONFIG"); // true or false
         * ```
         *
         * @returns boolean true if the category is enabled
         */
        Trace.prototype.enabled = function (category) {
            return !!this._enabled[normalizedCat(category)];
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceTransitionStart = function (trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": Started  -> " + stringify(trans));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceTransitionIgnored = function (trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": Ignored  <> " + stringify(trans));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceHookInvocation = function (step, trans, options) {
            if (!this.enabled(exports.Category.HOOK))
                return;
            var event = parse('traceData.hookType')(options) || 'internal', context = parse('traceData.context.state.name')(options) || parse('traceData.context')(options) || 'unknown', name = functionToString(step.registeredHook.callback);
            console.log(transLbl(trans) + ":   Hook -> " + event + " context: " + context + ", " + maxLength(200, name));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
            if (!this.enabled(exports.Category.HOOK))
                return;
            console.log(transLbl(trans) + ":   <- Hook returned: " + maxLength(200, stringify(hookResult)));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceResolvePath = function (path, when, trans) {
            if (!this.enabled(exports.Category.RESOLVE))
                return;
            console.log(transLbl(trans) + ":         Resolving " + path + " (" + when + ")");
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
            if (!this.enabled(exports.Category.RESOLVE))
                return;
            console.log(transLbl(trans) + ":               <- Resolved  " + resolvable + " to: " + maxLength(200, stringify(resolvable.data)));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceError = function (reason, trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": <- Rejected " + stringify(trans) + ", reason: " + reason);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceSuccess = function (finalState, trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": <- Success  " + stringify(trans) + ", final state: " + finalState.name);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
            if (extra === void 0) { extra = ''; }
            if (!this.enabled(exports.Category.UIVIEW))
                return;
            console.log("ui-view: " + padString(30, event) + " " + uiViewString(viewData) + extra);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
            if (!this.enabled(exports.Category.UIVIEW))
                return;
            this.traceUIViewEvent('Updating', viewData, " with ViewConfig from context='" + context + "'");
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceUIViewFill = function (viewData, html) {
            if (!this.enabled(exports.Category.UIVIEW))
                return;
            this.traceUIViewEvent('Fill', viewData, " with: " + maxLength(200, html));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceViewSync = function (pairs) {
            if (!this.enabled(exports.Category.VIEWCONFIG))
                return;
            var uivheader = 'uiview component fqn';
            var cfgheader = 'view config state (view name)';
            var mapping = pairs
                .map(function (_a) {
                var uiView = _a.uiView, viewConfig = _a.viewConfig;
                var _b;
                var uiv = uiView && uiView.fqn;
                var cfg = viewConfig && viewConfig.viewDecl.$context.name + ": (" + viewConfig.viewDecl.$name + ")";
                return _b = {}, _b[uivheader] = uiv, _b[cfgheader] = cfg, _b;
            })
                .sort(function (a, b) { return (a[uivheader] || '').localeCompare(b[uivheader] || ''); });
            consoletable(mapping);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
            if (!this.enabled(exports.Category.VIEWCONFIG))
                return;
            console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
            if (!this.enabled(exports.Category.VIEWCONFIG))
                return;
            console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
        };
        return Trace;
    }());
    /**
     * The [[Trace]] singleton
     *
     * #### Example:
     * ```js
     * import {trace} from "@uirouter/core";
     * trace.enable(1, 5);
     * ```
     */
    var trace = new Trace();

    /** @publicapi @module common */ /** */

    /** @publicapi @module params */ /** */
    /**
     * An internal class which implements [[ParamTypeDefinition]].
     *
     * A [[ParamTypeDefinition]] is a plain javascript object used to register custom parameter types.
     * When a param type definition is registered, an instance of this class is created internally.
     *
     * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
     *
     * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
     *
     * #### Example:
     * ```js
     * var paramTypeDef = {
     *   decode: function(val) { return parseInt(val, 10); },
     *   encode: function(val) { return val && val.toString(); },
     *   equals: function(a, b) { return this.is(a) && a === b; },
     *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
     *   pattern: /\d+/
     * }
     *
     * var paramType = new ParamType(paramTypeDef);
     * ```
     * @internalapi
     */
    var ParamType = /** @class */ (function () {
        /**
         * @param def  A configuration object which contains the custom type definition.  The object's
         *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
         * @returns a new ParamType object
         */
        function ParamType(def) {
            /** @inheritdoc */
            this.pattern = /.*/;
            /** @inheritdoc */
            this.inherit = true;
            extend(this, def);
        }
        // consider these four methods to be "abstract methods" that should be overridden
        /** @inheritdoc */
        ParamType.prototype.is = function (val, key) {
            return true;
        };
        /** @inheritdoc */
        ParamType.prototype.encode = function (val, key) {
            return val;
        };
        /** @inheritdoc */
        ParamType.prototype.decode = function (val, key) {
            return val;
        };
        /** @inheritdoc */
        ParamType.prototype.equals = function (a, b) {
            // tslint:disable-next-line:triple-equals
            return a == b;
        };
        ParamType.prototype.$subPattern = function () {
            var sub = this.pattern.toString();
            return sub.substr(1, sub.length - 2);
        };
        ParamType.prototype.toString = function () {
            return "{ParamType:" + this.name + "}";
        };
        /** Given an encoded string, or a decoded object, returns a decoded object */
        ParamType.prototype.$normalize = function (val) {
            return this.is(val) ? val : this.decode(val);
        };
        /**
         * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
         * e.g.:
         * - urlmatcher pattern "/path?{queryParam[]:int}"
         * - url: "/path?queryParam=1&queryParam=2
         * - $stateParams.queryParam will be [1, 2]
         * if `mode` is "auto", then
         * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
         * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
         */
        ParamType.prototype.$asArray = function (mode, isSearch) {
            if (!mode)
                return this;
            if (mode === 'auto' && !isSearch)
                throw new Error("'auto' array mode is for query parameters only");
            return new ArrayType(this, mode);
        };
        return ParamType;
    }());
    /**
     * Wraps up a `ParamType` object to handle array values.
     * @internalapi
     */
    function ArrayType(type, mode) {
        var _this = this;
        // Wrap non-array value as array
        function arrayWrap(val) {
            return isArray(val) ? val : isDefined(val) ? [val] : [];
        }
        // Unwrap array value for "auto" mode. Return undefined for empty array.
        function arrayUnwrap(val) {
            switch (val.length) {
                case 0:
                    return undefined;
                case 1:
                    return mode === 'auto' ? val[0] : val;
                default:
                    return val;
            }
        }
        // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
        function arrayHandler(callback, allTruthyMode) {
            return function handleArray(val) {
                if (isArray(val) && val.length === 0)
                    return val;
                var arr = arrayWrap(val);
                var result = map(arr, callback);
                return allTruthyMode === true ? filter(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
            };
        }
        // Wraps type (.equals) functions to operate on each value of an array
        function arrayEqualsHandler(callback) {
            return function handleArray(val1, val2) {
                var left = arrayWrap(val1), right = arrayWrap(val2);
                if (left.length !== right.length)
                    return false;
                for (var i = 0; i < left.length; i++) {
                    if (!callback(left[i], right[i]))
                        return false;
                }
                return true;
            };
        }
        ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
            var paramTypeFn = type[name].bind(type);
            var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
            _this[name] = wrapperFn(paramTypeFn);
        });
        extend(this, {
            dynamic: type.dynamic,
            name: type.name,
            pattern: type.pattern,
            inherit: type.inherit,
            raw: type.raw,
            is: arrayHandler(type.is.bind(type), true),
            $arrayMode: mode,
        });
    }

    /** @publicapi @module params */ /** */
    /** @hidden */
    var hasOwn = Object.prototype.hasOwnProperty;
    /** @hidden */
    var isShorthand = function (cfg) {
        return ['value', 'type', 'squash', 'array', 'dynamic'].filter(hasOwn.bind(cfg || {})).length === 0;
    };
    /** @internalapi */

    (function (DefType) {
        DefType[DefType["PATH"] = 0] = "PATH";
        DefType[DefType["SEARCH"] = 1] = "SEARCH";
        DefType[DefType["CONFIG"] = 2] = "CONFIG";
    })(exports.DefType || (exports.DefType = {}));
    /** @internalapi */
    function getParamDeclaration(paramName, location, state) {
        var noReloadOnSearch = (state.reloadOnSearch === false && location === exports.DefType.SEARCH) || undefined;
        var dynamic = find([state.dynamic, noReloadOnSearch], isDefined);
        var defaultConfig = isDefined(dynamic) ? { dynamic: dynamic } : {};
        var paramConfig = unwrapShorthand(state && state.params && state.params[paramName]);
        return extend(defaultConfig, paramConfig);
    }
    /** @hidden */
    function unwrapShorthand(cfg) {
        cfg = isShorthand(cfg) ? { value: cfg } : cfg;
        getStaticDefaultValue['__cacheable'] = true;
        function getStaticDefaultValue() {
            return cfg.value;
        }
        var $$fn = isInjectable(cfg.value) ? cfg.value : getStaticDefaultValue;
        return extend(cfg, { $$fn: $$fn });
    }
    /** @hidden */
    function getType(cfg, urlType, location, id, paramTypes) {
        if (cfg.type && urlType && urlType.name !== 'string')
            throw new Error("Param '" + id + "' has two type configurations.");
        if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
            return paramTypes.type(cfg.type);
        if (urlType)
            return urlType;
        if (!cfg.type) {
            var type = location === exports.DefType.CONFIG
                ? 'any'
                : location === exports.DefType.PATH
                    ? 'path'
                    : location === exports.DefType.SEARCH
                        ? 'query'
                        : 'string';
            return paramTypes.type(type);
        }
        return cfg.type instanceof ParamType ? cfg.type : paramTypes.type(cfg.type);
    }
    /**
     * @internalapi
     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
     */
    function getSquashPolicy(config, isOptional, defaultPolicy) {
        var squash = config.squash;
        if (!isOptional || squash === false)
            return false;
        if (!isDefined(squash) || squash == null)
            return defaultPolicy;
        if (squash === true || isString(squash))
            return squash;
        throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
    }
    /** @internalapi */
    function getReplace(config, arrayMode, isOptional, squash) {
        var defaultPolicy = [
            { from: '', to: isOptional || arrayMode ? undefined : '' },
            { from: null, to: isOptional || arrayMode ? undefined : '' },
        ];
        var replace = isArray(config.replace) ? config.replace : [];
        if (isString(squash))
            replace.push({ from: squash, to: undefined });
        var configuredKeys = map(replace, prop('from'));
        return filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
    }
    /** @internalapi */
    var Param = /** @class */ (function () {
        function Param(id, type, location, urlConfig, state) {
            var config = getParamDeclaration(id, location, state);
            type = getType(config, type, location, id, urlConfig.paramTypes);
            var arrayMode = getArrayMode();
            type = arrayMode ? type.$asArray(arrayMode, location === exports.DefType.SEARCH) : type;
            var isOptional = config.value !== undefined || location === exports.DefType.SEARCH;
            var dynamic = isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
            var raw = isDefined(config.raw) ? !!config.raw : !!type.raw;
            var squash = getSquashPolicy(config, isOptional, urlConfig.defaultSquashPolicy());
            var replace = getReplace(config, arrayMode, isOptional, squash);
            var inherit$$1 = isDefined(config.inherit) ? !!config.inherit : !!type.inherit;
            // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
            function getArrayMode() {
                var arrayDefaults = { array: location === exports.DefType.SEARCH ? 'auto' : false };
                var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
                return extend(arrayDefaults, arrayParamNomenclature, config).array;
            }
            extend(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit$$1, array: arrayMode, config: config });
        }
        Param.values = function (params, values$$1) {
            if (values$$1 === void 0) { values$$1 = {}; }
            var paramValues = {};
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var param = params_1[_i];
                paramValues[param.id] = param.value(values$$1[param.id]);
            }
            return paramValues;
        };
        /**
         * Finds [[Param]] objects which have different param values
         *
         * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
         *
         * @param params: The list of Param objects to filter
         * @param values1: The first set of parameter values
         * @param values2: the second set of parameter values
         *
         * @returns any Param objects whose values were different between values1 and values2
         */
        Param.changed = function (params, values1, values2) {
            if (values1 === void 0) { values1 = {}; }
            if (values2 === void 0) { values2 = {}; }
            return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
        };
        /**
         * Checks if two param value objects are equal (for a set of [[Param]] objects)
         *
         * @param params The list of [[Param]] objects to check
         * @param values1 The first set of param values
         * @param values2 The second set of param values
         *
         * @returns true if the param values in values1 and values2 are equal
         */
        Param.equals = function (params, values1, values2) {
            if (values1 === void 0) { values1 = {}; }
            if (values2 === void 0) { values2 = {}; }
            return Param.changed(params, values1, values2).length === 0;
        };
        /** Returns true if a the parameter values are valid, according to the Param definitions */
        Param.validates = function (params, values$$1) {
            if (values$$1 === void 0) { values$$1 = {}; }
            return params.map(function (param) { return param.validates(values$$1[param.id]); }).reduce(allTrueR, true);
        };
        Param.prototype.isDefaultValue = function (value) {
            return this.isOptional && this.type.equals(this.value(), value);
        };
        /**
         * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
         * default value, which may be the result of an injectable function.
         */
        Param.prototype.value = function (value) {
            var _this = this;
            /**
             * [Internal] Get the default value of a parameter, which may be an injectable function.
             */
            var getDefaultValue = function () {
                if (_this._defaultValueCache)
                    return _this._defaultValueCache.defaultValue;
                if (!services.$injector)
                    throw new Error('Injectable functions cannot be called at configuration time');
                var defaultValue = services.$injector.invoke(_this.config.$$fn);
                if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                    throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
                if (_this.config.$$fn['__cacheable']) {
                    _this._defaultValueCache = { defaultValue: defaultValue };
                }
                return defaultValue;
            };
            var replaceSpecialValues = function (val$$1) {
                for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
                    var tuple = _a[_i];
                    if (tuple.from === val$$1)
                        return tuple.to;
                }
                return val$$1;
            };
            value = replaceSpecialValues(value);
            return isUndefined(value) ? getDefaultValue() : this.type.$normalize(value);
        };
        Param.prototype.isSearch = function () {
            return this.location === exports.DefType.SEARCH;
        };
        Param.prototype.validates = function (value) {
            // There was no parameter value, but the param is optional
            if ((isUndefined(value) || value === null) && this.isOptional)
                return true;
            // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
            var normalized = this.type.$normalize(value);
            if (!this.type.is(normalized))
                return false;
            // The value was of the correct type, but when encoded, did not match the ParamType's regexp
            var encoded = this.type.encode(normalized);
            return !(isString(encoded) && !this.type.pattern.exec(encoded));
        };
        Param.prototype.toString = function () {
            return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
        };
        return Param;
    }());

    /** @publicapi @module params */ /** */
    /**
     * A registry for parameter types.
     *
     * This registry manages the built-in (and custom) parameter types.
     *
     * The built-in parameter types are:
     *
     * - [[string]]
     * - [[path]]
     * - [[query]]
     * - [[hash]]
     * - [[int]]
     * - [[bool]]
     * - [[date]]
     * - [[json]]
     * - [[any]]
     *
     * To register custom parameter types, use [[UrlConfig.type]], i.e.,
     *
     * ```js
     * router.urlService.config.type(customType)
     * ```
     */
    var ParamTypes = /** @class */ (function () {
        /** @internalapi */
        function ParamTypes() {
            /** @hidden */
            this.enqueue = true;
            /** @hidden */
            this.typeQueue = [];
            /** @internalapi */
            this.defaultTypes = pick(ParamTypes.prototype, [
                'hash',
                'string',
                'query',
                'path',
                'int',
                'bool',
                'date',
                'json',
                'any',
            ]);
            // Register default types. Store them in the prototype of this.types.
            var makeType = function (definition, name) { return new ParamType(extend({ name: name }, definition)); };
            this.types = inherit(map(this.defaultTypes, makeType), {});
        }
        /** @internalapi */
        ParamTypes.prototype.dispose = function () {
            this.types = {};
        };
        /**
         * Registers a parameter type
         *
         * End users should call [[UrlMatcherFactory.type]], which delegates to this method.
         */
        ParamTypes.prototype.type = function (name, definition, definitionFn) {
            if (!isDefined(definition))
                return this.types[name];
            if (this.types.hasOwnProperty(name))
                throw new Error("A type named '" + name + "' has already been defined.");
            this.types[name] = new ParamType(extend({ name: name }, definition));
            if (definitionFn) {
                this.typeQueue.push({ name: name, def: definitionFn });
                if (!this.enqueue)
                    this._flushTypeQueue();
            }
            return this;
        };
        /** @internalapi */
        ParamTypes.prototype._flushTypeQueue = function () {
            while (this.typeQueue.length) {
                var type = this.typeQueue.shift();
                if (type.pattern)
                    throw new Error("You cannot override a type's .pattern at runtime.");
                extend(this.types[type.name], services.$injector.invoke(type.def));
            }
        };
        return ParamTypes;
    }());
    /** @hidden */
    function initDefaultTypes() {
        var makeDefaultType = function (def) {
            var valToString = function (val$$1) { return (val$$1 != null ? val$$1.toString() : val$$1); };
            var defaultTypeBase = {
                encode: valToString,
                decode: valToString,
                is: is(String),
                pattern: /.*/,
                // tslint:disable-next-line:triple-equals
                equals: function (a, b) { return a == b; },
            };
            return extend({}, defaultTypeBase, def);
        };
        // Default Parameter Type Definitions
        extend(ParamTypes.prototype, {
            string: makeDefaultType({}),
            path: makeDefaultType({
                pattern: /[^/]*/,
            }),
            query: makeDefaultType({}),
            hash: makeDefaultType({
                inherit: false,
            }),
            int: makeDefaultType({
                decode: function (val$$1) { return parseInt(val$$1, 10); },
                is: function (val$$1) {
                    return !isNullOrUndefined(val$$1) && this.decode(val$$1.toString()) === val$$1;
                },
                pattern: /-?\d+/,
            }),
            bool: makeDefaultType({
                encode: function (val$$1) { return (val$$1 && 1) || 0; },
                decode: function (val$$1) { return parseInt(val$$1, 10) !== 0; },
                is: is(Boolean),
                pattern: /0|1/,
            }),
            date: makeDefaultType({
                encode: function (val$$1) {
                    return !this.is(val$$1)
                        ? undefined
                        : [val$$1.getFullYear(), ('0' + (val$$1.getMonth() + 1)).slice(-2), ('0' + val$$1.getDate()).slice(-2)].join('-');
                },
                decode: function (val$$1) {
                    if (this.is(val$$1))
                        return val$$1;
                    var match = this.capture.exec(val$$1);
                    return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
                },
                is: function (val$$1) { return val$$1 instanceof Date && !isNaN(val$$1.valueOf()); },
                equals: function (l, r) {
                    return ['getFullYear', 'getMonth', 'getDate'].reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
            }),
            json: makeDefaultType({
                encode: toJson,
                decode: fromJson,
                is: is(Object),
                equals: equals,
                pattern: /[^/]*/,
            }),
            // does not encode/decode
            any: makeDefaultType({
                encode: identity,
                decode: identity,
                is: function () { return true; },
                equals: equals,
            }),
        });
    }
    initDefaultTypes();

    /** @publicapi @module params */ /** */
    /** @internalapi */
    var StateParams = /** @class */ (function () {
        function StateParams(params) {
            if (params === void 0) { params = {}; }
            extend(this, params);
        }
        /**
         * Merges a set of parameters with all parameters inherited between the common parents of the
         * current state and a given destination state.
         *
         * @param {Object} newParams The set of parameters which will be composited with inherited params.
         * @param {Object} $current Internal definition of object representing the current state.
         * @param {Object} $to Internal definition of object representing state to transition to.
         */
        StateParams.prototype.$inherit = function (newParams, $current, $to) {
            var parentParams;
            var parents = ancestors($current, $to), inherited = {}, inheritList = [];
            for (var i in parents) {
                if (!parents[i] || !parents[i].params)
                    continue;
                parentParams = Object.keys(parents[i].params);
                if (!parentParams.length)
                    continue;
                for (var j in parentParams) {
                    if (inheritList.indexOf(parentParams[j]) >= 0)
                        continue;
                    inheritList.push(parentParams[j]);
                    inherited[parentParams[j]] = this[parentParams[j]];
                }
            }
            return extend({}, inherited, newParams);
        };
        return StateParams;
    }());

    /** @internalapi @module path */ /** */
    /**
     * A node in a [[TreeChanges]] path
     *
     * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
     * Each PathNode corresponds to a state being entered, exited, or retained.
     * The stateful information includes parameter values and resolve data.
     */
    var PathNode = /** @class */ (function () {
        function PathNode(stateOrNode) {
            if (stateOrNode instanceof PathNode) {
                var node = stateOrNode;
                this.state = node.state;
                this.paramSchema = node.paramSchema.slice();
                this.paramValues = extend({}, node.paramValues);
                this.resolvables = node.resolvables.slice();
                this.views = node.views && node.views.slice();
            }
            else {
                var state = stateOrNode;
                this.state = state;
                this.paramSchema = state.parameters({ inherit: false });
                this.paramValues = {};
                this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
            }
        }
        PathNode.prototype.clone = function () {
            return new PathNode(this);
        };
        /** Sets [[paramValues]] for the node, from the values of an object hash */
        PathNode.prototype.applyRawParams = function (params) {
            var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
            this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return applyPairs(memo, getParamVal(pDef)); }, {});
            return this;
        };
        /** Gets a specific [[Param]] metadata that belongs to the node */
        PathNode.prototype.parameter = function (name) {
            return find(this.paramSchema, propEq('id', name));
        };
        /**
         * @returns true if the state and parameter values for another PathNode are
         * equal to the state and param values for this PathNode
         */
        PathNode.prototype.equals = function (node, paramsFn) {
            var diff = this.diff(node, paramsFn);
            return diff && diff.length === 0;
        };
        /**
         * Finds Params with different parameter values on another PathNode.
         *
         * Given another node (of the same state), finds the parameter values which differ.
         * Returns the [[Param]] (schema objects) whose parameter values differ.
         *
         * Given another node for a different state, returns `false`
         *
         * @param node The node to compare to
         * @param paramsFn A function that returns which parameters should be compared.
         * @returns The [[Param]]s which differ, or null if the two nodes are for different states
         */
        PathNode.prototype.diff = function (node, paramsFn) {
            if (this.state !== node.state)
                return false;
            var params = paramsFn ? paramsFn(this) : this.paramSchema;
            return Param.changed(params, this.paramValues, node.paramValues);
        };
        /**
         * Returns a clone of the PathNode
         * @deprecated use instance method `node.clone()`
         */
        PathNode.clone = function (node) { return node.clone(); };
        return PathNode;
    }());

    /** @publicapi @module state */ /** */
    /**
     * Encapsulate the target (destination) state/params/options of a [[Transition]].
     *
     * This class is frequently used to redirect a transition to a new destination.
     *
     * See:
     *
     * - [[HookResult]]
     * - [[TransitionHookFn]]
     * - [[TransitionService.onStart]]
     *
     * To create a `TargetState`, use [[StateService.target]].
     *
     * ---
     *
     * This class wraps:
     *
     * 1) an identifier for a state
     * 2) a set of parameters
     * 3) and transition options
     * 4) the registered state object (the [[StateDeclaration]])
     *
     * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
     * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
     * The `TargetState` class normalizes those options.
     *
     * A `TargetState` may be valid (the state being targeted exists in the registry)
     * or invalid (the state being targeted is not registered).
     */
    var TargetState = /** @class */ (function () {
        /**
         * The TargetState constructor
         *
         * Note: Do not construct a `TargetState` manually.
         * To create a `TargetState`, use the [[StateService.target]] factory method.
         *
         * @param _stateRegistry The StateRegistry to use to look up the _definition
         * @param _identifier An identifier for a state.
         *    Either a fully-qualified state name, or the object used to define the state.
         * @param _params Parameters for the target state
         * @param _options Transition options.
         *
         * @internalapi
         */
        function TargetState(_stateRegistry, _identifier, _params, _options) {
            this._stateRegistry = _stateRegistry;
            this._identifier = _identifier;
            this._identifier = _identifier;
            this._params = extend({}, _params || {});
            this._options = extend({}, _options || {});
            this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
        }
        /** The name of the state this object targets */
        TargetState.prototype.name = function () {
            return (this._definition && this._definition.name) || this._identifier;
        };
        /** The identifier used when creating this TargetState */
        TargetState.prototype.identifier = function () {
            return this._identifier;
        };
        /** The target parameter values */
        TargetState.prototype.params = function () {
            return this._params;
        };
        /** The internal state object (if it was found) */
        TargetState.prototype.$state = function () {
            return this._definition;
        };
        /** The internal state declaration (if it was found) */
        TargetState.prototype.state = function () {
            return this._definition && this._definition.self;
        };
        /** The target options */
        TargetState.prototype.options = function () {
            return this._options;
        };
        /** True if the target state was found */
        TargetState.prototype.exists = function () {
            return !!(this._definition && this._definition.self);
        };
        /** True if the object is valid */
        TargetState.prototype.valid = function () {
            return !this.error();
        };
        /** If the object is invalid, returns the reason why */
        TargetState.prototype.error = function () {
            var base = this.options().relative;
            if (!this._definition && !!base) {
                var stateName = base.name ? base.name : base;
                return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
            }
            if (!this._definition)
                return "No such state '" + this.name() + "'";
            if (!this._definition.self)
                return "State '" + this.name() + "' has an invalid definition";
        };
        TargetState.prototype.toString = function () {
            return "'" + this.name() + "'" + stringify(this.params());
        };
        /**
         * Returns a copy of this TargetState which targets a different state.
         * The new TargetState has the same parameter values and transition options.
         *
         * @param state The new state that should be targeted
         */
        TargetState.prototype.withState = function (state) {
            return new TargetState(this._stateRegistry, state, this._params, this._options);
        };
        /**
         * Returns a copy of this TargetState, using the specified parameter values.
         *
         * @param params the new parameter values to use
         * @param replace When false (default) the new parameter values will be merged with the current values.
         *                When true the parameter values will be used instead of the current values.
         */
        TargetState.prototype.withParams = function (params, replace) {
            if (replace === void 0) { replace = false; }
            var newParams = replace ? params : extend({}, this._params, params);
            return new TargetState(this._stateRegistry, this._identifier, newParams, this._options);
        };
        /**
         * Returns a copy of this TargetState, using the specified Transition Options.
         *
         * @param options the new options to use
         * @param replace When false (default) the new options will be merged with the current options.
         *                When true the options will be used instead of the current options.
         */
        TargetState.prototype.withOptions = function (options, replace) {
            if (replace === void 0) { replace = false; }
            var newOpts = replace ? options : extend({}, this._options, options);
            return new TargetState(this._stateRegistry, this._identifier, this._params, newOpts);
        };
        /** Returns true if the object has a state property that might be a state or state name */
        TargetState.isDef = function (obj) { return obj && obj.state && (isString(obj.state) || isString(obj.state.name)); };
        return TargetState;
    }());

    /** @internalapi @module path */ /** */
    /**
     * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
     */
    var PathUtils = /** @class */ (function () {
        function PathUtils() {
        }
        /** Given a PathNode[], create an TargetState */
        PathUtils.makeTargetState = function (registry, path) {
            var state = tail(path).state;
            return new TargetState(registry, state, path.map(prop('paramValues')).reduce(mergeR, {}), {});
        };
        PathUtils.buildPath = function (targetState) {
            var toParams = targetState.params();
            return targetState.$state().path.map(function (state) { return new PathNode(state).applyRawParams(toParams); });
        };
        /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
        PathUtils.buildToPath = function (fromPath, targetState) {
            var toPath = PathUtils.buildPath(targetState);
            if (targetState.options().inherit) {
                return PathUtils.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
            }
            return toPath;
        };
        /**
         * Creates ViewConfig objects and adds to nodes.
         *
         * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
         */
        PathUtils.applyViewConfigs = function ($view, path, states) {
            // Only apply the viewConfigs to the nodes for the given states
            path
                .filter(function (node) { return inArray(states, node.state); })
                .forEach(function (node) {
                var viewDecls = values(node.state.views || {});
                var subPath = PathUtils.subPath(path, function (n) { return n === node; });
                var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
                node.views = viewConfigs.reduce(unnestR, []);
            });
        };
        /**
         * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
         *
         * For a parameter in a node to be inherited from the from path:
         * - The toPath's node must have a matching node in the fromPath (by state).
         * - The parameter name must not be found in the toKeys parameter array.
         *
         * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
         * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
         * it is not inherited from the fromPath.
         */
        PathUtils.inheritParams = function (fromPath, toPath, toKeys) {
            if (toKeys === void 0) { toKeys = []; }
            function nodeParamVals(path, state) {
                var node = find(path, propEq('state', state));
                return extend({}, node && node.paramValues);
            }
            var noInherit = fromPath
                .map(function (node) { return node.paramSchema; })
                .reduce(unnestR, [])
                .filter(function (param) { return !param.inherit; })
                .map(prop('id'));
            /**
             * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
             * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
             */
            function makeInheritedParamsNode(toNode) {
                // All param values for the node (may include default key/vals, when key was not found in toParams)
                var toParamVals = extend({}, toNode && toNode.paramValues);
                // limited to only those keys found in toParams
                var incomingParamVals = pick(toParamVals, toKeys);
                toParamVals = omit(toParamVals, toKeys);
                var fromParamVals = omit(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
                // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
                var ownParamVals = extend(toParamVals, fromParamVals, incomingParamVals);
                return new PathNode(toNode.state).applyRawParams(ownParamVals);
            }
            // The param keys specified by the incoming toParams
            return toPath.map(makeInheritedParamsNode);
        };
        /**
         * Computes the tree changes (entering, exiting) between a fromPath and toPath.
         */
        PathUtils.treeChanges = function (fromPath, toPath, reloadState) {
            var max = Math.min(fromPath.length, toPath.length);
            var keep = 0;
            var nodesMatch = function (node1, node2) { return node1.equals(node2, PathUtils.nonDynamicParams); };
            while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
                keep++;
            }
            /** Given a retained node, return a new node which uses the to node's param values */
            function applyToParams(retainedNode, idx) {
                var cloned = retainedNode.clone();
                cloned.paramValues = toPath[idx].paramValues;
                return cloned;
            }
            var from, retained, exiting, entering, to;
            from = fromPath;
            retained = from.slice(0, keep);
            exiting = from.slice(keep);
            // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
            var retainedWithToParams = retained.map(applyToParams);
            entering = toPath.slice(keep);
            to = retainedWithToParams.concat(entering);
            return { from: from, to: to, retained: retained, retainedWithToParams: retainedWithToParams, exiting: exiting, entering: entering };
        };
        /**
         * Returns a new path which is: the subpath of the first path which matches the second path.
         *
         * The new path starts from root and contains any nodes that match the nodes in the second path.
         * It stops before the first non-matching node.
         *
         * Nodes are compared using their state property and their parameter values.
         * If a `paramsFn` is provided, only the [[Param]] returned by the function will be considered when comparing nodes.
         *
         * @param pathA the first path
         * @param pathB the second path
         * @param paramsFn a function which returns the parameters to consider when comparing
         *
         * @returns an array of PathNodes from the first path which match the nodes in the second path
         */
        PathUtils.matching = function (pathA, pathB, paramsFn) {
            var done = false;
            var tuples = arrayTuples(pathA, pathB);
            return tuples.reduce(function (matching, _a) {
                var nodeA = _a[0], nodeB = _a[1];
                done = done || !nodeA.equals(nodeB, paramsFn);
                return done ? matching : matching.concat(nodeA);
            }, []);
        };
        /**
         * Returns true if two paths are identical.
         *
         * @param pathA
         * @param pathB
         * @param paramsFn a function which returns the parameters to consider when comparing
         * @returns true if the the states and parameter values for both paths are identical
         */
        PathUtils.equals = function (pathA, pathB, paramsFn) {
            return pathA.length === pathB.length && PathUtils.matching(pathA, pathB, paramsFn).length === pathA.length;
        };
        /**
         * Return a subpath of a path, which stops at the first matching node
         *
         * Given an array of nodes, returns a subset of the array starting from the first node,
         * stopping when the first node matches the predicate.
         *
         * @param path a path of [[PathNode]]s
         * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
         * @returns a subpath up to the matching node, or undefined if no match is found
         */
        PathUtils.subPath = function (path, predicate) {
            var node = find(path, predicate);
            var elementIdx = path.indexOf(node);
            return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
        };
        PathUtils.nonDynamicParams = function (node) {
            return node.state.parameters({ inherit: false }).filter(function (param) { return !param.dynamic; });
        };
        /** Gets the raw parameter values from a path */
        PathUtils.paramValues = function (path) { return path.reduce(function (acc, node) { return extend(acc, node.paramValues); }, {}); };
        return PathUtils;
    }());

    /** @internalapi @module path */ /** */

    /** @internalapi */
    var resolvePolicies = {
        when: {
            LAZY: 'LAZY',
            EAGER: 'EAGER',
        },
        async: {
            WAIT: 'WAIT',
            NOWAIT: 'NOWAIT',
            RXWAIT: 'RXWAIT',
        },
    };

    /** @publicapi @module resolve */ /** */
    // TODO: explicitly make this user configurable
    var defaultResolvePolicy = {
        when: 'LAZY',
        async: 'WAIT',
    };
    /**
     * The basic building block for the resolve system.
     *
     * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
     * and the unwrapped-when-complete (.data) result of the resolveFn.
     *
     * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
     * resolveFn) and returns the resulting promise.
     *
     * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
     * parameter to those fns.
     */
    var Resolvable = /** @class */ (function () {
        function Resolvable(arg1, resolveFn, deps, policy, data) {
            this.resolved = false;
            this.promise = undefined;
            if (arg1 instanceof Resolvable) {
                extend(this, arg1);
            }
            else if (isFunction(resolveFn)) {
                if (isNullOrUndefined(arg1))
                    throw new Error('new Resolvable(): token argument is required');
                if (!isFunction(resolveFn))
                    throw new Error('new Resolvable(): resolveFn argument must be a function');
                this.token = arg1;
                this.policy = policy;
                this.resolveFn = resolveFn;
                this.deps = deps || [];
                this.data = data;
                this.resolved = data !== undefined;
                this.promise = this.resolved ? services.$q.when(this.data) : undefined;
            }
            else if (isObject(arg1) && arg1.token && (arg1.hasOwnProperty('resolveFn') || arg1.hasOwnProperty('data'))) {
                var literal = arg1;
                return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
            }
        }
        Resolvable.prototype.getPolicy = function (state) {
            var thisPolicy = this.policy || {};
            var statePolicy = (state && state.resolvePolicy) || {};
            return {
                when: thisPolicy.when || statePolicy.when || defaultResolvePolicy.when,
                async: thisPolicy.async || statePolicy.async || defaultResolvePolicy.async,
            };
        };
        /**
         * Asynchronously resolve this Resolvable's data
         *
         * Given a ResolveContext that this Resolvable is found in:
         * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
         * and update the Resolvable's state
         */
        Resolvable.prototype.resolve = function (resolveContext, trans) {
            var _this = this;
            var $q = services.$q;
            // Gets all dependencies from ResolveContext and wait for them to be resolved
            var getResolvableDependencies = function () {
                return $q.all(resolveContext.getDependencies(_this).map(function (resolvable) { return resolvable.get(resolveContext, trans); }));
            };
            // Invokes the resolve function passing the resolved dependencies as arguments
            var invokeResolveFn = function (resolvedDeps) { return _this.resolveFn.apply(null, resolvedDeps); };
            /**
             * For RXWAIT policy:
             *
             * Given an observable returned from a resolve function:
             * - enables .cache() mode (this allows multicast subscribers)
             * - then calls toPromise() (this triggers subscribe() and thus fetches)
             * - Waits for the promise, then return the cached observable (not the first emitted value).
             */
            var waitForRx = function (observable$) {
                var cached = observable$.cache(1);
                return cached
                    .take(1)
                    .toPromise()
                    .then(function () { return cached; });
            };
            // If the resolve policy is RXWAIT, wait for the observable to emit something. otherwise pass through.
            var node = resolveContext.findNode(this);
            var state = node && node.state;
            var maybeWaitForRx = this.getPolicy(state).async === 'RXWAIT' ? waitForRx : identity;
            // After the final value has been resolved, update the state of the Resolvable
            var applyResolvedValue = function (resolvedValue) {
                _this.data = resolvedValue;
                _this.resolved = true;
                _this.resolveFn = null;
                trace.traceResolvableResolved(_this, trans);
                return _this.data;
            };
            // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
            return (this.promise = $q
                .when()
                .then(getResolvableDependencies)
                .then(invokeResolveFn)
                .then(maybeWaitForRx)
                .then(applyResolvedValue));
        };
        /**
         * Gets a promise for this Resolvable's data.
         *
         * Fetches the data and returns a promise.
         * Returns the existing promise if it has already been fetched once.
         */
        Resolvable.prototype.get = function (resolveContext, trans) {
            return this.promise || this.resolve(resolveContext, trans);
        };
        Resolvable.prototype.toString = function () {
            return "Resolvable(token: " + stringify(this.token) + ", requires: [" + this.deps.map(stringify) + "])";
        };
        Resolvable.prototype.clone = function () {
            return new Resolvable(this);
        };
        Resolvable.fromData = function (token, data) { return new Resolvable(token, function () { return data; }, null, null, data); };
        return Resolvable;
    }());

    /** @publicapi @module resolve */ /** */
    var whens = resolvePolicies.when;
    var ALL_WHENS = [whens.EAGER, whens.LAZY];
    var EAGER_WHENS = [whens.EAGER];
    // tslint:disable-next-line:no-inferrable-types
    var NATIVE_INJECTOR_TOKEN = 'Native Injector';
    /**
     * Encapsulates Dependency Injection for a path of nodes
     *
     * UI-Router states are organized as a tree.
     * A nested state has a path of ancestors to the root of the tree.
     * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
     * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
     *
     * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
     */
    var ResolveContext = /** @class */ (function () {
        function ResolveContext(_path) {
            this._path = _path;
        }
        /** Gets all the tokens found in the resolve context, de-duplicated */
        ResolveContext.prototype.getTokens = function () {
            return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(uniqR, []);
        };
        /**
         * Gets the Resolvable that matches the token
         *
         * Gets the last Resolvable that matches the token in this context, or undefined.
         * Throws an error if it doesn't exist in the ResolveContext
         */
        ResolveContext.prototype.getResolvable = function (token) {
            var matching = this._path
                .map(function (node) { return node.resolvables; })
                .reduce(unnestR, [])
                .filter(function (r) { return r.token === token; });
            return tail(matching);
        };
        /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
        ResolveContext.prototype.getPolicy = function (resolvable) {
            var node = this.findNode(resolvable);
            return resolvable.getPolicy(node.state);
        };
        /**
         * Returns a ResolveContext that includes a portion of this one
         *
         * Given a state, this method creates a new ResolveContext from this one.
         * The new context starts at the first node (root) and stops at the node for the `state` parameter.
         *
         * #### Why
         *
         * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
         * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
         * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
         * This method is used to create a narrower context when injecting ancestor nodes.
         *
         * @example
         * `let ABCD = new ResolveContext([A, B, C, D]);`
         *
         * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
         * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
         * However, `B` should only be able to access resolvables from `A`, `B`.
         *
         * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
         * `let AB = ABCD.subcontext(a)`
         */
        ResolveContext.prototype.subContext = function (state) {
            return new ResolveContext(PathUtils.subPath(this._path, function (node) { return node.state === state; }));
        };
        /**
         * Adds Resolvables to the node that matches the state
         *
         * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
         * The resolvable is added to the node matching the `state` parameter.
         *
         * These new resolvables are not automatically fetched.
         * The calling code should either fetch them, fetch something that depends on them,
         * or rely on [[resolvePath]] being called when some state is being entered.
         *
         * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
         *
         * @param newResolvables the new Resolvables
         * @param state Used to find the node to put the resolvable on
         */
        ResolveContext.prototype.addResolvables = function (newResolvables, state) {
            var node = find(this._path, propEq('state', state));
            var keys = newResolvables.map(function (r) { return r.token; });
            node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
        };
        /**
         * Returns a promise for an array of resolved path Element promises
         *
         * @param when
         * @param trans
         * @returns {Promise<any>|any}
         */
        ResolveContext.prototype.resolvePath = function (when, trans) {
            var _this = this;
            if (when === void 0) { when = 'LAZY'; }
            // This option determines which 'when' policy Resolvables we are about to fetch.
            var whenOption = inArray(ALL_WHENS, when) ? when : 'LAZY';
            // If the caller specified EAGER, only the EAGER Resolvables are fetched.
            // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
            var matchedWhens = whenOption === resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
            // get the subpath to the state argument, if provided
            trace.traceResolvePath(this._path, when, trans);
            var matchesPolicy = function (acceptedVals, whenOrAsync) { return function (resolvable) {
                return inArray(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
            }; };
            // Trigger all the (matching) Resolvables in the path
            // Reduce all the "WAIT" Resolvables into an array
            var promises = this._path.reduce(function (acc, node) {
                var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
                var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
                var wait = nodeResolvables.filter(not(matchesPolicy(['NOWAIT'], 'async')));
                // For the matching Resolvables, start their async fetch process.
                var subContext = _this.subContext(node.state);
                var getResult = function (r) {
                    return r
                        .get(subContext, trans)
                        // Return a tuple that includes the Resolvable's token
                        .then(function (value) { return ({ token: r.token, value: value }); });
                };
                nowait.forEach(getResult);
                return acc.concat(wait.map(getResult));
            }, []);
            // Wait for all the "WAIT" resolvables
            return services.$q.all(promises);
        };
        ResolveContext.prototype.injector = function () {
            return this._injector || (this._injector = new UIInjectorImpl(this));
        };
        ResolveContext.prototype.findNode = function (resolvable) {
            return find(this._path, function (node) { return inArray(node.resolvables, resolvable); });
        };
        /**
         * Gets the async dependencies of a Resolvable
         *
         * Given a Resolvable, returns its dependencies as a Resolvable[]
         */
        ResolveContext.prototype.getDependencies = function (resolvable) {
            var _this = this;
            var node = this.findNode(resolvable);
            // Find which other resolvables are "visible" to the `resolvable` argument
            // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
            var subPath = PathUtils.subPath(this._path, function (x) { return x === node; }) || this._path;
            var availableResolvables = subPath
                .reduce(function (acc, _node) { return acc.concat(_node.resolvables); }, []) // all of subpath's resolvables
                .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
            var getDependency = function (token) {
                var matching = availableResolvables.filter(function (r) { return r.token === token; });
                if (matching.length)
                    return tail(matching);
                var fromInjector = _this.injector().getNative(token);
                if (isUndefined(fromInjector)) {
                    throw new Error('Could not find Dependency Injection token: ' + stringify(token));
                }
                return new Resolvable(token, function () { return fromInjector; }, [], fromInjector);
            };
            return resolvable.deps.map(getDependency);
        };
        return ResolveContext;
    }());
    /** @internalapi */
    var UIInjectorImpl = /** @class */ (function () {
        function UIInjectorImpl(context) {
            this.context = context;
            this.native = this.get(NATIVE_INJECTOR_TOKEN) || services.$injector;
        }
        UIInjectorImpl.prototype.get = function (token) {
            var resolvable = this.context.getResolvable(token);
            if (resolvable) {
                if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
                    return resolvable.get(this.context);
                }
                if (!resolvable.resolved) {
                    throw new Error('Resolvable async .get() not complete:' + stringify(resolvable.token));
                }
                return resolvable.data;
            }
            return this.getNative(token);
        };
        UIInjectorImpl.prototype.getAsync = function (token) {
            var resolvable = this.context.getResolvable(token);
            if (resolvable)
                return resolvable.get(this.context);
            return services.$q.when(this.native.get(token));
        };
        UIInjectorImpl.prototype.getNative = function (token) {
            return this.native && this.native.get(token);
        };
        return UIInjectorImpl;
    }());

    /** @publicapi @module resolve */ /** */

    /** @publicapi @module state */ /** */
    var parseUrl = function (url) {
        if (!isString(url))
            return false;
        var root$$1 = url.charAt(0) === '^';
        return { val: root$$1 ? url.substring(1) : url, root: root$$1 };
    };
    function nameBuilder(state) {
        return state.name;
    }
    function selfBuilder(state) {
        state.self.$$state = function () { return state; };
        return state.self;
    }
    function dataBuilder(state) {
        if (state.parent && state.parent.data) {
            state.data = state.self.data = inherit(state.parent.data, state.data);
        }
        return state.data;
    }
    var getUrlBuilder = function ($urlMatcherFactoryProvider, root$$1) {
        return function urlBuilder(stateObject) {
            var stateDec = stateObject.self;
            // For future states, i.e., states whose name ends with `.**`,
            // match anything that starts with the url prefix
            if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
                var newStateDec = {};
                copy(stateDec, newStateDec);
                newStateDec.url += '{remainder:any}'; // match any path (.*)
                stateDec = newStateDec;
            }
            var parent = stateObject.parent;
            var parsed = parseUrl(stateDec.url);
            var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, { state: stateDec });
            if (!url)
                return null;
            if (!$urlMatcherFactoryProvider.isMatcher(url))
                throw new Error("Invalid url '" + url + "' in state '" + stateObject + "'");
            return parsed && parsed.root ? url : ((parent && parent.navigable) || root$$1()).url.append(url);
        };
    };
    var getNavigableBuilder = function (isRoot) {
        return function navigableBuilder(state) {
            return !isRoot(state) && state.url ? state : state.parent ? state.parent.navigable : null;
        };
    };
    var getParamsBuilder = function (paramFactory) {
        return function paramsBuilder(state) {
            var makeConfigParam = function (config, id) { return paramFactory.fromConfig(id, null, state.self); };
            var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
            var nonUrlParams = values(mapObj(omit(state.params || {}, urlParams.map(prop('id'))), makeConfigParam));
            return urlParams
                .concat(nonUrlParams)
                .map(function (p) { return [p.id, p]; })
                .reduce(applyPairs, {});
        };
    };
    function pathBuilder(state) {
        return state.parent ? state.parent.path.concat(state) : /*root*/ [state];
    }
    function includesBuilder(state) {
        var includes = state.parent ? extend({}, state.parent.includes) : {};
        includes[state.name] = true;
        return includes;
    }
    /**
     * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
     *
     * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
     * validates the `resolve` property and converts it to a [[Resolvable]] array.
     *
     * resolve: input value can be:
     *
     * {
     *   // analyzed but not injected
     *   myFooResolve: function() { return "myFooData"; },
     *
     *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
     *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
     *
     *   // Array split; "DependencyName" dep as string
     *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
     *
     *   // Array split; DependencyType dep as token (compared using ===)
     *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
     *
     *   // val.$inject used as deps
     *   // where:
     *   //     corgeResolve.$inject = ["DependencyName"];
     *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
     *   // then "DependencyName" dep as string
     *   myCorgeResolve: corgeResolve,
     *
     *  // inject service by name
     *  // When a string is found, desugar creating a resolve that injects the named service
     *   myGraultResolve: "SomeService"
     * }
     *
     * or:
     *
     * [
     *   new Resolvable("myFooResolve", function() { return "myFooData" }),
     *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
     *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
     * ]
     */
    function resolvablesBuilder(state) {
        /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
        var objects2Tuples = function (resolveObj, resolvePolicies) {
            return Object.keys(resolveObj || {}).map(function (token) { return ({
                token: token,
                val: resolveObj[token],
                deps: undefined,
                policy: resolvePolicies[token],
            }); });
        };
        /** fetch DI annotations from a function or ng1-style array */
        var annotate = function (fn) {
            var $injector = services.$injector;
            // ng1 doesn't have an $injector until runtime.
            // If the $injector doesn't exist, use "deferred" literal as a
            // marker indicating they should be annotated when runtime starts
            return fn['$inject'] || ($injector && $injector.annotate(fn, $injector.strictDi)) || 'deferred';
        };
        /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
        var isResolveLiteral = function (obj) { return !!(obj.token && obj.resolveFn); };
        /** true if the object looks like a provide literal, or a ng2 Provider */
        var isLikeNg2Provider = function (obj) {
            return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass));
        };
        /** true if the object looks like a tuple from obj2Tuples */
        var isTupleFromObj = function (obj) {
            return !!(obj && obj.val && (isString(obj.val) || isArray(obj.val) || isFunction(obj.val)));
        };
        /** extracts the token from a Provider or provide literal */
        var getToken = function (p) { return p.provide || p.token; };
        // prettier-ignore: Given a literal resolve or provider object, returns a Resolvable
        var literal2Resolvable = pattern([
            [prop('resolveFn'), function (p) { return new Resolvable(getToken(p), p.resolveFn, p.deps, p.policy); }],
            [prop('useFactory'), function (p) { return new Resolvable(getToken(p), p.useFactory, p.deps || p.dependencies, p.policy); }],
            [prop('useClass'), function (p) { return new Resolvable(getToken(p), function () { return new p.useClass(); }, [], p.policy); }],
            [prop('useValue'), function (p) { return new Resolvable(getToken(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
            [prop('useExisting'), function (p) { return new Resolvable(getToken(p), identity, [p.useExisting], p.policy); }],
        ]);
        // prettier-ignore
        var tuple2Resolvable = pattern([
            [pipe(prop('val'), isString), function (tuple) { return new Resolvable(tuple.token, identity, [tuple.val], tuple.policy); }],
            [pipe(prop('val'), isArray), function (tuple) { return new Resolvable(tuple.token, tail(tuple.val), tuple.val.slice(0, -1), tuple.policy); }],
            [pipe(prop('val'), isFunction), function (tuple) { return new Resolvable(tuple.token, tuple.val, annotate(tuple.val), tuple.policy); }],
        ]);
        // prettier-ignore
        var item2Resolvable = pattern([
            [is(Resolvable), function (r) { return r; }],
            [isResolveLiteral, literal2Resolvable],
            [isLikeNg2Provider, literal2Resolvable],
            [isTupleFromObj, tuple2Resolvable],
            [val(true), function (obj) { throw new Error('Invalid resolve value: ' + stringify(obj)); },],
        ]);
        // If resolveBlock is already an array, use it as-is.
        // Otherwise, assume it's an object and convert to an Array of tuples
        var decl = state.resolve;
        var items = isArray(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
        return items.map(item2Resolvable);
    }
    /**
     * @internalapi A internal global service
     *
     * StateBuilder is a factory for the internal [[StateObject]] objects.
     *
     * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
     * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
     * [[StateObject]] object, which has an API and is used internally.
     *
     * Custom properties or API may be added to the internal [[StateObject]] object by registering a decorator function
     * using the [[builder]] method.
     */
    var StateBuilder = /** @class */ (function () {
        function StateBuilder(matcher, urlMatcherFactory) {
            this.matcher = matcher;
            var self = this;
            var root$$1 = function () { return matcher.find(''); };
            var isRoot = function (state) { return state.name === ''; };
            function parentBuilder(state) {
                if (isRoot(state))
                    return null;
                return matcher.find(self.parentName(state)) || root$$1();
            }
            this.builders = {
                name: [nameBuilder],
                self: [selfBuilder],
                parent: [parentBuilder],
                data: [dataBuilder],
                // Build a URLMatcher if necessary, either via a relative or absolute URL
                url: [getUrlBuilder(urlMatcherFactory, root$$1)],
                // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
                navigable: [getNavigableBuilder(isRoot)],
                params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
                // Each framework-specific ui-router implementation should define its own `views` builder
                // e.g., src/ng1/statebuilders/views.ts
                views: [],
                // Keep a full path from the root down to this state as this is needed for state activation.
                path: [pathBuilder],
                // Speed up $state.includes() as it's used a lot
                includes: [includesBuilder],
                resolvables: [resolvablesBuilder],
            };
        }
        /**
         * Registers a [[BuilderFunction]] for a specific [[StateObject]] property (e.g., `parent`, `url`, or `path`).
         * More than one BuilderFunction can be registered for a given property.
         *
         * The BuilderFunction(s) will be used to define the property on any subsequently built [[StateObject]] objects.
         *
         * @param name The name of the State property being registered for.
         * @param fn The BuilderFunction which will be used to build the State property
         * @returns a function which deregisters the BuilderFunction
         */
        StateBuilder.prototype.builder = function (name, fn) {
            var builders = this.builders;
            var array = builders[name] || [];
            // Backwards compat: if only one builder exists, return it, else return whole arary.
            if (isString(name) && !isDefined(fn))
                return array.length > 1 ? array : array[0];
            if (!isString(name) || !isFunction(fn))
                return;
            builders[name] = array;
            builders[name].push(fn);
            return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
        };
        /**
         * Builds all of the properties on an essentially blank State object, returning a State object which has all its
         * properties and API built.
         *
         * @param state an uninitialized State object
         * @returns the built State object
         */
        StateBuilder.prototype.build = function (state) {
            var _a = this, matcher = _a.matcher, builders = _a.builders;
            var parent = this.parentName(state);
            if (parent && !matcher.find(parent, undefined, false)) {
                return null;
            }
            for (var key in builders) {
                if (!builders.hasOwnProperty(key))
                    continue;
                var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, noop);
                state[key] = chain(state);
            }
            return state;
        };
        StateBuilder.prototype.parentName = function (state) {
            // name = 'foo.bar.baz.**'
            var name = state.name || '';
            // segments = ['foo', 'bar', 'baz', '.**']
            var segments = name.split('.');
            // segments = ['foo', 'bar', 'baz']
            var lastSegment = segments.pop();
            // segments = ['foo', 'bar'] (ignore .** segment for future states)
            if (lastSegment === '**')
                segments.pop();
            if (segments.length) {
                if (state.parent) {
                    throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
                }
                // 'foo.bar'
                return segments.join('.');
            }
            if (!state.parent)
                return '';
            return isString(state.parent) ? state.parent : state.parent.name;
        };
        StateBuilder.prototype.name = function (state) {
            var name = state.name;
            if (name.indexOf('.') !== -1 || !state.parent)
                return name;
            var parentName = isString(state.parent) ? state.parent : state.parent.name;
            return parentName ? parentName + '.' + name : name;
        };
        return StateBuilder;
    }());

    /**
     * Internal representation of a UI-Router state.
     *
     * Instances of this class are created when a [[StateDeclaration]] is registered with the [[StateRegistry]].
     *
     * A registered [[StateDeclaration]] is augmented with a getter ([[StateDeclaration.$$state]]) which returns the corresponding [[StateObject]] object.
     *
     * This class prototypally inherits from the corresponding [[StateDeclaration]].
     * Each of its own properties (i.e., `hasOwnProperty`) are built using builders from the [[StateBuilder]].
     */
    var StateObject = /** @class */ (function () {
        /** @deprecated use State.create() */
        function StateObject(config) {
            return StateObject.create(config || {});
        }
        /**
         * Create a state object to put the private/internal implementation details onto.
         * The object's prototype chain looks like:
         * (Internal State Object) -> (Copy of State.prototype) -> (State Declaration object) -> (State Declaration's prototype...)
         *
         * @param stateDecl the user-supplied State Declaration
         * @returns {StateObject} an internal State object
         */
        StateObject.create = function (stateDecl) {
            stateDecl = StateObject.isStateClass(stateDecl) ? new stateDecl() : stateDecl;
            var state = inherit(inherit(stateDecl, StateObject.prototype));
            stateDecl.$$state = function () { return state; };
            state.self = stateDecl;
            state.__stateObjectCache = {
                nameGlob: Glob.fromString(state.name),
            };
            return state;
        };
        /**
         * Returns true if the provided parameter is the same state.
         *
         * Compares the identity of the state against the passed value, which is either an object
         * reference to the actual `State` instance, the original definition object passed to
         * `$stateProvider.state()`, or the fully-qualified name.
         *
         * @param ref Can be one of (a) a `State` instance, (b) an object that was passed
         *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
         * @returns Returns `true` if `ref` matches the current `State` instance.
         */
        StateObject.prototype.is = function (ref) {
            return this === ref || this.self === ref || this.fqn() === ref;
        };
        /**
         * @deprecated this does not properly handle dot notation
         * @returns Returns a dot-separated name of the state.
         */
        StateObject.prototype.fqn = function () {
            if (!this.parent || !(this.parent instanceof this.constructor))
                return this.name;
            var name = this.parent.fqn();
            return name ? name + '.' + this.name : this.name;
        };
        /**
         * Returns the root node of this state's tree.
         *
         * @returns The root of this state's tree.
         */
        StateObject.prototype.root = function () {
            return (this.parent && this.parent.root()) || this;
        };
        /**
         * Gets the state's `Param` objects
         *
         * Gets the list of [[Param]] objects owned by the state.
         * If `opts.inherit` is true, it also includes the ancestor states' [[Param]] objects.
         * If `opts.matchingKeys` exists, returns only `Param`s whose `id` is a key on the `matchingKeys` object
         *
         * @param opts options
         */
        StateObject.prototype.parameters = function (opts) {
            opts = defaults(opts, { inherit: true, matchingKeys: null });
            var inherited = (opts.inherit && this.parent && this.parent.parameters()) || [];
            return inherited
                .concat(values(this.params))
                .filter(function (param) { return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id); });
        };
        /**
         * Returns a single [[Param]] that is owned by the state
         *
         * If `opts.inherit` is true, it also searches the ancestor states` [[Param]]s.
         * @param id the name of the [[Param]] to return
         * @param opts options
         */
        StateObject.prototype.parameter = function (id, opts) {
            if (opts === void 0) { opts = {}; }
            return ((this.url && this.url.parameter(id, opts)) ||
                find(values(this.params), propEq('id', id)) ||
                (opts.inherit && this.parent && this.parent.parameter(id)));
        };
        StateObject.prototype.toString = function () {
            return this.fqn();
        };
        /** Predicate which returns true if the object is an class with @State() decorator */
        StateObject.isStateClass = function (stateDecl) {
            return isFunction(stateDecl) && stateDecl['__uiRouterState'] === true;
        };
        /** Predicate which returns true if the object is an internal [[StateObject]] object */
        StateObject.isState = function (obj) { return isObject(obj['__stateObjectCache']); };
        return StateObject;
    }());

    /** @publicapi @module state */ /** */
    var StateMatcher = /** @class */ (function () {
        function StateMatcher(_states) {
            this._states = _states;
        }
        StateMatcher.prototype.isRelative = function (stateName) {
            stateName = stateName || '';
            return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
        };
        StateMatcher.prototype.find = function (stateOrName, base, matchGlob) {
            if (matchGlob === void 0) { matchGlob = true; }
            if (!stateOrName && stateOrName !== '')
                return undefined;
            var isStr = isString(stateOrName);
            var name = isStr ? stateOrName : stateOrName.name;
            if (this.isRelative(name))
                name = this.resolvePath(name, base);
            var state = this._states[name];
            if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
                return state;
            }
            else if (isStr && matchGlob) {
                var _states = values(this._states);
                var matches = _states.filter(function (_state) { return _state.__stateObjectCache.nameGlob && _state.__stateObjectCache.nameGlob.matches(name); });
                if (matches.length > 1) {
                    // tslint:disable-next-line:no-console
                    console.log("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
                }
                return matches[0];
            }
            return undefined;
        };
        StateMatcher.prototype.resolvePath = function (name, base) {
            if (!base)
                throw new Error("No reference point given for path '" + name + "'");
            var baseState = this.find(base);
            var splitName = name.split('.');
            var pathLength = splitName.length;
            var i = 0, current = baseState;
            for (; i < pathLength; i++) {
                if (splitName[i] === '' && i === 0) {
                    current = baseState;
                    continue;
                }
                if (splitName[i] === '^') {
                    if (!current.parent)
                        throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
                    current = current.parent;
                    continue;
                }
                break;
            }
            var relName = splitName.slice(i).join('.');
            return current.name + (current.name && relName ? '.' : '') + relName;
        };
        return StateMatcher;
    }());

    /** @publicapi @module state */ /** */
    /** @internalapi */
    var StateQueueManager = /** @class */ (function () {
        function StateQueueManager(router, states, builder, listeners) {
            this.router = router;
            this.states = states;
            this.builder = builder;
            this.listeners = listeners;
            this.queue = [];
        }
        /** @internalapi */
        StateQueueManager.prototype.dispose = function () {
            this.queue = [];
        };
        StateQueueManager.prototype.register = function (stateDecl) {
            var queue = this.queue;
            var state = StateObject.create(stateDecl);
            var name = state.name;
            if (!isString(name))
                throw new Error('State must have a valid name');
            if (this.states.hasOwnProperty(name) || inArray(queue.map(prop('name')), name))
                throw new Error("State '" + name + "' is already defined");
            queue.push(state);
            this.flush();
            return state;
        };
        StateQueueManager.prototype.flush = function () {
            var _this = this;
            var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
            var registered = [], // states that got registered
            orphans = [], // states that don't yet have a parent registered
            previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
            var getState = function (name) { return _this.states.hasOwnProperty(name) && _this.states[name]; };
            var notifyListeners = function () {
                if (registered.length) {
                    _this.listeners.forEach(function (listener) { return listener('registered', registered.map(function (s) { return s.self; })); });
                }
            };
            while (queue.length > 0) {
                var state = queue.shift();
                var name_1 = state.name;
                var result = builder.build(state);
                var orphanIdx = orphans.indexOf(state);
                if (result) {
                    var existingState = getState(name_1);
                    if (existingState && existingState.name === name_1) {
                        throw new Error("State '" + name_1 + "' is already defined");
                    }
                    var existingFutureState = getState(name_1 + '.**');
                    if (existingFutureState) {
                        // Remove future state of the same name
                        this.router.stateRegistry.deregister(existingFutureState);
                    }
                    states[name_1] = state;
                    this.attachRoute(state);
                    if (orphanIdx >= 0)
                        orphans.splice(orphanIdx, 1);
                    registered.push(state);
                    continue;
                }
                var prev = previousQueueLength[name_1];
                previousQueueLength[name_1] = queue.length;
                if (orphanIdx >= 0 && prev === queue.length) {
                    // Wait until two consecutive iterations where no additional states were dequeued successfully.
                    // throw new Error(`Cannot register orphaned state '${name}'`);
                    queue.push(state);
                    notifyListeners();
                    return states;
                }
                else if (orphanIdx < 0) {
                    orphans.push(state);
                }
                queue.push(state);
            }
            notifyListeners();
            return states;
        };
        StateQueueManager.prototype.attachRoute = function (state) {
            if (state.abstract || !state.url)
                return;
            var rulesApi = this.router.urlService.rules;
            rulesApi.rule(rulesApi.urlRuleFactory.create(state));
        };
        return StateQueueManager;
    }());

    /** @publicapi @module state */ /** */
    var StateRegistry = /** @class */ (function () {
        /** @internalapi */
        function StateRegistry(router) {
            this.router = router;
            this.states = {};
            this.listeners = [];
            this.matcher = new StateMatcher(this.states);
            this.builder = new StateBuilder(this.matcher, router.urlMatcherFactory);
            this.stateQueue = new StateQueueManager(router, this.states, this.builder, this.listeners);
            this._registerRoot();
        }
        /** @internalapi */
        StateRegistry.prototype._registerRoot = function () {
            var rootStateDef = {
                name: '',
                url: '^',
                views: null,
                params: {
                    '#': { value: null, type: 'hash', dynamic: true },
                },
                abstract: true,
            };
            var _root = (this._root = this.stateQueue.register(rootStateDef));
            _root.navigable = null;
        };
        /** @internalapi */
        StateRegistry.prototype.dispose = function () {
            var _this = this;
            this.stateQueue.dispose();
            this.listeners = [];
            this.get().forEach(function (state) { return _this.get(state) && _this.deregister(state); });
        };
        /**
         * Listen for a State Registry events
         *
         * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
         *
         * #### Example:
         * ```js
         * let allStates = registry.get();
         *
         * // Later, invoke deregisterFn() to remove the listener
         * let deregisterFn = registry.onStatesChanged((event, states) => {
         *   switch(event) {
         *     case: 'registered':
         *       states.forEach(state => allStates.push(state));
         *       break;
         *     case: 'deregistered':
         *       states.forEach(state => {
         *         let idx = allStates.indexOf(state);
         *         if (idx !== -1) allStates.splice(idx, 1);
         *       });
         *       break;
         *   }
         * });
         * ```
         *
         * @param listener a callback function invoked when the registered states changes.
         *        The function receives two parameters, `event` and `state`.
         *        See [[StateRegistryListener]]
         * @return a function that deregisters the listener
         */
        StateRegistry.prototype.onStatesChanged = function (listener) {
            this.listeners.push(listener);
            return function deregisterListener() {
                removeFrom(this.listeners)(listener);
            }.bind(this);
        };
        /**
         * Gets the implicit root state
         *
         * Gets the root of the state tree.
         * The root state is implicitly created by UI-Router.
         * Note: this returns the internal [[StateObject]] representation, not a [[StateDeclaration]]
         *
         * @return the root [[StateObject]]
         */
        StateRegistry.prototype.root = function () {
            return this._root;
        };
        /**
         * Adds a state to the registry
         *
         * Registers a [[StateDeclaration]] or queues it for registration.
         *
         * Note: a state will be queued if the state's parent isn't yet registered.
         *
         * @param stateDefinition the definition of the state to register.
         * @returns the internal [[StateObject]] object.
         *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
         *          If the state was only queued, then the object is not fully built.
         */
        StateRegistry.prototype.register = function (stateDefinition) {
            return this.stateQueue.register(stateDefinition);
        };
        /** @hidden */
        StateRegistry.prototype._deregisterTree = function (state) {
            var _this = this;
            var all$$1 = this.get().map(function (s) { return s.$$state(); });
            var getChildren = function (states) {
                var _children = all$$1.filter(function (s) { return states.indexOf(s.parent) !== -1; });
                return _children.length === 0 ? _children : _children.concat(getChildren(_children));
            };
            var children = getChildren([state]);
            var deregistered = [state].concat(children).reverse();
            deregistered.forEach(function (_state) {
                var rulesApi = _this.router.urlService.rules;
                // Remove URL rule
                rulesApi
                    .rules()
                    .filter(propEq('state', _state))
                    .forEach(function (rule) { return rulesApi.removeRule(rule); });
                // Remove state from registry
                delete _this.states[_state.name];
            });
            return deregistered;
        };
        /**
         * Removes a state from the registry
         *
         * This removes a state from the registry.
         * If the state has children, they are are also removed from the registry.
         *
         * @param stateOrName the state's name or object representation
         * @returns {StateObject[]} a list of removed states
         */
        StateRegistry.prototype.deregister = function (stateOrName) {
            var _state = this.get(stateOrName);
            if (!_state)
                throw new Error("Can't deregister state; not found: " + stateOrName);
            var deregisteredStates = this._deregisterTree(_state.$$state());
            this.listeners.forEach(function (listener) { return listener('deregistered', deregisteredStates.map(function (s) { return s.self; })); });
            return deregisteredStates;
        };
        StateRegistry.prototype.get = function (stateOrName, base) {
            var _this = this;
            if (arguments.length === 0)
                return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
            var found = this.matcher.find(stateOrName, base);
            return (found && found.self) || null;
        };
        StateRegistry.prototype.decorator = function (name, func) {
            return this.builder.builder(name, func);
        };
        return StateRegistry;
    }());

    (function (TransitionHookPhase) {
        TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
        TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
        TransitionHookPhase[TransitionHookPhase["RUN"] = 2] = "RUN";
        TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
        TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
    })(exports.TransitionHookPhase || (exports.TransitionHookPhase = {}));

    (function (TransitionHookScope) {
        TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
        TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
    })(exports.TransitionHookScope || (exports.TransitionHookScope = {}));

    /** @publicapi @module transition */ /** */
    var defaultOptions = {
        current: noop,
        transition: null,
        traceData: {},
        bind: null,
    };
    /** @hidden */
    var TransitionHook = /** @class */ (function () {
        function TransitionHook(transition, stateContext, registeredHook, options) {
            var _this = this;
            this.transition = transition;
            this.stateContext = stateContext;
            this.registeredHook = registeredHook;
            this.options = options;
            this.isSuperseded = function () { return _this.type.hookPhase === exports.TransitionHookPhase.RUN && !_this.options.transition.isActive(); };
            this.options = defaults(options, defaultOptions);
            this.type = registeredHook.eventType;
        }
        /**
         * Chains together an array of TransitionHooks.
         *
         * Given a list of [[TransitionHook]] objects, chains them together.
         * Each hook is invoked after the previous one completes.
         *
         * #### Example:
         * ```js
         * var hooks: TransitionHook[] = getHooks();
         * let promise: Promise<any> = TransitionHook.chain(hooks);
         *
         * promise.then(handleSuccess, handleError);
         * ```
         *
         * @param hooks the list of hooks to chain together
         * @param waitFor if provided, the chain is `.then()`'ed off this promise
         * @returns a `Promise` for sequentially invoking the hooks (in order)
         */
        TransitionHook.chain = function (hooks, waitFor) {
            // Chain the next hook off the previous
            var createHookChainR = function (prev, nextHook) { return prev.then(function () { return nextHook.invokeHook(); }); };
            return hooks.reduce(createHookChainR, waitFor || services.$q.when());
        };
        /**
         * Invokes all the provided TransitionHooks, in order.
         * Each hook's return value is checked.
         * If any hook returns a promise, then the rest of the hooks are chained off that promise, and the promise is returned.
         * If no hook returns a promise, then all hooks are processed synchronously.
         *
         * @param hooks the list of TransitionHooks to invoke
         * @param doneCallback a callback that is invoked after all the hooks have successfully completed
         *
         * @returns a promise for the async result, or the result of the callback
         */
        TransitionHook.invokeHooks = function (hooks, doneCallback) {
            for (var idx = 0; idx < hooks.length; idx++) {
                var hookResult = hooks[idx].invokeHook();
                if (isPromise(hookResult)) {
                    var remainingHooks = hooks.slice(idx + 1);
                    return TransitionHook.chain(remainingHooks, hookResult).then(doneCallback);
                }
            }
            return doneCallback();
        };
        /**
         * Run all TransitionHooks, ignoring their return value.
         */
        TransitionHook.runAllHooks = function (hooks) {
            hooks.forEach(function (hook) { return hook.invokeHook(); });
        };
        TransitionHook.prototype.logError = function (err) {
            this.transition.router.stateService.defaultErrorHandler()(err);
        };
        TransitionHook.prototype.invokeHook = function () {
            var _this = this;
            var hook = this.registeredHook;
            if (hook._deregistered)
                return;
            var notCurrent = this.getNotCurrentRejection();
            if (notCurrent)
                return notCurrent;
            var options = this.options;
            trace.traceHookInvocation(this, this.transition, options);
            var invokeCallback = function () { return hook.callback.call(options.bind, _this.transition, _this.stateContext); };
            var normalizeErr = function (err) { return Rejection.normalize(err).toPromise(); };
            var handleError = function (err) { return hook.eventType.getErrorHandler(_this)(err); };
            var handleResult = function (result) { return hook.eventType.getResultHandler(_this)(result); };
            try {
                var result = invokeCallback();
                if (!this.type.synchronous && isPromise(result)) {
                    return result.catch(normalizeErr).then(handleResult, handleError);
                }
                else {
                    return handleResult(result);
                }
            }
            catch (err) {
                // If callback throws (synchronously)
                return handleError(Rejection.normalize(err));
            }
            finally {
                if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
                    hook.deregister();
                }
            }
        };
        /**
         * This method handles the return value of a Transition Hook.
         *
         * A hook can return false (cancel), a TargetState (redirect),
         * or a promise (which may later resolve to false or a redirect)
         *
         * This also handles "transition superseded" -- when a new transition
         * was started while the hook was still running
         */
        TransitionHook.prototype.handleHookResult = function (result) {
            var _this = this;
            var notCurrent = this.getNotCurrentRejection();
            if (notCurrent)
                return notCurrent;
            // Hook returned a promise
            if (isPromise(result)) {
                // Wait for the promise, then reprocess with the resulting value
                return result.then(function (val$$1) { return _this.handleHookResult(val$$1); });
            }
            trace.traceHookResult(result, this.transition, this.options);
            // Hook returned false
            if (result === false) {
                // Abort this Transition
                return Rejection.aborted('Hook aborted transition').toPromise();
            }
            var isTargetState = is(TargetState);
            // hook returned a TargetState
            if (isTargetState(result)) {
                // Halt the current Transition and redirect (a new Transition) to the TargetState.
                return Rejection.redirected(result).toPromise();
            }
        };
        /**
         * Return a Rejection promise if the transition is no longer current due
         * to a stopped router (disposed), or a new transition has started and superseded this one.
         */
        TransitionHook.prototype.getNotCurrentRejection = function () {
            var router = this.transition.router;
            // The router is stopped
            if (router._disposed) {
                return Rejection.aborted("UIRouter instance #" + router.$id + " has been stopped (disposed)").toPromise();
            }
            if (this.transition._aborted) {
                return Rejection.aborted().toPromise();
            }
            // This transition is no longer current.
            // Another transition started while this hook was still running.
            if (this.isSuperseded()) {
                // Abort this transition
                return Rejection.superseded(this.options.current()).toPromise();
            }
        };
        TransitionHook.prototype.toString = function () {
            var _a = this, options = _a.options, registeredHook = _a.registeredHook;
            var event = parse('traceData.hookType')(options) || 'internal', context = parse('traceData.context.state.name')(options) || parse('traceData.context')(options) || 'unknown', name = fnToString(registeredHook.callback);
            return event + " context: " + context + ", " + maxLength(200, name);
        };
        /**
         * These GetResultHandler(s) are used by [[invokeHook]] below
         * Each HookType chooses a GetResultHandler (See: [[TransitionService._defineCoreEvents]])
         */
        TransitionHook.HANDLE_RESULT = function (hook) { return function (result) {
            return hook.handleHookResult(result);
        }; };
        /**
         * If the result is a promise rejection, log it.
         * Otherwise, ignore the result.
         */
        TransitionHook.LOG_REJECTED_RESULT = function (hook) { return function (result) {
            isPromise(result) && result.catch(function (err) { return hook.logError(Rejection.normalize(err)); });
            return undefined;
        }; };
        /**
         * These GetErrorHandler(s) are used by [[invokeHook]] below
         * Each HookType chooses a GetErrorHandler (See: [[TransitionService._defineCoreEvents]])
         */
        TransitionHook.LOG_ERROR = function (hook) { return function (error) { return hook.logError(error); }; };
        TransitionHook.REJECT_ERROR = function (hook) { return function (error) { return silentRejection(error); }; };
        TransitionHook.THROW_ERROR = function (hook) { return function (error) {
            throw error;
        }; };
        return TransitionHook;
    }());

    /** @publicapi @module transition */ /** */
    /**
     * Determines if the given state matches the matchCriteria
     *
     * @hidden
     *
     * @param state a State Object to test against
     * @param criterion
     * - If a string, matchState uses the string as a glob-matcher against the state name
     * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
     *   and returns a positive match if any of the globs match.
     * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
     * @returns {boolean}
     */
    function matchState(state, criterion, transition) {
        var toMatch = isString(criterion) ? [criterion] : criterion;
        function matchGlobs(_state) {
            var globStrings = toMatch;
            for (var i = 0; i < globStrings.length; i++) {
                var glob = new Glob(globStrings[i]);
                if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                    return true;
                }
            }
            return false;
        }
        var matchFn = (isFunction(toMatch) ? toMatch : matchGlobs);
        return !!matchFn(state, transition);
    }
    /**
     * @internalapi
     * The registration data for a registered transition hook
     */
    var RegisteredHook = /** @class */ (function () {
        function RegisteredHook(tranSvc, eventType, callback, matchCriteria, removeHookFromRegistry, options) {
            if (options === void 0) { options = {}; }
            this.tranSvc = tranSvc;
            this.eventType = eventType;
            this.callback = callback;
            this.matchCriteria = matchCriteria;
            this.removeHookFromRegistry = removeHookFromRegistry;
            this.invokeCount = 0;
            this._deregistered = false;
            this.priority = options.priority || 0;
            this.bind = options.bind || null;
            this.invokeLimit = options.invokeLimit;
        }
        /**
         * Gets the matching [[PathNode]]s
         *
         * Given an array of [[PathNode]]s, and a [[HookMatchCriterion]], returns an array containing
         * the [[PathNode]]s that the criteria matches, or `null` if there were no matching nodes.
         *
         * Returning `null` is significant to distinguish between the default
         * "match-all criterion value" of `true` compared to a `() => true` function,
         * when the nodes is an empty array.
         *
         * This is useful to allow a transition match criteria of `entering: true`
         * to still match a transition, even when `entering === []`.  Contrast that
         * with `entering: (state) => true` which only matches when a state is actually
         * being entered.
         */
        RegisteredHook.prototype._matchingNodes = function (nodes, criterion, transition) {
            if (criterion === true)
                return nodes;
            var matching = nodes.filter(function (node) { return matchState(node.state, criterion, transition); });
            return matching.length ? matching : null;
        };
        /**
         * Gets the default match criteria (all `true`)
         *
         * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
         *
         * ```js
         * {
         *   to: true,
         *   from: true,
         *   entering: true,
         *   exiting: true,
         *   retained: true,
         * }
         */
        RegisteredHook.prototype._getDefaultMatchCriteria = function () {
            return mapObj(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
        };
        /**
         * Gets matching nodes as [[IMatchingNodes]]
         *
         * Create a IMatchingNodes object from the TransitionHookTypes that is roughly equivalent to:
         *
         * ```js
         * let matches: IMatchingNodes = {
         *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
         *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
         *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
         *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
         *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
         * };
         * ```
         */
        RegisteredHook.prototype._getMatchingNodes = function (treeChanges, transition) {
            var _this = this;
            var criteria = extend(this._getDefaultMatchCriteria(), this.matchCriteria);
            var paths = values(this.tranSvc._pluginapi._getPathTypes());
            return paths.reduce(function (mn, pathtype) {
                // STATE scope criteria matches against every node in the path.
                // TRANSITION scope criteria matches against only the last node in the path
                var isStateHook = pathtype.scope === exports.TransitionHookScope.STATE;
                var path = treeChanges[pathtype.name] || [];
                var nodes = isStateHook ? path : [tail(path)];
                mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name], transition);
                return mn;
            }, {});
        };
        /**
         * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
         *
         * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
         * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
         */
        RegisteredHook.prototype.matches = function (treeChanges, transition) {
            var matches = this._getMatchingNodes(treeChanges, transition);
            // Check if all the criteria matched the TreeChanges object
            var allMatched = values(matches).every(identity);
            return allMatched ? matches : null;
        };
        RegisteredHook.prototype.deregister = function () {
            this.removeHookFromRegistry(this);
            this._deregistered = true;
        };
        return RegisteredHook;
    }());
    /** @hidden Return a registration function of the requested type. */
    function makeEvent(registry, transitionService, eventType) {
        // Create the object which holds the registered transition hooks.
        var _registeredHooks = (registry._registeredHooks = registry._registeredHooks || {});
        var hooks = (_registeredHooks[eventType.name] = []);
        var removeHookFn = removeFrom(hooks);
        // Create hook registration function on the IHookRegistry for the event
        registry[eventType.name] = hookRegistrationFn;
        function hookRegistrationFn(matchObject, callback, options) {
            if (options === void 0) { options = {}; }
            var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, removeHookFn, options);
            hooks.push(registeredHook);
            return registeredHook.deregister.bind(registeredHook);
        }
        return hookRegistrationFn;
    }

    /** @publicapi @module transition */ /** */
    /**
     * This class returns applicable TransitionHooks for a specific Transition instance.
     *
     * Hooks ([[RegisteredHook]]) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
     * myTransition.onEnter(...).  The HookBuilder finds matching RegisteredHooks (where the match criteria is
     * determined by the type of hook)
     *
     * The HookBuilder also converts RegisteredHooks objects to TransitionHook objects, which are used to run a Transition.
     *
     * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
     * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
     * in the Transition class, so we must also provide the Transition's _treeChanges)
     *
     */
    var HookBuilder = /** @class */ (function () {
        function HookBuilder(transition) {
            this.transition = transition;
        }
        HookBuilder.prototype.buildHooksForPhase = function (phase) {
            var _this = this;
            var $transitions = this.transition.router.transitionService;
            return $transitions._pluginapi
                ._getEvents(phase)
                .map(function (type) { return _this.buildHooks(type); })
                .reduce(unnestR, [])
                .filter(identity);
        };
        /**
         * Returns an array of newly built TransitionHook objects.
         *
         * - Finds all RegisteredHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
         * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
         * - For each of the [[PathNode]]s, creates a TransitionHook
         *
         * @param hookType the type of the hook registration function, e.g., 'onEnter', 'onFinish'.
         */
        HookBuilder.prototype.buildHooks = function (hookType) {
            var transition = this.transition;
            var treeChanges = transition.treeChanges();
            // Find all the matching registered hooks for a given hook type
            var matchingHooks = this.getMatchingHooks(hookType, treeChanges, transition);
            if (!matchingHooks)
                return [];
            var baseHookOptions = {
                transition: transition,
                current: transition.options().current,
            };
            var makeTransitionHooks = function (hook) {
                // Fetch the Nodes that caused this hook to match.
                var matches = hook.matches(treeChanges, transition);
                // Select the PathNode[] that will be used as TransitionHook context objects
                var matchingNodes = matches[hookType.criteriaMatchPath.name];
                // Return an array of HookTuples
                return matchingNodes.map(function (node) {
                    var _options = extend({
                        bind: hook.bind,
                        traceData: { hookType: hookType.name, context: node },
                    }, baseHookOptions);
                    var state = hookType.criteriaMatchPath.scope === exports.TransitionHookScope.STATE ? node.state.self : null;
                    var transitionHook = new TransitionHook(transition, state, hook, _options);
                    return { hook: hook, node: node, transitionHook: transitionHook };
                });
            };
            return matchingHooks
                .map(makeTransitionHooks)
                .reduce(unnestR, [])
                .sort(tupleSort(hookType.reverseSort))
                .map(function (tuple) { return tuple.transitionHook; });
        };
        /**
         * Finds all RegisteredHooks from:
         * - The Transition object instance hook registry
         * - The TransitionService ($transitions) global hook registry
         *
         * which matched:
         * - the eventType
         * - the matchCriteria (to, from, exiting, retained, entering)
         *
         * @returns an array of matched [[RegisteredHook]]s
         */
        HookBuilder.prototype.getMatchingHooks = function (hookType, treeChanges, transition) {
            var isCreate = hookType.hookPhase === exports.TransitionHookPhase.CREATE;
            // Instance and Global hook registries
            var $transitions = this.transition.router.transitionService;
            var registries = isCreate ? [$transitions] : [this.transition, $transitions];
            return registries
                .map(function (reg) { return reg.getHooks(hookType.name); }) // Get named hooks from registries
                .filter(assertPredicate(isArray, "broken event named: " + hookType.name)) // Sanity check
                .reduce(unnestR, []) // Un-nest RegisteredHook[][] to RegisteredHook[] array
                .filter(function (hook) { return hook.matches(treeChanges, transition); }); // Only those satisfying matchCriteria
        };
        return HookBuilder;
    }());
    /**
     * A factory for a sort function for HookTuples.
     *
     * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
     * the EventHook priority.
     *
     * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
     * @returns a tuple sort function
     */
    function tupleSort(reverseDepthSort) {
        if (reverseDepthSort === void 0) { reverseDepthSort = false; }
        return function nodeDepthThenPriority(l, r) {
            var factor = reverseDepthSort ? -1 : 1;
            var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
            return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
        };
    }

    /** @publicapi @module transition */ /** */
    /** @hidden */
    var stateSelf = prop('self');
    /**
     * Represents a transition between two states.
     *
     * When navigating to a state, we are transitioning **from** the current state **to** the new state.
     *
     * This object contains all contextual information about the to/from states, parameters, resolves.
     * It has information about all states being entered and exited as a result of the transition.
     */
    var Transition = /** @class */ (function () {
        /**
         * Creates a new Transition object.
         *
         * If the target state is not valid, an error is thrown.
         *
         * @internalapi
         *
         * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
         *        encapsulates the "from state".
         * @param targetState The target state and parameters being transitioned to (also, the transition options)
         * @param router The [[UIRouter]] instance
         */
        function Transition(fromPath, targetState, router) {
            var _this = this;
            /** @hidden */
            this._deferred = services.$q.defer();
            /**
             * This promise is resolved or rejected based on the outcome of the Transition.
             *
             * When the transition is successful, the promise is resolved
             * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
             */
            this.promise = this._deferred.promise;
            /** @hidden Holds the hook registration functions such as those passed to Transition.onStart() */
            this._registeredHooks = {};
            /** @hidden */
            this._hookBuilder = new HookBuilder(this);
            /** Checks if this transition is currently active/running. */
            this.isActive = function () { return _this.router.globals.transition === _this; };
            this.router = router;
            this._targetState = targetState;
            if (!targetState.valid()) {
                throw new Error(targetState.error());
            }
            // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
            this._options = extend({ current: val(this) }, targetState.options());
            this.$id = router.transitionService._transitionCount++;
            var toPath = PathUtils.buildToPath(fromPath, targetState);
            this._treeChanges = PathUtils.treeChanges(fromPath, toPath, this._options.reloadState);
            this.createTransitionHookRegFns();
            var onCreateHooks = this._hookBuilder.buildHooksForPhase(exports.TransitionHookPhase.CREATE);
            TransitionHook.invokeHooks(onCreateHooks, function () { return null; });
            this.applyViewConfigs(router);
        }
        /** @hidden */
        Transition.prototype.onBefore = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onStart = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onExit = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onRetain = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onEnter = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onFinish = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onSuccess = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onError = function (criteria, callback, options) {
            return;
        };
        /** @hidden
         * Creates the transition-level hook registration functions
         * (which can then be used to register hooks)
         */
        Transition.prototype.createTransitionHookRegFns = function () {
            var _this = this;
            this.router.transitionService._pluginapi
                ._getEvents()
                .filter(function (type) { return type.hookPhase !== exports.TransitionHookPhase.CREATE; })
                .forEach(function (type) { return makeEvent(_this, _this.router.transitionService, type); });
        };
        /** @internalapi */
        Transition.prototype.getHooks = function (hookName) {
            return this._registeredHooks[hookName];
        };
        Transition.prototype.applyViewConfigs = function (router) {
            var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
            PathUtils.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
        };
        /**
         * @internalapi
         *
         * @returns the internal from [State] object
         */
        Transition.prototype.$from = function () {
            return tail(this._treeChanges.from).state;
        };
        /**
         * @internalapi
         *
         * @returns the internal to [State] object
         */
        Transition.prototype.$to = function () {
            return tail(this._treeChanges.to).state;
        };
        /**
         * Returns the "from state"
         *
         * Returns the state that the transition is coming *from*.
         *
         * @returns The state declaration object for the Transition's ("from state").
         */
        Transition.prototype.from = function () {
            return this.$from().self;
        };
        /**
         * Returns the "to state"
         *
         * Returns the state that the transition is going *to*.
         *
         * @returns The state declaration object for the Transition's target state ("to state").
         */
        Transition.prototype.to = function () {
            return this.$to().self;
        };
        /**
         * Gets the Target State
         *
         * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]] as a single object.
         *
         * @returns the [[TargetState]] of this Transition
         */
        Transition.prototype.targetState = function () {
            return this._targetState;
        };
        /**
         * Determines whether two transitions are equivalent.
         * @deprecated
         */
        Transition.prototype.is = function (compare) {
            if (compare instanceof Transition) {
                // TODO: Also compare parameters
                return this.is({ to: compare.$to().name, from: compare.$from().name });
            }
            return !((compare.to && !matchState(this.$to(), compare.to, this)) ||
                (compare.from && !matchState(this.$from(), compare.from, this)));
        };
        Transition.prototype.params = function (pathname) {
            if (pathname === void 0) { pathname = 'to'; }
            return Object.freeze(this._treeChanges[pathname].map(prop('paramValues')).reduce(mergeR, {}));
        };
        Transition.prototype.paramsChanged = function () {
            var fromParams = this.params('from');
            var toParams = this.params('to');
            // All the parameters declared on both the "to" and "from" paths
            var allParamDescriptors = []
                .concat(this._treeChanges.to)
                .concat(this._treeChanges.from)
                .map(function (pathNode) { return pathNode.paramSchema; })
                .reduce(flattenR, [])
                .reduce(uniqR, []);
            var changedParamDescriptors = Param.changed(allParamDescriptors, fromParams, toParams);
            return changedParamDescriptors.reduce(function (changedValues, descriptor) {
                changedValues[descriptor.id] = toParams[descriptor.id];
                return changedValues;
            }, {});
        };
        /**
         * Creates a [[UIInjector]] Dependency Injector
         *
         * Returns a Dependency Injector for the Transition's target state (to state).
         * The injector provides resolve values which the target state has access to.
         *
         * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
         *
         * #### Example:
         * ```js
         * .onEnter({ entering: 'myState' }, trans => {
         *   var myResolveValue = trans.injector().get('myResolve');
         *   // Inject a global service from the global/native injector (if it exists)
         *   var MyService = trans.injector().get('MyService');
         * })
         * ```
         *
         * In some cases (such as `onBefore`), you may need access to some resolve data but it has not yet been fetched.
         * You can use [[UIInjector.getAsync]] to get a promise for the data.
         * #### Example:
         * ```js
         * .onBefore({}, trans => {
         *   return trans.injector().getAsync('myResolve').then(myResolveValue =>
         *     return myResolveValue !== 'ABORT';
         *   });
         * });
         * ```
         *
         * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
         * This can be useful if both a parent state `foo` and a child state `foo.bar` have both defined a resolve such as `data`.
         * #### Example:
         * ```js
         * .onEnter({ to: 'foo.bar' }, trans => {
         *   // returns result of `foo` state's `myResolve` resolve
         *   // even though `foo.bar` also has a `myResolve` resolve
         *   var fooData = trans.injector('foo').get('myResolve');
         * });
         * ```
         *
         * If you need resolve data from the exiting states, pass `'from'` as `pathName`.
         * The resolve data from the `from` path will be returned.
         * #### Example:
         * ```js
         * .onExit({ exiting: 'foo.bar' }, trans => {
         *   // Gets the resolve value of `myResolve` from the state being exited
         *   var fooData = trans.injector(null, 'from').get('myResolve');
         * });
         * ```
         *
         *
         * @param state Limits the resolves provided to only the resolves the provided state has access to.
         * @param pathName Default: `'to'`: Chooses the path for which to create the injector. Use this to access resolves for `exiting` states.
         *
         * @returns a [[UIInjector]]
         */
        Transition.prototype.injector = function (state, pathName) {
            if (pathName === void 0) { pathName = 'to'; }
            var path = this._treeChanges[pathName];
            if (state)
                path = PathUtils.subPath(path, function (node) { return node.state === state || node.state.name === state; });
            return new ResolveContext(path).injector();
        };
        /**
         * Gets all available resolve tokens (keys)
         *
         * This method can be used in conjunction with [[injector]] to inspect the resolve values
         * available to the Transition.
         *
         * This returns all the tokens defined on [[StateDeclaration.resolve]] blocks, for the states
         * in the Transition's [[TreeChanges.to]] path.
         *
         * #### Example:
         * This example logs all resolve values
         * ```js
         * let tokens = trans.getResolveTokens();
         * tokens.forEach(token => console.log(token + " = " + trans.injector().get(token)));
         * ```
         *
         * #### Example:
         * This example creates promises for each resolve value.
         * This triggers fetches of resolves (if any have not yet been fetched).
         * When all promises have all settled, it logs the resolve values.
         * ```js
         * let tokens = trans.getResolveTokens();
         * let promise = tokens.map(token => trans.injector().getAsync(token));
         * Promise.all(promises).then(values => console.log("Resolved values: " + values));
         * ```
         *
         * Note: Angular 1 users whould use `$q.all()`
         *
         * @param pathname resolve context's path name (e.g., `to` or `from`)
         *
         * @returns an array of resolve tokens (keys)
         */
        Transition.prototype.getResolveTokens = function (pathname) {
            if (pathname === void 0) { pathname = 'to'; }
            return new ResolveContext(this._treeChanges[pathname]).getTokens();
        };
        /**
         * Dynamically adds a new [[Resolvable]] (i.e., [[StateDeclaration.resolve]]) to this transition.
         *
         * Allows a transition hook to dynamically add a Resolvable to this Transition.
         *
         * Use the [[Transition.injector]] to retrieve the resolved data in subsequent hooks ([[UIInjector.get]]).
         *
         * If a `state` argument is provided, the Resolvable is processed when that state is being entered.
         * If no `state` is provided then the root state is used.
         * If the given `state` has already been entered, the Resolvable is processed when any child state is entered.
         * If no child states will be entered, the Resolvable is processed during the `onFinish` phase of the Transition.
         *
         * The `state` argument also scopes the resolved data.
         * The resolved data is available from the injector for that `state` and any children states.
         *
         * #### Example:
         * ```js
         * transitionService.onBefore({}, transition => {
         *   transition.addResolvable({
         *     token: 'myResolve',
         *     deps: ['MyService'],
         *     resolveFn: myService => myService.getData()
         *   });
         * });
         * ```
         *
         * @param resolvable a [[ResolvableLiteral]] object (or a [[Resolvable]])
         * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
         */
        Transition.prototype.addResolvable = function (resolvable, state) {
            if (state === void 0) { state = ''; }
            resolvable = is(Resolvable)(resolvable) ? resolvable : new Resolvable(resolvable);
            var stateName = typeof state === 'string' ? state : state.name;
            var topath = this._treeChanges.to;
            var targetNode = find(topath, function (node) { return node.state.name === stateName; });
            var resolveContext = new ResolveContext(topath);
            resolveContext.addResolvables([resolvable], targetNode.state);
        };
        /**
         * Gets the transition from which this transition was redirected.
         *
         * If the current transition is a redirect, this method returns the transition that was redirected.
         *
         * #### Example:
         * ```js
         * let transitionA = $state.go('A').transition
         * transitionA.onStart({}, () => $state.target('B'));
         * $transitions.onSuccess({ to: 'B' }, (trans) => {
         *   trans.to().name === 'B'; // true
         *   trans.redirectedFrom() === transitionA; // true
         * });
         * ```
         *
         * @returns The previous Transition, or null if this Transition is not the result of a redirection
         */
        Transition.prototype.redirectedFrom = function () {
            return this._options.redirectedFrom || null;
        };
        /**
         * Gets the original transition in a redirect chain
         *
         * A transition might belong to a long chain of multiple redirects.
         * This method walks the [[redirectedFrom]] chain back to the original (first) transition in the chain.
         *
         * #### Example:
         * ```js
         * // states
         * registry.register({ name: 'A', redirectTo: 'B' });
         * registry.register({ name: 'B', redirectTo: 'C' });
         * registry.register({ name: 'C', redirectTo: 'D' });
         * registry.register({ name: 'D' });
         *
         * let transitionA = $state.go('A').transition
         *
         * $transitions.onSuccess({ to: 'D' }, (trans) => {
         *   trans.to().name === 'D'; // true
         *   trans.redirectedFrom().to().name === 'C'; // true
         *   trans.originalTransition() === transitionA; // true
         *   trans.originalTransition().to().name === 'A'; // true
         * });
         * ```
         *
         * @returns The original Transition that started a redirect chain
         */
        Transition.prototype.originalTransition = function () {
            var rf = this.redirectedFrom();
            return (rf && rf.originalTransition()) || this;
        };
        /**
         * Get the transition options
         *
         * @returns the options for this Transition.
         */
        Transition.prototype.options = function () {
            return this._options;
        };
        /**
         * Gets the states being entered.
         *
         * @returns an array of states that will be entered during this transition.
         */
        Transition.prototype.entering = function () {
            return map(this._treeChanges.entering, prop('state')).map(stateSelf);
        };
        /**
         * Gets the states being exited.
         *
         * @returns an array of states that will be exited during this transition.
         */
        Transition.prototype.exiting = function () {
            return map(this._treeChanges.exiting, prop('state'))
                .map(stateSelf)
                .reverse();
        };
        /**
         * Gets the states being retained.
         *
         * @returns an array of states that are already entered from a previous Transition, that will not be
         *    exited during this Transition
         */
        Transition.prototype.retained = function () {
            return map(this._treeChanges.retained, prop('state')).map(stateSelf);
        };
        /**
         * Get the [[ViewConfig]]s associated with this Transition
         *
         * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
         * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
         *
         * @param pathname the name of the path to fetch views for:
         *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
         * @param state If provided, only returns the `ViewConfig`s for a single state in the path
         *
         * @returns a list of ViewConfig objects for the given path.
         */
        Transition.prototype.views = function (pathname, state) {
            if (pathname === void 0) { pathname = 'entering'; }
            var path = this._treeChanges[pathname];
            path = !state ? path : path.filter(propEq('state', state));
            return path
                .map(prop('views'))
                .filter(identity)
                .reduce(unnestR, []);
        };
        Transition.prototype.treeChanges = function (pathname) {
            return pathname ? this._treeChanges[pathname] : this._treeChanges;
        };
        /**
         * Creates a new transition that is a redirection of the current one.
         *
         * This transition can be returned from a [[TransitionService]] hook to
         * redirect a transition to a new state and/or set of parameters.
         *
         * @internalapi
         *
         * @returns Returns a new [[Transition]] instance.
         */
        Transition.prototype.redirect = function (targetState) {
            var redirects = 1, trans = this;
            // tslint:disable-next-line:no-conditional-assignment
            while ((trans = trans.redirectedFrom()) != null) {
                if (++redirects > 20)
                    throw new Error("Too many consecutive Transition redirects (20+)");
            }
            var redirectOpts = { redirectedFrom: this, source: 'redirect' };
            // If the original transition was caused by URL sync, then use { location: 'replace' }
            // on the new transition (unless the target state explicitly specifies location: false).
            // This causes the original url to be replaced with the url for the redirect target
            // so the original url disappears from the browser history.
            if (this.options().source === 'url' && targetState.options().location !== false) {
                redirectOpts.location = 'replace';
            }
            var newOptions = extend({}, this.options(), targetState.options(), redirectOpts);
            targetState = targetState.withOptions(newOptions, true);
            var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
            var originalEnteringNodes = this._treeChanges.entering;
            var redirectEnteringNodes = newTransition._treeChanges.entering;
            // --- Re-use resolve data from original transition ---
            // When redirecting from a parent state to a child state where the parent parameter values haven't changed
            // (because of the redirect), the resolves fetched by the original transition are still valid in the
            // redirected transition.
            //
            // This allows you to define a redirect on a parent state which depends on an async resolve value.
            // You can wait for the resolve, then redirect to a child state based on the result.
            // The redirected transition does not have to re-fetch the resolve.
            // ---------------------------------------------------------
            var nodeIsReloading = function (reloadState) { return function (node) {
                return reloadState && node.state.includes[reloadState.name];
            }; };
            // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
            var matchingEnteringNodes = PathUtils.matching(redirectEnteringNodes, originalEnteringNodes, PathUtils.nonDynamicParams).filter(not(nodeIsReloading(targetState.options().reloadState)));
            // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
            matchingEnteringNodes.forEach(function (node, idx) {
                node.resolvables = originalEnteringNodes[idx].resolvables;
            });
            return newTransition;
        };
        /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
        Transition.prototype._changedParams = function () {
            var tc = this._treeChanges;
            /** Return undefined if it's not a "dynamic" transition, for the following reasons */
            // If user explicitly wants a reload
            if (this._options.reload)
                return undefined;
            // If any states are exiting or entering
            if (tc.exiting.length || tc.entering.length)
                return undefined;
            // If to/from path lengths differ
            if (tc.to.length !== tc.from.length)
                return undefined;
            // If the to/from paths are different
            var pathsDiffer = arrayTuples(tc.to, tc.from)
                .map(function (tuple) { return tuple[0].state !== tuple[1].state; })
                .reduce(anyTrueR, false);
            if (pathsDiffer)
                return undefined;
            // Find any parameter values that differ
            var nodeSchemas = tc.to.map(function (node) { return node.paramSchema; });
            var _a = [tc.to, tc.from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _a[0], fromValues = _a[1];
            var tuples = arrayTuples(nodeSchemas, toValues, fromValues);
            return tuples.map(function (_a) {
                var schema = _a[0], toVals = _a[1], fromVals = _a[2];
                return Param.changed(schema, toVals, fromVals);
            }).reduce(unnestR, []);
        };
        /**
         * Returns true if the transition is dynamic.
         *
         * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
         *
         * @returns true if the Transition is dynamic
         */
        Transition.prototype.dynamic = function () {
            var changes = this._changedParams();
            return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(anyTrueR, false);
        };
        /**
         * Returns true if the transition is ignored.
         *
         * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
         *
         * @returns true if the Transition is ignored.
         */
        Transition.prototype.ignored = function () {
            return !!this._ignoredReason();
        };
        /** @hidden */
        Transition.prototype._ignoredReason = function () {
            var pending = this.router.globals.transition;
            var reloadState = this._options.reloadState;
            var same = function (pathA, pathB) {
                if (pathA.length !== pathB.length)
                    return false;
                var matching = PathUtils.matching(pathA, pathB);
                return pathA.length === matching.filter(function (node) { return !reloadState || !node.state.includes[reloadState.name]; }).length;
            };
            var newTC = this.treeChanges();
            var pendTC = pending && pending.treeChanges();
            if (pendTC && same(pendTC.to, newTC.to) && same(pendTC.exiting, newTC.exiting))
                return 'SameAsPending';
            if (newTC.exiting.length === 0 && newTC.entering.length === 0 && same(newTC.from, newTC.to))
                return 'SameAsCurrent';
        };
        /**
         * Runs the transition
         *
         * This method is generally called from the [[StateService.transitionTo]]
         *
         * @internalapi
         *
         * @returns a promise for a successful transition.
         */
        Transition.prototype.run = function () {
            var _this = this;
            var runAllHooks = TransitionHook.runAllHooks;
            // Gets transition hooks array for the given phase
            var getHooksFor = function (phase) { return _this._hookBuilder.buildHooksForPhase(phase); };
            // When the chain is complete, then resolve or reject the deferred
            var transitionSuccess = function () {
                trace.traceSuccess(_this.$to(), _this);
                _this.success = true;
                _this._deferred.resolve(_this.to());
                runAllHooks(getHooksFor(exports.TransitionHookPhase.SUCCESS));
            };
            var transitionError = function (reason) {
                trace.traceError(reason, _this);
                _this.success = false;
                _this._deferred.reject(reason);
                _this._error = reason;
                runAllHooks(getHooksFor(exports.TransitionHookPhase.ERROR));
            };
            var runTransition = function () {
                // Wait to build the RUN hook chain until the BEFORE hooks are done
                // This allows a BEFORE hook to dynamically add additional RUN hooks via the Transition object.
                var allRunHooks = getHooksFor(exports.TransitionHookPhase.RUN);
                var done = function () { return services.$q.when(undefined); };
                return TransitionHook.invokeHooks(allRunHooks, done);
            };
            var startTransition = function () {
                var globals = _this.router.globals;
                globals.lastStartedTransitionId = _this.$id;
                globals.transition = _this;
                globals.transitionHistory.enqueue(_this);
                trace.traceTransitionStart(_this);
                return services.$q.when(undefined);
            };
            var allBeforeHooks = getHooksFor(exports.TransitionHookPhase.BEFORE);
            TransitionHook.invokeHooks(allBeforeHooks, startTransition)
                .then(runTransition)
                .then(transitionSuccess, transitionError);
            return this.promise;
        };
        /**
         * Checks if the Transition is valid
         *
         * @returns true if the Transition is valid
         */
        Transition.prototype.valid = function () {
            return !this.error() || this.success !== undefined;
        };
        /**
         * Aborts this transition
         *
         * Imperative API to abort a Transition.
         * This only applies to Transitions that are not yet complete.
         */
        Transition.prototype.abort = function () {
            // Do not set flag if the transition is already complete
            if (isUndefined(this.success)) {
                this._aborted = true;
            }
        };
        /**
         * The Transition error reason.
         *
         * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
         * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
         *
         * @returns a transition rejection explaining why the transition is invalid, or the reason the transition failed.
         */
        Transition.prototype.error = function () {
            var state = this.$to();
            if (state.self.abstract) {
                return Rejection.invalid("Cannot transition to abstract state '" + state.name + "'");
            }
            var paramDefs = state.parameters();
            var values$$1 = this.params();
            var invalidParams = paramDefs.filter(function (param) { return !param.validates(values$$1[param.id]); });
            if (invalidParams.length) {
                var invalidValues = invalidParams.map(function (param) { return "[" + param.id + ":" + stringify(values$$1[param.id]) + "]"; }).join(', ');
                var detail = "The following parameter values are not valid for state '" + state.name + "': " + invalidValues;
                return Rejection.invalid(detail);
            }
            if (this.success === false)
                return this._error;
        };
        /**
         * A string representation of the Transition
         *
         * @returns A string representation of the Transition
         */
        Transition.prototype.toString = function () {
            var fromStateOrName = this.from();
            var toStateOrName = this.to();
            var avoidEmptyHash = function (params) {
                return params['#'] !== null && params['#'] !== undefined ? params : omit(params, ['#']);
            };
            // (X) means the to state is invalid.
            var id = this.$id, from = isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = stringify(avoidEmptyHash(this._treeChanges.from.map(prop('paramValues')).reduce(mergeR, {}))), toValid = this.valid() ? '' : '(X) ', to = isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = stringify(avoidEmptyHash(this.params()));
            return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
        };
        /** @hidden */
        Transition.diToken = Transition;
        return Transition;
    }());

    /** @publicapi @module url */ /** */
    /** @hidden */
    function quoteRegExp(str, param) {
        var surroundPattern = ['', ''], result = str.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
        if (!param)
            return result;
        switch (param.squash) {
            case false:
                surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
                break;
            case true:
                result = result.replace(/\/$/, '');
                surroundPattern = ['(?:/(', ')|/)?'];
                break;
            default:
                surroundPattern = ["(" + param.squash + "|", ')?'];
                break;
        }
        return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
    }
    /** @hidden */
    var memoizeTo = function (obj, _prop, fn) { return (obj[_prop] = obj[_prop] || fn()); };
    /** @hidden */
    var splitOnSlash = splitOnDelim('/');
    /** @hidden */
    var defaultConfig = {
        state: { params: {} },
        strict: true,
        caseInsensitive: true,
    };
    /**
     * Matches URLs against patterns.
     *
     * Matches URLs against patterns and extracts named parameters from the path or the search
     * part of the URL.
     *
     * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
     * parameters. Multiple search parameter names are separated by '&'. Search parameters
     * do not influence whether or not a URL is matched, but their values are passed through into
     * the matched parameters returned by [[UrlMatcher.exec]].
     *
     * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
     * or colon placeholders (`/somePath/:param`).
     *
     * - *A parameter RegExp* may be defined for a param after a colon
     * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
     * The regexp must match for the url to be matched.
     * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
     *
     * Note: a RegExp parameter will encode its value using either [[ParamTypes.path]] or [[ParamTypes.query]].
     *
     * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`) in curly brace parameters.
     *   See [[UrlMatcherFactory.type]] for more information.
     *
     * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).
     *   A catch-all * parameter value will contain the remainder of the URL.
     *
     * ---
     *
     * Parameter names may contain only word characters (latin letters, digits, and underscore) and
     * must be unique within the pattern (across both path and search parameters).
     * A path parameter matches any number of characters other than '/'. For catch-all
     * placeholders the path parameter matches any number of characters.
     *
     * Examples:
     *
     * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
     *   trailing slashes, and patterns have to match the entire path, not just a prefix.
     * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
     *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
     * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
     * * `'/user/{id:[^/]*}'` - Same as the previous example.
     * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
     *   parameter consists of 1 to 8 hex digits.
     * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
     *   path into the parameter 'path'.
     * * `'/files/*path'` - ditto.
     * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
     *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
     *
     */
    var UrlMatcher = /** @class */ (function () {
        /**
         * @param pattern The pattern to compile into a matcher.
         * @param paramTypes The [[ParamTypes]] registry
         * @param paramFactory A [[ParamFactory]] object
         * @param config  A [[UrlMatcherCompileConfig]] configuration object
         */
        function UrlMatcher(pattern$$1, paramTypes, paramFactory, config) {
            var _this = this;
            /** @hidden */
            this._cache = { path: [this] };
            /** @hidden */
            this._children = [];
            /** @hidden */
            this._params = [];
            /** @hidden */
            this._segments = [];
            /** @hidden */
            this._compiled = [];
            this.config = config = defaults(config, defaultConfig);
            this.pattern = pattern$$1;
            // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
            //   '*' name
            //   ':' name
            //   '{' name '}'
            //   '{' name ':' regexp '}'
            // The regular expression is somewhat complicated due to the need to allow curly braces
            // inside the regular expression. The placeholder regexp breaks down as follows:
            //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
            //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
            //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
            //    [^{}\\]+                       - anything other than curly braces or backslash
            //    \\.                            - a backslash escape
            //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
            var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
            var searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
            var patterns = [];
            var last = 0;
            var matchArray;
            var checkParamErrors = function (id) {
                if (!UrlMatcher.nameValidator.test(id))
                    throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern$$1 + "'");
                if (find(_this._params, propEq('id', id)))
                    throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern$$1 + "'");
            };
            // Split into static segments separated by path parameter placeholders.
            // The number of segments is always 1 more than the number of parameters.
            var matchDetails = function (m, isSearch) {
                // IE[78] returns '' for unmatched groups instead of null
                var id = m[2] || m[3];
                var regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '[\\s\\S]*' : null);
                var makeRegexpType = function (str) {
                    return inherit(paramTypes.type(isSearch ? 'query' : 'path'), {
                        pattern: new RegExp(str, _this.config.caseInsensitive ? 'i' : undefined),
                    });
                };
                return {
                    id: id,
                    regexp: regexp,
                    segment: pattern$$1.substring(last, m.index),
                    type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp),
                };
            };
            var details;
            var segment;
            // tslint:disable-next-line:no-conditional-assignment
            while ((matchArray = placeholder.exec(pattern$$1))) {
                details = matchDetails(matchArray, false);
                if (details.segment.indexOf('?') >= 0)
                    break; // we're into the search part
                checkParamErrors(details.id);
                this._params.push(paramFactory.fromPath(details.id, details.type, config.state));
                this._segments.push(details.segment);
                patterns.push([details.segment, tail(this._params)]);
                last = placeholder.lastIndex;
            }
            segment = pattern$$1.substring(last);
            // Find any search parameter names and remove them from the last segment
            var i = segment.indexOf('?');
            if (i >= 0) {
                var search = segment.substring(i);
                segment = segment.substring(0, i);
                if (search.length > 0) {
                    last = 0;
                    // tslint:disable-next-line:no-conditional-assignment
                    while ((matchArray = searchPlaceholder.exec(search))) {
                        details = matchDetails(matchArray, true);
                        checkParamErrors(details.id);
                        this._params.push(paramFactory.fromSearch(details.id, details.type, config.state));
                        last = placeholder.lastIndex;
                        // check if ?&
                    }
                }
            }
            this._segments.push(segment);
            this._compiled = patterns.map(function (_pattern) { return quoteRegExp.apply(null, _pattern); }).concat(quoteRegExp(segment));
        }
        /** @hidden */
        UrlMatcher.encodeDashes = function (str) {
            // Replace dashes with encoded "\-"
            return encodeURIComponent(str).replace(/-/g, function (c) {
                return "%5C%" + c
                    .charCodeAt(0)
                    .toString(16)
                    .toUpperCase();
            });
        };
        /** @hidden Given a matcher, return an array with the matcher's path segments and path params, in order */
        UrlMatcher.pathSegmentsAndParams = function (matcher) {
            var staticSegments = matcher._segments;
            var pathParams = matcher._params.filter(function (p) { return p.location === exports.DefType.PATH; });
            return arrayTuples(staticSegments, pathParams.concat(undefined))
                .reduce(unnestR, [])
                .filter(function (x) { return x !== '' && isDefined(x); });
        };
        /** @hidden Given a matcher, return an array with the matcher's query params */
        UrlMatcher.queryParams = function (matcher) {
            return matcher._params.filter(function (p) { return p.location === exports.DefType.SEARCH; });
        };
        /**
         * Compare two UrlMatchers
         *
         * This comparison function converts a UrlMatcher into static and dynamic path segments.
         * Each static path segment is a static string between a path separator (slash character).
         * Each dynamic segment is a path parameter.
         *
         * The comparison function sorts static segments before dynamic ones.
         */
        UrlMatcher.compare = function (a, b) {
            /**
             * Turn a UrlMatcher and all its parent matchers into an array
             * of slash literals '/', string literals, and Param objects
             *
             * This example matcher matches strings like "/foo/:param/tail":
             * var matcher = $umf.compile("/foo").append($umf.compile("/:param")).append($umf.compile("/")).append($umf.compile("tail"));
             * var result = segments(matcher); // [ '/', 'foo', '/', Param, '/', 'tail' ]
             *
             * Caches the result as `matcher._cache.segments`
             */
            var segments = function (matcher) {
                return (matcher._cache.segments =
                    matcher._cache.segments ||
                        matcher._cache.path
                            .map(UrlMatcher.pathSegmentsAndParams)
                            .reduce(unnestR, [])
                            .reduce(joinNeighborsR, [])
                            .map(function (x) { return (isString(x) ? splitOnSlash(x) : x); })
                            .reduce(unnestR, []));
            };
            /**
             * Gets the sort weight for each segment of a UrlMatcher
             *
             * Caches the result as `matcher._cache.weights`
             */
            var weights = function (matcher) {
                return (matcher._cache.weights =
                    matcher._cache.weights ||
                        segments(matcher).map(function (segment) {
                            // Sort slashes first, then static strings, the Params
                            if (segment === '/')
                                return 1;
                            if (isString(segment))
                                return 2;
                            if (segment instanceof Param)
                                return 3;
                        }));
            };
            /**
             * Pads shorter array in-place (mutates)
             */
            var padArrays = function (l, r, padVal) {
                var len = Math.max(l.length, r.length);
                while (l.length < len)
                    l.push(padVal);
                while (r.length < len)
                    r.push(padVal);
            };
            var weightsA = weights(a), weightsB = weights(b);
            padArrays(weightsA, weightsB, 0);
            var _pairs = arrayTuples(weightsA, weightsB);
            var cmp, i;
            for (i = 0; i < _pairs.length; i++) {
                cmp = _pairs[i][0] - _pairs[i][1];
                if (cmp !== 0)
                    return cmp;
            }
            return 0;
        };
        /**
         * Creates a new concatenated UrlMatcher
         *
         * Builds a new UrlMatcher by appending another UrlMatcher to this one.
         *
         * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
         */
        UrlMatcher.prototype.append = function (url) {
            this._children.push(url);
            url._cache = {
                path: this._cache.path.concat(url),
                parent: this,
                pattern: null,
            };
            return url;
        };
        /** @hidden */
        UrlMatcher.prototype.isRoot = function () {
            return this._cache.path[0] === this;
        };
        /** Returns the input pattern string */
        UrlMatcher.prototype.toString = function () {
            return this.pattern;
        };
        /**
         * Tests the specified url/path against this matcher.
         *
         * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
         * parameter values.  Returns null if the path does not match.
         *
         * The returned object contains the values
         * of any search parameters that are mentioned in the pattern, but their value may be null if
         * they are not present in `search`. This means that search parameters are always treated
         * as optional.
         *
         * #### Example:
         * ```js
         * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
         *   x: '1', q: 'hello'
         * });
         * // returns { id: 'bob', q: 'hello', r: null }
         * ```
         *
         * @param path    The URL path to match, e.g. `$location.path()`.
         * @param search  URL search parameters, e.g. `$location.search()`.
         * @param hash    URL hash e.g. `$location.hash()`.
         * @param options
         *
         * @returns The captured parameter values.
         */
        UrlMatcher.prototype.exec = function (path, search, hash, options) {
            var _this = this;
            if (search === void 0) { search = {}; }
            if (options === void 0) { options = {}; }
            var match = memoizeTo(this._cache, 'pattern', function () {
                return new RegExp([
                    '^',
                    unnest(_this._cache.path.map(prop('_compiled'))).join(''),
                    _this.config.strict === false ? '/?' : '',
                    '$',
                ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
            }).exec(path);
            if (!match)
                return null;
            // options = defaults(options, { isolate: false });
            var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values$$1 = {};
            if (nPathSegments !== match.length - 1)
                throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
            function decodePathArray(paramVal) {
                var reverseString = function (str) {
                    return str
                        .split('')
                        .reverse()
                        .join('');
                };
                var unquoteDashes = function (str) { return str.replace(/\\-/g, '-'); };
                var split = reverseString(paramVal).split(/-(?!\\)/);
                var allReversed = map(split, reverseString);
                return map(allReversed, unquoteDashes).reverse();
            }
            for (var i = 0; i < nPathSegments; i++) {
                var param = pathParams[i];
                var value = match[i + 1];
                // if the param value matches a pre-replace pair, replace the value before decoding.
                for (var j = 0; j < param.replace.length; j++) {
                    if (param.replace[j].from === value)
                        value = param.replace[j].to;
                }
                if (value && param.array === true)
                    value = decodePathArray(value);
                if (isDefined(value))
                    value = param.type.decode(value);
                values$$1[param.id] = param.value(value);
            }
            searchParams.forEach(function (param) {
                var value = search[param.id];
                for (var j = 0; j < param.replace.length; j++) {
                    if (param.replace[j].from === value)
                        value = param.replace[j].to;
                }
                if (isDefined(value))
                    value = param.type.decode(value);
                values$$1[param.id] = param.value(value);
            });
            if (hash)
                values$$1['#'] = hash;
            return values$$1;
        };
        /**
         * @hidden
         * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
         *
         * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
         *    pattern has no parameters, an empty array is returned.
         */
        UrlMatcher.prototype.parameters = function (opts) {
            if (opts === void 0) { opts = {}; }
            if (opts.inherit === false)
                return this._params;
            return unnest(this._cache.path.map(function (matcher) { return matcher._params; }));
        };
        /**
         * @hidden
         * Returns a single parameter from this UrlMatcher by id
         *
         * @param id
         * @param opts
         * @returns {T|Param|any|boolean|UrlMatcher|null}
         */
        UrlMatcher.prototype.parameter = function (id, opts) {
            var _this = this;
            if (opts === void 0) { opts = {}; }
            var findParam = function () {
                for (var _i = 0, _a = _this._params; _i < _a.length; _i++) {
                    var param = _a[_i];
                    if (param.id === id)
                        return param;
                }
            };
            var parent = this._cache.parent;
            return findParam() || (opts.inherit !== false && parent && parent.parameter(id, opts)) || null;
        };
        /**
         * Validates the input parameter values against this UrlMatcher
         *
         * Checks an object hash of parameters to validate their correctness according to the parameter
         * types of this `UrlMatcher`.
         *
         * @param params The object hash of parameters to validate.
         * @returns Returns `true` if `params` validates, otherwise `false`.
         */
        UrlMatcher.prototype.validates = function (params) {
            var validParamVal = function (param, val$$1) { return !param || param.validates(val$$1); };
            params = params || {};
            // I'm not sure why this checks only the param keys passed in, and not all the params known to the matcher
            var paramSchema = this.parameters().filter(function (paramDef) { return params.hasOwnProperty(paramDef.id); });
            return paramSchema.map(function (paramDef) { return validParamVal(paramDef, params[paramDef.id]); }).reduce(allTrueR, true);
        };
        /**
         * Given a set of parameter values, creates a URL from this UrlMatcher.
         *
         * Creates a URL that matches this pattern by substituting the specified values
         * for the path and search parameters.
         *
         * #### Example:
         * ```js
         * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
         * // returns '/user/bob?q=yes'
         * ```
         *
         * @param values  the values to substitute for the parameters in this pattern.
         * @returns the formatted URL (path and optionally search part).
         */
        UrlMatcher.prototype.format = function (values$$1) {
            if (values$$1 === void 0) { values$$1 = {}; }
            // Build the full path of UrlMatchers (including all parent UrlMatchers)
            var urlMatchers = this._cache.path;
            // Extract all the static segments and Params (processed as ParamDetails)
            // into an ordered array
            var pathSegmentsAndParams = urlMatchers
                .map(UrlMatcher.pathSegmentsAndParams)
                .reduce(unnestR, [])
                .map(function (x) { return (isString(x) ? x : getDetails(x)); });
            // Extract the query params into a separate array
            var queryParams = urlMatchers
                .map(UrlMatcher.queryParams)
                .reduce(unnestR, [])
                .map(getDetails);
            var isInvalid = function (param) { return param.isValid === false; };
            if (pathSegmentsAndParams.concat(queryParams).filter(isInvalid).length) {
                return null;
            }
            /**
             * Given a Param, applies the parameter value, then returns detailed information about it
             */
            function getDetails(param) {
                // Normalize to typed value
                var value = param.value(values$$1[param.id]);
                var isValid = param.validates(value);
                var isDefaultValue = param.isDefaultValue(value);
                // Check if we're in squash mode for the parameter
                var squash = isDefaultValue ? param.squash : false;
                // Allow the Parameter's Type to encode the value
                var encoded = param.type.encode(value);
                return { param: param, value: value, isValid: isValid, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
            }
            // Build up the path-portion from the list of static segments and parameters
            var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
                // The element is a static segment (a raw string); just append it
                if (isString(x))
                    return acc + x;
                // Otherwise, it's a ParamDetails.
                var squash = x.squash, encoded = x.encoded, param = x.param;
                // If squash is === true, try to remove a slash from the path
                if (squash === true)
                    return acc.match(/\/$/) ? acc.slice(0, -1) : acc;
                // If squash is a string, use the string for the param value
                if (isString(squash))
                    return acc + squash;
                if (squash !== false)
                    return acc; // ?
                if (encoded == null)
                    return acc;
                // If this parameter value is an array, encode the value using encodeDashes
                if (isArray(encoded))
                    return acc + map(encoded, UrlMatcher.encodeDashes).join('-');
                // If the parameter type is "raw", then do not encodeURIComponent
                if (param.raw)
                    return acc + encoded;
                // Encode the value
                return acc + encodeURIComponent(encoded);
            }, '');
            // Build the query string by applying parameter values (array or regular)
            // then mapping to key=value, then flattening and joining using "&"
            var queryString = queryParams
                .map(function (paramDetails) {
                var param = paramDetails.param, squash = paramDetails.squash, encoded = paramDetails.encoded, isDefaultValue = paramDetails.isDefaultValue;
                if (encoded == null || (isDefaultValue && squash !== false))
                    return;
                if (!isArray(encoded))
                    encoded = [encoded];
                if (encoded.length === 0)
                    return;
                if (!param.raw)
                    encoded = map(encoded, encodeURIComponent);
                return encoded.map(function (val$$1) { return param.id + "=" + val$$1; });
            })
                .filter(identity)
                .reduce(unnestR, [])
                .join('&');
            // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
            return pathString + (queryString ? "?" + queryString : '') + (values$$1['#'] ? '#' + values$$1['#'] : '');
        };
        /** @hidden */
        UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
        return UrlMatcher;
    }());

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    /** @internalapi */
    var ParamFactory = /** @class */ (function () {
        function ParamFactory(router) {
            this.router = router;
        }
        ParamFactory.prototype.fromConfig = function (id, type, state) {
            return new Param(id, type, exports.DefType.CONFIG, this.router.urlService.config, state);
        };
        ParamFactory.prototype.fromPath = function (id, type, state) {
            return new Param(id, type, exports.DefType.PATH, this.router.urlService.config, state);
        };
        ParamFactory.prototype.fromSearch = function (id, type, state) {
            return new Param(id, type, exports.DefType.SEARCH, this.router.urlService.config, state);
        };
        return ParamFactory;
    }());
    /**
     * Factory for [[UrlMatcher]] instances.
     *
     * The factory is available to ng1 services as
     * `$urlMatcherFactory` or ng1 providers as `$urlMatcherFactoryProvider`.
     *
     * @internalapi
     */
    var UrlMatcherFactory = /** @class */ (function () {
        // TODO: move implementations to UrlConfig (urlService.config)
        function UrlMatcherFactory(/** @hidden */ router) {
            var _this = this;
            this.router = router;
            /** @internalapi Creates a new [[Param]] for a given location (DefType) */
            this.paramFactory = new ParamFactory(this.router);
            /** @deprecated use [[UrlConfig.caseInsensitive]] */
            this.caseInsensitive = function (value) { return _this.router.urlService.config.caseInsensitive(value); };
            /** @deprecated use [[UrlConfig.defaultSquashPolicy]] */
            this.defaultSquashPolicy = function (value) { return _this.router.urlService.config.defaultSquashPolicy(value); };
            /** @deprecated use [[UrlConfig.strictMode]] */
            this.strictMode = function (value) { return _this.router.urlService.config.strictMode(value); };
            /** @deprecated use [[UrlConfig.type]] */
            this.type = function (name, definition, definitionFn) {
                return _this.router.urlService.config.type(name, definition, definitionFn) || _this;
            };
            extend(this, { UrlMatcher: UrlMatcher, Param: Param });
        }
        /**
         * Creates a [[UrlMatcher]] for the specified pattern.
         *
         * @param pattern  The URL pattern.
         * @param config  The config object hash.
         * @returns The UrlMatcher.
         */
        UrlMatcherFactory.prototype.compile = function (pattern$$1, config) {
            var urlConfig = this.router.urlService.config;
            // backward-compatible support for config.params -> config.state.params
            var params = config && !config.state && config.params;
            config = params ? __assign({ state: { params: params } }, config) : config;
            var globalConfig = { strict: urlConfig._isStrictMode, caseInsensitive: urlConfig._isCaseInsensitive };
            return new UrlMatcher(pattern$$1, urlConfig.paramTypes, this.paramFactory, extend(globalConfig, config));
        };
        /**
         * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
         *
         * @param object  The object to perform the type check against.
         * @returns `true` if the object matches the `UrlMatcher` interface, by
         *          implementing all the same methods.
         */
        UrlMatcherFactory.prototype.isMatcher = function (object) {
            // TODO: typeof?
            if (!isObject(object))
                return false;
            var result = true;
            forEach(UrlMatcher.prototype, function (val$$1, name) {
                if (isFunction(val$$1))
                    result = result && (isDefined(object[name]) && isFunction(object[name]));
            });
            return result;
        };
        /** @hidden */
        UrlMatcherFactory.prototype.$get = function () {
            var urlConfig = this.router.urlService.config;
            urlConfig.paramTypes.enqueue = false;
            urlConfig.paramTypes._flushTypeQueue();
            return this;
        };
        return UrlMatcherFactory;
    }());

    /** @publicapi @module url */ /** */
    /**
     * Creates a [[UrlRule]]
     *
     * Creates a [[UrlRule]] from a:
     *
     * - `string`
     * - [[UrlMatcher]]
     * - `RegExp`
     * - [[StateObject]]
     * @internalapi
     */
    var UrlRuleFactory = /** @class */ (function () {
        function UrlRuleFactory(router) {
            this.router = router;
        }
        UrlRuleFactory.prototype.compile = function (str) {
            return this.router.urlMatcherFactory.compile(str);
        };
        UrlRuleFactory.prototype.create = function (what, handler) {
            var _this = this;
            var isState = StateObject.isState;
            var makeRule = pattern([
                [isString, function (_what) { return makeRule(_this.compile(_what)); }],
                [is(UrlMatcher), function (_what) { return _this.fromUrlMatcher(_what, handler); }],
                [isState, function (_what) { return _this.fromState(_what, _this.router); }],
                [is(RegExp), function (_what) { return _this.fromRegExp(_what, handler); }],
                [isFunction, function (_what) { return new BaseUrlRule(_what, handler); }],
            ]);
            var rule = makeRule(what);
            if (!rule)
                throw new Error("invalid 'what' in when()");
            return rule;
        };
        /**
         * A UrlRule which matches based on a UrlMatcher
         *
         * The `handler` may be either a `string`, a [[UrlRuleHandlerFn]] or another [[UrlMatcher]]
         *
         * ## Handler as a function
         *
         * If `handler` is a function, the function is invoked with:
         *
         * - matched parameter values ([[RawParams]] from [[UrlMatcher.exec]])
         * - url: the current Url ([[UrlParts]])
         * - router: the router object ([[UIRouter]])
         *
         * #### Example:
         * ```js
         * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
         * var rule = factory.fromUrlMatcher(urlMatcher, match => "/home/" + match.fooId + "/" + match.barId);
         * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
         * var result = rule.handler(match); // '/home/123/456'
         * ```
         *
         * ## Handler as UrlMatcher
         *
         * If `handler` is a UrlMatcher, the handler matcher is used to create the new url.
         * The `handler` UrlMatcher is formatted using the matched param from the first matcher.
         * The url is replaced with the result.
         *
         * #### Example:
         * ```js
         * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
         * var handler = $umf.compile("/home/:fooId/:barId");
         * var rule = factory.fromUrlMatcher(urlMatcher, handler);
         * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
         * var result = rule.handler(match); // '/home/123/456'
         * ```
         */
        UrlRuleFactory.prototype.fromUrlMatcher = function (urlMatcher, handler) {
            var _handler = handler;
            if (isString(handler))
                handler = this.router.urlMatcherFactory.compile(handler);
            if (is(UrlMatcher)(handler))
                _handler = function (match) { return handler.format(match); };
            function matchUrlParamters(url) {
                var params = urlMatcher.exec(url.path, url.search, url.hash);
                return urlMatcher.validates(params) && params;
            }
            // Prioritize URLs, lowest to highest:
            // - Some optional URL parameters, but none matched
            // - No optional parameters in URL
            // - Some optional parameters, some matched
            // - Some optional parameters, all matched
            function matchPriority(params) {
                var optional = urlMatcher.parameters().filter(function (param) { return param.isOptional; });
                if (!optional.length)
                    return 0.000001;
                var matched = optional.filter(function (param) { return params[param.id]; });
                return matched.length / optional.length;
            }
            var details = { urlMatcher: urlMatcher, matchPriority: matchPriority, type: 'URLMATCHER' };
            return extend(new BaseUrlRule(matchUrlParamters, _handler), details);
        };
        /**
         * A UrlRule which matches a state by its url
         *
         * #### Example:
         * ```js
         * var rule = factory.fromState($state.get('foo'), router);
         * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
         * var result = rule.handler(match);
         * // Starts a transition to 'foo' with params: { fooId: '123', barId: '456' }
         * ```
         */
        UrlRuleFactory.prototype.fromState = function (state, router) {
            /**
             * Handles match by transitioning to matched state
             *
             * First checks if the router should start a new transition.
             * A new transition is not required if the current state's URL
             * and the new URL are already identical
             */
            var handler = function (match) {
                var $state = router.stateService;
                var globals = router.globals;
                if ($state.href(state, match) !== $state.href(globals.current, globals.params)) {
                    $state.transitionTo(state, match, { inherit: true, source: 'url' });
                }
            };
            var details = { state: state, type: 'STATE' };
            return extend(this.fromUrlMatcher(state.url, handler), details);
        };
        /**
         * A UrlRule which matches based on a regular expression
         *
         * The `handler` may be either a [[UrlRuleHandlerFn]] or a string.
         *
         * ## Handler as a function
         *
         * If `handler` is a function, the function is invoked with:
         *
         * - regexp match array (from `regexp`)
         * - url: the current Url ([[UrlParts]])
         * - router: the router object ([[UIRouter]])
         *
         * #### Example:
         * ```js
         * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, match => "/home/" + match[1])
         * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
         * var result = rule.handler(match); // '/home/bar'
         * ```
         *
         * ## Handler as string
         *
         * If `handler` is a string, the url is *replaced by the string* when the Rule is invoked.
         * The string is first interpolated using `string.replace()` style pattern.
         *
         * #### Example:
         * ```js
         * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, "/home/$1")
         * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
         * var result = rule.handler(match); // '/home/bar'
         * ```
         */
        UrlRuleFactory.prototype.fromRegExp = function (regexp, handler) {
            if (regexp.global || regexp.sticky)
                throw new Error('Rule RegExp must not be global or sticky');
            /**
             * If handler is a string, the url will be replaced by the string.
             * If the string has any String.replace() style variables in it (like `$2`),
             * they will be replaced by the captures from [[match]]
             */
            var redirectUrlTo = function (match) {
                // Interpolates matched values into $1 $2, etc using a String.replace()-style pattern
                return handler.replace(/\$(\$|\d{1,2})/, function (m, what) { return match[what === '$' ? 0 : Number(what)]; });
            };
            var _handler = isString(handler) ? redirectUrlTo : handler;
            var matchParamsFromRegexp = function (url) { return regexp.exec(url.path); };
            var details = { regexp: regexp, type: 'REGEXP' };
            return extend(new BaseUrlRule(matchParamsFromRegexp, _handler), details);
        };
        UrlRuleFactory.isUrlRule = function (obj) { return obj && ['type', 'match', 'handler'].every(function (key) { return isDefined(obj[key]); }); };
        return UrlRuleFactory;
    }());
    /**
     * A base rule which calls `match`
     *
     * The value from the `match` function is passed through to the `handler`.
     * @internalapi
     */
    var BaseUrlRule = /** @class */ (function () {
        function BaseUrlRule(match, handler) {
            var _this = this;
            this.match = match;
            this.type = 'RAW';
            this.matchPriority = function (match) { return 0 - _this.$id; };
            this.handler = handler || identity;
        }
        return BaseUrlRule;
    }());

    /** @publicapi @module url */ /** */
    /** @hidden */
    function appendBasePath(url, isHtml5, absolute, baseHref) {
        if (baseHref === '/')
            return url;
        if (isHtml5)
            return stripLastPathElement(baseHref) + url;
        if (absolute)
            return baseHref.slice(1) + url;
        return url;
    }
    /**
     * Updates URL and responds to URL changes
     *
     * ### Deprecation warning:
     * This class is now considered to be an internal API
     * Use the [[UrlService]] instead.
     * For configuring URL rules, use the [[UrlRules]] which can be found as [[UrlService.rules]].
     *
     * @internalapi
     */
    var UrlRouter = /** @class */ (function () {
        /** @hidden */
        function UrlRouter(/** @hidden */ router) {
            var _this = this;
            this.router = router;
            // Delegate these calls to [[UrlService]]
            /** @deprecated use [[UrlService.sync]]*/
            this.sync = function (evt) { return _this.router.urlService.sync(evt); };
            /** @deprecated use [[UrlService.listen]]*/
            this.listen = function (enabled) { return _this.router.urlService.listen(enabled); };
            /** @deprecated use [[UrlService.deferIntercept]]*/
            this.deferIntercept = function (defer) { return _this.router.urlService.deferIntercept(defer); };
            /** @deprecated use [[UrlService.match]]*/
            this.match = function (urlParts) { return _this.router.urlService.match(urlParts); };
            // Delegate these calls to [[UrlRules]]
            /** @deprecated use [[UrlRules.initial]]*/
            this.initial = function (handler) {
                return _this.router.urlService.rules.initial(handler);
            };
            /** @deprecated use [[UrlRules.otherwise]]*/
            this.otherwise = function (handler) {
                return _this.router.urlService.rules.otherwise(handler);
            };
            /** @deprecated use [[UrlRules.removeRule]]*/
            this.removeRule = function (rule) { return _this.router.urlService.rules.removeRule(rule); };
            /** @deprecated use [[UrlRules.rule]]*/
            this.rule = function (rule) { return _this.router.urlService.rules.rule(rule); };
            /** @deprecated use [[UrlRules.rules]]*/
            this.rules = function () { return _this.router.urlService.rules.rules(); };
            /** @deprecated use [[UrlRules.sort]]*/
            this.sort = function (compareFn) { return _this.router.urlService.rules.sort(compareFn); };
            /** @deprecated use [[UrlRules.when]]*/
            this.when = function (matcher, handler, options) { return _this.router.urlService.rules.when(matcher, handler, options); };
            this.urlRuleFactory = new UrlRuleFactory(router);
        }
        /**
         * Internal API.
         * @internalapi
         */
        UrlRouter.prototype.update = function (read) {
            var $url = this.router.locationService;
            if (read) {
                this.location = $url.url();
                return;
            }
            if ($url.url() === this.location)
                return;
            $url.url(this.location, true);
        };
        /**
         * Internal API.
         *
         * Pushes a new location to the browser history.
         *
         * @internalapi
         * @param urlMatcher
         * @param params
         * @param options
         */
        UrlRouter.prototype.push = function (urlMatcher, params, options) {
            var replace = options && !!options.replace;
            this.router.urlService.url(urlMatcher.format(params || {}), replace);
        };
        /**
         * Builds and returns a URL with interpolated parameters
         *
         * #### Example:
         * ```js
         * matcher = $umf.compile("/about/:person");
         * params = { person: "bob" };
         * $bob = $urlRouter.href(matcher, params);
         * // $bob == "/about/bob";
         * ```
         *
         * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
         * @param params An object of parameter values to fill the matcher's required parameters.
         * @param options Options object. The options are:
         *
         * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
         *
         * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
         */
        UrlRouter.prototype.href = function (urlMatcher, params, options) {
            var url = urlMatcher.format(params);
            if (url == null)
                return null;
            options = options || { absolute: false };
            var cfg = this.router.urlService.config;
            var isHtml5 = cfg.html5Mode();
            if (!isHtml5 && url !== null) {
                url = '#' + cfg.hashPrefix() + url;
            }
            url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
            if (!options.absolute || !url) {
                return url;
            }
            var slash = !isHtml5 && url ? '/' : '';
            var cfgPort = cfg.port();
            var port = (cfgPort === 80 || cfgPort === 443 ? '' : ':' + cfgPort);
            return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
        };
        Object.defineProperty(UrlRouter.prototype, "interceptDeferred", {
            /** @deprecated use [[UrlService.interceptDeferred]]*/
            get: function () {
                return this.router.urlService.interceptDeferred;
            },
            enumerable: true,
            configurable: true
        });
        return UrlRouter;
    }());

    /** @publicapi @module view */ /** */
    /**
     * The View service
     *
     * This service pairs existing `ui-view` components (which live in the DOM)
     * with view configs (from the state declaration objects: [[StateDeclaration.views]]).
     *
     * - After a successful Transition, the views from the newly entered states are activated via [[activateViewConfig]].
     *   The views from exited states are deactivated via [[deactivateViewConfig]].
     *   (See: the [[registerActivateViews]] Transition Hook)
     *
     * - As `ui-view` components pop in and out of existence, they register themselves using [[registerUIView]].
     *
     * - When the [[sync]] function is called, the registered `ui-view`(s) ([[ActiveUIView]])
     * are configured with the matching [[ViewConfig]](s)
     *
     */
    var ViewService = /** @class */ (function () {
        /** @hidden */
        function ViewService(/** @hidden */ router) {
            var _this = this;
            this.router = router;
            /** @hidden */ this._uiViews = [];
            /** @hidden */ this._viewConfigs = [];
            /** @hidden */ this._viewConfigFactories = {};
            /** @hidden */ this._listeners = [];
            /** @internalapi */
            this._pluginapi = {
                _rootViewContext: this._rootViewContext.bind(this),
                _viewConfigFactory: this._viewConfigFactory.bind(this),
                _registeredUIView: function (id) { return find(_this._uiViews, function (view) { return _this.router.$id + "." + view.id === id; }); },
                _registeredUIViews: function () { return _this._uiViews; },
                _activeViewConfigs: function () { return _this._viewConfigs; },
                _onSync: function (listener) {
                    _this._listeners.push(listener);
                    return function () { return removeFrom(_this._listeners, listener); };
                },
            };
        }
        /**
         * Normalizes a view's name from a state.views configuration block.
         *
         * This should be used by a framework implementation to calculate the values for
         * [[_ViewDeclaration.$uiViewName]] and [[_ViewDeclaration.$uiViewContextAnchor]].
         *
         * @param context the context object (state declaration) that the view belongs to
         * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
         *
         * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
         */
        ViewService.normalizeUIViewTarget = function (context, rawViewName) {
            if (rawViewName === void 0) { rawViewName = ''; }
            // TODO: Validate incoming view name with a regexp to allow:
            // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
            // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
            var viewAtContext = rawViewName.split('@');
            var uiViewName = viewAtContext[0] || '$default'; // default to unnamed view
            var uiViewContextAnchor = isString(viewAtContext[1]) ? viewAtContext[1] : '^'; // default to parent context
            // Handle relative view-name sugar syntax.
            // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
            var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
            if (relativeViewNameSugar) {
                // Clobbers existing contextAnchor (rawViewName validation will fix this)
                uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
                uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
            }
            if (uiViewName.charAt(0) === '!') {
                uiViewName = uiViewName.substr(1);
                uiViewContextAnchor = ''; // target absolutely from root
            }
            // handle parent relative targeting "^.^.^"
            var relativeMatch = /^(\^(?:\.\^)*)$/;
            if (relativeMatch.exec(uiViewContextAnchor)) {
                var anchorState = uiViewContextAnchor.split('.').reduce(function (anchor, x) { return anchor.parent; }, context);
                uiViewContextAnchor = anchorState.name;
            }
            else if (uiViewContextAnchor === '.') {
                uiViewContextAnchor = context.name;
            }
            return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
        };
        /** @hidden */
        ViewService.prototype._rootViewContext = function (context) {
            return (this._rootContext = context || this._rootContext);
        };
        /** @hidden */
        ViewService.prototype._viewConfigFactory = function (viewType, factory) {
            this._viewConfigFactories[viewType] = factory;
        };
        ViewService.prototype.createViewConfig = function (path, decl) {
            var cfgFactory = this._viewConfigFactories[decl.$type];
            if (!cfgFactory)
                throw new Error('ViewService: No view config factory registered for type ' + decl.$type);
            var cfgs = cfgFactory(path, decl);
            return isArray(cfgs) ? cfgs : [cfgs];
        };
        /**
         * Deactivates a ViewConfig.
         *
         * This function deactivates a `ViewConfig`.
         * After calling [[sync]], it will un-pair from any `ui-view` with which it is currently paired.
         *
         * @param viewConfig The ViewConfig view to deregister.
         */
        ViewService.prototype.deactivateViewConfig = function (viewConfig) {
            trace.traceViewServiceEvent('<- Removing', viewConfig);
            removeFrom(this._viewConfigs, viewConfig);
        };
        ViewService.prototype.activateViewConfig = function (viewConfig) {
            trace.traceViewServiceEvent('-> Registering', viewConfig);
            this._viewConfigs.push(viewConfig);
        };
        ViewService.prototype.sync = function () {
            var _this = this;
            var uiViewsByFqn = this._uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(applyPairs, {});
            // Return a weighted depth value for a uiView.
            // The depth is the nesting depth of ui-views (based on FQN; times 10,000)
            // plus the depth of the state that is populating the uiView
            function uiViewDepth(uiView) {
                var stateDepth = function (context) { return (context && context.parent ? stateDepth(context.parent) + 1 : 1); };
                return uiView.fqn.split('.').length * 10000 + stateDepth(uiView.creationContext);
            }
            // Return the ViewConfig's context's depth in the context tree.
            function viewConfigDepth(config) {
                var context = config.viewDecl.$context, count = 0;
                while (++count && context.parent)
                    context = context.parent;
                return count;
            }
            // Given a depth function, returns a compare function which can return either ascending or descending order
            var depthCompare = curry(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
            var matchingConfigPair = function (uiView) {
                var matchingConfigs = _this._viewConfigs.filter(ViewService.matches(uiViewsByFqn, uiView));
                if (matchingConfigs.length > 1) {
                    // This is OK.  Child states can target a ui-view that the parent state also targets (the child wins)
                    // Sort by depth and return the match from the deepest child
                    // console.log(`Multiple matching view configs for ${uiView.fqn}`, matchingConfigs);
                    matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
                }
                return { uiView: uiView, viewConfig: matchingConfigs[0] };
            };
            var configureUIView = function (tuple) {
                // If a parent ui-view is reconfigured, it could destroy child ui-views.
                // Before configuring a child ui-view, make sure it's still in the active uiViews array.
                if (_this._uiViews.indexOf(tuple.uiView) !== -1)
                    tuple.uiView.configUpdated(tuple.viewConfig);
            };
            // Sort views by FQN and state depth. Process uiviews nearest the root first.
            var uiViewTuples = this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair);
            var matchedViewConfigs = uiViewTuples.map(function (tuple) { return tuple.viewConfig; });
            var unmatchedConfigTuples = this._viewConfigs
                .filter(function (config) { return !inArray(matchedViewConfigs, config); })
                .map(function (viewConfig) { return ({ uiView: undefined, viewConfig: viewConfig }); });
            uiViewTuples.forEach(configureUIView);
            var allTuples = uiViewTuples.concat(unmatchedConfigTuples);
            this._listeners.forEach(function (cb) { return cb(allTuples); });
            trace.traceViewSync(allTuples);
        };
        /**
         * Registers a `ui-view` component
         *
         * When a `ui-view` component is created, it uses this method to register itself.
         * After registration the [[sync]] method is used to ensure all `ui-view` are configured with the proper [[ViewConfig]].
         *
         * Note: the `ui-view` component uses the `ViewConfig` to determine what view should be loaded inside the `ui-view`,
         * and what the view's state context is.
         *
         * Note: There is no corresponding `deregisterUIView`.
         *       A `ui-view` should hang on to the return value of `registerUIView` and invoke it to deregister itself.
         *
         * @param uiView The metadata for a UIView
         * @return a de-registration function used when the view is destroyed.
         */
        ViewService.prototype.registerUIView = function (uiView) {
            trace.traceViewServiceUIViewEvent('-> Registering', uiView);
            var uiViews = this._uiViews;
            var fqnAndTypeMatches = function (uiv) { return uiv.fqn === uiView.fqn && uiv.$type === uiView.$type; };
            if (uiViews.filter(fqnAndTypeMatches).length)
                trace.traceViewServiceUIViewEvent('!!!! duplicate uiView named:', uiView);
            uiViews.push(uiView);
            this.sync();
            return function () {
                var idx = uiViews.indexOf(uiView);
                if (idx === -1) {
                    trace.traceViewServiceUIViewEvent('Tried removing non-registered uiView', uiView);
                    return;
                }
                trace.traceViewServiceUIViewEvent('<- Deregistering', uiView);
                removeFrom(uiViews)(uiView);
            };
        };
        /**
         * Returns the list of views currently available on the page, by fully-qualified name.
         *
         * @return {Array} Returns an array of fully-qualified view names.
         */
        ViewService.prototype.available = function () {
            return this._uiViews.map(prop('fqn'));
        };
        /**
         * Returns the list of views on the page containing loaded content.
         *
         * @return {Array} Returns an array of fully-qualified view names.
         */
        ViewService.prototype.active = function () {
            return this._uiViews.filter(prop('$config')).map(prop('name'));
        };
        /**
         * Given a ui-view and a ViewConfig, determines if they "match".
         *
         * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
         * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
         *
         * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
         * can be a segmented ui-view path, describing a portion of a ui-view fqn.
         *
         * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
         *
         * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
         * - the ui-view's name matches the ViewConfig's target name
         * - the ui-view's context matches the ViewConfig's anchor
         *
         * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
         * - There exists a parent ui-view where:
         *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
         *    - the parent ui-view's context matches the ViewConfig's anchor
         * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
         *
         * Example:
         *
         * DOM:
         * <ui-view>                        <!-- created in the root context (name: "") -->
         *   <ui-view name="foo">                <!-- created in the context named: "A"      -->
         *     <ui-view>                    <!-- created in the context named: "A.B"    -->
         *       <ui-view name="bar">            <!-- created in the context named: "A.B.C"  -->
         *       </ui-view>
         *     </ui-view>
         *   </ui-view>
         * </ui-view>
         *
         * uiViews: [
         *  { fqn: "$default",                  creationContext: { name: "" } },
         *  { fqn: "$default.foo",              creationContext: { name: "A" } },
         *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
         *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
         * ]
         *
         * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
         *
         * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
         * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
         * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
         * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
         *
         * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
         * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
         * - There exists a parent ui-view (which has fqn: "$default.foo") where:
         *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
         *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
         * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
         *   the tail of the ui-view's fqn "default.bar"
         *
         * @internalapi
         */
        ViewService.matches = function (uiViewsByFqn, uiView) { return function (viewConfig) {
            // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
            if (uiView.$type !== viewConfig.viewDecl.$type)
                return false;
            // Split names apart from both viewConfig and uiView into segments
            var vc = viewConfig.viewDecl;
            var vcSegments = vc.$uiViewName.split('.');
            var uivSegments = uiView.fqn.split('.');
            // Check if the tails of the segment arrays match. ex, these arrays' tails match:
            // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
            if (!equals(vcSegments, uivSegments.slice(0 - vcSegments.length)))
                return false;
            // Now check if the fqn ending at the first segment of the viewConfig matches the context:
            // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
            var negOffset = 1 - vcSegments.length || undefined;
            var fqnToFirstSegment = uivSegments.slice(0, negOffset).join('.');
            var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
            return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
        }; };
        return ViewService;
    }());

    /** @publicapi @module core */ /** */
    /**
     * Global router state
     *
     * This is where we hold the global mutable state such as current state, current
     * params, current transition, etc.
     */
    var UIRouterGlobals = /** @class */ (function () {
        function UIRouterGlobals() {
            /**
             * Current parameter values
             *
             * The parameter values from the latest successful transition
             */
            this.params = new StateParams();
            /** @internalapi */
            this.lastStartedTransitionId = -1;
            /** @internalapi */
            this.transitionHistory = new Queue([], 1);
            /** @internalapi */
            this.successfulTransitions = new Queue([], 1);
        }
        UIRouterGlobals.prototype.dispose = function () {
            this.transitionHistory.clear();
            this.successfulTransitions.clear();
            this.transition = null;
        };
        return UIRouterGlobals;
    }());

    /** @hidden */
    var prioritySort = function (a, b) { return (b.priority || 0) - (a.priority || 0); };
    /** @hidden */
    var typeSort = function (a, b) {
        var weights = { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 };
        return (weights[a.type] || 0) - (weights[b.type] || 0);
    };
    /** @hidden */
    var urlMatcherSort = function (a, b) {
        return !a.urlMatcher || !b.urlMatcher ? 0 : UrlMatcher.compare(a.urlMatcher, b.urlMatcher);
    };
    /** @hidden */
    var idSort = function (a, b) {
        // Identically sorted STATE and URLMATCHER best rule will be chosen by `matchPriority` after each rule matches the URL
        var useMatchPriority = { STATE: true, URLMATCHER: true };
        var equal = useMatchPriority[a.type] && useMatchPriority[b.type];
        return equal ? 0 : (a.$id || 0) - (b.$id || 0);
    };
    /**
     * Default rule priority sorting function.
     *
     * Sorts rules by:
     *
     * - Explicit priority (set rule priority using [[UrlRules.when]])
     * - Rule type (STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1)
     * - `UrlMatcher` specificity ([[UrlMatcher.compare]]): works for STATE and URLMATCHER types to pick the most specific rule.
     * - Rule registration order (for rule types other than STATE and URLMATCHER)
     *   - Equally sorted State and UrlMatcher rules will each match the URL.
     *     Then, the *best* match is chosen based on how many parameter values were matched.
     *
     * @publicapi
     */
    var defaultRuleSortFn;
    defaultRuleSortFn = function (a, b) {
        var cmp = prioritySort(a, b);
        if (cmp !== 0)
            return cmp;
        cmp = typeSort(a, b);
        if (cmp !== 0)
            return cmp;
        cmp = urlMatcherSort(a, b);
        if (cmp !== 0)
            return cmp;
        return idSort(a, b);
    };
    /** @hidden */
    function getHandlerFn(handler) {
        if (!isFunction(handler) && !isString(handler) && !is(TargetState)(handler) && !TargetState.isDef(handler)) {
            throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
        }
        return isFunction(handler) ? handler : val(handler);
    }
    /**
     * API for managing URL rules
     *
     * This API is used to create and manage URL rules.
     * URL rules are a mechanism to respond to specific URL patterns.
     *
     * The most commonly used methods are [[otherwise]] and [[when]].
     *
     * This API is a property of [[UrlService]] as [[UrlService.rules]]
     *
     * @publicapi
     */
    var UrlRules = /** @class */ (function () {
        /** @hidden */
        function UrlRules(/** @hidden */ router) {
            this.router = router;
            /** @hidden */ this._sortFn = defaultRuleSortFn;
            /** @hidden */ this._rules = [];
            /** @hidden */ this._id = 0;
            this.urlRuleFactory = new UrlRuleFactory(router);
        }
        /** @hidden */
        UrlRules.prototype.dispose = function (router) {
            this._rules = [];
            delete this._otherwiseFn;
        };
        /**
         * Defines the initial state, path, or behavior to use when the app starts.
         *
         * This rule defines the initial/starting state for the application.
         *
         * This rule is triggered the first time the URL is checked (when the app initially loads).
         * The rule is triggered only when the url matches either `""` or `"/"`.
         *
         * Note: The rule is intended to be used when the root of the application is directly linked to.
         * When the URL is *not* `""` or `"/"` and doesn't match other rules, the [[otherwise]] rule is triggered.
         * This allows 404-like behavior when an unknown URL is deep-linked.
         *
         * #### Example:
         * Start app at `home` state.
         * ```js
         * .initial({ state: 'home' });
         * ```
         *
         * #### Example:
         * Start app at `/home` (by url)
         * ```js
         * .initial('/home');
         * ```
         *
         * #### Example:
         * When no other url rule matches, go to `home` state
         * ```js
         * .initial((matchValue, url, router) => {
         *   console.log('initial state');
         *   return { state: 'home' };
         * })
         * ```
         *
         * @param handler The initial state or url path, or a function which returns the state or url path (or performs custom logic).
         */
        UrlRules.prototype.initial = function (handler) {
            var handlerFn = getHandlerFn(handler);
            var matchFn = function (urlParts, router) {
                return router.globals.transitionHistory.size() === 0 && !!/^\/?$/.exec(urlParts.path);
            };
            this.rule(this.urlRuleFactory.create(matchFn, handlerFn));
        };
        /**
         * Defines the state, url, or behavior to use when no other rule matches the URL.
         *
         * This rule is matched when *no other rule* matches.
         * It is generally used to handle unknown URLs (similar to "404" behavior, but on the client side).
         *
         * - If `handler` a string, it is treated as a url redirect
         *
         * #### Example:
         * When no other url rule matches, redirect to `/index`
         * ```js
         * .otherwise('/index');
         * ```
         *
         * - If `handler` is an object with a `state` property, the state is activated.
         *
         * #### Example:
         * When no other url rule matches, redirect to `home` and provide a `dashboard` parameter value.
         * ```js
         * .otherwise({ state: 'home', params: { dashboard: 'default' } });
         * ```
         *
         * - If `handler` is a function, the function receives the current url ([[UrlParts]]) and the [[UIRouter]] object.
         *   The function can perform actions, and/or return a value.
         *
         * #### Example:
         * When no other url rule matches, manually trigger a transition to the `home` state
         * ```js
         * .otherwise((matchValue, urlParts, router) => {
         *   router.stateService.go('home');
         * });
         * ```
         *
         * #### Example:
         * When no other url rule matches, go to `home` state
         * ```js
         * .otherwise((matchValue, urlParts, router) => {
         *   return { state: 'home' };
         * });
         * ```
         *
         * @param handler The url path to redirect to, or a function which returns the url path (or performs custom logic).
         */
        UrlRules.prototype.otherwise = function (handler) {
            var handlerFn = getHandlerFn(handler);
            this._otherwiseFn = this.urlRuleFactory.create(val(true), handlerFn);
            this._sorted = false;
        };
        /**
         * Remove a rule previously registered
         *
         * @param rule the matcher rule that was previously registered using [[rule]]
         */
        UrlRules.prototype.removeRule = function (rule) {
            removeFrom(this._rules, rule);
        };
        /**
         * Manually adds a URL Rule.
         *
         * Usually, a url rule is added using [[StateDeclaration.url]] or [[when]].
         * This api can be used directly for more control (to register a [[BaseUrlRule]], for example).
         * Rules can be created using [[urlRuleFactory]], or created manually as simple objects.
         *
         * A rule should have a `match` function which returns truthy if the rule matched.
         * It should also have a `handler` function which is invoked if the rule is the best match.
         *
         * @return a function that deregisters the rule
         */
        UrlRules.prototype.rule = function (rule) {
            var _this = this;
            if (!UrlRuleFactory.isUrlRule(rule))
                throw new Error('invalid rule');
            rule.$id = this._id++;
            rule.priority = rule.priority || 0;
            this._rules.push(rule);
            this._sorted = false;
            return function () { return _this.removeRule(rule); };
        };
        /**
         * Gets all registered rules
         *
         * @returns an array of all the registered rules
         */
        UrlRules.prototype.rules = function () {
            this.ensureSorted();
            return this._rules.concat(this._otherwiseFn ? [this._otherwiseFn] : []);
        };
        /**
         * Defines URL Rule priorities
         *
         * More than one rule ([[UrlRule]]) might match a given URL.
         * This `compareFn` is used to sort the rules by priority.
         * Higher priority rules should sort earlier.
         *
         * The [[defaultRuleSortFn]] is used by default.
         *
         * You only need to call this function once.
         * The `compareFn` will be used to sort the rules as each is registered.
         *
         * If called without any parameter, it will re-sort the rules.
         *
         * ---
         *
         * Url rules may come from multiple sources: states's urls ([[StateDeclaration.url]]), [[when]], and [[rule]].
         * Each rule has a (user-provided) [[UrlRule.priority]], a [[UrlRule.type]], and a [[UrlRule.$id]]
         * The `$id` is is the order in which the rule was registered.
         *
         * The sort function should use these data, or data found on a specific type
         * of [[UrlRule]] (such as [[StateRule.state]]), to order the rules as desired.
         *
         * #### Example:
         * This compare function prioritizes rules by the order in which the rules were registered.
         * A rule registered earlier has higher priority.
         *
         * ```js
         * function compareFn(a, b) {
         *   return a.$id - b.$id;
         * }
         * ```
         *
         * @param compareFn a function that compares to [[UrlRule]] objects.
         *    The `compareFn` should abide by the `Array.sort` compare function rules.
         *    Given two rules, `a` and `b`, return a negative number if `a` should be higher priority.
         *    Return a positive number if `b` should be higher priority.
         *    Return `0` if the rules are identical.
         *
         *    See the [mozilla reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description)
         *    for details.
         */
        UrlRules.prototype.sort = function (compareFn) {
            var sorted = this.stableSort(this._rules, (this._sortFn = compareFn || this._sortFn));
            // precompute _sortGroup values and apply to each rule
            var group = 0;
            for (var i = 0; i < sorted.length; i++) {
                sorted[i]._group = group;
                if (i < sorted.length - 1 && this._sortFn(sorted[i], sorted[i + 1]) !== 0) {
                    group++;
                }
            }
            this._rules = sorted;
            this._sorted = true;
        };
        /** @hidden */
        UrlRules.prototype.ensureSorted = function () {
            this._sorted || this.sort();
        };
        /** @hidden */
        UrlRules.prototype.stableSort = function (arr, compareFn) {
            var arrOfWrapper = arr.map(function (elem, idx) { return ({ elem: elem, idx: idx }); });
            arrOfWrapper.sort(function (wrapperA, wrapperB) {
                var cmpDiff = compareFn(wrapperA.elem, wrapperB.elem);
                return cmpDiff === 0 ? wrapperA.idx - wrapperB.idx : cmpDiff;
            });
            return arrOfWrapper.map(function (wrapper) { return wrapper.elem; });
        };
        /**
         * Registers a `matcher` and `handler` for custom URLs handling.
         *
         * The `matcher` can be:
         *
         * - a [[UrlMatcher]]: See: [[UrlMatcherFactory.compile]]
         * - a `string`: The string is compiled to a [[UrlMatcher]]
         * - a `RegExp`: The regexp is used to match the url.
         *
         * The `handler` can be:
         *
         * - a string: The url is redirected to the value of the string.
         * - a function: The url is redirected to the return value of the function.
         *
         * ---
         *
         * When the `handler` is a `string` and the `matcher` is a `UrlMatcher` (or string), the redirect
         * string is interpolated with parameter values.
         *
         * #### Example:
         * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
         * ```js
         * .when("/foo/:param1", "/bar/:param1")
         * ```
         *
         * ---
         *
         * When the `handler` is a string and the `matcher` is a `RegExp`, the redirect string is
         * interpolated with capture groups from the RegExp.
         *
         * #### Example:
         * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
         * ```js
         * .when(new RegExp("^/foo/(.*)$"), "/bar/$1");
         * ```
         *
         * ---
         *
         * When the handler is a function, it receives the matched value, the current URL, and the `UIRouter` object (See [[UrlRuleHandlerFn]]).
         * The "matched value" differs based on the `matcher`.
         * For [[UrlMatcher]]s, it will be the matched state params.
         * For `RegExp`, it will be the match array from `regexp.exec()`.
         *
         * If the handler returns a string, the URL is redirected to the string.
         *
         * #### Example:
         * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
         * ```js
         * .when(new RegExp("^/foo/(.*)$"), match => "/bar/" + match[1]);
         * ```
         *
         * Note: the `handler` may also invoke arbitrary code, such as `$state.go()`
         *
         * @param matcher A pattern `string` to match, compiled as a [[UrlMatcher]], or a `RegExp`.
         * @param handler The path to redirect to, or a function that returns the path.
         * @param options `{ priority: number }`
         *
         * @return the registered [[UrlRule]]
         */
        UrlRules.prototype.when = function (matcher, handler, options) {
            var rule = this.urlRuleFactory.create(matcher, handler);
            if (isDefined(options && options.priority))
                rule.priority = options.priority;
            this.rule(rule);
            return rule;
        };
        return UrlRules;
    }());

    /**
     * An API to customize the URL behavior and retrieve URL configuration
     *
     * This API is used to customize the behavior of the URL.
     * This includes optional trailing slashes ([[strictMode]]), case sensitivity ([[caseInsensitive]]),
     * and custom parameter encoding (custom [[type]]).
     *
     * It also has information about the location (url) configuration such as [[port]] and [[baseHref]].
     * This information can be used to build absolute URLs, such as
     * `https://example.com:443/basepath/state/substate?param1=a#hashvalue`;
     *
     * This API is a property of [[UrlService]] as [[UrlService.config]].
     */
    var UrlConfig = /** @class */ (function () {
        /** @hidden */ function UrlConfig(/** @hidden */ router) {
            var _this = this;
            this.router = router;
            /** @hidden */ this.paramTypes = new ParamTypes();
            /** @hidden */ this._isCaseInsensitive = false;
            /** @hidden */ this._isStrictMode = true;
            /** @hidden */ this._defaultSquashPolicy = false;
            /** @internalapi */ this.dispose = function () { return _this.paramTypes.dispose(); };
            // Delegate these calls to the current LocationConfig implementation
            /**
             * Gets the base Href, e.g., `http://localhost/approot/`
             *
             * @return the application's base href
             */
            this.baseHref = function () { return _this.router.locationConfig.baseHref(); };
            /**
             * Gets or sets the hashPrefix
             *
             * This only applies when not running in [[html5Mode]] (pushstate mode)
             *
             * If the current url is `http://localhost/app#!/uirouter/path/#anchor`, it returns `!` which is the prefix for the "hashbang" portion.
             *
             * @return the hash prefix
             */
            this.hashPrefix = function (newprefix) { return _this.router.locationConfig.hashPrefix(newprefix); };
            /**
             * Gets the host, e.g., `localhost`
             *
             * @return the protocol
             */
            this.host = function () { return _this.router.locationConfig.host(); };
            /**
             * Returns true when running in pushstate mode
             *
             * @return true when running in html5 mode (pushstate mode).
             */
            this.html5Mode = function () { return _this.router.locationConfig.html5Mode(); };
            /**
             * Gets the port, e.g., `80`
             *
             * @return the port number
             */
            this.port = function () { return _this.router.locationConfig.port(); };
            /**
             * Gets the protocol, e.g., `http`
             *
             * @return the protocol
             */
            this.protocol = function () { return _this.router.locationConfig.protocol(); };
        }
        /**
         * Defines whether URL matching should be case sensitive (the default behavior), or not.
         *
         * #### Example:
         * ```js
         * // Allow case insensitive url matches
         * urlService.config.caseInsensitive(true);
         * ```
         *
         * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
         * @returns the current value of caseInsensitive
         */
        UrlConfig.prototype.caseInsensitive = function (value) {
            return (this._isCaseInsensitive = isDefined(value) ? value : this._isCaseInsensitive);
        };
        /**
         * Sets the default behavior when generating or matching URLs with default parameter values.
         *
         * #### Example:
         * ```js
         * // Remove default parameter values from the url
         * urlService.config.defaultSquashPolicy(true);
         * ```
         *
         * @param value A string that defines the default parameter URL squashing behavior.
         *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
         *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
         *      parameter is surrounded by slashes, squash (remove) one slash from the URL
         *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
         *      the parameter value from the URL and replace it with this string.
         * @returns the current value of defaultSquashPolicy
         */
        UrlConfig.prototype.defaultSquashPolicy = function (value) {
            if (isDefined(value) && value !== true && value !== false && !isString(value))
                throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
            return (this._defaultSquashPolicy = isDefined(value) ? value : this._defaultSquashPolicy);
        };
        /**
         * Defines whether URLs should match trailing slashes, or not (the default behavior).
         *
         * #### Example:
         * ```js
         * // Allow optional trailing slashes
         * urlService.config.strictMode(false);
         * ```
         *
         * @param value `false` to match trailing slashes in URLs, otherwise `true`.
         * @returns the current value of strictMode
         */
        UrlConfig.prototype.strictMode = function (value) {
            return (this._isStrictMode = isDefined(value) ? value : this._isStrictMode);
        };
        /**
         * Creates and registers a custom [[ParamType]] object
         *
         * A custom parameter type can be used to generate URLs with typed parameters or custom encoding/decoding.
         *
         * #### Note: Register custom types *before using them* in a state definition.
         *
         * #### Example:
         * ```js
         * // Encode object parameter as JSON string
         * urlService.config.type('myjson', {
         *   encode: (obj) => JSON.stringify(obj),
         *   decode: (str) => JSON.parse(str),
         *   is: (val) => typeof(val) === 'object',
         *   pattern: /[^/]+/,
         *   equals: (a, b) => _.isEqual(a, b),
         * });
         * ```
         *
         * See [[ParamTypeDefinition]] for more examples
         *
         * @param name The type name.
         * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
         * @param definitionFn A function that is injected before the app runtime starts.
         *        The result of this function should be a [[ParamTypeDefinition]].
         *        The result is merged into the existing `definition`.
         *        See [[ParamType]] for information on the values accepted.
         *
         * @returns if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
         */
        UrlConfig.prototype.type = function (name, definition, definitionFn) {
            var type = this.paramTypes.type(name, definition, definitionFn);
            return !isDefined(definition) ? type : this;
        };
        return UrlConfig;
    }());

    /** API for URL management */
    var UrlService = /** @class */ (function () {
        /** @hidden */
        function UrlService(/** @hidden */ router) {
            var _this = this;
            this.router = router;
            /** @hidden */ this.interceptDeferred = false;
            /**
             * The nested [[UrlRules]] API for managing URL rules and rewrites
             *
             * See: [[UrlRules]] for details
             */
            this.rules = new UrlRules(this.router);
            /**
             * The nested [[UrlConfig]] API to configure the URL and retrieve URL information
             *
             * See: [[UrlConfig]] for details
             */
            this.config = new UrlConfig(this.router);
            // Delegate these calls to the current LocationServices implementation
            /**
             * Gets the current url, or updates the url
             *
             * ### Getting the current URL
             *
             * When no arguments are passed, returns the current URL.
             * The URL is normalized using the internal [[path]]/[[search]]/[[hash]] values.
             *
             * For example, the URL may be stored in the hash ([[HashLocationServices]]) or
             * have a base HREF prepended ([[PushStateLocationServices]]).
             *
             * The raw URL in the browser might be:
             *
             * ```
             * http://mysite.com/somepath/index.html#/internal/path/123?param1=foo#anchor
             * ```
             *
             * or
             *
             * ```
             * http://mysite.com/basepath/internal/path/123?param1=foo#anchor
             * ```
             *
             * then this method returns:
             *
             * ```
             * /internal/path/123?param1=foo#anchor
             * ```
             *
             *
             * #### Example:
             * ```js
             * locationServices.url(); // "/some/path?query=value#anchor"
             * ```
             *
             * ### Updating the URL
             *
             * When `newurl` arguments is provided, changes the URL to reflect `newurl`
             *
             * #### Example:
             * ```js
             * locationServices.url("/some/path?query=value#anchor", true);
             * ```
             *
             * @param newurl The new value for the URL.
             *               This url should reflect only the new internal [[path]], [[search]], and [[hash]] values.
             *               It should not include the protocol, site, port, or base path of an absolute HREF.
             * @param replace When true, replaces the current history entry (instead of appending it) with this new url
             * @param state The history's state object, i.e., pushState (if the LocationServices implementation supports it)
             *
             * @return the url (after potentially being processed)
             */
            this.url = function (newurl, replace, state) {
                return _this.router.locationService.url(newurl, replace, state);
            };
            /**
             * Gets the path part of the current url
             *
             * If the current URL is `/some/path?query=value#anchor`, this returns `/some/path`
             *
             * @return the path portion of the url
             */
            this.path = function () { return _this.router.locationService.path(); };
            /**
             * Gets the search part of the current url as an object
             *
             * If the current URL is `/some/path?query=value#anchor`, this returns `{ query: 'value' }`
             *
             * @return the search (query) portion of the url, as an object
             */
            this.search = function () { return _this.router.locationService.search(); };
            /**
             * Gets the hash part of the current url
             *
             * If the current URL is `/some/path?query=value#anchor`, this returns `anchor`
             *
             * @return the hash (anchor) portion of the url
             */
            this.hash = function () { return _this.router.locationService.hash(); };
            /**
             * @internalapi
             *
             * Registers a low level url change handler
             *
             * Note: Because this is a low level handler, it's not recommended for general use.
             *
             * #### Example:
             * ```js
             * let deregisterFn = locationServices.onChange((evt) => console.log("url change", evt));
             * ```
             *
             * @param callback a function that will be called when the url is changing
             * @return a function that de-registers the callback
             */
            this.onChange = function (callback) { return _this.router.locationService.onChange(callback); };
        }
        /** @hidden */
        UrlService.prototype.dispose = function () {
            this.listen(false);
            this.rules.dispose();
        };
        /**
         * Gets the current URL parts
         *
         * This method returns the different parts of the current URL (the [[path]], [[search]], and [[hash]]) as a [[UrlParts]] object.
         */
        UrlService.prototype.parts = function () {
            return { path: this.path(), search: this.search(), hash: this.hash() };
        };
        /**
         * Activates the best rule for the current URL
         *
         * Checks the current URL for a matching [[UrlRule]], then invokes that rule's handler.
         * This method is called internally any time the URL has changed.
         *
         * This effectively activates the state (or redirect, etc) which matches the current URL.
         *
         * #### Example:
         * ```js
         * urlService.deferIntercept();
         *
         * fetch('/states.json').then(resp => resp.json()).then(data => {
         *   data.forEach(state => $stateRegistry.register(state));
         *   urlService.listen();
         *   // Find the matching URL and invoke the handler.
         *   urlService.sync();
         * });
         * ```
         */
        UrlService.prototype.sync = function (evt) {
            if (evt && evt.defaultPrevented)
                return;
            var _a = this.router, urlService = _a.urlService, stateService = _a.stateService;
            var url = { path: urlService.path(), search: urlService.search(), hash: urlService.hash() };
            var best = this.match(url);
            var applyResult = pattern([
                [isString, function (newurl) { return urlService.url(newurl, true); }],
                [TargetState.isDef, function (def) { return stateService.go(def.state, def.params, def.options); }],
                [is(TargetState), function (target) { return stateService.go(target.state(), target.params(), target.options()); }],
            ]);
            applyResult(best && best.rule.handler(best.match, url, this.router));
        };
        /**
         * Starts or stops listening for URL changes
         *
         * Call this sometime after calling [[deferIntercept]] to start monitoring the url.
         * This causes UI-Router to start listening for changes to the URL, if it wasn't already listening.
         *
         * If called with `false`, UI-Router will stop listening (call listen(true) to start listening again).
         *
         * #### Example:
         * ```js
         * urlService.deferIntercept();
         *
         * fetch('/states.json').then(resp => resp.json()).then(data => {
         *   data.forEach(state => $stateRegistry.register(state));
         *   // Start responding to URL changes
         *   urlService.listen();
         *   urlService.sync();
         * });
         * ```
         *
         * @param enabled `true` or `false` to start or stop listening to URL changes
         */
        UrlService.prototype.listen = function (enabled) {
            var _this = this;
            if (enabled === false) {
                this._stopListeningFn && this._stopListeningFn();
                delete this._stopListeningFn;
            }
            else {
                return (this._stopListeningFn = this._stopListeningFn || this.router.urlService.onChange(function (evt) { return _this.sync(evt); }));
            }
        };
        /**
         * Disables monitoring of the URL.
         *
         * Call this method before UI-Router has bootstrapped.
         * It will stop UI-Router from performing the initial url sync.
         *
         * This can be useful to perform some asynchronous initialization before the router starts.
         * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
         *
         * #### Example:
         * ```js
         * // Prevent UI-Router from automatically intercepting URL changes when it starts;
         * urlService.deferIntercept();
         *
         * fetch('/states.json').then(resp => resp.json()).then(data => {
         *   data.forEach(state => $stateRegistry.register(state));
         *   urlService.listen();
         *   urlService.sync();
         * });
         * ```
         *
         * @param defer Indicates whether to defer location change interception.
         *        Passing no parameter is equivalent to `true`.
         */
        UrlService.prototype.deferIntercept = function (defer) {
            if (defer === undefined)
                defer = true;
            this.interceptDeferred = defer;
        };
        /**
         * Matches a URL
         *
         * Given a URL (as a [[UrlParts]] object), check all rules and determine the best matching rule.
         * Return the result as a [[MatchResult]].
         */
        UrlService.prototype.match = function (url) {
            var _this = this;
            url = extend({ path: '', search: {}, hash: '' }, url);
            var rules = this.rules.rules();
            // Checks a single rule. Returns { rule: rule, match: match, weight: weight } if it matched, or undefined
            var checkRule = function (rule) {
                var match = rule.match(url, _this.router);
                return match && { match: match, rule: rule, weight: rule.matchPriority(match) };
            };
            // The rules are pre-sorted.
            // - Find the first matching rule.
            // - Find any other matching rule that sorted *exactly the same*, according to `.sort()`.
            // - Choose the rule with the highest match weight.
            var best;
            for (var i = 0; i < rules.length; i++) {
                // Stop when there is a 'best' rule and the next rule sorts differently than it.
                if (best && best.rule._group !== rules[i]._group)
                    break;
                var current = checkRule(rules[i]);
                // Pick the best MatchResult
                best = !best || (current && current.weight > best.weight) ? current : best;
            }
            return best;
        };
        return UrlService;
    }());

    /** @publicapi @module core */ /** */
    /** @hidden */
    var _routerInstance = 0;
    /** @hidden */
    var locSvcFns = ['url', 'path', 'search', 'hash', 'onChange'];
    /** @hidden */
    var locCfgFns = ['port', 'protocol', 'host', 'baseHref', 'html5Mode', 'hashPrefix'];
    /** @hidden */
    var locationServiceStub = makeStub('LocationServices', locSvcFns);
    /** @hidden */
    var locationConfigStub = makeStub('LocationConfig', locCfgFns);
    /**
     * The master class used to instantiate an instance of UI-Router.
     *
     * UI-Router (for each specific framework) will create an instance of this class during bootstrap.
     * This class instantiates and wires the UI-Router services together.
     *
     * After a new instance of the UIRouter class is created, it should be configured for your app.
     * For instance, app states should be registered with the [[UIRouter.stateRegistry]].
     *
     * ---
     *
     * Normally the framework code will bootstrap UI-Router.
     * If you are bootstrapping UIRouter manually, tell it to monitor the URL by calling
     * [[UrlService.listen]] then [[UrlService.sync]].
     */
    var UIRouter = /** @class */ (function () {
        /**
         * Creates a new `UIRouter` object
         *
         * @param locationService a [[LocationServices]] implementation
         * @param locationConfig a [[LocationConfig]] implementation
         * @internalapi
         */
        function UIRouter(locationService, locationConfig) {
            if (locationService === void 0) { locationService = locationServiceStub; }
            if (locationConfig === void 0) { locationConfig = locationConfigStub; }
            this.locationService = locationService;
            this.locationConfig = locationConfig;
            /** @hidden */ this.$id = _routerInstance++;
            /** @hidden */ this._disposed = false;
            /** @hidden */ this._disposables = [];
            /** Provides trace information to the console */
            this.trace = trace;
            /** Provides services related to ui-view synchronization */
            this.viewService = new ViewService(this);
            /** Global router state */
            this.globals = new UIRouterGlobals();
            /** Provides services related to Transitions */
            this.transitionService = new TransitionService(this);
            /**
             * Deprecated for public use. Use [[urlService]] instead.
             * @deprecated Use [[urlService]] instead
             */
            this.urlMatcherFactory = new UrlMatcherFactory(this);
            /**
             * Deprecated for public use. Use [[urlService]] instead.
             * @deprecated Use [[urlService]] instead
             */
            this.urlRouter = new UrlRouter(this);
            /** Provides services related to the URL */
            this.urlService = new UrlService(this);
            /** Provides a registry for states, and related registration services */
            this.stateRegistry = new StateRegistry(this);
            /** Provides services related to states */
            this.stateService = new StateService(this);
            /** @hidden plugin instances are registered here */
            this._plugins = {};
            this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
            this.globals.$current = this.stateRegistry.root();
            this.globals.current = this.globals.$current.self;
            this.disposable(this.globals);
            this.disposable(this.stateService);
            this.disposable(this.stateRegistry);
            this.disposable(this.transitionService);
            this.disposable(this.urlService);
            this.disposable(locationService);
            this.disposable(locationConfig);
        }
        /** Registers an object to be notified when the router is disposed */
        UIRouter.prototype.disposable = function (disposable) {
            this._disposables.push(disposable);
        };
        /**
         * Disposes this router instance
         *
         * When called, clears resources retained by the router by calling `dispose(this)` on all
         * registered [[disposable]] objects.
         *
         * Or, if a `disposable` object is provided, calls `dispose(this)` on that object only.
         *
         * @param disposable (optional) the disposable to dispose
         */
        UIRouter.prototype.dispose = function (disposable) {
            var _this = this;
            if (disposable && isFunction(disposable.dispose)) {
                disposable.dispose(this);
                return undefined;
            }
            this._disposed = true;
            this._disposables.slice().forEach(function (d) {
                try {
                    typeof d.dispose === 'function' && d.dispose(_this);
                    removeFrom(_this._disposables, d);
                }
                catch (ignored) { }
            });
        };
        /**
         * Adds a plugin to UI-Router
         *
         * This method adds a UI-Router Plugin.
         * A plugin can enhance or change UI-Router behavior using any public API.
         *
         * #### Example:
         * ```js
         * import { MyCoolPlugin } from "ui-router-cool-plugin";
         *
         * var plugin = router.addPlugin(MyCoolPlugin);
         * ```
         *
         * ### Plugin authoring
         *
         * A plugin is simply a class (or constructor function) which accepts a [[UIRouter]] instance and (optionally) an options object.
         *
         * The plugin can implement its functionality using any of the public APIs of [[UIRouter]].
         * For example, it may configure router options or add a Transition Hook.
         *
         * The plugin can then be published as a separate module.
         *
         * #### Example:
         * ```js
         * export class MyAuthPlugin implements UIRouterPlugin {
         *   constructor(router: UIRouter, options: any) {
         *     this.name = "MyAuthPlugin";
         *     let $transitions = router.transitionService;
         *     let $state = router.stateService;
         *
         *     let authCriteria = {
         *       to: (state) => state.data && state.data.requiresAuth
         *     };
         *
         *     function authHook(transition: Transition) {
         *       let authService = transition.injector().get('AuthService');
         *       if (!authService.isAuthenticated()) {
         *         return $state.target('login');
         *       }
         *     }
         *
         *     $transitions.onStart(authCriteria, authHook);
         *   }
         * }
         * ```
         *
         * @param plugin one of:
         *        - a plugin class which implements [[UIRouterPlugin]]
         *        - a constructor function for a [[UIRouterPlugin]] which accepts a [[UIRouter]] instance
         *        - a factory function which accepts a [[UIRouter]] instance and returns a [[UIRouterPlugin]] instance
         * @param options options to pass to the plugin class/factory
         * @returns the registered plugin instance
         */
        UIRouter.prototype.plugin = function (plugin, options) {
            if (options === void 0) { options = {}; }
            var pluginInstance = new plugin(this, options);
            if (!pluginInstance.name)
                throw new Error('Required property `name` missing on plugin: ' + pluginInstance);
            this._disposables.push(pluginInstance);
            return (this._plugins[pluginInstance.name] = pluginInstance);
        };
        UIRouter.prototype.getPlugin = function (pluginName) {
            return pluginName ? this._plugins[pluginName] : values(this._plugins);
        };
        return UIRouter;
    }());

    /** @internalapi @module hooks */ /** */
    function addCoreResolvables(trans) {
        trans.addResolvable(Resolvable.fromData(UIRouter, trans.router), '');
        trans.addResolvable(Resolvable.fromData(Transition, trans), '');
        trans.addResolvable(Resolvable.fromData('$transition$', trans), '');
        trans.addResolvable(Resolvable.fromData('$stateParams', trans.params()), '');
        trans.entering().forEach(function (state) {
            trans.addResolvable(Resolvable.fromData('$state$', state), state);
        });
    }
    var registerAddCoreResolvables = function (transitionService) {
        return transitionService.onCreate({}, addCoreResolvables);
    };
    var TRANSITION_TOKENS = ['$transition$', Transition];
    var isTransition = inArray(TRANSITION_TOKENS);
    // References to Transition in the treeChanges pathnodes makes all
    // previous Transitions reachable in memory, causing a memory leak
    // This function removes resolves for '$transition$' and `Transition` from the treeChanges.
    // Do not use this on current transitions, only on old ones.
    var treeChangesCleanup = function (trans) {
        var nodes = values(trans.treeChanges())
            .reduce(unnestR, [])
            .reduce(uniqR, []);
        // If the resolvable is a Transition, return a new resolvable with null data
        var replaceTransitionWithNull = function (r) {
            return isTransition(r.token) ? Resolvable.fromData(r.token, null) : r;
        };
        nodes.forEach(function (node) {
            node.resolvables = node.resolvables.map(replaceTransitionWithNull);
        });
    };

    /** @internalapi @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] that redirects to a different state or params
     *
     * Registered using `transitionService.onStart({ to: (state) => !!state.redirectTo }, redirectHook);`
     *
     * See [[StateDeclaration.redirectTo]]
     */
    var redirectToHook = function (trans) {
        var redirect = trans.to().redirectTo;
        if (!redirect)
            return;
        var $state = trans.router.stateService;
        function handleResult(result) {
            if (!result)
                return;
            if (result instanceof TargetState)
                return result;
            if (isString(result))
                return $state.target(result, trans.params(), trans.options());
            if (result['state'] || result['params'])
                return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
        }
        if (isFunction(redirect)) {
            return services.$q.when(redirect(trans)).then(handleResult);
        }
        return handleResult(redirect);
    };
    var registerRedirectToHook = function (transitionService) {
        return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
    };

    /**
     * A factory which creates an onEnter, onExit or onRetain transition hook function
     *
     * The returned function invokes the (for instance) state.onEnter hook when the
     * state is being entered.
     *
     * @hidden
     */
    function makeEnterExitRetainHook(hookName) {
        return function (transition, state) {
            var _state = state.$$state();
            var hookFn = _state[hookName];
            return hookFn(transition, state);
        };
    }
    /**
     * The [[TransitionStateHookFn]] for onExit
     *
     * When the state is being exited, the state's .onExit function is invoked.
     *
     * Registered using `transitionService.onExit({ exiting: (state) => !!state.onExit }, onExitHook);`
     *
     * See: [[IHookRegistry.onExit]]
     */
    var onExitHook = makeEnterExitRetainHook('onExit');
    var registerOnExitHook = function (transitionService) {
        return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
    };
    /**
     * The [[TransitionStateHookFn]] for onRetain
     *
     * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
     *
     * Registered using `transitionService.onRetain({ retained: (state) => !!state.onRetain }, onRetainHook);`
     *
     * See: [[IHookRegistry.onRetain]]
     */
    var onRetainHook = makeEnterExitRetainHook('onRetain');
    var registerOnRetainHook = function (transitionService) {
        return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
    };
    /**
     * The [[TransitionStateHookFn]] for onEnter
     *
     * When the state is being entered, the state's .onEnter function is invoked.
     *
     * Registered using `transitionService.onEnter({ entering: (state) => !!state.onEnter }, onEnterHook);`
     *
     * See: [[IHookRegistry.onEnter]]
     */
    var onEnterHook = makeEnterExitRetainHook('onEnter');
    var registerOnEnterHook = function (transitionService) {
        return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
    };

    /** @internalapi @module hooks */ /** */
    var RESOLVE_HOOK_PRIORITY = 1000;
    /**
     * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
     *
     * Registered using `transitionService.onStart({}, eagerResolvePath, { priority: 1000 });`
     *
     * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
     *
     * See [[StateDeclaration.resolve]]
     */
    var eagerResolvePath = function (trans) {
        return new ResolveContext(trans.treeChanges().to).resolvePath('EAGER', trans).then(noop);
    };
    var registerEagerResolvePath = function (transitionService) {
        return transitionService.onStart({}, eagerResolvePath, { priority: RESOLVE_HOOK_PRIORITY });
    };
    /**
     * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
     *
     * Registered using `transitionService.onEnter({ entering: () => true }, lazyResolveState, { priority: 1000 });`
     *
     * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
     *
     * See [[StateDeclaration.resolve]]
     */
    var lazyResolveState = function (trans, state) {
        return new ResolveContext(trans.treeChanges().to)
            .subContext(state.$$state())
            .resolvePath('LAZY', trans)
            .then(noop);
    };
    var registerLazyResolveState = function (transitionService) {
        return transitionService.onEnter({ entering: val(true) }, lazyResolveState, { priority: RESOLVE_HOOK_PRIORITY });
    };
    /**
     * A [[TransitionHookFn]] which resolves any dynamically added (LAZY or EAGER) Resolvables.
     *
     * Registered using `transitionService.onFinish({}, eagerResolvePath, { priority: 1000 });`
     *
     * After all entering states have been entered, this hook resolves any remaining Resolvables.
     * These are typically dynamic resolves which were added by some Transition Hook using [[Transition.addResolvable]].
     *
     * See [[StateDeclaration.resolve]]
     */
    var resolveRemaining = function (trans) {
        return new ResolveContext(trans.treeChanges().to).resolvePath('LAZY', trans).then(noop);
    };
    var registerResolveRemaining = function (transitionService) {
        return transitionService.onFinish({}, resolveRemaining, { priority: RESOLVE_HOOK_PRIORITY });
    };

    /** @internalapi @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] which waits for the views to load
     *
     * Registered using `transitionService.onStart({}, loadEnteringViews);`
     *
     * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
     * In angular 1, this includes loading the templates.
     */
    var loadEnteringViews = function (transition) {
        var $q = services.$q;
        var enteringViews = transition.views('entering');
        if (!enteringViews.length)
            return;
        return $q.all(enteringViews.map(function (view) { return $q.when(view.load()); })).then(noop);
    };
    var registerLoadEnteringViews = function (transitionService) {
        return transitionService.onFinish({}, loadEnteringViews);
    };
    /**
     * A [[TransitionHookFn]] which activates the new views when a transition is successful.
     *
     * Registered using `transitionService.onSuccess({}, activateViews);`
     *
     * After a transition is complete, this hook deactivates the old views from the previous state,
     * and activates the new views from the destination state.
     *
     * See [[ViewService]]
     */
    var activateViews = function (transition) {
        var enteringViews = transition.views('entering');
        var exitingViews = transition.views('exiting');
        if (!enteringViews.length && !exitingViews.length)
            return;
        var $view = transition.router.viewService;
        exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
        enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
        $view.sync();
    };
    var registerActivateViews = function (transitionService) {
        return transitionService.onSuccess({}, activateViews);
    };

    /**
     * A [[TransitionHookFn]] which updates global UI-Router state
     *
     * Registered using `transitionService.onBefore({}, updateGlobalState);`
     *
     * Before a [[Transition]] starts, updates the global value of "the current transition" ([[Globals.transition]]).
     * After a successful [[Transition]], updates the global values of "the current state"
     * ([[Globals.current]] and [[Globals.$current]]) and "the current param values" ([[Globals.params]]).
     *
     * See also the deprecated properties:
     * [[StateService.transition]], [[StateService.current]], [[StateService.params]]
     */
    var updateGlobalState = function (trans) {
        var globals = trans.router.globals;
        var transitionSuccessful = function () {
            globals.successfulTransitions.enqueue(trans);
            globals.$current = trans.$to();
            globals.current = globals.$current.self;
            copy(trans.params(), globals.params);
        };
        var clearCurrentTransition = function () {
            // Do not clear globals.transition if a different transition has started in the meantime
            if (globals.transition === trans)
                globals.transition = null;
        };
        trans.onSuccess({}, transitionSuccessful, { priority: 10000 });
        trans.promise.then(clearCurrentTransition, clearCurrentTransition);
    };
    var registerUpdateGlobalState = function (transitionService) {
        return transitionService.onCreate({}, updateGlobalState);
    };

    /**
     * A [[TransitionHookFn]] which updates the URL after a successful transition
     *
     * Registered using `transitionService.onSuccess({}, updateUrl);`
     */
    var updateUrl = function (transition) {
        var options = transition.options();
        var $state = transition.router.stateService;
        var $urlRouter = transition.router.urlRouter;
        // Dont update the url in these situations:
        // The transition was triggered by a URL sync (options.source === 'url')
        // The user doesn't want the url to update (options.location === false)
        // The destination state, and all parents have no navigable url
        if (options.source !== 'url' && options.location && $state.$current.navigable) {
            var urlOptions = { replace: options.location === 'replace' };
            $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
        }
        $urlRouter.update(true);
    };
    var registerUpdateUrl = function (transitionService) {
        return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
    };

    /**
     * A [[TransitionHookFn]] that performs lazy loading
     *
     * When entering a state "abc" which has a `lazyLoad` function defined:
     * - Invoke the `lazyLoad` function (unless it is already in process)
     *   - Flag the hook function as "in process"
     *   - The function should return a promise (that resolves when lazy loading is complete)
     * - Wait for the promise to settle
     *   - If the promise resolves to a [[LazyLoadResult]], then register those states
     *   - Flag the hook function as "not in process"
     * - If the hook was successful
     *   - Remove the `lazyLoad` function from the state declaration
     * - If all the hooks were successful
     *   - Retry the transition (by returning a TargetState)
     *
     * ```
     * .state('abc', {
     *   component: 'fooComponent',
     *   lazyLoad: () => System.import('./fooComponent')
     *   });
     * ```
     *
     * See [[StateDeclaration.lazyLoad]]
     */
    var lazyLoadHook = function (transition) {
        var router = transition.router;
        function retryTransition() {
            if (transition.originalTransition().options().source !== 'url') {
                // The original transition was not triggered via url sync
                // The lazy state should be loaded now, so re-try the original transition
                var orig = transition.targetState();
                return router.stateService.target(orig.identifier(), orig.params(), orig.options());
            }
            // The original transition was triggered via url sync
            // Run the URL rules and find the best match
            var $url = router.urlService;
            var result = $url.match($url.parts());
            var rule = result && result.rule;
            // If the best match is a state, redirect the transition (instead
            // of calling sync() which supersedes the current transition)
            if (rule && rule.type === 'STATE') {
                var state = rule.state;
                var params = result.match;
                return router.stateService.target(state, params, transition.options());
            }
            // No matching state found, so let .sync() choose the best non-state match/otherwise
            router.urlService.sync();
        }
        var promises = transition
            .entering()
            .filter(function (state) { return !!state.$$state().lazyLoad; })
            .map(function (state) { return lazyLoadState(transition, state); });
        return services.$q.all(promises).then(retryTransition);
    };
    var registerLazyLoadHook = function (transitionService) {
        return transitionService.onBefore({ entering: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
    };
    /**
     * Invokes a state's lazy load function
     *
     * @param transition a Transition context
     * @param state the state to lazy load
     * @returns A promise for the lazy load result
     */
    function lazyLoadState(transition, state) {
        var lazyLoadFn = state.$$state().lazyLoad;
        // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
        var promise = lazyLoadFn['_promise'];
        if (!promise) {
            var success = function (result) {
                delete state.lazyLoad;
                delete state.$$state().lazyLoad;
                delete lazyLoadFn['_promise'];
                return result;
            };
            var error = function (err) {
                delete lazyLoadFn['_promise'];
                return services.$q.reject(err);
            };
            promise = lazyLoadFn['_promise'] = services.$q
                .when(lazyLoadFn(transition, state))
                .then(updateStateRegistry)
                .then(success, error);
        }
        /** Register any lazy loaded state definitions */
        function updateStateRegistry(result) {
            if (result && Array.isArray(result.states)) {
                result.states.forEach(function (_state) { return transition.router.stateRegistry.register(_state); });
            }
            return result;
        }
        return promise;
    }

    /**
     * This class defines a type of hook, such as `onBefore` or `onEnter`.
     * Plugins can define custom hook types, such as sticky states does for `onInactive`.
     *
     * @interalapi
     */
    var TransitionEventType = /** @class */ (function () {
        /* tslint:disable:no-inferrable-types */
        function TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
            if (reverseSort === void 0) { reverseSort = false; }
            if (getResultHandler === void 0) { getResultHandler = TransitionHook.HANDLE_RESULT; }
            if (getErrorHandler === void 0) { getErrorHandler = TransitionHook.REJECT_ERROR; }
            if (synchronous === void 0) { synchronous = false; }
            this.name = name;
            this.hookPhase = hookPhase;
            this.hookOrder = hookOrder;
            this.criteriaMatchPath = criteriaMatchPath;
            this.reverseSort = reverseSort;
            this.getResultHandler = getResultHandler;
            this.getErrorHandler = getErrorHandler;
            this.synchronous = synchronous;
        }
        return TransitionEventType;
    }());

    /** @internalapi @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] that skips a transition if it should be ignored
     *
     * This hook is invoked at the end of the onBefore phase.
     *
     * If the transition should be ignored (because no parameter or states changed)
     * then the transition is ignored and not processed.
     */
    function ignoredHook(trans) {
        var ignoredReason = trans._ignoredReason();
        if (!ignoredReason)
            return;
        trace.traceTransitionIgnored(trans);
        var pending = trans.router.globals.transition;
        // The user clicked a link going back to the *current state* ('A')
        // However, there is also a pending transition in flight (to 'B')
        // Abort the transition to 'B' because the user now wants to be back at 'A'.
        if (ignoredReason === 'SameAsCurrent' && pending) {
            pending.abort();
        }
        return Rejection.ignored().toPromise();
    }
    var registerIgnoredTransitionHook = function (transitionService) {
        return transitionService.onBefore({}, ignoredHook, { priority: -9999 });
    };

    /** @internalapi @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] that rejects the Transition if it is invalid
     *
     * This hook is invoked at the end of the onBefore phase.
     * If the transition is invalid (for example, param values do not validate)
     * then the transition is rejected.
     */
    function invalidTransitionHook(trans) {
        if (!trans.valid()) {
            throw new Error(trans.error().toString());
        }
    }
    var registerInvalidTransitionHook = function (transitionService) {
        return transitionService.onBefore({}, invalidTransitionHook, { priority: -10000 });
    };

    /** @publicapi @module transition */ /** */
    /**
     * The default [[Transition]] options.
     *
     * Include this object when applying custom defaults:
     * let reloadOpts = { reload: true, notify: true }
     * let options = defaults(theirOpts, customDefaults, defaultOptions);
     */
    var defaultTransOpts = {
        location: true,
        relative: null,
        inherit: false,
        notify: true,
        reload: false,
        custom: {},
        current: function () { return null; },
        source: 'unknown',
    };
    /**
     * This class provides services related to Transitions.
     *
     * - Most importantly, it allows global Transition Hooks to be registered.
     * - It allows the default transition error handler to be set.
     * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
     *
     * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
     */
    var TransitionService = /** @class */ (function () {
        /** @hidden */
        function TransitionService(_router) {
            /** @hidden */
            this._transitionCount = 0;
            /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
            this._eventTypes = [];
            /** @hidden The registered transition hooks */
            this._registeredHooks = {};
            /** @hidden The  paths on a criteria object */
            this._criteriaPaths = {};
            this._router = _router;
            this.$view = _router.viewService;
            this._deregisterHookFns = {};
            this._pluginapi = (createProxyFunctions(val(this), {}, val(this), [
                '_definePathType',
                '_defineEvent',
                '_getPathTypes',
                '_getEvents',
                'getHooks',
            ]));
            this._defineCorePaths();
            this._defineCoreEvents();
            this._registerCoreTransitionHooks();
            _router.globals.successfulTransitions.onEvict(treeChangesCleanup);
        }
        /**
         * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
         *
         * Registers a transition lifecycle hook, which is invoked during transition construction.
         *
         * This low level hook should only be used by plugins.
         * This can be a useful time for plugins to add resolves or mutate the transition as needed.
         * The Sticky States plugin uses this hook to modify the treechanges.
         *
         * ### Lifecycle
         *
         * `onCreate` hooks are invoked *while a transition is being constructed*.
         *
         * ### Return value
         *
         * The hook's return value is ignored
         *
         * @internalapi
         * @param criteria defines which Transitions the Hook should be invoked for.
         * @param callback the hook function which will be invoked.
         * @param options the registration options
         * @returns a function which deregisters the hook.
         */
        TransitionService.prototype.onCreate = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onBefore = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onStart = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onExit = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onRetain = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onEnter = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onFinish = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onSuccess = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onError = function (criteria, callback, options) {
            return;
        };
        /**
         * dispose
         * @internalapi
         */
        TransitionService.prototype.dispose = function (router) {
            values(this._registeredHooks).forEach(function (hooksArray) {
                return hooksArray.forEach(function (hook) {
                    hook._deregistered = true;
                    removeFrom(hooksArray, hook);
                });
            });
        };
        /**
         * Creates a new [[Transition]] object
         *
         * This is a factory function for creating new Transition objects.
         * It is used internally by the [[StateService]] and should generally not be called by application code.
         *
         * @param fromPath the path to the current state (the from state)
         * @param targetState the target state (destination)
         * @returns a Transition
         */
        TransitionService.prototype.create = function (fromPath, targetState) {
            return new Transition(fromPath, targetState, this._router);
        };
        /** @hidden */
        TransitionService.prototype._defineCoreEvents = function () {
            var Phase = exports.TransitionHookPhase;
            var TH = TransitionHook;
            var paths = this._criteriaPaths;
            var NORMAL_SORT = false, REVERSE_SORT = true;
            var SYNCHRONOUS = true;
            this._defineEvent('onCreate', Phase.CREATE, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.THROW_ERROR, SYNCHRONOUS);
            this._defineEvent('onBefore', Phase.BEFORE, 0, paths.to);
            this._defineEvent('onStart', Phase.RUN, 0, paths.to);
            this._defineEvent('onExit', Phase.RUN, 100, paths.exiting, REVERSE_SORT);
            this._defineEvent('onRetain', Phase.RUN, 200, paths.retained);
            this._defineEvent('onEnter', Phase.RUN, 300, paths.entering);
            this._defineEvent('onFinish', Phase.RUN, 400, paths.to);
            this._defineEvent('onSuccess', Phase.SUCCESS, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
            this._defineEvent('onError', Phase.ERROR, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
        };
        /** @hidden */
        TransitionService.prototype._defineCorePaths = function () {
            var STATE = exports.TransitionHookScope.STATE, TRANSITION = exports.TransitionHookScope.TRANSITION;
            this._definePathType('to', TRANSITION);
            this._definePathType('from', TRANSITION);
            this._definePathType('exiting', STATE);
            this._definePathType('retained', STATE);
            this._definePathType('entering', STATE);
        };
        /** @hidden */
        TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
            if (reverseSort === void 0) { reverseSort = false; }
            if (getResultHandler === void 0) { getResultHandler = TransitionHook.HANDLE_RESULT; }
            if (getErrorHandler === void 0) { getErrorHandler = TransitionHook.REJECT_ERROR; }
            if (synchronous === void 0) { synchronous = false; }
            var eventType = new TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous);
            this._eventTypes.push(eventType);
            makeEvent(this, this, eventType);
        };
        /** @hidden */
        // tslint:disable-next-line
        TransitionService.prototype._getEvents = function (phase) {
            var transitionHookTypes = isDefined(phase)
                ? this._eventTypes.filter(function (type) { return type.hookPhase === phase; })
                : this._eventTypes.slice();
            return transitionHookTypes.sort(function (l, r) {
                var cmpByPhase = l.hookPhase - r.hookPhase;
                return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
            });
        };
        /**
         * Adds a Path to be used as a criterion against a TreeChanges path
         *
         * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
         * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
         * Each state in the exiting path is checked against the criteria and returned as part of the match.
         *
         * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
         * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
         * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
         *
         * @hidden
         */
        TransitionService.prototype._definePathType = function (name, hookScope) {
            this._criteriaPaths[name] = { name: name, scope: hookScope };
        };
        /** * @hidden */
        // tslint:disable-next-line
        TransitionService.prototype._getPathTypes = function () {
            return this._criteriaPaths;
        };
        /** @hidden */
        TransitionService.prototype.getHooks = function (hookName) {
            return this._registeredHooks[hookName];
        };
        /** @hidden */
        TransitionService.prototype._registerCoreTransitionHooks = function () {
            var fns = this._deregisterHookFns;
            fns.addCoreResolves = registerAddCoreResolvables(this);
            fns.ignored = registerIgnoredTransitionHook(this);
            fns.invalid = registerInvalidTransitionHook(this);
            // Wire up redirectTo hook
            fns.redirectTo = registerRedirectToHook(this);
            // Wire up onExit/Retain/Enter state hooks
            fns.onExit = registerOnExitHook(this);
            fns.onRetain = registerOnRetainHook(this);
            fns.onEnter = registerOnEnterHook(this);
            // Wire up Resolve hooks
            fns.eagerResolve = registerEagerResolvePath(this);
            fns.lazyResolve = registerLazyResolveState(this);
            fns.resolveAll = registerResolveRemaining(this);
            // Wire up the View management hooks
            fns.loadViews = registerLoadEnteringViews(this);
            fns.activateViews = registerActivateViews(this);
            // Updates global state after a transition
            fns.updateGlobals = registerUpdateGlobalState(this);
            // After globals.current is updated at priority: 10000
            fns.updateUrl = registerUpdateUrl(this);
            // Lazy load state trees
            fns.lazyLoad = registerLazyLoadHook(this);
        };
        return TransitionService;
    }());

    /** @publicapi @module state */ /** */
    /**
     * Provides state related service functions
     *
     * This class provides services related to ui-router states.
     * An instance of this class is located on the global [[UIRouter]] object.
     */
    var StateService = /** @class */ (function () {
        /** @internalapi */
        function StateService(/** @hidden */ router) {
            this.router = router;
            /** @internalapi */
            this.invalidCallbacks = [];
            /** @hidden */
            this._defaultErrorHandler = function $defaultErrorHandler($error$) {
                if ($error$ instanceof Error && $error$.stack) {
                    console.error($error$);
                    console.error($error$.stack);
                }
                else if ($error$ instanceof Rejection) {
                    console.error($error$.toString());
                    if ($error$.detail && $error$.detail.stack)
                        console.error($error$.detail.stack);
                }
                else {
                    console.error($error$);
                }
            };
            var getters = ['current', '$current', 'params', 'transition'];
            var boundFns = Object.keys(StateService.prototype).filter(not(inArray(getters)));
            createProxyFunctions(val(StateService.prototype), this, val(this), boundFns);
        }
        Object.defineProperty(StateService.prototype, "transition", {
            /**
             * The [[Transition]] currently in progress (or null)
             *
             * This is a passthrough through to [[UIRouterGlobals.transition]]
             */
            get: function () {
                return this.router.globals.transition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateService.prototype, "params", {
            /**
             * The latest successful state parameters
             *
             * This is a passthrough through to [[UIRouterGlobals.params]]
             */
            get: function () {
                return this.router.globals.params;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateService.prototype, "current", {
            /**
             * The current [[StateDeclaration]]
             *
             * This is a passthrough through to [[UIRouterGlobals.current]]
             */
            get: function () {
                return this.router.globals.current;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateService.prototype, "$current", {
            /**
             * The current [[StateObject]]
             *
             * This is a passthrough through to [[UIRouterGlobals.$current]]
             */
            get: function () {
                return this.router.globals.$current;
            },
            enumerable: true,
            configurable: true
        });
        /** @internalapi */
        StateService.prototype.dispose = function () {
            this.defaultErrorHandler(noop);
            this.invalidCallbacks = [];
        };
        /**
         * Handler for when [[transitionTo]] is called with an invalid state.
         *
         * Invokes the [[onInvalid]] callbacks, in natural order.
         * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
         * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
         *
         * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
         *
         * @internalapi
         */
        StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
            var _this = this;
            var fromState = PathUtils.makeTargetState(this.router.stateRegistry, fromPath);
            var globals = this.router.globals;
            var latestThing = function () { return globals.transitionHistory.peekTail(); };
            var latest = latestThing();
            var callbackQueue = new Queue(this.invalidCallbacks.slice());
            var injector = new ResolveContext(fromPath).injector();
            var checkForRedirect = function (result) {
                if (!(result instanceof TargetState)) {
                    return;
                }
                var target = result;
                // Recreate the TargetState, in case the state is now defined.
                target = _this.target(target.identifier(), target.params(), target.options());
                if (!target.valid()) {
                    return Rejection.invalid(target.error()).toPromise();
                }
                if (latestThing() !== latest) {
                    return Rejection.superseded().toPromise();
                }
                return _this.transitionTo(target.identifier(), target.params(), target.options());
            };
            function invokeNextCallback() {
                var nextCallback = callbackQueue.dequeue();
                if (nextCallback === undefined)
                    return Rejection.invalid(toState.error()).toPromise();
                var callbackResult = services.$q.when(nextCallback(toState, fromState, injector));
                return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
            }
            return invokeNextCallback();
        };
        /**
         * Registers an Invalid State handler
         *
         * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
         * has been called with an invalid state reference parameter
         *
         * Example:
         * ```js
         * stateService.onInvalid(function(to, from, injector) {
         *   if (to.name() === 'foo') {
         *     let lazyLoader = injector.get('LazyLoadService');
         *     return lazyLoader.load('foo')
         *         .then(() => stateService.target('foo'));
         *   }
         * });
         * ```
         *
         * @param {function} callback invoked when the toState is invalid
         *   This function receives the (invalid) toState, the fromState, and an injector.
         *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
         *   If one is returned, it is treated as a redirect.
         *
         * @returns a function which deregisters the callback
         */
        StateService.prototype.onInvalid = function (callback) {
            this.invalidCallbacks.push(callback);
            return function deregisterListener() {
                removeFrom(this.invalidCallbacks)(callback);
            }.bind(this);
        };
        /**
         * Reloads the current state
         *
         * A method that force reloads the current state, or a partial state hierarchy.
         * All resolves are re-resolved, and components reinstantiated.
         *
         * #### Example:
         * ```js
         * let app angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.reload = function(){
         *     $state.reload();
         *   }
         * });
         * ```
         *
         * Note: `reload()` is just an alias for:
         *
         * ```js
         * $state.transitionTo($state.current, $state.params, {
         *   reload: true, inherit: false
         * });
         * ```
         *
         * @param reloadState A state name or a state object.
         *    If present, this state and all its children will be reloaded, but ancestors will not reload.
         *
         * #### Example:
         * ```js
         * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
         * //and current state is 'contacts.detail.item'
         * let app angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.reload = function(){
         *     //will reload 'contact.detail' and nested 'contact.detail.item' states
         *     $state.reload('contact.detail');
         *   }
         * });
         * ```
         *
         * @returns A promise representing the state of the new transition. See [[StateService.go]]
         */
        StateService.prototype.reload = function (reloadState) {
            return this.transitionTo(this.current, this.params, {
                reload: isDefined(reloadState) ? reloadState : true,
                inherit: false,
                notify: false,
            });
        };
        /**
         * Transition to a different state and/or parameters
         *
         * Convenience method for transitioning to a new state.
         *
         * `$state.go` calls `$state.transitionTo` internally but automatically sets options to
         * `{ location: true, inherit: true, relative: router.globals.$current, notify: true }`.
         * This allows you to use either an absolute or relative `to` argument (because of `relative: router.globals.$current`).
         * It also allows you to specify * only the parameters you'd like to update, while letting unspecified parameters
         * inherit from the current parameter values (because of `inherit: true`).
         *
         * #### Example:
         * ```js
         * let app = angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.changeState = function () {
         *     $state.go('contact.detail');
         *   };
         * });
         * ```
         *
         * @param to Absolute state name, state object, or relative state path (relative to current state).
         *
         * Some examples:
         *
         * - `$state.go('contact.detail')` - will go to the `contact.detail` state
         * - `$state.go('^')` - will go to the parent state
         * - `$state.go('^.sibling')` - if current state is `home.child`, will go to the `home.sibling` state
         * - `$state.go('.child.grandchild')` - if current state is home, will go to the `home.child.grandchild` state
         *
         * @param params A map of the parameters that will be sent to the state, will populate $stateParams.
         *
         *    Any parameters that are not specified will be inherited from current parameter values (because of `inherit: true`).
         *    This allows, for example, going to a sibling state that shares parameters defined by a parent state.
         *
         * @param options Transition options
         *
         * @returns {promise} A promise representing the state of the new transition.
         */
        StateService.prototype.go = function (to, params, options) {
            var defautGoOpts = { relative: this.$current, inherit: true };
            var transOpts = defaults(options, defautGoOpts, defaultTransOpts);
            return this.transitionTo(to, params, transOpts);
        };
        /**
         * Creates a [[TargetState]]
         *
         * This is a factory method for creating a TargetState
         *
         * This may be returned from a Transition Hook to redirect a transition, for example.
         */
        StateService.prototype.target = function (identifier, params, options) {
            if (options === void 0) { options = {}; }
            // If we're reloading, find the state object to reload from
            if (isObject(options.reload) && !options.reload.name)
                throw new Error('Invalid reload state object');
            var reg = this.router.stateRegistry;
            options.reloadState =
                options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
            if (options.reload && !options.reloadState)
                throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
            return new TargetState(this.router.stateRegistry, identifier, params, options);
        };
        StateService.prototype.getCurrentPath = function () {
            var _this = this;
            var globals = this.router.globals;
            var latestSuccess = globals.successfulTransitions.peekTail();
            var rootPath = function () { return [new PathNode(_this.router.stateRegistry.root())]; };
            return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
        };
        /**
         * Low-level method for transitioning to a new state.
         *
         * The [[go]] method (which uses `transitionTo` internally) is recommended in most situations.
         *
         * #### Example:
         * ```js
         * let app = angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.changeState = function () {
         *     $state.transitionTo('contact.detail');
         *   };
         * });
         * ```
         *
         * @param to State name or state object.
         * @param toParams A map of the parameters that will be sent to the state,
         *      will populate $stateParams.
         * @param options Transition options
         *
         * @returns A promise representing the state of the new transition. See [[go]]
         */
        StateService.prototype.transitionTo = function (to, toParams, options) {
            var _this = this;
            if (toParams === void 0) { toParams = {}; }
            if (options === void 0) { options = {}; }
            var router = this.router;
            var globals = router.globals;
            options = defaults(options, defaultTransOpts);
            var getCurrent = function () { return globals.transition; };
            options = extend(options, { current: getCurrent });
            var ref = this.target(to, toParams, options);
            var currentPath = this.getCurrentPath();
            if (!ref.exists())
                return this._handleInvalidTargetState(currentPath, ref);
            if (!ref.valid())
                return silentRejection(ref.error());
            /**
             * Special handling for Ignored, Aborted, and Redirected transitions
             *
             * The semantics for the transition.run() promise and the StateService.transitionTo()
             * promise differ. For instance, the run() promise may be rejected because it was
             * IGNORED, but the transitionTo() promise is resolved because from the user perspective
             * no error occurred.  Likewise, the transition.run() promise may be rejected because of
             * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
             */
            var rejectedTransitionHandler = function (trans) { return function (error) {
                if (error instanceof Rejection) {
                    var isLatest = router.globals.lastStartedTransitionId <= trans.$id;
                    if (error.type === exports.RejectType.IGNORED) {
                        isLatest && router.urlRouter.update();
                        // Consider ignored `Transition.run()` as a successful `transitionTo`
                        return services.$q.when(globals.current);
                    }
                    var detail = error.detail;
                    if (error.type === exports.RejectType.SUPERSEDED && error.redirected && detail instanceof TargetState) {
                        // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
                        // by returning the promise for the new (redirect) `Transition.run()`.
                        var redirect = trans.redirect(detail);
                        return redirect.run().catch(rejectedTransitionHandler(redirect));
                    }
                    if (error.type === exports.RejectType.ABORTED) {
                        isLatest && router.urlRouter.update();
                        return services.$q.reject(error);
                    }
                }
                var errorHandler = _this.defaultErrorHandler();
                errorHandler(error);
                return services.$q.reject(error);
            }; };
            var transition = this.router.transitionService.create(currentPath, ref);
            var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
            silenceUncaughtInPromise(transitionToPromise); // issue #2676
            // Return a promise for the transition, which also has the transition object on it.
            return extend(transitionToPromise, { transition: transition });
        };
        /**
         * Checks if the current state *is* the provided state
         *
         * Similar to [[includes]] but only checks for the full state name.
         * If params is supplied then it will be tested for strict equality against the current
         * active params object, so all params must match with none missing and no extras.
         *
         * #### Example:
         * ```js
         * $state.$current.name = 'contacts.details.item';
         *
         * // absolute name
         * $state.is('contact.details.item'); // returns true
         * $state.is(contactDetailItemStateObject); // returns true
         * ```
         *
         * // relative name (. and ^), typically from a template
         * // E.g. from the 'contacts.details' template
         * ```html
         * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
         * ```
         *
         * @param stateOrName The state name (absolute or relative) or state object you'd like to check.
         * @param params A param object, e.g. `{sectionId: section.id}`, that you'd like
         * to test against the current active state.
         * @param options An options object. The options are:
         *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
         *     test relative to `options.relative` state (or name).
         *
         * @returns Returns true if it is the state.
         */
        StateService.prototype.is = function (stateOrName, params, options) {
            options = defaults(options, { relative: this.$current });
            var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
            if (!isDefined(state))
                return undefined;
            if (this.$current !== state)
                return false;
            if (!params)
                return true;
            var schema = state.parameters({ inherit: true, matchingKeys: params });
            return Param.equals(schema, Param.values(schema, params), this.params);
        };
        /**
         * Checks if the current state *includes* the provided state
         *
         * A method to determine if the current active state is equal to or is the child of the
         * state stateName. If any params are passed then they will be tested for a match as well.
         * Not all the parameters need to be passed, just the ones you'd like to test for equality.
         *
         * #### Example when `$state.$current.name === 'contacts.details.item'`
         * ```js
         * // Using partial names
         * $state.includes("contacts"); // returns true
         * $state.includes("contacts.details"); // returns true
         * $state.includes("contacts.details.item"); // returns true
         * $state.includes("contacts.list"); // returns false
         * $state.includes("about"); // returns false
         * ```
         *
         * #### Glob Examples when `* $state.$current.name === 'contacts.details.item.url'`:
         * ```js
         * $state.includes("*.details.*.*"); // returns true
         * $state.includes("*.details.**"); // returns true
         * $state.includes("**.item.**"); // returns true
         * $state.includes("*.details.item.url"); // returns true
         * $state.includes("*.details.*.url"); // returns true
         * $state.includes("*.details.*"); // returns false
         * $state.includes("item.**"); // returns false
         * ```
         *
         * @param stateOrName A partial name, relative name, glob pattern,
         *   or state object to be searched for within the current state name.
         * @param params A param object, e.g. `{sectionId: section.id}`,
         *   that you'd like to test against the current active state.
         * @param options An options object. The options are:
         *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
         *     test relative to `options.relative` state (or name).
         *
         * @returns {boolean} Returns true if it does include the state
         */
        StateService.prototype.includes = function (stateOrName, params, options) {
            options = defaults(options, { relative: this.$current });
            var glob = isString(stateOrName) && Glob.fromString(stateOrName);
            if (glob) {
                if (!glob.matches(this.$current.name))
                    return false;
                stateOrName = this.$current.name;
            }
            var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
            if (!isDefined(state))
                return undefined;
            if (!isDefined(include[state.name]))
                return false;
            if (!params)
                return true;
            var schema = state.parameters({ inherit: true, matchingKeys: params });
            return Param.equals(schema, Param.values(schema, params), this.params);
        };
        /**
         * Generates a URL for a state and parameters
         *
         * Returns the url for the given state populated with the given params.
         *
         * #### Example:
         * ```js
         * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
         * ```
         *
         * @param stateOrName The state name or state object you'd like to generate a url from.
         * @param params An object of parameter values to fill the state's required parameters.
         * @param options Options object. The options are:
         *
         * @returns {string} compiled state url
         */
        StateService.prototype.href = function (stateOrName, params, options) {
            var defaultHrefOpts = {
                lossy: true,
                inherit: true,
                absolute: false,
                relative: this.$current,
            };
            options = defaults(options, defaultHrefOpts);
            params = params || {};
            var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
            if (!isDefined(state))
                return null;
            if (options.inherit)
                params = this.params.$inherit(params, this.$current, state);
            var nav = state && options.lossy ? state.navigable : state;
            if (!nav || nav.url === undefined || nav.url === null) {
                return null;
            }
            return this.router.urlRouter.href(nav.url, params, { absolute: options.absolute });
        };
        /**
         * Sets or gets the default [[transitionTo]] error handler.
         *
         * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
         * This includes errors caused by resolves and transition hooks.
         *
         * Note:
         * This handler does not receive certain Transition rejections.
         * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
         *
         * The built-in default error handler logs the error to the console.
         *
         * You can provide your own custom handler.
         *
         * #### Example:
         * ```js
         * stateService.defaultErrorHandler(function() {
         *   // Do not log transitionTo errors
         * });
         * ```
         *
         * @param handler a global error handler function
         * @returns the current global error handler
         */
        StateService.prototype.defaultErrorHandler = function (handler) {
            return (this._defaultErrorHandler = handler || this._defaultErrorHandler);
        };
        StateService.prototype.get = function (stateOrName, base) {
            var reg = this.router.stateRegistry;
            if (arguments.length === 0)
                return reg.get();
            return reg.get(stateOrName, base || this.$current);
        };
        /**
         * Lazy loads a state
         *
         * Explicitly runs a state's [[StateDeclaration.lazyLoad]] function.
         *
         * @param stateOrName the state that should be lazy loaded
         * @param transition the optional Transition context to use (if the lazyLoad function requires an injector, etc)
         * Note: If no transition is provided, a noop transition is created using the from the current state to the current state.
         * This noop transition is not actually run.
         *
         * @returns a promise to lazy load
         */
        StateService.prototype.lazyLoad = function (stateOrName, transition) {
            var state = this.get(stateOrName);
            if (!state || !state.lazyLoad)
                throw new Error('Can not lazy load ' + stateOrName);
            var currentPath = this.getCurrentPath();
            var target = PathUtils.makeTargetState(this.router.stateRegistry, currentPath);
            transition = transition || this.router.transitionService.create(currentPath, target);
            return lazyLoadState(transition, state);
        };
        return StateService;
    }());

    /**
     * # Transition subsystem
     *
     * This module contains APIs related to a Transition.
     *
     * See:
     * - [[TransitionService]]
     * - [[Transition]]
     * - [[HookFn]], [[TransitionHookFn]], [[TransitionStateHookFn]], [[HookMatchCriteria]], [[HookResult]]
     *
     * @preferred @publicapi @module transition
     */ /** */

    /** @internalapi @module vanilla */ /** */
    /**
     * An angular1-like promise api
     *
     * This object implements four methods similar to the
     * [angular 1 promise api](https://docs.angularjs.org/api/ng/service/$q)
     *
     * UI-Router evolved from an angular 1 library to a framework agnostic library.
     * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
     *
     * This API provides native ES6 promise support wrapped as a $q-like API.
     * Internally, UI-Router uses this $q object to perform promise operations.
     * The `angular-ui-router` (ui-router for angular 1) uses the $q API provided by angular.
     *
     * $q-like promise api
     */
    var $q = {
        /** Normalizes a value as a promise */
        when: function (val$$1) { return new Promise(function (resolve, reject) { return resolve(val$$1); }); },
        /** Normalizes a value as a promise rejection */
        reject: function (val$$1) {
            return new Promise(function (resolve, reject) {
                reject(val$$1);
            });
        },
        /** @returns a deferred object, which has `resolve` and `reject` functions */
        defer: function () {
            var deferred = {};
            deferred.promise = new Promise(function (resolve, reject) {
                deferred.resolve = resolve;
                deferred.reject = reject;
            });
            return deferred;
        },
        /** Like Promise.all(), but also supports object key/promise notation like $q */
        all: function (promises) {
            if (isArray(promises)) {
                return Promise.all(promises);
            }
            if (isObject(promises)) {
                // Convert promises map to promises array.
                // When each promise resolves, map it to a tuple { key: key, val: val }
                var chain = Object.keys(promises).map(function (key) { return promises[key].then(function (val$$1) { return ({ key: key, val: val$$1 }); }); });
                // Then wait for all promises to resolve, and convert them back to an object
                return $q.all(chain).then(function (values$$1) {
                    return values$$1.reduce(function (acc, tuple) {
                        acc[tuple.key] = tuple.val;
                        return acc;
                    }, {});
                });
            }
        },
    };

    /** @internalapi @module vanilla */ /** */
    // globally available injectables
    var globals = {};
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
    /**
     * A basic angular1-like injector api
     *
     * This object implements four methods similar to the
     * [angular 1 dependency injector](https://docs.angularjs.org/api/auto/service/$injector)
     *
     * UI-Router evolved from an angular 1 library to a framework agnostic library.
     * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
     *
     * This object provides a naive implementation of a globally scoped dependency injection system.
     * It supports the following DI approaches:
     *
     * ### Function parameter names
     *
     * A function's `.toString()` is called, and the parameter names are parsed.
     * This only works when the parameter names aren't "mangled" by a minifier such as UglifyJS.
     *
     * ```js
     * function injectedFunction(FooService, BarService) {
     *   // FooService and BarService are injected
     * }
     * ```
     *
     * ### Function annotation
     *
     * A function may be annotated with an array of dependency names as the `$inject` property.
     *
     * ```js
     * injectedFunction.$inject = [ 'FooService', 'BarService' ];
     * function injectedFunction(fs, bs) {
     *   // FooService and BarService are injected as fs and bs parameters
     * }
     * ```
     *
     * ### Array notation
     *
     * An array provides the names of the dependencies to inject (as strings).
     * The function is the last element of the array.
     *
     * ```js
     * [ 'FooService', 'BarService', function (fs, bs) {
     *   // FooService and BarService are injected as fs and bs parameters
     * }]
     * ```
     *
     * @type {$InjectorLike}
     */
    var $injector = {
        /** Gets an object from DI based on a string token */
        get: function (name) { return globals[name]; },
        /** Returns true if an object named `name` exists in global DI */
        has: function (name) { return $injector.get(name) != null; },
        /**
         * Injects a function
         *
         * @param fn the function to inject
         * @param context the function's `this` binding
         * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
         */
        invoke: function (fn, context, locals) {
            var all$$1 = extend({}, globals, locals || {});
            var params = $injector.annotate(fn);
            var ensureExist = assertPredicate(function (key) { return all$$1.hasOwnProperty(key); }, function (key) { return "DI can't find injectable: '" + key + "'"; });
            var args = params.filter(ensureExist).map(function (x) { return all$$1[x]; });
            if (isFunction(fn))
                return fn.apply(context, args);
            else
                return fn.slice(-1)[0].apply(context, args);
        },
        /**
         * Returns a function's dependencies
         *
         * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
         * @return an array of `string`s
         */
        annotate: function (fn) {
            if (!isInjectable(fn))
                throw new Error("Not an injectable function: " + fn);
            if (fn && fn.$inject)
                return fn.$inject;
            if (isArray(fn))
                return fn.slice(0, -1);
            var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
            var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
            return result || [];
        },
    };

    /** @internalapi @module vanilla */ /** */
    var keyValsToObjectR = function (accum, _a) {
        var key = _a[0], val$$1 = _a[1];
        if (!accum.hasOwnProperty(key)) {
            accum[key] = val$$1;
        }
        else if (isArray(accum[key])) {
            accum[key].push(val$$1);
        }
        else {
            accum[key] = [accum[key], val$$1];
        }
        return accum;
    };
    var getParams = function (queryString) {
        return queryString
            .split('&')
            .filter(identity)
            .map(splitEqual)
            .reduce(keyValsToObjectR, {});
    };
    function parseUrl$1(url) {
        var orEmptyString = function (x) { return x || ''; };
        var _a = splitHash(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
        var _b = splitQuery(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
        return { path: path, search: search, hash: hash, url: url };
    }
    var buildUrl = function (loc) {
        var path = loc.path();
        var searchObject = loc.search();
        var hash = loc.hash();
        var search = Object.keys(searchObject)
            .map(function (key) {
            var param = searchObject[key];
            var vals = isArray(param) ? param : [param];
            return vals.map(function (val$$1) { return key + '=' + val$$1; });
        })
            .reduce(unnestR, [])
            .join('&');
        return path + (search ? '?' + search : '') + (hash ? '#' + hash : '');
    };
    function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
        return function (uiRouter) {
            var service = (uiRouter.locationService = new serviceClass(uiRouter));
            var configuration = (uiRouter.locationConfig = new configurationClass(uiRouter, isHtml5));
            function dispose(router) {
                router.dispose(service);
                router.dispose(configuration);
            }
            return { name: name, service: service, configuration: configuration, dispose: dispose };
        };
    }

    /** @internalapi @module vanilla */ /** */
    /** A base `LocationServices` */
    var BaseLocationServices = /** @class */ (function () {
        function BaseLocationServices(router, fireAfterUpdate) {
            var _this = this;
            this.fireAfterUpdate = fireAfterUpdate;
            this._listeners = [];
            this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
            this.hash = function () { return parseUrl$1(_this._get()).hash; };
            this.path = function () { return parseUrl$1(_this._get()).path; };
            this.search = function () { return getParams(parseUrl$1(_this._get()).search); };
            this._location = root.location;
            this._history = root.history;
        }
        BaseLocationServices.prototype.url = function (url, replace) {
            if (replace === void 0) { replace = true; }
            if (isDefined(url) && url !== this._get()) {
                this._set(null, null, url, replace);
                if (this.fireAfterUpdate) {
                    this._listeners.forEach(function (cb) { return cb({ url: url }); });
                }
            }
            return buildUrl(this);
        };
        BaseLocationServices.prototype.onChange = function (cb) {
            var _this = this;
            this._listeners.push(cb);
            return function () { return removeFrom(_this._listeners, cb); };
        };
        BaseLocationServices.prototype.dispose = function (router) {
            deregAll(this._listeners);
        };
        return BaseLocationServices;
    }());

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /** A `LocationServices` that uses the browser hash "#" to get/set the current location */
    var HashLocationService = /** @class */ (function (_super) {
        __extends(HashLocationService, _super);
        function HashLocationService(router) {
            var _this = _super.call(this, router, false) || this;
            root.addEventListener('hashchange', _this._listener, false);
            return _this;
        }
        HashLocationService.prototype._get = function () {
            return trimHashVal(this._location.hash);
        };
        HashLocationService.prototype._set = function (state, title, url, replace) {
            this._location.hash = url;
        };
        HashLocationService.prototype.dispose = function (router) {
            _super.prototype.dispose.call(this, router);
            root.removeEventListener('hashchange', this._listener);
        };
        return HashLocationService;
    }(BaseLocationServices));

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /** A `LocationServices` that gets/sets the current location from an in-memory object */
    var MemoryLocationService = /** @class */ (function (_super) {
        __extends$1(MemoryLocationService, _super);
        function MemoryLocationService(router) {
            return _super.call(this, router, true) || this;
        }
        MemoryLocationService.prototype._get = function () {
            return this._url;
        };
        MemoryLocationService.prototype._set = function (state, title, url, replace) {
            this._url = url;
        };
        return MemoryLocationService;
    }(BaseLocationServices));

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /**
     * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
     *
     * Uses `history.pushState` and `history.replaceState`
     */
    var PushStateLocationService = /** @class */ (function (_super) {
        __extends$2(PushStateLocationService, _super);
        function PushStateLocationService(router) {
            var _this = _super.call(this, router, true) || this;
            _this._config = router.urlService.config;
            root.addEventListener('popstate', _this._listener, false);
            return _this;
        }
        /**
         * Gets the base prefix without:
         * - trailing slash
         * - trailing filename
         * - protocol and hostname
         *
         * If <base href='/base/'>, this returns '/base'.
         * If <base href='/foo/base/'>, this returns '/foo/base'.
         * If <base href='/base/index.html'>, this returns '/base'.
         * If <base href='http://localhost:8080/base/index.html'>, this returns '/base'.
         * If <base href='/base'>, this returns ''.
         * If <base href='http://localhost:8080'>, this returns ''.
         * If <base href='http://localhost:8080/'>, this returns ''.
         *
         * See: https://html.spec.whatwg.org/dev/semantics.html#the-base-element
         */
        PushStateLocationService.prototype._getBasePrefix = function () {
            return stripLastPathElement(this._config.baseHref());
        };
        PushStateLocationService.prototype._get = function () {
            var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
            search = splitQuery(search)[1]; // strip ? if found
            hash = splitHash(hash)[1]; // strip # if found
            var basePrefix = this._getBasePrefix();
            var exactBaseHrefMatch = pathname === this._config.baseHref();
            var startsWithBase = pathname.substr(0, basePrefix.length) === basePrefix;
            pathname = exactBaseHrefMatch ? '/' : startsWithBase ? pathname.substring(basePrefix.length) : pathname;
            return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
        };
        PushStateLocationService.prototype._set = function (state, title, url, replace) {
            var basePrefix = this._getBasePrefix();
            var slash = url && url[0] !== '/' ? '/' : '';
            var fullUrl = url === '' || url === '/' ? this._config.baseHref() : basePrefix + slash + url;
            if (replace) {
                this._history.replaceState(state, title, fullUrl);
            }
            else {
                this._history.pushState(state, title, fullUrl);
            }
        };
        PushStateLocationService.prototype.dispose = function (router) {
            _super.prototype.dispose.call(this, router);
            root.removeEventListener('popstate', this._listener);
        };
        return PushStateLocationService;
    }(BaseLocationServices));

    /** A `LocationConfig` mock that gets/sets all config from an in-memory object */
    var MemoryLocationConfig = /** @class */ (function () {
        function MemoryLocationConfig() {
            var _this = this;
            this.dispose = noop;
            this._baseHref = '';
            this._port = 80;
            this._protocol = 'http';
            this._host = 'localhost';
            this._hashPrefix = '';
            this.port = function () { return _this._port; };
            this.protocol = function () { return _this._protocol; };
            this.host = function () { return _this._host; };
            this.baseHref = function () { return _this._baseHref; };
            this.html5Mode = function () { return false; };
            this.hashPrefix = function (newval) { return (isDefined(newval) ? (_this._hashPrefix = newval) : _this._hashPrefix); };
        }
        return MemoryLocationConfig;
    }());

    /** @internalapi @module vanilla */
    /** A `LocationConfig` that delegates to the browser's `location` object */
    var BrowserLocationConfig = /** @class */ (function () {
        function BrowserLocationConfig(router, _isHtml5) {
            if (_isHtml5 === void 0) { _isHtml5 = false; }
            this._isHtml5 = _isHtml5;
            this._baseHref = undefined;
            this._hashPrefix = '';
        }
        BrowserLocationConfig.prototype.port = function () {
            if (location.port) {
                return Number(location.port);
            }
            return this.protocol() === 'https' ? 443 : 80;
        };
        BrowserLocationConfig.prototype.protocol = function () {
            return location.protocol.replace(/:/g, '');
        };
        BrowserLocationConfig.prototype.host = function () {
            return location.hostname;
        };
        BrowserLocationConfig.prototype.html5Mode = function () {
            return this._isHtml5;
        };
        BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
            return isDefined(newprefix) ? (this._hashPrefix = newprefix) : this._hashPrefix;
        };
        BrowserLocationConfig.prototype.baseHref = function (href) {
            if (isDefined(href))
                this._baseHref = href;
            if (isUndefined(this._baseHref))
                this._baseHref = this.getBaseHref();
            return this._baseHref;
        };
        BrowserLocationConfig.prototype.getBaseHref = function () {
            var baseTag = document.getElementsByTagName('base')[0];
            if (baseTag && baseTag.href) {
                return baseTag.href.replace(/^([^/:]*:)?\/\/[^/]*/, '');
            }
            return this._isHtml5 ? '/' : location.pathname || '/';
        };
        BrowserLocationConfig.prototype.dispose = function () { };
        return BrowserLocationConfig;
    }());

    /** @internalapi @module vanilla */ /** */
    function servicesPlugin(router) {
        services.$injector = $injector;
        services.$q = $q;
        return { name: 'vanilla.services', $q: $q, $injector: $injector, dispose: function () { return null; } };
    }
    /** A `UIRouterPlugin` uses the browser hash to get/set the current location */
    var hashLocationPlugin = locationPluginFactory('vanilla.hashBangLocation', false, HashLocationService, BrowserLocationConfig);
    /** A `UIRouterPlugin` that gets/sets the current location using the browser's `location` and `history` apis */
    var pushStateLocationPlugin = locationPluginFactory('vanilla.pushStateLocation', true, PushStateLocationService, BrowserLocationConfig);
    /** A `UIRouterPlugin` that gets/sets the current location from an in-memory object */
    var memoryLocationPlugin = locationPluginFactory('vanilla.memoryLocation', false, MemoryLocationService, MemoryLocationConfig);

    /** @internalapi @module vanilla */ /** */

    /**
     * # Core classes and interfaces
     *
     * The classes and interfaces that are core to ui-router and do not belong
     * to a more specific subsystem (such as resolve).
     *
     * @preferred @publicapi @module core
     */ /** */
    /** @internalapi */
    var UIRouterPluginBase = /** @class */ (function () {
        function UIRouterPluginBase() {
        }
        UIRouterPluginBase.prototype.dispose = function (router) { };
        return UIRouterPluginBase;
    }());

    /** @publicapi @module common */ /** */

    var index = /*#__PURE__*/Object.freeze({
        root: root,
        fromJson: fromJson,
        toJson: toJson,
        forEach: forEach,
        extend: extend,
        equals: equals,
        identity: identity,
        noop: noop,
        createProxyFunctions: createProxyFunctions,
        inherit: inherit,
        inArray: inArray,
        _inArray: _inArray,
        removeFrom: removeFrom,
        _removeFrom: _removeFrom,
        pushTo: pushTo,
        _pushTo: _pushTo,
        deregAll: deregAll,
        defaults: defaults,
        mergeR: mergeR,
        ancestors: ancestors,
        pick: pick,
        omit: omit,
        pluck: pluck,
        filter: filter,
        find: find,
        mapObj: mapObj,
        map: map,
        values: values,
        allTrueR: allTrueR,
        anyTrueR: anyTrueR,
        unnestR: unnestR,
        flattenR: flattenR,
        pushR: pushR,
        uniqR: uniqR,
        unnest: unnest,
        flatten: flatten,
        assertPredicate: assertPredicate,
        assertMap: assertMap,
        assertFn: assertFn,
        pairs: pairs,
        arrayTuples: arrayTuples,
        applyPairs: applyPairs,
        tail: tail,
        copy: copy,
        _extend: _extend,
        silenceUncaughtInPromise: silenceUncaughtInPromise,
        silentRejection: silentRejection,
        makeStub: makeStub,
        services: services,
        Glob: Glob,
        curry: curry,
        compose: compose,
        pipe: pipe,
        prop: prop,
        propEq: propEq,
        parse: parse,
        not: not,
        and: and,
        or: or,
        all: all,
        any: any,
        is: is,
        eq: eq,
        val: val,
        invoke: invoke,
        pattern: pattern,
        isUndefined: isUndefined,
        isDefined: isDefined,
        isNull: isNull,
        isNullOrUndefined: isNullOrUndefined,
        isFunction: isFunction,
        isNumber: isNumber,
        isString: isString,
        isObject: isObject,
        isArray: isArray,
        isDate: isDate,
        isRegExp: isRegExp,
        isInjectable: isInjectable,
        isPromise: isPromise,
        Queue: Queue,
        maxLength: maxLength,
        padString: padString,
        kebobString: kebobString,
        functionToString: functionToString,
        fnToString: fnToString,
        stringify: stringify,
        beforeAfterSubstr: beforeAfterSubstr,
        hostRegex: hostRegex,
        stripLastPathElement: stripLastPathElement,
        splitHash: splitHash,
        splitQuery: splitQuery,
        splitEqual: splitEqual,
        trimHashVal: trimHashVal,
        splitOnDelim: splitOnDelim,
        joinNeighborsR: joinNeighborsR,
        get Category () { return exports.Category; },
        Trace: Trace,
        trace: trace,
        get DefType () { return exports.DefType; },
        Param: Param,
        ParamTypes: ParamTypes,
        StateParams: StateParams,
        ParamType: ParamType,
        PathNode: PathNode,
        PathUtils: PathUtils,
        resolvePolicies: resolvePolicies,
        defaultResolvePolicy: defaultResolvePolicy,
        Resolvable: Resolvable,
        NATIVE_INJECTOR_TOKEN: NATIVE_INJECTOR_TOKEN,
        ResolveContext: ResolveContext,
        resolvablesBuilder: resolvablesBuilder,
        StateBuilder: StateBuilder,
        StateObject: StateObject,
        StateMatcher: StateMatcher,
        StateQueueManager: StateQueueManager,
        StateRegistry: StateRegistry,
        StateService: StateService,
        TargetState: TargetState,
        get TransitionHookPhase () { return exports.TransitionHookPhase; },
        get TransitionHookScope () { return exports.TransitionHookScope; },
        HookBuilder: HookBuilder,
        matchState: matchState,
        RegisteredHook: RegisteredHook,
        makeEvent: makeEvent,
        get RejectType () { return exports.RejectType; },
        Rejection: Rejection,
        Transition: Transition,
        TransitionHook: TransitionHook,
        TransitionEventType: TransitionEventType,
        defaultTransOpts: defaultTransOpts,
        TransitionService: TransitionService,
        UrlRules: UrlRules,
        UrlConfig: UrlConfig,
        UrlMatcher: UrlMatcher,
        ParamFactory: ParamFactory,
        UrlMatcherFactory: UrlMatcherFactory,
        UrlRouter: UrlRouter,
        UrlRuleFactory: UrlRuleFactory,
        BaseUrlRule: BaseUrlRule,
        UrlService: UrlService,
        ViewService: ViewService,
        UIRouterGlobals: UIRouterGlobals,
        UIRouter: UIRouter,
        $q: $q,
        $injector: $injector,
        BaseLocationServices: BaseLocationServices,
        HashLocationService: HashLocationService,
        MemoryLocationService: MemoryLocationService,
        PushStateLocationService: PushStateLocationService,
        MemoryLocationConfig: MemoryLocationConfig,
        BrowserLocationConfig: BrowserLocationConfig,
        keyValsToObjectR: keyValsToObjectR,
        getParams: getParams,
        parseUrl: parseUrl$1,
        buildUrl: buildUrl,
        locationPluginFactory: locationPluginFactory,
        servicesPlugin: servicesPlugin,
        hashLocationPlugin: hashLocationPlugin,
        pushStateLocationPlugin: pushStateLocationPlugin,
        memoryLocationPlugin: memoryLocationPlugin,
        UIRouterPluginBase: UIRouterPluginBase
    });

    /** @internalapi */
    function getNg1ViewConfigFactory() {
        var templateFactory = null;
        return function (path, view) {
            templateFactory = templateFactory || services.$injector.get('$templateFactory');
            return [new Ng1ViewConfig(path, view, templateFactory)];
        };
    }
    /** @internalapi */
    var hasAnyKey = function (keys, obj) { return keys.reduce(function (acc, key) { return acc || isDefined(obj[key]); }, false); };
    /**
     * This is a [[StateBuilder.builder]] function for angular1 `views`.
     *
     * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
     * handles the `views` property with logic specific to @uirouter/angularjs (ng1).
     *
     * If no `views: {}` property exists on the [[StateDeclaration]], then it creates the `views` object
     * and applies the state-level configuration to a view named `$default`.
     *
     * @internalapi
     */
    function ng1ViewsBuilder(state) {
        // Do not process root state
        if (!state.parent)
            return {};
        var tplKeys = ['templateProvider', 'templateUrl', 'template', 'notify', 'async'], ctrlKeys = ['controller', 'controllerProvider', 'controllerAs', 'resolveAs'], compKeys = ['component', 'bindings', 'componentProvider'], nonCompKeys = tplKeys.concat(ctrlKeys), allViewKeys = compKeys.concat(nonCompKeys);
        // Do not allow a state to have both state-level props and also a `views: {}` property.
        // A state without a `views: {}` property can declare properties for the `$default` view as properties of the state.
        // However, the `$default` approach should not be mixed with a separate `views: ` block.
        if (isDefined(state.views) && hasAnyKey(allViewKeys, state)) {
            throw new Error("State '" + state.name + "' has a 'views' object. " +
                "It cannot also have \"view properties\" at the state level.  " +
                "Move the following properties into a view (in the 'views' object): " +
                (" " + allViewKeys.filter(function (key) { return isDefined(state[key]); }).join(', ')));
        }
        var views = {}, viewsObject = state.views || { $default: pick(state, allViewKeys) };
        forEach(viewsObject, function (config, name) {
            // Account for views: { "": { template... } }
            name = name || '$default';
            // Account for views: { header: "headerComponent" }
            if (isString(config))
                config = { component: config };
            // Make a shallow copy of the config object
            config = extend({}, config);
            // Do not allow a view to mix props for component-style view with props for template/controller-style view
            if (hasAnyKey(compKeys, config) && hasAnyKey(nonCompKeys, config)) {
                throw new Error("Cannot combine: " + compKeys.join('|') + " with: " + nonCompKeys.join('|') + " in stateview: '" + name + "@" + state.name + "'");
            }
            config.resolveAs = config.resolveAs || '$resolve';
            config.$type = 'ng1';
            config.$context = state;
            config.$name = name;
            var normalized = ViewService.normalizeUIViewTarget(config.$context, config.$name);
            config.$uiViewName = normalized.uiViewName;
            config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
            views[name] = config;
        });
        return views;
    }
    /** @hidden */
    var id$1 = 0;
    /** @internalapi */
    var Ng1ViewConfig = /** @class */ (function () {
        function Ng1ViewConfig(path, viewDecl, factory) {
            var _this = this;
            this.path = path;
            this.viewDecl = viewDecl;
            this.factory = factory;
            this.$id = id$1++;
            this.loaded = false;
            this.getTemplate = function (uiView, context) {
                return _this.component
                    ? _this.factory.makeComponentTemplate(uiView, context, _this.component, _this.viewDecl.bindings)
                    : _this.template;
            };
        }
        Ng1ViewConfig.prototype.load = function () {
            var _this = this;
            var $q$$1 = services.$q;
            var context = new ResolveContext(this.path);
            var params = this.path.reduce(function (acc, node) { return extend(acc, node.paramValues); }, {});
            var promises = {
                template: $q$$1.when(this.factory.fromConfig(this.viewDecl, params, context)),
                controller: $q$$1.when(this.getController(context)),
            };
            return $q$$1.all(promises).then(function (results) {
                trace.traceViewServiceEvent('Loaded', _this);
                _this.controller = results.controller;
                extend(_this, results.template); // Either { template: "tpl" } or { component: "cmpName" }
                return _this;
            });
        };
        /**
         * Gets the controller for a view configuration.
         *
         * @returns {Function|Promise.<Function>} Returns a controller, or a promise that resolves to a controller.
         */
        Ng1ViewConfig.prototype.getController = function (context) {
            var provider = this.viewDecl.controllerProvider;
            if (!isInjectable(provider))
                return this.viewDecl.controller;
            var deps = services.$injector.annotate(provider);
            var providerFn = isArray(provider) ? tail(provider) : provider;
            var resolvable = new Resolvable('', providerFn, deps);
            return resolvable.get(context);
        };
        return Ng1ViewConfig;
    }());

    /** @publicapi @module view */ /** */
    /**
     * Service which manages loading of templates from a ViewConfig.
     */
    var TemplateFactory = /** @class */ (function () {
        function TemplateFactory() {
            var _this = this;
            /** @hidden */ this._useHttp = ng.version.minor < 3;
            /** @hidden */ this.$get = [
                '$http',
                '$templateCache',
                '$injector',
                function ($http, $templateCache, $injector$$1) {
                    _this.$templateRequest = $injector$$1.has && $injector$$1.has('$templateRequest') && $injector$$1.get('$templateRequest');
                    _this.$http = $http;
                    _this.$templateCache = $templateCache;
                    return _this;
                },
            ];
        }
        /** @hidden */
        TemplateFactory.prototype.useHttpService = function (value) {
            this._useHttp = value;
        };
        /**
         * Creates a template from a configuration object.
         *
         * @param config Configuration object for which to load a template.
         * The following properties are search in the specified order, and the first one
         * that is defined is used to create the template:
         *
         * @param params  Parameters to pass to the template function.
         * @param context The resolve context associated with the template's view
         *
         * @return {string|object}  The template html as a string, or a promise for
         * that string,or `null` if no template is configured.
         */
        TemplateFactory.prototype.fromConfig = function (config, params, context) {
            var defaultTemplate = '<ui-view></ui-view>';
            var asTemplate = function (result) { return services.$q.when(result).then(function (str) { return ({ template: str }); }); };
            var asComponent = function (result) { return services.$q.when(result).then(function (str) { return ({ component: str }); }); };
            return isDefined(config.template)
                ? asTemplate(this.fromString(config.template, params))
                : isDefined(config.templateUrl)
                    ? asTemplate(this.fromUrl(config.templateUrl, params))
                    : isDefined(config.templateProvider)
                        ? asTemplate(this.fromProvider(config.templateProvider, params, context))
                        : isDefined(config.component)
                            ? asComponent(config.component)
                            : isDefined(config.componentProvider)
                                ? asComponent(this.fromComponentProvider(config.componentProvider, params, context))
                                : asTemplate(defaultTemplate);
        };
        /**
         * Creates a template from a string or a function returning a string.
         *
         * @param template html template as a string or function that returns an html template as a string.
         * @param params Parameters to pass to the template function.
         *
         * @return {string|object} The template html as a string, or a promise for that
         * string.
         */
        TemplateFactory.prototype.fromString = function (template, params) {
            return isFunction(template) ? template(params) : template;
        };
        /**
         * Loads a template from the a URL via `$http` and `$templateCache`.
         *
         * @param {string|Function} url url of the template to load, or a function
         * that returns a url.
         * @param {Object} params Parameters to pass to the url function.
         * @return {string|Promise.<string>} The template html as a string, or a promise
         * for that string.
         */
        TemplateFactory.prototype.fromUrl = function (url, params) {
            if (isFunction(url))
                url = url(params);
            if (url == null)
                return null;
            if (this._useHttp) {
                return this.$http
                    .get(url, { cache: this.$templateCache, headers: { Accept: 'text/html' } })
                    .then(function (response) {
                    return response.data;
                });
            }
            return this.$templateRequest(url);
        };
        /**
         * Creates a template by invoking an injectable provider function.
         *
         * @param provider Function to invoke via `locals`
         * @param {Function} injectFn a function used to invoke the template provider
         * @return {string|Promise.<string>} The template html as a string, or a promise
         * for that string.
         */
        TemplateFactory.prototype.fromProvider = function (provider, params, context) {
            var deps = services.$injector.annotate(provider);
            var providerFn = isArray(provider) ? tail(provider) : provider;
            var resolvable = new Resolvable('', providerFn, deps);
            return resolvable.get(context);
        };
        /**
         * Creates a component's template by invoking an injectable provider function.
         *
         * @param provider Function to invoke via `locals`
         * @param {Function} injectFn a function used to invoke the template provider
         * @return {string} The template html as a string: "<component-name input1='::$resolve.foo'></component-name>".
         */
        TemplateFactory.prototype.fromComponentProvider = function (provider, params, context) {
            var deps = services.$injector.annotate(provider);
            var providerFn = isArray(provider) ? tail(provider) : provider;
            var resolvable = new Resolvable('', providerFn, deps);
            return resolvable.get(context);
        };
        /**
         * Creates a template from a component's name
         *
         * This implements route-to-component.
         * It works by retrieving the component (directive) metadata from the injector.
         * It analyses the component's bindings, then constructs a template that instantiates the component.
         * The template wires input and output bindings to resolves or from the parent component.
         *
         * @param uiView {object} The parent ui-view (for binding outputs to callbacks)
         * @param context The ResolveContext (for binding outputs to callbacks returned from resolves)
         * @param component {string} Component's name in camel case.
         * @param bindings An object defining the component's bindings: {foo: '<'}
         * @return {string} The template as a string: "<component-name input1='::$resolve.foo'></component-name>".
         */
        TemplateFactory.prototype.makeComponentTemplate = function (uiView, context, component, bindings) {
            bindings = bindings || {};
            // Bind once prefix
            var prefix = ng.version.minor >= 3 ? '::' : '';
            // Convert to kebob name. Add x- prefix if the string starts with `x-` or `data-`
            var kebob = function (camelCase) {
                var kebobed = kebobString(camelCase);
                return /^(x|data)-/.exec(kebobed) ? "x-" + kebobed : kebobed;
            };
            var attributeTpl = function (input) {
                var name = input.name, type = input.type;
                var attrName = kebob(name);
                // If the ui-view has an attribute which matches a binding on the routed component
                // then pass that attribute through to the routed component template.
                // Prefer ui-view wired mappings to resolve data, unless the resolve was explicitly bound using `bindings:`
                if (uiView.attr(attrName) && !bindings[name])
                    return attrName + "='" + uiView.attr(attrName) + "'";
                var resolveName = bindings[name] || name;
                // Pre-evaluate the expression for "@" bindings by enclosing in {{ }}
                // some-attr="{{ ::$resolve.someResolveName }}"
                if (type === '@')
                    return attrName + "='{{" + prefix + "$resolve." + resolveName + "}}'";
                // Wire "&" callbacks to resolves that return a callback function
                // Get the result of the resolve (should be a function) and annotate it to get its arguments.
                // some-attr="$resolve.someResolveResultName(foo, bar)"
                if (type === '&') {
                    var res = context.getResolvable(resolveName);
                    var fn = res && res.data;
                    var args = (fn && services.$injector.annotate(fn)) || [];
                    // account for array style injection, i.e., ['foo', function(foo) {}]
                    var arrayIdxStr = isArray(fn) ? "[" + (fn.length - 1) + "]" : '';
                    return attrName + "='$resolve." + resolveName + arrayIdxStr + "(" + args.join(',') + ")'";
                }
                // some-attr="::$resolve.someResolveName"
                return attrName + "='" + prefix + "$resolve." + resolveName + "'";
            };
            var attrs = getComponentBindings(component)
                .map(attributeTpl)
                .join(' ');
            var kebobName = kebob(component);
            return "<" + kebobName + " " + attrs + "></" + kebobName + ">";
        };
        return TemplateFactory;
    }());
    // Gets all the directive(s)' inputs ('@', '=', and '<') and outputs ('&')
    function getComponentBindings(name) {
        var cmpDefs = services.$injector.get(name + 'Directive'); // could be multiple
        if (!cmpDefs || !cmpDefs.length)
            throw new Error("Unable to find component named '" + name + "'");
        return cmpDefs.map(getBindings).reduce(unnestR, []);
    }
    // Given a directive definition, find its object input attributes
    // Use different properties, depending on the type of directive (component, bindToController, normal)
    var getBindings = function (def) {
        if (isObject(def.bindToController))
            return scopeBindings(def.bindToController);
        return scopeBindings(def.scope);
    };
    // for ng 1.2 style, process the scope: { input: "=foo" }
    // for ng 1.3 through ng 1.5, process the component's bindToController: { input: "=foo" } object
    var scopeBindings = function (bindingsObj) {
        return Object.keys(bindingsObj || {})
            // [ 'input', [ '=foo', '=', 'foo' ] ]
            .map(function (key) { return [key, /^([=<@&])[?]?(.*)/.exec(bindingsObj[key])]; })
            // skip malformed values
            .filter(function (tuple) { return isDefined(tuple) && isArray(tuple[1]); })
            // { name: ('foo' || 'input'), type: '=' }
            .map(function (tuple) { return ({ name: tuple[1][2] || tuple[0], type: tuple[1][1] }); });
    };

    /** @publicapi @module ng1 */ /** */
    /**
     * The Angular 1 `StateProvider`
     *
     * The `$stateProvider` works similar to Angular's v1 router, but it focuses purely
     * on state.
     *
     * A state corresponds to a "place" in the application in terms of the overall UI and
     * navigation. A state describes (via the controller / template / view properties) what
     * the UI looks like and does at that place.
     *
     * States often have things in common, and the primary way of factoring out these
     * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
     * nested states.
     *
     * The `$stateProvider` provides interfaces to declare these states for your app.
     */
    var StateProvider = /** @class */ (function () {
        function StateProvider(stateRegistry, stateService) {
            this.stateRegistry = stateRegistry;
            this.stateService = stateService;
            createProxyFunctions(val(StateProvider.prototype), this, val(this));
        }
        /**
         * Decorates states when they are registered
         *
         * Allows you to extend (carefully) or override (at your own peril) the
         * `stateBuilder` object used internally by [[StateRegistry]].
         * This can be used to add custom functionality to ui-router,
         * for example inferring templateUrl based on the state name.
         *
         * When passing only a name, it returns the current (original or decorated) builder
         * function that matches `name`.
         *
         * The builder functions that can be decorated are listed below. Though not all
         * necessarily have a good use case for decoration, that is up to you to decide.
         *
         * In addition, users can attach custom decorators, which will generate new
         * properties within the state's internal definition. There is currently no clear
         * use-case for this beyond accessing internal states (i.e. $state.$current),
         * however, expect this to become increasingly relevant as we introduce additional
         * meta-programming features.
         *
         * **Warning**: Decorators should not be interdependent because the order of
         * execution of the builder functions in non-deterministic. Builder functions
         * should only be dependent on the state definition object and super function.
         *
         *
         * Existing builder functions and current return values:
         *
         * - **parent** `{object}` - returns the parent state object.
         * - **data** `{object}` - returns state data, including any inherited data that is not
         *   overridden by own values (if any).
         * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
         *   or `null`.
         * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is
         *   navigable).
         * - **params** `{object}` - returns an array of state params that are ensured to
         *   be a super-set of parent's params.
         * - **views** `{object}` - returns a views object where each key is an absolute view
         *   name (i.e. "viewName@stateName") and each value is the config object
         *   (template, controller) for the view. Even when you don't use the views object
         *   explicitly on a state config, one is still created for you internally.
         *   So by decorating this builder function you have access to decorating template
         *   and controller properties.
         * - **ownParams** `{object}` - returns an array of params that belong to the state,
         *   not including any params defined by ancestor states.
         * - **path** `{string}` - returns the full path from the root down to this state.
         *   Needed for state activation.
         * - **includes** `{object}` - returns an object that includes every state that
         *   would pass a `$state.includes()` test.
         *
         * #### Example:
         * Override the internal 'views' builder with a function that takes the state
         * definition, and a reference to the internal function being overridden:
         * ```js
         * $stateProvider.decorator('views', function (state, parent) {
         *   let result = {},
         *       views = parent(state);
         *
         *   angular.forEach(views, function (config, name) {
         *     let autoName = (state.name + '.' + name).replace('.', '/');
         *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
         *     result[name] = config;
         *   });
         *   return result;
         * });
         *
         * $stateProvider.state('home', {
         *   views: {
         *     'contact.list': { controller: 'ListController' },
         *     'contact.item': { controller: 'ItemController' }
         *   }
         * });
         * ```
         *
         *
         * ```js
         * // Auto-populates list and item views with /partials/home/contact/list.html,
         * // and /partials/home/contact/item.html, respectively.
         * $state.go('home');
         * ```
         *
         * @param {string} name The name of the builder function to decorate.
         * @param {object} func A function that is responsible for decorating the original
         * builder function. The function receives two parameters:
         *
         *   - `{object}` - state - The state config object.
         *   - `{object}` - super - The original builder function.
         *
         * @return {object} $stateProvider - $stateProvider instance
         */
        StateProvider.prototype.decorator = function (name, func) {
            return this.stateRegistry.decorator(name, func) || this;
        };
        StateProvider.prototype.state = function (name, definition) {
            if (isObject(name)) {
                definition = name;
            }
            else {
                definition.name = name;
            }
            this.stateRegistry.register(definition);
            return this;
        };
        /**
         * Registers an invalid state handler
         *
         * This is a passthrough to [[StateService.onInvalid]] for ng1.
         */
        StateProvider.prototype.onInvalid = function (callback) {
            return this.stateService.onInvalid(callback);
        };
        return StateProvider;
    }());

    /** @publicapi @module ng1 */ /** */
    /**
     * This is a [[StateBuilder.builder]] function for angular1 `onEnter`, `onExit`,
     * `onRetain` callback hooks on a [[Ng1StateDeclaration]].
     *
     * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
     * ensures that those hooks are injectable for @uirouter/angularjs (ng1).
     *
     * @internalapi
     */
    var getStateHookBuilder = function (hookName) {
        return function stateHookBuilder(stateObject, parentFn) {
            var hook = stateObject[hookName];
            var pathname = hookName === 'onExit' ? 'from' : 'to';
            function decoratedNg1Hook(trans, state) {
                var resolveContext = new ResolveContext(trans.treeChanges(pathname));
                var subContext = resolveContext.subContext(state.$$state());
                var locals = extend(getLocals(subContext), { $state$: state, $transition$: trans });
                return services.$injector.invoke(hook, this, locals);
            }
            return hook ? decoratedNg1Hook : undefined;
        };
    };

    /** @publicapi @module ng1 */ /** */
    /**
     * Implements UI-Router LocationServices and LocationConfig using Angular 1's $location service
     * @internalapi
     */
    var Ng1LocationServices = /** @class */ (function () {
        function Ng1LocationServices($locationProvider) {
            // .onChange() registry
            this._urlListeners = [];
            this.$locationProvider = $locationProvider;
            var _lp = val($locationProvider);
            createProxyFunctions(_lp, this, _lp, ['hashPrefix']);
        }
        /**
         * Applys ng1-specific path parameter encoding
         *
         * The Angular 1 `$location` service is a bit weird.
         * It doesn't allow slashes to be encoded/decoded bi-directionally.
         *
         * See the writeup at https://github.com/angular-ui/ui-router/issues/2598
         *
         * This code patches the `path` parameter type so it encoded/decodes slashes as ~2F
         *
         * @param router
         */
        Ng1LocationServices.monkeyPatchPathParameterType = function (router) {
            var pathType = router.urlMatcherFactory.type('path');
            pathType.encode = function (x) {
                return x != null ? x.toString().replace(/(~|\/)/g, function (m) { return ({ '~': '~~', '/': '~2F' }[m]); }) : x;
            };
            pathType.decode = function (x) {
                return x != null ? x.toString().replace(/(~~|~2F)/g, function (m) { return ({ '~~': '~', '~2F': '/' }[m]); }) : x;
            };
        };
        Ng1LocationServices.prototype.dispose = function () { };
        Ng1LocationServices.prototype.onChange = function (callback) {
            var _this = this;
            this._urlListeners.push(callback);
            return function () { return removeFrom(_this._urlListeners)(callback); };
        };
        Ng1LocationServices.prototype.html5Mode = function () {
            var html5Mode = this.$locationProvider.html5Mode();
            html5Mode = isObject(html5Mode) ? html5Mode.enabled : html5Mode;
            return html5Mode && this.$sniffer.history;
        };
        Ng1LocationServices.prototype.baseHref = function () {
            return this._baseHref || (this._baseHref = this.$browser.baseHref() || this.$window.location.pathname);
        };
        Ng1LocationServices.prototype.url = function (newUrl, replace, state) {
            if (replace === void 0) { replace = false; }
            if (isDefined(newUrl))
                this.$location.url(newUrl);
            if (replace)
                this.$location.replace();
            if (state)
                this.$location.state(state);
            return this.$location.url();
        };
        Ng1LocationServices.prototype._runtimeServices = function ($rootScope, $location, $sniffer, $browser, $window) {
            var _this = this;
            this.$location = $location;
            this.$sniffer = $sniffer;
            this.$browser = $browser;
            this.$window = $window;
            // Bind $locationChangeSuccess to the listeners registered in LocationService.onChange
            $rootScope.$on('$locationChangeSuccess', function (evt) { return _this._urlListeners.forEach(function (fn) { return fn(evt); }); });
            var _loc = val($location);
            // Bind these LocationService functions to $location
            createProxyFunctions(_loc, this, _loc, ['replace', 'path', 'search', 'hash']);
            // Bind these LocationConfig functions to $location
            createProxyFunctions(_loc, this, _loc, ['port', 'protocol', 'host']);
        };
        return Ng1LocationServices;
    }());

    /** @publicapi @module url */ /** */
    /**
     * Manages rules for client-side URL
     *
     * ### Deprecation warning:
     * This class is now considered to be an internal API
     * Use the [[UrlService]] instead.
     * For configuring URL rules, use the [[UrlRulesApi]] which can be found as [[UrlService.rules]].
     *
     * This class manages the router rules for what to do when the URL changes.
     *
     * This provider remains for backwards compatibility.
     *
     * @internalapi
     * @deprecated
     */
    var UrlRouterProvider = /** @class */ (function () {
        /** @hidden */
        function UrlRouterProvider(/** @hidden */ router) {
            this.router = router;
        }
        UrlRouterProvider.injectableHandler = function (router, handler) {
            return function (match) { return services.$injector.invoke(handler, null, { $match: match, $stateParams: router.globals.params }); };
        };
        /** @hidden */
        UrlRouterProvider.prototype.$get = function () {
            var urlService = this.router.urlService;
            this.router.urlRouter.update(true);
            if (!urlService.interceptDeferred)
                urlService.listen();
            return this.router.urlRouter;
        };
        /**
         * Registers a url handler function.
         *
         * Registers a low level url handler (a `rule`).
         * A rule detects specific URL patterns and returns a redirect, or performs some action.
         *
         * If a rule returns a string, the URL is replaced with the string, and all rules are fired again.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   // Here's an example of how you might allow case insensitive urls
         *   $urlRouterProvider.rule(function ($injector, $location) {
         *     var path = $location.path(),
         *         normalized = path.toLowerCase();
         *
         *     if (path !== normalized) {
         *       return normalized;
         *     }
         *   });
         * });
         * ```
         *
         * @param ruleFn
         * Handler function that takes `$injector` and `$location` services as arguments.
         * You can use them to detect a url and return a different url as a string.
         *
         * @return [[UrlRouterProvider]] (`this`)
         */
        UrlRouterProvider.prototype.rule = function (ruleFn) {
            var _this = this;
            if (!isFunction(ruleFn))
                throw new Error("'rule' must be a function");
            var match = function () { return ruleFn(services.$injector, _this.router.locationService); };
            var rule = new BaseUrlRule(match, identity);
            this.router.urlService.rules.rule(rule);
            return this;
        };
        /**
         * Defines the path or behavior to use when no url can be matched.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   // if the path doesn't match any of the urls you configured
         *   // otherwise will take care of routing the user to the
         *   // specified url
         *   $urlRouterProvider.otherwise('/index');
         *
         *   // Example of using function rule as param
         *   $urlRouterProvider.otherwise(function ($injector, $location) {
         *     return '/a/valid/url';
         *   });
         * });
         * ```
         *
         * @param rule
         * The url path you want to redirect to or a function rule that returns the url path or performs a `$state.go()`.
         * The function version is passed two params: `$injector` and `$location` services, and should return a url string.
         *
         * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
         */
        UrlRouterProvider.prototype.otherwise = function (rule) {
            var _this = this;
            var urlRules = this.router.urlService.rules;
            if (isString(rule)) {
                urlRules.otherwise(rule);
            }
            else if (isFunction(rule)) {
                urlRules.otherwise(function () { return rule(services.$injector, _this.router.locationService); });
            }
            else {
                throw new Error("'rule' must be a string or function");
            }
            return this;
        };
        /**
         * Registers a handler for a given url matching.
         *
         * If the handler is a string, it is
         * treated as a redirect, and is interpolated according to the syntax of match
         * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
         *
         * If the handler is a function, it is injectable.
         * It gets invoked if `$location` matches.
         * You have the option of inject the match object as `$match`.
         *
         * The handler can return
         *
         * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
         *   will continue trying to find another one that matches.
         * - **string** which is treated as a redirect and passed to `$location.url()`
         * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
         *     if ($state.$current.navigable !== state ||
         *         !equalForKeys($match, $stateParams) {
         *      $state.transitionTo(state, $match, false);
         *     }
         *   });
         * });
         * ```
         *
         * @param what A pattern string to match, compiled as a [[UrlMatcher]].
         * @param handler The path (or function that returns a path) that you want to redirect your user to.
         * @param ruleCallback [optional] A callback that receives the `rule` registered with [[UrlMatcher.rule]]
         *
         * Note: the handler may also invoke arbitrary code, such as `$state.go()`
         */
        UrlRouterProvider.prototype.when = function (what, handler) {
            if (isArray(handler) || isFunction(handler)) {
                handler = UrlRouterProvider.injectableHandler(this.router, handler);
            }
            this.router.urlService.rules.when(what, handler);
            return this;
        };
        /**
         * Disables monitoring of the URL.
         *
         * Call this method before UI-Router has bootstrapped.
         * It will stop UI-Router from performing the initial url sync.
         *
         * This can be useful to perform some asynchronous initialization before the router starts.
         * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   // Prevent $urlRouter from automatically intercepting URL changes;
         *   $urlRouterProvider.deferIntercept();
         * })
         *
         * app.run(function (MyService, $urlRouter, $http) {
         *   $http.get("/stuff").then(function(resp) {
         *     MyService.doStuff(resp.data);
         *     $urlRouter.listen();
         *     $urlRouter.sync();
         *   });
         * });
         * ```
         *
         * @param defer Indicates whether to defer location change interception.
         *        Passing no parameter is equivalent to `true`.
         */
        UrlRouterProvider.prototype.deferIntercept = function (defer) {
            this.router.urlService.deferIntercept(defer);
        };
        return UrlRouterProvider;
    }());

    /**
     * # Angular 1 types
     *
     * UI-Router core provides various Typescript types which you can use for code completion and validating parameter values, etc.
     * The customizations to the core types for Angular UI-Router are documented here.
     *
     * The optional [[$resolve]] service is also documented here.
     *
     * @preferred @publicapi @module ng1
     */ /** */
    ng.module('ui.router.angular1', []);
    var mod_init = ng.module('ui.router.init', ['ng']);
    var mod_util = ng.module('ui.router.util', ['ui.router.init']);
    var mod_rtr = ng.module('ui.router.router', ['ui.router.util']);
    var mod_state = ng.module('ui.router.state', ['ui.router.router', 'ui.router.util', 'ui.router.angular1']);
    var mod_main = ng.module('ui.router', ['ui.router.init', 'ui.router.state', 'ui.router.angular1']);
    var mod_cmpt = ng.module('ui.router.compat', ['ui.router']); // tslint:disable-line
    var router = null;
    $uiRouterProvider.$inject = ['$locationProvider'];
    /** This angular 1 provider instantiates a Router and exposes its services via the angular injector */
    function $uiRouterProvider($locationProvider) {
        // Create a new instance of the Router when the $uiRouterProvider is initialized
        router = this.router = new UIRouter();
        router.stateProvider = new StateProvider(router.stateRegistry, router.stateService);
        // Apply ng1 specific StateBuilder code for `views`, `resolve`, and `onExit/Retain/Enter` properties
        router.stateRegistry.decorator('views', ng1ViewsBuilder);
        router.stateRegistry.decorator('onExit', getStateHookBuilder('onExit'));
        router.stateRegistry.decorator('onRetain', getStateHookBuilder('onRetain'));
        router.stateRegistry.decorator('onEnter', getStateHookBuilder('onEnter'));
        router.viewService._pluginapi._viewConfigFactory('ng1', getNg1ViewConfigFactory());
        var ng1LocationService = (router.locationService = router.locationConfig = new Ng1LocationServices($locationProvider));
        Ng1LocationServices.monkeyPatchPathParameterType(router);
        // backwards compat: also expose router instance as $uiRouterProvider.router
        router['router'] = router;
        router['$get'] = $get;
        $get.$inject = ['$location', '$browser', '$window', '$sniffer', '$rootScope', '$http', '$templateCache'];
        function $get($location, $browser, $window, $sniffer, $rootScope, $http, $templateCache) {
            ng1LocationService._runtimeServices($rootScope, $location, $sniffer, $browser, $window);
            delete router['router'];
            delete router['$get'];
            return router;
        }
        return router;
    }
    var getProviderFor = function (serviceName) { return [
        '$uiRouterProvider',
        function ($urp) {
            var service = $urp.router[serviceName];
            service['$get'] = function () { return service; };
            return service;
        },
    ]; };
    // This effectively calls $get() on `$uiRouterProvider` to trigger init (when ng enters runtime)
    runBlock.$inject = ['$injector', '$q', '$uiRouter'];
    function runBlock($injector$$1, $q$$1, $uiRouter) {
        services.$injector = $injector$$1;
        services.$q = $q$$1;
        // https://github.com/angular-ui/ui-router/issues/3678
        if (!$injector$$1.hasOwnProperty('strictDi')) {
            try {
                $injector$$1.invoke(function (checkStrictDi) { });
            }
            catch (error) {
                $injector$$1.strictDi = !!/strict mode/.exec(error && error.toString());
            }
        }
        // The $injector is now available.
        // Find any resolvables that had dependency annotation deferred
        $uiRouter.stateRegistry
            .get()
            .map(function (x) { return x.$$state().resolvables; })
            .reduce(unnestR, [])
            .filter(function (x) { return x.deps === 'deferred'; })
            .forEach(function (resolvable) { return (resolvable.deps = $injector$$1.annotate(resolvable.resolveFn, $injector$$1.strictDi)); });
    }
    // $urlRouter service and $urlRouterProvider
    var getUrlRouterProvider = function (uiRouter) { return (uiRouter.urlRouterProvider = new UrlRouterProvider(uiRouter)); };
    // $state service and $stateProvider
    // $urlRouter service and $urlRouterProvider
    var getStateProvider = function () { return extend(router.stateProvider, { $get: function () { return router.stateService; } }); };
    watchDigests.$inject = ['$rootScope'];
    function watchDigests($rootScope) {
        $rootScope.$watch(function () {
            trace.approximateDigests++;
        });
    }
    mod_init.provider('$uiRouter', $uiRouterProvider);
    mod_rtr.provider('$urlRouter', ['$uiRouterProvider', getUrlRouterProvider]);
    mod_util.provider('$urlService', getProviderFor('urlService'));
    mod_util.provider('$urlMatcherFactory', ['$uiRouterProvider', function () { return router.urlMatcherFactory; }]);
    mod_util.provider('$templateFactory', function () { return new TemplateFactory(); });
    mod_state.provider('$stateRegistry', getProviderFor('stateRegistry'));
    mod_state.provider('$uiRouterGlobals', getProviderFor('globals'));
    mod_state.provider('$transitions', getProviderFor('transitionService'));
    mod_state.provider('$state', ['$uiRouterProvider', getStateProvider]);
    mod_state.factory('$stateParams', ['$uiRouter', function ($uiRouter) { return $uiRouter.globals.params; }]);
    mod_main.factory('$view', function () { return router.viewService; });
    mod_main.service('$trace', function () { return trace; });
    mod_main.run(watchDigests);
    mod_util.run(['$urlMatcherFactory', function ($urlMatcherFactory) { }]);
    mod_state.run(['$state', function ($state) { }]);
    mod_rtr.run(['$urlRouter', function ($urlRouter) { }]);
    mod_init.run(runBlock);
    /** @hidden TODO: find a place to move this */
    var getLocals = function (ctx) {
        var tokens = ctx.getTokens().filter(isString);
        var tuples = tokens.map(function (key) {
            var resolvable = ctx.getResolvable(key);
            var waitPolicy = ctx.getPolicy(resolvable).async;
            return [key, waitPolicy === 'NOWAIT' ? resolvable.promise : resolvable.data];
        });
        return tuples.reduce(applyPairs, {});
    };

    /**
     * The current (or pending) State Parameters
     *
     * An injectable global **Service Object** which holds the state parameters for the latest **SUCCESSFUL** transition.
     *
     * The values are not updated until *after* a `Transition` successfully completes.
     *
     * **Also:** an injectable **Per-Transition Object** object which holds the pending state parameters for the pending `Transition` currently running.
     *
     * ### Deprecation warning:
     *
     * The value injected for `$stateParams` is different depending on where it is injected.
     *
     * - When injected into an angular service, the object injected is the global **Service Object** with the parameter values for the latest successful `Transition`.
     * - When injected into transition hooks, resolves, or view controllers, the object is the **Per-Transition Object** with the parameter values for the running `Transition`.
     *
     * Because of these confusing details, this service is deprecated.
     *
     * ### Instead of using the global `$stateParams` service object,
     * inject [[$uiRouterGlobals]] and use [[UIRouterGlobals.params]]
     *
     * ```js
     * MyService.$inject = ['$uiRouterGlobals'];
     * function MyService($uiRouterGlobals) {
     *   return {
     *     paramValues: function () {
     *       return $uiRouterGlobals.params;
     *     }
     *   }
     * }
     * ```
     *
     * ### Instead of using the per-transition `$stateParams` object,
     * inject the current `Transition` (as [[$transition$]]) and use [[Transition.params]]
     *
     * ```js
     * MyController.$inject = ['$transition$'];
     * function MyController($transition$) {
     *   var username = $transition$.params().username;
     *   // .. do something with username
     * }
     * ```
     *
     * ---
     *
     * This object can be injected into other services.
     *
     * #### Deprecated Example:
     * ```js
     * SomeService.$inject = ['$http', '$stateParams'];
     * function SomeService($http, $stateParams) {
     *   return {
     *     getUser: function() {
     *       return $http.get('/api/users/' + $stateParams.username);
     *     }
     *   }
     * };
     * angular.service('SomeService', SomeService);
     * ```
     * @deprecated
     */

    /**
     * # Angular 1 Directives
     *
     * These are the directives included in UI-Router for Angular 1.
     * These directives are used in templates to create viewports and link/navigate to states.
     *
     * @preferred @publicapi @module directives
     */ /** */
    /** @hidden */
    function parseStateRef(ref) {
        var parsed;
        var paramsOnly = ref.match(/^\s*({[^}]*})\s*$/);
        if (paramsOnly)
            ref = '(' + paramsOnly[1] + ')';
        parsed = ref.replace(/\n/g, ' ').match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/);
        if (!parsed || parsed.length !== 4)
            throw new Error("Invalid state ref '" + ref + "'");
        return { state: parsed[1] || null, paramExpr: parsed[3] || null };
    }
    /** @hidden */
    function stateContext(el) {
        var $uiView = el.parent().inheritedData('$uiView');
        var path = parse('$cfg.path')($uiView);
        return path ? tail(path).state.name : undefined;
    }
    /** @hidden */
    function processedDef($state, $element, def) {
        var uiState = def.uiState || $state.current.name;
        var uiStateOpts = extend(defaultOpts($element, $state), def.uiStateOpts || {});
        var href = $state.href(uiState, def.uiStateParams, uiStateOpts);
        return { uiState: uiState, uiStateParams: def.uiStateParams, uiStateOpts: uiStateOpts, href: href };
    }
    /** @hidden */
    function getTypeInfo(el) {
        // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
        var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
        var isForm = el[0].nodeName === 'FORM';
        return {
            attr: isForm ? 'action' : isSvg ? 'xlink:href' : 'href',
            isAnchor: el.prop('tagName').toUpperCase() === 'A',
            clickable: !isForm,
        };
    }
    /** @hidden */
    function clickHook(el, $state, $timeout, type, getDef) {
        return function (e) {
            var button = e.which || e.button, target = getDef();
            if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
                // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
                var transition_1 = $timeout(function () {
                    if (!el.attr('disabled')) {
                        $state.go(target.uiState, target.uiStateParams, target.uiStateOpts);
                    }
                });
                e.preventDefault();
                // if the state has no URL, ignore one preventDefault from the <a> directive.
                var ignorePreventDefaultCount_1 = type.isAnchor && !target.href ? 1 : 0;
                e.preventDefault = function () {
                    if (ignorePreventDefaultCount_1-- <= 0)
                        $timeout.cancel(transition_1);
                };
            }
        };
    }
    /** @hidden */
    function defaultOpts(el, $state) {
        return {
            relative: stateContext(el) || $state.$current,
            inherit: true,
            source: 'sref',
        };
    }
    /** @hidden */
    function bindEvents(element, scope, hookFn, uiStateOpts) {
        var events;
        if (uiStateOpts) {
            events = uiStateOpts.events;
        }
        if (!isArray(events)) {
            events = ['click'];
        }
        var on = element.on ? 'on' : 'bind';
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            element[on](event_1, hookFn);
        }
        scope.$on('$destroy', function () {
            var off = element.off ? 'off' : 'unbind';
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var event_2 = events_2[_i];
                element[off](event_2, hookFn);
            }
        });
    }
    /**
     * `ui-sref`: A directive for linking to a state
     *
     * A directive which links to a state (and optionally, parameters).
     * When clicked, this directive activates the linked state with the supplied parameter values.
     *
     * ### Linked State
     * The attribute value of the `ui-sref` is the name of the state to link to.
     *
     * #### Example:
     * This will activate the `home` state when the link is clicked.
     * ```html
     * <a ui-sref="home">Home</a>
     * ```
     *
     * ### Relative Links
     * You can also use relative state paths within `ui-sref`, just like a relative path passed to `$state.go()` ([[StateService.go]]).
     * You just need to be aware that the path is relative to the state that *created* the link.
     * This allows a state to create a relative `ui-sref` which always targets the same destination.
     *
     * #### Example:
     * Both these links are relative to the parent state, even when a child state is currently active.
     * ```html
     * <a ui-sref=".child1">child 1 state</a>
     * <a ui-sref=".child2">child 2 state</a>
     * ```
     *
     * This link activates the parent state.
     * ```html
     * <a ui-sref="^">Return</a>
     * ```
     *
     * ### hrefs
     * If the linked state has a URL, the directive will automatically generate and
     * update the `href` attribute (using the [[StateService.href]]  method).
     *
     * #### Example:
     * Assuming the `users` state has a url of `/users/`
     * ```html
     * <a ui-sref="users" href="/users/">Users</a>
     * ```
     *
     * ### Parameter Values
     * In addition to the state name, a `ui-sref` can include parameter values which are applied when activating the state.
     * Param values can be provided in the `ui-sref` value after the state name, enclosed by parentheses.
     * The content inside the parentheses is an expression, evaluated to the parameter values.
     *
     * #### Example:
     * This example renders a list of links to users.
     * The state's `userId` parameter value comes from each user's `user.id` property.
     * ```html
     * <li ng-repeat="user in users">
     *   <a ui-sref="users.detail({ userId: user.id })">{{ user.displayName }}</a>
     * </li>
     * ```
     *
     * Note:
     * The parameter values expression is `$watch`ed for updates.
     *
     * ### Transition Options
     * You can specify [[TransitionOptions]] to pass to [[StateService.go]] by using the `ui-sref-opts` attribute.
     * Options are restricted to `location`, `inherit`, and `reload`.
     *
     * #### Example:
     * ```html
     * <a ui-sref="home" ui-sref-opts="{ reload: true }">Home</a>
     * ```
     *
     * ### Other DOM Events
     *
     * You can also customize which DOM events to respond to (instead of `click`) by
     * providing an `events` array in the `ui-sref-opts` attribute.
     *
     * #### Example:
     * ```html
     * <input type="text" ui-sref="contacts" ui-sref-opts="{ events: ['change', 'blur'] }">
     * ```
     *
     * ### Highlighting the active link
     * This directive can be used in conjunction with [[uiSrefActive]] to highlight the active link.
     *
     * ### Examples
     * If you have the following template:
     *
     * ```html
     * <a ui-sref="home">Home</a>
     * <a ui-sref="about">About</a>
     * <a ui-sref="{page: 2}">Next page</a>
     *
     * <ul>
     *     <li ng-repeat="contact in contacts">
     *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
     *     </li>
     * </ul>
     * ```
     *
     * Then (assuming the current state is `contacts`) the rendered html including hrefs would be:
     *
     * ```html
     * <a href="#/home" ui-sref="home">Home</a>
     * <a href="#/about" ui-sref="about">About</a>
     * <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
     *
     * <ul>
     *     <li ng-repeat="contact in contacts">
     *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
     *     </li>
     *     <li ng-repeat="contact in contacts">
     *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
     *     </li>
     *     <li ng-repeat="contact in contacts">
     *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
     *     </li>
     * </ul>
     *
     * <a href="#/home" ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
     * ```
     *
     * ### Notes
     *
     * - You can use `ui-sref` to change **only the parameter values** by omitting the state name and parentheses.
     * #### Example:
     * Sets the `lang` parameter to `en` and remains on the same state.
     *
     * ```html
     * <a ui-sref="{ lang: 'en' }">English</a>
     * ```
     *
     * - A middle-click, right-click, or ctrl-click is handled (natively) by the browser to open the href in a new window, for example.
     *
     * - Unlike the parameter values expression, the state name is not `$watch`ed (for performance reasons).
     * If you need to dynamically update the state being linked to, use the fully dynamic [[uiState]] directive.
     */
    var uiSrefDirective;
    uiSrefDirective = [
        '$uiRouter',
        '$timeout',
        function $StateRefDirective($uiRouter, $timeout) {
            var $state = $uiRouter.stateService;
            return {
                restrict: 'A',
                require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
                link: function (scope, element, attrs, uiSrefActive) {
                    var type = getTypeInfo(element);
                    var active = uiSrefActive[1] || uiSrefActive[0];
                    var unlinkInfoFn = null;
                    var hookFn;
                    var rawDef = {};
                    var getDef = function () { return processedDef($state, element, rawDef); };
                    var ref = parseStateRef(attrs.uiSref);
                    rawDef.uiState = ref.state;
                    rawDef.uiStateOpts = attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {};
                    function update() {
                        var def = getDef();
                        if (unlinkInfoFn)
                            unlinkInfoFn();
                        if (active)
                            unlinkInfoFn = active.$$addStateInfo(def.uiState, def.uiStateParams);
                        if (def.href != null)
                            attrs.$set(type.attr, def.href);
                    }
                    if (ref.paramExpr) {
                        scope.$watch(ref.paramExpr, function (val$$1) {
                            rawDef.uiStateParams = extend({}, val$$1);
                            update();
                        }, true);
                        rawDef.uiStateParams = extend({}, scope.$eval(ref.paramExpr));
                    }
                    update();
                    scope.$on('$destroy', $uiRouter.stateRegistry.onStatesChanged(update));
                    scope.$on('$destroy', $uiRouter.transitionService.onSuccess({}, update));
                    if (!type.clickable)
                        return;
                    hookFn = clickHook(element, $state, $timeout, type, getDef);
                    bindEvents(element, scope, hookFn, rawDef.uiStateOpts);
                },
            };
        },
    ];
    /**
     * `ui-state`: A fully dynamic directive for linking to a state
     *
     * A directive which links to a state (and optionally, parameters).
     * When clicked, this directive activates the linked state with the supplied parameter values.
     *
     * **This directive is very similar to [[uiSref]], but it `$observe`s and `$watch`es/evaluates all its inputs.**
     *
     * A directive which links to a state (and optionally, parameters).
     * When clicked, this directive activates the linked state with the supplied parameter values.
     *
     * ### Linked State
     * The attribute value of `ui-state` is an expression which is `$watch`ed and evaluated as the state to link to.
     * **This is in contrast with `ui-sref`, which takes a state name as a string literal.**
     *
     * #### Example:
     * Create a list of links.
     * ```html
     * <li ng-repeat="link in navlinks">
     *   <a ui-state="link.state">{{ link.displayName }}</a>
     * </li>
     * ```
     *
     * ### Relative Links
     * If the expression evaluates to a relative path, it is processed like [[uiSref]].
     * You just need to be aware that the path is relative to the state that *created* the link.
     * This allows a state to create relative `ui-state` which always targets the same destination.
     *
     * ### hrefs
     * If the linked state has a URL, the directive will automatically generate and
     * update the `href` attribute (using the [[StateService.href]]  method).
     *
     * ### Parameter Values
     * In addition to the state name expression, a `ui-state` can include parameter values which are applied when activating the state.
     * Param values should be provided using the `ui-state-params` attribute.
     * The `ui-state-params` attribute value is `$watch`ed and evaluated as an expression.
     *
     * #### Example:
     * This example renders a list of links with param values.
     * The state's `userId` parameter value comes from each user's `user.id` property.
     * ```html
     * <li ng-repeat="link in navlinks">
     *   <a ui-state="link.state" ui-state-params="link.params">{{ link.displayName }}</a>
     * </li>
     * ```
     *
     * ### Transition Options
     * You can specify [[TransitionOptions]] to pass to [[StateService.go]] by using the `ui-state-opts` attribute.
     * Options are restricted to `location`, `inherit`, and `reload`.
     * The value of the `ui-state-opts` is `$watch`ed and evaluated as an expression.
     *
     * #### Example:
     * ```html
     * <a ui-state="returnto.state" ui-state-opts="{ reload: true }">Home</a>
     * ```
     *
     * ### Other DOM Events
     *
     * You can also customize which DOM events to respond to (instead of `click`) by
     * providing an `events` array in the `ui-state-opts` attribute.
     *
     * #### Example:
     * ```html
     * <input type="text" ui-state="contacts" ui-state-opts="{ events: ['change', 'blur'] }">
     * ```
     *
     * ### Highlighting the active link
     * This directive can be used in conjunction with [[uiSrefActive]] to highlight the active link.
     *
     * ### Notes
     *
     * - You can use `ui-params` to change **only the parameter values** by omitting the state name and supplying only `ui-state-params`.
     *   However, it might be simpler to use [[uiSref]] parameter-only links.
     *
     * #### Example:
     * Sets the `lang` parameter to `en` and remains on the same state.
     *
     * ```html
     * <a ui-state="" ui-state-params="{ lang: 'en' }">English</a>
     * ```
     *
     * - A middle-click, right-click, or ctrl-click is handled (natively) by the browser to open the href in a new window, for example.
     * ```
     */
    var uiStateDirective;
    uiStateDirective = [
        '$uiRouter',
        '$timeout',
        function $StateRefDynamicDirective($uiRouter, $timeout) {
            var $state = $uiRouter.stateService;
            return {
                restrict: 'A',
                require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
                link: function (scope, element, attrs, uiSrefActive) {
                    var type = getTypeInfo(element);
                    var active = uiSrefActive[1] || uiSrefActive[0];
                    var unlinkInfoFn = null;
                    var hookFn;
                    var rawDef = {};
                    var getDef = function () { return processedDef($state, element, rawDef); };
                    var inputAttrs = ['uiState', 'uiStateParams', 'uiStateOpts'];
                    var watchDeregFns = inputAttrs.reduce(function (acc, attr) { return ((acc[attr] = noop), acc); }, {});
                    function update() {
                        var def = getDef();
                        if (unlinkInfoFn)
                            unlinkInfoFn();
                        if (active)
                            unlinkInfoFn = active.$$addStateInfo(def.uiState, def.uiStateParams);
                        if (def.href != null)
                            attrs.$set(type.attr, def.href);
                    }
                    inputAttrs.forEach(function (field) {
                        rawDef[field] = attrs[field] ? scope.$eval(attrs[field]) : null;
                        attrs.$observe(field, function (expr) {
                            watchDeregFns[field]();
                            watchDeregFns[field] = scope.$watch(expr, function (newval) {
                                rawDef[field] = newval;
                                update();
                            }, true);
                        });
                    });
                    update();
                    scope.$on('$destroy', $uiRouter.stateRegistry.onStatesChanged(update));
                    scope.$on('$destroy', $uiRouter.transitionService.onSuccess({}, update));
                    if (!type.clickable)
                        return;
                    hookFn = clickHook(element, $state, $timeout, type, getDef);
                    bindEvents(element, scope, hookFn, rawDef.uiStateOpts);
                },
            };
        },
    ];
    /**
     * `ui-sref-active` and `ui-sref-active-eq`: A directive that adds a CSS class when a `ui-sref` is active
     *
     * A directive working alongside [[uiSref]] and [[uiState]] to add classes to an element when the
     * related directive's state is active (and remove them when it is inactive).
     *
     * The primary use-case is to highlight the active link in navigation menus,
     * distinguishing it from the inactive menu items.
     *
     * ### Linking to a `ui-sref` or `ui-state`
     * `ui-sref-active` can live on the same element as `ui-sref`/`ui-state`, or it can be on a parent element.
     * If a `ui-sref-active` is a parent to more than one `ui-sref`/`ui-state`, it will apply the CSS class when **any of the links are active**.
     *
     * ### Matching
     *
     * The `ui-sref-active` directive applies the CSS class when the `ui-sref`/`ui-state`'s target state **or any child state is active**.
     * This is a "fuzzy match" which uses [[StateService.includes]].
     *
     * The `ui-sref-active-eq` directive applies the CSS class when the `ui-sref`/`ui-state`'s target state is directly active (not when child states are active).
     * This is an "exact match" which uses [[StateService.is]].
     *
     * ### Parameter values
     * If the `ui-sref`/`ui-state` includes parameter values, the current parameter values must match the link's values for the link to be highlighted.
     * This allows a list of links to the same state with different parameters to be rendered, and the correct one highlighted.
     *
     * #### Example:
     * ```html
     * <li ng-repeat="user in users" ui-sref-active="active">
     *   <a ui-sref="user.details({ userId: user.id })">{{ user.lastName }}</a>
     * </li>
     * ```
     *
     * ### Examples
     *
     * Given the following template:
     * #### Example:
     * ```html
     * <ul>
     *   <li ui-sref-active="active" class="item">
     *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
     *   </li>
     * </ul>
     * ```
     *
     * When the app state is `app.user` (or any child state),
     * and contains the state parameter "user" with value "bilbobaggins",
     * the resulting HTML will appear as (note the 'active' class):
     *
     * ```html
     * <ul>
     *   <li ui-sref-active="active" class="item active">
     *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
     *   </li>
     * </ul>
     * ```
     *
     * ### Glob mode
     *
     * It is possible to pass `ui-sref-active` an expression that evaluates to an object.
     * The objects keys represent active class names and values represent the respective state names/globs.
     * `ui-sref-active` will match if the current active state **includes** any of
     * the specified state names/globs, even the abstract ones.
     *
     * #### Example:
     * Given the following template, with "admin" being an abstract state:
     * ```html
     * <div ui-sref-active="{'active': 'admin.**'}">
     *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
     * </div>
     * ```
     *
     * Arrays are also supported as values in the `ngClass`-like interface.
     * This allows multiple states to add `active` class.
     *
     * #### Example:
     * Given the following template, with "admin.roles" being the current state, the class will be added too:
     * ```html
     * <div ui-sref-active="{'active': ['owner.**', 'admin.**']}">
     *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
     * </div>
     * ```
     *
     * When the current state is "admin.roles" the "active" class will be applied to both the `<div>` and `<a>` elements.
     * It is important to note that the state names/globs passed to `ui-sref-active` override any state provided by a linked `ui-sref`.
     *
     * ### Notes:
     *
     * - The class name is interpolated **once** during the directives link time (any further changes to the
     * interpolated value are ignored).
     *
     * - Multiple classes may be specified in a space-separated format: `ui-sref-active='class1 class2 class3'`
     */
    var uiSrefActiveDirective;
    uiSrefActiveDirective = [
        '$state',
        '$stateParams',
        '$interpolate',
        '$uiRouter',
        function $StateRefActiveDirective($state, $stateParams, $interpolate, $uiRouter) {
            return {
                restrict: 'A',
                controller: [
                    '$scope',
                    '$element',
                    '$attrs',
                    function ($scope, $element, $attrs) {
                        var states = [];
                        var activeEqClass;
                        var uiSrefActive;
                        // There probably isn't much point in $observing this
                        // uiSrefActive and uiSrefActiveEq share the same directive object with some
                        // slight difference in logic routing
                        activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);
                        try {
                            uiSrefActive = $scope.$eval($attrs.uiSrefActive);
                        }
                        catch (e) {
                            // Do nothing. uiSrefActive is not a valid expression.
                            // Fall back to using $interpolate below
                        }
                        uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
                        setStatesFromDefinitionObject(uiSrefActive);
                        // Allow uiSref to communicate with uiSrefActive[Equals]
                        this.$$addStateInfo = function (newState, newParams) {
                            // we already got an explicit state provided by ui-sref-active, so we
                            // shadow the one that comes from ui-sref
                            if (isObject(uiSrefActive) && states.length > 0) {
                                return;
                            }
                            var deregister = addState(newState, newParams, uiSrefActive);
                            update();
                            return deregister;
                        };
                        function updateAfterTransition(trans) {
                            trans.promise.then(update, noop);
                        }
                        $scope.$on('$destroy', setupEventListeners());
                        if ($uiRouter.globals.transition) {
                            updateAfterTransition($uiRouter.globals.transition);
                        }
                        function setupEventListeners() {
                            var deregisterStatesChangedListener = $uiRouter.stateRegistry.onStatesChanged(handleStatesChanged);
                            var deregisterOnStartListener = $uiRouter.transitionService.onStart({}, updateAfterTransition);
                            var deregisterStateChangeSuccessListener = $scope.$on('$stateChangeSuccess', update);
                            return function cleanUp() {
                                deregisterStatesChangedListener();
                                deregisterOnStartListener();
                                deregisterStateChangeSuccessListener();
                            };
                        }
                        function handleStatesChanged() {
                            setStatesFromDefinitionObject(uiSrefActive);
                        }
                        function setStatesFromDefinitionObject(statesDefinition) {
                            if (isObject(statesDefinition)) {
                                states = [];
                                forEach(statesDefinition, function (stateOrName, activeClass) {
                                    // Helper function to abstract adding state.
                                    var addStateForClass = function (stateOrName, activeClass) {
                                        var ref = parseStateRef(stateOrName);
                                        addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
                                    };
                                    if (isString(stateOrName)) {
                                        // If state is string, just add it.
                                        addStateForClass(stateOrName, activeClass);
                                    }
                                    else if (isArray(stateOrName)) {
                                        // If state is an array, iterate over it and add each array item individually.
                                        forEach(stateOrName, function (stateOrName) {
                                            addStateForClass(stateOrName, activeClass);
                                        });
                                    }
                                });
                            }
                        }
                        function addState(stateName, stateParams, activeClass) {
                            var state = $state.get(stateName, stateContext($element));
                            var stateInfo = {
                                state: state || { name: stateName },
                                params: stateParams,
                                activeClass: activeClass,
                            };
                            states.push(stateInfo);
                            return function removeState() {
                                removeFrom(states)(stateInfo);
                            };
                        }
                        // Update route state
                        function update() {
                            var splitClasses = function (str) { return str.split(/\s/).filter(identity); };
                            var getClasses = function (stateList) {
                                return stateList
                                    .map(function (x) { return x.activeClass; })
                                    .map(splitClasses)
                                    .reduce(unnestR, []);
                            };
                            var allClasses = getClasses(states)
                                .concat(splitClasses(activeEqClass))
                                .reduce(uniqR, []);
                            var fuzzyClasses = getClasses(states.filter(function (x) { return $state.includes(x.state.name, x.params); }));
                            var exactlyMatchesAny = !!states.filter(function (x) { return $state.is(x.state.name, x.params); }).length;
                            var exactClasses = exactlyMatchesAny ? splitClasses(activeEqClass) : [];
                            var addClasses = fuzzyClasses.concat(exactClasses).reduce(uniqR, []);
                            var removeClasses = allClasses.filter(function (cls) { return !inArray(addClasses, cls); });
                            $scope.$evalAsync(function () {
                                addClasses.forEach(function (className) { return $element.addClass(className); });
                                removeClasses.forEach(function (className) { return $element.removeClass(className); });
                            });
                        }
                        update();
                    },
                ],
            };
        },
    ];
    ng
        .module('ui.router.state')
        .directive('uiSref', uiSrefDirective)
        .directive('uiSrefActive', uiSrefActiveDirective)
        .directive('uiSrefActiveEq', uiSrefActiveDirective)
        .directive('uiState', uiStateDirective);

    /** @publicapi @module ng1 */ /** */
    /**
     * `isState` Filter: truthy if the current state is the parameter
     *
     * Translates to [[StateService.is]] `$state.is("stateName")`.
     *
     * #### Example:
     * ```html
     * <div ng-if="'stateName' | isState">show if state is 'stateName'</div>
     * ```
     */
    $IsStateFilter.$inject = ['$state'];
    function $IsStateFilter($state) {
        var isFilter = function (state, params, options) {
            return $state.is(state, params, options);
        };
        isFilter.$stateful = true;
        return isFilter;
    }
    /**
     * `includedByState` Filter: truthy if the current state includes the parameter
     *
     * Translates to [[StateService.includes]]` $state.is("fullOrPartialStateName")`.
     *
     * #### Example:
     * ```html
     * <div ng-if="'fullOrPartialStateName' | includedByState">show if state includes 'fullOrPartialStateName'</div>
     * ```
     */
    $IncludedByStateFilter.$inject = ['$state'];
    function $IncludedByStateFilter($state) {
        var includesFilter = function (state, params, options) {
            return $state.includes(state, params, options);
        };
        includesFilter.$stateful = true;
        return includesFilter;
    }
    ng
        .module('ui.router.state')
        .filter('isState', $IsStateFilter)
        .filter('includedByState', $IncludedByStateFilter);

    /** @publicapi @module directives */ /** */
    /**
     * `ui-view`: A viewport directive which is filled in by a view from the active state.
     *
     * ### Attributes
     *
     * - `name`: (Optional) A view name.
     *   The name should be unique amongst the other views in the same state.
     *   You can have views of the same name that live in different states.
     *   The ui-view can be targeted in a View using the name ([[Ng1StateDeclaration.views]]).
     *
     * - `autoscroll`: an expression. When it evaluates to true, the `ui-view` will be scrolled into view when it is activated.
     *   Uses [[$uiViewScroll]] to do the scrolling.
     *
     * - `onload`: Expression to evaluate whenever the view updates.
     *
     * #### Example:
     * A view can be unnamed or named.
     * ```html
     * <!-- Unnamed -->
     * <div ui-view></div>
     *
     * <!-- Named -->
     * <div ui-view="viewName"></div>
     *
     * <!-- Named (different style) -->
     * <ui-view name="viewName"></ui-view>
     * ```
     *
     * You can only have one unnamed view within any template (or root html). If you are only using a
     * single view and it is unnamed then you can populate it like so:
     *
     * ```html
     * <div ui-view></div>
     * $stateProvider.state("home", {
     *   template: "<h1>HELLO!</h1>"
     * })
     * ```
     *
     * The above is a convenient shortcut equivalent to specifying your view explicitly with the
     * [[Ng1StateDeclaration.views]] config property, by name, in this case an empty name:
     *
     * ```js
     * $stateProvider.state("home", {
     *   views: {
     *     "": {
     *       template: "<h1>HELLO!</h1>"
     *     }
     *   }
     * })
     * ```
     *
     * But typically you'll only use the views property if you name your view or have more than one view
     * in the same template. There's not really a compelling reason to name a view if its the only one,
     * but you could if you wanted, like so:
     *
     * ```html
     * <div ui-view="main"></div>
     * ```
     *
     * ```js
     * $stateProvider.state("home", {
     *   views: {
     *     "main": {
     *       template: "<h1>HELLO!</h1>"
     *     }
     *   }
     * })
     * ```
     *
     * Really though, you'll use views to set up multiple views:
     *
     * ```html
     * <div ui-view></div>
     * <div ui-view="chart"></div>
     * <div ui-view="data"></div>
     * ```
     *
     * ```js
     * $stateProvider.state("home", {
     *   views: {
     *     "": {
     *       template: "<h1>HELLO!</h1>"
     *     },
     *     "chart": {
     *       template: "<chart_thing/>"
     *     },
     *     "data": {
     *       template: "<data_thing/>"
     *     }
     *   }
     * })
     * ```
     *
     * #### Examples for `autoscroll`:
     * ```html
     * <!-- If autoscroll present with no expression,
     *      then scroll ui-view into view -->
     * <ui-view autoscroll/>
     *
     * <!-- If autoscroll present with valid expression,
     *      then scroll ui-view into view if expression evaluates to true -->
     * <ui-view autoscroll='true'/>
     * <ui-view autoscroll='false'/>
     * <ui-view autoscroll='scopeVariable'/>
     * ```
     *
     * Resolve data:
     *
     * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
     * can be customized using [[Ng1ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
     *
     * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
     * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
     * depends on `$resolve` data.
     *
     * #### Example:
     * ```js
     * $stateProvider.state('home', {
     *   template: '<my-component user="$resolve.user"></my-component>',
     *   resolve: {
     *     user: function(UserService) { return UserService.fetchUser(); }
     *   }
     * });
     * ```
     */
    var uiView;
    uiView = [
        '$view',
        '$animate',
        '$uiViewScroll',
        '$interpolate',
        '$q',
        function $ViewDirective($view, $animate, $uiViewScroll, $interpolate, $q$$1) {
            function getRenderer(attrs, scope) {
                return {
                    enter: function (element, target, cb) {
                        if (ng.version.minor > 2) {
                            $animate.enter(element, null, target).then(cb);
                        }
                        else {
                            $animate.enter(element, null, target, cb);
                        }
                    },
                    leave: function (element, cb) {
                        if (ng.version.minor > 2) {
                            $animate.leave(element).then(cb);
                        }
                        else {
                            $animate.leave(element, cb);
                        }
                    },
                };
            }
            function configsEqual(config1, config2) {
                return config1 === config2;
            }
            var rootData = {
                $cfg: { viewDecl: { $context: $view._pluginapi._rootViewContext() } },
                $uiView: {},
            };
            var directive = {
                count: 0,
                restrict: 'ECA',
                terminal: true,
                priority: 400,
                transclude: 'element',
                compile: function (tElement, tAttrs, $transclude) {
                    return function (scope, $element, attrs) {
                        var onloadExp = attrs['onload'] || '', autoScrollExp = attrs['autoscroll'], renderer = getRenderer(attrs, scope), inherited = $element.inheritedData('$uiView') || rootData, name = $interpolate(attrs['uiView'] || attrs['name'] || '')(scope) || '$default';
                        var previousEl, currentEl, currentScope, viewConfig, unregister;
                        var activeUIView = {
                            $type: 'ng1',
                            id: directive.count++,
                            name: name,
                            fqn: inherited.$uiView.fqn ? inherited.$uiView.fqn + '.' + name : name,
                            config: null,
                            configUpdated: configUpdatedCallback,
                            get creationContext() {
                                // The context in which this ui-view "tag" was created
                                var fromParentTagConfig = parse('$cfg.viewDecl.$context')(inherited);
                                // Allow <ui-view name="foo"><ui-view name="bar"></ui-view></ui-view>
                                // See https://github.com/angular-ui/ui-router/issues/3355
                                var fromParentTag = parse('$uiView.creationContext')(inherited);
                                return fromParentTagConfig || fromParentTag;
                            },
                        };
                        trace.traceUIViewEvent('Linking', activeUIView);
                        function configUpdatedCallback(config) {
                            if (config && !(config instanceof Ng1ViewConfig))
                                return;
                            if (configsEqual(viewConfig, config))
                                return;
                            trace.traceUIViewConfigUpdated(activeUIView, config && config.viewDecl && config.viewDecl.$context);
                            viewConfig = config;
                            updateView(config);
                        }
                        $element.data('$uiView', { $uiView: activeUIView });
                        updateView();
                        unregister = $view.registerUIView(activeUIView);
                        scope.$on('$destroy', function () {
                            trace.traceUIViewEvent('Destroying/Unregistering', activeUIView);
                            unregister();
                        });
                        function cleanupLastView() {
                            if (previousEl) {
                                trace.traceUIViewEvent('Removing (previous) el', previousEl.data('$uiView'));
                                previousEl.remove();
                                previousEl = null;
                            }
                            if (currentScope) {
                                trace.traceUIViewEvent('Destroying scope', activeUIView);
                                currentScope.$destroy();
                                currentScope = null;
                            }
                            if (currentEl) {
                                var _viewData_1 = currentEl.data('$uiViewAnim');
                                trace.traceUIViewEvent('Animate out', _viewData_1);
                                renderer.leave(currentEl, function () {
                                    _viewData_1.$$animLeave.resolve();
                                    previousEl = null;
                                });
                                previousEl = currentEl;
                                currentEl = null;
                            }
                        }
                        function updateView(config) {
                            var newScope = scope.$new();
                            var animEnter = $q$$1.defer(), animLeave = $q$$1.defer();
                            var $uiViewData = {
                                $cfg: config,
                                $uiView: activeUIView,
                            };
                            var $uiViewAnim = {
                                $animEnter: animEnter.promise,
                                $animLeave: animLeave.promise,
                                $$animLeave: animLeave,
                            };
                            /**
                             * @ngdoc event
                             * @name ui.router.state.directive:ui-view#$viewContentLoading
                             * @eventOf ui.router.state.directive:ui-view
                             * @eventType emits on ui-view directive scope
                             * @description
                             *
                             * Fired once the view **begins loading**, *before* the DOM is rendered.
                             *
                             * @param {Object} event Event object.
                             * @param {string} viewName Name of the view.
                             */
                            newScope.$emit('$viewContentLoading', name);
                            var cloned = $transclude(newScope, function (clone) {
                                clone.data('$uiViewAnim', $uiViewAnim);
                                clone.data('$uiView', $uiViewData);
                                renderer.enter(clone, $element, function onUIViewEnter() {
                                    animEnter.resolve();
                                    if (currentScope)
                                        currentScope.$emit('$viewContentAnimationEnded');
                                    if ((isDefined(autoScrollExp) && !autoScrollExp) || scope.$eval(autoScrollExp)) {
                                        $uiViewScroll(clone);
                                    }
                                });
                                cleanupLastView();
                            });
                            currentEl = cloned;
                            currentScope = newScope;
                            /**
                             * @ngdoc event
                             * @name ui.router.state.directive:ui-view#$viewContentLoaded
                             * @eventOf ui.router.state.directive:ui-view
                             * @eventType emits on ui-view directive scope
                             * @description           *
                             * Fired once the view is **loaded**, *after* the DOM is rendered.
                             *
                             * @param {Object} event Event object.
                             */
                            currentScope.$emit('$viewContentLoaded', config || viewConfig);
                            currentScope.$eval(onloadExp);
                        }
                    };
                },
            };
            return directive;
        },
    ];
    $ViewDirectiveFill.$inject = ['$compile', '$controller', '$transitions', '$view', '$q', '$timeout'];
    /** @hidden */
    function $ViewDirectiveFill($compile, $controller, $transitions, $view, $q$$1, $timeout) {
        var getControllerAs = parse('viewDecl.controllerAs');
        var getResolveAs = parse('viewDecl.resolveAs');
        return {
            restrict: 'ECA',
            priority: -400,
            compile: function (tElement) {
                var initial = tElement.html();
                tElement.empty();
                return function (scope, $element) {
                    var data = $element.data('$uiView');
                    if (!data) {
                        $element.html(initial);
                        $compile($element.contents())(scope);
                        return;
                    }
                    var cfg = data.$cfg || { viewDecl: {}, getTemplate: noop };
                    var resolveCtx = cfg.path && new ResolveContext(cfg.path);
                    $element.html(cfg.getTemplate($element, resolveCtx) || initial);
                    trace.traceUIViewFill(data.$uiView, $element.html());
                    var link = $compile($element.contents());
                    var controller = cfg.controller;
                    var controllerAs = getControllerAs(cfg);
                    var resolveAs = getResolveAs(cfg);
                    var locals = resolveCtx && getLocals(resolveCtx);
                    scope[resolveAs] = locals;
                    if (controller) {
                        var controllerInstance = ($controller(controller, extend({}, locals, { $scope: scope, $element: $element })));
                        if (controllerAs) {
                            scope[controllerAs] = controllerInstance;
                            scope[controllerAs][resolveAs] = locals;
                        }
                        // TODO: Use $view service as a central point for registering component-level hooks
                        // Then, when a component is created, tell the $view service, so it can invoke hooks
                        // $view.componentLoaded(controllerInstance, { $scope: scope, $element: $element });
                        // scope.$on('$destroy', () => $view.componentUnloaded(controllerInstance, { $scope: scope, $element: $element }));
                        $element.data('$ngControllerController', controllerInstance);
                        $element.children().data('$ngControllerController', controllerInstance);
                        registerControllerCallbacks($q$$1, $transitions, controllerInstance, scope, cfg);
                    }
                    // Wait for the component to appear in the DOM
                    if (isString(cfg.component)) {
                        var kebobName = kebobString(cfg.component);
                        var tagRegexp_1 = new RegExp("^(x-|data-)?" + kebobName + "$", 'i');
                        var getComponentController = function () {
                            var directiveEl = [].slice
                                .call($element[0].children)
                                .filter(function (el) { return el && el.tagName && tagRegexp_1.exec(el.tagName); });
                            return directiveEl && ng.element(directiveEl).data("$" + cfg.component + "Controller");
                        };
                        var deregisterWatch_1 = scope.$watch(getComponentController, function (ctrlInstance) {
                            if (!ctrlInstance)
                                return;
                            registerControllerCallbacks($q$$1, $transitions, ctrlInstance, scope, cfg);
                            deregisterWatch_1();
                        });
                    }
                    link(scope);
                };
            },
        };
    }
    /** @hidden */
    var hasComponentImpl = typeof ng.module('ui.router')['component'] === 'function';
    /** @hidden incrementing id */
    var _uiCanExitId = 0;
    /** @hidden TODO: move these callbacks to $view and/or `/hooks/components.ts` or something */
    function registerControllerCallbacks($q$$1, $transitions, controllerInstance, $scope, cfg) {
        // Call $onInit() ASAP
        if (isFunction(controllerInstance.$onInit) && !(cfg.viewDecl.component && hasComponentImpl)) {
            controllerInstance.$onInit();
        }
        var viewState = tail(cfg.path).state.self;
        var hookOptions = { bind: controllerInstance };
        // Add component-level hook for onUiParamsChanged
        if (isFunction(controllerInstance.uiOnParamsChanged)) {
            var resolveContext = new ResolveContext(cfg.path);
            var viewCreationTrans_1 = resolveContext.getResolvable('$transition$').data;
            // Fire callback on any successful transition
            var paramsUpdated = function ($transition$) {
                // Exit early if the $transition$ is the same as the view was created within.
                // Exit early if the $transition$ will exit the state the view is for.
                if ($transition$ === viewCreationTrans_1 || $transition$.exiting().indexOf(viewState) !== -1)
                    return;
                var toParams = $transition$.params('to');
                var fromParams = $transition$.params('from');
                var getNodeSchema = function (node) { return node.paramSchema; };
                var toSchema = $transition$
                    .treeChanges('to')
                    .map(getNodeSchema)
                    .reduce(unnestR, []);
                var fromSchema = $transition$
                    .treeChanges('from')
                    .map(getNodeSchema)
                    .reduce(unnestR, []);
                // Find the to params that have different values than the from params
                var changedToParams = toSchema.filter(function (param) {
                    var idx = fromSchema.indexOf(param);
                    return idx === -1 || !fromSchema[idx].type.equals(toParams[param.id], fromParams[param.id]);
                });
                // Only trigger callback if a to param has changed or is new
                if (changedToParams.length) {
                    var changedKeys_1 = changedToParams.map(function (x) { return x.id; });
                    // Filter the params to only changed/new to params.  `$transition$.params()` may be used to get all params.
                    var newValues = filter(toParams, function (val$$1, key) { return changedKeys_1.indexOf(key) !== -1; });
                    controllerInstance.uiOnParamsChanged(newValues, $transition$);
                }
            };
            $scope.$on('$destroy', $transitions.onSuccess({}, paramsUpdated, hookOptions));
        }
        // Add component-level hook for uiCanExit
        if (isFunction(controllerInstance.uiCanExit)) {
            var id_1 = _uiCanExitId++;
            var cacheProp_1 = '_uiCanExitIds';
            // Returns true if a redirect transition already answered truthy
            var prevTruthyAnswer_1 = function (trans) {
                return !!trans && ((trans[cacheProp_1] && trans[cacheProp_1][id_1] === true) || prevTruthyAnswer_1(trans.redirectedFrom()));
            };
            // If a user answered yes, but the transition was later redirected, don't also ask for the new redirect transition
            var wrappedHook = function (trans) {
                var promise;
                var ids = (trans[cacheProp_1] = trans[cacheProp_1] || {});
                if (!prevTruthyAnswer_1(trans)) {
                    promise = $q$$1.when(controllerInstance.uiCanExit(trans));
                    promise.then(function (val$$1) { return (ids[id_1] = val$$1 !== false); });
                }
                return promise;
            };
            var criteria = { exiting: viewState.name };
            $scope.$on('$destroy', $transitions.onBefore(criteria, wrappedHook, hookOptions));
        }
    }
    ng.module('ui.router.state').directive('uiView', uiView);
    ng.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

    /** @publicapi @module ng1 */ /** */
    /** @hidden */
    function $ViewScrollProvider() {
        var useAnchorScroll = false;
        this.useAnchorScroll = function () {
            useAnchorScroll = true;
        };
        this.$get = [
            '$anchorScroll',
            '$timeout',
            function ($anchorScroll, $timeout) {
                if (useAnchorScroll) {
                    return $anchorScroll;
                }
                return function ($element) {
                    return $timeout(function () {
                        $element[0].scrollIntoView();
                    }, 0, false);
                };
            },
        ];
    }
    ng.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

    var index$1 = 'ui.router';

    exports.default = index$1;
    exports.core = index;
    exports.watchDigests = watchDigests;
    exports.getLocals = getLocals;
    exports.getNg1ViewConfigFactory = getNg1ViewConfigFactory;
    exports.ng1ViewsBuilder = ng1ViewsBuilder;
    exports.Ng1ViewConfig = Ng1ViewConfig;
    exports.StateProvider = StateProvider;
    exports.UrlRouterProvider = UrlRouterProvider;
    exports.root = root;
    exports.fromJson = fromJson;
    exports.toJson = toJson;
    exports.forEach = forEach;
    exports.extend = extend;
    exports.equals = equals;
    exports.identity = identity;
    exports.noop = noop;
    exports.createProxyFunctions = createProxyFunctions;
    exports.inherit = inherit;
    exports.inArray = inArray;
    exports._inArray = _inArray;
    exports.removeFrom = removeFrom;
    exports._removeFrom = _removeFrom;
    exports.pushTo = pushTo;
    exports._pushTo = _pushTo;
    exports.deregAll = deregAll;
    exports.defaults = defaults;
    exports.mergeR = mergeR;
    exports.ancestors = ancestors;
    exports.pick = pick;
    exports.omit = omit;
    exports.pluck = pluck;
    exports.filter = filter;
    exports.find = find;
    exports.mapObj = mapObj;
    exports.map = map;
    exports.values = values;
    exports.allTrueR = allTrueR;
    exports.anyTrueR = anyTrueR;
    exports.unnestR = unnestR;
    exports.flattenR = flattenR;
    exports.pushR = pushR;
    exports.uniqR = uniqR;
    exports.unnest = unnest;
    exports.flatten = flatten;
    exports.assertPredicate = assertPredicate;
    exports.assertMap = assertMap;
    exports.assertFn = assertFn;
    exports.pairs = pairs;
    exports.arrayTuples = arrayTuples;
    exports.applyPairs = applyPairs;
    exports.tail = tail;
    exports.copy = copy;
    exports._extend = _extend;
    exports.silenceUncaughtInPromise = silenceUncaughtInPromise;
    exports.silentRejection = silentRejection;
    exports.makeStub = makeStub;
    exports.services = services;
    exports.Glob = Glob;
    exports.curry = curry;
    exports.compose = compose;
    exports.pipe = pipe;
    exports.prop = prop;
    exports.propEq = propEq;
    exports.parse = parse;
    exports.not = not;
    exports.and = and;
    exports.or = or;
    exports.all = all;
    exports.any = any;
    exports.is = is;
    exports.eq = eq;
    exports.val = val;
    exports.invoke = invoke;
    exports.pattern = pattern;
    exports.isUndefined = isUndefined;
    exports.isDefined = isDefined;
    exports.isNull = isNull;
    exports.isNullOrUndefined = isNullOrUndefined;
    exports.isFunction = isFunction;
    exports.isNumber = isNumber;
    exports.isString = isString;
    exports.isObject = isObject;
    exports.isArray = isArray;
    exports.isDate = isDate;
    exports.isRegExp = isRegExp;
    exports.isInjectable = isInjectable;
    exports.isPromise = isPromise;
    exports.Queue = Queue;
    exports.maxLength = maxLength;
    exports.padString = padString;
    exports.kebobString = kebobString;
    exports.functionToString = functionToString;
    exports.fnToString = fnToString;
    exports.stringify = stringify;
    exports.beforeAfterSubstr = beforeAfterSubstr;
    exports.hostRegex = hostRegex;
    exports.stripLastPathElement = stripLastPathElement;
    exports.splitHash = splitHash;
    exports.splitQuery = splitQuery;
    exports.splitEqual = splitEqual;
    exports.trimHashVal = trimHashVal;
    exports.splitOnDelim = splitOnDelim;
    exports.joinNeighborsR = joinNeighborsR;
    exports.Trace = Trace;
    exports.trace = trace;
    exports.Param = Param;
    exports.ParamTypes = ParamTypes;
    exports.StateParams = StateParams;
    exports.ParamType = ParamType;
    exports.PathNode = PathNode;
    exports.PathUtils = PathUtils;
    exports.resolvePolicies = resolvePolicies;
    exports.defaultResolvePolicy = defaultResolvePolicy;
    exports.Resolvable = Resolvable;
    exports.NATIVE_INJECTOR_TOKEN = NATIVE_INJECTOR_TOKEN;
    exports.ResolveContext = ResolveContext;
    exports.resolvablesBuilder = resolvablesBuilder;
    exports.StateBuilder = StateBuilder;
    exports.StateObject = StateObject;
    exports.StateMatcher = StateMatcher;
    exports.StateQueueManager = StateQueueManager;
    exports.StateRegistry = StateRegistry;
    exports.StateService = StateService;
    exports.TargetState = TargetState;
    exports.HookBuilder = HookBuilder;
    exports.matchState = matchState;
    exports.RegisteredHook = RegisteredHook;
    exports.makeEvent = makeEvent;
    exports.Rejection = Rejection;
    exports.Transition = Transition;
    exports.TransitionHook = TransitionHook;
    exports.TransitionEventType = TransitionEventType;
    exports.defaultTransOpts = defaultTransOpts;
    exports.TransitionService = TransitionService;
    exports.UrlRules = UrlRules;
    exports.UrlConfig = UrlConfig;
    exports.UrlMatcher = UrlMatcher;
    exports.ParamFactory = ParamFactory;
    exports.UrlMatcherFactory = UrlMatcherFactory;
    exports.UrlRouter = UrlRouter;
    exports.UrlRuleFactory = UrlRuleFactory;
    exports.BaseUrlRule = BaseUrlRule;
    exports.UrlService = UrlService;
    exports.ViewService = ViewService;
    exports.UIRouterGlobals = UIRouterGlobals;
    exports.UIRouter = UIRouter;
    exports.$q = $q;
    exports.$injector = $injector;
    exports.BaseLocationServices = BaseLocationServices;
    exports.HashLocationService = HashLocationService;
    exports.MemoryLocationService = MemoryLocationService;
    exports.PushStateLocationService = PushStateLocationService;
    exports.MemoryLocationConfig = MemoryLocationConfig;
    exports.BrowserLocationConfig = BrowserLocationConfig;
    exports.keyValsToObjectR = keyValsToObjectR;
    exports.getParams = getParams;
    exports.parseUrl = parseUrl$1;
    exports.buildUrl = buildUrl;
    exports.locationPluginFactory = locationPluginFactory;
    exports.servicesPlugin = servicesPlugin;
    exports.hashLocationPlugin = hashLocationPlugin;
    exports.pushStateLocationPlugin = pushStateLocationPlugin;
    exports.memoryLocationPlugin = memoryLocationPlugin;
    exports.UIRouterPluginBase = UIRouterPluginBase;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-ui-router.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,a){'use strict';function M(m,f){f=f||{};a.forEach(f,function(a,d){delete f[d]});for(var d in m)!m.hasOwnProperty(d)||"$"===d.charAt(0)&&"$"===d.charAt(1)||(f[d]=m[d]);return f}var B=a.$$minErr("$resource"),H=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;a.module("ngResource",["ng"]).info({angularVersion:"1.7.8"}).provider("$resource",function(){var m=/^https?:\/\/\[[^\]]*][^/]*/,f=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",
isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(d,F,G,N){function C(a,d){this.template=a;this.defaults=n({},f.defaults,d);this.urlParams={}}var O=a.noop,r=a.forEach,n=a.extend,R=a.copy,P=a.isArray,D=a.isDefined,x=a.isFunction,I=a.isNumber,y=a.$$encodeUriQuery,S=a.$$encodeUriSegment;C.prototype={setUrlParams:function(a,d,f){var g=this,c=f||g.template,s,h,n="",b=g.urlParams=Object.create(null);r(c.split(/\W/),function(a){if("hasOwnProperty"===
a)throw B("badname");!/^\d+$/.test(a)&&a&&(new RegExp("(^|[^\\\\]):"+a+"(\\W|$)")).test(c)&&(b[a]={isQueryParamValue:(new RegExp("\\?.*=:"+a+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");c=c.replace(m,function(b){n=b;return""});d=d||{};r(g.urlParams,function(b,a){s=d.hasOwnProperty(a)?d[a]:g.defaults[a];D(s)&&null!==s?(h=b.isQueryParamValue?y(s,!0):S(s),c=c.replace(new RegExp(":"+a+"(\\W|$)","g"),function(b,a){return h+a})):c=c.replace(new RegExp("(/?):"+a+"(\\W|$)","g"),function(b,a,e){return"/"===
e.charAt(0)?e:a+e})});g.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");a.url=n+c.replace(/\/(\\|%5C)\./,"/.");r(d,function(b,c){g.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}};return function(m,y,z,g){function c(b,c){var d={};c=n({},y,c);r(c,function(c,f){x(c)&&(c=c(b));var e;if(c&&c.charAt&&"@"===c.charAt(0)){e=b;var k=c.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!H.test("."+k))throw B("badmember",k);for(var k=k.split("."),h=0,
n=k.length;h<n&&a.isDefined(e);h++){var g=k[h];e=null!==e?e[g]:void 0}}else e=c;d[f]=e});return d}function s(b){return b.resource}function h(b){M(b||{},this)}var Q=new C(m,g);z=n({},f.defaults.actions,z);h.prototype.toJSON=function(){var b=n({},this);delete b.$promise;delete b.$resolved;delete b.$cancelRequest;return b};r(z,function(b,a){var f=!0===b.hasBody||!1!==b.hasBody&&/^(POST|PUT|PATCH)$/i.test(b.method),g=b.timeout,m=D(b.cancellable)?b.cancellable:Q.defaults.cancellable;g&&!I(g)&&(F.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete b.timeout,g=null);h[a]=function(e,k,J,y){function z(a){p.catch(O);null!==u&&u.resolve(a)}var K={},v,t,w;switch(arguments.length){case 4:w=y,t=J;case 3:case 2:if(x(k)){if(x(e)){t=e;w=k;break}t=k;w=J}else{K=e;v=k;t=J;break}case 1:x(e)?t=e:f?v=e:K=e;break;case 0:break;default:throw B("badargs",arguments.length);}var E=this instanceof h,l=E?v:b.isArray?[]:new h(v),q={},C=b.interceptor&&b.interceptor.request||void 0,D=b.interceptor&&b.interceptor.requestError||void 0,F=b.interceptor&&b.interceptor.response||
s,H=b.interceptor&&b.interceptor.responseError||G.reject,I=t?function(a){t(a,A.headers,A.status,A.statusText)}:void 0;w=w||void 0;var u,L,A;r(b,function(a,b){switch(b){default:q[b]=R(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!E&&m&&(u=G.defer(),q.timeout=u.promise,g&&(L=N(u.resolve,g)));f&&(q.data=v);Q.setUrlParams(q,n({},c(v,b.params||{}),K),b.url);var p=G.resolve(q).then(C).catch(D).then(d),p=p.then(function(c){var e=c.data;if(e){if(P(e)!==!!b.isArray)throw B("badcfg",
a,b.isArray?"array":"object",P(e)?"array":"object",q.method,q.url);if(b.isArray)l.length=0,r(e,function(a){"object"===typeof a?l.push(new h(a)):l.push(a)});else{var d=l.$promise;M(e,l);l.$promise=d}}c.resource=l;A=c;return F(c)},function(a){a.resource=l;A=a;return H(a)}),p=p["finally"](function(){l.$resolved=!0;!E&&m&&(l.$cancelRequest=O,N.cancel(L),u=L=q.timeout=null)});p.then(I,w);return E?p:(l.$promise=p,l.$resolved=!1,m&&(l.$cancelRequest=z),l)};h.prototype["$"+a]=function(b,c,d){x(b)&&(d=c,c=
b,b={});b=h[a].call(this,b,this,c,d);return b.$promise||b}});return h}}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y,z){'use strict';function Fa(a,b,c){if(!a)throw Pa("areq",b||"?",c||"required");return a}function Ga(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;Z(a)&&(a=a.join(" "));Z(b)&&(b=b.join(" "));return a+" "+b}function Qa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function $(a,b,c){var d="";a=Z(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,k){a&&0<a.length&&(d+=0<k?" ":"",d+=c?b+a:a+b)});return d}function Ha(a){if(a instanceof A)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return A(va(a))}if(1===a.nodeType)return A(a)}function va(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){s(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function aa(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
N;a.domOperation=function(){a.$$domOperationFired=!0;b();b=N};a.$$prepared=!0}return a}function ha(a,b){Ia(a,b);Ja(a,b)}function Ia(a,b){b.from&&(a.css(b.from),b.from=null)}function Ja(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),k=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),f,k);c.preparationClasses&&(d.preparationClasses=ba(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==N?d.domOperation:null;wa(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){G(a)&&(a=a.split(" "));var c={};s(a,function(a){a.length&&(c[a]=!0)});return c}var f={};a=d(a);b=d(b);s(b,function(a,c){f[c]=1});c=d(c);s(c,function(a,c){f[c]=1===f[c]?null:-1});var k={addClass:"",removeClass:""};s(f,function(c,b){var d,f;1===c?(d="addClass",
f=!a[b]||a[b+"-remove"]):-1===c&&(d="removeClass",f=a[b]||a[b+"-add"]);f&&(k[d].length&&(k[d]+=" "),k[d]+=b)});return k}function K(a){return a instanceof A?a[0]:a}function Ua(a,b,c,d){a="";c&&(a=$(c,"ng-",!0));d.addClass&&(a=ba(a,$(d.addClass,"-add")));d.removeClass&&(a=ba(a,$(d.removeClass,"-remove")));a.length&&(d.preparationClasses=a,b.addClass(a))}function xa(a,b){var c=b?"paused":"",d=ca+"PlayState";ma(a,[d,c]);return[d,c]}function ma(a,b){a.style[b[0]]=b[1]}function ba(a,b){return a?b?a+" "+
b:a:b}function Ka(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,c){var b=f[a];if(b){var L=b.charAt(0);if("-"===L||"+"===L||0<=L)b=Va(b);0===b&&(b=null);d[c]=b}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ya(a){return 0===a||null!=a}function La(a,b){var c=M,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Ma(a,b,c){s(c,
function(c){a[c]=za(a[c])?a[c]:b.style.getPropertyValue(c)})}var M,Aa,ca,Ba;void 0===Y.ontransitionend&&void 0!==Y.onwebkittransitionend?(M="WebkitTransition",Aa="webkitTransitionEnd transitionend"):(M="transition",Aa="transitionend");void 0===Y.onanimationend&&void 0!==Y.onwebkitanimationend?(ca="WebkitAnimation",Ba="webkitAnimationEnd animationend"):(ca="animation",Ba="animationend");var qa=ca+"Delay",Ca=ca+"Duration",na=M+"Delay",Na=M+"Duration",Pa=z.$$minErr("ng"),ra={blockTransitions:function(a,
b){var c=b?"-"+b+"s":"";ma(a,[na,c]);return[na,c]}},Wa={transitionDuration:Na,transitionDelay:na,transitionProperty:M+"Property",animationDuration:Ca,animationDelay:qa,animationIterationCount:ca+"IterationCount"},Xa={transitionDuration:Na,transitionDelay:na,animationDuration:Ca,animationDelay:qa},Da,wa,s,Z,za,sa,Ea,ta,G,R,A,N;z.module("ngAnimate",[],function(){N=z.noop;Da=z.copy;wa=z.extend;A=z.element;s=z.forEach;Z=z.isArray;G=z.isString;ta=z.isObject;R=z.isUndefined;za=z.isDefined;Ea=z.isFunction;
sa=z.isElement}).info({angularVersion:"1.7.8"}).directive("ngAnimateSwap",["$animate",function(a){return{restrict:"A",transclude:"element",terminal:!0,priority:550,link:function(b,c,d,f,k){var e,Q;b.$watchCollection(d.ngAnimateSwap||d["for"],function(b){e&&a.leave(e);Q&&(Q.$destroy(),Q=null);(b||0===b)&&k(function(b,d){e=b;Q=d;a.enter(b,null,c)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===
a)}var k=d.ngAnimateChildren;G(k)&&0===k.length?c.data("$$ngAnimateChildren",!0):(f(a(k)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),e=0;e<b.length;e++)b[e]();f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){return{addClass:a.addClass,
removeClass:a.removeClass,from:a.from,to:a.to}}function c(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function d(a,b){if(a&&b){var d=c(b);return a.split(" ").some(function(a){return d[a]})}}function f(a,b,c){return e[a].some(function(a){return a(b,c)})}function k(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&k(a)});
e.skip.push(function(a,b){return!a.structural&&!k(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;var c=a.addClass,f=a.removeClass,k=b.addClass,e=b.removeClass;return R(c)&&R(f)||R(k)&&R(e)?!1:d(c,e)||d(f,k)});this.$get=["$$rAF",
"$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(c,d,e,C,U,oa,H,u,t,I,da){function ia(a){O.delete(a.target)}function v(){var a=!1;return function(b){a?b():d.$$postDigest(function(){a=!0;b()})}}function ua(a,b,c){var g=[],l=m[c];l&&s(l,function(l){Oa.call(l.node,b)?g.push(l.callback):"leave"===c&&Oa.call(l.node,a)&&g.push(l.callback)});return g}function h(a,b,c){var l=va(b);return a.filter(function(a){return!(a.node===
l&&(!c||a.callback===c))})}function q(a,J,w){function e(a,b,l,g){u(function(){var a=ua(ia,m,b);a.length?c(function(){s(a,function(a){a(h,l,g)});"close"!==l||m.parentNode||D.off(m)}):"close"!==l||m.parentNode||D.off(m)});a.progress(b,l,g)}function I(a){var b=h,c=n;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),c.activeClasses=null);W(h,n);ha(h,n);n.domOperation();q.complete(!a)}var n=Da(w),h=Ha(a),m=K(h),ia=m&&
m.parentNode,n=pa(n),q=new H,u=v();Z(n.addClass)&&(n.addClass=n.addClass.join(" "));n.addClass&&!G(n.addClass)&&(n.addClass=null);Z(n.removeClass)&&(n.removeClass=n.removeClass.join(" "));n.removeClass&&!G(n.removeClass)&&(n.removeClass=null);n.from&&!ta(n.from)&&(n.from=null);n.to&&!ta(n.to)&&(n.to=null);if(!(B&&m&&fa(m,J,w)&&Ya(m,n)))return I(),q;var x=0<=["enter","move","leave"].indexOf(J),r=da(),P=r||O.get(m);w=!P&&y.get(m)||{};var p=!!w.state;P||p&&1===w.state||(P=!E(m,ia,J));if(P)return r&&
e(q,J,"start",b(n)),I(),r&&e(q,J,"close",b(n)),q;x&&F(m);r={structural:x,element:h,event:J,addClass:n.addClass,removeClass:n.removeClass,close:I,options:n,runner:q};if(p){if(f("skip",r,w)){if(2===w.state)return I(),q;T(h,w,r);return w.runner}if(f("cancel",r,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return T(h,w,r),w.runner;else if(f("join",r,w))if(2===w.state)T(h,r,{});else return Ua(t,h,x?J:null,n),J=r.event=w.event,n=T(h,w,r),w.runner}else T(h,r,{});(p=r.structural)||
(p="animate"===r.event&&0<Object.keys(r.options.to||{}).length||k(r));if(!p)return I(),g(m),q;var C=(w.counter||0)+1;r.counter=C;l(m,1,r);d.$$postDigest(function(){h=Ha(a);var c=y.get(m),d=!c,c=c||{},t=0<(h.parent()||[]).length&&("animate"===c.event||c.structural||k(c));if(d||c.counter!==C||!t){d&&(W(h,n),ha(h,n));if(d||x&&c.event!==J)n.domOperation(),q.end();t||g(m)}else J=!c.structural&&k(c,!0)?"setClass":c.event,l(m,2),c=oa(h,J,c.options),q.setHost(c),e(q,J,"start",b(n)),c.done(function(a){I(!a);
(a=y.get(m))&&a.counter===C&&g(m);e(q,J,"close",b(n))})});return q}function F(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=y.get(a);if(c)switch(b){case 2:c.runner.end();case 1:y.delete(a)}})}function g(a){a.removeAttribute("data-ng-animate");y.delete(a)}function E(a,b,c){c=C[0].body;var l=K(e),g=a===c||"HTML"===a.nodeName,d=a===l,t=!1,m=O.get(a),h;for((a=A.data(a,"$ngAnimatePin"))&&(b=K(a));b;){d||(d=b===l);if(1!==b.nodeType)break;
a=y.get(b)||{};if(!t){var f=O.get(b);if(!0===f&&!1!==m){m=!0;break}else!1===f&&(m=!1);t=a.structural}if(R(h)||!0===h)a=A.data(b,"$$ngAnimateChildren"),za(a)&&(h=a);if(t&&!1===h)break;g||(g=b===c);if(g&&d)break;if(!d&&(a=A.data(b,"$ngAnimatePin"))){b=K(a);continue}b=b.parentNode}return(!t||h)&&!0!==m&&d&&g}function l(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);c=(b=y.get(a))?wa(b,c):c;y.set(a,c)}var y=new U,O=new U,B=null,P=d.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&
(P(),d.$$postDigest(function(){d.$$postDigest(function(){null===B&&(B=!0)})}))}),m=Object.create(null);U=a.customFilter();var la=a.classNameFilter();I=function(){return!0};var fa=U||I,Ya=la?function(a,b){var c=[a.getAttribute("class"),b.addClass,b.removeClass].join(" ");return la.test(c)}:I,W=aa(t),Oa=Y.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},D={on:function(a,b,c){var l=va(b);m[a]=m[a]||[];m[a].push({node:l,callback:c});A(b).on("$destroy",function(){y.get(l)||
D.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var l=m[a];l&&(m[a]=1===arguments.length?null:h(l,b,c))}else for(l in b=arguments[0],m)m[l]=h(m[l],b)},pin:function(a,b){Fa(sa(a),"element","not an element");Fa(sa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,l){c=c||{};c.domOperation=l;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!B;else if(sa(a)){var l=K(a);if(1===c)b=!O.get(l);else{if(!O.has(l))A(a).on("$destroy",
ia);O.set(l,!b)}}else b=B=!!a;return b}};return D}]}]).provider("$$animateCache",function(){var a=0,b=Object.create(null);this.$get=[function(){return{cacheKey:function(b,d,f,k){var e=b.parentNode;b=[e.$$ngAnimateParentKey||(e.$$ngAnimateParentKey=++a),d,b.getAttribute("class")];f&&b.push(f);k&&b.push(k);return b.join(" ")},containsCachedAnimationWithoutDuration:function(a){return(a=b[a])&&!a.isValid||!1},flush:function(){b=Object.create(null)},count:function(a){return(a=b[a])?a.total:0},get:function(a){return(a=
b[a])&&a.value},put:function(a,d,f){b[a]?(b[a].total++,b[a].value=d):b[a]={total:1,value:d,isValid:f}}}}]}).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler","$$animateCache",function(a,d,f,k,e,Q,L){function x(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;f.set(d,a);for(var h;t;){if(h=f.get(t)){h.processed||(h=b(h));break}t=t.parentNode}(h||
c).children.push(a);return a}var c={children:[]},d,f=new e;for(d=0;d<a.length;d++){var da=a[d];f.set(da.domNode,a[d]={domNode:da.domNode,element:da.element,fn:da.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var t=0,f=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=t,t=0,b.push(f),f=[]);f.push(g);g.children.forEach(function(a){t++;c.push(a)});a--}f.length&&b.push(f);return b}(c)}var C=[],U=aa(a);return function(e,
H,u){function t(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function I(a){var b=[],c={};s(a,function(a,d){var l=K(a.element),g=0<=["enter","move"].indexOf(a.event),l=a.structural?t(l):[];if(l.length){var f=g?"to":"from";s(l,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:A(a)}})}else b.push(a)});var d={},g={};s(c,function(c,
t){var f=c.from,e=c.to;if(f&&e){var h=a[f.animationID],k=a[e.animationID],E=f.animationID.toString();if(!g[E]){var I=g[E]={structural:!0,beforeStart:function(){h.beforeStart();k.beforeStart()},close:function(){h.close();k.close()},classes:da(h.classes,k.classes),from:h,to:k,anchors:[]};I.classes.length?b.push(I):(b.push(h),b.push(k))}g[E].anchors.push({out:f.element,"in":e.element})}else f=f?f.animationID:e.animationID,e=f.toString(),d[e]||(d[e]=!0,b.push(a[f]))});return b}function da(a,b){a=a.split(" ");
b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var g=a[d];if("ng-"!==g.substring(0,3))for(var t=0;t<b.length;t++)if(g===b[t]){c.push(g);break}}return c.join(" ")}function ia(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function v(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function ua(){var a=e.data("$$animationRunner");!a||"leave"===H&&u.$$domOperationFired||a.end()}function h(b){e.off("$destroy",
ua);e.removeData("$$animationRunner");U(e,u);ha(e,u);u.domOperation();E&&a.removeClass(e,E);F.complete(!b)}u=pa(u);var q=0<=["enter","move","leave"].indexOf(H),F=new k({end:function(){h()},cancel:function(){h(!0)}});if(!b.length)return h(),F;var g=Ga(e.attr("class"),Ga(u.addClass,u.removeClass)),E=u.tempClasses;E&&(g+=" "+E,u.tempClasses=null);q&&e.data("$$animatePrepareClasses","ng-"+H+"-prepare");e.data("$$animationRunner",F);C.push({element:e,classes:g,event:H,structural:q,options:u,beforeStart:function(){E=
(E?E+" ":"")+"ng-animate";a.addClass(e,E);var b=e.data("$$animatePrepareClasses");b&&a.removeClass(e,b)},close:h});e.on("$destroy",ua);if(1<C.length)return F;d.$$postDigest(function(){var b=[];s(C,function(a){a.element.data("$$animationRunner")?b.push(a):a.close()});C.length=0;var d=I(b),g=[];s(d,function(a){var b=a.from?a.from.element:a.element,c=u.addClass,d=L.cacheKey(b[0],a.event,(c?c+" ":"")+"ng-animate",u.removeClass);g.push({element:b,domNode:K(b),fn:function(){var b,c=a.close;if(L.containsCachedAnimationWithoutDuration(d))c();
else{a.beforeStart();if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var g=ia(a);g&&(b=g.start)}b?(b=b(),b.done(function(a){c(!a)}),v(a,b)):c()}}})});for(var d=x(g),t=0;t<d.length;t++)for(var f=d[t],e=0;e<f.length;e++){var h=f[e],k=h.element;d[t][e]=h.fn;0===t?k.removeData("$$animatePrepareClasses"):(h=k.data("$$animatePrepareClasses"))&&a.addClass(k,h)}Q(d)});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){this.$get=["$window","$$jqLite","$$AnimateRunner",
"$timeout","$$animateCache","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,c,d,f,k,e,Q,L,x){function C(d,f,e,x){var v,s="stagger-"+e;0<k.count(e)&&(v=k.get(s),v||(f=$(f,"-stagger"),c.addClass(d,f),v=Ka(a,d,x),v.animationDuration=Math.max(v.animationDuration,0),v.transitionDuration=Math.max(v.transitionDuration,0),c.removeClass(d,f),k.put(s,v,!0)));return v||{}}function U(a){u.push(a);L.waitUntilQuiet(function(){k.flush();for(var a=e(),b=0;b<u.length;b++)u[b](a);u.length=0})}
function z(c,d,f,e){d=k.get(f);d||(d=Ka(a,c,Wa),"infinite"===d.animationIterationCount&&(d.animationIterationCount=1));k.put(f,d,e||0<d.transitionDuration||0<d.animationDuration);c=d;f=c.animationDelay;e=c.transitionDelay;c.maxDelay=f&&e?Math.max(f,e):f||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var H=aa(c),u=[];return function(a,b){function e(){v()}function L(){v(!0)}function v(b){if(!(P||la&&m)){P=!0;m=!1;V&&!g.$$skipPreparationClasses&&
c.removeClass(a,V);ba&&c.removeClass(a,ba);xa(l,!1);ra.blockTransitions(l,!1);s(y,function(a){l.style[a[0]]=""});H(a,g);ha(a,g);Object.keys(E).length&&s(E,function(a,b){a?l.style.setProperty(b,a):l.style.removeProperty(b)});if(g.onDone)g.onDone();w&&w.length&&a.off(w.join(" "),q);var d=a.data("$$animateCss");d&&(f.cancel(d[0].timer),a.removeData("$$animateCss"));fa&&fa.complete(!b)}}function u(a){p.blockTransition&&ra.blockTransitions(l,a);p.blockKeyframeAnimation&&xa(l,!!a)}function h(){fa=new d({end:e,
cancel:L});U(N);v();return{$$willAnimate:!1,start:function(){return fa},end:e}}function q(a){a.stopPropagation();var b=a.originalEvent||a;b.target===l&&(a=b.$manualTimeStamp||Date.now(),b=parseFloat(b.elapsedTime.toFixed(3)),Math.max(a-J,0)>=G&&b>=D&&(la=!0,v()))}function F(){function b(){if(!P){u(!1);s(y,function(a){l.style[a[0]]=a[1]});H(a,g);c.addClass(a,ba);if(p.recalculateTimingStyles){T=l.getAttribute("class")+" "+V;ka=k.cacheKey(l,ja,g.addClass,g.removeClass);r=z(l,T,ka,!1);ga=r.maxDelay;W=
Math.max(ga,0);D=r.maxDuration;if(0===D){v();return}p.hasTransitions=0<r.transitionDuration;p.hasAnimations=0<r.animationDuration}p.applyAnimationDelay&&(ga="boolean"!==typeof g.delay&&ya(g.delay)?parseFloat(g.delay):ga,W=Math.max(ga,0),r.animationDelay=ga,ea=[qa,ga+"s"],y.push(ea),l.style[ea[0]]=ea[1]);G=1E3*W;R=1E3*D;if(g.easing){var e,h=g.easing;p.hasTransitions&&(e=M+"TimingFunction",y.push([e,h]),l.style[e]=h);p.hasAnimations&&(e=ca+"TimingFunction",y.push([e,h]),l.style[e]=h)}r.transitionDuration&&
w.push(Aa);r.animationDuration&&w.push(Ba);J=Date.now();var m=G+1.5*R;e=J+m;var h=a.data("$$animateCss")||[],F=!0;if(h.length){var n=h[0];(F=e>n.expectedEndTime)?f.cancel(n.timer):h.push(v)}F&&(m=f(d,m,!1),h[0]={timer:m,expectedEndTime:e},h.push(v),a.data("$$animateCss",h));if(w.length)a.on(w.join(" "),q);g.to&&(g.cleanupStyles&&Ma(E,l,Object.keys(g.to)),Ja(a,g))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}if(!P)if(l.parentNode){var e=
function(a){if(la)m&&a&&(m=!1,v());else if(m=!a,r.animationDuration)if(a=xa(l,m),m)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},h=0<aa&&(r.transitionDuration&&0===X.transitionDuration||r.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);h?f(b,Math.floor(h*aa*1E3),!1):b();A.resume=function(){e(!0)};A.pause=function(){e(!1)}}else v()}var g=b||{};g.$$prepared||(g=pa(Da(g)));var E={},l=K(a);if(!l||!l.parentNode||!x.enabled())return h();var y=[],O=
a.attr("class"),B=Qa(g),P,m,la,fa,A,W,G,D,R,J,w=[];if(0===g.duration||!Q.animations&&!Q.transitions)return h();var ja=g.event&&Z(g.event)?g.event.join(" "):g.event,Y=ja&&g.structural,n="",S="";Y?n=$(ja,"ng-",!0):ja&&(n=ja);g.addClass&&(S+=$(g.addClass,"-add"));g.removeClass&&(S.length&&(S+=" "),S+=$(g.removeClass,"-remove"));g.applyClassesEarly&&S.length&&H(a,g);var V=[n,S].join(" ").trim(),T=O+" "+V,O=B.to&&0<Object.keys(B.to).length;if(!(0<(g.keyframeStyle||"").length||O||V))return h();var X,ka=
k.cacheKey(l,ja,g.addClass,g.removeClass);if(k.containsCachedAnimationWithoutDuration(ka))return V=null,h();0<g.stagger?(B=parseFloat(g.stagger),X={transitionDelay:B,animationDelay:B,transitionDuration:0,animationDuration:0}):X=C(l,V,ka,Xa);g.$$skipPreparationClasses||c.addClass(a,V);g.transitionStyle&&(B=[M,g.transitionStyle],ma(l,B),y.push(B));0<=g.duration&&(B=0<l.style[M].length,B=La(g.duration,B),ma(l,B),y.push(B));g.keyframeStyle&&(B=[ca,g.keyframeStyle],ma(l,B),y.push(B));var aa=X?0<=g.staggerIndex?
g.staggerIndex:k.count(ka):0;(n=0===aa)&&!g.skipBlocking&&ra.blockTransitions(l,9999);var r=z(l,T,ka,!Y),ga=r.maxDelay;W=Math.max(ga,0);D=r.maxDuration;var p={};p.hasTransitions=0<r.transitionDuration;p.hasAnimations=0<r.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"===r.transitionProperty;p.applyTransitionDuration=O&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=g.duration&&p.hasAnimations;p.applyTransitionDelay=ya(g.delay)&&(p.applyTransitionDuration||
p.hasTransitions);p.applyAnimationDelay=ya(g.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<S.length;if(p.applyTransitionDuration||p.applyAnimationDuration)D=g.duration?parseFloat(g.duration):D,p.applyTransitionDuration&&(p.hasTransitions=!0,r.transitionDuration=D,B=0<l.style[M+"Property"].length,y.push(La(D,B))),p.applyAnimationDuration&&(p.hasAnimations=!0,r.animationDuration=D,y.push([Ca,D+"s"]));if(0===D&&!p.recalculateTimingStyles)return h();var ba=$(V,"-active");if(null!=g.delay){var ea;
"boolean"!==typeof g.delay&&(ea=parseFloat(g.delay),W=Math.max(ea,0));p.applyTransitionDelay&&y.push([na,ea+"s"]);p.applyAnimationDelay&&y.push([qa,ea+"s"])}null==g.duration&&0<r.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||n);G=1E3*W;R=1E3*D;g.skipBlocking||(p.blockTransition=0<r.transitionDuration,p.blockKeyframeAnimation=0<r.animationDuration&&0<X.animationDelay&&0===X.animationDuration);g.from&&(g.cleanupStyles&&Ma(E,l,Object.keys(g.from)),Ia(a,g));p.blockTransition||
p.blockKeyframeAnimation?u(D):g.skipBlocking||ra.blockTransitions(l,!1);return{$$willAnimate:!0,end:e,start:function(){if(!P)return A={end:e,cancel:L,resume:null,pause:null},fa=new d(A),U(F),fa}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,k,e,Q){function L(a){return a.replace(/\bng-\S+\b/g,"")}function x(a,b){G(a)&&
(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function C(c,e,f){function k(a){var b={},c=K(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=H.scrollTop;break;case "left":d+=H.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function v(){var c=L(f.attr("class")||""),d=x(c,q),c=x(q,c),d=a(h,{to:k(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?
d:null}function C(){h.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim")}var h=A(K(e).cloneNode(!0)),q=L(h.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");h.addClass("ng-anchor");u.append(h);var F;c=function(){var c=a(h,{addClass:"ng-anchor-out",delay:!0,from:k(e)});return c.$$willAnimate?c:null}();if(!c&&(F=v(),!F))return C();var g=c||F;return{start:function(){function a(){c&&c.end()}var b,c=g.start();c.done(function(){c=null;if(!F&&(F=v()))return c=
F.start(),c.done(function(){c=null;C();b.complete()}),c;C();b.complete()});return b=new d({end:a,cancel:a})}}}function z(a,b,c,e){var f=oa(a,N),k=oa(b,N),h=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&h.push(a)});if(f||k||0!==h.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());k&&b.push(k.start());s(h,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function oa(c){var d=c.element,e=c.options||
{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=ba(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!k.animations&&!k.transitions)return N;var H=Q[0].body;c=K(f);var u=A(c.parentNode&&11===c.parentNode.nodeType||H.contains(c)?c:H);return function(a){return a.from&&a.to?z(a.from,a.to,a.classes,a.anchors):oa(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=
["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=Z(c)?c:c.split(" ");for(var d=[],f={},k=0;k<c.length;k++){var s=c[k],z=a.$$registeredAnimations[s];z&&!f[s]&&(d.push(b.get(z)),f[s]=!0)}return d}var k=aa(d);return function(a,b,d,x){function C(){x.domOperation();k(a,x)}function z(a,b,d,f,e){switch(d){case "animate":b=[b,f.from,f.to,e];break;case "setClass":b=[b,t,I,e];break;case "addClass":b=[b,t,e];break;case "removeClass":b=[b,I,e];break;default:b=[b,e]}b.push(f);if(a=a.apply(a,
b))if(Ea(a.start)&&(a=a.start()),a instanceof c)a.done(e);else if(Ea(a))return a;return N}function A(a,b,d,e,f){var h=[];s(e,function(e){var l=e[f];l&&h.push(function(){var e,f,h=!1,k=function(a){h||(h=!0,(f||N)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=z(l,a,b,d,function(a){k(!1===a)});return e})});return h}function H(a,b,d,e,f){var h=A(a,b,d,e,f);if(0===h.length){var k,q;"beforeSetClass"===f?(k=A(a,"removeClass",d,e,"beforeRemoveClass"),q=A(a,"addClass",d,e,"beforeAddClass")):
"setClass"===f&&(k=A(a,"removeClass",d,e,"removeClass"),q=A(a,"addClass",d,e,"addClass"));k&&(h=h.concat(k));q&&(h=h.concat(q))}if(0!==h.length)return function(a){var b=[];h.length&&s(h,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var u=!1;3===arguments.length&&ta(d)&&(x=d,d=null);x=pa(x);d||(d=a.attr("class")||"",x.addClass&&(d+=" "+x.addClass),x.removeClass&&(d+=" "+x.removeClass));var t=x.addClass,I=x.removeClass,G=f(d),K,v;if(G.length){var M,
h;"leave"===b?(h="leave",M="afterLeave"):(h="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(K=H(a,b,x,G,h));v=H(a,b,x,G,M)}if(K||v){var q;return{$$willAnimate:!0,end:function(){q?q.end():(u=!0,C(),ha(a,x),q=new c,q.complete(!0));return q},start:function(){function b(c){u=!0;C();ha(a,x);q.complete(c)}if(q)return q;q=new c;var d,f=[];K&&f.push(function(a){d=K(a)});f.length?f.push(function(a){C();a(!0)}):C();v&&f.push(function(a){d=v(a)});q.setHost({end:function(){u||((d||
N)(void 0),b(void 0))},cancel:function(){u||((d||N)(!0),b(!0))}});c.chain(f,b);return q}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),e=d(a.to);if(b||e)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());e&&
d.push(e.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

!function(){"use strict";function t(t,e,s,n,o,r,a){function i(){return w.length}function l(t){if(1!==arguments.length||t)if(t)m(t.toastId);else for(var e=0;e<w.length;e++)m(w[e].toastId)}function c(t,e,s){var n=v().iconClasses.error;return f(n,t,e,s)}function u(t,e,s){var n=v().iconClasses.info;return f(n,t,e,s)}function p(t,e,s){var n=v().iconClasses.success;return f(n,t,e,s)}function g(t,e,s){var n=v().iconClasses.warning;return f(n,t,e,s)}function d(t,e){t&&t.isOpened&&w.indexOf(t)>=0&&t.scope.refreshTimer(e)}function m(e,s){function n(t){for(var e=0;e<w.length;e++)if(w[e].toastId===t)return w[e]}function o(){return!w.length}var i=n(e);i&&!i.deleting&&(i.deleting=!0,i.isOpened=!1,t.leave(i.el).then(function(){i.scope.options.onHidden&&i.scope.options.onHidden(!!s,i),i.scope.$destroy();var t=w.indexOf(i);delete x[i.scope.message],w.splice(t,1);var e=r.maxOpened;e&&w.length>=e&&w[e-1].open.resolve(),o()&&(O.remove(),O=null,$=a.defer())}))}function f(t,e,s,n){return angular.isObject(s)&&(n=s,s=null),C({iconClass:t,message:e,optionsOverride:n,title:s})}function v(){return angular.extend({},r)}function h(e){if(O)return $.promise;O=angular.element("<div></div>"),O.attr("id",e.containerId),O.addClass(e.positionClass),O.css({"pointer-events":"auto"});var s=angular.element(document.querySelector(e.target));if(!s||!s.length)throw"Target for toasts doesn't exist";return t.enter(O,s).then(function(){$.resolve()}),$.promise}function C(s){function r(){return g.autoDismiss&&g.maxOpened&&w.length>g.maxOpened}function i(t,e,s){function n(e){if(s[e])return function(){s[e](t)}}s.allowHtml?(t.scope.allowHtml=!0,t.scope.title=o.trustAsHtml(e.title),t.scope.message=o.trustAsHtml(e.message)):(t.scope.title=e.title,t.scope.message=e.message),t.scope.toastType=t.iconClass,t.scope.toastId=t.toastId,t.scope.extraData=s.extraData,t.scope.options={extendedTimeOut:s.extendedTimeOut,messageClass:s.messageClass,onHidden:s.onHidden,onShown:n("onShown"),onTap:n("onTap"),progressBar:s.progressBar,tapToDismiss:s.tapToDismiss,timeOut:s.timeOut,titleClass:s.titleClass,toastClass:s.toastClass},s.closeButton&&(t.scope.options.closeHtml=s.closeHtml)}function l(){function t(t){for(var e=["containerId","iconClasses","maxOpened","newestOnTop","positionClass","preventDuplicates","preventOpenDuplicates","templates"],s=0,n=e.length;s<n;s++)delete t[e[s]];return t}var e={toastId:T++,isOpened:!1,scope:n.$new(),open:a.defer()};return e.iconClass=s.iconClass,s.optionsOverride&&(angular.extend(g,t(s.optionsOverride)),e.iconClass=s.optionsOverride.iconClass||e.iconClass),i(e,s,g),e.el=c(e.scope),e}function c(t){var s=angular.element("<div toast></div>"),n=e.get("$compile");return n(s)(t)}function u(){return g.maxOpened&&w.length<=g.maxOpened||!g.maxOpened}function p(){var t=g.preventDuplicates&&s.message===B,e=g.preventOpenDuplicates&&x[s.message];return!(!t&&!e)||(B=s.message,x[s.message]=!0,!1)}var g=v();if(!p()){var d=l();if(w.push(d),r())for(var f=w.slice(0,w.length-g.maxOpened),C=0,$=f.length;C<$;C++)m(f[C].toastId);return u()&&d.open.resolve(),d.open.promise.then(function(){h(g).then(function(){if(d.isOpened=!0,g.newestOnTop)t.enter(d.el,O).then(function(){d.scope.init()});else{var e=O[0].lastChild?angular.element(O[0].lastChild):null;t.enter(d.el,O,e).then(function(){d.scope.init()})}})}),d}}var O,T=0,w=[],B="",x={},$=a.defer(),b={active:i,clear:l,error:c,info:u,remove:m,success:p,warning:g,refreshTimer:d};return b}angular.module("toastr",[]).factory("toastr",t),t.$inject=["$animate","$injector","$document","$rootScope","$sce","toastrConfig","$q"]}(),function(){"use strict";angular.module("toastr").constant("toastrConfig",{allowHtml:!1,autoDismiss:!1,closeButton:!1,closeHtml:"<button>&times;</button>",containerId:"toast-container",extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},maxOpened:0,messageClass:"toast-message",newestOnTop:!0,onHidden:null,onShown:null,onTap:null,positionClass:"toast-top-right",preventDuplicates:!1,preventOpenDuplicates:!1,progressBar:!1,tapToDismiss:!0,target:"body",templates:{toast:"directives/toast/toast.html",progressbar:"directives/progressbar/progressbar.html"},timeOut:5e3,titleClass:"toast-title",toastClass:"toast"})}(),function(){"use strict";function t(t){function e(t,e,s,n){function o(){var t=(i-(new Date).getTime())/a*100;e.css("width",t+"%")}var r,a,i;n.progressBar=t,t.start=function(t){r&&clearInterval(r),a=parseFloat(t),i=(new Date).getTime()+a,r=setInterval(o,10)},t.stop=function(){r&&clearInterval(r)},t.$on("$destroy",function(){clearInterval(r)})}return{require:"^toast",templateUrl:function(){return t.templates.progressbar},link:e}}angular.module("toastr").directive("progressBar",t),t.$inject=["toastrConfig"]}(),function(){"use strict";function t(){this.progressBar=null,this.startProgressBar=function(t){this.progressBar&&this.progressBar.start(t)},this.stopProgressBar=function(){this.progressBar&&this.progressBar.stop()}}angular.module("toastr").controller("ToastController",t)}(),function(){"use strict";function t(t,e,s,n){function o(s,o,r,a){function i(t){return a.startProgressBar(t),e(function(){a.stopProgressBar(),n.remove(s.toastId)},t,1)}function l(){s.progressBar=!1,a.stopProgressBar()}function c(){return s.options.closeHtml}var u;if(s.toastClass=s.options.toastClass,s.titleClass=s.options.titleClass,s.messageClass=s.options.messageClass,s.progressBar=s.options.progressBar,c()){var p=angular.element(s.options.closeHtml),g=t.get("$compile");p.addClass("toast-close-button"),p.attr("ng-click","close(true, $event)"),g(p)(s),o.children().prepend(p)}s.init=function(){s.options.timeOut&&(u=i(s.options.timeOut)),s.options.onShown&&s.options.onShown()},o.on("mouseenter",function(){l(),u&&e.cancel(u)}),s.tapToast=function(){angular.isFunction(s.options.onTap)&&s.options.onTap(),s.options.tapToDismiss&&s.close(!0)},s.close=function(t,e){e&&angular.isFunction(e.stopPropagation)&&e.stopPropagation(),n.remove(s.toastId,t)},s.refreshTimer=function(t){u&&(e.cancel(u),u=i(t||s.options.timeOut))},o.on("mouseleave",function(){0===s.options.timeOut&&0===s.options.extendedTimeOut||(s.$apply(function(){s.progressBar=s.options.progressBar}),u=i(s.options.extendedTimeOut))})}return{templateUrl:function(){return s.templates.toast},controller:"ToastController",link:o}}angular.module("toastr").directive("toast",t),t.$inject=["$injector","$interval","toastrConfig","toastr"]}(),angular.module("toastr").run(["$templateCache",function(t){t.put("directives/progressbar/progressbar.html",'<div class="toast-progress"></div>\n'),t.put("directives/toast/toast.html",'<div class="{{toastClass}} {{toastType}}" ng-click="tapToast()">\n  <div ng-switch on="allowHtml">\n    <div ng-switch-default ng-if="title" class="{{titleClass}}" aria-label="{{title}}">{{title}}</div>\n    <div ng-switch-default class="{{messageClass}}" aria-label="{{message}}">{{message}}</div>\n    <div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div>\n    <div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div>\n  </div>\n  <progress-bar ng-if="progressBar"></progress-bar>\n</div>\n')}]);