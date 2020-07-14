---
layout:     post
title:      echarts - 多Y軸用法
date:       2018-07-23 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - echarts
---



## CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/3.8.5/echarts.min.js"></script>
```



## Code

```javascript
<script>
var myChart = echarts.init(document.getElementById('main'));

var colors = ['blue', 'red', 'green'];

option = {
    title: {
        // text: 'ECharts - 多Y軸',
        x: 'center',
        y: 'top'
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['良率', '濕度', '溫度'],
        y: 'bottom'
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '良率',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '濕度',
            min: 0,
            max: 100,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '溫度',
            min: 0,
            max: 40,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name: '良率',
            type: 'line',
            smooth: true,
            data: [72.0, 74.9, 70.0, 73.2, 75.6, 76.7, 85.6, 86.2, 89.6, 90.0, 91.4, 93.3]
        },
        {
            name: '濕度',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: [30.1, 35.9, 39.0, 36.4, 38.7, 40.7, 45.6, 48.2, 48.7, 48.8, 46.0, 42.3]
        },
        {
            name: '溫度',
            type: 'line',
            smooth: true,
            yAxisIndex: 2,
            data: [25.0, 25.2, 33.3, 34.5, 26.3, 30.2, 30.3, 23.4, 23.0, 36.5, 32.0, 36.2]
        }
    ]
};

// 使用剛指定的配置項和資料顯示圖表。
myChart.setOption(option);
</script>
```


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='echarts - 多Y軸' src='//codepen.io/mikechen2017/embed/ZjeXjb/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/ZjeXjb/'>echarts - 多Y軸</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>
