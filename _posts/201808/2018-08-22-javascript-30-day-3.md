---
layout:     post
title:      JavaScript 30 - Day 3.CSS Variables
date:       2018-08-22 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - JavaScript
 - CSS
---


### #3.CSS Variables

```js
[筆記]

# Input
* input 的 type 如果設定 color/ date，會使用系統預設 顏色/時間 選擇器

# Dataset
* data-sizing: 單位，在純 JS 中必須給單位，而不像 jQuery 給數字即可。

# Input Event
* change
* mousemove

# CSS Style (Variable)
* document.querySelector('body').style['--base'] = 'red';
* 上面寫法會無效，中括號內只能使用預設屬性。
* 如果要用 JS 去修改 CSS3 的 variables 需使用 setProperty
* document.querySelector('body').style.setProperty('--base', 'red');

# documentElement
* document.documentElement 等同於 document.querySelector('html')

```

* [實作](https://mike2014mike.github.io/js30/03 - CSS Variables/index-mike.html)



### 參考
* [Javascript 30 #2](https://youtu.be/CWxU_q5b33U?t=3726)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)