// { "framework": "Vue" }

!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){var i,o,r=[];r.push(n(4)),i=n(3);var a=n(5);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-8eab174e",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n.n(i);o.a.el="#app",new Vue(o.a)},function(t,e,n){"use strict";function i(t,e){var n=e.body,i=e.onSuccess,o=e.onFail,r=e.context;t&&"function"==typeof t?t(n,function(t){if(void 0!==t&&t.__status__){var e=t.__status__,n=t.__message__;"1"===e?i&&i.call(r,n):"2"===e&&o&&o.call(r,n)}else o&&o.call("-1","")}):o&&o.call("-1","")}function o(t,e){var n=e.body,i=e.onSuccess,o=e.onFail,r=e.context;t&&"function"==typeof t?t(n,function(t){void 0!==t?"0"===t.errorCode?i&&i.call(r,t.result):o&&o.call(r,t.result):o&&o.call("-1","")}):o&&o.call("-1","")}function r(t){var e=h||function(){};"iOS"===X?o(e,t):"android"===X&&i(e,t)}function a(t){var e=t.factory;return t.__nuva_exports__={},delete t.factory,e(c,t.__nuva_exports__,t),t.__nuva_exports__}function c(t){if(!y[t])throw"__nuva_module__ "+t+" not found";if(t in w)throw"Cycle in require graph: "+b.slice(w[t]).join("->")+"->"+t;if(y[t].factory)try{return w[t]=b.length,b.push(t),a(y[t])}finally{delete w[t],b.pop()}return y[t].__nuva_exports__}function s(t,e){if(y[t])throw"module "+t+" already defined";y[t]={id:t,factory:e}}function u(t,e){for(var n=e||0,i=t.length-n,o=new Array(i);i--;)o[i]=t[i+n];return o}function l(t){for(var e in t){var n=t[e];!function(t,e){s(t,function(n,i,o){var a={};a._name=t;for(var c in e){var s=e[c];a[s]=function(e){return function(n){n||(n={});var i=n.onSuccess,o=n.onFail;return delete n.onSuccess,delete n.onFail,delete n.onCancel,r({body:{plugin:t,action:e,args:n},onSuccess:i,onFail:o})}}(s)}o.__nuva_exports__=a})}(e,n)}}function f(t){return function(e){r({body:{plugin:"runtime",action:t,args:{}},onSuccess:function(t){"function"==typeof e&&e(t)},onFail:function(){},context:null})}}function d(t){f("getModules")(t)}function p(t,e,n){if(!e)return void t(null);R.ready(function(){var i=R.require(B),o=e||{},r=n||null;o.onSuccess=function(e){t(null,e)},o.onFail=function(e){"function"==typeof r?r(e):t(e,null)},i.requestJsApis(o)})}function m(t){var e={};for(var n in t)for(var i=n.split("."),o=null,r=0,a=i.length;;)if(o){if(a-1===r){o[i[r]]=R.require(n);break}o[i[r]]?r++:(o[i[r]]={},o=o[i[r]],r++)}else{if(1===a){e[i[r]]=R.require(n);break}if(e[i[r]]){o=e[i[r]],r++;continue}e[i[r]]={},o=e[i[r]],r++}return e}function v(t){t.on=function(t,e,n){document.addEventListener(t,e,n)},t.off=function(t,e,n){document.removeEventListener(t,e,n)}}function g(t){t.apis=t}function _(){q&&q.length>0&&(q.forEach(function(t){t()}),q.length=0)}var X=weex.config.env.platform,h=null;"Web"!==X&&(h=weex.requireModule("nuvajs-exec").exec);var y={},b=[],w={},x={},C={on:function(t,e){var n=x[t];n?n.push(e):x[t]=[],n||x[t].push(e)},off:function(t,e){var n=x[t];if(!n)return!1;if(!t&&!e)return x={},!0;if(t&&!e)return x[t]=null,!0;for(var i=void 0,o=n.length;o--;)if((i=n[o])===e||i.fun===e){n.splice(o,1);break}return!0},once:function(t,e){function n(){C.off(t,n),e.apply(this,arguments)}n.fun=e,C.on(t,n)},emit:function(t){if("string"==typeof t){var e=x[t],n=u(arguments,1);if(e)for(var i=0,o=e.length;i<o;i++){var r=e[i];r.apply(this,n)}}}},S=weex.config.env.platform,k={};"Web"!==S&&(k=weex.requireModule("globalEvent"));var R={getModules:null,isReady:!1,define:s,require:function(t){return t?c(t):r},runtime:{info:f("info"),_interceptBackButton:f("interceptBackButton"),_interceptNavTitle:f("interceptNavTitle"),_recoverNavTitle:f("recoverNavTitle"),_getModules:f("getModules")},init:function(){d(function(t){t&&(l(t),R.isReady=!0,R.getModules=t,C.emit("__nuva_ready__"))})},ready:function(t){R.isReady?"function"==typeof t&&t():"function"==typeof t&&C.once("__nuva_ready__",function(){t()})},on:function(t,e){k.addEventListener(t,function(t){var n={preventDefault:function(){console.warn("当前环境不支持 preventDefault")},detail:t};e.call(this,n)})},off:k.removeEventListener,EventEmitter:C},B="runtime.permission",T={warn:function(t,e){if(console.warn("[DINGTALK JS SDK Warning]:",t),e)throw e;var n=new Error("WARNING STACK TRACE");console.warn(n.stack)},info:function(t){console.info("[DINGTALK JS SDK INFO]:",t)},error:function(t){console.error("[DINGTALK JS SDK ERROR]:",t)}},E=null,q=null,L=null,M=!0,O=weex.config.env.platform,D={},F={isSync:!1,apis:{},config:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){if(!t)return void T.warn("config is undefined,you must configure Dingtalk parameters");E=t}),init:function(){q=[],R.init(),R.ready(function(){F.isSync=!0,F.apis=m(R.getModules?R.getModules:{}),_()})},ready:function(t){if(!t||"function"!=typeof t)return void T.warn("callback is undefined");F.isSync?p(t,E,L):q&&q.push(function(t){return function(){p(t,E,L)}}(t))},error:function(t){"function"==typeof t&&(L=t)},on:R.on,off:R.off};if(M)switch(M=!1,O){case"Web":D=function(){var t=function(){return function(){return window||this}()}();if(!t.dd)throw console.error("Not Found Dingtalk.js"),new Error;return v(t.dd),g(t.dd),t.dd}();break;default:D=F,F.init()}var N=D;t.exports=N},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n.n(i);weex.requireModule("modal");e.default={name:"home",data:function(){return{linkUrl:"https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653",imgUrl:"https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png"}},mounted:function(){o.a.ready(function(){o.a.apis.biz.navigation.setTitle({title:"Paytm"})})},methods:{onLinkImageUrl:function(){var t=this.linkUrl;o.a.ready(function(){o.a.apis.biz.util.openLink({url:t})})}}}},function(t,e){t.exports={wrapper:{backgroundColor:"#eeeeee",width:750},banner:{width:750,marginBottom:17},"banner-image":{width:750,height:220},"apps-title-container":{width:750,height:45,backgroundColor:"#ffffff",borderTopStyle:"solid",borderTopWidth:1,borderTopColor:"#eeeeee",borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"#eeeeee"},"apps-title":{fontSize:18,paddingLeft:10,lineHeight:45},"apps-container":{width:750,backgroundColor:"#ffffff",flexDirection:"row",flexWrap:"wrap"},"app-item":{width:187.5,borderRightStyle:"solid",borderRightColor:"#eeeeee",borderRightWidth:1,position:"relative",borderBottomColor:"#eeeeee",borderBottomWidth:1,borderBottomStyle:"solid"},"item-image-container":{position:"relative",marginLeft:56.25,marginRight:56.25,marginBottom:10,marginTop:30,width:75,height:75,overflow:"hidden",backgroundColor:"#f8f8f8"},"item-image-radius":{width:75,height:75,borderRadius:15},"item-image":{width:75,height:75,borderRadius:15},"item-text":{textAlign:"center",color:"#323334",fontSize:26,marginBottom:32}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("div",{staticClass:["banner"]},[n("image",{staticClass:["banner-image"],attrs:{src:t.imgUrl},on:{click:t.onLinkImageUrl}})]),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["apps"]},[n("div",{staticClass:["apps-title-container"]},[n("text",{staticClass:["apps-title"]},[t._v("Paytm Apps")])]),n("div",{staticClass:["apps-container"]},[n("div",{staticClass:["app-item"]},[n("div",{staticClass:["item-image-container"]},[n("div",{staticClass:["item-image-radius"]},[n("image",{staticClass:["item-image"],attrs:{src:"https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"}})])]),n("text",{staticClass:["item-text"]},[t._v("Leave")])]),n("div",{staticClass:["app-item"]},[n("div",{staticClass:["item-image-container"]},[n("image",{staticClass:["item-image"],attrs:{src:"https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"}})]),n("text",{staticClass:["item-text"]},[t._v("Reimbursement")])]),n("div",{staticClass:["app-item"]},[n("div",{staticClass:["item-image-container"]},[n("image",{staticClass:["item-image"],attrs:{src:"https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"}})]),n("text",{staticClass:["item-text"]},[t._v("Daily Report")])]),n("div",{staticClass:["app-item"]},[n("div",{staticClass:["item-image-container"]},[n("image",{staticClass:["item-image"],attrs:{src:"https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"}})]),n("text",{staticClass:["item-text"]},[t._v("Weekly Report")])])])])}]}}]);