---
layout:     post
title:      JavaScript 30 - Day 2.JS and CSS Clock
date:       2018-08-22 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
---


### #2.JS and CSS Clock

```js
[筆記]

# 時間讀取
* new Date()

# CSS Style
style.transform = rotate('角度')

# 計時器 Timer
* setInterval: 多次，對應 clearInterval
* setTimeout: 單次，對應 clearTimeout
* requestAnimationFrame

# 秒針、分針計算
* 旋轉角度：(360 / 60) * 分或秒 + 90度

# 時針計算
* 小時範圍是 0 ~ 23，要轉換成 0 ~ 11，利用「餘數」
* 例如除以 7 ，餘數範圍就是 0 ~ 6
* 反推，我們要 0 ~ 11，那就是除以 12
* 旋轉角度：(360 / 12) * (時 % 12) + 90度

# 優化
1. 檢討 getTime() 裡面有沒有不需要做很多次的，將其拉出。
> 選取器不用一直重新選。

2. 10 點 50 分，時針和分針真的會重疊嗎？角度一樣？
* 分針
> 分針不會剛好一分鐘到了直接跳一格，而是會隨著秒針緩慢移動。
> 分鐘一格 6 度，將其依照秒數切 60 份。

* 時針
> 時針也不會剛好一小時到了直接跳一格，而是會隨著分針緩慢移動。
> 一小時有 5 格，也就是 30 度，依照分鐘切 60 份。
```

* [實作](https://mike2014mike.github.io/js30/02 - JS and CSS Clock/index-mike.html)



### 參考
* [Javascript 30 #1](https://www.youtube.com/watch?v=CWxU_q5b33U)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)