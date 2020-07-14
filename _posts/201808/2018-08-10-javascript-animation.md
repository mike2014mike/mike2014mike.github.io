---
layout:     post
title:      Javascript 手刻動畫
date:       2018-08-10 09:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - motion
---

### requestAnimationFrame

```js
let time = 0;

function render(t) {
    console.log(t - time); //間隔約 16~17 毫秒，約 60 FPS，根據硬體
    time = t;
    // setTimeout(render, 1000 / 60); //如果要跑多次，這邊也要放一個 setTimeout
    requestAnimationFrame(render);
}

// setInterval(render, 1000 / 60); //60 FPS
// setTimeout(render, 1000 / 60); //如果 setTimeout 只放這裡，只會跑一次

requestAnimationFrame(render);
```


### X = X0 + V (線性等速運動)

<div class="iframe-rwd">
    <iframe scrolling='no' title='X = X0 + V (線性)' src='//codepen.io/mikechen2017/embed/gjZGmN/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/gjZGmN/'>X = X0 + V (線性)</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### V = V0 + AT (加速度)

* `canvas.width = canvas.width;` 修改canvas寬度，也會觸發clear。

<div class="iframe-rwd">
    <iframe scrolling='no' title='V = V0 + AT (加速度)' src='//codepen.io/mikechen2017/embed/oMJogr/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/oMJogr/'>V = V0 + AT (加速度)</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### XY都動

<div class="iframe-rwd">
    <iframe scrolling='no' title='XY都動' src='//codepen.io/mikechen2017/embed/rroYGo/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/rroYGo/'>XY都動</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### 重力、反作用力、摩擦力

<div class="iframe-rwd">
    <iframe scrolling='no' title='重力' src='//codepen.io/mikechen2017/embed/JBwOZj/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/JBwOZj/'>重力</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### 布朗運動 (隨機運動)

<div class="iframe-rwd">
    <iframe scrolling='no' title='布朗運動 (隨機運動)' src='//codepen.io/mikechen2017/embed/NBeXNO/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/NBeXNO/'>布朗運動 (隨機運動)</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### 發射

<div class="iframe-rwd">
    <iframe scrolling='no' title='發射' src='//codepen.io/mikechen2017/embed/jpXYYj/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/jpXYYj/'>發射</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### 煙火

<div class="iframe-rwd">
    <iframe scrolling='no' title='煙火' src='//codepen.io/mikechen2017/embed/zLyWJV/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/zLyWJV/'>煙火</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### 發射煙火

<div class="iframe-rwd">
    <iframe height='265' scrolling='no' title='發射煙火' src='//codepen.io/mikechen2017/embed/OwrEyY/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/OwrEyY/'>發射煙火</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### 參考
* [Javascript 座標計算與物理運動公式](https://www.youtube.com/watch?v=XLegPUzpLrU)