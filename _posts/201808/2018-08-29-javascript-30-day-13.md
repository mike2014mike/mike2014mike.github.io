---
layout:     post
title:      JavaScript 30 - Day 13.Slide in on Scroll 捲軸動畫
date:       2018-08-29 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
---

### 步驟
1. 程式控制卷軸，絕對座標計算
2. 減速動畫計算，使用 requestAnimationFrame，更新頻率依電腦效能而定。(IE9以前不支援)


### 筆記

* querySelectorAll() 取得的是 NodeList ，並非 Array。所以若需使用 indexOf()，需先透過 Array.from 轉換為 Array。


### 實作
* [實作-JS](https://mike2014mike.github.io/js30/13 - Slide in on Scroll/index-mike.html)



### 參考
* [Javascript 30 #6 捲軸動畫與事件效能處理](https://www.youtube.com/watch?v=PnoZU60qvho)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)
