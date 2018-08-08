---
layout:     post
title:      你其實可以不用 jQuery
date:       2018-08-08 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - jquery
---

jQuery 很好用，我也有在用，但如果您只是喜歡它的 $ 可以簡寫，那大可不必載入整個 jQuery。

### $ 替代方案


```js
// jQuery 使用方式
var els = $('.el');

// 原生 JavaScript 使用方式
var els = document.querySelectorAll('.el');

// $ 替代方案
var $ = function (el) {
  return document.querySelectorAll(el);
}

var els = $('.el');
```


### 參考
* [你不需要jQuery](http://www.webhek.com/post/how-to-forget-about-jquery-and-start-using-native.html)
* [用纯JavaScript替代jQuery的技巧](http://www.webhek.com/post/you-do-not-need-jquery.html)