---
layout:     post
title:      python 編譯為執行檔 exe
date:       2018-09-18 09:37:19
author:     Mike Chen
summary:    python 編譯為執行檔 exe
categories: python
thumbnail:  python
tags:
 - python
 - 執行檔
 - PyInstaller
---

### 安裝 PyInstaller

```
pip install PyInstaller
```

![PyInstaller](https://i.imgur.com/r7B4LaB.png)

### 打包為 exe

```
pyinstaller -F demo.py
```


![exe](https://i.imgur.com/URDbpab.png)

### 更換 icon

```
pyinstaller --onefile --nowindowed --icon=".\icon\myIcon.ico" demo.py
```

![icon](https://i.imgur.com/9sPZL0d.png)

### 錯誤
* 如果有打包錯誤，具體看build里的warn*.txt文檔，裡面詳細記載了錯誤的原因。一般都是庫丟失。


### options

```
-h, --help 
說明文件

--upx-dir UPX_DIR
upx 的資料夾，可壓縮執行檔
upx 官網

-y, --noconfirm
直接取代原先資料夾，無需詢問

--clean
清理

-D, --onedir
打包成一個資料夾 (預設值)

-F, --onefile
打包成一個執行檔

--specpath DIR
設定 spec 存放位置 (default： 目前目錄)

-n NAME, --name NAME
命名執行檔跟 spec (default：第一個 script 的名字)

-p DIR, --paths DIR
設定尋找 import 檔案的路徑 (通常為 sys.path)

--hidden-import MODULENAME, --hiddenimport MODULENAME
手動 import 找不到的 module，此指令可多次使用

--additional-hooks-dir HOOKSPATH
An additional path to search for hooks. This option can be used multiple times.

--runtime-hook RUNTIME_HOOKS
Path to a custom runtime hook file. A runtime hook is code that is bundled with the executable and is executed before any other code or module to set up special features of the runtime environment. This option can be used multiple times.

--exclude-module EXCLUDES
忽略 module or package

--key KEY
加密，需安裝 PyCrypto

-d, --debug
debug 用，需執行 exe 才會看見

--noup 
不使用 upx

-c, --console, --nowindowed
顯示 cmd 視窗(預設值)

-w, --windowed, --noconsole
不顯示 cmd 視窗

-i <FILE.ico or FILE.exe,ID or FILE.icns>
--icon <FILE.ico or FILE.exe,ID or FILE.icns>
更改 icon
```

### 參考
* [如何將python腳本「打包」成可執行程序(.exe)](https://kknews.cc/zh-tw/tech/4ybyrv.html)
* [如何把Python腳本導出為exe程序](https://kknews.cc/other/qopa42o.html)