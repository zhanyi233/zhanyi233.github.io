<demo>进阶用法</demo>
<template>
  <div id="basic-line-v2" class="chart"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as Echarts from 'echarts';

const chartsData = [
  {
    time: '2023-10-20 10:30',
    label: '住院',
    value: '8',
  },
  {
    time: '2023-10-20 10:31',
    label: '门诊',
    value: '17',
  },
  {
    time: '2023-10-20 10:32',
    label: '住院',
    value: '12',
  },
  {
    time: '2023-10-20 10:33',
    label: '门诊',
    value: '13',
  },
  {
    time: '2023-10-20 10:34',
    label: '住院',
    value: '20',
  },
  {
    time: '2023-10-20 10:35',
    label: '门诊',
    value: '29',
  },
  {
    time: '2023-10-20 10:36',
    label: '门诊',
    value: '13',
  },
  {
    time: '2023-10-20 10:37',
    label: '住院',
    value: '29',
  },
  {
    time: '2023-10-20 10:37',
    label: '住院',
    value: '13',
  },
  {
    time: '2023-10-20 10:38',
    label: '门诊',
    value: '8',
  },
  {
    time: '2023-10-20 10:39',
    label: '住院',
    value: '17',
  },
  {
    time: '2023-10-20 10:40',
    label: '门诊',
    value: '12',
  },
  {
    time: '2023-10-20 10:36',
    label: '门诊',
    value: '13',
  },
  {
    time: '2023-10-20 10:37',
    label: '门诊',
    value: '29',
  },
  {
    time: '2023-10-20 10:37',
    label: '门诊',
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
        xAxis: index, // 表现自定义的位置，可赋值
        label: {
          show: false,
        },
        lineStyle: { type: 'solid', color: '#E9EEF6', width: 1 }, // 样式： 线型、颜色、线宽
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
 * @description: 绘制图表
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
      // 鼠标是否可以进入悬浮框
      enterable: true,
      // 触发方式 mousemove, click, none, mousemove|click
      triggerOn: `click`,
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
        //params是数组格式
        for (let item of params) {
          //设置浮层图形的样式跟随图中展示的颜色
          str += `
                <div class="header">
                  <span>${item.name}</span>
                  <span class="${
                    chartsData[item.dataIndex].label === '住院'
                      ? 'tag is-zhuyuan'
                      : 'tag is-menzhen'
                  }">${chartsData[item.dataIndex].label}</span>
                </div>
                <div class="value">
                  <span class="title">白细胞</span>
                  <span class="label">${item.value}</span>
                </div>
                <div class="button" onclick="handleClickChart('${
                  item.dataIndex
                }')">
                  查看报告
                </div>
              `;
        }
        return str;
      },
    },
    dataZoom: [
      // 底部滑块
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
        // x轴文字的配置
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
        // 坐标轴刻度设置
        show: false,
      },
      axisLine: {
        //坐标轴轴线设置
        show: true, //是否显示坐标轴轴线
        lineStyle: {
          //坐标轴的线
          color: '#E9EEF6', //线的颜色
          width: 1, //线的粗细程度    (用数字表示)
          type: 'dashed', //线的类型        (可选solid  dotted  dashed)
        },
      },
      splitLine: {
        // 网格线
        show: true, // 是否显示
        interval: 0,
        lineStyle: {
          //网格线样式
          color: '#E9EEF6', // 网格线颜色
          width: 1, // 网格线的加粗程度
          type: 'dashed', // 网格线类型
        },
      },
      splitArea: {
        // 网格区域
        show: false, // 是否显示
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        // x轴文字的配置
        show: true,
        textStyle: {
          color: '#4C92F5',
        },
      },
      splitLine: {
        // 网格线
        show: true, // 是否显示
        lineStyle: {
          //网格线样式
          color: '#E9EEF6', // 网格线颜色
          width: 1, // 网格线的加粗程度
          type: 'dashed', // 网格线类型
        },
      },
      splitArea: {
        // 网格区域
        show: false, // 是否显示
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
          symbol: ['none', 'none'], // none为标线两端的样式为无，可更改
          data: [
            {
              yAxis: 6, // 表现自定义的位置，可赋值
              label: {
                position: 'insideEndBottom', // 表现内容展示的位置
                formatter: '6.00', // 标线展示的内容
                color: '#999', // 展示内容颜色
              },
              lineStyle: { type: 'dashed', color: '#01D272', width: 1 }, // 样式： 线型、颜色、线宽
            },
            {
              yAxis: 16.38, // 表现自定义的位置，可赋值
              label: {
                position: 'insideEndBottom', // 表现内容展示的位置
                formatter: '16.38', // 标线展示的内容
                color: '#999', // 展示内容颜色
              },
              lineStyle: { type: 'dashed', color: '#01D272', width: 1 }, // 样式： 线型、颜色、线宽
            },
          ].concat(xMarkLine),
        },
        markArea: {
          //标记区域
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
  // 绘制图表
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
</script>

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
</style>
