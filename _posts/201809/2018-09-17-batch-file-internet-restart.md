---
layout:     post
title:      批次檔 Ping Google DNS 判斷是否斷線
date:       2018-09-17 09:37:19
author:     Mike Chen
summary:    批次檔 Ping Google DNS 判斷是否斷線
categories: 批次檔
thumbnail:  sitemap
tags:
 - Ping
---

### 邏輯
The logic is: ping public ip (google dns 8.8.8.8), if the ping fails, then goto :RESTART and restart network adapter with name "LAN", after this loop again from the start (if ping is OK, then do nothing and ping in loop to check if adapter is connected to internet)


### 筆記
* `%ERRORLEVEL%` 代碼為 0 就代表正常結束，不等於 0 就代表執行過程發生錯誤。
* ping 一個不存在的 IP 位址，得到的結果為 1。
* ping 一個錯誤的 IP 位址或不存在的 Domain Name 則會得到結果為 2。
* 在批次檔中的 `IF ERRORLEVEL` 語法，若傳入的數字為 1 代表的是【大於等於 1 的值都算是 True】
* `%~dp0` 表示批次檔所在路徑。

### Batch File code

```
@echo off 
:: 時間格式化
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%" & set "MS=%dt:~15,3%"
set "datestamp=%YYYY%%MM%%DD%" & set "timestamp=%HH%%Min%%Sec%" & set "fullstamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%-%MS%"
:: echo datestamp: "%datestamp%"
:: echo timestamp: "%timestamp%"
:: echo fullstamp: "%fullstamp%"


:LOOP
echo [%fullstamp%] 嘗試 ping 8.8.8.8
ping 8.8.8.8
IF ERRORLEVEL 1 goto RESTART
IF ERRORLEVEL 0 goto LOOP


:RESTART
@echo [%fullstamp%] ping 失敗...>>%~dp0log.txt

echo 重新啟動網路卡
netsh interface set interface "Wi-Fi" disabled
ping -n 3 127.0.0.1
netsh interface set interface "Wi-Fi" enabled
ping -n 15 127.0.0.1
goto LOOP
```

### 參考
* [【批次檔】%CD% 與 %~dp0](http://inpega.blogspot.com/2012/07/cd-dp0.html)
* [Windows批處理：將日期格式化為變量](https://code-examples.net/zh-TW/q/a70424)
* [bat file to disable ethernet adaptor and then reenable it after windows log in](https://superuser.com/questions/520755/bat-file-to-disable-ethernet-adaptor-and-then-reenable-it-after-windows-log-in)
* [程式結束狀態: Windows 的 %ERRORLEVEL% 與 Linux 的 $?](https://blog.miniasp.com/post/2010/10/04/Windows-Batch-ERRORLEVEL-and-Linux-Bash-Exit-Status.aspx)