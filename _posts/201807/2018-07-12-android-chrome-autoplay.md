---
layout:     post
title:      Android Chrome 瀏覽器允許影片 autoplay
date:       2018-07-12 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  android
tags:
 - Android
---

手機上的Chrome瀏覽器，可能是考慮到並非所有人都是上網吃到飽，所以預設不會自動播放網頁中的影片。
但若是有自動播放的需求，該如何設定呢？
請參考以下方式：

* 打開手機中的Chrome瀏覽器
* 網址列輸入 `chrome://flags` ，並前往
* 找到  `gesture requirement for media playback` ，意思為「在播放媒體時需使用手勢操作」
* 將其設定為 `停用` ，即可自動播放。


也可以直接在網址列輸入
```
chrome://flags/#disable-gesture-requirement-for-media-playback
```