---
layout:     post
title:      html2canvas
date:       2018-07-23 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - html2canvas
---



## CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
```



## Code

```javascript
<script>
$(":button").click(function () {
    html2canvas($("#wrap")[0], {
        onrendered: function (canvas) {
            var $div = $("#output");
            $div.empty();
            $("<img />", { src: canvas.toDataURL("image/png") }).appendTo($div);
            //$("<img />", { src: img }).appendTo($div);
        }
    });
});
</script>
```


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='html2canvas' src='//codepen.io/mikechen2017/embed/LBWzoe/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/LBWzoe/'>html2canvas</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>
