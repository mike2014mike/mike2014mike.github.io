---
layout:     post
title:      用Velocity.js來玩動畫吧！
date:       2018-08-01 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
  
---

### CDN

```html
<!-- v1.5.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.1/velocity.min.js"></script>
<!-- v2.0.5 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.5/velocity.min.js"></script>
```

### 參考
* [Velocity.js (v1) 動畫引擎入門導讀](https://www.youtube.com/watch?v=u6Y8nn3GUHY)
* [Velocity.js 官網](http://velocityjs.org/)

### 筆記
* 用過 jQuery 的 `$.animate()`，將會很容易上手。
* jQuery 的 animate 不支援 translateX 與 backgroundColor 屬性，但 Velocity.js 可以！
* 可支援到 IE8 和 Android 2.3。
* [transit](http://ricostacruz.com/jquery.transit/) 這個動畫庫效能太差，可直接跳過，免學！
* v1 與 v2 在 transform 的使用方式有些差異， v1 可以直接下 `translateX` ， 但 v2 要 `transform: translateX` 。
* velocity 內 `backgroundColor 只能打色碼` ，如果打顏色文字會無效。
* v2 還在 Beta， issue 不少，先暫時別用。
* [TimelineMax](https://greensock.com/timelinemax) 搭配 [tweenMax](https://greensock.com/tweenmax) 用。
* 引入了 jQuery ， Velocity 前面需加上$.，即 `$.Velocity` ，或者加入下面這段Code

```javascript
if (window.jQuery) { var Velocity = $.Velocity; } 
```

* 可再玩玩 [anime.js](http://animejs.com/)

### CodePen - Velocity.js(v1) - Basic
<div class="iframe-rwd">
    <iframe scrolling='no' title='Velocity.js(v1) - Basic' src='//codepen.io/mikechen2017/embed/VByeXy/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/VByeXy/'>Velocity.js</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### CodePen - Velocity.js(v1) - Rotate
<div class="iframe-rwd">
    <iframe scrolling='no' title='Velocity.js(v1) - rotate' src='//codepen.io/mikechen2017/embed/xJpNqp/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/xJpNqp/'>Velocity.js - rotate</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### CodePen - Velocity.js(v1) - Scroll
<div class="iframe-rwd">
    <iframe scrolling='no' title='Velocity.js(v1) - scroll' src='//codepen.io/mikechen2017/embed/MBrdLv/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/MBrdLv/'>Velocity.js(v1) - scroll</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

