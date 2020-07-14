---
layout:     post
title:      JavaScript 30 - Day 4.Array Cardio
date:       2018-08-24 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - Array
---


### #4.Array Cardio
* [實作](https://mike2014mike.github.io/js30/04 - Array Cardio Day 1/test.js)

```js

[筆記]

# Node Exec
* VS Code 外掛，如果電腦已按裝 Node.js ，按下 F8 可直接執行 *.js， F9 可關閉。

# 變數紀錄資料
let name = 'Mike';

# 變數紀錄物件 [同屬]
let mike = {
    name: 'Mike',
    gender: 'male',
    bType: 'B'
}

# 變數紀錄陣列 [同類]
let people =['Mike', 'Nicole', 'Alex', 'Tom'];

# 物件取值
mike.name //Mike
mike[gender] //male

# 陣列取值
people[1] //Nicole

# 陣列從後面增加、刪除 [push, pop]
let numArr = [1, 2, 3]
//numArr.push(4);

let popNum = numArr.pop();
console.log(popNum); //3
console.log(numArr); //[1, 2]

# 陣列從前面增加、刪除 [shift, unshift]
let numArr = [1, 2, 3]
//numArr.unshift(0);

let shiftNum = numArr.shift();
console.log(shiftNum); //1
console.log(numArr); //[2, 3]
```

### 參考
* [Javascript 30 #3](https://www.youtube.com/watch?v=T-6LN1iQd1U)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)