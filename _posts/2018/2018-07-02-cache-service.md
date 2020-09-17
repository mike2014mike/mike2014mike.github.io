---
layout:     post
title:      Cache Service 問題解法
date:       2018-07-02 09:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  map-marked-alt
tags:
 - GIS
---

### 問題

作為 GIS Server 的主機，通常背景會有Cache Service在執行產製圖磚(Map Tile)的工作。但如果只是在測試主機上運行，遇到硬碟空間不足的情形，電腦可能就跑不動了。

### 解法

* 停用Cache Service，並以下面指令刪除檔案即可。
* 執行>cmd，cd 欲刪除檔案的資料夾 (按 Enter)

```
del * /f/s/q (按 Enter)
```

* 這會比透過 Windows UI 刪除的快很多