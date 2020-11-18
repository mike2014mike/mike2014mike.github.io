---
layout:     post
title:      Chrome Extension 擴充功能/擴展外掛開發 - Hello Mike!
date:       2020-11-18 10:37:19
author:     Mike Chen
summary:    
categories: Tips
tags:
 - Chrome extension
 - Chrome擴展外掛
 - Chrome擴充功能
description: 工作上需要，所以花點時間來研究 Chrome 的擴充功能要如何撰寫
---

## 使用的程式語言？

* 基本上只要會寫網頁，也就是熟悉 HTML + CSS + JavaScript 就可以撰寫 Chrome 擴充功能(以下簡稱`外掛`)。

## 要準備那些工具呢？

1. Chrome 瀏覽器(版本：87.0.4280.66)
1. 文字編輯器 (我使用 VS Code，版本：1.42.0)

## 目標 

* 這篇是基本篇，所以我們目標只要在網址列旁新增一個按鈕，點選後會跳出些東西即可。

## 步驟

* 我們先建立一資料夾 `extension-basic`，當作我們的專案目錄。

* 新增一檔案 `manifest.json`，並輸入以下內容，這檔案主要是定義這個外掛的一些資訊，例如外掛名稱、描述、版本以及會用到的權限等。

```json
{
  "name": "My Basic Extension Sample",
  "description":
    "An extension to show something.",
  "version": "0.1.0",
  "manifest_version": 2,
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  }
}
```

* 找一個 png 檔案，命名為 `icon.png` 當作按鈕圖示。

* 新增一檔案 `popup.html`，並輸入以下內容，

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello Mike!</title>
</head>

<body>
  <h1>Hello Mike!</h1>
</body>

</html>
```

## 安裝外掛

* 開發期間如果想要預覽，先進到擴充功能頁面(網頁列輸入chrome://extensions/)，開啟開發人員模式。

![開啟開發人員模式](https://i.imgur.com/Q7uofwp.png)

* 開啟後，會多一排按鈕，分別是載入未封裝項目、封裝擴充功能、更新，我們點選【載入未封裝項目】。

![載入未封裝項目](https://i.imgur.com/GGb6sgM.png)

* 選擇我們剛剛的 `extension-basic` 目錄，即可完成安裝。

* 點選網址列旁的擴充功能圖示，將我們的外掛釘選起來。

![外掛釘選](https://i.imgur.com/Vjrl4zr.png)

* 點選我們的外掛按鈕，即會跳出剛剛我們在 `popup.html` 中輸入的 `Hello Mike!` 字樣。

![popup](https://i.imgur.com/ScxL2NA.png)

## 更新外掛

* 當我們滑鼠移到外掛按鈕上時，預設跳出的提示文字(tooltip)是外掛的 `name` 屬性。

* 如果我們不想更改外掛名稱，但又想修改提示文字(tooltip)的話，我們可以使用 `default_title` 這個屬性。

* 將 `manifest.json` 修改如下：

```json
{
  "name": "My Basic Extension Sample",
  "description":
    "An extension to show something.",
  "version": "0.1.0",
  "manifest_version": 2,
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html",
    "default_title": "這是一個外掛!"
  }
}
```

* 回到擴充功能頁面，對我們的外掛點選【重新載入】的按鈕。

![重新載入](https://i.imgur.com/NZ16CAV.png)

* 再次將滑鼠移動到外掛按鈕上，這時候的提示文字(tooltip)應該已經變成我們設定的 `default_title` 屬性了。

## 原始碼

* 以上原始碼我放在[這裡](https://github.com/mike2014mike/chrome-extension-basic)，歡迎取用