(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84630,(e,t,r)=>{var n={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var l=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?l=n.concat(l):d=-1,l.length&&f())}function f(){if(!c){var e=s(u);c=!0;for(var t=l.length;t;){for(n=l,l=[];++d<t;)n&&n[d].run();d=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},a=!0;try{n[e](r,r.exports,i),a=!1}finally{a&&delete o[e]}return r.exports}i.ab="/ROOT/theprofitfactory/node_modules/next/dist/compiled/process/",t.exports=i(229)},81014,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(84630)},56766,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},77789,(e,t,r)=>{"use strict";var n=Symbol.for("react.transitional.element");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return{$$typeof:n,type:e,key:o,ref:void 0!==(t=r.ref)?t:null,props:r}}r.Fragment=Symbol.for("react.fragment"),r.jsx=o,r.jsxs=o},77053,(e,t,r)=>{"use strict";t.exports=e.r(77789)},78445,(e,t,r)=>{"use strict";var n=e.i(81014),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),h=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function x(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=x.prototype;var w=_.prototype=new j;w.constructor=_,v(w,x.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function S(){}var N={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function E(e,t,r){var n=r.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==n?n:null,props:r}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function C(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function A(e,t,r){if(null==e)return e;var n=[],a=0;return!function e(t,r,n,a,s){var l,c,d,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var f=!1;if(null===t)f=!0;else switch(u){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case o:case i:f=!0;break;case m:return e((f=t._init)(t._payload),r,n,a,s)}}if(f)return s=s(t),f=""===a?"."+C(t,0):a,k(s)?(n="",null!=f&&(n=f.replace(P,"$&/")+"/"),e(s,r,n,"",function(e){return e})):null!=s&&(T(s)&&(l=s,c=n+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+f,s=E(l.type,c,l.props)),r.push(s)),1;f=0;var p=""===a?".":a+":";if(k(t))for(var g=0;g<t.length;g++)u=p+C(a=t[g],g),f+=e(a,r,n,u,s);else if("function"==typeof(g=null===(d=t)||"object"!=typeof d?null:"function"==typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(t=g.call(t),g=0;!(a=t.next()).done;)u=p+C(a=a.value,g++),f+=e(a,r,n,u,s);else if("object"===u){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),r,n,a,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,n,"","",function(e){return t.call(r,e,a++)}),n}function z(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof n.default&&"function"==typeof n.default.emit)return void n.default.emit("uncaughtException",e);console.error(e)};r.Activity=g,r.Children={map:A,forEach:function(e,t,r){A(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=x,r.Fragment=a,r.Profiler=l,r.PureComponent=_,r.StrictMode=s,r.Suspense=f,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,r.__COMPILER_RUNTIME={__proto__:null,c:function(e){return N.H.useMemoCache(e)}},r.cache=function(e){return function(){return e.apply(null,arguments)}},r.cacheSignal=function(){return null},r.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=v({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)O.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(n[i]=t[i]);var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];n.children=a}return E(e.type,o,n)},r.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:c,_context:e},e},r.createElement=function(e,t,r){var n,o={},i=null;if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return E(e,i,o)},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=T,r.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:z}},r.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=N.T,r={};N.T=r;try{var n=e(),o=N.S;null!==o&&o(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(S,R)}catch(e){R(e)}finally{null!==t&&null!==r.types&&(t.types=r.types),N.T=t}},r.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},r.use=function(e){return N.H.use(e)},r.useActionState=function(e,t,r){return N.H.useActionState(e,t,r)},r.useCallback=function(e,t){return N.H.useCallback(e,t)},r.useContext=function(e){return N.H.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e,t){return N.H.useDeferredValue(e,t)},r.useEffect=function(e,t){return N.H.useEffect(e,t)},r.useEffectEvent=function(e){return N.H.useEffectEvent(e)},r.useId=function(){return N.H.useId()},r.useImperativeHandle=function(e,t,r){return N.H.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return N.H.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return N.H.useLayoutEffect(e,t)},r.useMemo=function(e,t){return N.H.useMemo(e,t)},r.useOptimistic=function(e,t){return N.H.useOptimistic(e,t)},r.useReducer=function(e,t,r){return N.H.useReducer(e,t,r)},r.useRef=function(e){return N.H.useRef(e)},r.useState=function(e){return N.H.useState(e)},r.useSyncExternalStore=function(e,t,r){return N.H.useSyncExternalStore(e,t,r)},r.useTransition=function(){return N.H.useTransition()},r.version="19.2.4"},30254,(e,t,r)=>{"use strict";t.exports=e.r(78445)},85083,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(56766)._(e.r(30254)).default.createContext({})},88015,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},31770,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}},57430,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(30254),o="u"<typeof window,i=o?()=>{}:n.useLayoutEffect,a=o?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},51709,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(56766),a=e.r(31770),s=e.r(77053),l=a._(e.r(30254)),c=i._(e.r(57430)),d=e.r(85083);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(88015);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!a)&&n.has(t)?i=!1:(n.add(t),o[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},69814,(e,t,r)=>{t.exports=e.r(51709)},29516,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return x},NormalizeError:function(){return v},PageNotFoundError:function(){return y},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class v extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},17875,(e,t,r)=>{"use strict";var n=e.r(30254);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),l=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,r.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},r.flushSync=function(e){var t=l.T,r=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=r,a.d.f()}},r.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},r.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},r.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,n=c(r,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:i}):"script"===r&&a.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},r.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},r.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,n=c(r,t.crossOrigin);a.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},r.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},r.requestFormReset=function(e){a.d.r(e)},r.unstable_batchedUpdates=function(e,t){return e(t)},r.useFormState=function(e,t,r){return l.H.useFormState(e,t,r)},r.useFormStatus=function(){return l.H.useHostTransitionStatus()},r.version="19.2.4"},13072,(e,t,r)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17875)},38962,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},o=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function i(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[r,a]of Object.entries(t)){if(!t.hasOwnProperty(r)||o.includes(r)||void 0===a)continue;let s=n[r]||r.toLowerCase();"SCRIPT"===e.tagName&&i(s)?e[s]=!!a:e.setAttribute(s,String(a)),(!1===a||"SCRIPT"===e.tagName&&i(s)&&(!a||"false"===a))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},61536,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return b}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(56766),a=e.r(31770),s=e.r(77053),l=i._(e.r(13072)),c=a._(e.r(30254)),d=e.r(85083),u=e.r(38962),f=e.r(31304),p=new Map,m=new Set,g=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:s="afterInteractive",onError:c,stylesheets:d}=e,f=r||t;if(f&&m.has(f))return;if(p.has(t)){m.add(f),p.get(t).then(n,c);return}let g=()=>{o&&o(),m.add(f)},h=document.createElement("script"),b=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),n&&n.call(this,t),g()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});i?(h.innerHTML=i.__html||"",g()):a?(h.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",g()):t&&(h.src=t,p.set(t,b)),(0,u.setAttributesFromProps)(h,e),"worker"===s&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",s),d&&(e=>{if(l.default.preinit)return e.forEach(e=>{l.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(d),document.body.appendChild(h)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>g(e))}):g(e)}function b(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");m.add(t)})}function v(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:i="afterInteractive",onError:a,stylesheets:u,...p}=e,{updateScripts:h,scripts:b,getIsSsr:v,appDir:y,nonce:x}=(0,c.useContext)(d.HeadManagerContext);x=p.nonce||x;let j=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||r;j.current||(o&&e&&m.has(e)&&o(),j.current=!0)},[o,t,r]);let _=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{if(!_.current){if("afterInteractive"===i)g(e);else"lazyOnload"===i&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>g(e))}));_.current=!0}},[e,i]),("beforeInteractive"===i||"worker"===i)&&(h?(b[i]=(b[i]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:a,...p,nonce:x}]),h(b)):v&&v()?m.add(t||r):v&&!v()&&g({...e,nonce:x})),y){if(u&&u.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===i)if(!r)return p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`}});else return l.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:x,crossOrigin:p.crossOrigin}:{as:"script",nonce:x,crossOrigin:p.crossOrigin}),(0,s.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`}});"afterInteractive"===i&&r&&l.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:x,crossOrigin:p.crossOrigin}:{as:"script",nonce:x,crossOrigin:p.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let y=v;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18601,e=>{"use strict";var t=e.i(77053),r=e.i(69814),n=e.i(30254);let o=[{id:"dashboard",label:"Dashboard"},{id:"klanten",label:"Klanten"},{id:"content",label:"Content Studio"},{id:"leads",label:"Lead Generator"},{id:"email",label:"Email Automation"},{id:"rapporten",label:"Rapporten"},{id:"instellingen",label:"Instellingen"}],i=[{label:"Actieve Klanten",value:"12",icon:"👥",delta:"+2 deze maand"},{label:"Content gegenereerd",value:"1,847 stuks",icon:"✍️",delta:"+143 deze week"},{label:"Leads verwerkt",value:"342",icon:"⚡",delta:"+28 vandaag"},{label:"Omzet gegenereerd",value:"€48,200",icon:"💰",delta:"+€3,400 deze maand"}],a=[{name:"Bakkerij de Groot",type:"E-commerce",plan:"Pro",status:"Active",since:"Jan 2025"},{name:"TechStart BV",type:"SaaS",plan:"Business",status:"Active",since:"Feb 2025"},{name:"Mode Atelier Nina",type:"Retail",plan:"Pro",status:"Active",since:"Mrt 2025"}],s=`🚀 Waarom 87% van de kleine bedrijven social media verkeerd aanpakt — en hoe jij dat anders doet.

De meeste ondernemers posten willekeurig. Geen strategie, geen consistentie, geen resultaat.

Hier is wat wij doen dat werkt:

✅ Elke post heeft \xe9\xe9n doel (bewustwording, vertrouwen of conversie)
✅ We publiceren op vaste tijden — algoritmes houden van regelmaat
✅ We reageren binnen 30 minuten op elk comment

Het resultaat? +340% meer bereik in 8 weken — zonder extra advertentiebudget.

Wil jij ook een contentplan dat \xe9cht werkt? Drop een 🙋 in de comments en ik stuur je onze gratis template.

#ContentMarketing #Ondernemen #SocialMediaStrategy #DigitalMarketing #Groei`;e.s(["default",0,function(){let[e,l]=(0,n.useState)("content"),[c,d]=(0,n.useState)("linkedin"),[u,f]=(0,n.useState)(""),[p,m]=(0,n.useState)("professioneel"),[g,h]=(0,n.useState)(!0),[b,v]=(0,n.useState)(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"NovaSpark AI Suite — Dashboard Demo"}),(0,t.jsx)("meta",{name:"robots",content:"noindex"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",rel:"stylesheet"}),(0,t.jsx)("style",{children:`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          :root {
            --gold: #f59e0b;
            --bg-card: #141414;
            --bg: #0a0a0a;
            --border: #2a2a2a;
            --text-muted: #a0a0a0;
            --text: #f0f0f0;
            --sidebar-w: 220px;
          }
          html, body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; min-height: 100vh; }
          a { color: inherit; text-decoration: none; }
          button { font-family: inherit; cursor: pointer; }
          input, select, textarea { font-family: inherit; }

          .demo-banner {
            background: linear-gradient(90deg, #1a0a00, #2a1200, #1a0a00);
            border-bottom: 1px solid rgba(245,158,11,0.3);
            color: var(--gold);
            text-align: center;
            padding: 0.55rem 1rem;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.01em;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }
          .demo-banner a { color: var(--gold); opacity: 0.9; text-decoration: underline; }
          .demo-banner a:hover { opacity: 1; }

          .app-header {
            position: fixed;
            top: 33px;
            left: 0;
            right: 0;
            height: 56px;
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1.5rem;
            z-index: 90;
          }
          .app-logo {
            font-size: 1.2rem;
            font-weight: 800;
            color: var(--gold);
            letter-spacing: -0.5px;
          }
          .app-logo span { color: var(--text-muted); font-weight: 400; font-size: 0.85rem; margin-left: 0.5rem; }
          .header-right { display: flex; align-items: center; gap: 1rem; }
          .welcome-text { font-size: 0.9rem; color: var(--text-muted); }
          .welcome-text strong { color: var(--text); }
          .plan-badge {
            background: rgba(245,158,11,0.12);
            border: 1px solid rgba(245,158,11,0.25);
            color: var(--gold);
            padding: 0.3rem 0.75rem;
            border-radius: 100px;
            font-size: 0.78rem;
            font-weight: 600;
            white-space: nowrap;
          }
          .avatar {
            width: 34px; height: 34px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--gold), #d97706);
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; font-size: 0.85rem; color: #000;
            flex-shrink: 0;
          }

          .app-layout {
            display: flex;
            padding-top: calc(33px + 56px);
            min-height: 100vh;
          }

          .sidebar {
            width: var(--sidebar-w);
            background: var(--bg-card);
            border-right: 1px solid var(--border);
            position: fixed;
            top: calc(33px + 56px);
            left: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            z-index: 80;
          }
          .sidebar-nav { padding: 1rem 0.75rem; flex: 1; }
          .sidebar-label {
            font-size: 0.68rem;
            font-weight: 600;
            color: var(--text-muted);
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 0.5rem 0.75rem 0.4rem;
          }
          .nav-item {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            padding: 0.6rem 0.75rem;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 500;
            color: var(--text-muted);
            cursor: pointer;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            transition: color 0.15s, background 0.15s;
            margin-bottom: 2px;
          }
          .nav-item:hover { color: var(--text); background: rgba(255,255,255,0.04); }
          .nav-item.active {
            color: var(--gold);
            background: rgba(245,158,11,0.1);
            font-weight: 600;
          }
          .nav-icon { font-size: 1rem; flex-shrink: 0; }
          .sidebar-footer {
            padding: 1rem;
            border-top: 1px solid var(--border);
          }
          .sidebar-footer-text { font-size: 0.75rem; color: var(--text-muted); line-height: 1.5; }

          .main-content {
            margin-left: var(--sidebar-w);
            flex: 1;
            padding: 2rem;
            max-width: calc(100vw - var(--sidebar-w));
          }

          .page-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          .page-subtitle { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem; }

          .stats-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            transition: border-color 0.2s, transform 0.2s;
          }
          .stat-card:hover { border-color: rgba(245,158,11,0.3); transform: translateY(-1px); }
          .stat-icon { font-size: 1.4rem; margin-bottom: 0.75rem; }
          .stat-label { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em; }
          .stat-value { font-size: 1.6rem; font-weight: 800; color: var(--text); line-height: 1; margin-bottom: 0.4rem; }
          .stat-delta { font-size: 0.78rem; color: #4ade80; font-weight: 500; }

          .content-grid {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 1.5rem;
          }

          .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
          }
          .card-header {
            padding: 1.1rem 1.5rem;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .card-title { font-size: 0.95rem; font-weight: 700; }
          .card-body { padding: 1.5rem; }

          .form-group { margin-bottom: 1.1rem; }
          .form-label { display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.04em; }
          .form-control {
            width: 100%;
            background: #0f0f0f;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 0.65rem 0.9rem;
            color: var(--text);
            font-size: 0.9rem;
            outline: none;
            transition: border-color 0.15s;
          }
          .form-control:focus { border-color: var(--gold); }
          .form-control option { background: #1a1a1a; }

          .btn-generate {
            width: 100%;
            background: var(--gold);
            color: #000;
            border: none;
            border-radius: 8px;
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.15s, transform 0.1s;
            margin-top: 0.5rem;
          }
          .btn-generate:hover { background: #fbbf24; transform: translateY(-1px); }
          .btn-generate:active { transform: translateY(0); }

          .generated-area {
            background: #0f0f0f;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.25rem;
            margin-top: 1.25rem;
            white-space: pre-wrap;
            font-size: 0.88rem;
            line-height: 1.7;
            color: var(--text);
            min-height: 180px;
          }
          .generated-label {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.04em;
            margin-bottom: 0.6rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }
          .generated-label::after {
            content: 'Gegenereerd';
            background: rgba(74,222,128,0.12);
            color: #4ade80;
            border: 1px solid rgba(74,222,128,0.2);
            border-radius: 100px;
            padding: 0.1rem 0.5rem;
            font-size: 0.7rem;
          }

          .copy-btn {
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--border);
            color: var(--text-muted);
            border-radius: 6px;
            padding: 0.35rem 0.8rem;
            font-size: 0.78rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.15s;
            margin-top: 0.75rem;
          }
          .copy-btn:hover { border-color: var(--gold); color: var(--gold); }

          .client-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.85rem 1.5rem;
            border-bottom: 1px solid var(--border);
            transition: background 0.15s;
          }
          .client-row:last-child { border-bottom: none; }
          .client-row:hover { background: rgba(255,255,255,0.02); }
          .client-info { display: flex; align-items: center; gap: 0.75rem; }
          .client-avatar {
            width: 36px; height: 36px; border-radius: 8px;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border: 1px solid var(--border);
            display: flex; align-items: center; justify-content: center;
            font-size: 1rem;
            flex-shrink: 0;
          }
          .client-name { font-size: 0.9rem; font-weight: 600; }
          .client-meta { font-size: 0.75rem; color: var(--text-muted); margin-top: 1px; }
          .client-actions { display: flex; align-items: center; gap: 0.5rem; }
          .status-dot {
            display: inline-block;
            width: 7px; height: 7px;
            background: #4ade80;
            border-radius: 50%;
            margin-right: 4px;
          }
          .status-badge {
            font-size: 0.75rem;
            font-weight: 600;
            color: #4ade80;
            background: rgba(74,222,128,0.1);
            border: 1px solid rgba(74,222,128,0.2);
            border-radius: 100px;
            padding: 0.2rem 0.6rem;
          }
          .icon-btn {
            background: rgba(255,255,255,0.04);
            border: 1px solid var(--border);
            color: var(--text-muted);
            border-radius: 6px;
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.15s;
          }
          .icon-btn:hover { border-color: var(--gold); color: var(--gold); }

          .tab-row {
            display: flex;
            gap: 0.25rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0;
          }
          .tab-btn {
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 0.88rem;
            font-weight: 500;
            padding: 0.6rem 1rem;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            margin-bottom: -1px;
            transition: color 0.15s, border-color 0.15s;
          }
          .tab-btn:hover { color: var(--text); }
          .tab-btn.active { color: var(--gold); border-bottom-color: var(--gold); font-weight: 600; }

          .breadcrumb {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }
          .breadcrumb-sep { opacity: 0.4; }

          .badge-new {
            font-size: 0.65rem;
            background: rgba(245,158,11,0.15);
            color: var(--gold);
            border: 1px solid rgba(245,158,11,0.2);
            border-radius: 100px;
            padding: 0.1rem 0.4rem;
            font-weight: 700;
            margin-left: 0.3rem;
          }

          .activity-dot {
            width: 8px; height: 8px;
            border-radius: 50%;
            background: var(--gold);
            box-shadow: 0 0 6px var(--gold);
            animation: pulse-dot 2s infinite;
            flex-shrink: 0;
          }
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }

          .activity-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.65rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.04);
            font-size: 0.82rem;
          }
          .activity-item:last-child { border-bottom: none; }
          .activity-text { color: var(--text); line-height: 1.4; }
          .activity-time { color: var(--text-muted); font-size: 0.75rem; margin-top: 2px; }

          @media (max-width: 1100px) {
            .stats-row { grid-template-columns: repeat(2, 1fr); }
            .content-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 768px) {
            .sidebar { display: none; }
            .main-content { margin-left: 0; max-width: 100vw; padding: 1rem; }
            .stats-row { grid-template-columns: repeat(2, 1fr); }
            .header-right .welcome-text { display: none; }
          }
        `})]}),(0,t.jsxs)("div",{className:"demo-banner",children:["⚡ Live Demo — The Profit Factory White-Label Suite |"," ",(0,t.jsx)("a",{href:"https://theprofitfactory.ai/agency",target:"_blank",rel:"noopener noreferrer",children:"theprofitfactory.ai/agency"})]}),(0,t.jsxs)("header",{className:"app-header",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,t.jsx)("div",{className:"app-logo",children:"NovaSpark AI Suite"}),(0,t.jsx)("span",{style:{color:"var(--border)",fontSize:"1.2rem",lineHeight:1},children:"|"}),(0,t.jsx)("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:500},children:"Agency Dashboard"})]}),(0,t.jsxs)("div",{className:"header-right",children:[(0,t.jsx)("span",{className:"plan-badge",children:"Pro Plan — 12 active clients"}),(0,t.jsxs)("span",{className:"welcome-text",children:["Welkom terug, ",(0,t.jsx)("strong",{children:"Stefan"})]}),(0,t.jsx)("div",{className:"avatar",children:"S"})]})]}),(0,t.jsxs)("div",{className:"app-layout",children:[(0,t.jsxs)("aside",{className:"sidebar",children:[(0,t.jsxs)("nav",{className:"sidebar-nav",children:[(0,t.jsx)("div",{className:"sidebar-label",children:"Hoofdmenu"}),o.map(r=>(0,t.jsxs)("button",{className:`nav-item${e===r.id?" active":""}`,onClick:()=>l(r.id),children:[(0,t.jsx)("span",{className:"nav-icon",children:{dashboard:"▣",klanten:"👥",content:"✍️",leads:"⚡",email:"✉️",rapporten:"📊",instellingen:"⚙️"}[r.id]}),r.label,"leads"===r.id&&(0,t.jsx)("span",{className:"badge-new",children:"Nieuw"})]},r.id))]}),(0,t.jsx)("div",{className:"sidebar-footer",children:(0,t.jsxs)("div",{className:"sidebar-footer-text",children:[(0,t.jsx)("div",{style:{fontWeight:600,color:"var(--text)",marginBottom:"0.2rem",fontSize:"0.8rem"},children:"NovaSpark AI Suite"}),(0,t.jsx)("div",{children:"Versie 2.4.1 · Pro Plan"}),(0,t.jsx)("div",{style:{marginTop:"0.3rem",color:"rgba(245,158,11,0.7)",fontSize:"0.72rem"},children:"Powered by The Profit Factory"})]})})]}),(0,t.jsxs)("main",{className:"main-content",children:[(0,t.jsxs)("div",{className:"breadcrumb",children:[(0,t.jsx)("span",{children:"NovaSpark AI Suite"}),(0,t.jsx)("span",{className:"breadcrumb-sep",children:"›"}),(0,t.jsx)("span",{style:{color:"var(--text)"},children:o.find(t=>t.id===e)?.label??"Dashboard"})]}),(0,t.jsx)("div",{className:"page-title",children:"content"===e?"Content Studio":o.find(t=>t.id===e)?.label}),(0,t.jsx)("div",{className:"page-subtitle",children:"content"===e?"Genereer professionele content in seconden met AI — voor elk kanaal en elke klant.":"Overzicht van je agency dashboard."}),(0,t.jsx)("div",{className:"stats-row",children:i.map(e=>(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("div",{className:"stat-icon",children:e.icon}),(0,t.jsx)("div",{className:"stat-label",children:e.label}),(0,t.jsx)("div",{className:"stat-value",children:e.value}),(0,t.jsx)("div",{className:"stat-delta",children:e.delta})]},e.label))}),(0,t.jsxs)("div",{className:"content-grid",children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-header",children:[(0,t.jsx)("span",{className:"card-title",children:"✍️ Content Studio"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.75rem",color:"#4ade80"},children:[(0,t.jsx)("div",{className:"activity-dot"}),"AI actief"]})]}),(0,t.jsx)("div",{style:{padding:"0 1.5rem"},children:(0,t.jsx)("div",{className:"tab-row",children:["Genereer","Geschiedenis","Templates"].map((e,r)=>(0,t.jsx)("button",{className:`tab-btn${0===r?" active":""}`,children:e},e))})}),(0,t.jsxs)("div",{className:"card-body",style:{paddingTop:"0.5rem"},children:[(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h(!0)},children:[(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Type content"}),(0,t.jsxs)("select",{className:"form-control",value:c,onChange:e=>d(e.target.value),children:[(0,t.jsx)("option",{value:"linkedin",children:"LinkedIn Post"}),(0,t.jsx)("option",{value:"blog",children:"Blog Artikel"}),(0,t.jsx)("option",{value:"email",children:"Email"}),(0,t.jsx)("option",{value:"ad",children:"Ad Copy"})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Toon"}),(0,t.jsxs)("select",{className:"form-control",value:p,onChange:e=>m(e.target.value),children:[(0,t.jsx)("option",{value:"professioneel",children:"Professioneel"}),(0,t.jsx)("option",{value:"casual",children:"Casual"}),(0,t.jsx)("option",{value:"urgent",children:"Urgent"})]})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Onderwerp of product"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"bijv. Social media marketing voor MKB-bedrijven...",value:u,onChange:e=>f(e.target.value)})]}),(0,t.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,t.jsx)("label",{className:"form-label",children:"Klant (optioneel)"}),(0,t.jsxs)("select",{className:"form-control",children:[(0,t.jsx)("option",{value:"",children:"— Geen klant gekoppeld —"}),(0,t.jsx)("option",{children:"Bakkerij de Groot"}),(0,t.jsx)("option",{children:"TechStart BV"}),(0,t.jsx)("option",{children:"Mode Atelier Nina"})]})]}),(0,t.jsx)("button",{type:"submit",className:"btn-generate",style:{marginTop:"1.25rem"},children:"✨ Genereer Content"})]}),g&&(0,t.jsxs)("div",{style:{marginTop:"1.5rem"},children:[(0,t.jsx)("div",{className:"generated-label",children:"Gegenereerde content"}),(0,t.jsx)("div",{className:"generated-area",children:s}),(0,t.jsxs)("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.75rem",flexWrap:"wrap"},children:[(0,t.jsx)("button",{className:"copy-btn",children:"📋 Kopiëren"}),(0,t.jsx)("button",{className:"copy-btn",children:"📅 Inplannen"}),(0,t.jsx)("button",{className:"copy-btn",children:"🔄 Regenereer"}),(0,t.jsx)("button",{className:"copy-btn",style:{marginLeft:"auto"},children:"💾 Opslaan in bibliotheek"})]})]})]})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-header",children:[(0,t.jsx)("span",{className:"card-title",children:"📋 Recente activiteit"}),(0,t.jsx)("button",{className:"icon-btn",children:"Alles tonen"})]}),(0,t.jsx)("div",{className:"card-body",style:{padding:"0.75rem 1.5rem"},children:[{text:"LinkedIn post gegenereerd voor Bakkerij de Groot",time:"2 min geleden"},{text:"3 leads verwerkt — TechStart BV campagne",time:"14 min geleden"},{text:"E-mail sequence gestart voor Mode Atelier Nina",time:"1 uur geleden"},{text:'Blog artikel gepubliceerd: "10 tips voor lokale SEO"',time:"3 uur geleden"},{text:"Rapport gegenereerd — maandoverzicht april 2025",time:"Gisteren 17:42"}].map((e,r)=>(0,t.jsxs)("div",{className:"activity-item",children:[(0,t.jsx)("div",{className:"activity-dot",style:{marginTop:"4px",background:0===r?"var(--gold)":"#555",boxShadow:0===r?"0 0 6px var(--gold)":"none"}}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"activity-text",children:e.text}),(0,t.jsx)("div",{className:"activity-time",children:e.time})]})]},r))})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-header",children:[(0,t.jsx)("span",{className:"card-title",children:"👥 Klanten"}),(0,t.jsx)("button",{className:"icon-btn",style:{fontSize:"0.78rem",background:"rgba(245,158,11,0.1)",borderColor:"rgba(245,158,11,0.2)",color:"var(--gold)"},children:"+ Nieuwe klant"})]}),(0,t.jsx)("div",{children:a.map((e,r)=>(0,t.jsxs)("div",{className:"client-row",children:[(0,t.jsxs)("div",{className:"client-info",children:[(0,t.jsx)("div",{className:"client-avatar",children:["🥐","💻","👗"][r]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"client-name",children:e.name}),(0,t.jsxs)("div",{className:"client-meta",children:[e.type," · ",e.plan," · Lid sinds ",e.since]})]})]}),(0,t.jsxs)("div",{className:"client-actions",children:[(0,t.jsxs)("span",{className:"status-badge",children:[(0,t.jsx)("span",{className:"status-dot"}),e.status]}),(0,t.jsx)("button",{className:"icon-btn",children:"✏️"}),(0,t.jsx)("button",{className:"icon-btn",children:"→"})]})]},e.name))}),(0,t.jsx)("div",{style:{padding:"0.75rem 1.5rem",borderTop:"1px solid var(--border)"},children:(0,t.jsx)("button",{className:"icon-btn",style:{width:"100%",textAlign:"center",padding:"0.5rem",fontSize:"0.82rem"},children:"Alle 12 klanten tonen →"})})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsx)("span",{className:"card-title",children:"📊 Gebruik deze maand"})}),(0,t.jsxs)("div",{className:"card-body",children:[[{label:"Content gegenereerd",value:143,max:500},{label:"Leads verwerkt",value:28,max:100},{label:"E-mails verstuurd",value:312,max:1e3}].map(e=>{let r=Math.round(e.value/e.max*100);return(0,t.jsxs)("div",{style:{marginBottom:"1.1rem"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.82rem",marginBottom:"0.4rem"},children:[(0,t.jsx)("span",{style:{color:"var(--text-muted)"},children:e.label}),(0,t.jsxs)("span",{style:{fontWeight:600},children:[e.value," ",(0,t.jsxs)("span",{style:{color:"var(--text-muted)",fontWeight:400},children:["/ ",e.max]})]})]}),(0,t.jsx)("div",{style:{background:"var(--border)",borderRadius:"100px",height:"6px",overflow:"hidden"},children:(0,t.jsx)("div",{style:{background:r>70?"var(--gold)":"linear-gradient(90deg, var(--gold), #fbbf24)",width:`${r}%`,height:"100%",borderRadius:"100px",transition:"width 0.4s"}})})]},e.label)}),(0,t.jsxs)("div",{style:{background:"rgba(245,158,11,0.07)",border:"1px solid rgba(245,158,11,0.15)",borderRadius:"8px",padding:"0.75rem 1rem",fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"0.5rem",lineHeight:1.5},children:[(0,t.jsx)("span",{style:{color:"var(--gold)",fontWeight:600},children:"Pro Plan"})," — Onbeperkt gebruik per klant. Geen extra kosten."]})]})]})]})]}),(0,t.jsxs)("div",{style:{marginTop:"2rem",padding:"1rem 1.5rem",background:"rgba(255,255,255,0.02)",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"0.78rem",color:"var(--text-muted)",textAlign:"center",lineHeight:1.6},children:["Dit is een live demo van The Profit Factory white-label suite. Eigen branding, eigen domein."," ",(0,t.jsx)("a",{href:"https://theprofitfactory.ai/agency",style:{color:"var(--gold)",textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer",children:"theprofitfactory.ai/agency"})]})]})]})]})}])},99149,(e,t,r)=>{let n="/agency-demo";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(18601)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},11906,e=>{e.v(t=>Promise.all(["static/chunks/023q778nj4ssz.js"].map(t=>e.l(t))).then(()=>t(60646)))},47494,e=>{e.v(t=>Promise.all(["static/chunks/0we8xy5sknxq9.js"].map(t=>e.l(t))).then(()=>t(46031)))}]);