---
layout:     post
title:      JavaScript ES6之展開(Spread)、其餘(Rest)
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
---

[MDN - Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript
const people1 = ['悟空', '達爾', '克林'];
const people2 = ['幽助', '飛影', '藏馬'];

const merge1 = [people1, people2];
console.log(merge1);
//[["悟空", "達爾", "克林"], ["幽助", "飛影", "藏馬"]]

const merge2 = [...people1, ...people2];
console.log(merge2); //Spread
//["悟空", "達爾", "克林", "幽助", "飛影", "藏馬"]

const myFunction1 = function(){
  console.log(arguments);
  //arguments是類陣列，無法使用任何陣列的方法，箭頭函式不會有arguments  
  
  //類陣列轉換為陣列
  const arg = [...arguments];
  console.log(arg); //陣列  
}

myFunction1(1, 2, 3);

const myFunction2 = function(a, ...b){//其餘用b表示，b就是Rest
  console.log(a, b);
}

myFunction2(4, 5, 6, 7, 8, 9);
```




[摘自](https://www.youtube.com/watch?v=JNxHZ3FzTz4)
[共筆](https://paper.dropbox.com/doc/59--AIHZUYzRHd3bxKqJ3klV9Y57Ag-9e5EUPKOvy9IWiPOhLg52)