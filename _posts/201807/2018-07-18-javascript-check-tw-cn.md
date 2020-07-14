---
layout:     post
title:      JavaScript 判斷瀏覽器是簡體或繁體
date:       2018-07-18 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - javascript
---

使用JavaScript 判斷瀏覽器是簡體或繁體

```javascript
check();
function check() {
    var language = window.navigator.systemLanguage || window.navigator.language;
    language = language.toLowerCase();
    console.log(language);
    switch (language) {
        case "zh-tw":
            document.write('這是繁體瀏覽器');
            //alert("繁體(big5)");
            break;
        case "zh-cn":
            document.write('这是简体浏览器');
            //alert("简体(gb2312)");

            break;
    }
}
```

下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='判斷瀏覽器簡繁體' src='//codepen.io/mikechen2017/embed/wxWxLx/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/wxWxLx/'>判斷瀏覽器簡繁體</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>