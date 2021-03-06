---
layout:     post
title:      廣告機-高雄軟體園區樓層簡介專案
date:       2020-07-22 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - KIOSK
 - Digital-Signage
---


## 說明
* 業務說高軟管委會預計購買三台廣告機，內容主要放ABC棟的樓層簡介，讓我規畫一個Sample出來提案。

## 需求
* 他們會提供每一層 AutoCAD 平面圖，我們要將其美化。
* 每個進駐公司點進去要跳出簡介，圖片 x 2，簡介文字 200 字。
* 所有公司內容要由他們自行更新。


## 思路
* 廣告機排版軟體大致切了三個區塊，頭放 banner，身體放樓層介紹、腳放廣告影片。
* 如果不需要「跳出公司簡介」和「自行維護公司內容」的話，用排版軟體就都能搞定。
* 加了這兩個需求，身體部分變成要嵌入網頁來實作，而不能只放圖片。
* 考慮到他們的環境可能無法讓廣告機上網，所以得設計成是讀取本機的網頁檔案。
* 放在本機的資料如要讓他們自行維護，不可能讓他們自己修改程式碼或者手動替換圖片，所以只能寫一個編輯器給他們用。
* 廣告機的播放內容可透過隨身碟更新，而我網頁資料也可直接放在隨身碟內，嵌入的網址直接指定到隨身碟目錄即可。
* 直接從隨身碟執行編輯器，修改後就能直接修改對應公司的資料和替換圖片。

## 成果預覽
![排版](https://i.imgur.com/gAjJCvm.png)
![樓層簡介](https://i.imgur.com/9KlMYnt.png)
![公司簡介](https://i.imgur.com/4owYdmo.png)
![編輯器畫面](https://i.imgur.com/lphzJ2O.png)
![編輯畫面](https://i.imgur.com/uI7nh6Z.png)
![廣告機實際畫面](https://i.imgur.com/jefUrB8.png)

## 後記
* 功能都實作出來了，就等美編大姊提供美美的平面圖了。