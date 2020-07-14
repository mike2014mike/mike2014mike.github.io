---
layout:     post
title:      pickadate.js - 日期/時間選擇器
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - javascript
 - pickadate.js
---

> pickadate.js是對行動裝置友善、響應式且輕量化的日期/時間選擇器

[GitHub](https://github.com/amsul/pickadate.js/)

## CDN

```html
<!-- jQuery v1.9.1 -->
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<!-- pickadate.js v3.5.6 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/classic.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/themes/classic.date.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/themes/classic.time.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/picker.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/picker.date.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/picker.time.js"></script>
```

## 選擇日期

```html
<input type="text" class="example" />
<script>
	$( ".example" ).pickadate();
</script>
```

![result](http://6666design.com/pic/it2018/day5_1.gif)

## 選擇時間

```html
<input type="text" class="example" />
<script>
	$( ".example" ).pickatime();
</script>
```

![result](http://6666design.com/pic/it2018/day5_2.gif)

[摘自](https://ithelp.ithome.com.tw/articles/10193058)