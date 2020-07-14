---
layout:     post
title:      大檔案無法複製到隨身硬碟裡
date:       2018-08-17 09:37:19
author:     Mike Chen
summary:    
categories: Tips
thumbnail:  lightbulb
tags:

---

### 問題

大檔案無法複製到隨身硬碟裡

### 原因

FAT32無法支援單個檔案超過4G，FAT16則無法超過2G。

### 解法

1. 轉換成NTFS即可，單筆檔案可到16TB。
2. 使用cmd，輸入convert N:/FS:NTFS即可轉換，不會格式化。
3. N為磁碟機代號。