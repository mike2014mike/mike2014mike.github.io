---
layout:     post
title:      以Google APP Script API撰寫投票結果API
date:       2018-07-26 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - JavaScript
 - Google APP Script API
 - Google Chart
 - Vue
---


## 建置Google表單
目前不論是問卷調查還是投票，甚至是婚禮統計親友要來與否，很多人都直接使用 Google 表單來進行統計。這裡我做了一個簡單的[投票頁面](https://docs.google.com/forms/d/1fzW2SGMgQX7RXzfSmk_xd6Jf6XucEtwuHJDef8NMtNs/viewform?edit_requested=true)，僅做 demo 用，並沒真的抽獎活動。<br>

## 查看回應結果
我們可以在 Google 雲端硬碟中找到該[試算表](https://docs.google.com/spreadsheets/d/1GdGQn93xWgCT3xu31r3nDxHuVK9znTJGTKUIGxQePcY/edit#gid=1885393347)，詳實記錄了投票的時間與選項，但沒有統計出數據。
![投票結果](https://i.imgur.com/VY6tPXu.png)

## Google APP Script API
我們可以透過 Google APP Script API 將該試算表發布為 API，供後續自己或他人二次開發使用。<br>

操作步驟：
* 雲端硬碟 > 新增 > 更多 > Google APP Script
* 輸入以下 Code，[本範例](https://script.google.com/d/1KsBm2uw0xxbrwE6I8NmLPzrN5IRKS4njdSodFs1pFKJf6M1LRBPcb21v/edit)將該試算表讀取後轉換為 JSON 格式發佈。

```javascript
function doGet(e) {
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1GdGQn93xWgCT3xu31r3nDxHuVK9znTJGTKUIGxQePcY/edit#gid=1885393347');
  var sheet = ss.getSheetByName('表單回應 1');
  
  return getData(sheet);
}

function getData(sheet){
  var jo = {};
  var dataArray = [];
  var rows = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
//  var target = "C" + sheet.getLastRow();
//  var rows = sheet.getRange("A2:"+target).getValues();
  
  Logger.log(rows);
  
  for(var i = 0, l = rows.length; i<l; i++){
    var dataRow = rows[i];
    var record = {};
    if(dataRow[0]!='' && dataRow[2]!=''){
      record['time'] = dataRow[0];
      record['phone'] = dataRow[1];
      record['product'] = dataRow[2];
    
      dataArray.push(record);    
    }
    
  }
  
  jo.data = dataArray;
  
  var result = JSON.stringify(jo);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
```

* 發佈 > 佈署為網路應用程式

![佈署為網路應用程式](https://i.imgur.com/oXL5yib.png)

* 請記得每次若有修改，重新發佈時，專案版本號碼都要 `往上加一` 。

![佈署設定](https://i.imgur.com/eBxM7Ck.png)

* 之後只要在網址列輸入 [API 連結](https://script.google.com/macros/s/AKfycbzgi7A8mvHKhvvwgAmZLdZGRzp67mYTwE_qHXCUmeoTQvJwOj7P/exec)，就可以得到 JSON 格式的資料。

![JSON格式的資料](https://i.imgur.com/9k9MEti.png)

* 可使用圖表繪製套件繪製專屬圖表，這裡我使用 Google Chart，搭配 Vue 來實作。

HTML

```html
<div id="app">
    <button id="getBtn" @click="getData" hidden>取得資料</button>
    <div id="barchart" style="width: 100%; height: 300px;border: 1px solid green;"></div>
    <div id="piechart_3d" style="width: 100%; height: 300px;border: 1px solid green;"></div>
    <pre>{{result}}</pre>
</div>
```

Javascript

```javascript
$(function () {
    console.log("ready!");
    $('#getBtn').click();
});



var vm = new Vue({
    el: '#app',
    data: {
        result: []
    },
    computed: {
    },
    methods: {
        getData() {
            var self = this;
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbzgi7A8mvHKhvvwgAmZLdZGRzp67mYTwE_qHXCUmeoTQvJwOj7P/exec",
                success: function (data) {
                    console.log(data.data);

                    //取得所有產品名稱
                    var product_names = data.data.map(row => Object.values(row)[2])
                        .reduce((a, b) => a.concat(b), [])
                        .filter((data, index, arr) => arr.indexOf(data) == index)
                    console.log(product_names);

                    //inital items
                    var items = [];
                    product_names.map(ele => {
                        items.push({
                            name: ele, vote: 0
                        })
                    })

                    //計算得票數
                    data.data.map(data_ele => {
                        items.map(item => {
                            if (data_ele.product == item.name) {
                                item.vote++;
                            }
                        })
                    })

                    //轉換Google Chart所需格式
                    self.result = [];
                    self.result.push(['名稱', '得票數']);
                    items.map(ele => {
                        self.result.push([ele.name, ele.vote])
                    })
                    // console.log(self.result);
                    if (self.result.length > 2) {
                        self.startDraw();
                    }

                }
            });
        },
        startDraw() {
            google.charts.load('current', { 'packages': ['bar'] });
            google.charts.setOnLoadCallback(this.drawBarChart);

            google.charts.load("current", { packages: ["corechart"] });
            google.charts.setOnLoadCallback(this.drawPieChart);
        },
        drawBarChart() {
            console.log(this.result);
            var data = google.visualization.arrayToDataTable(this.result);

            var options = {
                legend: { position: 'none' },
                chart: {
                    title: '目前商品得票數統計',
                    subtitle: '統計時間：' + this.showTime(),
                },
                axes: {
                    x: {
                        0: { side: 'top', label: '得票數' } // Top x-axis.
                    }
                },
                bars: 'horizontal' // Required for Material Bar Charts.
            };

            var chart = new google.charts.Bar(document.getElementById('barchart'));
            chart.draw(data, google.charts.Bar.convertOptions(options));
        },
        drawPieChart() {
            console.log(this.result);
            var data = google.visualization.arrayToDataTable(this.result);

            var options = {
                title: '目前得票數統計',
                is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
            chart.draw(data, options);
        },
        showTime() {
            var timeDate = new Date();
            var tMonth = (timeDate.getMonth() + 1) > 9 ? (timeDate.getMonth() + 1) : '0' + (timeDate.getMonth() + 1);
            var tDate = timeDate.getDate() > 9 ? timeDate.getDate() : '0' + timeDate.getDate();
            var tHours = timeDate.getHours() > 9 ? timeDate.getHours() : '0' + timeDate.getHours();
            var tMinutes = timeDate.getMinutes() > 9 ? timeDate.getMinutes() : '0' + timeDate.getMinutes();
            var tSeconds = timeDate.getSeconds() > 9 ? timeDate.getSeconds() : '0' + timeDate.getSeconds();
            return timeDate = timeDate.getFullYear() + '/' + tMonth + '/' + tDate + ' ' + tHours + ':' + tMinutes + ':' + tSeconds;
        }
    }
})
```

CodePen
<div class="iframe-rwd">
    <iframe scrolling='no' title='Google Apps Script API' src='//codepen.io/mikechen2017/embed/GdOVdV/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/GdOVdV/'>Google Apps Script API</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

## 配額
雖然此服務是免費的，但其實是有些限制的，請參考[配額說明](https://script.google.com/dashboard/quota)連結。