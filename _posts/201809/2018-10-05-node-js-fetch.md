---
layout:     post
title:      在 Node.js 使用 fetch - node-fetch
date:       2018-10-05 10:37:19
author:     Mike Chen
summary:    
categories: NodeJS
thumbnail:  code
tags:
 - Node.js
 - fetch
---

### Install node-fetch

```
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