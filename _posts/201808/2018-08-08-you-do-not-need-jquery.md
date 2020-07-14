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

jQuery 很好用，我也有在用，但如果您只是喜歡它可以將
* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()
* document.querySelector()
* document.querySelectorAll()

等等全部用 $ 簡寫，那大可不必載入整個 jQuery。

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


### querySelector 和 getElementById 方法的區別

> query 選擇符選出來的元素及元素陣列是靜態的，而 getElement 這種方法選出的元素是動態的。
> 什麼叫靜態的？意思是指選出的所有元素的陣列，不會隨著文檔操作而改變。

```html
<ul>
    <li>111</li>
    <li>222</li>
    <li>333</li>
</ul>
```

```js
var ul = document.querySelector('ul');
var list = ul.querySelectorAll('li');
for (var i = 0; i < list.length; i++) {
    ul.appendChild(document.createElement('li'));
}//這個時候就創建了 3 個新的 li ，添加在 ul 列表上。 
console.log(list.length) //輸出的結果仍然是 3 ，但此時畫面上 li 的數量是 6

var ul = document.getElementsByTagName('ul')[0];
var list = ul.getElementsByTagName('li');
for (var i = 0; i < 5; i++) {
    ul.appendChild(document.createElement('li'));
}
console.log(list.length)//此時輸出的結果就是 3 + 5 = 8

```


### 參考
* [你不需要jQuery](http://www.webhek.com/post/how-to-forget-about-jquery-and-start-using-native.html)
* [用纯JavaScript替代jQuery的技巧](http://www.webhek.com/post/you-do-not-need-jquery.html)
* [querySelector和getElementById方法的区别](http://www.imooc.com/article/13027?block_id=tuijian_wz)
* [不負責 Javascript 入門觀念提醒](https://www.youtube.com/watch?v=hCy-eHwjhXc)