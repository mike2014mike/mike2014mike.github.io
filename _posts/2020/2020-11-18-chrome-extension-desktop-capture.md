---
layout:     post
title:      Chrome Extension 螢幕擷取/畫面分享
date:       2020-11-18 10:37:19
author:     Mike Chen
summary:    
categories: Tips
tags:
 - Chrome extension
 - Chrome擴展外掛
 - Chrome擴充功能
 - 螢幕擷取
description: 工作上需要，所以花點時間來研究 Chrome 的擴充功能要如何撰寫
---

## 目標 

* 這篇來嘗試新增權限，讓外掛可以捕捉某個螢幕(多螢幕的情況)、某個視窗、或是某個頁籤的畫面。

## 準備工具

1. Chrome 瀏覽器(版本：87.0.4280.66)
1. 文字編輯器 (我使用 VS Code，版本：1.42.0)

## 步驟

* 我們先建立一資料夾 `extension-desktop-capture`，當作我們的專案目錄。

* 新增一檔案 `manifest.json`，並輸入以下內容，這檔案主要是定義這個外掛的一些資訊，例如外掛名稱、描述、版本以及會用到的權限等。這邊我們使用了 `desktopCapture` 的權限，並限定本地啟動的網址可以連接。

```json
{
  "name": "Sample - Desktop Capture",
  "description": "An extension to capture something.",
  "version": "0.1.0",
  "manifest_version": 2,
  "background": {
    "scripts": [
      "myscript.js"
    ],
    "persistent": false
  },
  "externally_connectable": {
    "matches": [
      "*://localhost/*",
      "*://127.0.0.1/*"
    ]
  },
  "permissions": [
    "desktopCapture"
  ]
}
```

* 新增一檔案 `myscript.js`，並輸入以下內容。

```js
chrome.runtime.onMessageExternal.addListener(
  (message, sender, sendResponse) => {
    if (message == 'version') {
      sendResponse({
        type: 'success',
        version: '0.1.0'
      });
      return true;
    }
    const sources = message.sources;
    const tab = sender.tab;
    chrome.desktopCapture.chooseDesktopMedia(sources, tab, streamId => {
      if (!streamId) {
        sendResponse({
          type: 'error',
          message: '無法取得串流 ID'
        });
      } else {
        sendResponse({
          type: 'success',
          streamId: streamId
        });
      }
    });
    return true;
  }
);
```

* 透過【載入未封裝項目】安裝外掛，這邊先注意一下，安裝後我們可以得到一組外掛 ID。

![外掛 ID](https://i.imgur.com/zaPHRQX.png)

* 新增一檔案 `index.html`，並輸入以下內容，其中的 `const EXTENSION_ID = 'egghpkfnbfnkaffpaaonelgolpdlhhlj';` 請置換成您自己的外掛 ID。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>本機螢幕擷取範例</title>
</head>

<body>
  <button id="btnStart" style="display:block">開始擷取</button>
  <button id="btnStop" style="display:none">停止擷取</button>

  <div>
    <div style="margin: 0px auto; width: 800px; text-align: center;">
      <h1>我的畫面</h1>
      <video autoplay id="screen" width="100%" style="border: 1px solid black;"></video>
    </div>
  </div>


  <script>
    (() => {
      const EXTENSION_ID = 'egghpkfnbfnkaffpaaonelgolpdlhhlj'; //這邊要換成您的外掛 ID

      chrome.runtime.sendMessage(EXTENSION_ID, 'version', response => {
        if (!response) {
          console.log('找不到外掛');
          return;
        }
        console.log('Extension version: ', response.version);
        const video = document.getElementById('screen');
        const btnStart = document.getElementById('btnStart');
        const btnStop = document.getElementById('btnStop');
        const request = { sources: ['window', 'screen', 'tab'] };
        let stream;

        btnStart.style.display = 'block';
        btnStart.addEventListener('click', event => {
          chrome.runtime.sendMessage(EXTENSION_ID, request, response => {
            if (response && response.type === 'success') {
              navigator.mediaDevices
                .getUserMedia({
                  video: {
                    mandatory: {
                      chromeMediaSource: 'desktop',
                      chromeMediaSourceId: response.streamId
                    }
                  }
                })
                .then(returnedStream => {
                  stream = returnedStream
                  video.srcObject = stream;
                  btnStart.style.display = 'none';
                  btnStop.style.display = 'block';
                })
                .catch(err => {
                  console.error('無法取得串流: ', err);
                });
            } else {
              console.error('無法取得串流');
            }
          });
        });

        btnStop.addEventListener('click', event => {
          stream.getTracks().forEach(track => track.stop());
          video.src = '';
          btnStop.style.display = 'none';
          btnStart.style.display = 'block';
        });
      });
    })();
  </script>
</body>

</html>
```

* 因為我要讓這網頁在本機端以 "http://localhost" 或是 "http://127.0.0.1" 的形式運行，這邊需要安裝一個 VS Code 的外掛，請搜尋 Live Server，並安裝。

![Live Server](https://i.imgur.com/EjGibon.png)

* VS Code 請切換到 index.html，在右下角可以發現有 【Go live】的按鈕，大膽給他按下去。

![Go live](https://i.imgur.com/UK37HES.png)

* 這時候應該會自動使用預設瀏覽器，開啟以"http://localhost" 或是 "http://127.0.0.1" 開頭的網頁網址。

![開啟網頁](https://i.imgur.com/stgLjGW.png)

* 點選左上角開始擷取按鈕，會跳出一視窗讓您選擇想要擷取的目標，因為我是雙螢幕，所以在您的整個畫面頁籤中可以有兩個螢幕可以選擇。這邊我選擇螢幕2，也就是延伸螢幕，然後點選分享。

![設定擷取目標](https://i.imgur.com/rFc6sm1.png)

* 最後我們可以在網頁上看到該螢幕的畫面，而且是即時的喔！

![即時畫面分享](https://i.imgur.com/Sj6JEoQ.gif)

## 原始碼

* 以上原始碼我放在[這裡](https://github.com/mike2014mike/chrome-extension-desktop-capture)，歡迎取用