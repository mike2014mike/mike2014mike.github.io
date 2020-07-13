---
layout:     post
title:      EJ2 Animation
date:       2020-07-13 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - EJ2
 - Animation
---


### 碎碎念
不錯用的動畫套件，雖然有點肥
用法也很直覺

```html
<div id="element1">FadeIn</div>
```

```js
var animation = new ej.base.Animation({ duration: 3000 });
animation.animate('#element1', { name: 'FadeIn' });
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mikechen2017" data-slug-hash="XWXBpqj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="EJ2 Animation">
  <span>See the Pen <a href="https://codepen.io/mikechen2017/pen/XWXBpqj">
  EJ2 Animation</a> by Mike Chen (<a href="https://codepen.io/mikechen2017">@mikechen2017</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[EJ2 Animation](https://ej2.syncfusion.com/javascript/documentation/api/base/animation/)