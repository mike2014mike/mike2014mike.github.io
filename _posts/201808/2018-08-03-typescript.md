---
layout:     post
title:      TypeScript 入坑
date:       2018-08-03 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - JavsScript
 - TypeScript
---

### 筆記
* TypeScript 是一個提供 `強型別` 語法的 JavaScript `超集合` (Superset)，TypeScript 包含了完整的 JavsScript 的語言特性。

![超集合](https://i.imgur.com/tKcLkTY.png)

* 安裝 VS Code 好用套件 `Quokka.js` 

![Quokka.js](https://i.imgur.com/fa5AvFd.png)

* `Ctrl + Shift + P` ，輸入 `Quokka` ，選擇 `New TypeScript File`

![Ctrl + K + T](https://i.imgur.com/E8OqViD.png)

* 輸入完 console.log 會立即顯示結果，滑鼠移動到變數名稱上會顯示型別。

![Type alert 1](https://i.imgur.com/gTxEoXS.png)

* 這裡我們故意給原 string 變數一個數字，在變數底下會顯示紅色波浪符提示，滑鼠移動到變數名稱上會顯示不該把數字指定給 string 變數。

![Type alert 2](https://i.imgur.com/kFJEMUT.png)

* Quokka.js 可以拿來測試程式碼，不需要啟動瀏覽器，相當方便。

* TypeScript `重構` 優勢優於 JavaScript。

* 游標點在變數 name 上，按下 `F2` ，輸入新的變數名稱，可發現所有用到的地方都會跟著變動。

![重構](https://i.imgur.com/2hb4jcy.png)

* TypeScript 可轉譯為 不同版本的 JavaScript，最低支援到 `ES3` 。

* ``Ctrl + `(反單引號) `` 開出 VS Code 內建的終端機，安裝編譯器 `npm install -g typescript`

* 若 VS Code 的終端機無 `系統管理員權限` ，請到該捷徑點選右鍵 > 內容 > 相容性，勾選 `「以系統管理員的身分執行此程式」`

![以系統管理員的身分執行此程式](https://i.imgur.com/ogMHYoP.png)

* 輸入 `tsc -v` 確認版本 >= 1.5，否則無法使用

![typescript版本](https://i.imgur.com/b4SuufV.png)

* 若版本 < 1.5 ，請到 `環境變數` >> `系統變數` >> `Path` 移除 `C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.0\`，重新啟動 VS Code ，再回來檢查版本。
![系統變數](https://i.imgur.com/tYh8mgN.png)

* 終端機 `cd` 到專案目錄，輸入 `tsc --init`，會產生一個 `tsconfig.json` 檔，可設定要輸出的 JavaScript 版本。

![target](https://i.imgur.com/XXs5wLo.png)

* 輸入 `tsc -w` ，可在每次存檔的時候自動編譯成 JavaScript。

![watch](https://i.imgur.com/x6RAzPi.png)

* 要取消自動編譯，只要 `Ctrl + C` 即可。

![Ctrl + C](https://i.imgur.com/4yUumd9.png)

* 單獨編譯某個 ts 檔，則是 `tsc test.ts`。

* 紅色波浪符提醒 `const(常數) 不能變動` ，但用 let 的話就安全過關。

![const](https://i.imgur.com/PzAbp9X.png)

* 若不想寫 TypeScript ，但想在 JS 內使用 TS 的型別檢查，可直接在 JS 最上方加入  `// @ts-check`，如下 a 就會報錯。

```javascript
// @ts-check
var a = 1;
a = 'Mike';
```

* 多型別寫法

```javascript
let m: string | number = 1;
m = "Mike"
```

* function 指定參數型別寫法，如果參數給錯誤型別就會報錯

```javascript
function getName(name: string) {
    return `${name} !!!`
}
```

![function參數](https://i.imgur.com/eyBEQMj.png)

### 參考
* [從 TypeScript 學習 JavaScript](https://www.youtube.com/watch?v=seNBnxXHj9E)
* [TypeScript新手入門](https://hackmd.io/s/rkITEOYX)