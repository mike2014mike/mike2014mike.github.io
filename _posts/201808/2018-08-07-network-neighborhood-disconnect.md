---
layout:     post
title:      Win7網路芳鄰連不上處理方式
date:       2018-08-07 09:37:19
author:     Mike Chen
summary:    
categories: Tips
thumbnail:  windows
tags:
 - 網路芳鄰
---

1. 鍵入 gpedit.msc 叫出《本機群組原則編輯器》
2. 根據下圖展開左邊視窗路徑《電腦設定》=> 《Windows設定》=>《安全性設定》=>《本機原則》=>《安全性選項》
3. 在右邊視窗雙擊【網路安全性: LAN Manager驗證等級】，然後選擇【傳送LM和NTLM-如有交涉，使用NTLMv2工作階段安全性】即可。

若還是連不到台中架的網芳，改以FTP連。

* 電腦>空白處按右鍵>新增一個網路位置>輸入ftp://192.168.xxx.xxx