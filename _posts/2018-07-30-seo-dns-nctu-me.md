---
layout:     post
title:      SEO - 免費網域名稱 nctu.me
date:       2018-07-30 10:37:19
author:     Mike Chen
summary:    
categories: SEO
thumbnail:  sitemap
tags:
 - SEO
 - nctu.me
 - DNS
 - Domain Name
---

### 緣由
好記的網域名稱對 SEO 來說也是有相當重要性的，雖然我對 Github Page 提供的網域名稱沒甚麼意見，但如果還能另外制定也不錯。身為交大畢業生，無意間看到有 nctu.me 這個免費網域申請的服務，就來玩玩看囉！

* 我 Github 原本的網址：[https://mike2014mike.github.io](https://mike2014mike.github.io)
* 使用了 nctu.me 的網址：[http://www.mikechen.nctu.me](http://www.mikechen.nctu.me)

可以發現，nctu.me 的網址其實是沒有 SSL 協定的喔！如果需要還得另外去處理，例如用[Let's Encrypt](https://letsencrypt.org/)。

### 參考

* [NCTU Domain免費網域申請教學](https://medium.com/@NorthBei/nctu-domain%E5%85%8D%E8%B2%BB%E7%B6%B2%E5%9F%9F%E7%94%B3%E8%AB%8B%E6%95%99%E5%AD%B8-b629fdaaad90)
* [https://nctu.me/](https://nctu.me/)

### 操作步驟
* 先到 [https://nctu.me/](https://nctu.me/) 申請TWID帳號登入，由於我有交大帳號，所以可以直接用學號登入。
![登入](https://i.imgur.com/3bUKYxP.png)

* 授權取用資料
![授權](https://i.imgur.com/RHWYyYp.png)

* 網域管理 > 新增網域
![新增網域](https://i.imgur.com/Lr43oMp.png)

* 申請網域選擇 nctu.me，並輸入子網域名稱，點選申請
![申請網域](https://i.imgur.com/VOQgPcR.png)

* 回到列表，選擇 DNS 管理
![DNS 管理](https://i.imgur.com/5o4CNUN.png)

* 紀錄列表，選擇新增紀錄
![新增紀錄](https://i.imgur.com/Nay5VYu.png)

* 設定名稱，我這邊輸入 www，也可以選擇不輸入。內容填入[Github的DNS Server IP](https://help.github.com/articles/troubleshooting-custom-domains/#dns-configuration-errors)，我是填185.199.111.153，您也可以依照前面網址說明填其他IP，然後按下申請。
![設定名稱與DNS IP](https://i.imgur.com/BDDVYiW.png)

* 紀錄列表會出現剛剛新增的紀錄
![新紀錄](https://i.imgur.com/29lUbpg.png)

* 到 Github Page 的專案進行設定，填入剛剛設定的網域名稱 `www.mikechen.nctu.me`，您會發現他在根目錄會產生一個名為 CNAME 的檔案，內容就是 `www.mikechen.nctu.me` ，這樣就完成設定囉！
![Github設定](https://i.imgur.com/7adTcLp.png)

* 過一陣子，就可以在網址輸入 `www.mikechen.nctu.me` 進行測試囉！
![測試](https://i.imgur.com/XCY6ERQ.png)

* 原本 Github 的網址也可以用！
![Github網址](https://i.imgur.com/Bk32EEl.png)