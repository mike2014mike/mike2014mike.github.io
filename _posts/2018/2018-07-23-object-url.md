---
layout:     post
title:      以 JavaScript 產生可下載檔案-Object URL
date:       2018-07-23 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
---





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
    <iframe scrolling='no' title='HTML5 Blob URL應用-產生可下載檔案' src='//codepen.io/mikechen2017/embed/WKpXVp/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/WKpXVp/'>HTML5 Blob URL應用-產生可下載檔案</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>
