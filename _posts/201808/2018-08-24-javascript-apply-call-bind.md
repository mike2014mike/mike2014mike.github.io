---
layout:     post
title:      JavaScript - apply, call 和 bind
date:       2018-08-24 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - apply
 - call
 - bind
---




### apply, call 與 bind

```js

var data = { value: 100 };

function f0() {
  console.log(this)
}
f0(); //會印出整個 global

function f1() {
  console.log(this)
}
f1.apply(data);


function f2() {
  console.log(this)
}
f2.call(data);


function f3() {
  console.log(this)
}
var newFoo = f3.bind(data);
newFoo();
```

![apply, call 與 bind](https://i.imgur.com/Qgy2Sxb.png)


### apply, call 應用

```js

function test(a, b, c) {
  console.log(a, b, c);
}

test.apply(undefined, [1, 2, 3])
test.call(undefined, 5, 6, 7)

var arr = [1, 3, 4, 66, 74, 22, 44]
var max = Math.max.apply(undefined, arr)
//var max = Math.max(1, 3, 4, 66, 74, 22, 44)
//var max = Math.max(...arr)     //ES6 展開寫法
console.log(max);


console.log(Array.prototype.slice.call(arr));
console.log([].slice.call(arr));
//Array.prototype 可直接以 [] 取代

function temp() {
  //arguments 是保留字，可以取得輸入的參數
  console.log(arguments);
  //{ [Iterator]  '0': 1, '1': 2, '2': 3, '3': 4 }​​​​​

  //利用 .slice.call 將 arguments 轉為陣列
  var arrr = [].slice.call(arguments);
  console.log(arrr);
}

temp(1, 2, 3, 4)
```

![apply, call 應用](https://i.imgur.com/RhnV1DK.png)

### 參考
* [線上讀書會 承億 主講 Benchmark, javascript 作用域、閉包、this](https://www.youtube.com/watch?v=14hNN6veRjc)