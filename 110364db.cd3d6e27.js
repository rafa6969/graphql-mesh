(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(9),i=(t(0),t(209)),c={id:"cache",title:"Cache Transform",sidebar_label:"Cache"},o={id:"transforms/cache",isDocsHomePage:!1,title:"Cache Transform",description:"The cache transform allow you to apply caching over your data-sources easily.",source:"@site/docs/transforms/cache.md",permalink:"/docs/transforms/cache",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/cache.md",sidebar_label:"Cache",sidebar:"sidebar",previous:{title:"Prefix Transform",permalink:"/docs/transforms/prefix"},next:{title:"Snapshot Transform",permalink:"/docs/transforms/snapshot"}},l=[{value:"How to use?",id:"how-to-use",children:[{value:"Simple caching",id:"simple-caching",children:[]},{value:"The Cache Key",id:"the-cache-key",children:[]}]},{value:"Cache Invalidation",id:"cache-invalidation",children:[{value:"TTL",id:"ttl",children:[]},{value:"Operation-based",id:"operation-based",children:[]},{value:"Programmatic",id:"programmatic",children:[]}]},{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={rightToc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cache")," transform allow you to apply caching over your data-sources easily. "),Object(i.b)("p",null,"It allow you to configure custom invalidation rules (by ttl / mutation), and selective caching, according to your needs."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This transform is being applied globally, because of the need to communicate with other GraphQL operations from your mesh.")),Object(i.b)("p",null,"To get started with this transform, install it from npm:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-cache\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"GraphQL Mesh uses a default in-memory LRU cache, but you can replace it with any other key=>value cache mechanism. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recipes/custom-cache"}),"custom cache section")," for more info.")),Object(i.b)("h2",{id:"how-to-use"},"How to use?"),Object(i.b)("h3",{id:"simple-caching"},"Simple caching"),Object(i.b)("p",null,"To cache some of your queries, apply the following transform rule. This following example will cache all ",Object(i.b)("inlineCode",{parentName:"p"},"Query.*")," in your schema, forever:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transform:\n  - cache:\n      - field: Query.*\n")),Object(i.b)("p",null,"You can also apply it to a specific field, or multiple fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transform:\n  - cache:\n      - field: Query.users\n  - cache:\n      - field: Query.posts\n")),Object(i.b)("h3",{id:"the-cache-key"},"The Cache Key"),Object(i.b)("p",null,"Each cache record is being stored with a key. The default way of creating this key is to use the GraphQL type name, the GraphQL field name, and a hash of the ",Object(i.b)("inlineCode",{parentName:"p"},"args")," object. This is in order to make that we can distinct the cache key according to the data it's storing."),Object(i.b)("p",null,"You can customize the ",Object(i.b)("inlineCode",{parentName:"p"},"cacheKey")," according to your needs, and you can use custom helpers to help you create those cache keys dynamically. "),Object(i.b)("p",null,"The following example creates a ",Object(i.b)("inlineCode",{parentName:"p"},"cacheKey")," by an GraphQL query argument called ",Object(i.b)("inlineCode",{parentName:"p"},"userId"),", per day:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transform:\n  - cache:\n      - field: Query.user\n        cacheKey: user-{args.id}-{yyyy-mm-dd | date}\n")),Object(i.b)("h2",{id:"cache-invalidation"},"Cache Invalidation"),Object(i.b)("h3",{id:"ttl"},"TTL"),Object(i.b)("p",null,"Invalidation by TTL is the simplest way to deal with your cache. You can specify any time (in seconds) to keep your cache. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transform:\n  - cache:\n      - field: Query.*\n        invalidate:\n          ttl: 3600 # 1 hour\n")),Object(i.b)("h3",{id:"operation-based"},"Operation-based"),Object(i.b)("p",null,"GraphQL Mesh has a built-in operation-based caching solution."),Object(i.b)("p",null,"You can cache data easily, and invalidate it only when it changes by a mutation."),Object(i.b)("p",null,"For example, given the following schema:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  user(id: ID!): User!\n}\n\ntype Mutation {\n  updateUser(userIdToUpdate: ID!, setFields: UpdateUserInput!): User!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  name: String\n}\n\ninput UpdateUserInput {\n  email: String\n  name: String\n}\n")),Object(i.b)("p",null,"You can set a simple caching, based on a user id: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transform:\n  - cache:\n      - field: Query.user\n        cacheKey: user-{args.id}\n")),Object(i.b)("p",null,"And you can add operation-based invalidation, so when ",Object(i.b)("inlineCode",{parentName:"p"},"updateUser")," is done successfully, it will invalidate the matching cache record to make sure the data will be fetched next time from the remote source:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transform:\n  - cache:\n      - field: Query.user\n        cacheKey: user-{args.id}\n        invalidates:\n          effectingOperations:\n            - operation: Mutation.updateUser\n              matchKey: {args.userIdToUpdate}\n")),Object(i.b)("p",null,"This way, when someone uses ",Object(i.b)("inlineCode",{parentName:"p"},"updateUser")," with a specific user id, it will update the data record, and then invalidate the cache automatically."),Object(i.b)("h3",{id:"programmatic"},"Programmatic"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getMesh")," method of GraphQL Mesh returns the general key=>value cache it uses at the moment, so you can easily access it and invalidate records according to your needs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const { schema, execute, cache } = getMesh(config);\n\ncache.delete(SOME_KEY);\n")),Object(i.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(i.b)("p",null,"You can check Location Weather example that uses OpenAPI handler with cache transform;"),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/openapi-location-weather?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"typescript-location-weather-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - The type and field to apply cache to, you can use wild cards as well, for example: ",Object(i.b)("inlineCode",{parentName:"li"},"Query.*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cacheKey")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Cache key to use to store your resolvers responses.\nThe defualt is: {typeName}-{fieldName}-{argsHash}-{fieldNamesHash}")),Object(i.b)("p",{parentName:"p"},"Available variables:"),Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},"{args.argName} - use resolver argument"),Object(i.b)("li",{parentName:"ul"},"{typeName} - use name of the type"),Object(i.b)("li",{parentName:"ul"},"{fieldName} - use name of the field"),Object(i.b)("li",{parentName:"ul"},"{argsHash} - a hash based on the 'args' object"),Object(i.b)("li",{parentName:"ul"},"{fieldNamesHash} - a hash based on the field names selected by the client"),Object(i.b)("li",{parentName:"ul"},"{info} - the GraphQLResolveInfo of the resolver")),Object(i.b)("p",{parentName:"p"},"Available interpolations:"),Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},"{format|date} - returns the current date with a specific format")),Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"invalidate")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),") - Invalidation rules: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"effectingOperations")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of Object"),", required) - Invalidate the cache when a specific operation is done without an error: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operation")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - Path to the operation that could effect it. In a form: Mutation.something. Note that wildcard is not supported in this field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"matchKey")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Cache key to invalidate on sucessful resolver (no error), see ",Object(i.b)("inlineCode",{parentName:"li"},"cacheKey")," for list of available options in this field."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ttl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),") - Specified in seconds, the time-to-live (TTL) value limits the lifespan"))))))}p.isMDXComponent=!0},209:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o({},a,{},e)),t},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return t?r.a.createElement(m,o({ref:a},s,{components:t})):r.a.createElement(m,o({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);