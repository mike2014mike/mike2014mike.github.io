---
layout:     post
title:      “菓”這個字寫入資料庫會變問號
date:       2018-08-17 09:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  database
tags:
 - Database
 - Unicode
 - MSSQL
---

### 問題

“菓”這個字寫入資料庫會變問號

### 解法

1. 治標做法在資料庫中直接輸入 \u83D3 即可，轉換可參考[這裡](http://native2ascii.net/)
2. 治本做法是改為 nvarchar 欄位，INSERT INTO 文字表 VALUES(N'菓菓菓菓菓',N'菓菓菓菓菓')，可參考本站[MSSQL 寫入簡體字變問號之解法](https://mike2014mike.github.io/mssql/2018/07/20/mssql-zhcn/)
