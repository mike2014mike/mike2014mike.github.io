---
layout:     post
title:      Notepad++ Markdown 語法高亮
date:       2020-11-13 10:37:19
author:     Mike Chen
summary:    
categories: Tips
tags:
 - Notepad++
 - Markdown
description: Notepad++ 預設沒有針對 Markdown 設計語法高亮，要如何實現呢？
---


## 問題

* Notepad++ 是個不錯的文字編輯軟件，因為它支援大多數程式語言的語法高亮，所以有時候單純看程式碼沒有要編輯的時候，也會利用它快速開啟查看。

* 不過它預設沒有針對 Markdown (副檔名為 md) 設計語法高亮，那要如何實現呢？


## 下載

* 前往 [Markdown Syntax Highlighting for Notepad++](https://github.com/Edditoria/markdown-plus-plus)

* 點選 Code > Download ZIP，下載壓縮檔

![下載壓縮檔](https://i.imgur.com/2wiBopZ.png)

* 解壓後得到名為 markdown-plus-plus-master 資料夾，在 udl 目錄下可以看到多種 Markdown 的語法高亮設定檔案

![Markdown設定檔](https://i.imgur.com/Yk2dDks.png)

* 回到 Notepad++，點選 `語言 > 自訂程式語言 > 開啟自訂語言資料夾`。以我為例的話，目錄是在 `C:\Users\Mike\AppData\Roaming\Notepad++\userDefineLangs\`

![開啟自訂語言資料夾](https://i.imgur.com/sorvyyd.png)

* 將剛剛 udl 目錄下的設定檔複製到自訂語言資料夾下

![複製設定檔](https://i.imgur.com/0tWOulb.png)

* 重新啟動 Notepad++，點選 `語言 ` 可在最下方看到多出數個 Markdown 的選項，挑一個看得順眼的吧！

![Markdown選項出現了](https://i.imgur.com/6t0kPwP.png)

* 例如我選 Markdown (Bespin)，就會如下效果。

![Markdown-Bespin](https://i.imgur.com/iHdfo25.png)