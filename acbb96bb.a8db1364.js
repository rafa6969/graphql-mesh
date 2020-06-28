(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{181:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var o=t(2),n=t(9),a=(t(0),t(209)),i={id:"resolvers-composition",title:"Resolvers Composition Transform",sidebar_label:"Resolvers Composition"},s={id:"transforms/resolvers-composition",isDocsHomePage:!1,title:"Resolvers Composition Transform",description:"The resolversComposition transform allow you add middleware to your existing resolvers.",source:"@site/docs/transforms/resolvers-composition.md",permalink:"/docs/transforms/resolvers-composition",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/resolvers-composition.md",sidebar_label:"Resolvers Composition",sidebar:"sidebar",previous:{title:"Mock Transform",permalink:"/docs/transforms/mock"},next:{title:"Apollo Federation Transform",permalink:"/docs/transforms/federation"}},c=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],l={rightToc:c};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"resolversComposition")," transform allow you add middleware to your existing resolvers."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-resolvers-composition\n")),Object(a.b)("h2",{id:"how-to-use"},"How to use?"),Object(a.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - resolversComposition:\n        - resolver: 'Query.me'\n          composer: is-auth#isAuth\n        - resolver: 'Mutation.*'\n          composer: is-admin#isAdmin\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"export const isAuth = next => (root, args, context, info) => {\n    if(!context.currentUser) {\n        throw new Error('Unauthorized');\n    }\n    return next(root, args, context, info);\n}\n")),Object(a.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/openapi-youtrack?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"odata-trippin-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(a.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(a.b)("p",null,Object(a.b)("ul",{parentName:"p"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"resolver")," (type: ",Object(a.b)("inlineCode",{parentName:"li"},"String"),", required) - The GraphQL Resolver path\nExample: Query.users"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"composer")," (type: ",Object(a.b)("inlineCode",{parentName:"li"},"String"),", required) - Path to the composer function\nExample: ./src/auth.js#authComposer"))))}p.isMDXComponent=!0},209:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},m=function(e){var r=p(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=Object(o.forwardRef)((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?n.a.createElement(b,s({ref:r},l,{components:t})):n.a.createElement(b,s({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);