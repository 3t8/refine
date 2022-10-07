"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68347],{81732:(e,t,n)=>{function o(e,t){var n;return"string"==typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}n.d(t,{I:()=>o})},1216:(e,t,n)=>{var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(67294),i=a(r),s=a(n(45697)),u=n(54081),l=a(n(38315)),f=a(n(38282)),c=a(n(40821));function a(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,g=0,m=0,y=0,w="data-lazyload-listened",b=[],E=[],x=!1;try{var L=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,L)}catch(C){}var O=!!x&&{capture:!1,passive:!0},A=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t),o=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,s=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,i=u.height,s=u.width}catch(C){o=v,r=g,i=y,s=m}var l=window.innerHeight||document.documentElement.clientHeight,f=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),a=Math.max(r,0),d=Math.min(l,o+i)-c,p=Math.min(f,r+s)-a,h=void 0,w=void 0,b=void 0,E=void 0;try{var x=n.getBoundingClientRect();h=x.top,w=x.left,b=x.height,E=x.width}catch(C){h=v,w=g,b=y,E=m}var L=h-c,O=w-a,A=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return L-A[0]<=d&&L+b+A[1]>=0&&O-A[0]<=p&&O+E+A[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(C){n=v,o=y}var i=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-s[0]<=i&&n+o+s[1]>=0}(e);o?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},z=function(){E.forEach((function(e){var t=b.indexOf(e);-1!==t&&b.splice(t,1)})),E=[]},W=function(){for(var e=0;e<b.length;++e){var t=b[e];A(t)}z()},T=void 0,M=null,_=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",M,O),(0,u.off)(window,"resize",M,O),M=null),M||(void 0!==this.props.debounce?(M=(0,f.default)(W,"number"==typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(M=(0,c.default)(W,"number"==typeof this.props.throttle?this.props.throttle:300),T="throttle"):M=W),this.props.overflow){var o=(0,l.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(w)+1;1===r&&o.addEventListener("scroll",M,O),o.setAttribute(w,r)}}else if(0===b.length||n){var i=this.props,s=i.scroll,a=i.resize;s&&(0,u.on)(e,"scroll",M,O),a&&(0,u.on)(window,"resize",M,O)}b.push(this),A(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",M,O),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=b.indexOf(this);-1!==n&&b.splice(n,1),0===b.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",M,O),(0,u.off)(window,"scroll",M,O))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,s=e.classNamePrefix,u=e.style;return i.default.createElement("div",{className:s+"-wrapper "+r,ref:this.setRef,style:u},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:s+"-placeholder"}))}}]),t}(r.Component);_.propTypes={className:s.default.string,classNamePrefix:s.default.string,once:s.default.bool,height:s.default.oneOfType([s.default.number,s.default.string]),offset:s.default.oneOfType([s.default.number,s.default.arrayOf(s.default.number)]),overflow:s.default.bool,resize:s.default.bool,scroll:s.default.bool,children:s.default.node,throttle:s.default.oneOfType([s.default.number,s.default.bool]),debounce:s.default.oneOfType([s.default.number,s.default.bool]),placeholder:s.default.node,scrollContainer:s.default.oneOfType([s.default.string,s.default.object]),unmountIfInvisible:s.default.bool,style:s.default.object},_.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"}},38282:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,s=void 0,u=void 0,l=function l(){var f=+new Date-s;f<t&&f>=0?o=setTimeout(l,t-f):(o=null,n||(u=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,s=+new Date;var f=n&&!o;return o||(o=setTimeout(l,t)),f&&(u=e.apply(i,r),i=null,r=null),u}}},54081:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},38315:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,s=r.overflow,u=r["overflow-x"],l=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(s)&&n.test(u)&&n.test(l))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},40821:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,s=+new Date,u=arguments;o&&s<o+t?(clearTimeout(r),r=setTimeout((function(){o=s,e.apply(i,u)}),t)):(o=s,e.apply(i,u))}}},61117:(e,t,n)=>{n.d(t,{Y:()=>u});var o=n(70655),r=n(67294),i=n(81732);const s={any:0,all:1};function u(e,t){var n=void 0===t?{}:t,u=n.root,l=n.margin,f=n.amount,c=n.once,a=void 0!==c&&c,d=(0,o.CR)((0,r.useState)(!1),2),p=d[0],h=d[1];return(0,r.useEffect)((function(){var t;if(!(!e.current||a&&p)){var n={root:null!==(t=null==u?void 0:u.current)&&void 0!==t?t:void 0,margin:l,amount:"some"===f?"any":f};return function(e,t,{root:n,margin:o,amount:r="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};const u=(0,i.I)(e),l=new WeakMap,f=new IntersectionObserver((e=>{e.forEach((e=>{const n=l.get(e.target);if(e.isIntersecting!==Boolean(n))if(e.isIntersecting){const n=t(e);"function"==typeof n?l.set(e.target,n):f.unobserve(e.target)}else n&&(n(e),l.delete(e.target))}))}),{root:n,rootMargin:o,threshold:"number"==typeof r?r:s[r]});return u.forEach((e=>f.observe(e))),()=>f.disconnect()}(e.current,(function(){return h(!0),a?void 0:function(){return h(!1)}}),n)}}),[u,e,l,a]),p}},68913:(e,t,n)=>{n.d(t,{v:()=>Y});var o=n(70655),r=n(81732);const i=new WeakMap;let s;function u({target:e,contentRect:t,borderBoxSize:n}){var o;null===(o=i.get(e))||void 0===o||o.forEach((o=>{o({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function l(e){e.forEach(u)}function f(e,t){s||"undefined"!=typeof ResizeObserver&&(s=new ResizeObserver(l));const n=(0,r.I)(e);return n.forEach((e=>{let n=i.get(e);n||(n=new Set,i.set(e,n)),n.add(t),null==s||s.observe(e)})),()=>{n.forEach((e=>{const n=i.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==s||s.unobserve(e)}))}}const c=new Set;let a;function d(e){return c.add(e),a||(a=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};c.forEach((e=>e(t)))},window.addEventListener("resize",a)),()=>{c.delete(e),!c.size&&a&&(a=void 0)}}const p=(e,t,n)=>t-e==0?1:(n-e)/(t-e);const h={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function v(e,t,n,o){const r=n[t],{length:i,position:s}=h[t],u=r.current,l=n.time;r.current=e["scroll"+s],r.scrollLength=e["scroll"+i]-e["client"+i],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=p(0,r.scrollLength,r.current);const f=o-l;var c,a;r.velocity=f>50?0:(c=r.current-u,(a=f)?c*(1e3/a):0)}const g=e=>e,m=(e,t,n)=>-n*e+n*t+e;function y(e,t){const n=e[e.length-1];for(let o=1;o<=t;o++){const r=p(0,t,o);e.push(m(n,1,r))}}function w(e){const t=[0];return y(t,e-1),t}const b=e=>"number"==typeof e;function E(e,t){return(e=>Array.isArray(e)&&!b(e[0]))(e)?e[((e,t,n)=>{const o=t-e;return((n-e)%o+o)%o+e})(0,e.length,t)]:e}function x(e,t=w(e.length),n=g){const o=e.length,r=o-t.length;return r>0&&y(t,r),r=>{let i=0;for(;i<o-2&&!(r<t[i+1]);i++);let s=(u=0,l=1,f=p(t[i],t[i+1],r),Math.min(Math.max(f,u),l));var u,l,f;return s=E(n,i)(s),m(e[i],e[i+1],s)}}const L={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},O=e=>"string"==typeof e,A={start:0,center:.5,end:1};function z(e,t,n=0){let o=0;if(void 0!==A[e]&&(e=A[e]),O(e)){const t=parseFloat(e);e.endsWith("px")?o=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?o=t/100*document.documentElement.clientWidth:e.endsWith("vh")?o=t/100*document.documentElement.clientHeight:e=t}return b(e)&&(o=t*e),n+o}const W=[0,0];function T(e,t,n,o){let r=Array.isArray(e)?e:W,i=0,s=0;return b(e)?r=[e,e]:O(e)&&(r=(e=e.trim()).includes(" ")?e.split(" "):[e,A[e]?e:"0"]),i=z(r[0],n,o),s=z(r[1],t),i-s}const M={x:0,y:0};function _(e,t,n){let{offset:o=L.All}=n;const{target:r=e,axis:i="y"}=n,s="y"===i?"height":"width",u=r!==e?function(e,t){let n={x:0,y:0},o=e;for(;o&&o!==t;)if(o instanceof HTMLElement)n.x+=o.offsetLeft,n.y+=o.offsetTop,o=o.offsetParent;else if(o instanceof SVGGraphicsElement&&"getBBox"in o){const{top:e,left:t}=o.getBBox();for(n.x+=t,n.y+=e;o&&"svg"!==o.tagName;)o=o.parentNode}return n}(r,e):M,l=r===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:r.clientWidth,height:r.clientHeight},f={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate;const a=o.length;for(let d=0;d<a;d++){const e=T(o[d],f[s],l[s],u[i]);c||e===t[i].interpolatorOffsets[d]||(c=!0),t[i].offset[d]=e}c&&(t[i].interpolate=x(w(a),t[i].offset),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function P(e,t,n,o={}){const r=o.axis||"y";return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let o=t;for(;o&&o!=e;)n.x.targetOffset+=o.offsetLeft,n.y.targetOffset+=o.offsetTop,o=o.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,o.target,n),update:t=>{!function(e,t,n){v(e,"x",t,n),v(e,"y",t,n),t.time=n}(e,n,t),(o.offset||o.target)&&_(e,n,o)},notify:"function"==typeof t?()=>t(n):C(t,n[r])}}function C(e,t){return e.pause(),e.forEachNative(((e,{easing:t})=>{var n,o;if(e.updateDuration)t||(e.easing=g),e.updateDuration(1);else{const r={duration:1e3};t||(r.easing="linear"),null===(o=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===o||o.call(n,r)}})),()=>{e.currentTime=t.progress}}const H=new WeakMap,B=new WeakMap,S=new WeakMap,k=e=>e===document.documentElement?window:e;function N(e,t={}){var{container:n=document.documentElement}=t,r=(0,o._T)(t,["container"]);let i=S.get(n);i||(i=new Set,S.set(n,i));const s=P(n,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(i.add(s),!H.has(n)){const e=()=>{const e=performance.now();for(const t of i)t.measure();for(const t of i)t.update(e);for(const t of i)t.notify()};H.set(n,e);const t=k(n);window.addEventListener("resize",e,{passive:!0}),n!==document.documentElement&&B.set(n,(l=e,"function"==typeof(u=n)?d(u):f(u,l))),t.addEventListener("scroll",e,{passive:!0})}var u,l;const c=H.get(n),a=requestAnimationFrame(c);return()=>{var t;"function"!=typeof e&&e.stop(),cancelAnimationFrame(a);const o=S.get(n);if(!o)return;if(o.delete(s),o.size)return;const r=H.get(n);H.delete(n),r&&(k(n).removeEventListener("scroll",r),null===(t=B.get(n))||void 0===t||t(),window.removeEventListener("resize",r))}}var R=n(33234),j=n(96681),I=n(58868),D=function(){return{scrollX:(0,R.B)(0),scrollY:(0,R.B)(0),scrollXProgress:(0,R.B)(0),scrollYProgress:(0,R.B)(0)}};function Y(e){void 0===e&&(e={});var t=e.container,n=e.target,r=(0,o._T)(e,["container","target"]),i=(0,j.h)(D);return(0,I.L)((function(){return N((function(e){var t=e.x,n=e.y;i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)}),(0,o.pi)((0,o.pi)({},r),{container:(null==t?void 0:t.current)||void 0,target:(null==n?void 0:n.current)||void 0}))}),[]),i}},23526:(e,t,n)=>{n.d(t,{H:()=>p});var o=n(70655),r=n(59180),i=function(e){return function(e){return"object"==typeof e&&e.mix}(e)?e.mix:void 0};var s=n(67294),u=n(33234),l=n(16014),f=n(96681);var c=n(58868);var a=n(54735);function d(e,t){var n=function(e){var t=(0,f.h)((function(){return(0,u.B)(e)}));if((0,s.useContext)(l._).isStatic){var n=(0,o.CR)((0,s.useState)(e),2)[1];(0,s.useEffect)((function(){return t.onChange(n)}),[])}return t}(t()),r=function(){return n.set(t())};return r(),function(e,t){(0,c.L)((function(){var n=e.map((function(e){return e.onChange(t)}));return function(){return n.forEach((function(e){return e()}))}}))}(e,(function(){return a.ZP.update(r,!1,!0)})),n}function p(e,t,n,s){var u="function"==typeof t?t:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=!Array.isArray(e[0]),s=n?0:-1,u=e[0+s],l=e[1+s],f=e[2+s],c=e[3+s],a=(0,r.s)(l,f,(0,o.pi)({mixer:i(f[0])},c));return n?a(u):a}(t,n,s);return Array.isArray(e)?h(e,u):h([e],(function(e){var t=(0,o.CR)(e,1)[0];return u(t)}))}function h(e,t){var n=(0,f.h)((function(){return[]}));return d(e,(function(){n.length=0;for(var o=e.length,r=0;r<o;r++)n[r]=e[r].get();return t(n)}))}}}]);