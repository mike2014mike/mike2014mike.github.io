---
layout:     post
title:      MSSQL 寫入簡體字變問號之解法
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: MSSQL
thumbnail:  database
tags:
 - MSSQL
---

先來個WeChat上的對話
![log](https://mike2014mike.github.io/images/wechat-sql-n.png)

是的，前陣子同事問我簡體字寫入 MSSQL 變問號之解法，這邊稍微紀錄一下。

## 欄位類型

請務必選 `nvarchar` , `ntext` 或 `nchar` ，也就是前面都要有個 `n` 的。

## 寫入方式

### #1

```
VALUES(N'簡體字')
```

### #2

```
sql = "update MyDatas set Name=N'" + sName +" ' "
```


### #3

```
SqlParameter p1 = new SqlParameter("@Name", SqlDbType.NVarChar);
p1.Value = "簡體字";
```