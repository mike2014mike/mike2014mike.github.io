---
layout:     post
title:      JavaScript 30 - Day 13.Slide in on Scroll 捲軸動畫
date:       2018-08-29 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
---

### 步驟
1. 程式控制卷軸，絕對座標計算。
2. 減速動畫計算，使用 `requestAnimationFrame` ，更新頻率依電腦效能而定。(IE9以前不支援)。
3. 捲軸控制程式，判斷圖片與捲軸的相對位置。
4. `pointer-events` 阻擋滑鼠事件，提升捲動事件效能。
5. debounce 的觀念與缺點。
6. `throttle = debounce + 時限內最少一次`。

### 筆記

* querySelectorAll() 取得的是 `NodeList` ，並非 Array。所以若需使用 indexOf()，需先透過 `Array.from` 轉換為 Array。
* 減速運動永遠不會停，永遠除以 10 去移動，所以需要 `設定停止條件`。
* 事件有兩個階段：捕捉階段(CAPTURING_PHASE)、氣泡階段(BUBBLING_PHASE)。
* 網頁如果太多特效，東西飛來飛去很亂；可利用 `pointer-events: none;` 將滑鼠事件 (例如 :hover)停用。
* 利用 `console.timeEnd()` 和 `console.time()` 檢查兩件事情之間隔時間。
* 作者提供的 debounce 在此不太適用，如果連續快速捲動多次然後突然停下，會出現圖片出不來的 bug。
* 如果 `debounce` 和 `throttle` 不想自己寫，可使用套件，例如：[Underscore](https://underscorejs.org/#throttle), [Lodash](https://lodash.com/docs/#throttle), [Lazy.js](http://danieltao.com/lazy.js/docs/)。

### 實作
* [實作-JS](https://mike2014mike.github.io/js30/13 - Slide in on Scroll/index-mike.html)



### 參考
* [Javascript 30 #6 捲軸動畫與事件效能處理](https://www.youtube.com/watch?v=PnoZU60qvho)
* [JavaScript 30](https://javascript30.com/)
* [GitHub - Javascript 30](https://github.com/wesbos/JavaScript30)
* [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
* [事件捕捉 (event capturing) 與事件氣泡 (event bubbling)](https://gist.github.com/MicroHank/38508cfaf0f3e862b300)
* [Javascript 的 Debounce 和 Throttle 的原理及实现](https://github.com/lishengzxc/bblog/issues/7)