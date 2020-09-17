---
layout:     post
title:      CSS 圖片失效提示
date:       2018-07-17 10:37:19
author:     Mike Chen
summary:    CSS圖片失效提示
categories: Work
thumbnail:  css3
tags:
 - CSS
---

利用before和after兩個偽元素，做圖片失效提示。<br>
我們直接來看css

{% highlight css %}
img:before {
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
  color: #f00;
}
img:after {
  content: "(url: " attr(src) ")";
  display: block;
  font-size: 12px;
  color: #00f;
}

  
{% endhighlight %}

下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='CSS圖片失效提示' src='//codepen.io/mikechen2017/embed/LBVoGV/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/LBVoGV/'>CSS圖片失效提示</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

