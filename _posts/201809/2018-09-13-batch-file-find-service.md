---
layout:     post
title:      批次檔判斷系統服務是否啟動
date:       2018-09-13 09:37:19
author:     Mike Chen
summary:    批次檔判斷系統服務是否啟動
categories: Batch-file
thumbnail:  sitemap
tags:
 - 批次檔
---

### Batch File code

```
@echo off 
sc query "服務名稱" | find "RUNNING" >nul
if "%ERRORLEVEL%"=="0" (
  echo 服務已存在並且已啟動！
  pause
  exit
) else (
  echo 服務啟動中，請稍後...
  net start "服務名稱"
)
```

### 參考
* [Batch file to check if a system service is running](https://stackoverflow.com/questions/5940539/batch-file-to-check-if-a-system-service-is-running)
* [Service Control (SC) 的使用](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-xp/bb490995(v=technet.10))
* [在批次檔中確認服務是否啟動並自動開啟服](http://chshman310222.pixnet.net/blog/post/179427642-check-and-start-up-the-windows-service-in-batch-file)