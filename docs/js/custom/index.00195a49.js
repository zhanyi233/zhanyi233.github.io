import{i as h}from"../index/index.ac5a7abe.js";import{o as b,a as r,c,_ as u,F as l,m as x,h as m,f as i,q as f,s as S,p}from"../../assets/index.ad0d128b.js";function d(n){n.__sourceCode=`<template>
  <div id="tangential-polar-bar" class="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Echarts from "echarts";

/**
 * @description: \u7ED8\u5236\u56FE\u8868
 */
const drawChart = () => {
  const myChart = Echarts.init(document.getElementById("tangential-polar-bar"));
  const total = 65;
  const option = {
    title: {
      // \u4E2D\u95F4\u6807\u9898\u3001\u6570\u636E
      text: total, // \u6807\u9898
      textStyle: {
        color: "#000",
        fontSize: 16,
      },
      subtext: "\u60A3\u8005\u603B\u6570", // \u526F\u6587\u672C\u6807\u9898
      subtextStyle: {
        color: "#333",
        fontSize: 14,
      },
      itemGap: 10, // \u6807\u9898\u95F4\u7684\u8DDD\u79BB
      left: "center",
      bottom: "20%",
    },
    // \u6781\u5750\u6807\u7CFB\u7684\u89D2\u5EA6\u8F74
    angleAxis: {
      // \u8D77\u59CB\u89D2\u5EA6\uFF0C180 \u4E5F\u53EF\u4EE5\u662F 225
      startAngle: 180,
      max: total * 2,
      clockwise: true, // \u9006\u65F6\u9488
      // \u9690\u85CF\u523B\u5EA6\u7EBF
      show: false,
    },
    // \u6781\u5750\u6807\u7CFB\u7684\u5F84\u5411\u8F74
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    polar: {
      center: ["50%", "80%"],
      radius: ["40%", "150%"], // \u56FE\u5F62\u5927\u5C0F
    },
    series: [
      // \u4E0A\u5C42\u6570\u636E
      {
        type: "bar",
        z: 2,
        data: [
          {
            value: "5",
            itemStyle: {
              opacity: 1,
              color: "#FF8080",
            },
          },
          {
            value: "14",
            itemStyle: {
              opacity: 1,
              color: "#FFC200",
            },
          },
          {
            value: "50",
            itemStyle: {
              opacity: 1,
              color: "#49CAA9",
            },
          },
          {
            value: "33",
            itemStyle: {
              opacity: 1,
              color: "#4081F7",
            },
          },
        ],
        showBackground: true,
        backgroundStyle: {
          color: "transparent",
        },
        coordinateSystem: "polar", // \u4F7F\u7528\u6781\u5750\u6807\u7CFB
        roundCap: true,
        barWidth: 10,
        barGap: "-100%",
        emphasis: {
          disabled: true,
        },
      },
      // \u5E95\u5C42\u80CC\u666F\u8272
      {
        type: "bar",
        z: 1,
        // \u9700\u8981\u7684\u5706\u73AF\u8DE8\u5EA6\u5927\u5C0F\uFF0C\u53EF\u4EE5\u662F180,270\u7B49
        data: [total, total, total, total],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 10,
        barGap: "-100%",
        itemStyle: {
          opacity: 1,
          color: "#E9EEF8",
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };
  // \u7ED8\u5236\u56FE\u8868
  myChart.setOption(option);

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
</style>`,n.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const g={id:"tangential-polar-bar",class:"chart"},_={__name:"tangential-polar-bar",setup(n){const o=()=>{const e=h(document.getElementById("tangential-polar-bar")),t=65,s={title:{text:t,textStyle:{color:"#000",fontSize:16},subtext:"\u60A3\u8005\u603B\u6570",subtextStyle:{color:"#333",fontSize:14},itemGap:10,left:"center",bottom:"20%"},angleAxis:{startAngle:180,max:t*2,clockwise:!0,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:{center:["50%","80%"],radius:["40%","150%"]},series:[{type:"bar",z:2,data:[{value:"5",itemStyle:{opacity:1,color:"#FF8080"}},{value:"14",itemStyle:{opacity:1,color:"#FFC200"}},{value:"50",itemStyle:{opacity:1,color:"#49CAA9"}},{value:"33",itemStyle:{opacity:1,color:"#4081F7"}}],showBackground:!0,backgroundStyle:{color:"transparent"},coordinateSystem:"polar",roundCap:!0,barWidth:10,barGap:"-100%",emphasis:{disabled:!0}},{type:"bar",z:1,data:[t,t,t,t],coordinateSystem:"polar",roundCap:!0,barWidth:10,barGap:"-100%",itemStyle:{opacity:1,color:"#E9EEF8"},emphasis:{disabled:!0}}]};e.setOption(s),window.addEventListener("resize",()=>{e.resize()})};return b(()=>{o()}),(e,t)=>(r(),c("div",g))}};typeof d=="function"&&d(_);const v=u(_,[["__scopeId","data-v-cebd85e1"]]);const w=n=>(f("data-v-7929a42a"),n=n(),S(),n),C=w(()=>m("h2",{class:"component-h1"},"\u6DF7\u5408\u56FE\u8868",-1)),F={__name:"index",setup(n){const o=[{title:"\u73AF\u5F62\u534A\u5706",desc:["\u6781\u5750\u6807\u7CFB + \u67F1\u72B6\u56FE"],component:v}];return(e,t)=>{const s=p("v-message"),y=p("code-example");return r(),c(l,null,[C,(r(),c(l,null,x(o,a=>m("div",{class:"component-block",key:a.component},[i(s,{title:a.title,desc:a.desc},null,8,["title","desc"]),i(y,{component:a.component},null,8,["component"])])),64))],64)}}},z=u(F,[["__scopeId","data-v-7929a42a"]]);export{z as default};
