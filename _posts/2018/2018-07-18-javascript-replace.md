---
layout:     post
title:      JavaScript replace() 字串取代
date:       2018-07-18 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - RegExp
---

JavaScript 裡有一個功能是 `.replace()` ，可以用來替換文字。<br>

之前使用的時候踩到一個小地雷，寫起來以後自己參考。<br>

一開始的想法是先來個一小段：

```javascript
var s = "(abc)";
document.write(s.replace("(abc)", "TEST"));
```

然後結果會是 `TEST` 沒有問題。<br>

但是如果寫成

```javascript
var s = "(abcs) (abcs)";
document.write(s.replace("(abcs)", "TESTS"));
```

結果卻是 `TESTS (abcs)`<br>

找了一下，原因是前面的參數可以是 `字串` 或 `RegExp` 。要取代多次，得用 `RegExp`<br>

所以重寫成

```javascript
var s = "(abcs) (abcs)";
document.write(s.replace(/(abcs)/ig, "TESTS"));
```

結果變成 `(TESTS) (TESTS)`<br>

檢查了一下發現是沒對 () 做 `escape` 再改！

```javascript
var s = "(abcs) (abcs)";
document.write(s.replace(/\(abcs\)/ig, "TESTS"));
```

結果總算是 `TESTS TESTS` 了。