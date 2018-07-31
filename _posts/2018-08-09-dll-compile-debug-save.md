---
layout:     post
title:      外部引入之DLL編譯後不會存到Debug資料夾
date:       2018-08-09 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  file
tags:
 - dll
 - Debug
---

1. 外部引入之 xxxxxxxx.dll 編譯後，不會自動存入Debug資料夾內。
2. 必須將其屬性中，【內嵌Interop型別】改為False，【複製到本機】才會變True。
3. 接著手動註冊，regsvr32 "C:\xxxxxxxx.dll"。
4. 建議可以InstallShield封裝程式，設定自動註冊上述dll。

[InstallShield 2009 簡易使用教學](http://blog.yam.com/terrytg259/article/28081300)