!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueMessage",[],t):"object"==typeof exports?exports.VueMessage=t():e.VueMessage=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a={showToast:!1,showToastNew:null,time:null,install:function(e,t){"undefined"!=typeof window&&window.Vue&&(e=window.Vue),e.component("Toast",o.a),e.prototype.$toast=function(n,o){var s={text:"Hello World",position:"bottom",duration:3e3,background:"rgba(7,17,27,0.8)"};for(var i in t)s[i]=t[i];(void 0===n?"undefined":r(n))!==Object&&(s.text=n?n||"Hello World":t.text||s.text);for(var u in n)s[u]=n[u];if((a.showToast||a.showToastNew)&&(clearTimeout(a.time),a.showToast=!1,document.body.removeChild(a.showToastNew.$mount().$el),a.showToastNew=null),!a.showToastNew){var f=e.extend({template:'<transition name=fade-up><div class="vue-toast '+s.position+'" style="background:'+s.background+'" v-show="isShow">'+s.text+"<toast></toast></div></transition>",data:function(){return{isShow:a.showToast}}});a.showToastNew=new f;var c=a.showToastNew.$mount().$el;document.body.appendChild(c),a.showToastNew.isShow=a.showToast=!0}a.time=setTimeout(function(){a.showToastNew.isShow=a.showToast=!1},s.duration),"function"==typeof o&&o()}}};t.default=a},function(e,t,n){"use strict";function o(e){n(2)}var r=n(8),a=n(9),s=n(7),i=o,u=s(r.a,a.a,!1,i,null,null);t.a=u.exports},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("42e99d20",o,!0)},function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,".vue-toast{position:fixed;background:rgba(0,0,0,.3);font-size:14px;color:#fff;line-height:1.5;padding:3px 10px;width:auto;border-radius:6px;max-width:300px;display:inline-block;user-select:none;word-wrap:break-word;opacity:1;z-index:10000000;cursor:default}.vue-toast.bottom{bottom:10%;left:50%;transform:translate(-50%)}.vue-toast.bottom.fade-up-enter{opacity:0;transform:translate(-50%,10px)}.vue-toast.center{top:50%;left:50%;transform:translate(-50%,-50%)}.vue-toast.center.fade-up-enter{opacity:0;transform:translate(-50%,calc(-50% + 10px))}.vue-toast.top{top:10%;left:50%;transform:translate(-50%)}.vue-toast.top.fade-up-enter{opacity:0;transform:translate(-50%,10px)}.vue-toast.fade-up-enter-to,.vue-toast.fade-up-leave-to{transition:all .3s ease}.vue-toast.fade-up-leave-to{opacity:0}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(m){var a=l++;o=p||(p=r()),t=s.bind(null,o,a,!1),n=s.bind(null,o,a,!0)}else o=r(),t=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var a=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f=n(6),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var r=f(e,t);return o(r),function(t){for(var n=[],a=0;a<r.length;a++){var s=r[a],i=c[s.id];i.refs--,n.push(i)}t?(r=f(e,t),o(r)):r=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete c[i.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],s=a[0],i=a[1],u=a[2],f=a[3],c={id:e+":"+r,css:i,media:u,sourceMap:f};o[s]?o[s].parts.push(c):n.push(o[s]={id:s,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,o,r,a){var s,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,i=e.default);var f="function"==typeof i?i.options:i;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId=r);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},f._ssrRegister=c):o&&(c=o),c){var d=f.functional,p=d?f.render:f.beforeCreate;d?(f._injectStyles=c,f.render=function(e,t){return c.call(t),p(e,t)}):f.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:i,options:f}}},function(e,t,n){"use strict";t.a={}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},r=[],a={render:o,staticRenderFns:r};t.a=a}])});
//# sourceMappingURL=vue-message.js.map