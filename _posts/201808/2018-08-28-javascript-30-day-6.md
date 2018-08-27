---
layout:     post
title:      JavaScript 30 - Day 6.Type Ahead & Vue框架作法比較
date:       2018-08-28 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - CSS Flex
---

之前 JS30 系列都是純 JS，但因為這次涉及到介接 API 與資料處理(讀取、篩選等)的部分，而 Vue 等框架最擅長的就是資料處理的部分，所以跟框架做比較。

### 資料
為避免日後 API(json) 連結失效，這邊做[備份](https://mike2014mike.github.io/js30/06 - Type Ahead/cities.json)。

### 筆記
1. 搜尋對象是 city 和 state 資料。
2. 顯示的數字是 population ，資料類型是 string ，需轉換。
3. 純 JS 要讀取資料，建議使用 [Fetch API](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API)，會使用到 Promise 的觀念。
4. `Promise` 處理非同步，res.json() 是 Promise，需要接 then 才能操作。
5. input 要決定觸發事件使用 'change', 'keyup' 或 'keydown'。'change' 無法即時反應，需焦點
轉移才會觸發；'keydown' 會有重複觸發的問題；所以選用 'keyup'。
6. 【正規表達式】gi: g (Global) 整個資料搜尋；i (Case Insensitive) 不分大小寫。
7. `innerHTML` 沒事別亂用，可能會被攻擊，但此處我們還是得用才有效果。
8. `toLocaleString()` 這個方法是針對 "數字" 處理，字串記得要先 parseInt("字串")，或者直接將字串 * 1 即可。
9. ES6 的 `箭頭函式 (Arrow function)` 沒有自己的 this，沿用外部的 this。在 Vue 裡面為了避免 this 在不同層級代表不同的對象，建議使用箭頭函式，等於 this 皆表示 Vue 本身。
10. Vue 的 `雙大括號 {{ }}` 等同於 `innerText`， `v-html` 等同於 `innerHTML` 。
11. Vue 等框架使用 Virtual DOM 的技術增強效能。



### 實作
* [實作-JS](https://mike2014mike.github.io/js30/06 - Type Ahead/index-mike-js.html)
* [實作-Vue](https://mike2014mike.github.io/js30/06 - Type Ahead/index-mike-vue.html)



### 參考
* [Javascript 30 #5 & Vue框架作法比較](https://www.youtube.com/watch?v=8iRyEhJBdUg)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)
* [正規表達式- JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)
* [線上正規表達式測試網頁](https://regex101.com/)
* [js數字格式化（加千分位逗號）](https://hk.saowen.com/a/d85852ebff40414ded947185e1a8930ce129731069f49a9688917eeca9fd6204)
* [Vue.js 組件概念與實作-搜尋與即時關鍵字反白](https://www.youtube.com/watch?v=V-BLAZbSV1s)