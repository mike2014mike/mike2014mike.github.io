---
layout:     post
title:      學習 CSS 版面配置
date:       2018-08-07 09:37:19
author:     Mike Chen
summary:    
categories: css
thumbnail:  css
tags:
 - css
---

* 大神 Will 保哥所翻譯的文章 [學習 CSS 版面配置](http://zh-tw.learnlayout.com/)
* 全部只有19頁，幫助紮好 CSS 的馬步。
* 保哥 [Blog](https://blog.miniasp.com/) 、 [Facebook](https://www.facebook.com/will.fans)
* 下面紀錄一些摘要筆記。


## 筆記

### display
* block 為「區塊元素」，inline 為「行內元素」。
* `display: none;` 不會保留元素原本該顯示的空間。
* `visibility: hidden;` 會保留原本內容應該顯示的空間，只是看不到內容而已。
* [display屬性表](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
* 用 li 做水平選單，常會設 `display: inline;`。

<hr>

### margin: auto;
* div 設 `margin: 0 auto;` 可水平置中。

<hr>

### max-width
* 使用 `max-width` 替代 width 可以更完美的處理當瀏覽器視窗小於元素寬度的情況。

<hr>

### Box Model（區塊模型）
* 雖然我們設定了元素的寬度，實際顯示的元素卻能夠超出該設定：因為 margin 和 padding 會撐開元素。
* 古人需要自己用數學算元素實際寬度。

<hr>

### box-sizing
* 設定 `box-sizing: border-box;` ，這個元素的內距和邊框將不會增加元素本身的寬度。
* 該屬性從 IE8+ 之後就開始支援，所以如果還在維護 IE8以前的案子，還是得算數學。

```css
.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```


<hr>

### position
* `position: static;` 是預設值。
* `position: relative;` 的元素內設定 top 、 right 、 bottom 和 left 屬性，會使其元素「相對地」調整其原本該出現的所在位置。
* `position: fixed;` 的元素會相對於瀏覽器視窗來定位，這意味著即便頁面捲動，它還是會固定在相同的位置。
* `position: absolute;`，它會相對於父元素進行絕對定位，通常父元素會設 `position: relative;`。

<div class="iframe-rwd">
    <iframe scrolling='no' title='position sample' src='//codepen.io/mikechen2017/embed/VBGrdy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/VBGrdy/'>position sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


<hr>

### float
* float 可用於實現文繞圖

<div class="iframe-rwd">
    <iframe scrolling='no' title='float 可用於實現文繞圖' src='//codepen.io/mikechen2017/embed/bjxLxa/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/bjxLxa/'>float 可用於實現文繞圖</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


<hr>

### clear
* 想控制 float 元素的行為，了解 [clear](http://zh-tw.learnlayout.com/clear.html) 屬性是非常重要的。
* `clear: left;` 用來宣告清空所有標示 `float: left;` 的元素，也可以用 `clear: right;` 或 `clear: both;` 來清空 `float: right;` 或同時清除 `float: left` 與 `float: right` 的浮動元素。

<hr>

### clearfix 密技
* 使用 float 的時候經常會遇到子元素(img)超出父元素容器(div)外面的問題。
* 可在父元素(div)加上下面的class即可。

```css
.clearfix {
  overflow: auto;
  zoom: 1; //for IE6
}
```


<hr>

### float 版面配置範例
* 用 float 改寫前面 position sample
* container 再 加上 clearfix 密技上去

<div class="iframe-rwd">
    <iframe scrolling='no' title='float layout sample' src='//codepen.io/mikechen2017/embed/XBPEdJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/XBPEdJ/'>float layout sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

<hr>

### 百分比寬度
* 前面 position 或 float 的版面範例，若元素寬度改以百分比排版，當視窗寬度很窄時 nav 的內容就會被擠壓得非常難看。

<hr>

### 媒體查詢（media queries）
* 「響應式設計（Responsive Design）」是一種讓網站針對不同的瀏覽器和上網裝置「響應」不同顯示效果的策略，讓網站不管在任何情況下都能完美呈現！
* 「媒體查詢」是完成「響應式設計」最強大的工具。讓我們使用百分比寬度來做版面配置，然後當瀏覽器寬度小到無法容納側邊欄中的選單時，把版面配置顯示成一欄
* 還可以使用 [meta viewport](https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/) 讓你的版面配置在行動裝置的瀏覽器上呈現得更完美。

```css
@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;   
  }
}
@media screen and (max-width:599px) {
  li {
    display: inline;
    <!-- 水平排列 -->
  }
  li:not(:last-child)::after{
    content: " |";
    <!-- 每個選項中間加入分隔符號 " | " -->
  }
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='RWD layout sample' src='//codepen.io/mikechen2017/embed/zLJaKM/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/zLJaKM/'>RWD layout sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


<hr>

### display: inline-block
* 使用 `display: inline-block` 的元素就像 `display: inline` 的元素一樣，但你可以設定 `width` 與 `height` 屬性。
* 之前 `float: left;` 的漂浮問題，需要加上 `clearfix密技` 解決，但使用 `display: inline-block` 就不需要開密技囉！
* 要使用 inline-block 你得額外做些事來支援 [IE6 和 IE7](http://blog.mozilla.org/webdev/2009/02/20/cross-browser-inline-block/)。
* 有些時候人們談到 inline-block 會觸發所謂 `hasLayout` 的東西，你只需要知道那是用來支持舊版 IE 瀏覽器用的。

<hr>

### column
* 新的 CSS 屬性可以幫你輕鬆的實現多欄文字的版面配置。
* CSS3 Multiple Columns 是很新的標準，所以你需要使用前綴，並且它不支援 [IE9 以下和 Opera Mini 版本](https://caniuse.com/#search=column)。還有許多和 cloumn-* 相關的屬性，[點擊這裡瞭解更多](http://www.quirksmode.org/css/multicolumn.html)。

```css
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='three-column' src='//codepen.io/mikechen2017/embed/GBXBpO/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/GBXBpO/'>three-column</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


<hr>

### flexbox
* 新的 flexbox 技術重新定義了使用 CSS 版面配置的方法。遺憾的是 flexbox規範最近的變動過多，導致不同瀏覽器之間對它的實作也有所差異。
* flexbox 可以輕易做出版面水平垂直置中的方法！

```css
.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}
```