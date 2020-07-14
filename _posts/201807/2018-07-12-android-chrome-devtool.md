---
layout:     post
title:      Android Chrome 開發者工具
date:       2018-07-12 10:37:19
author:     Mike Chen
summary:    
categories: android
thumbnail:  android
tags:
 - android
---

平常在PC上開發網頁，常常會使用到Chrome瀏覽器的開發者工具，看看錯誤訊息，或進行測試。<br>
但如果這個錯誤是僅發生在手機上，PC開網頁都正常，那該如何debug呢？<br>

Chrome 提供了 `Remote Debugging Devices` 的功能，方便我們使用PC版的 Chrome 連線到手機上做 debug。 <br>
請參考以下方式：<br>

1. 確認電腦可以使用 adb 連線至手機

手機的話要接 USB 線且打開 `USB debugging` 的功能，<br>

模擬器的話就不用了，這時執行 `adb devices` 確認電腦有連線到手機/模擬器：

```
adb devices
List of devices attached
emulator-5554   device
```

2. 使用桌面版 Chrome 連線至手機

先開啟模擬器上的瀏覽器，瀏覽至要 debug 的網頁：<br>

這時打開桌面版的 Chrome，瀏覽至 `chrome://inspect/#devices` ，<br>

這邊會列出來目前已連線的手機上的 `web view session`<br>

(有時候即使手機上目前是顯示桌面，但只要那個瀏覽器還在背景執行，這邊就還是可以看到那個 webview)<br>

 

這時點下 `inspect` 連結，就可以看到平常 `developer tool` 的畫面，<br>

不過這時 debug 的是手機/模擬器上的 webview 囉！