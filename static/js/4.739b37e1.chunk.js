(this.webpackJsonpdndchar=this.webpackJsonpdndchar||[]).push([[4],{40:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));t(41),t(6);var c=t(24),r=t(11);function s(e){return void 0===e.href?e.submit?Object(r.jsx)("button",{id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),type:"submit",disabled:e.disabled?"disabled":"",onClick:void 0!==e.submit?function(n){n.preventDefault(),e.submit()}:function(){return null},children:e.children}):Object(r.jsx)("button",{id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),type:"button",disabled:e.disabled?"disabled":"",onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},children:e.children}):e.pageLink?Object(r.jsx)(c.b,{to:e.href,id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),children:e.children}):Object(r.jsx)("a",{id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),href:e.href,onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},children:e.children})}},41:function(e,n,t){},43:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var c=t(0),r=t.n(c),s=t(2),a=t(25),i=Object(a.a)();function o(){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(a.d)(i).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,n){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(r.a.mark((function e(n,t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.c)(i,n,t).then((function(e){var n=e.user;console.log(n)})).catch((function(e){c=e.code}));case 2:console.log(c),e.t0=c,e.next="auth/invalid-email"===e.t0?6:"auth/user-disabled"===e.t0?7:"auth/user-not-found"===e.t0?8:"auth/wrong-password"===e.t0?9:10;break;case 6:return e.abrupt("return",{errorMessage:"Email inv\xe1lido!",errorClass:"fail"});case 7:return e.abrupt("return",{errorMessage:"Usu\xe1rio desabilitado",errorClass:"fail"});case 8:return e.abrupt("return",{errorMessage:"Email n\xe3o registrado!",errorClass:"fail"});case 9:return e.abrupt("return",{errorMessage:"Senha incorreta!",errorClass:"fail"});case 10:return e.abrupt("return",{errorMessage:"",errorClass:""});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=[0,0];window.addEventListener("mousemove",(function(e){[e.movementX,e.movementY],b=[e.clientX,e.clientY]})),document.querySelector(".App").addEventListener("touchstart",(function(e){b=[e.touches[0].clientX,e.touches[0].clientY]}),!1),document.querySelector(".App").addEventListener("touchmove",(function(e){e.preventDefault(),b=[e.touches[0].clientX,e.touches[0].clientY]}),!1)},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));t(48);var c=t(6),r=t(10),s=(t(49),t(50),t(11));function a(e){return Object(s.jsx)("button",{onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},className:"mobile-nav-toggle ".concat(e.hiddenClass),children:Object(s.jsx)("span",{className:"three-lines"})})}function i(e){var n=Object(c.useState)(!1),t=Object(r.a)(n,2),i=t[0],o=t[1],u=Object(c.useState)("hidden"),l=Object(r.a)(u,2),d=l[0],b=l[1];return Object(s.jsxs)("div",{className:"sidebar ".concat(void 0!==e.className?e.className:"")+d,children:[Object(s.jsx)(a,{onClick:function(){b(i?"hidden":"shown"),o(!i)},hiddenClass:d}),e.title&&Object(s.jsx)("h2",{className:"sidebar-title",children:e.title}),e.children]})}var o=t(40),u=t(51),l=t(24),d=t(7),b=t(43);function h(e){return e.user?Object(s.jsxs)("div",{className:"profile-page",children:[Object(s.jsx)(i,{children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(l.c,{end:!0,to:"/".concat(e.user.uid),className:"btn btn-sidebar",children:[Object(s.jsx)(u.c,{className:"btn-icon"}),Object(s.jsx)("span",{children:"Home"})]}),Object(s.jsxs)(l.c,{end:!0,to:"/".concat(e.user.uid,"/CharBuilder"),className:"btn btn-sidebar",children:[Object(s.jsx)(u.b,{className:"btn-icon"}),Object(s.jsx)("span",{children:"Criar Personagem"})]}),Object(s.jsxs)(o.a,{className:"btn btn-sidebar log-out",onClick:function(){return Object(b.c)()},children:[Object(s.jsx)(u.a,{className:"btn-icon"}),Object(s.jsx)("span",{children:"Sair"})]})]})}),Object(s.jsx)("div",{className:"user-dash",children:Object(s.jsx)(d.b,{})})]}):Object(s.jsx)(d.a,{to:"/"})}}}]);
//# sourceMappingURL=4.739b37e1.chunk.js.map