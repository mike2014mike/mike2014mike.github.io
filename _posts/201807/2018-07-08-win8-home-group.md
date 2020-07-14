---
layout:     post
title:      移除Windows 8桌面上家用群組的方法
date:       2018-07-08 09:37:19
author:     Mike Chen
summary:    
categories: tips
thumbnail:  windows
tags:
 - win8
---

Windows 8 桌面上出現的家用群組，覺得很礙眼嗎？
請參考以下方式移除：


```
Windows Registry Editor Version 5.00
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel] 
"{B4FB3F98-C1EA-428d-A78A-D1F5659CBA93}"=dword:00000001

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu] 
"{B4FB3F98-C1EA-428d-A78A-D1F5659CBA93}"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel] 
"{B4FB3F98-C1EA-428d-A78A-D1F5659CBA93}"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu] 
"{B4FB3F98-C1EA-428d-A78A-D1F5659CBA93}"=dword:00000001
```

將以上存成 `Win8移除家用群組.reg` ，按右鍵 `以系統管理員身分執行` 即可。