---
layout:     post
title:      Joomla相關
date:       2018-08-14 09:37:19
author:     Mike Chen
summary:    
categories: linux
thumbnail:  linux
tags:
 - linux
 - Joomla相關

---

2012/12/25


### Joomla是否可以IIS架站

1. [How to instal a Joomla 1.7 on a Windows 7 IIS](http://www.youtube.com/watch?v=YeaCGNS1-kw&hd=1)
2. [To go directly to the Joomla install visit](http://www.microsoft.com/web/gallery/joomla.aspx)
3. 在VM-XP架站成功：XP須為SP3以上版本，.Net需4.0，安裝完MySQL，方能安裝Joomla。

### Joomla如何移植

1. 使用JoomlaPack(Akeeba Backup)模組便可進行網站與資料庫的備份與移植：會備份成jpa的壓縮檔：
2. 壓縮檔須使用Akeeba eXtract Wizard進行解壓縮：

### 練習彰師大網站移植。
1. 安裝最新版的Webmin

```
wget http://downloads.sourceforge.net/project/webadmin/webmin/1.510/webmin_1.510-2_all.deb?use_mirror=cdnetworks-us-1
dpkg -i webmin_1.510-2_all.deb
```

2. 若Webmin無法登入，可以下列指令修改密碼。

```
/usr/share/webmin/changepass.pl /etc/webmin root new_password
```

3. 出現 `JFolder::create: 不能建立目錄` 的錯誤訊息。是目錄權限的問題，以下列指令修改權限。

```
chown -R www-data.www-data /var/www/joomla/
```

4. 以vim編輯文件欲離開時，按shift+:，輸入wq即可。
5. 彰師大網站移植完成！
6. 英文網頁無法顯示，是主機環境需要特別設定，與[SEF](http://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs)有關。


### SEF設定：
1. etc/apache2/sites-available/default

```
AllowOverride All
```

2. Apache Webserver > Virtual Server > Document Options

```
/var/www/history
```

3. Configure Apache Modules勾選rewrite,substitude。
4. 回putty重新啟動/etc/init.d/apache2 restart


### 防火牆：

```
vim /home/mike/backup/iptables.sh
reboot
iptables -L -n
```

### 網路設定：

```
vi /etc/network/interfaces
/etc/init.d/networking restart
```

### 查詢硬碟型號：

```
hdparm -I /dev/sda
WDC WD5000AAKS-00V1A0
```
