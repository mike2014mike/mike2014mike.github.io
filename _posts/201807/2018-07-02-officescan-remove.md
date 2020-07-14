---
layout:     post
title:      OfficeScan免密碼卸載方法
date:       2018-07-02 09:37:19
author:     Mike Chen
summary:    OfficeScan免密碼卸載方法
categories: tips
thumbnail:  trash
tags:
 - OfficeScan
---

OfficeScan密碼忘記了怎麼辦？免驚，按照下面方法就可以免密碼移除囉！

## 【步驟】

* 首先將電腦重新啟動。
* 在出來windows圖示之前狂按F8，選擇 `安全模式` 。
* 按下 `win+r` 打開登錄檔工具，然後輸入 `regedit` 按下Enter。
* 在左面的視窗中找到如下路徑

```
HKEY_LOCAL_MACHINE\SOFTWARE\TrendMicro\PC-cillinNTCorp\CurrentVersion\Misc.
```

* 如果是64位元元系統的話，路徑是

```
HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\TrendMicro\PC-cillinNTCorp\CurrentVersion\Misc.
```

* 在右邊的視窗中找到 `Allow Uninstall` 然後按兩下，並把裡面的值改成1，確定。
* 最後點擊開始->程式->趨勢->uninstall.exe，這樣就可以直接卸載，而不需要密碼了。


## 【注意事項】
一定要在 `安全模式` 修改，否則改不了 `Allow Uninstall`