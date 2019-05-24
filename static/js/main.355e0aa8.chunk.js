(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c});var a=[{id:1,name:"NYC",slug:"new-york-city",abbreviation:"nyc"},{id:2,name:"Westchester",slug:"westchester-county",abbreviation:"wc"},{id:3,name:"Long Island",slug:"long-island",abbreviation:"li"},{id:4,name:"DC Metro",slug:"dc-metro",abbreviation:"dc"},{id:5,name:"Northern New Jersey",slug:"northern-new-jersey",abbreviation:"nj"},{id:6,name:"Los Angeles",slug:"los-angeles",abbreviation:"la"},{id:7,name:"Online",slug:"online",abbreviation:"ol"},{id:8,name:"Connecticut",slug:"connecticut",abbreviation:"ct"},{id:9,name:"South Florida",slug:"south-florida",abbreviation:"fl"},{id:10,name:"Central New Jersey",slug:"central-new-jersey",abbreviation:"njw"},{id:11,name:"Tampa Bay",slug:"tampa-bay",abbreviation:"tp"}],r=function(e){return a.find(function(t){return t.slug===e})},o=function(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)},l=function(e){return"string"===typeof e?JSON.parse(e):e.json()},c=function(e){return fetch("https://dashboard.privateprep.com/feeds/practice_tests.json?locations=".concat(e.abbreviation),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(o).then(l)}},15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),l=n.n(o),c=n(4),i=(n(20),n(3));n(21);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("polygon",{points:"0 0 25 0 25 32 0 32"}),r.a.createElement("path",{fill:"#274548",d:"M15.6616015,22.9817713 L11.8539455,22.9817713 L11.8539455,18.4375387 C14.8306854,18.3995729 17.2410289,15.9979661 17.2410289,13.0501945 L17.2410289,10.981873 C19.8859516,11.6723079 21.8416947,14.0549317 21.8416947,16.8809417 C21.8416947,20.2447098 19.069319,22.9817713 15.6616015,22.9817713 M11.7822533,10.7787561 L14.0827235,10.7787561 L14.0827235,13.0501945 C14.0827235,14.3025229 13.0504648,15.3213617 11.7822533,15.3213617 C10.5137671,15.3213617 9.48205771,14.3025229 9.48205771,13.0501945 C9.48205771,11.7981373 10.5137671,10.7787561 11.7822533,10.7787561 M17.2410289,7.79545936 L17.2410289,7.66068084 L17.1045114,7.66068084 C16.3516052,3.3176668 12.5131848,0 7.902081,0 L0,0 L0,16.8803993 L0,24.3395903 L3.15830532,24.3395903 L3.15830532,16.8803993 L3.15830532,3.11807527 L7.902081,3.11807527 C10.7645527,3.11807527 13.177643,5.04971992 13.876986,7.66068084 L11.7822533,7.66068084 C8.77227679,7.66068084 6.32375239,10.0785587 6.32375239,13.0501945 C6.32375239,14.8915348 7.26399235,16.5199956 8.69564023,17.4924619 L8.69564023,24.5410802 L8.69564023,26.0998466 L8.69564023,32 L11.8539455,32 L11.8539455,26.0998466 L15.6616015,26.0998466 C20.811084,26.0998466 25,21.9642884 25,16.8809417 C25,12.3285735 21.640352,8.53904628 17.2410289,7.79545936"})),m=function(e){var t=e.svgRef,n=u(e,["svgRef"]);return r.a.createElement("svg",s({width:25,height:32,viewBox:"0 0 25 32",ref:t},n),f)},p=r.a.forwardRef(function(e,t){return r.a.createElement(m,s({svgRef:t},e))});n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("circle",{cx:5.5,cy:5.5,r:5.5,fill:"#EEC11A"}),r.a.createElement("path",{stroke:"#EEC11A",strokeLinecap:"square",d:"M5.5,11 L5.5,23.7368164"})),v=function(e){var t=e.svgRef,n=b(e,["svgRef"]);return r.a.createElement("svg",d({width:11,height:24,viewBox:"0 0 11 24",ref:t},n),g)},h=r.a.forwardRef(function(e,t){return r.a.createElement(v,d({svgRef:t},e))}),E=(n.p,n(10)),y=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,31))}),w=function(e){return Object(a.useEffect)(function(){document.title="Test Schedule - Private Prep"},[]),r.a.createElement("main",{className:"Home"},r.a.createElement("h1",null,"Select Location"),r.a.createElement("ul",{className:"locations__list"},E.c.map(function(e){return r.a.createElement("li",{className:"locations__list__item"},r.a.createElement(c.b,{to:"/locations/".concat(e.slug),className:"location-link"},r.a.createElement(h,{className:"pin"}),r.a.createElement("h3",null,e.name)))})))},L=function(e){return r.a.createElement("header",{className:"Menu"},r.a.createElement(c.b,{to:"/"},r.a.createElement(p,{className:"Logo"})),r.a.createElement("h1",{className:"title"},"Test Schedule"))},O=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement("div",{className:"App-body"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/locations/:slug",component:y}),r.a.createElement(i.a,{component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.355e0aa8.chunk.js.map