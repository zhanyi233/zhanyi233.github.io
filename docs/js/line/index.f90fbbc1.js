import{i as _}from"../index/index.ac5a7abe.js";import{o as g,a as m,c as x,_ as u,F as y,m as A,h as w,f as h,q as L,s as C,p as b}from"../../assets/index.570b7bb6.js";function v(t){t.__sourceCode=`<template>
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
</style>`,t.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const k={id:"basic-line",class:"chart"},E={__name:"basic-line",setup(t){const s=o=>{if(!document.getElementById("extension")){const n=document.createElement("div");n.setAttribute("id","extension"),n.style.display="block",document.querySelector("html").appendChild(n)}o.on("mouseover",n=>{if(n.componentType=="xAxis"){const e=document.querySelector("#extension"),i=`
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
      `;e.style.cssText=i,e.innerHTML=n.value,document.querySelector("html").onmousemove=l=>{const c=document.querySelector("#extension"),d=l.pageX-10,r=l.pageY+15;c.style.top=r+"px",c.style.left=d+"px"}}}),o.on("mouseout",n=>{if(n.componentType=="xAxis"){const e=document.querySelector("#extension");e.style.cssText="display:none"}})},p=()=>{const o=_(document.getElementById("basic-line")),a={xAxis:{type:"category",triggerEvent:!0,data:["2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10","2022-11-04 18:26:10"],axisLabel:{width:110,overflow:"truncate"}},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}],tooltip:{trigger:"axis"}};o.setOption(a),s(o),window.addEventListener("resize",()=>{o.resize()})};return g(()=>{p()}),(o,a)=>(m(),x("div",k))}};typeof v=="function"&&v(E);const D=u(E,[["__scopeId","data-v-fd291ff9"]]);function f(t){t.__sourceCode=`<template>
  <div id="basic-line-v2" class="chart"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as Echarts from 'echarts';

const chartsData = [
  {
    time: '2023-10-20 10:30',
    label: '\u4F4F\u9662',
    value: '8',
  },
  {
    time: '2023-10-20 10:31',
    label: '\u95E8\u8BCA',
    value: '17',
  },
  {
    time: '2023-10-20 10:32',
    label: '\u4F4F\u9662',
    value: '12',
  },
  {
    time: '2023-10-20 10:33',
    label: '\u95E8\u8BCA',
    value: '13',
  },
  {
    time: '2023-10-20 10:34',
    label: '\u4F4F\u9662',
    value: '20',
  },
  {
    time: '2023-10-20 10:35',
    label: '\u95E8\u8BCA',
    value: '29',
  },
  {
    time: '2023-10-20 10:36',
    label: '\u95E8\u8BCA',
    value: '13',
  },
  {
    time: '2023-10-20 10:37',
    label: '\u4F4F\u9662',
    value: '29',
  },
  {
    time: '2023-10-20 10:37',
    label: '\u4F4F\u9662',
    value: '13',
  },
  {
    time: '2023-10-20 10:38',
    label: '\u95E8\u8BCA',
    value: '8',
  },
  {
    time: '2023-10-20 10:39',
    label: '\u4F4F\u9662',
    value: '17',
  },
  {
    time: '2023-10-20 10:40',
    label: '\u95E8\u8BCA',
    value: '12',
  },
  {
    time: '2023-10-20 10:36',
    label: '\u95E8\u8BCA',
    value: '13',
  },
  {
    time: '2023-10-20 10:37',
    label: '\u95E8\u8BCA',
    value: '29',
  },
  {
    time: '2023-10-20 10:37',
    label: '\u95E8\u8BCA',
    value: '13',
  },
];

const fetchData = () => {
  let xData = [],
    yData = [],
    xMarkLine = [];

  chartsData.forEach((item, index) => {
    xData.push(item.time);
    yData.push(item.value);

    if (index % 5 === 0) {
      xMarkLine.push({
        xAxis: index, // \u8868\u73B0\u81EA\u5B9A\u4E49\u7684\u4F4D\u7F6E\uFF0C\u53EF\u8D4B\u503C
        label: {
          show: false,
        },
        lineStyle: { type: 'solid', color: '#E9EEF6', width: 1 }, // \u6837\u5F0F\uFF1A \u7EBF\u578B\u3001\u989C\u8272\u3001\u7EBF\u5BBD
      });
    }
  });

  return {
    xData,
    yData,
    xMarkLine,
  };
};

/**
 * @description: \u7ED8\u5236\u56FE\u8868
 */
const drawChart = () => {
  const { xData, yData, xMarkLine } = fetchData();

  const myChart = Echarts.init(document.getElementById('basic-line-v2'));
  const option = {
    grid: {
      top: 10,
      left: 60,
      right: 60,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      triggerOn: 'mousemove',
      className: 'echarts-trend',
      show: true,
      // \u9F20\u6807\u662F\u5426\u53EF\u4EE5\u8FDB\u5165\u60AC\u6D6E\u6846
      enterable: true,
      // \u89E6\u53D1\u65B9\u5F0F mousemove, click, none, mousemove|click
      triggerOn: \`click\`,
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#A7B1C1',
          type: 'solid',
          width: 2,
        },
      },
      formatter: (params) => {
        let str = '';
        //params\u662F\u6570\u7EC4\u683C\u5F0F
        for (let item of params) {
          //\u8BBE\u7F6E\u6D6E\u5C42\u56FE\u5F62\u7684\u6837\u5F0F\u8DDF\u968F\u56FE\u4E2D\u5C55\u793A\u7684\u989C\u8272
          str += \`
                <div class="header">
                  <span>\${item.name}</span>
                  <span class="\${
                    chartsData[item.dataIndex].label === '\u4F4F\u9662'
                      ? 'tag is-zhuyuan'
                      : 'tag is-menzhen'
                  }">\${chartsData[item.dataIndex].label}</span>
                </div>
                <div class="value">
                  <span class="title">\u767D\u7EC6\u80DE</span>
                  <span class="label">\${item.value}</span>
                </div>
                <div class="button" onclick="handleClickChart('\${
                  item.dataIndex
                }')">
                  \u67E5\u770B\u62A5\u544A
                </div>
              \`;
        }
        return str;
      },
    },
    dataZoom: [
      // \u5E95\u90E8\u6ED1\u5757
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 0,
        end: 40,
        filterMode: 'empty',
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        bottom: 10,
        start: 0,
        end: 100,
      },
    ],
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: false,
      axisLabel: {
        // x\u8F74\u6587\u5B57\u7684\u914D\u7F6E
        show: true,
        textStyle: {
          color: '#999',
        },
        interval: 0,
        formatter: (value, index) => {
          return index % 5 === 0 ? value : '';
        },
      },
      axisTick: {
        // \u5750\u6807\u8F74\u523B\u5EA6\u8BBE\u7F6E
        show: false,
      },
      axisLine: {
        //\u5750\u6807\u8F74\u8F74\u7EBF\u8BBE\u7F6E
        show: true, //\u662F\u5426\u663E\u793A\u5750\u6807\u8F74\u8F74\u7EBF
        lineStyle: {
          //\u5750\u6807\u8F74\u7684\u7EBF
          color: '#E9EEF6', //\u7EBF\u7684\u989C\u8272
          width: 1, //\u7EBF\u7684\u7C97\u7EC6\u7A0B\u5EA6    (\u7528\u6570\u5B57\u8868\u793A)
          type: 'dashed', //\u7EBF\u7684\u7C7B\u578B        (\u53EF\u9009solid  dotted  dashed)
        },
      },
      splitLine: {
        // \u7F51\u683C\u7EBF
        show: true, // \u662F\u5426\u663E\u793A
        interval: 0,
        lineStyle: {
          //\u7F51\u683C\u7EBF\u6837\u5F0F
          color: '#E9EEF6', // \u7F51\u683C\u7EBF\u989C\u8272
          width: 1, // \u7F51\u683C\u7EBF\u7684\u52A0\u7C97\u7A0B\u5EA6
          type: 'dashed', // \u7F51\u683C\u7EBF\u7C7B\u578B
        },
      },
      splitArea: {
        // \u7F51\u683C\u533A\u57DF
        show: false, // \u662F\u5426\u663E\u793A
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        // x\u8F74\u6587\u5B57\u7684\u914D\u7F6E
        show: true,
        textStyle: {
          color: '#4C92F5',
        },
      },
      splitLine: {
        // \u7F51\u683C\u7EBF
        show: true, // \u662F\u5426\u663E\u793A
        lineStyle: {
          //\u7F51\u683C\u7EBF\u6837\u5F0F
          color: '#E9EEF6', // \u7F51\u683C\u7EBF\u989C\u8272
          width: 1, // \u7F51\u683C\u7EBF\u7684\u52A0\u7C97\u7A0B\u5EA6
          type: 'dashed', // \u7F51\u683C\u7EBF\u7C7B\u578B
        },
      },
      splitArea: {
        // \u7F51\u683C\u533A\u57DF
        show: false, // \u662F\u5426\u663E\u793A
      },
    },
    series: [
      {
        data: yData,
        type: 'line',
        lineStyle: {
          color: '#4C92F5',
        },
        itemStyle: {
          normal: {
            color: '#4C92F5',
          },
        },
        symbolSize: 6,
        emphasis: {
          itemStyle: {
            borderColor: '#FF0F0F',
          },
        },
        markLine: {
          symbol: ['none', 'none'], // none\u4E3A\u6807\u7EBF\u4E24\u7AEF\u7684\u6837\u5F0F\u4E3A\u65E0\uFF0C\u53EF\u66F4\u6539
          data: [
            {
              yAxis: 6, // \u8868\u73B0\u81EA\u5B9A\u4E49\u7684\u4F4D\u7F6E\uFF0C\u53EF\u8D4B\u503C
              label: {
                position: 'insideEndBottom', // \u8868\u73B0\u5185\u5BB9\u5C55\u793A\u7684\u4F4D\u7F6E
                formatter: '6.00', // \u6807\u7EBF\u5C55\u793A\u7684\u5185\u5BB9
                color: '#999', // \u5C55\u793A\u5185\u5BB9\u989C\u8272
              },
              lineStyle: { type: 'dashed', color: '#01D272', width: 1 }, // \u6837\u5F0F\uFF1A \u7EBF\u578B\u3001\u989C\u8272\u3001\u7EBF\u5BBD
            },
            {
              yAxis: 16.38, // \u8868\u73B0\u81EA\u5B9A\u4E49\u7684\u4F4D\u7F6E\uFF0C\u53EF\u8D4B\u503C
              label: {
                position: 'insideEndBottom', // \u8868\u73B0\u5185\u5BB9\u5C55\u793A\u7684\u4F4D\u7F6E
                formatter: '16.38', // \u6807\u7EBF\u5C55\u793A\u7684\u5185\u5BB9
                color: '#999', // \u5C55\u793A\u5185\u5BB9\u989C\u8272
              },
              lineStyle: { type: 'dashed', color: '#01D272', width: 1 }, // \u6837\u5F0F\uFF1A \u7EBF\u578B\u3001\u989C\u8272\u3001\u7EBF\u5BBD
            },
          ].concat(xMarkLine),
        },
        markArea: {
          //\u6807\u8BB0\u533A\u57DF
          data: [
            [
              {
                yAxis: '6.00',
                itemStyle: {
                  color: 'rgba(1, 210, 114, 0.05)',
                },
                label: {
                  show: true,
                },
              },
              {
                yAxis: '16.38',
              },
            ],
          ],
        },
      },
    ],
  };
  // \u7ED8\u5236\u56FE\u8868
  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });
};

const handleClickChart = (index) => {
  console.log(index);
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
</style>

<style lang="scss">
.echarts-trend {
  background: #ffffff;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.11) !important;
  border: 1px solid #eaedf3;
  color: #000 !important;

  .header,
  .value,
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header {
    line-height: 18px;

    .tag {
      margin-left: 10px;
      padding: 1px 8px;
      line-height: 18px;
      color: #ffffff;
      border-radius: 4px;

      &.is-menzhen {
        border: 1px solid #fba12c;
        background: #fba12c;
      }

      &.is-zhuyuan {
        border: 1px solid #00b585;
        background: #00b585;
      }
    }
  }

  .value {
    margin: 5px 0;

    .title {
      font-weight: bold;
    }

    .label {
      font-weight: bold;
      margin: 0 13px 0 16px;

      &.max {
        color: #ff0f0f;
      }
    }
  }

  .button {
    color: #4c92f5;
    cursor: pointer;
  }
}
</style>`,t.__sourceCodeTitle="\u8FDB\u9636\u7528\u6CD5"}const F={id:"basic-line-v2",class:"chart"},S={__name:"basic-line-v2",setup(t){const s=[{time:"2023-10-20 10:30",label:"\u4F4F\u9662",value:"8"},{time:"2023-10-20 10:31",label:"\u95E8\u8BCA",value:"17"},{time:"2023-10-20 10:32",label:"\u4F4F\u9662",value:"12"},{time:"2023-10-20 10:33",label:"\u95E8\u8BCA",value:"13"},{time:"2023-10-20 10:34",label:"\u4F4F\u9662",value:"20"},{time:"2023-10-20 10:35",label:"\u95E8\u8BCA",value:"29"},{time:"2023-10-20 10:36",label:"\u95E8\u8BCA",value:"13"},{time:"2023-10-20 10:37",label:"\u4F4F\u9662",value:"29"},{time:"2023-10-20 10:37",label:"\u4F4F\u9662",value:"13"},{time:"2023-10-20 10:38",label:"\u95E8\u8BCA",value:"8"},{time:"2023-10-20 10:39",label:"\u4F4F\u9662",value:"17"},{time:"2023-10-20 10:40",label:"\u95E8\u8BCA",value:"12"},{time:"2023-10-20 10:36",label:"\u95E8\u8BCA",value:"13"},{time:"2023-10-20 10:37",label:"\u95E8\u8BCA",value:"29"},{time:"2023-10-20 10:37",label:"\u95E8\u8BCA",value:"13"}],p=()=>{let a=[],n=[],e=[];return s.forEach((i,l)=>{a.push(i.time),n.push(i.value),l%5===0&&e.push({xAxis:l,label:{show:!1},lineStyle:{type:"solid",color:"#E9EEF6",width:1}})}),{xData:a,yData:n,xMarkLine:e}},o=()=>{const{xData:a,yData:n,xMarkLine:e}=p(),i=_(document.getElementById("basic-line-v2")),l={grid:{top:10,left:60,right:60,containLabel:!0},tooltip:{trigger:"axis",triggerOn:"mousemove",className:"echarts-trend",show:!0,enterable:!0,triggerOn:"click",axisPointer:{type:"line",lineStyle:{color:"#A7B1C1",type:"solid",width:2}},formatter:c=>{let d="";for(let r of c)d+=`
                <div class="header">
                  <span>${r.name}</span>
                  <span class="${s[r.dataIndex].label==="\u4F4F\u9662"?"tag is-zhuyuan":"tag is-menzhen"}">${s[r.dataIndex].label}</span>
                </div>
                <div class="value">
                  <span class="title">\u767D\u7EC6\u80DE</span>
                  <span class="label">${r.value}</span>
                </div>
                <div class="button" onclick="handleClickChart('${r.dataIndex}')">
                  \u67E5\u770B\u62A5\u544A
                </div>
              `;return d}},dataZoom:[{type:"inside",xAxisIndex:[0,1],start:0,end:40,filterMode:"empty"},{show:!0,xAxisIndex:[0,1],type:"slider",bottom:10,start:0,end:100}],xAxis:{type:"category",data:a,boundaryGap:!1,axisLabel:{show:!0,textStyle:{color:"#999"},interval:0,formatter:(c,d)=>d%5===0?c:""},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#E9EEF6",width:1,type:"dashed"}},splitLine:{show:!0,interval:0,lineStyle:{color:"#E9EEF6",width:1,type:"dashed"}},splitArea:{show:!1}},yAxis:{type:"value",axisLabel:{show:!0,textStyle:{color:"#4C92F5"}},splitLine:{show:!0,lineStyle:{color:"#E9EEF6",width:1,type:"dashed"}},splitArea:{show:!1}},series:[{data:n,type:"line",lineStyle:{color:"#4C92F5"},itemStyle:{normal:{color:"#4C92F5"}},symbolSize:6,emphasis:{itemStyle:{borderColor:"#FF0F0F"}},markLine:{symbol:["none","none"],data:[{yAxis:6,label:{position:"insideEndBottom",formatter:"6.00",color:"#999"},lineStyle:{type:"dashed",color:"#01D272",width:1}},{yAxis:16.38,label:{position:"insideEndBottom",formatter:"16.38",color:"#999"},lineStyle:{type:"dashed",color:"#01D272",width:1}}].concat(e)},markArea:{data:[[{yAxis:"6.00",itemStyle:{color:"rgba(1, 210, 114, 0.05)"},label:{show:!0}},{yAxis:"16.38"}]]}}]};i.setOption(l),window.addEventListener("resize",()=>{i.resize()})};return g(()=>{o()}),(a,n)=>(m(),x("div",F))}};typeof f=="function"&&f(S);const I=u(S,[["__scopeId","data-v-71ac34b8"]]);const z=t=>(L("data-v-679d5bbf"),t=t(),C(),t),B=z(()=>w("h2",{class:"component-h1"},"\u6298\u7EBF\u56FE",-1)),M={__name:"index",setup(t){const s=[{title:"\u81EA\u5B9A\u4E49x\u8F74",desc:["\u6587\u5B57\u8D85\u51FA\u5BBD\u5EA6\u622A\u65AD\uFF0C\u4F7F\u7528\u524D\u8BF7\u914D\u7F6E width\uFF1B","\u5F53\u9F20\u6807\u653E\u7F6E\u5728\u8F74\u7EBF\u5904\u663E\u793A\u5168\u90E8\u5185\u5BB9\uFF1B"],component:D},{title:"\u66F4\u591A\u914D\u7F6E",desc:["dataZoom","splitLine"],component:I}];return(p,o)=>{const a=b("v-message"),n=b("code-example");return m(),x(y,null,[B,(m(),x(y,null,A(s,e=>w("div",{class:"component-block",key:e.component},[h(a,{title:e.title,desc:e.desc},null,8,["title","desc"]),h(n,{component:e.component},null,8,["component"])])),64))],64)}}},q=u(M,[["__scopeId","data-v-679d5bbf"]]);export{q as default};
