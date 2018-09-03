---
layout:     post
title:      Vue Component & Template
date:       2018-09-03 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - Vue Component & Template
---


### 筆記

#### Vue Component 基本款：區域註冊 Component。

```html
<div id="app">
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
```

```js
var vm = new Vue({
  el: '#app',
  components:{
    'my-component':{
      template:'<div class="component">This is a component of Vue!</div>'
    }
  }
})
```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component 基本款' src='//codepen.io/mikechen2017/embed/LJyEJL/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/LJyEJL/'>Vue Component 基本款</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### Vue Component 基本款：全域註冊 Component。

```html
<div id="app1">
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
<div id="app2">
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
```

```js
//全域 component
Vue.component('my-component',{
  template:'<div class="component">This is a component of Vue!</div>'
})

var vm = new Vue({
  el: '#app1',
})

var vm = new Vue({
  el: '#app2',
})
```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - Gobal' src='//codepen.io/mikechen2017/embed/XPRJwN/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/XPRJwN/'>Vue Component - Gobal</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### Vue Component - Data 要用 function 來 return。

```html
<div id="app">
  <div class="root">{{msg}}</div>
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
  
.root
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: green
```

```js
//全域 component
Vue.component('my-component',{
  template:'<div class="component">{{msg}}</div>',
  // component 的 data 要用 function 來 return
  data: function(){
    return {
      msg: 'This is a component of Vue! @component'
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'This is a component of Vue! @root'
  }
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - Data' src='//codepen.io/mikechen2017/embed/GXmJJP/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/GXmJJP/'>Vue Component - Data</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>


#### 標題

```html

```

```sass

```

```js

```

<div class="iframe-rwd">

</div>




### 參考
* [Vue.js 教學 - 從 Vuejs 初探 Web Component 的世界](https://youtu.be/T2JsTE0Hq58)
* [共筆](https://quip.com/N3iKAEDJEVmD)
* 需要有基礎 JS 技能，此[測驗](https://goo.gl/ANZEPh)達 85分以上便有到門檻 
* [原文教學](https://vuejs.org/v2/guide/installation.html)
* [簡體官方文件](https://cn.vuejs.org/v2/guide/installation.html) (chrome 瀏覽器點選右鍵，便能即時翻譯成繁中版。)
* Vue.js 幼幼班起手式(上)
    * [線上共筆文件](https://quip.com/M2eCAQo6bXh8)
    * [免費影片回顧](https://www.youtube.com/watch?v=8O3teHziU_E)
* Vue.js 幼幼班起手式(下)
    * [線上共筆文件](https://quip.com/bkhzA91RbxX6)
    * [免費影片回顧](https://www.youtube.com/watch?v=yzrUSzkLQNU)
* 從 Vue.js 初探 Web Component 的世界 (講師：[kuro](https://www.facebook.com/kurotanshi?fref=ts))
    * [免費影片回顧](https://www.youtube.com/watch?v=T2JsTE0Hq58&t=3978s)
    * [線上簡報](https://drive.google.com/file/d/0B5TNzeyWT1lqc2k0SEZtSnFuMXc/view)
    * [範例程式碼](https://github.com/kurotanshi/hexschool-vue)
    * [Vue.js 教學懶人包](https://github.com/vuejs/awesome-vue)
    * [電子報](https://www.getrevue.co/profile/vuenewsletter)
    * [Vue.js Feed](https://www.getrevue.co/profile/vuejs-news)
* 7/19  -  vue-cli (Casper)
    * [線上共筆文件](https://paper.dropbox.com/doc/Vue-Cli-pbpJGPUyjZy5xuoSFffId)
    * [免費影片回顧](https://www.youtube.com/watch?v=3ypel9_VtmU)
* 7/26  -  firebase  (Casper)
    * [線上共筆文件](https://paper.dropbox.com/doc/Vue-Cli-pbpJGPUyjZy5xuoSFffId)
    * [免費影片回顧](https://www.youtube.com/watch?v=1s2kUYixGwA)
* 8/2 - vuex  (Casper)
    * [線上共筆文件](https://paper.dropbox.com/doc/Vue-ADvo0tRHmXqoJGIfAs4N9)
    * [免費影片回顧](https://www.youtube.com/watch?v=mEjVUt_rsKs)
    * [範例程式碼](https://github.com/hexschool/hexschool_vuex_demo)