(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),j=c.n(s),a=c(13),i=c.n(a),l=c(3),r=c(14),b=c.n(r),u=function(e){var t=e.launches;return Object(n.jsx)("div",{children:t.map((function(e){return Object(n.jsx)(o,{launch:e,single:!0},e.id)}))})},o=function(e){var t=e.launch,c=Object(s.useState)(!0),j=Object(l.a)(c,2),a=j[0],i=j[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){i(!a)},children:"Click"}),a?Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Naziv: ",t.name,Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),t.date_utc]}),Object(n.jsx)("img",{src:t.links.patch.small,width:"100px",alt:"slike lansiranja"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Naziv: ",t.name,Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),t.static_fire_date_unix]}),Object(n.jsxs)("p",{children:["Lansiranje uspesno:",t.success?"DA":"Ne"]}),Object(n.jsx)("img",{src:t.links.patch.small,width:"100px",alt:"slike lansiranja"})]})]})},O=function(e){var t=e.select,c=e.all,s=e.setSelect;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("select",{value:t,onChange:function(e){s(Number(e.target.value))},children:[Object(n.jsx)("option",{value:"".concat(Number(c)),children:"All"}),Object(n.jsx)("option",{value:"10",children:"10"}),Object(n.jsx)("option",{value:"20",children:"20"}),Object(n.jsx)("option",{value:"50",children:"50"})]}),Object(n.jsx)("hr",{})]})},d=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],j=t[1],a=c.length-1;console.log(a);var i=Object(s.useState)(a),r=Object(l.a)(i,2),o=r[0],d=r[1];return console.log(o),Object(s.useEffect)((function(){b.a.get("https://api.spacexdata.com/v4/launches").then((function(e){j(e.data)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{all:a,select:o,setSelect:d}),Object(n.jsx)(u,{launches:c.slice(0,o)})]})};i.a.render(Object(n.jsx)(j.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d781414d.chunk.js.map