---
layout:     post
title:      JavaScript 30 - Day 27.滑鼠拖曳與座標計算
date:       2018-08-31 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
---

### 步驟
1. 會用到四個事件

```
拖曳的開始 > 按下(mousedown) 加上 .active；
拖曳中 > 移動(mousemove)；
拖曳中 > 離開範圍(mouseleave) 移除 .active；
拖曳的結束 > 放開(mouseup) 移除 .active
```



### 筆記

* jQuery 的 hover 使用的事件是 mouseenter 和 mouseleave。


看到 24:07


### 實作
* [實作-JS](https://mike2014mike.github.io/js30/27 - Click and Drag/index-mike.html)



### 參考
* [Javascript 30 #7 滑鼠拖曳與座標計算](https://www.youtube.com/watch?v=atROpB2VcAE)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)