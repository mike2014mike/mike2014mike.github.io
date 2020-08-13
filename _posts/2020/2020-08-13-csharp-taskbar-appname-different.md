---
layout:     post
title:      C# 更改專案名稱與組件名稱後，工作列上的應用程式名稱沒變
date:       2020-08-13 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - FriendlyAppName
---


## 說明
* 這是一個偶然發現的問題，身為工程師時常會開些小專案來試做，例如建一個叫 SampleAAA 的專案，其預設組件名稱/應用程式名稱也會叫做 SampleAAA，編譯後產生的執行檔也會叫 SampleAAA.exe。

* 當這個小專案測試沒問題，可能會想直接變更成正式專案，會考慮直接修改他的專案名稱、組件名稱、命名空間名稱，例如改叫 SampleBBB 好了。(其實蠻多地方需要修改的，這邊只列舉部分)

* 都改好後，清空 Debug 資料夾後，重新進行編譯，理所當然會產生 SampleBBB.exe，到這也沒問題。

* 發生問題的是，從 Debug 目錄下直接雙擊 SampleBBB.exe 後，又偶然在工作列(Taskbar)上對它的圖示點了右鍵，發現名稱還是原本的 SampleAAA，如下圖。

![名稱還是舊的](https://i.imgur.com/yovM0Jw.png)

* 這讓我下意識的想到去搜尋看看登錄檔 ( 執行 > 輸入`regedit` > 搜尋 `SampleAAA`)，果然在 `HKEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\Shell\MuiCache` 下發現了一個有趣的東西 `FriendlyAppName` (友善的應用程式名稱？)。

![FriendlyAppName](https://i.imgur.com/vNZWkFV.png)

* 看來是微軟在初次運行執行檔的時候會記錄這個屬性，就算重新編譯，只要是路徑相同，都還是會保持原本的值。

## 解法

* 解決方法就是直接刪除這個機碼就可以了。

* 另外，其實如果把整個 Debug 資料夾搬到其他地方去執行，並不會有這問題，因為路徑不同。

![刪除就解決了](https://i.imgur.com/N71kdKi.png)