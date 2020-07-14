---
layout:     post
title:      開啟 Office 出現設定進度視窗之解法
date:       2018-08-17 09:37:19
author:     Mike Chen
summary:    
categories: Office
thumbnail:  lightbulb
tags:
 - office
---

### 問題

每次開啟 Office 都會出現設定進度的視窗。

### 原因

同時安裝多個版本的 Office，例如同時有 Office 2003 或 Office 2007時。

### 解法

只要將下面檔案重新命名即可。

```
C:\Program Files\Common Files\Microsoft Shared\OFFICE12\Office Setup Controller\SETUP.EXE
```

### 備註
1. 如果上述目錄進不去的話，進入「C:\Program Files\Common Files\Microsoft Shared\」資料夾，再選擇OFFICE目錄進入即可。
2. OFFICE12 是 Office 的版本，如果安裝的為 Office 2013，資料夾則為 OFFICE15 ，依此類推。