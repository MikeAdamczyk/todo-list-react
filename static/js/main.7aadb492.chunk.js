(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(24)},21:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(11),c=t.n(a),i=(t(21),t(3)),u=t(2),l=t(1);function d(){var n=Object(u.a)(["\n    padding: 10px;\n    background-color: hsl(180, 100%, 25%);\n    border: none;\n    color: white;\n    transition: 0.5s;\n\n    &:hover {\n    background-color: hsl(180, 100%, 35%);\n    transform: scale(1.1);\n    cursor: pointer;\n    }\n\n    &:active {\n    background-color: hsl(180, 100%, 45%);\n    }\n\n    @media(max-width: 767px) {\n        &:hover {\n            transform: scaleY(1.1);\n        }\n    }\n"]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n    padding: 10px;\n    border: 2px solid #f2f2f2;\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n    margin-bottom: 10px;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return f=function(){return n},n}var m=l.c.form(f(),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.breakpoints.mobile})),b=l.c.input(s()),g=l.c.button(d()),p=function(n){var e=n.addNewTask,t=Object(r.useState)(""),a=Object(i.a)(t,2),c=a[0],u=a[1],l=Object(r.useRef)(null);return o.a.createElement(m,{onSubmit:function(n){n.preventDefault();var t=c.trim();t&&(e(t),u(""))}},o.a.createElement(b,{ref:l,value:c,type:"text",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return u(e.value)}}),o.a.createElement(g,{onClick:function(){return l.current.focus()}},"Dodaj zadanie!"))};function h(){var n=Object(u.a)(["\n        background-color: hsl(0, 100%, 40%);\n\n        &:hover{\n            background-color: hsl(0, 100%, 50%);\n            cursor: pointer;\n        }\n\n        &:active{\n            background-color: hsl(0, 100%, 70%);\n        }\n    "]);return h=function(){return n},n}function v(){var n=Object(u.a)(["\n        background-color: hsl(120, 100%, 25%);\n\n        &:hover{\n            background-color: hsl(120, 100%, 35%);\n            cursor: pointer;\n        }\n\n        &:active{\n            background-color: hsl(120, 100%, 45%);\n        }\n    "]);return v=function(){return n},n}function k(){var n=Object(u.a)(["\n    text-decoration: none;\n    min-width: 40px;\n    min-height: 40px;\n    padding: 10px;\n    color: white;\n    border: none;\n    transition: 0.5s;\n\n    ","\n\n    ","\n"]);return k=function(){return n},n}function x(){var n=Object(u.a)(["\n        text-decoration: line-through;\n        color: #ccc;\n    "]);return x=function(){return n},n}function j(){var n=Object(u.a)(["\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    hyphens: auto;\n    text-align: justify;\n\n    ","\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n        display: none;\n    "]);return O=function(){return n},n}function w(){var n=Object(u.a)(["\n    padding: 10px;\n    border-bottom: 2px solid #f2f2f2;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 20px;\n    align-items: center;\n\n    ","\n"]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\n    background-color: white;\n    padding: 0px;\n    margin: 0px;\n    display: grid;\n    list-style: none;\n"]);return E=function(){return n},n}var y=l.c.ul(E()),D=l.c.li(w(),(function(n){return n.hidden&&Object(l.b)(O())})),z=l.c.span(j(),(function(n){return n.done&&Object(l.b)(x())})),C=l.c.button(k(),(function(n){return n.toggleDone&&Object(l.b)(v())}),(function(n){return n.remove&&Object(l.b)(h())})),T=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,a=n.toggleTaskDone;return o.a.createElement(y,null,e.map((function(n){return o.a.createElement(D,{key:n.id,hidden:n.done&&t},o.a.createElement(C,{toggleDone:!0,onClick:function(){return a(n.id)}},n.done?"\u2713":""),o.a.createElement(z,{done:n.done},n.content),o.a.createElement(C,{remove:!0,onClick:function(){return r(n.id)}},"X"))})))};function S(){var n=Object(u.a)(["\n    font-size: 15px;\n    color: hsl(180, 100%, 25%);\n    background: none;\n    border: none;\n    margin-left: 20px;\n    transition: 0.5s;\n    padding: 10px;\n\n    &:hover {\n        cursor: pointer;\n        color: hsl(180, 100%, 35%);\n    }\n\n    &:active {\n        cursor: pointer;\n        color: hsl(180, 100%, 45%);\n    }\n\n    &:disabled {\n        cursor: pointer;\n        color: #ccc;\n    }\n"]);return S=function(){return n},n}function N(){var n=Object(u.a)(["\n    display: flex;\n    align-content: center;\n    flex-wrap: wrap;\n\n    @media (max-width: ","px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-content: center;\n    }\n"]);return N=function(){return n},n}var A=l.c.span(N(),(function(n){return n.theme.breakpoints.mobile})),H=l.c.button(S()),J=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,a=n.setAllDone;return e.length>0&&o.a.createElement(A,null,o.a.createElement(H,{onClick:r,disabled:e.every((function(n){return!n.done}))},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement(H,{onClick:a,disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie"))};function I(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n    margin-bottom: 3px;\n"]);return I=function(){return n},n}var W=l.c.h2(I(),(function(n){return n.theme.colors.backgroundColor})),B=function(n){var e=n.title,t=n.body;return o.a.createElement("section",null,o.a.createElement(W,null,e),t)};function L(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n"]);return L=function(){return n},n}function M(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n    margin-bottom: 3px;\n    display: grid;\n    grid-template-columns: 1fr auto;\n\n    @media (max-width: ","px) {\n        grid-template-columns: auto;\n    }\n"]);return M=function(){return n},n}var U=l.c.h2(M(),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.breakpoints.mobile})),P=l.c.div(L(),(function(n){return n.theme.colors.backgroundColor})),R=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return o.a.createElement("section",null,o.a.createElement(U,null,o.a.createElement("span",null,e),r),o.a.createElement(P,null,t))},X=function(n){var e=n.title;return o.a.createElement("header",null,o.a.createElement("h1",null,e))};function Y(){var n=Object(u.a)(["\n    text-align: center;\n    margin: 20px auto;\n    font-size: 14px;\n    color: #ccc;\n"]);return Y=function(){return n},n}var $=l.c.footer(Y()),q=function(n){var e=n.title;return o.a.createElement($,null,e)};function F(){var n=Object(u.a)(["\n    max-width: 900px;\n    margin: 0 auto;\n    padding: 20px;\n"]);return F=function(){return n},n}var G=l.c.div(F()),K=function(n){var e=n.children;return o.a.createElement(G,null,e)},Q={colors:{backgroundColor:"white"},breakpoints:{mobile:767}},V=t(15),Z=t(5);var _=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],a=e[1],c=function(){var n=Object(r.useState)((function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]})),e=Object(i.a)(n,2),t=e[0],o=e[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]);return{tasks:t,removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(Z.a)(Object(Z.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){o((function(n){return n.map((function(n){return Object(Z.a)(Object(Z.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){o((function(e){return[].concat(Object(V.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),u=c.tasks,d=c.removeTask,s=c.toggleTaskDone,f=c.setAllDone,m=c.addNewTask;return o.a.createElement(l.a,{theme:Q},o.a.createElement(K,null,o.a.createElement(X,{title:"Lista zada\u0144"}),o.a.createElement(B,{title:"Dodaj nowe zadanie",body:o.a.createElement(p,{addNewTask:m})}),o.a.createElement(R,{title:"Lista zada\u0144",extraHeaderContent:o.a.createElement(J,{tasks:u,hideDone:t,toggleHideDone:function(){a((function(n){return!n}))},setAllDone:f}),body:o.a.createElement(T,{tasks:u,hideDone:t,removeTask:d,toggleTaskDone:s})}),o.a.createElement(q,{title:"\xa9 Micha\u0142 Adamczyk 2020. Wszystkie prawa zastrze\u017cone!"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7aadb492.chunk.js.map