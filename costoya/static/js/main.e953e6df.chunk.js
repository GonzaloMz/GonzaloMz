(this["webpackJsonpcostoya-demo"]=this["webpackJsonpcostoya-demo"]||[]).push([[0],{22:function(e,a,t){e.exports=t(35)},27:function(e,a,t){},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(13),i=t.n(r),c=(t(27),t(5)),s=(t(28),t(20)),l=t(21),u=t(17),d=function e(a){var t,n=this;Object(u.a)(this,e),this.setSelectedScreen=function(e){var a=e.replace(/[_]+[0-9]+/g,""),t=n.viewBoxMap[e]?n.viewBoxMap[e]:n.viewBoxMap[a];n.svgNode.setAttribute("viewBox",t)},this.getViewBoxMap=function(){return n.viewBoxMap},a.setAttribute("width","100%"),a.setAttribute("height",""),this.svgNode=a,this.viewBoxMap=function(e){var a=e.querySelectorAll("rect[id^=_P_]"),t={};return a.forEach((function(e){var a=e.getAttribute("id");t[a]="".concat(e.getAttribute("x")," ").concat(e.getAttribute("y")," ").concat(e.getAttribute("width")," ").concat(e.getAttribute("height"))})),t}(this.svgNode),this.viewBoxMap._P_HOME&&this.svgNode.setAttribute("viewBox",this.viewBoxMap._P_HOME),(t=this).svgNode.querySelectorAll("g[id^=_B_]").forEach((function(e){var a=e.getAttribute("id").replace("_B_","_P_");e.addEventListener("click",(function(){t.setSelectedScreen(a)}))}))};var p=function(e){var a=e.options;return o.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{class:"navbar-brand",href:"#"},"Costoya"),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{class:"navbar-nav mr-auto"},a.map((function(e){return o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"nav-link",href:e.href},e.label))})))))},v=function(e){new d(e)},b=function(e,a){e&&(console.log(a),console.error(e))},f=function(){new URLSearchParams(Object(c.f)().search);var e=new URLSearchParams(Object(c.f)().search).get("flow");return e||(e="usuario-anonimo-buscar-propiedad"),e="../costoya-screens/".concat(e,".svg"),o.a.createElement("div",null,o.a.createElement(p,{options:[{label:"Tasaciones Pendientes",href:"costoya/?flow=usuario-administrador-tasacion-pendiente"},{label:"Tasaciones en Progreso",href:"costoya/?flow=usuario-administrador-tasacion-en-progreso"},{label:"Tasaciones Realizadas",href:"costoya/?flow=usuario-administrador-tasacion-realizada"},{label:"Propiedades disponibles",href:"costoya/?flow=usuario-administrador-propiedad-disponible"}]}),o.a.createElement(l.a,{beforeInjection:v,afterInjection:b,src:e,className:"fadeIn animated w-100"}))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/costoya",component:f}))))};i.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e953e6df.chunk.js.map