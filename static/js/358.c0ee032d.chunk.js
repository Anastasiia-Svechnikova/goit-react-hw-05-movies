"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[358],{3623:function(e,n,t){t.d(n,{W:function(){return o}});var r,a=t(168),c=(0,t(6444).ZP)("section")(r||(r=(0,a.Z)(["\n    padding: 20px 30px;\n    text-align: center;\n"]))),s=t(184),o=function(e){var n=e.children;return(0,s.jsx)(c,{children:n})}},1358:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,a,c,s=t(885),o=t(2791),i=t(6498),u=t(7689),p=t(3623),d=t(168),l=t(6444),h=(0,l.ZP)("ul")(r||(r=(0,d.Z)(["\npadding: 0;\n\n"]))),f=(0,l.ZP)("li")(a||(a=(0,d.Z)(["\n\ntext-align: left;\nlist-style: none;\nborder-bottom: 1px solid black;\n"]))),v=(0,l.ZP)("p")(c||(c=(0,d.Z)(["\nwidth: 80%;\n\nfont-size: 14px;\nletter-spacing: 0.05rem;\nline-height: 1.3;\n\n"]))),g=t(184),m=function(e){var n=e.reviews.map((function(e){var n=e.content,t=e.id,r=e.author;return(0,g.jsxs)(f,{children:[(0,g.jsxs)("h4",{children:["Author: ",r]}),(0,g.jsxs)(v,{children:[" ",n]})]},t)}));return(0,g.jsx)(h,{children:n})},w=function(){var e=(0,o.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,o.useState)("idle"),c=(0,s.Z)(a,2),d=c[0],l=c[1],h=(0,o.useState)(""),f=(0,s.Z)(h,2),v=f[0],w=f[1],x=(0,u.UO)().moviesId;return(0,o.useEffect)((function(){i.b.getMovieById(x,"/reviews").then((function(e){e.results.length?(r(e.results),l("resolved")):l("not found")})).catch((function(e){w("Oops, smth went wrong.."),l("rejected"),console.log(e.message)}))}),[x]),(0,g.jsxs)(p.W,{children:["not found"===d&&(0,g.jsx)("p",{children:"We don't have any reviews for this movie"}),"resolved"===d&&(0,g.jsx)(m,{reviews:t}),"rejected"===d&&(0,g.jsx)("p",{children:v})]})}},6498:function(e,n,t){t.d(n,{b:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),s=t(4569),o=t.n(s),i="6712873235301bd9554e1f93bced51a2",u="https://api.themoviedb.org/3/",p=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(u,"trending/movie/day"),{params:{api_key:i}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(u,"search/movie"),{params:{query:n,api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",e.prev=1,e.next=4,o().get("".concat(u,"movie/").concat(n).concat(t),{params:{api_key:i}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),h={getMovieById:l,getTrending:p,getSearchMovies:d}}}]);
//# sourceMappingURL=358.c0ee032d.chunk.js.map