---
layout:     post
title:      清除Windows 8系統垃圾的方法
date:       2018-07-08 09:37:19
author:     Mike Chen
summary:    
categories: Tips
thumbnail:  windows
tags:
 - Win8
---

Windows系統用久了，都會產生許多系統暫存檔，而常常這些檔案根本用不到，只會佔用空間。
請參考以下方式移除：


```
@echo off

echo 正在清除系統垃圾檔案中，請稍候……

del /f /s /q %systemdrive%\*.tmp

del /f /s /q %systemdrive%\*._mp

del /f /s /q %systemdrive%\*.log

del /f /s /q %systemdrive%\*.gid

del /f /s /q %systemdrive%\*.chk

del /f /s /q %systemdrive%\*.old

del /f /s /q %systemdrive%\recycled\*.*

del /f /s /q %windir%\*.bak

del /f /s /q %windir%\prefetch\*.*

rd /s /q %windir%\temp & md %windir%\temp

del /f /q %userprofile%\COOKIES s\*.*

del /f /q %userprofile%\recent\*.*

del /f /s /q "%userprofile%\Local Settings\Temporary Internet Files\*.*"

del /f /s /q "%userprofile%\Local Settings\Temp\*.*"

del /f /s /q "%userprofile%\recent\*.*"

echo 清除系統垃圾檔案完成！！

echo. & pause
```

將以上存成 `Win8清除系統垃圾.bat` ，按右鍵 `以系統管理員身分執行` 即可。