import{v as m}from"./sidebar.e001d0ac.js";import{r,i as d,c as h,a as n,b as l,F as f,o as g,u as R,h as b}from"./index.78692d0e.js";const w={class:"page-content"},x={class:"wrapper"},N={__name:"index",setup(B){const c="/echarts",u=R(),o=r(""),e=r([]),i=()=>{const s=u.options.routes.filter(({path:t})=>t===c);e.value=s.map(({name:t,meta:a,children:v})=>({label:a.title,value:t,children:v.map(({name:p,meta:_})=>({label:_.title,value:p}))})),o.value=e.value.length?e.value[0].children[0].value:""};return d(()=>{i()}),(s,t)=>{const a=b("router-view");return g(),h(f,null,[n(m,{active:o.value,list:e.value},null,8,["active","list"]),l("div",w,[l("div",x,[n(a)])])],64)}}};export{N as default};
