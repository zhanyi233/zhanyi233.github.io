import{_ as g}from"./header.2875ff79.js";import{d as f,_ as C,o as i,c as k,w as y,r as w,a as s,b as e,e as d,F as u,t as p,n as $,f as m,g as b,u as S}from"./index.72668350.js";const M=f({emits:["click"],props:{active:{type:String,default:""},list:{type:Array,default:()=>[]}},setup(n,l){return{onClickMenu:a=>{l.emit("click",a)}}}}),J={class:"sidebar-groups"},N=["onClick"];function x(n,l,o,a,r,_){const h=w("el-scrollbar");return i(),k(h,{class:"sidebar"},{default:y(()=>[s("div",J,[(i(!0),e(u,null,d(n.list,c=>(i(),e("div",{class:"sidebar-group",key:c.value},[s("p",null,p(c.label),1),(i(!0),e(u,null,d(c.children,t=>(i(),e("div",{class:$(["sidebar-group__item",{"is-active":n.active===t.value}]),key:t.value,onClick:T=>n.onClickMenu(t)},p(t.label),11,N))),128))]))),128))])]),_:1})}const B=C(M,[["render",x]]),v=`<p>CSS \u547D\u540D\u4E00\u822C\u91C7\u7528\u5C0F\u5199\u82F1\u6587\u5355\u8BCD\u6216\u7EC4\u5408\u547D\u540D\uFF0C\u5355\u8BCD\u4E0E\u5355\u8BCD\u95F4\u4EE5&quot;-&quot;\u5206\u5272\uFF1B\u82F1\u6587\u5355\u8BCD\u4E0D\u7F29\u5199\uFF0C\u9664\u975E\u4E00\u770B\u5C31\u80FD\u660E\u767D\u7684\u5355\u8BCD\u3002</p>
<h3>\u6587\u672C\u547D\u540D\u89C4\u8303</h3>
<ol>
<li>index.css: \u4E00\u822C\u7528\u4E8E\u9996\u9875\u5EFA\u7ACB\u6837\u5F0F</li>
<li>head.css: \u5934\u90E8\u6837\u5F0F\uFF0C\u5F53\u591A\u4E2A\u9875\u9762\u5934\u90E8\u8BBE\u8BA1\u98CE\u683C\u76F8\u540C\u65F6\u4F7F\u7528\u3002</li>
<li>base.css: \u5171\u7528\u6837\u5F0F\u3002</li>
<li>style.css: \u72EC\u7ACB\u9875\u9762\u6240\u4F7F\u7528\u7684\u6837\u5F0F\u6587\u4EF6\u3002</li>
<li>global.css: \u9875\u9762\u6837\u5F0F\u57FA\u7840\uFF0C\u5168\u5C40\u516C\u7528\u6837\u5F0F\uFF0C\u9875\u9762\u4E2D\u5FC5\u987B\u5305\u542B\u3002</li>
<li>layout.css: \u5E03\u5C40\u3001\u7248\u9762\u6837\u5F0F\uFF0C\u516C\u7528\u7C7B\u578B\u8F83\u591A\u65F6\u4F7F\u7528\uFF0C\u4E00\u822C\u7528\u5728\u9996\u9875\u7EA7\u9875\u9762\u548C\u4EA7\u54C1\u7C7B\u9875\u9762\u4E2D</li>
<li>module.css: \u6A21\u5757\uFF0C\u7528\u4E8E\u4EA7\u54C1\u7C7B\u9875\uFF0C\u4E5F\u53EF\u4E0E\u5176\u5B83\u6837\u5F0F\u914D\u5408\u4F7F\u7528\u3002</li>
<li>master.css: \u4E3B\u8981\u7684\u6837\u5F0F\u8868</li>
<li>columns.css: \u4E13\u680F\u6837\u5F0F</li>
<li>themes.css: \u4E3B\u4F53\u6837\u5F0F</li>
<li>forms.css: \u8868\u5355\u6837\u5F0F</li>
<li>mend.css: \u8865\u4E01\uFF0C\u57FA\u4E8E\u4EE5\u4E0A\u6837\u5F0F\u8FDB\u884C\u7684\u79C1\u6709\u5316\u4FEE\u8865\u3002</li>
</ol>
<h3>\u9875\u9762\u7ED3\u6784\u547D\u540D\uFF1A</h3>
<ol>
<li>page: \u4EE3\u8868\u6574\u4E2A\u9875\u9762\uFF0C\u7528\u4E8E\u6700\u5916\u5C42\u3002</li>
<li>wrap: \u5916\u5957\uFF0C\u5C06\u6240\u6709\u5143\u7D20\u5305\u5728\u4E00\u8D77\u7684\u4E00\u4E2A\u5916\u56F4\u5305\uFF0C\u7528\u4E8E\u6700\u5916\u5C42</li>
<li>wrapper: \u9875\u9762\u5916\u56F4\u63A7\u5236\u6574\u4F53\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u7528\u4E8E\u6700\u5916\u5C42</li>
<li>container: \u4E00\u4E2A\u6574\u4F53\u5BB9\u5668\uFF0C\u7528\u4E8E\u6700\u5916\u5C42</li>
<li>head, header: \u9875\u5934\u533A\u57DF\uFF0C\u7528\u4E8E\u5934\u90E8</li>
<li>nav: \u5BFC\u822A\u6761</li>
<li>content: \u5185\u5BB9\uFF0C\u7F51\u7AD9\u4E2D\u6700\u91CD\u8981\u7684\u5185\u5BB9\u533A\u57DF\uFF0C\u7528\u4E8E\u7F51\u9875\u4E2D\u90E8\u4E3B\u4F53</li>
<li>main: \u7F51\u7AD9\u4E2D\u7684\u4E3B\u8981\u533A\u57DF\uFF08\u8868\u793A\u6700\u91CD\u8981\u7684\u4E00\u5757\u4F4D\u7F6E\uFF09\uFF0C\u7528\u4E8E\u4E2D\u90E8\u4E3B\u4F53\u5185\u5BB9</li>
<li>column: \u680F\u76EE</li>
<li>sidebar: \u4FA7\u680F</li>
<li>foot, footer: \u9875\u5C3E\u3001\u9875\u811A\u3002\u7F51\u7AD9\u4E00\u4E9B\u9644\u52A0\u4FE1\u606F\u653E\u7F6E\u533A\u57DF\uFF0C\uFF08\u6216\u547D\u540D\u4E3A copyright\uFF09\u7528\u4E8E\u5E95\u90E8</li>
</ol>
<h3>\u5BFC\u822A\u547D\u540D\uFF1A</h3>
<ol>
<li>nav, navbar, navigation, nav-wrapper: \u5BFC\u822A\u6761\u6216\u5BFC\u822A\u5305\uFF0C\u4EE3\u8868\u6A2A\u5411\u5BFC\u822A</li>
<li>topnav: \u9876\u90E8\u5BFC\u822A</li>
<li>mainbav: \u4E3B\u5BFC\u822A</li>
<li>subnav: \u5B50\u5BFC\u822A</li>
<li>sidebar: \u8FB9\u5BFC\u822A</li>
<li>leftsidebar \u6216 sidebar_a: \u5DE6\u5BFC\u822A</li>
<li>rightsidebar \u6216 sidebar_b: \u53F3\u5BFC\u822A</li>
<li>title: \u6807\u9898</li>
<li>summary: \u6458\u8981/li&gt;</li>
<li>menu: \u83DC\u5355\uFF0C\u533A\u57DF\u5305\u542B\u4E00\u822C\u7684\u94FE\u63A5\u548C\u83DC\u5355</li>
<li>submenu: \u5B50\u83DC\u5355</li>
<li>drop: \u4E0B\u62C9</li>
<li>dorpmenu: \u4E0B\u62C9\u83DC\u5355</li>
<li>links: \u94FE\u63A5\u83DC\u5355</li>
</ol>
<h3>\u529F\u80FD\u547D\u540D</h3>
<ol>
<li>logo: \u6807\u8BB0\u7F51\u7AD9logo\u6807\u5FD7</li>
<li>banner: \u6807\u8BED\u3001\u5E7F\u544A\u6761\u3001\u9876\u90E8\u5E7F\u544A\u6761</li>
<li>login: \u767B\u9646\uFF0C\uFF08\u4F8B\u5982\u767B\u5F55\u8868\u5355\uFF1Aform-login\uFF09</li>
<li>loginbar: \u767B\u5F55\u6761</li>
<li>register: \u6CE8\u518C</li>
<li>tool, toolbar: \u5DE5\u5177\u6761</li>
<li>search: \u641C\u7D22</li>
<li>searchbar: \u641C\u7D22\u6761</li>
<li>searchlnput: \u641C\u7D22\u8F93\u5165\u6846</li>
<li>shop: \u529F\u80FD\u533A\uFF0C\u8868\u793A\u73B0\u5728\u7684</li>
<li>icon: \u5C0F\u56FE\u6807</li>
<li>label: \u5546\u6807</li>
<li>homepage: \u9996\u9875</li>
<li>subpage: \u4E8C\u7EA7\u9875\u9762\u5B50\u9875\u9762</li>
<li>hot: \u70ED\u95E8\u70ED\u70B9</li>
<li>list: \u6587\u7AE0\u5217\u8868\uFF0C\uFF08\u4F8B\u5982\uFF1A\u65B0\u95FB\u5217\u8868\uFF1Alist-news\uFF09</li>
<li>scroll: \u6EDA\u52A8</li>
<li>tab: \u6807\u7B7E</li>
<li>sitemap: \u7F51\u7AD9\u5730\u56FE</li>
<li>msg \u6216 message: \u63D0\u793A\u4FE1\u606F</li>
<li>current: \u5F53\u524D\u7684</li>
<li>joinus: \u52A0\u5165</li>
<li>status: \u72B6\u6001</li>
<li>btn: \u6309\u94AE\uFF0C\uFF08\u4F8B\u5982\uFF1A\u641C\u7D22\u6309\u94AE\u53EF\u5199\u6210\uFF1Abtn-search\uFF09</li>
<li>tips: \u5C0F\u6280\u5DE7</li>
<li>note: \u6CE8\u91CA</li>
<li>guild: \u6307\u5357</li>
<li>arr, arrow: \u6807\u8BB0\u7BAD\u5934</li>
<li>service: \u670D\u52A1</li>
<li>breadcrumb: (\u5373\u9875\u9762\u6240\u5904\u4F4D\u7F6E\u5BFC\u822A\u63D0\u793A\uFF09</li>
<li>download: \u4E0B\u8F7D</li>
<li>vote: \u6295\u7968</li>
<li>siteinfo: \u7F51\u7AD9\u4FE1\u606F</li>
<li>partner: \u5408\u4F5C\u4F19\u4F34</li>
<li>link, friendlink: \u53CB\u60C5\u94FE\u63A5</li>
<li>copyright: \u7248\u6743\u4FE1\u606F</li>
<li>siteinfoCredits: \u4FE1\u8A89</li>
<li>siteinfoLegal: \u6CD5\u5F8B\u4FE1\u606F</li>
</ol>
`,L={CssNamed:v,Js_1:v},q={class:"page-content"},F={class:"wrapper"},H=["innerHTML"],z={__name:"index",setup(n){const l=m("CssNamed"),o=m([{label:"Css",value:"Css",children:[{label:"\u547D\u540D\u89C4\u8303",value:"CssNamed"}]},{label:"JavaScript",value:"JavaScript",children:[{label:"JavaScript\u5355\u884C\u4EE3\u7801",value:"Js_1"}]}]),a=({value:r})=>{l.value=r};return(r,_)=>(i(),e(u,null,[b(g),b(B,{active:l.value,list:o.value,onClick:a},null,8,["active","list"]),s("div",q,[s("div",F,[s("article",{class:"markdown-body",innerHTML:S(L)[l.value]},null,8,H)])])],64))}};export{z as default};
