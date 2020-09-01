---
layout:     post
title:      KiKiStore - 線上購物平台
date:       2020-05-18 10:37:19
author:     Mike Chen
summary:    
categories: Side-Project
thumbnail:  code
tags:
 - JavaScript
 - Vue
 - NodeJS
 - Firebase
---


## 說明
* 朋友的副業需要線上購物平台，委託我幫他構想與實作。
* 開發期能省則省，先使用 Heroku 當主機，資料庫也先使用 Firebase 的免費方案。
* CSS 框架採用 Bootstrap，JS 框架採用 Vue，Server 端使用 Node.js。
* 目前的商品內容、圖片、價格均是假的，只是網路上找來做範例的，並非實際商品。

## 需求
* 下游是經銷商，需帳號控管，防止任何人都可下單。
* 前台商品需顯示庫存數，免得一直被問有沒有貨。
* 可以不串金流，匯款後填寫後五碼即可。
* 後台上能自行上架、管理商品。
* 後台要能管理訂單、客戶資料。
* 後台要能產生訂單歷史紀錄報表。


## 系統預覽
![登入頁面](https://i.imgur.com/IbCd6TI.png)
![商品頁面](https://i.imgur.com/rCILIlV.png)
![我的訂單頁面](https://i.imgur.com/uwDS3bN.png)
![購物車頁面](https://i.imgur.com/95U4jJx.png)
![商品管理頁面](https://i.imgur.com/FFXgJzY.png)
![客戶管理頁面](https://i.imgur.com/hzQAqd2.png)
![訂單管理頁面](https://i.imgur.com/RRxjrW3.png)


## 範例系統連結
[KiKiStore - 線上購物平台](https://kikistore-2020.herokuapp.com/)

## 程式碼
前端閹割版的部分程式碼，有放在 [GitHub](https://github.com/mike2014mike/kikistore)，可參考。