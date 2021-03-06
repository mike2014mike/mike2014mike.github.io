---
layout:     post
title:      Bootstrap 3 爬 Code
date:       2018-08-20 09:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  css3
tags:
 - CSS
 - Bootstrap
---

看 Amos 大大的影片作筆記，下面的擷取內容是以 `Bootstrap-3.3.7` 為準。

* 官方載點：[bootstrap-3.3.7-dist.zip](https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip)

* 備用載點：[bootstrap-3.3.7-dist.zip](https://mike2014mike.github.io/sample/2018-08-17/bootstrap-3.3.7-dist.zip)

### CDN

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

### 筆記

* 1067 行以前大多是基本、字型、圖示設定，圖示寫法和 [Font-Awesome](https://fontawesome.com) 雷同。

* 全部都使用 border-box。
![border-box](https://i.imgur.com/8aVhlZk.png)

* 1080 行，html 設 font-size: 10px; 已知有問題。
![font-size](https://i.imgur.com/Vi6UNZv.png)

* -webkit-tap-highlight-color 這個屬性只用於 iOS (iPhone和iPad)。當你點擊一個連結或者通過 Javascript 定義的可點擊元素的時候，它就會出現一個半透明的灰色背景。可以設置 -webkit-tap-highlight-color 為任何顏色。想要禁用這個高亮，設置顏色的 alpha 值為 0 即可。

* img 預設 `display: inline-block;` ，如需置中使用 `text-align: center;` ；但 .thumbnail 和 .carousel-inner(幻燈片) 裡面的 img 被設為 display: block;，如果需置中使用 `margin: 0 auto;` 如果 `class="img-responsive"` 需置中也是使用 `margin: 0 auto;` 。
![.thumbnail](https://i.imgur.com/XRITUcK.png)

* `.img-circle` 用於正方形的物件(img, div)變圓形，若長方形物件會變橢圓形。class 名稱會誤導人，不僅用於圖片。
![.img-circle](https://i.imgur.com/WxnSrzx.png)

* .sr-only 螢幕閱讀器，無障礙網站使用。

```
全名為 Screen Reader Only，意為：（僅供）螢幕閱讀器，這個 class 主要用於增強 accessbility（可訪問性）。

有時候 UI 上會出現一些僅供視覺識別的元素，比如說「漢堡包功能表按鈕」，只有視力正常的人才能清楚辨識這些元素的作用。而殘障人士，比如弱勢或盲人是不可能知道這些視覺識別元素是什麼的。他們上網使用的是螢幕閱讀器，也就是 screen reader（sr），螢幕閱讀器需要找到能辨識的文本說明然後「讀」出來給用戶聽。問題是圖形元素怎麼可能「讀出來」呢？因此我們還要寫上這些元素的文本說明，但是又不需要展示給普通使用者看到，於是加上 sr-only 的意義就在於能保證螢幕閱讀器正確讀取且不會影響 UI 的視覺呈現。

Win10 用戶可使用 Ctrl + Win + Enter 可開啟網頁朗讀功能。
```

* `.lead` 主要是字體變大變粗。有人說拿來做為前言段落使用，但想強調任何段落的重要性，應都可使用。
![.lead](https://i.imgur.com/zuTZGzB.png)

* `.mark` 螢光筆。
![.mark](https://i.imgur.com/kiwl9Ym.png)

* `.list-unstyled` 和 `.list-inline` 是加在 ul 上的，都有做 `list-style: none;` 移除項目符號的功能，`.list-inline` 只是多了變成一行的功能。
![.list-unstyled 和 .list-inline](https://i.imgur.com/Nvpl8Ry.png)

* BS3 使用 `.list-line` 空白字元問題之解法
<div class="iframe-rwd">
    <iframe scrolling='no' title='BS3 使用 .list-line 空白字元問題' src='//codepen.io/mikechen2017/embed/GBbbaz/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/GBbbaz/'>BS3 使用 .list-line 空白字元問題</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* `abbr` 一個「秀下線、問號游標」的標籤，常用在縮寫註解或輔助說明上，搭配 title 使用。
![abbr](https://i.imgur.com/ztnhHlr.png)

* `kbd` 在提示輸入鍵盤那些按鈕的時候用，例如 <kbd>Ctrl + P</kbd>
![kbd](https://i.imgur.com/7NLgBaS.png)

* `.pre-scrollable` 會員條款，滾到底勾選我已閱讀 --->大家說謊區
![.pre-scrollable](https://i.imgur.com/Ea7mQxT.png)

* pull: 用 right >> position

* push: 用 left >> position

* offset: margin

* BS 每一個欄寬 `8.333333%` ，年薪百萬的關鍵。100萬 / 12月 = 8.333333萬，每月要賺8.333333萬。

* pull, push, offset 用法
<div class="iframe-rwd">
    <iframe scrolling='no' title='BS3  pull, push, offset 用法' src='//codepen.io/mikechen2017/embed/ejqOGx/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/ejqOGx/'>BS3  pull, push, offset 用法</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* 2514 行重複設定了 `border-box` ，先別急著罵它，我們可以思考一下為什麼。原因可以理解為 BS 提供了客製化模組下載，為避免被使用者遺漏勾選，所以這邊再設定一次。
![border-box again](https://i.imgur.com/Pp7qYvw.png)

* `.form-control` 寬度 100%，讓它可以換行。
![.form-control](https://i.imgur.com/bhJ4uvd.png)

* 下面範例可以試著把 .form-control 拿掉看看會怎樣。
<div class="iframe-rwd">
    <iframe scrolling='no' title='BS3  .form-control' src='//codepen.io/mikechen2017/embed/bjXNOB/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/bjXNOB/'>BS3  .form-control</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* `.radio-inline` 或 `.checkbox-inline` 有雷，第二行開始左邊會多出 `10px` ，無法對齊，只能手動覆寫掉。
![.radio-inline 或 .checkbox-inline](https://i.imgur.com/LbGJiC0.png)

* `.btn` 按鈕如果要置中，用 `text-align: center;` 即可，因為它是 inline-block。
![.btn](https://i.imgur.com/znW0IQU.png)

* `.fade` 淡入淡出效果
![.fade](https://i.imgur.com/A1f6Dh9.png)

* `.caret` 箭頭，三角形
![.caret](https://i.imgur.com/HRO4w8K.png)

* CSS 中的 空格、大於（>）、加號（+）和取代符號（~）的意思，請見下方參考文章。

```
空格：影響的是所有小孩的意思
大於(>)：影響的是直接的小孩(direct descendant/child)

EX: 
div p：下一層中，所有 p；
div>p：下一層中，直接接觸的所有 p。
```
![空格大於比較示意圖](https://i.imgur.com/BzqWnFY.png)

```
加號(+)：影響的是同一階層（siblings）的標籤
取代符號(~)：影響到同一階層的所有元素，也就是「毛毛蟲隔山打一群牛」

EX: 
div+p：同一層中，div 後面直接接觸的第一個 p；
div~p：同一層中，div 後面的所有 p。
```
![加號示意圖](https://i.imgur.com/ehw3qZD.png)
![取代符號示意圖](https://i.imgur.com/GSGiHFe.png)

* CSS 空格 > + ~ 使用方法範例
<div class="iframe-rwd">
    <iframe scrolling='no' title='CSS 空格 > + ~ 使用方法' src='//codepen.io/mikechen2017/embed/XBvXaV/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/XBvXaV/'>CSS 空格 &rt; + ~ 使用方法</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* BS 裡面所有的垂直距離都是 `margin-bottom`，所以如果要調整上下兩個項目的距離，直接改上方項目的 `margin-bottom` 即可。只有 `pagination` (分頁列) 是調整 `margin-top` 。

* `.breadcrumb` (麵包屑) 路徑列，麵包屑這個術語是源自於童話故事糖果屋。漢賽爾與葛麗特在前往森林的路上放置麵包屑，這樣即使迷路了，也能順著先前丟棄的麵包屑找到回家的方向。
![.breadcrumb (麵包屑)](https://i.imgur.com/qcqvCi5.png)

* 麵包屑要改斜線，就改 `.breadcrumb > li + li:before` 的 `content` 即可。

* `.pagination` (分頁列) 清單類型的要套用 class 都是套用在 li 上，例如下圖的 `.active` 和 `.disabled`。
![.pagination(分頁列)](https://i.imgur.com/uq69HXk.png)

* `:empty` 用法：如果內容「空的」就會被選到，空格也算有內容，不會被選到。
![.label:empty](https://i.imgur.com/fwBEvD1.png)
![.badge:empty](https://i.imgur.com/K3iEdYj.png)
<div class="iframe-rwd">
    <iframe scrolling='no' title='empty 用法' src='//codepen.io/mikechen2017/embed/qMWMRV/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/qMWMRV/'>empty 用法</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* `.jumbotron` 滿版，幾乎等於 .container。如果 .container 包 .jumbotron，會是一個帶圓角的滿版； 反之，如果是 .jumbotron 包 .container，則不會帶圓角。
![.jumbotron](https://i.imgur.com/qNngp69.png)

* `.media` 用在留言區好用，也有人用於最新消息。注意其 .media-body 的 display 是使用 table-cell。
![.media](https://i.imgur.com/DJ0DWGo.png)

* BS4 捨棄了一些在 BS3 的使用習慣，例如在 BS3 的 4700 行 `.breadcrumb` 下面接 `li 標籤`，但在 BS4 改使用 `.breadcrumb-item` 這個 class。
![使用習慣](https://i.imgur.com/VlVBNCA.png)

* `.list-group` 在 BS4 多了一個 `.list-group-item-action` 的 class。
![.list-group](https://i.imgur.com/QdIXz3X.png)

* `.panel` 可以搭配其他項目使用，例如搭配 `.list-group` 可以做出功能選單。但直接套入 `.list-group` 會很醜，因為有 padding。可以直接移除 `.panel-body`，以 `.list-group` 取代之即可。
<div class="iframe-rwd">
    <iframe scrolling='no' title='BS3 panel 搭配 list-group 做功能選單' src='//codepen.io/mikechen2017/embed/eLOPWr/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/eLOPWr/'>BS3 panel 搭配 list-group 做功能選單</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* `.embed-responsive` 嵌入 Google 地圖、 YouTube 影片、iframe等，使用 `.embed-responsive` 在父層；並視情況設定比例使用 `.embed-responsive-16by9` 或 `.embed-responsive-4by3` ；最後在子層使用 `.embed-responsive-item` 。
![.embed-responsive](https://i.imgur.com/xRp6UEQ.png)
<div class="iframe-rwd">
    <iframe src='//codepen.io/mikechen2017/embed/pOzxmZ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/pOzxmZ/'>BS3  embde-responsive</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* .well 有雷！如果想要換背景色彩，例如加上 `.bg-info` 會沒有作用，原因是 `.bg-info` 寫在前方，會被 .well 的背景色蓋掉。 .well 在 BS4 已經拿掉。
![.well](https://i.imgur.com/oR08Ejv.png)


### 參考
* [Bootstrap3 CSS原始碼導讀](https://www.youtube.com/watch?v=kxnGnewfpHA)
* [CSS3 鲜为人知的属性-webkit-tap-highlight-color的理解](https://www.cnblogs.com/libin-1/p/5903350.html)
* [螢幕閱讀器 - Wiki](https://zh.wikipedia.org/wiki/%E8%9E%A2%E5%B9%95%E9%96%B1%E8%AE%80%E5%99%A8)
* [網頁設計師不可沒有的10個隨身碟軟體](http://amos-lee.blogspot.com/2008/06/10.html)
* [CSS 選擇器中加號（+）和取代符號／波浪號（~）的意思](https://pjchender.blogspot.com/2015/07/css_25.html)
* [CSS選擇器中的大於（>）是什麼意思？](https://pjchender.blogspot.com/2015/07/css.html)