var d=Object.defineProperty;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var a=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))n.call(e,o)&&a(t,o,e[o]);if(s)for(var o of s(e))p.call(e,o)&&a(t,o,e[o]);return t};import{m as u,u as _,o as i,c as m,t as l,n as f}from"./vendor.50e9f247.js";import{_ as v}from"./index.80721060.js";const P={name:"Product",data(){return{containerClass:"product"}},created(){const t=this.$route.params.productId;this.setProduct(t)},computed:r({},u(["product"])),methods:r({},_(["setProduct"]))};function h(t,e,o,$,c,x){return i(),m("div",{class:f(c.containerClass)},l(t.product.title),3)}var g=v(P,[["render",h],["__scopeId","data-v-457fbee6"]]);export{g as default};
