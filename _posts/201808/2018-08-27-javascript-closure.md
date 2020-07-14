---
layout:     post
title:      JavaScript - Closure (閉包)
date:       2018-08-27 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - Closure
---


### 閉包

```js

function callMethod(newMoney) {
  var money = newMoney;
  return function (price) {       // 這裡就是一個閉包，不過目前只會使用一次
    money = money - price;
    return money;
  }
}

let card1 = callMethod(1000); //卡片一儲值 1000 元
let card2 = callMethod(2000); //卡片二儲值 2000 元

//卡片一每次刷卡花費 100 元，顯示餘額(會紀錄上次的餘額)
console.log(card1(100));
console.log(card1(100));
console.log(card1(100));
console.log(card1(100));

//卡片二每次刷卡花費 150 元，顯示餘額(會紀錄上次的餘額)
console.log(card2(150));
console.log(card2(150));
console.log(card2(150));
console.log(card2(150));

//callMethod 只帶一個參數無法使用，會回傳一個 function。
console.log(callMethod(100));

//callMethod 需帶入兩個參數方能使用
//但本範例如果直接這樣用等於是一個減法 function 而已。
console.log(callMethod(100)(20));

```

![Closure](https://i.imgur.com/OtFYK5h.png)


### 利用閉包解決問題

```js
//在第一個 for 迴圈內，我們將每次的 console.log 加上 setTimeout，預期應該會印出 0~4，但卻都是 5。
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100)
}

//我們利用閉包記憶的特性，加入一立即函式解決這問題
for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, 100)
  })(i)
}
```

![利用閉包解決問題](https://i.imgur.com/UwiAclY.png)



### 參考
* [JavaScript - 十分鐘帶你了解 閉包 (Closure)](https://www.youtube.com/watch?v=TLIQUloXLec)
* [線上讀書會 承億 主講 Benchmark, javascript 作用域、閉包、this](https://www.youtube.com/watch?v=14hNN6veRjc)