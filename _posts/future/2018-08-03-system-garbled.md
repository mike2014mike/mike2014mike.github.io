---
layout:     post
title:      中文程式變亂碼解決方案
date:       2018-08-03 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  windows
tags:
 - system
 - garbled
---

明明檢查Windows系統的語系和地區都設定無誤，為何程式開啟會變亂碼呢？

可能是註冊檔(registry)設定跑掉了

```
Windows Registry Editor Version 5.00
[HKEY_CURRENT_USER\Control Panel\International]
"Locale"="00000404"
```