---
layout:     post
title:      用 slick 來做輪播效果吧！
date:       2018-08-03 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - Slick
---

### CDN

```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
				
```

### Code

```html
<ul class="container">
  <li><img src="https://picsum.photos/400/200?image=1" alt=""/></li>
  <li><img src="https://picsum.photos/400/200?image=2" alt=""/></li>
  <li><img src="https://picsum.photos/400/200?image=3" alt=""/></li>
</ul>
```

```css
body {
  background-color: #ccc;
}

.container {
  width: 500px;
  margin: 0 auto;
}

img {
  margin: 0 auto;
}

```

```javascript
$(document).ready(function(){
  $('.container').slick({
    dots: true,
    centerMode: true,
    arrows: true,
    slidesToShow: 1  
  });  
});
```

### 範例
* 官網上有很多範例喔，而且官網也是用Github Page做的唷！

<div class="iframe-rwd">
    <iframe scrolling='no' title='slick sample' src='//codepen.io/mikechen2017/embed/MBGNQB/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/MBGNQB/'>slick sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### 參考
* [slick官網](http://kenwheeler.github.io/slick/)上有很多範例喔，而且官網也是用Github Page做的唷！
* [[ Alex 宅幹嘛 ] 👨‍💻你的 jQuery 我來 VUE 第一集：簡易輪播篇](https://www.youtube.com/watch?v=2iclZL9SUqA)