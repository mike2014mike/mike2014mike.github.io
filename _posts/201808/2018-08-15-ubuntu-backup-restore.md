---
layout:     post
title:      Ubuntu Server如何備份/還原系統
date:       2018-08-15 09:37:19
author:     Mike Chen
summary:    
categories: linux
thumbnail:  linux
tags:
 - linux
 - Joomla相關

---

### 參考
[tar高级教程：增量备份、定时备份、网络备份](http://lesca.me/archives/how-to-incrementally-backup-linux-with-gnu-tar.html)


### 備份

```
tar -cvpzf /backup/backup.tgz –exclude=/proc –exclude=/lost+found –exclude=/mnt –exclude=/sys –exclude=/media /

tar 是用來備份的程式
c – 新建一個備份文檔
v – 詳細模式， tar程式將在螢幕上即時輸出所有資訊。
p – 保存許可，並應用到所有檔。
z – 採用‘gzip’壓縮備份檔案，以減小備份檔案體積。
f – 說明備份檔案存放的路徑。
```

### 還原

```
tar -xvpzf /backup/backup.tgz -C /
```
