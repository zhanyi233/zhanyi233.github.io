import{d as k,u as C,e as b,r as i,w as y,f as R,g as w,o as c,c as u,b as t,n as B,F as N,h as V,i as z,j as F,a as I,k as L,l as S,m as T,p as A,t as D}from"./index.6c208fea.js";const H={class:"navbar"},M={class:"navbar-wrapper"},j=t("div",{class:"navbar-brand"},"Frontend",-1),E={class:"navbar-collapse"},W={class:"navbar-nav"},$=t("div",{class:"left"},null,-1),q=t("div",{class:"right"},null,-1),G=[$,q],J=["onClick"],K={class:"nav-item__inner"},U={__name:"header",setup(O){k({name:"VHeader"});const d=C(),v=b();let o=i("");const l=i([]),_=i(null),r=i([]),p=e=>{e&&r.value.push(e)},f=e=>{if(!e)return;const n=e.clientHeight,a=e.clientWidth,s=e.offsetTop,h=e.offsetLeft;_.value={width:a+"px",height:n+"px",top:s+"px",left:h+"px"}},m=({path:e})=>{o.value=e,v.push(e)},x=()=>{o.value=d.path,l.value=v.options.routes.filter(({path:e})=>e!=="/"),setTimeout(()=>{g()},300)},g=()=>{if(!r.value.length)return;const e=l.value.findIndex(({path:a})=>o.value.includes(a)),n=r.value[e];f(n)};return y(()=>d.path,(e,n)=>{e!==n&&x()},{immediate:!0,deep:!0}),R(()=>{}),(e,n)=>{const a=w("el-icon");return c(),u("div",H,[t("div",M,[j,t("div",E,[t("ul",W,[t("div",{class:"hori-selector",style:B(_.value)},G,4),(c(!0),u(N,null,V(l.value,(s,h)=>(c(),u("li",{ref_for:!0,ref:p,class:z(["nav-item",{active:F(o).includes(s.path)}]),key:s.path,onClick:P=>m(s)},[t("div",K,[I(a,{size:20,style:{"margin-right":"10px"}},{default:L(()=>[(c(),S(T(s.meta.icon)))]),_:2},1024),A(" "+D(s.meta.title),1)])],10,J))),128))])])])])}}};export{U as _};
