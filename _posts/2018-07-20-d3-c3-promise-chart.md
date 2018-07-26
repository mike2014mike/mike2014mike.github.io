---
layout:     post
title:      d3.js + c3.js Promise Sample
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - d3.js
 - c3.js
 - Pormise
---

* d3.js - 操控SVG向量圖形的視覺化框架
* c3.js - 基於 d3.js 的簡易繪圖框架
* Pormise - AJAX中階功能

## CDN

```html
<!-- d3.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js"></script>
<!-- c3.js -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.6.5/c3.min.css" rel="stylesheet" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.6.5/c3.min.js"></script>
```

## sample

```html
<script>
var _url = 'https://mike2014mike.github.io/blog/sample/';
// 高雄、屏東縣人口數
function load(data){
  var chart = c3.generate({
    bindto: '.chart',
    data: {
        columns: data,
    },
  });
}
function getURL(URL) {
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open('get',_url+URL);
      xhr.send(null)
      xhr.onload = function(){
      resolve(JSON.parse(xhr.responseText));
    }
    });
}

// init
var kaohsiung = getURL('kaohsiung.json');
var pingtung = getURL('pingtung.json');

Promise.all([kaohsiung, pingtung]).then(function(results){
    var originData =[];
    originData.push(['高雄'].concat(results[0]))
    originData.push(['屏東'].concat(results[1]))
    load(originData);
})
</script>
```


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='D3.JS C3.JS Promise Sample' src='//codepen.io/mikechen2017/embed/PBbBoo/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/PBbBoo/'>D3.JS C3.JS Promise Sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

[摘自](https://www.youtube.com/watch?v=0PQ8VOsyjzw)
[共筆](https://quip.com/gpbZAyy2Py7a)