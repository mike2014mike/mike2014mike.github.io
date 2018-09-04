---
layout:     post
title:      Vue Component(元件) & Template(樣板)
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

#### 區域註冊 Component

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


#### 全域註冊 Component

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


#### Data 要用 function 來 return

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


#### Script Template

```html
<div id="app">
  <my-component></my-component>
</div>

<script type="text/x-template" id="my-component">
<!-- 根結點只能有一個 div -->
  <div>
    <div class="component">1. {{msg}}</div>
    <div class="component">2. {{msg}}</div>
    <div class="component">3. {{msg}}</div>
    <div class="component">4. {{msg}}</div>
  </div>
  
</script>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
```

```js
//全域 component
Vue.component('my-component',{
  template:'#my-component',
  data: function(){
    return {
      msg: 'This is a component of Vue! @component'
    }
  }
})

var vm = new Vue({
  el: '#app'
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - x-template' src='//codepen.io/mikechen2017/embed/QVvbxE/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/QVvbxE/'>Vue Component - x-template</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### Render Function: Vue 自己會 render，但也可以自己寫

```html
<div id="app">
  <my-component></my-component>
</div>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
  
```

```js
//全域 component
Vue.component('my-component',{
  // template:'<div class="component">1. {{msg}}</div>',
  render: function(createElement){
    return createElement('div',{
      class: 'component'
    }, [this.msg])
  },
  data: function(){
    return {
      msg: 'This is a component of Vue! @component'
    }
  }
})

var vm = new Vue({
  el: '#app'
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - render function' src='//codepen.io/mikechen2017/embed/EemVae/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/EemVae/'>Vue Component - render function</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### 追蹤物件變化 Object.defineProperty
![Object.defineProperty](https://i.imgur.com/kCVsFHy.png)

#### props 傳值基本用法

```html
<div id="app">
<!--   注意：如果這裡沒用 v-bind: ，將會直接把 "msg" 當作字串傳入元件 -->
  <my-component v-bind:parent-msg="msg"></my-component>
</div>

<script type="text/x-template" id="my-component">
  <div>
    <div class="component parent">parentMsg: {{parentMsg}}</div>
    <div class="component">childMsg: {{msg}}</div>
  </div>  
</script>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
  
.parent
  color: red
```

```js
//全域 component
Vue.component('my-component',{
  template:'#my-component',
  // 在 JS 裡面 parent-msg 是不合法的變數名稱，需改用駝峰式命名 parentMsg
  props: ['parentMsg'],
  data: function(){
    return {
      msg: 'This is a child msg!'
    }
  }
})

var vm = new Vue({
  el: '#app',
  data:{
    msg: 'This is a parent msg!'
  }
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - props' src='//codepen.io/mikechen2017/embed/zJwmww/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/zJwmww/'>Vue Component - props</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### props 型別驗證

```html

<div id="app">
<!--   注意：如果這裡沒用 v-bind: ，將會直接把 "msg" 當作字串傳入元件 -->
  <my-component :parent-msg="msg" :prop-a="pa" 
                :prop-b="pb" :prop-c="pc"
                :prop-d="pd" :prop-e="pe"
                :prop-f="pf">    
  </my-component>
</div>

<script type="text/x-template" id="my-component">
  <div>
    <div class="component">parentMsg: {{propA}}</div>
    <div class="component">propB: {{propB}}</div>
    <div class="component">propC: {{propC}}</div>
    <div class="component">propD: {{propD}}</div>
    <div class="component">propE: {{propE}}</div>
    <div class="component">propF: {{propF}}</div>
  </div>  
</script>
```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
```

```js
//全域 component
Vue.component('my-component',{
  template:'#my-component',
  props: {
    parentMsg: null, // null 表示不檢查型別
    propA: Number, // 限定數字
    propB: [String, Number], // 可以多種型別
    propC: {
      type: String,
      required: true // 必要欄位
    },
    propD: {
      type: Number,
      default: 100 // 預設值
    },
    propE: {
      type: Object,
      default: function(){
        return {
          message: 'Hello'
        }
      }
    },
    propF: {
      // 自訂驗證條件
      validator: function(value){
        return value > 10
      }
    },
  },
  data: function(){
    return {
      msg: 'This is a child msg!'
    }
  }
})

var vm = new Vue({
  el: '#app',
  data:{
    msg: 'This is a parent msg!',
    pa: 123,
    pb: 'Mike',
    pc: 'Nicole',
    pd: 10,
    pe: {
      message: 'Hi'
    },
    pf: 100
  }
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - props validation(型別驗證)' src='//codepen.io/mikechen2017/embed/QVvZBy/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/QVvZBy/'>Vue Component - props validation(型別驗證)</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
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