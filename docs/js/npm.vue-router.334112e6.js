(self.webpackChunk_learn_note=self.webpackChunk_learn_note||[]).push([[74],{2119:function(e,t,r){"use strict";r.d(t,{p7:function(){return Se},r5:function(){return E}});var _=r(6252),F=r(2262);
/*!
  * vue-router v4.0.6
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;var f,p,n=e=>c?Symbol(e):"_vr_"+e;const o=n("rvlm"),a=n("rvd"),L=n("r"),B=n("rl"),U=n("rvl"),G="undefined"!=typeof window;const M=Object.assign;function I(e,t){const r={};for(const n in t){const o=t[n];r[n]=Array.isArray(o)?o.map(e):e(o)}return r}let T=()=>{};const l=/\/$/,i=e=>e.replace(l,"");function J(e,t,r="/"){let n,o={},a="",l="";var i=t.indexOf("?"),s=t.indexOf("#",-1<i?i:0);return-1<i&&(n=t.slice(0,i),a=t.slice(i+1,-1<s?s:t.length),o=e(a)),-1<s&&(n=n||t.slice(0,s),l=t.slice(s,t.length)),n=function(e,t){if(e.startsWith("/"))return e;0;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,a,l;for(a=0;a<n.length;a++)if(l=n[a],1!==o&&"."!==l){if(".."!==l)break;o--}return r.slice(0,o).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}(null!=n?n:t,r),{fullPath:n+(a&&"?")+a+l,path:n,query:o,hash:l}}function s(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function D(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function V(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e)if(n=e[r],r=t[r],!(Array.isArray(n)?u(n,r):Array.isArray(r)?u(r,n):n===r))return!1;var n;return!0}function u(e,r){return Array.isArray(r)?e.length===r.length&&e.every((e,t)=>e===r[t]):1===e.length&&e[0]===r}(t=f=f||{}).pop="pop",t.push="push",(t=p=p||{}).back="back",t.forward="forward";t.unknown="";const h=/^[^#]+#/;function d(e,t){return e.replace(h,"#")+t}const W=()=>({left:window.pageXOffset,top:window.pageYOffset});function z(t){let r;if("el"in t){let e=t.el;var n="string"==typeof e&&e.startsWith("#");0;var o="string"==typeof e?n?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!o)return;r=(a=o,n=t,o=document.documentElement.getBoundingClientRect(),a=a.getBoundingClientRect(),{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)})}else r=t;var a;"scrollBehavior"in document.documentElement.style?window.scrollTo(r):window.scrollTo(null!=r.left?r.left:window.pageXOffset,null!=r.top?r.top:window.pageYOffset)}function H(e,t){return(history.state?history.state.position-t:-1)+e}const K=new Map;let v=()=>location.protocol+"//"+location.host;function m(e,t){const{pathname:r,search:n,hash:o}=t;if(-1<e.indexOf("#")){let e=o.slice(1);return"/"!==e[0]&&(e="/"+e),s(e,"")}return s(r,e)+n+o}function g(a,l,i,s){let c=[],r=[],u=null;const t=({state:e})=>{var t=m(a,location);const r=i.value;var n=l.value;let o=0;if(e){if(i.value=t,l.value=e,u&&u===r)return void(u=null);o=n?e.position-n.position:0}else s(t);c.forEach(e=>{e(i.value,r,{delta:o,type:f.pop,direction:o?0<o?p.forward:p.back:p.unknown})})};function n(){const{history:e}=window;e.state&&e.replaceState(M({},e.state,{scroll:W()}),"")}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",n),{pauseListeners:function(){u=i.value},listen:function(t){c.push(t);var e=()=>{var e=c.indexOf(t);-1<e&&c.splice(e,1)};return r.push(e),e},destroy:function(){for(const e of r)e();r=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",n)}}}function y(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?W():null}}function b(o){const{history:a,location:l}=window;let n={value:m(o,l)},i={value:a.state};function s(t,e,r){var n=o.indexOf("#"),t=-1<n?(l.host&&document.querySelector("base")?o:o.slice(n))+t:v()+o+t;try{a[r?"replaceState":"pushState"](e,"",t),i.value=e}catch(e){console.error(e),l[r?"replace":"assign"](t)}}return i.value||s(n.value,{back:null,current:n.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0),{location:n,state:i,push:function(e,t){var r=M({},i.value,a.state,{forward:e,scroll:W()});s(r.current,r,!0),s(e,M({},y(n.value,e,null),{position:r.position+1},t),!1),n.value=e},replace:function(e,t){s(e,M({},a.state,y(i.value.back,e,i.value.forward,!0),t,{position:i.value.position}),!0),n.value=e}}}function w(e){const t=b(e=function(e){if(!e)if(G){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),i(e)}(e)),r=g(e,t.state,t.location,t.replace);e=M({location:"",base:e,go:function(e,t=!0){t||r.pauseListeners(),history.go(e)},createHref:d.bind(null,e)},t,r);return Object.defineProperty(e,"location",{get:()=>t.location.value}),Object.defineProperty(e,"state",{get:()=>t.state.value}),e}function E(e){return(e=location.host?e||location.pathname+location.search:"").indexOf("#")<0&&(e+="#"),w(e)}function Y(e){return"string"==typeof e||"symbol"==typeof e}const X={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},k=n("nf");(n={})[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated";function Z(e,t){return M(new Error,{type:e,[k]:!0},t)}function Q(e,t){return e instanceof Error&&k in e&&(null==t||e.type&t)}const O="[^/]+?",A={sensitive:!1,strict:!1,start:!0,end:!0},R=/[.+*?^${}()[\]/\\]/g;function x(c,e){var n=M({},A,e);let t=[],o=n.start?"^":"";const a=[];for(const p of c){const h=p.length?[]:[90];n.strict&&!p.length&&(o+="/");for(let r=0;r<p.length;r++){const d=p[r];let t=40+(n.sensitive?.25:0);if(0===d.type)r||(o+="/"),o+=d.value.replace(R,"\\$&"),t+=40;else if(1===d.type){var{value:l,repeatable:i,optional:s,regexp:u}=d;a.push({name:l,repeatable:i,optional:s});const f=u||O;if(f!==O){t+=10;try{new RegExp(`(${f})`)}catch(e){throw new Error(`Invalid custom RegExp for param "${l}" (${f}): `+e.message)}}let e=i?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;r||(e=s&&p.length<2?`(?:/${e})`:"/"+e),s&&(e+="?"),o+=e,t+=20,s&&(t+=-8),i&&(t+=-20),".*"===f&&(t+=-50)}h.push(t)}t.push(h)}n.strict&&n.end&&(e=t.length-1,t[e][t[e].length-1]+=.7000000000000001),n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const f=new RegExp(o,n.sensitive?"":"i");return{re:f,score:t,keys:a,parse:function(e){var t=e.match(f);const r={};if(!t)return null;for(let e=1;e<t.length;e++){const o=t[e]||"";var n=a[e-1];r[n.name]=o&&n.repeatable?o.split("/"):o}return r},stringify:function(e){let t="",r=!1;for(const l of c){r&&t.endsWith("/")||(t+="/"),r=!1;for(const i of l)if(0===i.type)t+=i.value;else if(1===i.type){var{value:n,repeatable:o,optional:a}=i;const s=n in e?e[n]:"";if(Array.isArray(s)&&!o)throw new Error(`Provided param "${n}" is an array but it is not repeatable (* or + modifiers)`);o=Array.isArray(s)?s.join("/"):s;if(!o){if(!a)throw new Error(`Missing required param "${n}"`);l.length<2&&(t.endsWith("/")?t=t.slice(0,-1):r=!0)}t+=o}}return t}}}function P(e,t){let r=0;for(var n=e.score,o=t.score;r<n.length&&r<o.length;){var a=function(e,t){let r=0;for(;r<e.length&&r<t.length;){var n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}(n[r],o[r]);if(a)return a;r++}return o.length-n.length}const C={type:0,value:""},S=/[a-zA-Z0-9_]/;function $(e,t,r){r=x(function(e){if(!e)return[[]];if("/"===e)return[[C]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${r})/"${c}": ${e}`)}let r=0,n=r;const o=[];let a;function l(){a&&o.push(a),a=[]}let i=0,s,c="",u="";function f(){c&&(0===r?a.push({type:0,value:c}):1===r||2===r||3===r?(1<a.length&&("*"===s||"+"===s)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),c="")}function p(){c+=s}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===r)switch(r){case 0:"/"===s?(c&&f(),l()):":"===s?(f(),r=1):p();break;case 4:p(),r=n;break;case 1:"("===s?r=2:S.test(s)?p():(f(),r=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:r=3:u+=s;break;case 3:f(),r=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state")}else n=r,r=4;return 2===r&&t(`Unfinished custom RegExp for param "${c}"`),f(),l(),o}(e.path),r);e=M(r,{record:e,parent:t,children:[],alias:[]});return t&&!e.record.aliasOf==!t.record.aliasOf&&t.children.push(e),e}function N(e,v){const m=[],g=new Map;function y(e,t,r){var n,o=!r;let a={path:(n=e).path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:function(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(var n in e.components)t[n]="boolean"==typeof r?r:r[n];return t}(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}};a.aliasOf=r&&r.record;var l,i=q(v,e);const s=[a];if("alias"in e)for(const h of"string"==typeof e.alias?[e.alias]:e.alias)s.push(M({},a,{components:(r?r.record:a).components,path:h,aliasOf:r?r.record:a}));let c;for(const d of s){var u,{path:f}=d;if(t&&"/"!==f[0]&&(u="/"===(u=t.record.path)[u.length-1]?"":"/",d.path=t.record.path+(f&&u+f)),l=$(d,t,i),r?r.alias.push(l):(c=c||l,c!==l&&c.alias.push(l),o&&e.name&&!j(l)&&b(e.name)),"children"in a){var p=a.children;for(let e=0;e<p.length;e++)y(p[e],l,r&&r.children[e])}r=r||l,function(e){let t=0;for(;t<m.length&&0<=P(e,m[t]);)t++;m.splice(t,0,e),e.record.name&&!j(e)&&g.set(e.record.name,e)}(l)}return c?()=>{b(c)}:T}function b(e){if(Y(e)){const r=g.get(e);r&&(g.delete(e),m.splice(m.indexOf(r),1),r.children.forEach(b),r.alias.forEach(b))}else{var t=m.indexOf(e);-1<t&&(m.splice(t,1),e.record.name&&g.delete(e.record.name),e.children.forEach(b),e.alias.forEach(b))}}return v=q({strict:!1,end:!0,sensitive:!1},v),e.forEach(e=>y(e)),{addRoute:y,resolve:function(e,t){let r,n={},o,a;if("name"in e&&e.name){if(r=g.get(e.name),!r)throw Z(1,{location:e});a=r.record.name,n=M(function(e,t){let r={};for(var n of t)n in e&&(r[n]=e[n]);return r}(t.params,r.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=r.stringify(n)}else if("path"in e)o=e.path,r=m.find(e=>e.re.test(o)),r&&(n=r.parse(o),a=r.record.name);else{if(r=t.name?g.get(t.name):m.find(e=>e.re.test(t.path)),!r)throw Z(1,{location:e,currentLocation:t});a=r.record.name,n=M({},t.params,e.params),o=r.stringify(n)}const l=[];let i=r;for(;i;)l.unshift(i.record),i=i.parent;return{name:a,path:o,params:n,matched:l,meta:l.reduce((e,t)=>M(e,t.meta),{})}},removeRoute:b,getRoutes:function(){return m},getRecordMatcher:function(e){return g.get(e)}}}function j(e){for(;e;){if(e.record.aliasOf)return 1;e=e.parent}}function q(e,t){let r={};for(var n in e)r[n]=(n in t?t:e)[n];return r}const ee=/#/g,te=/&/g,re=/\//g,ne=/=/g,oe=/\?/g,ae=/\+/g,le=/%5B/g,ie=/%5D/g,se=/%5E/g,ce=/%60/g,ue=/%7B/g,fe=/%7C/g,pe=/%7D/g,he=/%20/g;function de(e){return encodeURI(""+e).replace(fe,"|").replace(le,"[").replace(ie,"]")}function ve(e){return de(e).replace(ae,"%2B").replace(he,"+").replace(ee,"%23").replace(te,"%26").replace(ce,"`").replace(ue,"{").replace(pe,"}").replace(se,"^")}function me(e){return de(e).replace(ee,"%23").replace(oe,"%3F").replace(re,"%2F")}function ge(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ye(e){const t={};if(""===e||"?"===e)return t;const r=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<r.length;++e){const a=r[e].replace(ae," ");var n=a.indexOf("="),o=ge(n<0?a:a.slice(0,n)),n=n<0?null:ge(a.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(n)}else t[o]=n}return t}function be(e){let t="";for(var r in e){t.length&&(t+="&");const o=e[r];if(r=ve(r).replace(ne,"%3D"),null!=o){var n=Array.isArray(o)?o.map(e=>e&&ve(e)):[o&&ve(o)];for(let e=0;e<n.length;e++)t+=(e?"&":"")+r,null!=n[e]&&(t+="="+n[e])}else void 0!==o&&(t+=r)}return t}function we(){let r=[];return{add:function(t){return r.push(t),()=>{var e=r.indexOf(t);-1<e&&r.splice(e,1)}},list:()=>r,reset:function(){r=[]}}}function Ee(a,l,i,s,c){const u=s&&(s.enterCallbacks[c]=s.enterCallbacks[c]||[]);return()=>new Promise((r,n)=>{var e=e=>{var t;!1===e?n(Z(4,{from:i,to:l})):e instanceof Error?n(e):"string"==typeof(t=e)||t&&"object"==typeof t?n(Z(2,{from:l,to:e})):(u&&s.enterCallbacks[c]===u&&"function"==typeof e&&u.push(e),r())},t=a.call(s&&s.instances[c],l,i,e);let o=Promise.resolve(t);a.length<3&&(o=o.then(e)),o.catch(e=>n(e))})}function ke(e,r,n,o){const a=[];for(const i of e)for(const s in i.components){let t=i.components[s];if(0,"beforeRouteEnter"===r||i.instances[s])if("object"==typeof(l=t)||"displayName"in l||"props"in l||"__vccOpts"in l){l=(t.__vccOpts||t)[r];l&&a.push(Ee(l,n,o,i,s))}else{let e=t();e=e.catch(console.error),a.push(()=>e.then(e=>{if(!e)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));var t,e=(t=e).__esModule||c&&"Module"===t[Symbol.toStringTag]?e.default:e,e=((i.components[s]=e).__vccOpts||e)[r];return e&&Ee(e,n,o,i,s)()}))}}var l;return a}function Oe(t){const r=(0,_.f3)(L),l=(0,_.f3)(B),i=(0,_.Fl)(()=>r.resolve((0,F.SU)(t.to))),e=(0,_.Fl)(()=>{var{matched:e}=i.value,{length:t}=e,r=e[t-1];let n=l.matched;if(!r||!n.length)return-1;var o=n.findIndex(D.bind(null,r));if(-1<o)return o;var a=Re(e[t-2]);return 1<t&&Re(r)===a&&n[n.length-1].path!==a?n.findIndex(D.bind(null,e[t-2])):o});var n=(0,_.Fl)(()=>-1<e.value&&function(t,n){for(var o in n){let e=n[o],r=t[o];if("string"==typeof e){if(e!==r)return!1}else if(!Array.isArray(r)||r.length!==e.length||e.some((e,t)=>e!==r[t]))return!1}return!0}(l.params,i.value.params)),o=(0,_.Fl)(()=>-1<e.value&&e.value===l.matched.length-1&&V(l.params,i.value.params));return{route:i,href:(0,_.Fl)(()=>i.value.href),isActive:n,isExactActive:o,navigate:function(e={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(e)?r[(0,F.SU)(t.replace)?"replace":"push"]((0,F.SU)(t.to)):Promise.resolve()}}}const Ae=(0,_.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(t,{slots:r}){const n=(0,F.qj)(Oe(t)),{options:e}=(0,_.f3)(L),o=(0,_.Fl)(()=>({[xe(t.activeClass,e.linkActiveClass,"router-link-active")]:n.isActive,[xe(t.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{var e=r.default&&r.default(n);return t.custom?e:(0,_.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},e)}}});function Re(e){return e?(e.aliasOf||e).path:""}const xe=(e,t,r)=>null!=e?e:null!=t?t:r;function Pe(e,t){if(!e)return null;t=e(t);return 1===t.length?t[0]:t}const Ce=(0,_.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(l,{attrs:i,slots:s}){const e=(0,_.f3)(U),c=(0,_.Fl)(()=>l.route||e.value),t=(0,_.f3)(a,0),u=(0,_.Fl)(()=>c.value.matched[t]);(0,_.JJ)(a,t+1),(0,_.JJ)(o,u),(0,_.JJ)(U,c);const f=(0,F.iH)();return(0,_.YP)(()=>[f.value,u.value,l.name],([t,e,r],[n,o])=>{e&&(e.instances[r]=t,o&&o!==e&&t&&t===n&&(e.leaveGuards.size||(e.leaveGuards=o.leaveGuards),e.updateGuards.size||(e.updateGuards=o.updateGuards))),!t||!e||o&&D(e,o)&&n||(e.enterCallbacks[r]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{var e=c.value;const t=u.value;var r=t&&t.components[l.name];const n=l.name;if(!r)return Pe(s.default,{Component:r,route:e});const o=t.props[l.name];var a=o?!0===o?e.params:"function"==typeof o?o(e):o:null,a=(0,_.h)(r,M({},a,i,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(t.instances[n]=null)},ref:f}));return Pe(s.default,{Component:a,route:e})||a}}});function Se(s){const i=N(s.routes,s);let c=s.parseQuery||ye,p=s.stringifyQuery||be,u=s.history;const f=we(),h=we(),o=we(),d=(0,F.XI)(X);let v=X;G&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=I.bind(null,e=>""+e),g=I.bind(null,me),y=I.bind(null,ge);function b(e,t){if(t=M({},t||d.value),"string"==typeof e){var r=J(c,e,t.path),n=i.resolve({path:r.path},t),o=u.createHref(r.fullPath);return M(r,n,{params:y(n.params),hash:ge(r.hash),redirectedFrom:void 0,href:o})}let a;"path"in e?a=M({},e,{path:J(c,e.path,t.path).path}):(a=M({},e,{params:g(e.params)}),t.params=g(t.params));let l=i.resolve(a,t);r=e.hash||"";l.params=m(y(l.params));o=p,t=M({},e,{hash:de(r).replace(ue,"{").replace(pe,"}").replace(se,"^"),path:l.path}),o=t.query?o(t.query):"",o=t.path+(o&&"?")+o+(t.hash||""),t=u.createHref(o);return M({fullPath:o,hash:r,query:p===be?function(t){const r={};for(var n in t){let e=t[n];void 0!==e&&(r[n]=Array.isArray(e)?e.map(e=>null==e?null:""+e):null==e?e:""+e)}return r}(e.query):e.query},l,{redirectedFrom:void 0,href:t})}function w(e){return"string"==typeof e?J(c,e,d.value.path):M({},e)}function E(e,t){if(v!==e)return Z(8,{from:t,to:e})}function n(e){return O(e)}function k(t){var r=t.matched[t.matched.length-1];if(r&&r.redirect){const{redirect:n}=r;let e="function"==typeof n?n(t):n;return"string"==typeof e&&(e=-1<e.indexOf("?")||-1<e.indexOf("#")?w(e):{path:e}),M({query:t.query,hash:t.hash,params:t.params},e)}}function O(e,t){var r=v=b(e);const n=d.value,o=e.state,a=e.force,l=!0===e.replace;var i,s,c=k(r);if(c)return O(M(w(c),{state:o,force:a,replace:l}),t||r);const u=r;u.redirectedFrom=t;let f;return!a&&(i=p,s=n,e=r,c=s.matched.length-1,r=e.matched.length-1,-1<c&&c==r&&D(s.matched[c],e.matched[r])&&V(s.params,e.params)&&i(s.query)===i(e.query)&&s.hash===e.hash)&&(f=Z(16,{to:u,from:n}),$(n,n,!0,!1)),(f?Promise.resolve(f):A(u,n)).catch(e=>Q(e)?e:C(e)).then(e=>{if(e){if(Q(e,2))return O(M(w(e.to),{state:o,force:a,replace:l}),t||u)}else e=x(u,n,!0,l,o);return R(u,n,e),e})}function A(r,n){let o;const[e,t,a]=function(t,r){const n=[],o=[],a=[],l=Math.max(r.matched.length,t.matched.length);for(let e=0;e<l;e++){const i=r.matched[e];i&&(t.matched.find(e=>D(e,i))?o:n).push(i);const s=t.matched[e];s&&(r.matched.find(e=>D(e,s))||a.push(s))}return[n,o,a]}(r,n);o=ke(e.reverse(),"beforeRouteLeave",r,n);for(const i of e)i.leaveGuards.forEach(e=>{o.push(Ee(e,r,n))});const l=function(e,t){return(t=E(e,t))?Promise.reject(t):Promise.resolve()}.bind(null,r,n);return o.push(l),$e(o).then(()=>{o=[];for(const e of f.list())o.push(Ee(e,r,n));return o.push(l),$e(o)}).then(()=>{o=ke(t,"beforeRouteUpdate",r,n);for(const e of t)e.updateGuards.forEach(e=>{o.push(Ee(e,r,n))});return o.push(l),$e(o)}).then(()=>{o=[];for(const e of r.matched)if(e.beforeEnter&&n.matched.indexOf(e)<0)if(Array.isArray(e.beforeEnter))for(const t of e.beforeEnter)o.push(Ee(t,r,n));else o.push(Ee(e.beforeEnter,r,n));return o.push(l),$e(o)}).then(()=>(r.matched.forEach(e=>e.enterCallbacks={}),o=ke(a,"beforeRouteEnter",r,n),o.push(l),$e(o))).then(()=>{o=[];for(const e of h.list())o.push(Ee(e,r,n));return o.push(l),$e(o)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function R(e,t,r){for(const n of o.list())n(e,t,r)}function x(e,t,r,n,o){var a=E(e,t);if(a)return a;var l=t===X,a=G?history.state:{};r&&(n||l?u.replace(e.fullPath,M({scroll:l&&a&&a.scroll},o)):u.push(e.fullPath,o)),$(d.value=e,t,r,l),S()}let a;function e(){a=u.listen((e,t,r)=>{let n=b(e);var o=k(n);if(o)O(M(o,{replace:!0}),n).catch(T);else{v=n;const a=d.value;G&&(e=H(a.fullPath,r.delta),o=W(),K.set(e,o)),A(n,a).catch(e=>Q(e,12)?e:Q(e,2)?(O(e.to,n).catch(T),Promise.reject()):(r.delta&&u.go(-r.delta,!1),C(e))).then(e=>{(e=e||x(n,a,!1))&&r.delta&&u.go(-r.delta,!1),R(n,a,e)}).catch(T)}})}let l=we(),r=we(),P;function C(t){return S(t),r.list().forEach(e=>e(t)),Promise.reject(t)}function S(r){P||(P=!0,e(),l.list().forEach(([e,t])=>r?t(r):e()),l.reset())}function $(e,t,r,n){const{scrollBehavior:o}=s;if(!G||!o)return Promise.resolve();let a=!r&&(l=H(e.fullPath,0),i=K.get(l),K.delete(l),i)||(n||!r)&&history.state&&history.state.scroll||null;var l,i;return(0,_.Y3)().then(()=>o(e,t,a)).then(e=>e&&z(e)).catch(C)}const t=e=>u.go(e);let j;const q=new Set;return{currentRoute:d,addRoute:function(e,t){let r,n;return n=Y(e)?(r=i.getRecordMatcher(e),t):e,i.addRoute(n,r)},removeRoute:function(e){(e=i.getRecordMatcher(e))&&i.removeRoute(e)},hasRoute:function(e){return!!i.getRecordMatcher(e)},getRoutes:function(){return i.getRoutes().map(e=>e.record)},resolve:b,options:s,push:n,replace:function(e){return n(M(w(e),{replace:!0}))},go:t,back:()=>t(-1),forward:()=>t(1),beforeEach:f.add,beforeResolve:h.add,afterEach:o.add,onError:r.add,isReady:function(){return P&&d.value!==X?Promise.resolve():new Promise((e,t)=>{l.add([e,t])})},install(e){e.component("RouterLink",Ae),e.component("RouterView",Ce),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>(0,F.SU)(d)}),G&&!j&&d.value===X&&(j=!0,n(u.location).catch(e=>{0}));const t={};for(let e in X)t[e]=(0,_.Fl)(()=>d.value[e]);e.provide(L,this),e.provide(B,(0,F.qj)(t)),e.provide(U,d);let r=e.unmount;q.add(e),e.unmount=function(){q.delete(e),q.size<1&&(a(),d.value=X,j=!1,P=!1),r()}}}}function $e(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}}}]);