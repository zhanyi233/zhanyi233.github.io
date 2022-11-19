import{i as b}from"../index/index.ac5a7abe.js";import{m as w,o as c,b as a,_ as y,F as l,k as S,e as _,d as x,q as A,s as E,l as m}from"../../assets/index.f7edc526.js";function u(t){t.__sourceCode=`<template>
  <div id="basic-line" class="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Echarts from "echarts";

/**
 * @description: \u6269\u5C55 x \u8F74
 */
const extensionXAxis = (chart) => {
  const extension = document.getElementById("extension"); // \u521B\u5EFAdiv

  if (!extension) {
    const div = document.createElement("div");
    div.setAttribute("id", "extension");
    div.style.display = "block";
    document.querySelector("html").appendChild(div);
  }

  chart.on("mouseover", (params) => {
    if (params.componentType == "xAxis") {
      // \u53EA\u9488\u5BF9 x \u8F74
      const extension = document.querySelector("#extension");
      const elementStyle = \`
        position: absolute;
        padding: 10px;
        display: inline;
        border-radius: 4px;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;
        z-index: 9999999;
        color: #666;
        font-size: 14px;
        white-space: nowrap;
      \`;
      extension.style.cssText = elementStyle;
      extension.innerHTML = params.value;

      document.querySelector("html").onmousemove = (event) => {
        const extension = document.querySelector("#extension"),
          xx = event.pageX - 10,
          yy = event.pageY + 15;

        extension.style.top = yy + "px";
        extension.style.left = xx + "px";
      };
    }
  });

  chart.on("mouseout", (params) => {
    if (params.componentType == "xAxis") {
      const extension = document.querySelector("#extension");
      extension.style.cssText = "display:none";
    }
  });
};

/**
 * @description: \u7ED8\u5236\u56FE\u8868
 */
const drawChart = () => {
  const myChart = Echarts.init(document.getElementById("basic-line"));
  const option = {
    xAxis: {
      type: "category",
      triggerEvent: true, // \u8BBE\u7F6E
      data: [
        "2022-11-04 18:26:10",
        "2022-11-04 18:26:10",
        "2022-11-04 18:26:10",
        "2022-11-04 18:26:10",
        "2022-11-04 18:26:10",
        "2022-11-04 18:26:10",
        "2022-11-04 18:26:10",
      ],
      axisLabel: {
        width: 110, // \u56FA\u5B9A\u5BBD\u5EA6
        overflow: "truncate", // \u591A\u4F59\u663E\u793A\u7701\u7565\u53F7
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  // \u7ED8\u5236\u56FE\u8868
  myChart.setOption(option);

  extensionXAxis(myChart); // \u7ED1\u5B9A\u4E8B\u4EF6
  
  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

onMounted(() => {
  drawChart();
});
<\/script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>`,t.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const C={id:"basic-line",class:"chart"},h={__name:"basic-line",setup(t){const i=o=>{if(!document.getElementById("extension")){const e=document.createElement("div");e.setAttribute("id","extension"),e.style.display="block",document.querySelector("html").appendChild(e)}o.on("mouseover",e=>{if(e.componentType=="xAxis"){const n=document.querySelector("#extension"),v=`
        position: absolute;
        padding: 10px;
        display: inline;
        border-radius: 4px;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;
        z-index: 9999999;
        color: #666;
        font-size: 14px;
        white-space: nowrap;
      `;n.style.cssText=v,n.innerHTML=e.value,document.querySelector("html").onmousemove=d=>{const p=document.querySelector("#extension"),f=d.pageX-10,g=d.pageY+15;p.style.top=g+"px",p.style.left=f+"px"}}}),o.on("mouseout",e=>{if(e.componentType=="xAxis"){const n=document.querySelector("#extension");n.style.cssText="display:none"}})},r=()=>{const o=b(document.getElementById("basic-line")),s={xAxis:{type:"category",triggerEvent:!0,data:["2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10"],axisLabel:{width:110,overflow:"truncate"}},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}],tooltip:{trigger:"axis"}};o.setOption(s),i(o),window.addEventListener("resize",()=>{o.resize()})};return w(()=>{r()}),(o,s)=>(c(),a("div",C))}};typeof u=="function"&&u(h);const q=y(h,[["__scopeId","data-v-fd291ff9"]]);const T=t=>(A("data-v-981f0092"),t=t(),E(),t),k=T(()=>_("h2",{class:"component-h1"},"\u6298\u7EBF\u56FE",-1)),L={__name:"index",setup(t){const i=[{title:"\u57FA\u672C\u7528\u6CD5",desc:["\u6587\u5B57\u8D85\u51FA\u5BBD\u5EA6\u622A\u65AD\uFF0C\u4F7F\u7528\u524D\u8BF7\u914D\u7F6E width\uFF1B","\u5F53\u9F20\u6807\u653E\u7F6E\u5728\u8F74\u7EBF\u5904\u663E\u793A\u5168\u90E8\u5185\u5BB9\uFF1B"],component:q}];return(r,o)=>{const s=m("v-message"),e=m("code-example");return c(),a(l,null,[k,(c(),a(l,null,S(i,n=>_("div",{class:"component-block",key:n.component},[x(s,{title:n.title,desc:n.desc},null,8,["title","desc"]),x(e,{component:n.component},null,8,["component"])])),64))],64)}}},B=y(L,[["__scopeId","data-v-981f0092"]]);export{B as default};
