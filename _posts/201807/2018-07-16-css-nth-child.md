---
layout:     post
title:      CSS :nth-child(an+b)的用法
date:       2018-07-16 10:37:19
author:     Mike Chen
summary:    nth-child(an+b)的用法
categories: css
thumbnail:  css3
tags:
 - CodePen
 - css
 - nth-child(an+b)
---

:nth-child(an+b)代表 `「每a個的第b個」` 。<br>
我們直接來看css(下方語法是sass)

```sass
li
  display: inline-block
  padding: 20px
  margin: 10px
  background-color: #ccc
  //an+b，每a個的第b個
  &:nth-child(3n+1)
    background-color: #0fa
  &:hover
    background-color: #0ff
    cursor: pointer
```

下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='nth-child(an+b)' src='//codepen.io/mikechen2017/embed/ajOvjq/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/ajOvjq/'>nth-child(an+b)</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

