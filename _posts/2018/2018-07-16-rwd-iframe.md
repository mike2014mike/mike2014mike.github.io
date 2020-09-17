---
layout:     post
title:      RWD - 嵌入iframe (Google Map, YouTube)
date:       2018-07-16 10:37:19
author:     Mike Chen
summary:    CodePen test
categories: Work
thumbnail:  css3
tags:
 - CSS
---

Google Map, YouTube提供了以iframe的方式讓用戶嵌入自己的網頁中。<br>
但要如何讓iframe可以做到RWD呢？<br>
我們直接來看css(下方語法是sass)

```sass
.container
  width: 100%
  height: 0
  background-color: #ccc
  padding-bottom: 56.25%  
  //YouTube原本的w:560, h:315
  //若想跟YouTube長寬比完全一樣
  //padding-bottom得設置如下
  //(315/560)*100%=56.25%
  position: relative
  >iframe
    position: absolute
    width: 100%
    height: 100%
```
也就是在iframe外面加一個div，並設定`padding-bottom: 56.25%`，可以讓iframe縮放後維持與原本相同的長寬比。 


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='RWD - Google Map, YouTube embed' src='//codepen.io/mikechen2017/embed/mjJgMy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/mjJgMy/'>RWD - Google Map, YouTube embed</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

