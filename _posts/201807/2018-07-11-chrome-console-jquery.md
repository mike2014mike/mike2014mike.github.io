---
layout:     post
title:      Chrome在console載入jQuery的方法
date:       2018-07-11 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  chrome
tags:
 - Chrome
 - console
 - jQuery
---

有時候想測試一下某段javascript語法，不想寫完整的html，所以會直接開Chrome的console來測試。<br>
但如果遇到需要用到jQuery或其他套件的時候該如何載入呢？<br>

只要輸入下方語法，即可載入：

```
var jq = document.createElement('script');
jq.src = "http://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
```