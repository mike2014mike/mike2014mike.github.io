---
layout:     post
title:      開啟或關閉 Windows 功能空白
date:       2018-08-13 09:37:19
author:     Mike Chen
summary:    
categories: Tips
thumbnail:  windows
tags:
- ArcGIS
- Regedit
---

### 問題

開啟或關閉 windows 功能空白，導致無法安裝.Net Framework 4.，或開啟其他功能

### 原因

可能是安裝了ArcGIS9.3或其他程式，導致相關的註冊表鍵值被修改掉了。

### 解法

1. 執行regedit
2. 到　HKEY_LOCAL_MACHINE＼System＼CurrentControlSet＼Control
3. 將 RegistrySizeLimit(REG_DWORD類型的) 的值改為 FFFFFFFF(8個F)(10進制就是 4294967295)
4. 重新啟動Win7。
5. 再執行sfc /scannow指令，如果成功，則問題應該解決。