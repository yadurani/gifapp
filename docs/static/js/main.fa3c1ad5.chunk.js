(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(10),r=n.n(c),i=n(3),s=n(2),u=n(0),o=function(t){var e=t.handleAdd,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e(r),i(""))},children:Object(u.jsx)("input",{onChange:function(t){return i(t.target.value)},placeholder:"Search",value:r,type:"text"})})},d=n(4),j=n(11),l=function(t){return Object(i.a)(new Set(t.map((function(t){return t.id})))).map((function(e){return t.find((function(t){return t.id===e}))}))},f=n(5),b=n.n(f),p=n(8),O=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,c,r,i,s,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.giphy.com/v1/gifs/search?q=","9A6jp0e4admbMZUm8bRFJ9VwZiW9r8R6",a="".concat("https://api.giphy.com/v1/gifs/search?q=").concat(encodeURI(e),"&limit=10&offset=").concat(n,"&api_key=").concat("9A6jp0e4admbMZUm8bRFJ9VwZiW9r8R6"),t.next=5,fetch(a);case 5:return c=t.sent,t.next=8,c.json();case 8:return r=t.sent,i=r.data,s=r.pagination,u=i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",{gifs:u,pagination:s});case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(t){var e=Object(a.useState)(0),n=Object(s.a)(e,2),c=n[0],r=n[1],u=Object(a.useState)({data:[],pagination:null,loading:!1}),o=Object(s.a)(u,2),j=o[0],l=o[1],f=Object(a.useState)(!1),h=Object(s.a)(f,2),m=h[0],g=h[1],v=function(){var e=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((function(t){return Object(d.a)(Object(d.a)({},t),{},{loading:!0})})),e.next=3,O(t,10*c);case 3:n=e.sent,l((function(t){return Object(d.a)(Object(d.a)({},t),{},{data:[].concat(Object(i.a)(n.gifs),Object(i.a)(t.data)),pagination:n.pagination.total_count,offset:10*c,loading:!1})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[t,c]),{state:j,disableBtn:m,handlePage:function(){j.offset>=j.pagination&&g(!0),j.offset<=j.pagination&&r((function(t){return t+1}))}}},m=function(t){var e=t.url,n=t.title;return Object(u.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(u.jsx)("img",{src:e,alt:n})})},g=function(){return Array(12).fill(10).map((function(t,e){return Object(u.jsx)("div",{className:"skeleton__wrapper"},e)}))},v=function(t){var e=t.category,n=h(e),a=n.state,c=n.handlePage,r=n.disableBtn,i=a.data,s=a.loading,o=l(i),f=0===o.length;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"subtitle",children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),Object(u.jsx)("hr",{}),!f&&Object(u.jsx)("button",{disabled:r,onClick:c,children:"Ver m\xe1s"})]}),f&&!s&&Object(u.jsx)("div",{className:"notfound",children:"Ups!! Not found, try again."}),Object(u.jsxs)("div",{className:"card-grid",children:[s&&Object(u.jsx)(g,{}),null===o||void 0===o?void 0:o.map((function(t){var e=t.id,n=Object(j.a)(t,["id"]);return Object(u.jsx)(m,Object(d.a)({},n),e)}))]})]})},x=function(){var t=Object(a.useState)(["One punch"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"title",children:".GIFAPP."}),Object(u.jsx)(o,{handleAdd:function(t){return c((function(e){return[t].concat(Object(i.a)(e))}))}}),Object(u.jsx)("ol",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(u.jsx)(v,{category:t},t)}))}),Object(u.jsxs)("small",{children:["Create by Yadu L\xf3pez \ud83d\udc9b. Github ",Object(u.jsx)("a",{href:"https://yadurani.github.io/gifapp/",target:"_blank",rel:"noreferrer",children:"GIFAPP"}),"."]})]})};n(18);r.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fa3c1ad5.chunk.js.map