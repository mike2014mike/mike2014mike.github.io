---
layout:     post
title:      JavaScript 修改 CSS
date:       2018-07-18 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - CSS
---

JavaScript 可透過下面方式修改 CSS

```javascript
function change(eve) {
    var css = '';
    switch (eve) {
        case 'hover':
            css = 'p:hover { color: red; }';
            break;
        default:
            css = 'p:hover { color: black; }';
            break;
    }
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

```


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='js修改css' src='//codepen.io/mikechen2017/embed/bjeKeV/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/bjeKeV/'>js修改css</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>