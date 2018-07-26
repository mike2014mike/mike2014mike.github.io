---
layout:     post
title:      列出資料夾內檔名的方法
date:       2018-07-09 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  file
tags:
 - filename
 - print
 - path
---

有時候在整理資料時，會希望可以列出這個資料夾內所有檔案的檔名，該如何做呢？<br>

請參考以下方式：

```
@echo off
dir /b /on >list.txt
```

將以上存成 `列出資料夾內檔名(不含路徑).bat` ，放到該資料夾中，雙擊滑鼠即可。


```
@echo off
dir /b /on /s >list.txt
```

將以上存成 `列出資料夾內檔名(含路徑).bat` ，放到該資料夾中，雙擊滑鼠即可。


```
@echo off 
set startDir = %CD% 
if(%1)==('help') GOTO USAGE 
IF (%1)==() ( 
set work_dir=%cd% 
) ELSE ( 
set work_dir=%1 
) 
cd /d %1 
SET counter=0 
REM * 
dir /B /A:-D %1 > upx8.txt 
REM * 
FOR /F %%i IN (dirs.txt) DO ( 
set /A Counter += 1 
) 
echo %Counter% 
```

將以上存成 `列出資料夾內檔名.bat` ，放到該資料夾中，雙擊滑鼠即可。