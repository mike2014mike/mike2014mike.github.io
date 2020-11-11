---
layout:     post
title:      【Node.js】使用 Fetch 來抓資料吧  node-fetch
date:       2018-10-05 10:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  code
tags:
 - NodeJS
 - fetch
---

### Fetch 是什麼？
傳統上要抓別人提供的資料或者串接 API ，通常是使用 XMLHttpRequest（XHR） 或 jQuery AJAX，但自從 Fetch API 問世後，我們就可以寫出簡潔優雅的代碼了！以下我們來先比較看看 XHR, AJAX 與 Fetch 的寫法差異吧！

### XHR 寫法
```js
function reqListener() {
  const data = JSON.parse(this.responseText);
  console.log(data)
}

function reqError(err) {
  console.log('Fetch Error :-S', err)
}

const oReq = new XMLHttpRequest();
oReq.onload = reqListener
oReq.onerror = reqError
oReq.open('get', 'https://xxx/demo/sample.json', true)
oReq.send()
```


### AJAX 寫法

```js
$.ajax({

    // 進行要求的網址(URL)
    url: 'https://xxx/demo/sample.json',

    // 要送出的資料 (會被自動轉成查詢字串)
    data: {
        id: 'a001'
    },

    // 要使用的要求method(方法)，POST 或 GET
    type: 'GET',

    // 資料的類型
    dataType : 'json',
})
  // 要求成功時要執行的程式碼
  // 回應會被傳遞到回調函式的參數
  .done(function( json ) {
     $( '<h1>' ).text( json.title ).appendTo( 'body' );
     $( '<div class=\'content\'>').html( json.html ).appendTo( 'body' );
  })
  // 要求失敗時要執行的程式碼
  // 狀態碼會被傳遞到回調函式的參數
  .fail(function( xhr, status, errorThrown ) {
    console.log( '出現錯誤，無法完成!' )
    console.log( 'Error: ' + errorThrown )
    console.log( 'Status: ' + status )
    console.dir( xhr )
  })
  // 不論成功或失敗都會執行的回調函式
  .always(function( xhr, status ) {
    console.log( '要求已完成!' )
  })
```

### Fetch 寫法

```js
fetch('https://xxx/demo/sample.json').then(function(response) {
    // 直接轉成JSON格式
    return response.json()
}).then(function(obj) {
    // `obj`會是一個JavaScript物件
    console.log(obj)
}).catch(function(err) {
  // Error :(
})
```


### 安裝 node-fetch 套件
Fetch 是一個 HTML5 的 API，並非 ECMAScript 標準。Node.js 並沒有提供Fetch API，我們可以安裝 node-fetch 套件，來達使用它。

```batch
npm install node-fetch
```

### Code

```js
var fetch = require('node-fetch');

var api_url = 'API 網址';
fetch(api_url, {})
  .then((response) => {
    // 這裡會得到一個 ReadableStream 的物件
    console.log(response);
    // 可以透過 blob(), json(), text() 轉成可用的資訊
    return response.json();
  }).then((jsonData) => {
    console.log(jsonData);
  }).catch((err) => {
    console.log('錯誤:', err);
  });
```

### Reference

* [ES6 Fetch 遠端資料方法](https://ithelp.ithome.com.tw/articles/10194388)

* [AJAX與Fetch API](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)

* [前端工程師都應該知道的 fetch](https://blog.othree.net/log/2014/11/25/fetch/)