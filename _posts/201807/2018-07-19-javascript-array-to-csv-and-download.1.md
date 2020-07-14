---
layout:     post
title:      javascript Array轉CSV並下載
date:       2018-07-19 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - Array
 - CSV
 - echarts
---

繪製圖表的數據常常是Array形式，如何透過Javascript轉換為CSV，並讓使用者下載成CSV檔案呢？
請看下方code：

```javascript
var myChart;
var time = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var data1 = rand(7, 11, 20);
var data2 = rand(7, 1, 9);


$(document).ready(function () {
    var dom = document.getElementById("sampleChart");
    myChart = echarts.init(dom);

    var option = {
        title: {
            //text: '未来一周气温变化',
            //subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高气温', '最低气温']
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: time
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: '最高气温',
                type: 'line',
                smooth: true,
                data: data1,

            },
            {
                name: '最低气温',
                type: 'line',
                smooth: true,
                data: data2,

            }
        ]
    };

    myChart.setOption(option);
    $(window).on('resize', myChart.resize);//配合視窗resize
});

//產生亂數陣列
function rand(len, min, max) {
    var oriData = [];
    for (i = 1; i <= len; i++) {
        // and the formula is:
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        oriData.push(random);
    }
    return oriData;
}




$('#btnConvert').click(function () {
    var _headers = ['時間', '最高溫度', '最低溫度'];

    // prepare CSV data
    var csvData = new Array();

    csvData.push(_headers);

    for (i = 0; i < time.length; i++) {
        csvData.push(new Array(time[i], data1[i], data2[i]));
    }

    console.log(csvData);

    var lineArray = [];
    csvData.forEach(function (infoArray, index) {
        var line = infoArray.join(",");
        lineArray.push(index == 0 ? "\uFEFF" + line : line); // 為了讓Excel開啟csv，需加上BOM：\uFEFF
    });
    var csvContent = lineArray.join("\n");

    console.log(csvContent);
    //var encodedUri = encodeURI(csvContent);
    //window.open(encodedUri);

    // download stuff
    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    var link = document.createElement("a");

    if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        link.setAttribute("href", window.URL.createObjectURL(blob));
        link.setAttribute("download", "data.csv");
        link.setAttribute("hidden", true);
    }
    else {
        // it needs to implement server side export
        console.log('error');
        link.setAttribute("href", "#");
    }
    //link.innerHTML = "Export to CSV";
    //document.body.appendChild(link);
    link.click();

});

```

下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='Array TO CSV & download CSV file' src='//codepen.io/mikechen2017/embed/mjEQPE/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/mjEQPE/'>Array TO CSV & download CSV file</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>