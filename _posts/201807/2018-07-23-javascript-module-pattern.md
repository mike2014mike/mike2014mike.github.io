---
layout:     post
title:      JavaScript模組化
date:       2018-07-23 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - module
---





## Code

```javascript
<script>
$('#btn1').click(function () {
    module1.m1();
    //console.log(module1._count);//物件方法才能讀取
});
$('#btn2').click(function () {
    module1.m2();
});

$('#btn3').click(function () {
    module1.m3();
});

//1.物件方法
//var module1 = new Object({
//    _count : 0,
//    m1 : function () {
//        console.log('m1');
//    },
//    m2 : function () {
//        console.log('m2');
//    }
//});

//2.立即執行函數
var module1 = (function () {
    var _count = 0;
    var m1 = function () {
        _count += 1;
        console.log('m1');
        $('#test').append('親，你點到俺 ' + _count + ' 次了<br>');
    };
    var m2 = function () {
        console.log('m2');
        $('#test').append('俺知道你點了 m1 ' + _count + '次了<br>');
    };

    return {
        m1: m1,
        m2: m2
    };
})();

//3.擴充(Augmentation)：增加方法到同一個函數
var module1 = (function (mod) {
    mod.m3 = function () {
        console.log('m3');
        $('#test').append('你點了 m3<br>')
    };

    return mod;
})(module1);
</script>
```


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='JavaScript模組化' src='//codepen.io/mikechen2017/embed/qyroyJ/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/qyroyJ/'>JavaScript模組化</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


[參考資料](http://easonlin.logdown.com/posts/74228-javascript-module-pattern-in-depth)