import{_ as p}from"./header.66bc9231.js";import{v as d}from"./sidebar.7845ba07.js";import{r as n,f,c as h,a as o,b as c,F as g,o as R,e as b,g as w}from"./index.88daa41c.js";const x={class:"page-content"},B={class:"wrapper"},C={__name:"index",setup(k){const l="/echarts",u=b(),s=n(""),e=n([]),i=()=>{const r=u.options.routes.filter(({path:t})=>t===l);e.value=r.map(({name:t,meta:a,children:v})=>({label:a.title,value:t,children:v.map(({name:_,meta:m})=>({label:m.title,value:_}))})),s.value=e.value.length?e.value[0].children[0].value:""};return f(()=>{i()}),(r,t)=>{const a=w("router-view");return R(),h(g,null,[o(p),o(d,{active:s.value,list:e.value},null,8,["active","list"]),c("div",x,[c("div",B,[o(a)])])],64)}}};export{C as default};
