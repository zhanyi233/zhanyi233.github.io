import{v}from"../sidebar/sidebar.fdc366df.js";import{a as h,r as f,m as R,b as g,d as n,u as b,e as r,F as x,o as k,g as w,f as B,l as C}from"../../assets/index.f7edc526.js";const F={class:"page-content"},M={class:"wrapper"},P={__name:"index",setup(N){const c="/examples",a=w(),u=B(),l=h(()=>u.name),s=f([]),i=()=>{const e=a.options.routes.find(({path:t})=>t===c);s.value=e.children.map(({name:t,meta:o,children:p})=>({label:o.title,value:t,children:p.map(({name:d,meta:_})=>({label:_.title,value:d}))}))},m=({value:e})=>{a.push({name:e})};return R(()=>{i()}),(e,t)=>{const o=C("router-view");return k(),g(x,null,[n(v,{active:b(l),list:s.value,onClick:m},null,8,["active","list"]),r("div",F,[r("div",M,[n(o)])])],64)}}};export{P as default};
