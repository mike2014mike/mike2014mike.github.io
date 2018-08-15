---
layout:     post
title:      Bootstrap 4 爬 Code
date:       2018-08-15 09:37:19
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

* 備用載點：[bootstrap-4.1.3-dist.zip](https://mike2014mike.github.io/sample/2018-08-15/bootstrap-4.1.3-dist.zip)

### 筆記

* BS3 是 float ， BS4 改為 flex 。

* 預設色彩有八個：primary, secondary, success, info, warning, danger, light, dark。
![預設色彩](https://i.imgur.com/4zfou58.png)

* BS4 斷點預設值以手機為準，拿掉 BS3 才有的 xs ，欄位寫法精簡為 `col-6`。
![斷點預設值](https://i.imgur.com/rgsdZ8g.png)

* 許多單位 px 都改為 rem。
![單位](https://i.imgur.com/tKNj1ZA.png)

* `lead` 保留，但 `well` 拿掉了。
![lead](https://i.imgur.com/SslHGaf.png)

* .display-1, .display-2, ... 共四個等級，標題粗體使用。(font-weight: 300)
![.display-*](https://i.imgur.com/3GVCYR4.png)

* .d-none, .d-inline, .d-block, ... 設定 display 用。
![.d-*](https://i.imgur.com/6zJo5VC.png)

* 用 border-top, border-bottom 取代 hr，無障礙網站強調語意，單純分隔線沒必要。
![hr](https://i.imgur.com/ZRnRHRb.png)

* `.list-inline-item` 就是 BS3 的 `.list-inline > li` 。
![.list-inline-item](https://i.imgur.com/TAlGUHe.png)

* blockquote 標籤(tag)移除，改為 class 。
![blockquote](https://i.imgur.com/ujwhqIz.png)

* 圖片滿版 RWD ， BS3 的 .img-responsive 在 BS4 改為 `.img-fluid`
![.img-fluid](https://i.imgur.com/ksxVglN.png)

* 注意 `.img-fluid` 是設定 `max-width: 100%` ，如果圖片小於容器，那將維持圖片原本大小；如果圖片大於容器，那圖片寬度將等於容器寬度。

* figure 標籤(tag)移除，改為 class 。
![figure](https://i.imgur.com/sjuaB5b.png)

* .container 在 BS3 做 media query 後是寫死寬度，但在 BS4 是用 max-width 取代。
![.container](https://i.imgur.com/mmKz4h3.png)

* BS4 的 .row 是用 flex 做的，而且有做換行。
![.row](https://i.imgur.com/g2O91Zl.png)

* .d-flex 反而沒有實作換行，如有需要需自己加上。
![.d-flex](https://i.imgur.com/bUamDL7.png)

* .no-gutters 讓欄之間的間距不見，一般套用在 .row 上。
![.no-gutters](https://i.imgur.com/WIL2Z2s.png)




### 參考
* [Bootstrap4 CSS原始碼導讀之1](https://www.youtube.com/watch?v=YgYFMnysL6Y)