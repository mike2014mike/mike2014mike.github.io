---
layout:     post
title:      Bootstrap 4 爬 Code [Part2]
date:       2018-08-30 09:37:19
author:     Mike Chen
summary:    
categories: css
thumbnail:  css3
tags:
 - css
 - Bootstrap 4
---

看 Amos 大大的影片作筆記，下面的擷取內容是以 `Bootstrap-4.1.3` 為準。

* 官方載點：[bootstrap-4.1.3-dist.zip](https://github.com/twbs/bootstrap/releases/download/v4.1.3/bootstrap-4.1.3-dist.zip)

* 備用載點：[bootstrap-4.1.3-dist.zip](https://mike2014mike.github.io/sample/2018-08-17/bootstrap-4.1.3-dist.zip)

### 筆記

* 第 1826 行，在 iPhone 上拿掉 transition。
![transition](https://i.imgur.com/GIDzwAS.png)

* 第 1959 行，BS4 新增的 .form-row，縮小欄位間距，也就是把原本 .row 的地方直接換成 .form-row，相對好看許多。
![.form-row](https://i.imgur.com/xKMPO6H.png)

* 第 2216 行，.form-inline 將內容物橫向排列。
![.form-inline](https://i.imgur.com/zPeps4B.png)

* 第 2607 行，BS4 新增的 .btn-outline-* 背景透明、只有外框的按鈕。
![.btn-outline-*](https://i.imgur.com/UsaS58q.png)

* 第 2917 行，.btn-block 超大顆寬滿版按鈕。
![.btn-block](https://i.imgur.com/be4SXox.png)

* 第 2932 行，.fade 控制淡入淡出效果，一樣手機部分都會取消 transition。 .fade 要搭配 .show 一起使用才有效果，BS3 是搭配 .in 使用。
![.fade](https://i.imgur.com/ZbuVG2n.png)

* 第 2946 行，.collapse 收合、 .collapsing 收合過程。
![.collapse](https://i.imgur.com/67BzVWH.png)

* 第 2963 行，.dropup / .dropdown / .dropleft / .dropright 是 BS 自己做的下拉選單，並非 select。.dropdown-toggle 是下拉選單的小三角形。
![.dropdown](https://i.imgur.com/5fO7tXy.png)

* 第 3111 行，.dropdown-divider 分隔線，直接套用在 li 上。
![.dropdown-divider](https://i.imgur.com/qW3Hkfc.png)

* 第 3152 行，.dropdown-header 拿來做選單的分類標題，通常會設定為不可選，並在下方加上 divider(分隔線)。
![.dropdown-header](https://i.imgur.com/d5LbHZy.png)

* 第 3319 行，.custom-select 和 .custom-file。
![.custom-select 和 .custom-file](https://i.imgur.com/S3UwrDQ.png)

* 第 3447 行，.input-group-prepend 和 .input-group-append，名稱由 jQuery 而來，其實就是在表單 前面/後面 加東西的意思。
![.input-group-prepend 和 .input-group-append](https://i.imgur.com/yzPXw1t.png)

* :checked 用在手機選單很好用
![:checked](https://i.imgur.com/0rD2Ygp.png)

<div class="iframe-rwd">
    <iframe scrolling='no' title='custom checkbox' src='//codepen.io/mikechen2017/embed/ZMGrYQ/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/ZMGrYQ/'>custom checkbox</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

* Modal 的圓角設定可在 .modal-content 中找到。
![Modal 的圓角設定](https://i.imgur.com/vJBEIcK.png)

* .modal-backdrop 是在 Modal 跳出後動態加入的透明黑背景。
![.modal-backdrop](https://i.imgur.com/DAYvFjD.png)

* .tooltip 可能常會依客戶要求修改顏色，三角形的部分利用邊框線繪製，可在 .tooltip .arrow 這段修改。
![.tooltip](https://i.imgur.com/vp3jHXZ.png)

* .popover 跟 .tooltip 差不多，多了 title 可以寫。
![.popover](https://i.imgur.com/wMfq7Qe.png)

* .popover-header:empty ，empty 代表一個字、一個空格、連換行都不能有的情況。這招在 badge 也有使用到。
![:empty]()

* `.carousel` BS4 的幻燈片被很多人嫌棄，點點點 `.carousel-indicators li` 變成了一條線，但其實點選範圍不是只有一條線。

* `.carousel-caption` 是幻燈片文字部分。

* `.embed-responsive` iframe 等嵌入物件做 RWD 使用；而 `.embed-responsive-*by*` 是看嵌入物件的長寬比例。

```css
.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}
```







### 參考
* [Bootstrap4 CSS原始碼導讀之2](https://www.youtube.com/watch?v=xtSURzudQTQ)
* [Bootstrap4 CSS原始碼導讀之3](https://www.youtube.com/watch?v=zZgl9N1JuJI)
* [玩轉 CSS FLEX](https://youtu.be/_nCBQ6AIzDU)
* [圖解 Flexbox 進階屬性](https://cythilya.github.io/2017/04/06/flexbox-advance/)
* [Flex · Bootstrap 4 繁體中文手冊](https://bootstrap.hexschool.com/docs/4.0/utilities/flex/)