"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{600:function(n,e,t){t.d(e,{$u:function(){return s},Nj:function(){return i},kG:function(){return p},lc:function(){return o},mu:function(){return d}});var r=t(861),a=t(757),u=t.n(a),c=t(912),o=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=d40d4389e7b694736d94163c6dd7b0a1");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US&page=1&include_adult=false&query=".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},305:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,u,c,o,i,s,d=t(439),p=t(791),f=t(600),l=t(87),v=t(689),g=t(168),h=t(444),m=h.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 0 auto;\n  padding: 30px;\n  justify-content: center;\n  align-items: center;\n"]))),x=h.ZP.form(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),b=h.ZP.input(u||(u=(0,g.Z)(["\n  border: 1px solid #1f85cf;\n  border-radius: 10px;\n  padding: 5px 10px;\n"]))),Z=h.ZP.button(c||(c=(0,g.Z)(["\n  border: none;\n  border-radius: 10px;\n  background-color: #1f85cf;\n  padding: 5px 10px;\n  color: #fff;\n\n  &:hover {\n    color: #1f85cf;\n    background-color: #fff;\n    border: 1px solid #1f85cf;\n  }\n"]))),k=h.ZP.ul(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),y=h.ZP.li(i||(i=(0,g.Z)(["\n  color: #1f85cf;\n"]))),w=(0,h.ZP)(l.OL)(s||(s=(0,g.Z)(["\n  color: #1f85cf;\n  text-decoration: none;\n"]))),j=t(664),_=t(184);function S(){var n=(0,l.lr)(),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(null),u=(0,d.Z)(a,2),c=u[0],o=u[1],i=(0,p.useState)(!1),s=(0,d.Z)(i,2),g=s[0],h=s[1],S=(0,p.useState)(null),P=(0,d.Z)(S,2),U=P[0],C=P[1],G=t.get("movie"),M=(0,v.TH)();(0,p.useEffect)((function(){null!==G&&(h(!0),(0,f.kG)(G).then((function(n){o(n),0===n.length&&alert("Movie not found. Please try again.")})).catch((function(n){return C(n.message)})).finally(h(!1)))}),[G]);return(0,_.jsxs)(m,{children:[(0,_.jsxs)(x,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.movie.value;r({movie:e}),n.target.reset()},children:[(0,_.jsx)(b,{type:"text",placeholder:"input movie name",name:"movie"}),(0,_.jsx)(Z,{type:"submit",children:"Search"})]}),null!==c&&(0,_.jsx)(k,{children:c.map((function(n){var e=n.id,t=n.original_title;return(0,_.jsx)(y,{children:(0,_.jsxs)(w,{to:"/movies/".concat(e),state:M,children:[t," "]})},e)}))}),g&&(0,_.jsx)(j.Z,{}),U&&(0,_.jsxs)("div",{children:["Oops, some error occured... Message:",U]})]})}}}]);
//# sourceMappingURL=305.125aea2e.chunk.js.map