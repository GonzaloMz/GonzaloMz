(this["webpackJsonpcostoya-demo"]=this["webpackJsonpcostoya-demo"]||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),i=a.n(r),s=(a(27),a(5)),c=(a(28),a(20)),l=a(21),u=a(17),d=function e(t){var a,o=this;Object(u.a)(this,e),this.setSelectedScreen=function(e){var t=e.replace(/[_]+[0-9]+/g,""),a=o.viewBoxMap[e]?o.viewBoxMap[e]:o.viewBoxMap[t];o.svgNode.setAttribute("viewBox",a)},this.getViewBoxMap=function(){return o.viewBoxMap},t.setAttribute("width","100%"),t.setAttribute("height",""),this.svgNode=t,this.viewBoxMap=function(e){var t=e.querySelectorAll("rect[id^=_P_]"),a={};return t.forEach((function(e){var t=e.getAttribute("id");a[t]="".concat(e.getAttribute("x")," ").concat(e.getAttribute("y")," ").concat(e.getAttribute("width")," ").concat(e.getAttribute("height"))})),a}(this.svgNode),this.viewBoxMap._P_HOME&&this.svgNode.setAttribute("viewBox",this.viewBoxMap._P_HOME),(a=this).svgNode.querySelectorAll("g[id^=_B_]").forEach((function(e){var t=e.getAttribute("id").replace("_B_","_P_");e.addEventListener("click",(function(){a.setSelectedScreen(t),window.scrollTo(0,0)}))}))};var g=function(e){var t=e.options;return n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",style:{fontFamily:"Roboto Cn"}},n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("a",{class:"navbar-brand",href:"#"},n.a.createElement("img",{style:{width:"60px"},src:"LogoCostoya.svg"})),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{class:"navbar-nav mr-auto text-left mt-3"},t.map((function(e){return n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:e.href},e.label))})))))},p=function(e){new d(e)},h=function(e,t){e&&(console.log(t),console.error(e))},v=function(){new URLSearchParams(Object(s.f)().search);var e=new URLSearchParams(Object(s.f)().search).get("flow"),t=!0;return e||(e="usuario-anonimo-busqueda",t=!1),e="../costoya-screens/".concat(e,".svg"),n.a.createElement("div",null,t&&n.a.createElement(g,{options:[{label:"Nueva Tasaci\xf3n",href:"https://gonzalomz.github.io/costoya/?flow=usuario-administrador-nueva-tasacion"},{label:"Tasaciones Pendientes",href:"https://gonzalomz.github.io/costoya/?flow=usuario-administrador-tasacion-pendiente"},{label:"Tasaciones en Progreso",href:"https://gonzalomz.github.io/costoya/?flow=usuario-administrador-tasacion-en-progreso"},{label:"Tasaciones Realizadas",href:"https://gonzalomz.github.io/costoya/?flow=usuario-administrador-tasacion-realizada"},{label:"Propiedades Disponibles",href:"https://gonzalomz.github.io/costoya/?flow=usuario-administrador-propiedad-disponible"}]}),n.a.createElement(l.a,{beforeInjection:p,afterInjection:h,src:e,className:"fadeIn animated w-100"}))};var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/costoya",component:v}))))};i.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.602c7632.chunk.js.map