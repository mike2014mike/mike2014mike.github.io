---
layout:     post
title:      ALERTIFY.js - 取代傳統alert對話框
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - JavaScript
 - ALERTIFY.js
 - alert
---

> ALERTIFY.js是為了美化通知訊息而生的套件

[GitHub](https://github.com/MohammadYounes/AlertifyJS)

## CDN

```html
<!-- ALERTIFY.js v0.3.11 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.core.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.default.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.min.js"></script>
```

## alert使用方式

```javascript
<script>
	alertify.alert( "Hello World" );
</script>
```

![result](http://6666design.com/pic/it2018/day4_1.gif)

## confirm使用方式

```javascript
<script>
	alertify.confirm( "Hello World", function (e) {
		if (e) {
			// ok
		} else {
			// cancel
		}
	});
</script>
```

![result](http://6666design.com/pic/it2018/day4_2.gif)

[摘自](https://ithelp.ithome.com.tw/articles/10193044)