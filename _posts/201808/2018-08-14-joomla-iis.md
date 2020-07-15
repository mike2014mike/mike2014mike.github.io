---
layout:     post
title:      Joomla 相關整理
date:       2018-08-14 09:37:19
author:     Mike Chen
summary:    
categories: Joomla
thumbnail:  joomla
tags:
 - linux
 - Joomla

---

### Joomla是否可以IIS架站

1. [How to instal a Joomla 1.7 on a Windows 7 IIS](http://www.youtube.com/watch?v=YeaCGNS1-kw&hd=1)
2. [To go directly to the Joomla install visit](http://www.microsoft.com/web/gallery/joomla.aspx)
3. 在VM-XP架站成功：XP須為SP3以上版本，.Net需4.0，安裝完MySQL，方能安裝Joomla。

### Joomla如何移植

1. 使用JoomlaPack(Akeeba Backup)模組便可進行網站與資料庫的備份與移植：會備份成jpa的壓縮檔：
2. 壓縮檔須使用Akeeba eXtract Wizard進行解壓縮：

### 彰師大網站移植。
1. 安裝最新版的 Webmin

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


### 主機增加硬碟
1. 先以df -h與ls /dev/[sh]d*判斷新硬碟
2. 再以fdisk -l /dev/sdb再度確認。
3. 以fdisk /dev/sdb進行磁碟分割
4. 以mkfs -t ext4 /dev/sdb1進行格式化
5. 以blkid查詢磁碟UUID後
6. 修改/etc/fstab掛載硬碟。


### 測試還原
* webmin的restore有問題，無法使用。需自行使用下列指令還原：

```
cd /var/www/test
tar -xvf /home/mike/backup/html/everyday
```

### 系統網卡問題
1. 網卡可能被關閉，可透過ifconfig eth0 up可開啟eth0網卡。
2. 手動將 `/etc/udev/rules.d/70-persistent-et.rules` 這個檔案刪除，重新啟動後，系統就會重抓網卡。


### 關閉預設防火牆

```
ufw disable
```


### Webmin 出現「應用程式已被安全設定值封鎖」之解法

1. 移除JAVA>重新開機>安裝新版JAVA。
2. 控制台>JAVA>進階>將「啟用新一代JAVA...」取消勾選
3. 控制台>JAVA>安全>將後台網址加入例外。
4. 重新啟動瀏覽器，即可正常使用檔案管理功能。