---
layout:     post
title:      使用Acronis True Image無法還原系統
date:       2018-08-12 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  windows
tags:
 - Acronis True Image
---

### 問題

使用Acronis True Image無法還原系統。

### 解法

到BIOS修改硬碟模式，若是AHCI就改IDE，反之IDE改AHCI，還原之後記得把設定改回來，否則無法開機。