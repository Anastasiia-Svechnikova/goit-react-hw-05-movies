"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{3623:function(n,e,r){r.d(e,{W:function(){return i}});var t,a=r(168),c=(0,r(6444).ZP)("section")(t||(t=(0,a.Z)(["\n    padding: 20px 30px;\n    background-color: aliceblue;\n"]))),o=r(184),i=function(n){var e=n.children;return(0,o.jsx)(c,{children:e})}},588:function(n,e,r){r.d(e,{e:function(){return l}});var t,a,c,o=r(168),i=r(6444),u=r(1087),s=(0,i.ZP)("ul")(t||(t=(0,o.Z)(["\n    padding: 0;\n    list-style: none;\n"]))),p=(0,i.ZP)("li")(a||(a=(0,o.Z)(["\n    padding: 5px 10px;\n"]))),d=(0,i.ZP)(u.rU)(c||(c=(0,o.Z)(["\ncolor: inherit;\ntext-decoration: none;\n"]))),f=r(184),l=function(n){var e=n.movies.map((function(n){var e=n.name,r=n.title,t=n.id;return(0,f.jsx)(p,{children:(0,f.jsx)(d,{to:"/movies/".concat(t),children:e||r})},t)}));return(0,f.jsx)(s,{children:e})}},5415:function(n,e,r){r.r(e);var t=r(885),a=r(2791),c=r(6498),o=r(3623),i=r(588),u=r(184);e.default=function(){var n=(0,a.useState)([]),e=(0,t.Z)(n,2),r=e[0],s=e[1];return(0,a.useEffect)((function(){c.b.getTrending().then((function(n){s(n.results)})).catch((function(n){console.log(n.message)}))}),[]),(0,u.jsx)("main",{children:(0,u.jsxs)(o.W,{children:[(0,u.jsx)("h1",{children:"Trending Today"}),(0,u.jsx)(i.e,{movies:r})]})})}},6498:function(n,e,r){r.d(e,{b:function(){return l}});var t=r(5861),a=r(7757),c=r.n(a),o=r(4569),i=r.n(o),u="6712873235301bd9554e1f93bced51a2",s="https://api.themoviedb.org/3/",p=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(s,"trending/movie/day"),{params:{api_key:u}});case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(s,"search/movie"),{params:{query:e,api_key:u}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=1,n.next=4,i().get("".concat(s,"movie/").concat(e).concat(r),{params:{api_key:u}});case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(1),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),l={getMovieById:f,getTrending:p,getSearchMovies:d}}}]);
//# sourceMappingURL=415.8450ae22.chunk.js.map