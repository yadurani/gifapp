(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(10),c=n.n(r),i=n(3),s=n(2),u=n(0),o=function(t){var e=t.handleAdd,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e(c),i(""))},children:Object(u.jsx)("input",{onChange:function(t){return i(t.target.value)},placeholder:"Search",value:c,type:"text"})})},d=n(4),l=n(11),j=function(t){return Object(i.a)(new Set(t.map((function(t){return t.id})))).map((function(e){return t.find((function(t){return t.id===e}))}))},f=n(5),b=n.n(f),p=n(8),h=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i,s,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://api.giphy.com/v1/gifs/search?q=","9A6jp0e4admbMZUm8bRFJ9VwZiW9r8R6","https://api.allorigins.win/raw?url=",a="".concat("https://api.allorigins.win/raw?url=").concat("http://api.giphy.com/v1/gifs/search?q=").concat(encodeURI(e),"&limit=10&offset=").concat(n,"&api_key=").concat("9A6jp0e4admbMZUm8bRFJ9VwZiW9r8R6"),t.next=6,fetch(a);case 6:return r=t.sent,t.next=9,r.json();case 9:return c=t.sent,i=c.data,s=c.pagination,u=i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",{gifs:u,pagination:s});case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(t){var e=Object(a.useState)(0),n=Object(s.a)(e,2),r=n[0],c=n[1],u=Object(a.useState)({data:[],pagination:null,loading:!1}),o=Object(s.a)(u,2),l=o[0],j=o[1],f=Object(a.useState)(!1),O=Object(s.a)(f,2),m=O[0],g=O[1],v=function(){var e=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j((function(t){return Object(d.a)(Object(d.a)({},t),{},{loading:!0})})),e.next=3,h(t,10*r);case 3:n=e.sent,j((function(t){return Object(d.a)(Object(d.a)({},t),{},{data:[].concat(Object(i.a)(n.gifs),Object(i.a)(t.data)),pagination:n.pagination.total_count,offset:10*r,loading:!1})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[t,r]),{state:l,disableBtn:m,handlePage:function(){l.offset>=l.pagination&&g(!0),l.offset<=l.pagination&&c((function(t){return t+1}))}}},m=function(t){var e=t.url,n=t.title;return Object(u.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(u.jsx)("img",{src:e,alt:n})})},g=function(){return Array(12).fill(10).map((function(t,e){return Object(u.jsx)("div",{className:"skeleton__wrapper"},e)}))},v=function(t){var e=t.category,n=O(e),a=n.state,r=n.handlePage,c=n.disableBtn,i=a.data,s=a.loading,o=j(i),f=0===o.length;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"subtitle",children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),Object(u.jsx)("hr",{}),!f&&Object(u.jsx)("button",{disabled:c,onClick:r,children:"Ver m\xe1s"})]}),f&&!s&&Object(u.jsx)("div",{className:"notfound",children:"Ups!! Not found, try again."}),Object(u.jsxs)("div",{className:"card-grid",children:[s&&Object(u.jsx)(g,{}),null===o||void 0===o?void 0:o.map((function(t){var e=t.id,n=Object(l.a)(t,["id"]);return Object(u.jsx)(m,Object(d.a)({},n),e)}))]})]})},x=function(){var t=Object(a.useState)(["One punch"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"title",children:".GIFAPP."}),Object(u.jsx)(o,{handleAdd:function(t){return r((function(e){return[t].concat(Object(i.a)(e))}))}}),Object(u.jsx)("ol",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(u.jsx)(v,{category:t},t)}))}),Object(u.jsxs)("small",{children:["Create by Yadu L\xf3pez \ud83d\udc9b. Github ",Object(u.jsx)("a",{href:"https://yadurani.github.io/gifapp/",target:"_blank",rel:"noreferrer",children:"GIFAPP"}),"."]})]})};n(18);c.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.55a8fda7.chunk.js.map