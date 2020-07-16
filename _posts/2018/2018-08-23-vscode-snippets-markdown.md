---
layout:     post
title:      VSCode Snippets - Markdown
date:       2018-08-23 09:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  vscode
tags:
 - VSCode
 - Markdown
 - Snippets
---

之前文章介紹過[VSCode Snippets](https://mike2014mike.github.io/vscode/2018/07/27/vscode-snippets/)，
也就是所謂的「使用者程式碼片段」，對懶人來說非常方便。但最近我想幫 Markdown 做一些 Snippets，卻發現輸入 prefix 後無法跳出選單。

### 解法
* 查明原因，原來 VSCode 預設 Markdown 是不會自動偵測 Snippets 並跳出建議選單的，只要將其設為 true 即可。
* 檔案 >> 喜好設定 >> 設定，搜尋 "markdown"，將 "editor.quickSuggestions": true 即可。

```json
"[markdown]": {
  "editor.wordWrap": "on",
  "editor.quickSuggestions": true //預設是 false
}
```

!["editor.quickSuggestions": true](https://i.imgur.com/ycYyTsz.png)


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