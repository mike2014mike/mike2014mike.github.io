---
layout:     post
title:      印表機列印卡住解法
date:       2018-08-06 09:37:19
author:     Mike Chen
summary:    
categories: Batch-file
thumbnail:  windows
tags:
 - 印表機
---

列印文件時常會遇到某筆列印卡住，按取消或刪除都還是一直顯示[刪除中 - 列印]，可以下列方式處理。
* 開啟記事本貼上以下指令，並存成 restart.bat

```
net stop spooler
del %systemroot%\system32\spool\printers\*.shd
del %systemroot%\system32\spool\printers\*.spl
net start spooler
```

另存 restart.bat 並執行，執行完畢就能解決此問題。