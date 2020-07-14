---
layout:     post
title:      javascript array常用方法
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - ALERTIFY.js
---


[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## join : 將陣列元素用固定符號串成字串

```javascript
var arr = ["jack", "john", "may", "su", "Ada"];
var str = arr.join("、");
// jack、john、may、su、Ada
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## 清除或增加陣列長度

```javascript
var arr = [1, 2, 3, 4, 5, 6];

arr.length = 2;
//[1,2]

arr.length = 0;
//[]

arr.length = 5;
//[,,,,]
```


## Array.from

```javascript
Array.from("foo");  //<-- 超方便
//["f", "o", "o"]


Array.from([1, 2, 3], x => x + x);
//[2, 4, 6]

Array.from({length:5}, (v, k) => k);
//[0, 1, 2, 3, 4]

```


## sort : 陣列排序

```javascript
var arr = [5, 9, 1, 3, 2, 6];

arr.sort();
//[1,2,3,5,6,9]

//也可以這樣寫
arr.sort(function (a,b) {
	return a - b;
})
//[1,2,3,5,6,9]

 

//如果要反過來排序的話
arr.sort(function (a,b) {
	return b - a;
})
//[9,6,5,3,2,1]
```


## push : 新增元素或元素組到陣列

```javascript
var arr = {

	name: [],

	data:[]

};

arr.name.push("jack");

arr.name.push("john");

arr.data.push({ weight: 60, height: 170 });

arr.data.push({ weight: 62, height: 175 });

JSON.stringify(arr);
//(JSON.stringify 返回的是字串，為方便看結構所以用物件來表示)
//{

//     "name":["jack", "john"],

//         "data":[

//             { "weight": 60, "height": 170 },

//             { "weight": 62, "height": 175 }

//         ]

// } 

```


## splice : 改變陣列內容，移除或新增元素

```javascript
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//在index 2移除0個元素，並插入 "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish is ["angel", "clown", "drum", "mandarin", "surgeon"]
//splice([index位置], [移除幾個], [插入字串])

//在index 3移除1個元素
removed = myFish.splice(3, 1);
//myFish is ["angel", "clown", "drum", "surgeon"]
//removed is ["mandarin"]

//在index 2移除1個元素，並插入 "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish is ["angel", "clown", "trumpet", "surgeon"]
//removed is ["drum"]

//在index 2移除2個元素，並插入 "parrot", "anemone" , "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish is ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed is ["angel", "clown"]

//在index 3移除2個元素
removed = myFish.splice(3, 2);
//myFish is ["parrot", "anemone", "blue"]
//removed is ["trumpet", "surgeon"]
```


## concat : 會將兩個陣列合併產生新的陣列，原陣列不改變

```javascript
var alpha = ["a", "b", "c"];

var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);
//["a", "b", "c", 1, 2, 3]
```


## some : 陣列比對，只要有一個元素是 true，就返回 true

```javascript
var arr = ["jack", "john", "may", "su", "Ada"];

var flag = arr.some(function (value, index, array) {

	return value == "may" ? true : false;

});
//flag 為 true
```


## every :  陣列比對，所有元素都是 true 才是 true

```javascript
var arr = ["jack", "john", "may", "su", "Ada"];

var flag = arr.every(function (value, index, array) {

	return value.length > 2;

});
//flag 為 false
```


## filter : 陣列過濾，透過 filter 的過濾條件返回一個新陣列

```javascript
var arr = ["jack", "john", "may", "su", "Ada"];

	var arr2 = arr.filter(function (value) {

	return value.length > 3;

});

arr2.join("、");
//jack、john
```


## map : 對陣列中的各元素進行操作，操作後的值會被寫入新的陣列中並返回

```javascript
var arr = [1, 2, 3, 4, 5, 6];

var arr2 = arr.map(function (element,index,array) {

	return element * 2;

});

arr2.join("、");
//2、4、6、8、10、12
```


## reduce : 陣列中的每一個元素都會呼叫一次callback函數，唯一不同的是，函數的回傳值會當作下一次呼叫的傳入值，常拿來加總用

```javascript
var arr = [1, 2, 3, 4, 5, 6];

var flag = arr.reduce(function (previousValue, currentValue, index, array) {

	return previousValue + currentValue;

})
//flag 為 1 + 2 + 3 + 4 + 5 + 6 = 21
```


## 移除陣列中，指定的元素值

```javascript
Array.prototype.remove = function () {
	var what, a = arguments, L = a.length, ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
			this.splice(ax, 1);
		}
	}
	return this;
};


var ary = ['three', 'seven', 'eleven'];
ary.remove('seven');
//[three,eleven]


//如果不想定義在prototype，也可以把它寫成 function 
function removeA(arr) {
	var what, a = arguments, L = a.length, ax;
	while (L > 1 && arr.length) {
			what = a[--L];
			while ((ax= arr.indexOf(what)) !== -1) {
			arr.splice(ax, 1);
		}
	}
	return arr;
}

var ary = ['three', 'seven', 'eleven'];
removeA(ary, 'seven');
//[three,eleven]
```