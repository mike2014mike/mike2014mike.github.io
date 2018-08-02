---
layout:     post
title:      隨身碟無法顯示隱藏檔案之解決方法
date:       2018-07-07 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  file
tags:
 - usb
 - virus
---

只需要在 `命令提示字元` 下簡單幾個指令，
檔案就可以顯示出來了，
以下是方法：
1. 開始->執行->cmd
2. 切換到自己的隨身碟代碼，假如我的隨身碟在（E:）的話，就直接打 E：然後按下 Enter 鍵
3. 然後輸入以下指令：

```
attrib -h -s *.* /s /d
```

大概跑個幾分鐘就可以了。


```
-h(代表解除隱藏的檔案或資料夾)
-s(代表解除檔案或資料夾的系統屬性)
/s(處理資料夾及子資料夾)
/d(一併處理資料夾)
```