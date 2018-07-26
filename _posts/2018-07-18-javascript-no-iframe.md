---
layout:     post
title:      javascript 防止心血被人iframe借走
date:       2018-07-18 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - iframe
---

如果不想要網站內容被人使用iframe「借走」，以往的作法是使用javascript判斷網頁如果位在iframe 標籤裡，就直接跳轉到原始的網頁。

```javascript
<script>
if (top.location !== self.location) {
    top.location = self.location;
}

</script>
```

## 不可靠的原因：
當別人用如下類似代碼做iframe嵌入時，就可能躲過你的頁面的javascript代碼。

```html
<iframe src="你的頁面地址" name="tv" marginwidth="0" marginheight="0" scrolling="No" noResize frameborder="0" id="tv"  framespacing="0" width="580" height="550" VSPACE=-145 HSPACE=-385></iframe>

<script language="javascript"> 
var location="";
var navigate="";
frames[0].location.href="";
</script>
```


## 最可靠的方法：
為了徹底防止別人用iframe嵌入自己的網頁，如下方法是最可靠的。<br>
這裏賦值為空頁面,也可賦值為你的頁面的URL地址.

```javascript
<script language="javascript">
if(top != self){
    location.href = "about:blank";
}
</script>
```

## http-equiv="X-Frame-Options"

這是最近最方便的方法，只要在網頁的 `<head>` 裡加入底下這一行就ok了。

```html
<meta http-equiv="X-Frame-Options" content="sameorigin" />
```

上面這一行的設定是：只有 `同一個網域` 的頁面可以嵌入當前的頁面。
