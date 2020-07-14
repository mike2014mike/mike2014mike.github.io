---
layout:     post
title:      javascript JSON轉CSV並下載
date:       2018-07-19 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - JSON
 - CSV
---

JSON是網路上常用的交換格式，如何透過Javascript轉換為CSV，並自動下載成CSV檔案呢？
請看下方code：

```javascript
$('#_json').click(function () {
    this.select(); //點選會全選
});

// JSON to CSV Converter
function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

// Example
$(document).ready(function () {

    // Create Object
    var items = [
        { car: "奧迪", color: "黑色", size: "1200cc" },
        { car: "法拉利", color: "紅色", size: "1500cc" },
        { car: "藍寶堅尼", color: "銀色", size: "2000cc" }];

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    // Display JSON
    $('#json').text(jsonObject);

    var header = 'car,color,size';
    var str = header + '\r\n';
    str += ConvertToCSV(jsonObject);
    // Convert JSON to CSV & Display CSV
    $('#csv').text(str);


    $("#_json").val('[{"car":"奧迪","color":"黑色","size":"1200cc"},{"car":"法拉利","color":"紅色","size":"1500cc"},{"car":"藍寶堅尼","color":"銀色","size":"2000cc"}]');
});




function convert() {
    var json = $("#_json").val();
    //console.log(json);
    if (json == '')
        return;
    //json = JSON.parse(json).results;
    json = JSON.parse(json);
    // Find the largest element
    var largestEntry = 0;
    var header;
    for (var i = 0; i < json.length; i++) {
        if (!Object.keys) {
            Object.keys = function (obj) {
                var keys = [];
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        keys.push(i);
                    }
                }
                return keys;
            };
        }
        if (Object.keys(json[i]).length > largestEntry) {
            largestEntry = Object.keys(json[i]).length;
            header = Object.keys(json[i]);
        }
    };
    // Assemble the header
    var convertedjson = "";
    if (typeof Array.prototype.forEach != 'function') {
        Array.prototype.forEach = function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback.apply(this, [this[i], i, this]);
            }
        };
    }
    header.forEach(function (heading) {
        if (convertedjson != "") {
            convertedjson += ",";
        }
        convertedjson += "\"";
        convertedjson += heading
        convertedjson += "\"";
    });
    convertedjson += "\r\n";
    // Iterate through the header for all elements
    json.forEach(function (entry) {
        header.forEach(function (heading) {
            convertedjson += "\"";
            convertedjson += (entry[heading] || "");
            convertedjson += "\"";
            convertedjson += ",";
        });
        convertedjson = convertedjson.substring(0, convertedjson.length - 1);
        convertedjson += "\r\n";
    });
    $("#_csv").val(convertedjson);
}

function convertAndExport() {
    convert();
    var csv = $("#_csv").val();
    if (csv == '')
        return;
    // Exporting
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    var date = now.getDate();
    var year = now.getFullYear();
    var month = months[now.getMonth()];
    var fileName = "CSV" + year + month + date;
    var uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURI(csv); //encodeURI用來轉為UTF-8編碼
    var link = document.createElement("a");
    $(link).hide();
    link.href = uri;
    link.download = fileName + ".csv";
    $("body").append(link);
    link.click();
    $("body").remove(link);
}
```

下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='JSON TO CSV & download CSV file' src='//codepen.io/mikechen2017/embed/PBzyXN/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/PBzyXN/'>JSON TO CSV & download CSV file</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>