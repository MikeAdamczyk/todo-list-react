(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=t(16),u=t(2),l=t(1);function d(){var n=Object(u.a)(["\n    padding: 10px;\n    background-color: ",";\n    border: none;\n    color: white;\n    transition: 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.1);\n        cursor: pointer;\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n@media(max-width: ","px) {\n        &:hover {\n            transform: scaleY(1.1);\n        }\n    }\n"]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n    padding: 10px;\n    border: 2px solid ",";\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n    margin-bottom: 10px;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return f=function(){return n},n}var m=l.d.form(f(),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.breakpoints.mobile})),b=l.d.input(s(),(function(n){return n.theme.colors.concrete})),p=l.d.button(d(),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.breakpoints.mobile})),g=t(4),h=t(6),v=Object(h.b)({name:"tasks",initialState:{tasks:[{content:"Pierwsze zadanie",done:!1,id:1}],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},setAllDone:function(n){n.tasks.map((function(n){return n.done=!0}))},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)}}}),k=v.actions,x=k.addTask,j=k.toggleHideDone,E=k.toggleTaskDone,O=k.setAllDone,y=k.removeTask,w=function(n){return n.tasks},z=v.reducer,D=function(){var n=Object(r.useState)(""),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useRef)(null),u=Object(g.b)();return o.a.createElement(m,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(u(x({content:e,done:!1,id:Object(h.c)()})),a(""),c.current.focus())}},o.a.createElement(b,{ref:c,value:t,type:"text",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return a(e.value)}}),o.a.createElement(p,null,"Dodaj zadanie!"))};function C(){var n=Object(u.a)(["\n        background-color: hsl(0, 100%, 40%);\n\n        &:hover{\n            background-color: hsl(0, 100%, 50%);\n            cursor: pointer;\n        }\n\n        &:active{\n            background-color: hsl(0, 100%, 70%);\n        }\n    "]);return C=function(){return n},n}function T(){var n=Object(u.a)(["\n        background-color: hsl(120, 100%, 25%);\n\n        &:hover{\n            background-color: hsl(120, 100%, 35%);\n            cursor: pointer;\n        }\n\n        &:active{\n            background-color: hsl(120, 100%, 45%);\n        }\n    "]);return T=function(){return n},n}function G(){var n=Object(u.a)(["\n    text-decoration: none;\n    min-width: 40px;\n    min-height: 40px;\n    padding: 10px;\n    color: white;\n    border: none;\n    transition: 0.5s;\n\n    ","\n\n    ","\n"]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n        text-decoration: line-through;\n        color: ",";\n    "]);return H=function(){return n},n}function S(){var n=Object(u.a)(["\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    hyphens: auto;\n    text-align: justify;\n\n    ","\n"]);return S=function(){return n},n}function A(){var n=Object(u.a)(["\n        display: none;\n    "]);return A=function(){return n},n}function F(){var n=Object(u.a)(["\n    padding: 10px;\n    border-bottom: 2px solid ",";\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 20px;\n    align-items: center;\n\n    ","\n"]);return F=function(){return n},n}function I(){var n=Object(u.a)(["\n    background-color: white;\n    padding: 0px;\n    margin: 0px;\n    display: grid;\n    list-style: none;\n"]);return I=function(){return n},n}var M=l.d.ul(I()),W=l.d.li(F(),(function(n){return n.theme.colors.concrete}),(function(n){return n.hidden&&Object(l.c)(A())})),B=l.d.span(S(),(function(n){return n.done&&Object(l.c)(H(),(function(n){return n.theme.colors.lightGrey}))})),J=l.d.button(G(),(function(n){return n.toggleDone&&Object(l.c)(T())}),(function(n){return n.remove&&Object(l.c)(C())})),L=function(){var n=Object(g.c)(w),e=n.tasks,t=n.hideDone,r=Object(g.b)();return o.a.createElement(M,null,e.map((function(n){return o.a.createElement(W,{key:n.id,hidden:n.done&&t},o.a.createElement(J,{toggleDone:!0,onClick:function(){return r(E(n.id))}},n.done?"\u2713":""),o.a.createElement(B,{done:n.done},n.content),o.a.createElement(J,{remove:!0,onClick:function(){return r(y(n.id))}},"X"))})))};function P(){var n=Object(u.a)(["\n    font-size: 15px;\n    color: ",";\n    background: none;\n    border: none;\n    margin-left: 20px;\n    transition: 0.5s;\n    padding: 10px;\n\n    &:hover {\n        cursor: pointer;\n        filter: brightness(110%);\n    }\n\n    &:active {\n        cursor: pointer;\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        cursor: pointer;\n        color: ",";\n    }\n"]);return P=function(){return n},n}function U(){var n=Object(u.a)(["\n    display: flex;\n    align-content: center;\n    flex-wrap: wrap;\n\n    @media (max-width: ","px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-content: center;\n    }\n"]);return U=function(){return n},n}var R=l.d.span(U(),(function(n){return n.theme.breakpoints.mobile})),X=l.d.button(P(),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.colors.lightGrey})),Y=function(){var n=Object(g.c)(w),e=n.tasks,t=n.hideDone,r=Object(g.b)();return e.length>0&&o.a.createElement(R,null,o.a.createElement(X,{onClick:function(){return r(j())},disabled:e.every((function(n){return!n.done}))},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement(X,{onClick:function(){return r(O())},disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie"))};function $(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n    margin-bottom: 3px;\n"]);return $=function(){return n},n}var q=l.d.h2($(),(function(n){return n.theme.colors.backgroundColor})),K=function(n){var e=n.title,t=n.body;return o.a.createElement("section",null,o.a.createElement(q,null,e),t)};function N(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n"]);return N=function(){return n},n}function Q(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 20px;\n    margin-bottom: 3px;\n    display: grid;\n    grid-template-columns: 1fr auto;\n\n    @media (max-width: ","px) {\n        grid-template-columns: auto;\n    }\n"]);return Q=function(){return n},n}var V=l.d.h2(Q(),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.breakpoints.mobile})),Z=l.d.div(N(),(function(n){return n.theme.colors.backgroundColor})),_=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return o.a.createElement("section",null,o.a.createElement(V,null,o.a.createElement("span",null,e),r),o.a.createElement(Z,null,t))},nn=function(n){var e=n.title;return o.a.createElement("header",null,o.a.createElement("h1",null,e))};function en(){var n=Object(u.a)(["\n    text-align: center;\n    margin: 20px auto;\n    font-size: 14px;\n    color: ",";\n"]);return en=function(){return n},n}var tn=l.d.footer(en(),(function(n){return n.theme.colors.lightGrey})),rn=function(n){var e=n.title;return o.a.createElement(tn,null,e)};function on(){var n=Object(u.a)(["\n    max-width: 900px;\n    margin: 0 auto;\n    padding: 20px;\n"]);return on=function(){return n},n}var an=l.d.div(on()),cn=function(n){var e=n.children;return o.a.createElement(an,null,e)};var un=function(){return o.a.createElement(cn,null,o.a.createElement(nn,{title:"Lista zada\u0144"}),o.a.createElement(K,{title:"Dodaj nowe zadanie",body:o.a.createElement(D,null)}),o.a.createElement(_,{title:"Lista zada\u0144",extraHeaderContent:o.a.createElement(Y,null),body:o.a.createElement(L,null)}),o.a.createElement(rn,{title:"\xa9 Micha\u0142 Adamczyk 2020. Wszystkie prawa zastrze\u017cone!"}))},ln=function(){return o.a.createElement(un,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function dn(){var n=Object(u.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        background-color: ",";\n        margin: 20px auto;\n        line-height: 1.4;\n        color: rgb(49, 49, 49);\n    }\n"]);return dn=function(){return n},n}var sn=Object(l.b)(dn(),(function(n){return n.theme.colors.concrete})),fn=Object(h.a)({reducer:{tasks:z}});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g.a,{store:fn},o.a.createElement(l.a,{theme:{colors:{backgroundColor:"white",teal:"#008080",lightGrey:"#ccc",concrete:"#F2F2F2"},breakpoints:{mobile:767}}},o.a.createElement(sn,null),o.a.createElement(ln,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.cc1e6bc2.chunk.js.map