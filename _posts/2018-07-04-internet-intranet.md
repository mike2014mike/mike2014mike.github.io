---
layout:     post
title:      公司網路設定(同時外內網)
date:       2018-07-04 09:37:19
author:     Mike Chen
summary:    公司網路設定(同時外內網)
categories: tips
thumbnail:  sitemap
tags:
 - setting
 - internet
---

一、打開記事本輸入

```
@echo off

echo 正在進行內外網設定中，請稍候……

echo 刪除所有0.0.0.0的路由
route delete 0.0.0.0

echo 加入外網(wifi)
route -p add 0.0.0.0 mask 0.0.0.0 192.168.1.1

echo 降低內網優先權(值越低優先權越高)
route -p change 10.34.0.0 mask 255.0.0.0 10.34.20.1 metric 60

echo 設定完成！！

echo. & pause
```

另存為 `網路設定.bat` ，按右鍵 `以系統管理員身分執行` 即可。
