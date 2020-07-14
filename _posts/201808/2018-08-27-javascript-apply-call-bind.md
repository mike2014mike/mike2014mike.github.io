---
layout:     post
title:      JavaScript - apply, call 和 bind
date:       2018-08-27 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - JavaScript
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
f0(); //this 是空的，會印出整個 Window 物件/ global

function f1() {
  console.log(this) //{ value: 100 }
}
//利用 apply 將 this 換成 data，並立刻執行 f1
f1.apply(data);


function f2() {
  console.log(this) //{ value: 100 }
}
//利用 call 將 this 換成 data，並立刻執行 f2
f2.call(data);


function f3() {
  console.log(this) //{ value: 100 }
}
//利用 bind 將 this 換成 data，並回傳一個 function
var newFoo = f3.bind(data);
newFoo();
```

![apply, call 與 bind](https://i.imgur.com/Qgy2Sxb.png)


### apply, call 應用

```js

function test(a, b, c) {
  console.log(a, b, c);
}

// 如果沒有要替換 this 的對象，第一個參數輸入 undefined 即可
test.apply(undefined, [1, 2, 3])  // apply 第二以後參數要輸入陣列
test.call(undefined, 5, 6, 7)     // call 第二以後參數要逐一列出

var arr = [1, 3, 4, 66, 74, 22, 44]
//var max = Math.max(1, 3, 4, 66, 74, 22, 44)
var max = Math.max.apply(undefined, arr)
//var max = Math.max(...arr)   //ES6 展開寫法
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
  console.log(arrr); //​​​​​[ 1, 2, 3, 4 ]​​​​​
}

temp(1, 2, 3, 4)

//或者改以下面寫法，直接取得陣列

function temp2(...args){
  console.log(args); //​​​​​[ 4, 5, 6, 7 ]​​​​​
}

temp2(4, 5, 6, 7)
```

![apply, call 應用](https://i.imgur.com/RhnV1DK.png)

### 參考
* [線上讀書會 承億 主講 Benchmark, javascript 作用域、閉包、this](https://www.youtube.com/watch?v=14hNN6veRjc)
* [你遇到过[ ].slice.call()吗？](https://www.jianshu.com/p/ae57baecc57d)
* [Javascript .apply()應用實例](http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/04/10/js-func-apply.aspx)
* [Apply與Call用法說明](https://dotblogs.com.tw/lastsecret/2010/11/30/19826)