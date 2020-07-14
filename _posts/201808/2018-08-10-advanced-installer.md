---
layout:     post
title:      以Advanced installer封裝程式
date:       2018-08-10 09:37:19
author:     Mike Chen
summary:    
categories: Tips
thumbnail:  windows
tags:
 - Advanced installer
---

### 以Advanced installer封裝程式

1. 若選擇Visual Studio Application，Import VS專案檔時，會出現"failed to start visual studio"訊息。改以.NET Application即可。
2. 註冊需使用C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm.exe /codebase /tlb "C:\Groundwater\Groundwater\bin\Release\Groundwater.dll"，因為是用.Net 4.0以上開發的。
3. 在Files and Folders中按右鍵選擇Add Temporary Files，加入註冊的batchfile。
4. 在Custom Actions中，選擇Launch file or open URL。

### 細部設定
* "Source Path"：viewer.exe
* "Source Type"：Executable (*.exe)
* Command：按Edit可選擇剛剛加入的batchfile，非暫存是"[#MyBatchFile.bat]"，暫存是"[&MyBatchFile.bat]"
* 選擇ignore return code。
* 選擇Deferred。

### 其他封裝軟體
* InstallShield