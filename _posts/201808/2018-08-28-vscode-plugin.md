---
layout:     post
title:      VSCode 好用外掛
date:       2018-08-28 09:37:19
author:     Mike Chen
summary:    
categories: vscode
thumbnail:  vscode
tags:
 - VSCode
 - Plugin
---

其實，如果有方法可以取代，我就不會裝太多外掛，感覺裝太多會很臃腫。例如：Prettier 程式碼排版外掛，雖然它可以自訂規則很好用，但其實只要訓練打 Code 排版風格一致， VSCode 內建的排版就夠用了，並設定存檔時排版即可。

```json
"editor.formatOnSave": true
```

所以這裡只列出一些我常用的外掛與使用方式。

### Quokka.js
![Quokka.js](https://i.imgur.com/fa5AvFd.png)

* Quokka.js 可以拿來測試 JS 程式碼，不需要啟動瀏覽器，相當方便。

* 輸入完 console.log 會立即在後方顯示結果，滑鼠移動到變數名稱上會顯示型別。
![Type alert 1](https://i.imgur.com/gTxEoXS.png)

* `Ctrl + Shift + P` ，輸入 `Quokka` ，選擇 `New TypeScript File` (透過這方式建立的檔案會自動啟動 Quokka)
![Ctrl + K + T](https://i.imgur.com/E8OqViD.png)

* 現有檔案啟動 Quokka.js 的方法：`Ctrl + Shift + P` ，輸入 `Quokka` ，選擇 `Start on Current File`
![啟動 Quokka](https://i.imgur.com/cMhrcuA.png)

### Node Exec
![Node Exec](https://i.imgur.com/P8MSHrM.png)

* 一樣是可以拿來測試 JS 的外掛，直接在 VSCode 的終端機中顯示結果。

* 如果電腦已安裝 Node.js ，按下 `F8` 可直接執行 `*.js`，按下 `F9` 可停止。

### Live Server
![Live Server](https://i.imgur.com/m2chynT.png)

* 可以 HTTP 開啟瀏覽器，更動程式碼會即時反應到畫面上。(Hot Reload)

* 啟動法一：點選下方的 `Go Live` 按鈕。
![Go Live](https://i.imgur.com/9fNsfFa.png)

* 啟動法一：HTML 內點選右鍵，選擇 `Open with Live Server` 。
![Open with Live Server](https://i.imgur.com/wJZYu5H.png)


### cdnjs
![cdnjs](https://i.imgur.com/grWDcSJ.png)

* `Ctrl + Shift + P`，輸入 `cdnjs` ，搜尋 JS 套件名稱、版本，並直接引入 CDN 連結。

* 6 小時內曾經引入過的套件，可以快速選取。

### Placeholder Images
![Placeholder Images](https://i.imgur.com/eykRDie.png)

* `Ctrl + Shift + P`，輸入 `Placeholder Images` ，選擇圖片來源、輸入寬高、替代文字，可直接插入假圖片。

### Icon Fonts
![Icon Fonts](https://i.imgur.com/yz13V1U.png)

* 可以快速插入字型符號，常用的 Font Awesome、Glyphicons 都包含在內。

* 直接輸入字型符號的代號，例如 `fa-check`，然後按下 Tab 鍵，即可快速插入符號。

* 配合 cdnjs ，輸入 `cdnjs-fa` ，然後按下 Tab 鍵，可以快速引入 Font Awesome CSS 樣式。


### 程式語言外掛

* Python

* Go


### 參考
[精选！15个必备的VSCode插件](https://blog.csdn.net/qq_38906523/article/details/77278403)