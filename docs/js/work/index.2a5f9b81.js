import{v}from"../sidebar/sidebar.24dc16d0.js";import{c as f,r as h,l as R,a as g,b as n,u as k,d as r,F as b,o as w,f as x,e as B,k as C}from"../../assets/index.4e067691.js";const F={class:"page-content"},M={class:"wrapper"},P={__name:"index",setup(N){const c="/work",a=x(),u=B(),l=f(()=>u.name),s=h([]),i=()=>{const e=a.options.routes.filter(({path:t})=>t===c);s.value=e.map(({name:t,meta:o,children:m})=>({label:o.title,value:t,children:m.map(({name:_,meta:d})=>({label:d.title,value:_}))}))},p=({value:e})=>{a.push({name:e})};return R(()=>{i()}),(e,t)=>{const o=C("router-view");return w(),g(b,null,[n(v,{active:k(l),list:s.value,onClick:p},null,8,["active","list"]),r("div",F,[r("div",M,[n(o)])])],64)}}};export{P as default};