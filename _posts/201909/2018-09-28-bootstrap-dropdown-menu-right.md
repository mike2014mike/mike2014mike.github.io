---
layout:     post
title:      Bootstrap 下拉選單靠右切齊
date:       2018-09-29 10:37:19
author:     Mike Chen
summary:    
categories: css
thumbnail:  css3
tags:
 - css
 - Bootstrap
---

### 緣由

* 下拉選單最右邊的按鈕如果剛好切齊螢幕，其選單會超出螢幕，視覺效果不是很好。故找了一下方法，讓它可以靠右切齊。

* 關鍵就是加上 `dropdown-menu-right`

### Sample

```html
<!DOCTYPE html>
<html>

<head>
  <title>Bootstrap dropdown-menu</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 新 Bootstrap4 核心 CSS 文件 -->
  <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css">

  <!-- jQuery文件。務必在bootstrap.min.js 之前引入 -->
  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>

  <!-- popper.min.js 用於 對話框、提示、下拉選單 -->
  <script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>

  <!-- 最新的 Bootstrap4 核心 JavaScript 文件 -->
  <script src="https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
</head>

<body>

  <div class="container-fluid">
    <!-- BS4 的靠左由 pull-left 改為 float-left -->
    <div class="btn-group float-left">
      <button type="button" class="btn btn-primary dropdown-toggle pull-right" data-toggle="dropdown">
        Left Button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">xxxxxxxxxxxxxxxxxxxxx</a>
        <a class="dropdown-item" href="#">xxxxxxxxxxxxxxxxxxxxx</a>
      </div>
    </div>

    <!-- BS4 的靠右由 pull-right 改為 float-right -->
    <div class="btn-group float-right">
      <button type="button" class="btn btn-primary dropdown-toggle pull-right" data-toggle="dropdown">
        Right Button
      </button>
      <!-- 重點在這 -->
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#">xxxxxxxxxxxxxxxxxxxxx</a>
        <a class="dropdown-item" href="#">xxxxxxxxxxxxxxxxxxxxx</a>
      </div>
    </div>
  </div>

</body>

</html>
```


### CodePen

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Bootstrap 下拉選單靠右切齊' src='//codepen.io/mikechen2017/embed/LgYyBb/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/LgYyBb/'>Bootstrap 下拉選單靠右切齊</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

### 參考

* [bootstrap dropdown bubble align right (not push-right)](https://stackoverflow.com/questions/18892351/bootstrap-dropdown-bubble-align-right-not-push-right)