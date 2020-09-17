---
layout:     post
title:      JavaScript 30 - Day 27.滑鼠拖曳與座標計算 v1
date:       2018-09-03 10:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  code
tags:
 - JavaScript
---

### 步驟
1. 會用到四個事件

```
拖曳的開始 > 按下(mousedown) 加上 .active；
拖曳中 > 移動(mousemove)；
拖曳中 > 離開範圍(mouseleave) 移除 .active；
拖曳的結束 > 放開(mouseup) 移除 .active


手機平板事件對照
mousedown > touchstart
mousemove > touchmove
mouseup   > touchend

```



### 筆記

* jQuery 的 hover 使用的事件是 mouseenter 和 mouseleave。

* 滑鼠座標
![滑鼠座標](https://i.imgur.com/Aa2GmMj.png)

* `mousemove` 監聽太頻繁，沒有按的時候，`startX` 不存在，distance 會得到 NaN，所以需要擋一下。

* 將 `mousemove` 作為一個開關的概念， `mousedown` 的時候才監聽 mousemove，`mouseleave` 或 `mouseup` 的時候關閉監聽 mousemove。

* 或者一直持續監聽 mousemove ，但利用 `flag` 判斷。而判斷也可以使用 `正向判斷` 或 `反向判斷` 。

* 起始點如果沒有重置，移動速度會越來越快，因為移動距離會越來越長。





### 實作
* [實作-JS](https://mike2014mike.github.io/js30/27 - Click and Drag/index-mike.html)



### 參考
* [Javascript 30 #7 滑鼠拖曳與座標計算](https://www.youtube.com/watch?v=atROpB2VcAE)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)