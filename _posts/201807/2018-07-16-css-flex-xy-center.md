---
layout:     post
title:      CSS :flex 水平垂直置中
date:       2018-07-16 10:37:19
author:     Mike Chen
summary:    flex水平垂直置中
categories: css
thumbnail:  css3
tags:
 - CodePen
 - css
 - flex
 - center
---

只要外面div的 `display設flex` ，裡面div的 `margin設auto` ，就會水平垂直置中。<br>
我們直接來看css(下方語法是sass)

```sass
.container
  display: flex
  width: 100%
  height: 500px
  background-color: #222
  >.box
    background-color: #afa
    // max-width: 100%
    // max-height: 100%
    width: 100px
    height: 100px
    margin: auto
```

下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='flex水平垂直置中' src='//codepen.io/mikechen2017/embed/LBPZeK/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/LBPZeK/'>flex水平垂直置中</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

