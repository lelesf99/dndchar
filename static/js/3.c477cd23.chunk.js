(this.webpackJsonpdndchar=this.webpackJsonpdndchar||[]).push([[3],{40:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(41),a(6);var r=a(24),n=a(11);function c(e){return void 0===e.href?e.submit?Object(n.jsx)("button",{id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),type:"submit",disabled:e.disabled?"disabled":"",onClick:void 0!==e.submit?function(t){t.preventDefault(),e.submit()}:function(){return null},children:e.children}):Object(n.jsx)("button",{id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),type:"button",disabled:e.disabled?"disabled":"",onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},children:e.children}):e.pageLink?Object(n.jsx)(r.b,{to:e.href,id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),children:e.children}):Object(n.jsx)("a",{id:e.id,className:"btn ".concat(void 0!==e.className?e.className:""),href:e.href,onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},children:e.children})}},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r),c=a(2),s=a(25),i=Object(s.a)();function o(){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(s.d)(i).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(n.a.mark((function e(t,a){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.c)(i,t,a).then((function(e){var t=e.user;console.log(t)})).catch((function(e){r=e.code}));case 2:console.log(r),e.t0=r,e.next="auth/invalid-email"===e.t0?6:"auth/user-disabled"===e.t0?7:"auth/user-not-found"===e.t0?8:"auth/wrong-password"===e.t0?9:10;break;case 6:return e.abrupt("return",{errorMessage:"Email inv\xe1lido!",errorClass:"fail"});case 7:return e.abrupt("return",{errorMessage:"Usu\xe1rio desabilitado",errorClass:"fail"});case 8:return e.abrupt("return",{errorMessage:"Email n\xe3o registrado!",errorClass:"fail"});case 9:return e.abrupt("return",{errorMessage:"Senha incorreta!",errorClass:"fail"});case 10:return e.abrupt("return",{errorMessage:"",errorClass:""});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=[0,0];window.addEventListener("mousemove",(function(e){[e.movementX,e.movementY],d=[e.clientX,e.clientY]})),document.querySelector(".App").addEventListener("touchstart",(function(e){d=[e.touches[0].clientX,e.touches[0].clientY]}),!1),document.querySelector(".App").addEventListener("touchmove",(function(e){e.preventDefault(),d=[e.touches[0].clientX,e.touches[0].clientY]}),!1)},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(42);var r=a.p+"static/media/Logo.609ee845.png",n=(a(6),a(11));function c(e){return Object(n.jsxs)("div",{className:"form-container ".concat(void 0!==e.className?e.className:""),children:[e.logo?Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:r,alt:""})}):null,e.children]})}},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var r=a(16),n=a(1);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var i=a(10),o=(a(52),a(6)),l=a(44),u=(a(53),a(11));function h(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),r=a[0],n=a[1];return Object(u.jsxs)("div",{tabIndex:"0",className:"click-card ".concat(void 0!==e.className?e.className:""," ").concat(r?"active":""),onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},onFocus:function(){return n(!0)},onBlur:function(){return n(!1)},children:[e.header&&Object(u.jsx)("div",{className:"card-header",children:e.header}),e.body&&Object(u.jsx)("div",{className:"card-body",children:e.body}),e.footer&&Object(u.jsx)("div",{className:"card-footer",children:e.footer})]})}var d=a(40);a(54);function b(e){var t=Object(o.useRef)(),a=Object(o.useState)(!1),r=Object(i.a)(a,2),n=r[0],c=r[1],s=Object(o.useState)(!1),l=Object(i.a)(s,2),h=l[0],b=l[1],f=Object(o.useState)(0),p=Object(i.a)(f,2),j=p[0],m=p[1];return Object(o.useEffect)((function(){console.log(e.currTarget),e.currTarget&&(t.current.contains(e.currTarget)?c(!0):c(!1))}),[e.currTarget]),Object(o.useEffect)((function(){n&&e.isDragging&&!h?(m(parseInt(e.dragData.innerText)),b(!1)):n||!e.isDragging||h||m(0)}),[n,j]),Object(o.useEffect)((function(){0!==j?(e.confirmFn(),b(!0)):b(!1)}),[e.isDragging]),Object(o.useEffect)((function(){m(e.value),0===e.value&&b(!1)}),[e.value]),Object(u.jsxs)("div",{className:"char-hab-card ".concat(void 0!==e.className?e.className:""," ").concat(0!==j?"active":""," ").concat(h?"lock":""),ref:t,children:[e.hab&&Object(u.jsx)("div",{className:"card-header",children:e.hab}),Object(u.jsxs)("div",{className:"card-body ".concat(0!==j?"show":""),children:[Object(u.jsx)("div",{className:"hab-val",children:j}),Object(u.jsx)("div",{className:"hab-mod",children:Object(u.jsx)("span",{children:"".concat(Math.floor((j-10)/2)>=0?"+".concat(Math.floor((j-10)/2)):Math.floor((j-10)/2))})})]}),Object(u.jsx)("div",{className:"card-footer ".concat(h?"show":""),children:Object(u.jsx)(d.a,{className:"cancel hab-value-cancel",onClick:function(t){m(0),b(!1),e.cancelFn()},children:"Cancelar"})})]})}var f=a(4),p=a(5),j=function(){function e(t){Object(f.a)(this,e),this.sides=t}return Object(p.a)(e,[{key:"roll",value:function(e){if(!e)return[Math.ceil(Math.random()*this.sides)];for(var t=[],a=0;a<e;a++)t.push(Math.ceil(Math.random()*this.sides));return t}}]),e}(),m=function e(t,a,r,n,c){switch(Object(f.a)(this,e),this.age=r,this.size=n,this.darkvision=0,this.subRace=null,this.habBonus={str:0,dex:0,con:0,int:0,wis:0,cha:0},this.lang=["comum"],this.traits=[],this.profs=[],this.hitPointsBonus=0,a){case"ANAO":this.name="An\xe3o",this.habBonus.con=2,this.size<1.2&&(this.size=1.2),this.size>1.5&&(this.size=1.5),this.moveSpd=7.5,this.lang.push("anao"),this.profs.push("machados de batalha","machadinhas","martelos leves","martelos de guerra"),this.darkvision=18,this.traits.push({name:"Vis\xe3o no Escuro",description:"Acostumado \xe0 vida subterr\xe2nea, voc\xea tem uma vis\xe3o superior no escuro e na penumbra. Voc\xea enxerga na penumbra a at\xe9 18 metros como se fosse  luz plena, e no escuro como se fosse na penumbra.Voc\xea  n\xe3o pode discernir cores no escuro, apenas tons de cinza."}),this.traits.push({name:"Resili\xeancia An\xe3",description:"Voc\xea possui vantagem em testes de resist\xeancia contra venenos e resist\xeancia contra dano de veneno(explicado no cap\xedtulo 9)."}),this.traits.push({name:"Especializa\xe7\xe3o em Rochas",description:"Sempre que voc\xea realizar um teste de Intelig\xeancia(Hist\xf3ria) relacionado \xe0 origem de um trabalho em pedra, voc\xea \xe9 considerado proficiente na per\xedcia Hist\xf3ria e adiciona o dobro do seu b\xf4nus de profici\xeancia ao teste, ao inv\xe9s do seu b\xf4nus de profici\xeancia normal."}),c&&(this.subRace=new e(t,c,r,n));break;case"ANAO_COL":this.name="An\xe3o da Colina",this.habBonus.wis=1,this.hitPointsBonus=1+t.level;break;case"ANAO_MON":this.name="An\xe3o da Montanha",this.habBonus.wis=2,this.profs.push("armaduras leves","armaduras m\xe9dias")}},g=function(){function e(t,a,r,n,c,s,i,o){Object(f.a)(this,e),this.name=t,this.race=new m(this,r,n,c,this.age,this.size,s),this.chClass=a,this.level=i,this.hab=o||{str:e.rollHab(),dex:e.rollHab(),con:e.rollHab(),int:e.rollHab(),wis:e.rollHab(),cha:e.rollHab()},this.mod={str:Math.floor((this.hab.str-10)/2),dex:Math.floor((this.hab.dex-10)/2),con:Math.floor((this.hab.con-10)/2),int:Math.floor((this.hab.int-10)/2),wis:Math.floor((this.hab.wis-10)/2),cha:Math.floor((this.hab.cha-10)/2)},1===this.level?(this.exp=0,this.prof=2):2===this.level?(this.exp=300,this.prof=2):3===this.level?(this.exp=900,this.prof=2):4===this.level?(this.exp=2700,this.prof=2):5===this.level?(this.exp=6500,this.prof=3):6===this.level?(this.exp=14e3,this.prof=3):7===this.level?(this.exp=23e3,this.prof=3):8===this.level?(this.exp=34e3,this.prof=3):9===this.level?(this.exp=48e3,this.prof=4):10===this.level?(this.exp=64e3,this.prof=4):11===this.level?(this.exp=85e3,this.prof=4):12===this.level?(this.exp=1e5,this.prof=4):13===this.level?(this.exp=12e4,this.prof=5):14===this.level?(this.exp=14e4,this.prof=5):15===this.level?(this.exp=165e3,this.prof=5):16===this.level?(this.exp=195e3,this.prof=5):17===this.level?(this.exp=225e3,this.prof=6):18===this.level?(this.exp=265e3,this.prof=6):19===this.level?(this.exp=305e3,this.prof=6):20===this.level&&(this.exp=355e3,this.prof=6)}return Object(p.a)(e,null,[{key:"rollHab",value:function(){var e=new j(6).roll(4);return e.sort((function(e,t){return e-t})),e.shift(),e.reduce((function(e,t){return e+t}))}}]),e}(),v=(a(55),a(43));function O(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),r=a[0],n=a[1],c=Object(o.useRef)();return Object(o.useEffect)((function(){e.dragData===c.current.childNodes[0]&&e.isDragging?n(!0):n(!1)}),[e.dragData,e.isDragging]),Object(o.useEffect)((function(){var e,t=[0,0],a=c.current,n=[a.getBoundingClientRect().x+a.getBoundingClientRect().width/2,a.getBoundingClientRect().y+a.getBoundingClientRect().height/2],s=[0,0];if(r){function a(){var r,i;r=v.b,i=n,s=[r[0]-i[0],r[1]-i[1]],t=s,c.current.style.setProperty("transform","translate(".concat(t[0],"px,  ").concat(t[1],"px)")),e=requestAnimationFrame(a)}a()}return function(){cancelAnimationFrame(e),t=[0,0],a&&a.style.setProperty("transform","translate(".concat(t[0],"px,  ").concat(t[1],"px)"))}}),[r]),Object(u.jsxs)("div",{ref:c,className:"card drag-card ".concat(void 0!==e.className?e.className:""," ").concat(0!==e.body?"show":""),children:[e.header&&Object(u.jsx)("div",{className:"card-header",children:e.header}),e.body&&Object(u.jsx)("div",{className:"card-body",children:e.body}),e.footer&&Object(u.jsx)("div",{className:"card-footer",children:e.footer})]})}function x(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],f=Object(o.useState)([]),p=Object(i.a)(f,2),j=p[0],m=p[1],v=Object(o.useState)({str:0,dex:0,con:0,int:0,wis:0,cha:0}),x=Object(i.a)(v,2),N=x[0],w=x[1],D=Object(o.useState)(""),y=Object(i.a)(D,2),k=y[0],C=y[1];function H(e,t){var a={str:N.str,dex:N.dex,con:N.con,int:N.int,wis:N.wis,cha:N.cha};switch(e){case"str":if(0!==N.str)return;a.str=t,w(a);break;case"dex":if(0!==N.dex)return;a.dex=t,w(a);break;case"con":if(0!==N.con)return;a.con=t,w(a);break;case"int":if(0!==N.int)return;a.int=t,w(a);break;case"wis":if(0!==N.wis)return;a.wis=t,w(a);break;case"cha":if(0!==N.cha)return;a.cha=t,w(a)}var r=j,n=r.indexOf(t);r[n]=0,m(r)}function A(e,t){switch(e){case"str":w(s(s({},N),{},{str:0}));break;case"dex":w(s(s({},N),{},{dex:0}));break;case"con":w(s(s({},N),{},{con:0}));break;case"int":w(s(s({},N),{},{int:0}));break;case"wis":w(s(s({},N),{},{wis:0}));break;case"cha":w(s(s({},N),{},{cha:0}))}var a=j,r=a.indexOf(0);a[r]=t,m(a)}return Object(o.useEffect)((function(){console.log(N)}),[N]),Object(u.jsxs)("div",{className:"char-create-container",children:[Object(u.jsx)("h1",{children:"Criar Personagem"}),Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("div",{className:"input-row",children:[Object(u.jsx)("input",{className:"char-name-input",id:"charName",name:"charName",type:"text",placeholder:"Nome do Personagem"}),Object(u.jsx)("input",{className:"char-level-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"lvl"})]}),Object(u.jsx)("h2",{children:"Roladas de habilidade"}),Object(u.jsx)("p",{children:"Aqui voc\xea pode rolar seu valores de habilidade e depois arrasta-los at\xe9 a habilidades correspondentes"}),Object(u.jsx)("div",{className:"input-row",children:n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{currTarget:e.currTarget,dragData:e.dragData,isDragging:e.isDragging,confirmFn:function(){return H("str",parseInt(e.dragData.innerText))},cancelFn:function(){return A("str",N.str)},hab:"str",value:N.str}),Object(u.jsx)(b,{currTarget:e.currTarget,dragData:e.dragData,isDragging:e.isDragging,confirmFn:function(){return H("dex",parseInt(e.dragData.innerText))},cancelFn:function(){return A("dex",N.dex)},hab:"dex",value:N.dex}),Object(u.jsx)(b,{currTarget:e.currTarget,dragData:e.dragData,isDragging:e.isDragging,confirmFn:function(){return H("con",parseInt(e.dragData.innerText))},cancelFn:function(){return A("con",N.con)},hab:"con",value:N.con}),Object(u.jsx)(b,{currTarget:e.currTarget,dragData:e.dragData,isDragging:e.isDragging,confirmFn:function(){return H("int",parseInt(e.dragData.innerText))},cancelFn:function(){return A("int",N.int)},hab:"int",value:N.int}),Object(u.jsx)(b,{currTarget:e.currTarget,dragData:e.dragData,isDragging:e.isDragging,confirmFn:function(){return H("wis",parseInt(e.dragData.innerText))},cancelFn:function(){return A("wis",N.wis)},hab:"wis",value:N.wis}),Object(u.jsx)(b,{currTarget:e.currTarget,dragData:e.dragData,isDragging:e.isDragging,confirmFn:function(){return H("cha",parseInt(e.dragData.innerText))},cancelFn:function(){return A("cha",N.cha)},hab:"cha",value:N.cha})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{className:"char-hab-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"str"}),Object(u.jsx)("input",{className:"char-hab-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"dex"}),Object(u.jsx)("input",{className:"char-hab-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"con"}),Object(u.jsx)("input",{className:"char-hab-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"int"}),Object(u.jsx)("input",{className:"char-hab-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"wis"}),Object(u.jsx)("input",{className:"char-hab-input",id:"charLevel",name:"charLevel",type:"number",placeholder:"cha"})]})}),Object(u.jsx)("div",{className:"input-row",children:j.map((function(t,a){return Object(u.jsx)(O,{className:"char-hab-drag",isDragging:e.isDragging,dragData:e.dragData,body:t},a)}))}),Object(u.jsxs)("div",{className:"button-group",children:[n&&Object(u.jsx)(d.a,{className:"roll-btn sec",onClick:function(){c(!1),m([])},children:Object(u.jsx)("span",{children:"N\xe3o vou rolar"})}),Object(u.jsx)(d.a,{className:"roll-btn sec",onClick:function(){c(!0),0===j.length?(w({str:0,dex:0,con:0,int:0,wis:0,cha:0}),m([].concat(Object(r.a)(j),[g.rollHab(),g.rollHab(),g.rollHab(),g.rollHab(),g.rollHab(),g.rollHab()]))):(w({str:0,dex:0,con:0,int:0,wis:0,cha:0}),m([g.rollHab(),g.rollHab(),g.rollHab(),g.rollHab(),g.rollHab(),g.rollHab()]))},children:Object(u.jsx)("span",{children:"Rolar"})})]})]}),Object(u.jsx)("h2",{className:"class-card ".concat("ANAO"===k?"active":""),children:"Escolha uma Ra\xe7a"}),Object(u.jsx)(h,{onClick:function(){return C("ANAO")},header:Object(u.jsx)("h3",{children:"An\xe3o"})}),Object(u.jsx)(h,{className:"class-card ".concat("HUMANO"===k?"active":""),onClick:function(){return C("HUMANO")},header:Object(u.jsx)("h3",{children:"Humano"})}),Object(u.jsx)(h,{className:"class-card ".concat("ELFO"===k?"active":""),onClick:function(){return C("ELFO")},header:Object(u.jsx)("h3",{children:"Elfo"})})]})}}}]);
//# sourceMappingURL=3.c477cd23.chunk.js.map