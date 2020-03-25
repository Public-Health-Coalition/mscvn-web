(this["webpackJsonpphc-explorer"]=this["webpackJsonpphc-explorer"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(69),r=n(66),i=n(21),c=n(7),u=n(44),m=(n(49),n(58)),d=n.n(m),s=n(59),v=n.n(s),h=function(e){var t;return o.a.createElement(c.b,{title:e.state,isOpen:!!(null===(t=e.schoolsByState)||void 0===t?void 0:t.length),onDismiss:e.onDismiss},o.a.createElement(c.a,{p:3},o.a.createElement(c.h,{fontFamily:"sans-serif"},function(){var t;return null===(t=e.schoolsByState)||void 0===t?void 0:t.map((function(e){return o.a.createElement(c.d,null,o.a.createElement(c.e,null,o.a.createElement(c.f,{fontSize:2,mb:4,textAlign:"center"},null===e||void 0===e?void 0:e.name),null===(t=(null===e||void 0===e?void 0:e.activities_info)||[])||void 0===t?void 0:t.map((function(e){var t;return o.a.createElement(c.h,{mb:4},o.a.createElement(c.h,{fontStyle:"italic"},null===e||void 0===e||null===(t=e.activity)||void 0===t?void 0:t.name,": "),null===e||void 0===e?void 0:e.details)})),o.a.createElement(c.a,{mb:5})));var t}))}())))};h.defaultProps={isOpen:!1,onDismiss:function(){},schoolsByState:[],state:""};var f=h,E=n(37),p=n(38),g=n(45),b=n(46),w=n(39),y=n(40),x=n.n(y),j=n(24),S=n(111);function O(){var e=Object(w.a)(["\n  query schools {\n    school {\n      data {\n        name\n        state\n        activities_info {\n          activity {\n            name\n          }\n          details\n        }\n      }\n    }\n  }\n"]);return O=function(){return e},e}function C(){var e=Object(w.a)(["\n  query contributors {\n    contributor {\n      data {\n        bio\n        homepage\n        name\n        photo\n        title\n      }\n    }\n  }\n"]);return C=function(){return e},e}var k=x()(C());a.Component;var A=x()(O());a.Component;var P=new d.a,z=function(e){var t,n,l,r,i,m=S.a(A,i).data,d=Object(a.useState)(null),s=Object(u.a)(d,2),h=s[0],E=s[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),b=g[0],w=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.d,{justifyContent:"center"},o.a.createElement(c.e,{width:150},o.a.createElement(c.c,{m:0,scheme:(null===m||void 0===m||null===(t=m.school)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.length)?"green":"red"},(null===m||void 0===m||null===(l=m.school)||void 0===l||null===(r=l.data)||void 0===r?void 0:r.length)?"Choose your state":"Loading data . . ."))),o.a.createElement(v.a,{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,customize:function(){var e;return m?((null===m||void 0===m||null===(e=m.school)||void 0===e?void 0:e.data)||[]).reduce((function(e,t){return e[(null===t||void 0===t?void 0:t.state)||""]={fill:P.hex(JSON.stringify(t))},e}),{}):{}}(),onClick:function(e){var t,n;if(!m)return null;var a=(null===(t=m.school)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.filter((function(t){return(null===t||void 0===t?void 0:t.state)===e.target.dataset.name})))||null;E(a),w(e.target.dataset.name)}}),o.a.createElement(f,{isOpen:!!(null===h||void 0===h?void 0:h.length),onDismiss:function(){return E(null)},schoolsByState:h||[],state:b||""}),o.a.createElement(c.a,{mb:8}))};z.defaultProps={};var W=z,B=function(e){return o.a.createElement(c.a,{mb:60,ml:3,mr:3},e.photo?o.a.createElement(c.d,{justifyContent:"center",mb:20},o.a.createElement("img",{src:e.photo,style:{borderRadius:"100%",maxWidth:140,maxHeight:140}})):null,o.a.createElement(c.f,{textAlign:"center",fontSize:3,mb:2},e.name),o.a.createElement(c.f,{textAlign:"center",fontSize:2,mb:2},e.title),o.a.createElement(c.h,{textAlign:"center"},o.a.createElement(c.h,null,e.bio),o.a.createElement(c.a,{mb:2}),o.a.createElement(c.g,{href:e.homepage,target:"_blank",mb:2},o.a.createElement(c.f,{fontSize:1,textAlign:"center"},e.homepage))))};B.defaultProps={bio:"",homepage:"",photo:"",title:""};var L=B,_=function(e){var t,n=S.a(k,t).data;return o.a.createElement(c.d,{justifyContent:"center"},o.a.createElement(c.e,null,o.a.createElement(c.f,{fontSize:5,mt:4,mb:6,textAlign:"center"},"Contributors"),o.a.createElement(c.d,{justifyContent:"center",flexWrap:"wrap",mb:8},o.a.createElement(c.e,{maxWidth:400},function(){var e,t,a;return(null===n||void 0===n||null===(e=n.contributor)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)?((null===n||void 0===n||null===(a=n.contributor)||void 0===a?void 0:a.data)||[]).map((function(e){return o.a.createElement(L,{bio:null===e||void 0===e?void 0:e.bio,homepage:null===e||void 0===e?void 0:e.homepage,name:null===e||void 0===e?void 0:e.name,photo:null===e||void 0===e?void 0:e.photo,title:null===e||void 0===e?void 0:e.title})})):o.a.createElement(c.c,{m:0,pl:3,pr:3,scheme:"red"},"Loading contributors . . .")}()))))},q=function(e){return o.a.createElement(c.d,{justifyContent:"center"},o.a.createElement(c.e,null,o.a.createElement(c.f,{fontSize:6,mt:6,mb:8,textAlign:"center"},"Public Health Coalition"),o.a.createElement(W,null),o.a.createElement(_,null)))};q.defaultProps={};var D=q,J=function(e){return o.a.createElement(r.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/"},o.a.createElement(D,null))))};J.defaultProps={};var F=J,G=n(71),H=Object(G.a)({},c.i),M=n(20),N=n(11),Q=n(72),R=n(70),U=n(68),I=n(64),$="3xavljei8dw1avPyGUqAMexj",K="data.publichealthcoalition.org",T=new M.a({link:N.a.from([Object(U.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.forEach((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))})),new Q.a({uri:"https://".concat(K,"/_/gql?access_token=").concat($)})]),cache:new R.a});var V=function(e){return o.a.createElement(l.a,{theme:H},o.a.createElement(F,null))};V.defaultProps={};var X;t.default=(X=V,function(e){return o.a.createElement(I.a,{client:T},o.a.createElement(X,e))})},109:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(26),r=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(43),c=n(51);i.a.initialize("UA-161712632-1"),i.a.pageview("".concat(window.location.pathname).concat(window.location.search));var u=function(e){return o.a.createElement(c.Reactant,e)};r.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,n){},77:function(e,t,n){e.exports=n(109)}},[[77,1,2]]]);
//# sourceMappingURL=main.12b148dc.chunk.js.map