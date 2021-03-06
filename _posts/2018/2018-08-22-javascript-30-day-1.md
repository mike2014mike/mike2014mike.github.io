---
layout:     post
title:      JavaScript 30 - Day 1.JavaScript Drum Kit
date:       2018-08-22 10:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  code
tags:
 - JavaScript
---

### #1. JS Drum Kit

```js
[筆記]

# Keyboard Event
* 建議採用 keyCode
* 注意 keypress 的 keyCode 會跟 keyup/ keydown 不同，所以一般不會用 keypress。
* 單一操作的時候建議使用 keyup，因為 keyup 只會執行一次；反之，連續操作使用 keydown，按著不放會連續觸發 [如：遊戲內的向前走]。

# Dataset
* 傳統使用 id 或 className 選取，可改用 data-key 的方式選取。

# Transition End
* 動畫結束後 remove class
* 用 propertyName 篩選

# Class
* classList.add(), classList.remove(), classList.contains(), classList.toggle()

# Audio
* preload()
* prefetch()
* play()

# 立即函式 IIFE

(function(){

    //這邊寫 code

})()

# document.querySelectorAll() 出來的是類陣列，無法使用陣列所有功能，僅能使用 forEach。

```

* [實作](https://mike2014mike.github.io/js30/01 - JavaScript Drum Kit/index-mike.html)



### 參考
* [Javascript 30 #1](https://www.youtube.com/watch?v=KsvePUfzQf0)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)
* [keyCode 查詢](http://keycode.info/)