---
layout:     post
title:      用 Bootstrap 做出毛玻璃效果
date:       2018-08-14 09:37:19
author:     Mike Chen
summary:    
categories: css
thumbnail:  css3
tags:
 - css
 - Bootstrap
---

### 筆記

* Bootstrap Flex 水平垂直置中

```html
<body class="d-flex justify-content-center align-items-center">
```

* 偽元素設 background-attachment: fixed; 根據 body 位置放圖
* 偽元素設 filter: blur(10px); 毛玻璃效果

### 實際玩玩
<div class="iframe-rwd">
    <iframe scrolling='no' title='Frosted glass 毛玻璃特效' src='//codepen.io/mikechen2017/embed/JBzOYZ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/JBzOYZ/'>Frosted glass 毛玻璃特效</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### 參考
* [直播切版 - 純 CSS 特效分享 (毛玻璃、幾何線框、Bootstrap 自訂變數)](https://www.youtube.com/watch?v=SmFxwLRSulM&t=8s)
