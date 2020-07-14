---
layout:     post
title:      手動註冊DLL檔的方法
date:       2018-08-03 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  windows
tags:
 - DLL
 - register
---

開始 > 執行 > 輸入

### Regsvr32 (for COM)

```
Regsvr32 "C:\xxxxxxx.dll"
```

### Regasm (for .NET)

```
C:\Windows\Microsoft.NET\Framework\v2.0.50727>C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\regasm.exe /codebase /tlb "C:\Groundwater.dll"
```