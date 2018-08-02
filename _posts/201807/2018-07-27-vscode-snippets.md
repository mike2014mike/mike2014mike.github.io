---
layout:     post
title:      VSCode Emmet 進階版 - 自訂使用者程式碼片段（Snippets）
date:       2018-07-27 09:37:19
author:     Mike Chen
summary:    
categories: vscode
thumbnail:  vscode
tags:
 - VSCode
 - Emmet
 - Snippets
---

之前文章介紹過[VSCode Emmet的使用方式](https://mike2014mike.github.io/vscode/2018/07/10/vscode-emmet/)，但這些快捷方式僅限於內建的，能否自己自訂常用的程式碼片段呢？<br>
例如Vue的起手式(如下結構)，能否輸入 `vue` ，然後快速產生呢？

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        //網頁用到的資料都放在這
        
    },
    created: function () {
        // 網頁載入完成，先執行的 function 內容寫在這(像 jQ 的 .ready())
    },
    methods: {
        //各種要用的 function 寫在這
        m1: function (event) {
            //方法一
        }
    },
    computed: {
        //計算屬性
        c1: function () {
            //計算一
            return this.col1 + ' ' + this.col2
        }
    }
})
```

答案是「可以的！」<br>

我們就要用到VSCode的 `使用者程式碼片段` 功能。步驟如下：


* 檔案 --> 喜好設定 --> 使用者程式碼片段 
![使用者程式碼片段](https://i.imgur.com/ROsvdGi.png)

* 選擇程式碼片段是屬於哪一個程式語言，這裡我們以Javascript為例
![javascript](https://i.imgur.com/zsgSih9.png)

* 編輯方式是 JSON 格式， `Vue framework` 是幫這段代碼取個響亮的名稱， `prefix` 的內容是您想輸入的程式碼縮寫， `body` 的內容就是程式碼片段的 Code ，注意要以 `字串` 的方式輸入， `description` 是描述這段 Code 的用途。
![使用者程式碼片段JSON格式](https://i.imgur.com/kye0TqJ.png)

* 儲存以後，我們就可以測試，在網頁script當中輸入 `vue` ，就會出現程式碼片段讓您選擇。選擇後就會自動產生上面的  vue 起手式結構內容。
![vue Snippets](https://i.imgur.com/b5dvaoQ.png)

### 我常用的使用者程式碼片段
1. [html.json](https://mike2014mike.github.io/sample/2018-07-27/html.json)：包含jQuery, Bootstrap, Vue 的 CDN 引入
2. [javascript.json](https://mike2014mike.github.io/sample/2018-07-27/javascript.json)：包含jQuery ajax, Vue 架構 

### 存檔路徑
使用者程式碼片段的設定會儲存在下面路徑

```javascript
PATH = "C:\Users\Mike\AppData\Roaming\Code\User\snippets"
//其中 Mike 是您電腦的使用者名稱
```

### 工具
[Snippet Generator](https://pawelgrzybek.com/snippet-generator/)是建立 Snippet 的好用工具，在左邊直接輸入程式碼片段，右邊就會產生要設定的內容，而且還可以選擇要產生哪種編輯器的格式。
![Snippet Generator](https://i.imgur.com/yNHA07J.png)

### 參考
[VS Code 中自訂程式碼片段的功能（snippet）](https://pjchender.blogspot.com/2017/04/vs-code-snippet.html)