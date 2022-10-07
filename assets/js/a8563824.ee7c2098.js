"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=o,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(86564),a(97354),a(47634),a(14710),a(13566),a(91718),a(22741);const i={title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","animation","framer-motion"],image:"/img/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/framer-motion-react-animations",source:"@site/blog/2022-09-01-framer-text-animations.md",title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"},{label:"animation",permalink:"/blog/tags/animation"},{label:"framer-motion",permalink:"/blog/tags/framer-motion"}],readingTime:9.385,hasTruncateMarker:!0,authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],frontMatter:{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","animation","framer-motion"],image:"/img/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},nextItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},relatedPosts:[{title:"A Quick Start Guide to React Suspense",permalink:"/blog/react-suspense-guide",formattedDate:"September 23, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:4.55,date:"2022-09-23T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.845,date:"2022-09-16T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.775,date:"2021-11-12T00:00:00.000Z"}],authorPosts:[]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"When a tool like Framer Motion is available, why write many lines of CSS code to create an animation? Web applications look more exciting and beautiful when they are animated."),(0,o.kt)("p",null," Many developers avoid adding animation to their web applications since animation codes can be rigorous to write. However, with Framer Motion, you can execute animations with only a few lines of code. This external library in React.js makes animation incredibly simple, allowing the developer to concentrate on other aspects of the project."),(0,o.kt)("p",null,"In this article, we'll examine Framer Motion's functionality, installation process, and usability by using it to animate text and images."))}p.isMDXComponent=!0},86564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photos-1-a65c35e7ff3d9a5ced8f6661500c0e3f.gif"},97354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photos-2-da8c8684937cf9061d2f21c0fd3ca991.gif"},47634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photos-3-cb710a456c88ca8ee82efb9579edf973.gif"},14710:(e,t,a)=>{a.p},13566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scale1-cadce7ecae97e8baec61e0eec00aec8e.gif"},91718:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scale2-38d1f1ed6fa238404f6420af64c45b01.gif"},22741:(e,t,a)=>{a.p}}]);