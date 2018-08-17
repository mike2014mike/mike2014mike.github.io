---
layout:     post
title:      Bootstrap 3 爬 Code
date:       2018-08-17 09:37:19
author:     Mike Chen
summary:    
categories: css
thumbnail:  css3
tags:
 - css
 - Bootstrap 4
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

* img 預設 display: inline-block;，如需置中使用 text-align: center;；但 .thumbnail 和 .carousel-inner(幻燈片) 裡面的 img 被設為 display: block;，如果需置中使用 margin: auto;
![.thumbnail](https://i.imgur.com/XRITUcK.png)

* .img-circle 用於正方形的物件(img, div)變圓形，若長方形物件會變橢圓形。class 名稱會誤導人，不僅用於圖片。
![.img-circle](https://i.imgur.com/WxnSrzx.png)

* .sr-only 螢幕閱讀器，無障礙網站使用。

```
全名為 Screen Reader Only，意為：（僅供）螢幕閱讀器，這個 class 主要用於增強 accessbility（可訪問性）。

有時候 UI 上會出現一些僅供視覺識別的元素，比如說「漢堡包功能表按鈕」，只有視力正常的人才能清楚辨識這些元素的作用。而殘障人士，比如弱勢或盲人是不可能知道這些視覺識別元素是什麼的。他們上網使用的是螢幕閱讀器，也就是 screen reader（sr），螢幕閱讀器需要找到能辨識的文本說明然後「讀」出來給用戶聽。問題是圖形元素怎麼可能「讀出來」呢？因此我們還要寫上這些元素的文本說明，但是又不需要展示給普通使用者看到，於是加上 sr-only 的意義就在於能保證螢幕閱讀器正確讀取且不會影響 UI 的視覺呈現。

Win10 用戶可使用 Ctrl + Win + Enter 可開啟網頁朗讀功能。
```

* .lead 主要是字體變大變粗。有人說拿來做為前言段落使用，但想強調任何段落的重要性，應都可使用。
![.lead](https://i.imgur.com/zuTZGzB.png)

* .mark 螢光筆。
![.mark](https://i.imgur.com/kiwl9Ym.png)





### 參考
* [Bootstrap3 CSS原始碼導讀](https://www.youtube.com/watch?v=kxnGnewfpHA)
* [CSS3 鲜为人知的属性-webkit-tap-highlight-color的理解](https://www.cnblogs.com/libin-1/p/5903350.html)
* [螢幕閱讀器 - Wiki](https://zh.wikipedia.org/wiki/%E8%9E%A2%E5%B9%95%E9%96%B1%E8%AE%80%E5%99%A8)