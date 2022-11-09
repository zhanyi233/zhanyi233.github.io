<demo>基本用法</demo>
<template>
  <div id="basic-line" class="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Echarts from "echarts";

/**
 * @description: 扩展 x 轴
 */
const extensionXAxis = (chart) => {
  const extension = document.getElementById("extension"); // 创建div

  if (!extension) {
    const div = document.createElement("div");
    div.setAttribute("id", "extension");
    div.style.display = "block";
    document.querySelector("html").appendChild(div);
  }

  chart.on("mouseover", (params) => {
    if (params.componentType == "xAxis") {
      // 只针对 x 轴
      const extension = document.querySelector("#extension");
      const elementStyle = `
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
      `;
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
 * @description: 绘制图表
 */
const drawChart = () => {
  const myChart = Echarts.init(document.getElementById("basic-line"));
  const option = {
    xAxis: {
      type: "category",
      triggerEvent: true, // 设置
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
        width: 110, // 固定宽度
        overflow: "truncate", // 多余显示省略号
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
  // 绘制图表
  myChart.setOption(option);

  extensionXAxis(myChart); // 绑定事件
  
  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

onMounted(() => {
  drawChart();
});
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
