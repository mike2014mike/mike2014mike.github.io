---
layout:     post
title:      JavaScript 30 - Day 16.滑鼠拖曳與座標計算 v2
date:       2018-09-03 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
---

### 筆記

* 滑鼠位置等同光源，陰影就在相反位置。
![滑鼠光源](https://i.imgur.com/lE7tbbW.png)

* 注意 offsetX 和 offsetY 會因為 e.target 的不同而受到影響。

* 滑鼠點擊 hero 的範圍，原點座標在 hero 的左上角；點到 h1 的範圍，原點座標在 h1 這的 DOM 的左上角。所以還要加上兩個原點座標的距離。
![offset](https://i.imgur.com/5kJtIHU.png)


### 實作
* [實作-JS](https://mike2014mike.github.io/js30/16 - Mouse Move Shadow/index-mike.html)



### 參考
* [Javascript 30 #7 滑鼠拖曳與座標計算](https://youtu.be/atROpB2VcAE?t=4068)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)