---
layout:     post
title:      批次檔時間格式化
date:       2018-09-11 09:37:19
author:     Mike Chen
summary:    批次檔時間格式化
categories: 批次檔
thumbnail:  sitemap
tags:
 - 批次檔
---

### Batch File code

```
@echo off 
:: 時間格式化
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%" & set "MS=%dt:~15,3%"
set "datestamp=%YYYY%%MM%%DD%" & set "timestamp=%HH%%Min%%Sec%" & set "fullstamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%-%MS%"
echo datestamp: "%datestamp%"
echo timestamp: "%timestamp%"
echo fullstamp: "%fullstamp%"


```

### 參考
* [Windows批處理：將日期格式化為變量](https://code-examples.net/zh-TW/q/a70424)