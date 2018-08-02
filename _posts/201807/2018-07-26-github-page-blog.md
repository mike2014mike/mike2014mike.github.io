---
layout:     post
title:      使用Github Page做免費個人網站(blog)
date:       2018-07-26 10:32:18
summary:    
categories: tips
thumbnail: github
tags:
 - github
 - blog
---

## 參考

* [為你自己學 Git](https://gitbook.tw/)

## 新增專案

在專案名稱的地方，填寫「username.github.io」，這個 `username` 指的是自己的 GitHub 帳號，所以我這邊是填 `mike2014mike.github.io`，請別跟我填一樣的唷！

![mike2014mike.github.io](https://i.imgur.com/bJYVBnr.png)


## 下載專案
將建立好的專案利用[Github Desktop](https://desktop.github.com/) Clone 下來本機端。
![Open in Desktop](https://i.imgur.com/aJg5UX5.png)

## 更新專案
放入自已的網頁資料，再 Push 上去即可。
![Push](https://i.imgur.com/9i8xIHn.png)

## PWA
如果有實作 PWA，注意 `service-worker.js` 中的 `cacheName` 也要修改，再 Push。

## 檢視
網址就是剛剛的專案名稱 [https://mike2014mike.github.io/](https://mike2014mike.github.io/) 囉！
![Website](https://i.imgur.com/z89rEns.png)