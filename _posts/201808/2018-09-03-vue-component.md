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
* `<script type="text/x-template" id="component"></script>` 的寫法也可以換成 `<template id="component"></template>`

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


#### emit event 傳值到父層

* 透過 `this.$parent.$emit('事件名稱', 要傳的值)` 傳值給父層。

* 父層在 mounted 中加入監聽 `this.$on('事件名稱', 要執行的程式);`，該 function(value) 會得到一個由子層傳來的 value。

```html

<div id="app">
  <div class="component">
    <span>Parent: {{msg}}</span>
    <input type="text" v-model="msg">
  </div>
  <my-component :parent-msg="msg"></my-component>
</div>

<script type="text/x-template" id="my-component">
  <div>
    <div class="component">
      <span>Child: {{parentMsg}}</span>
      <input type="text" v-model="message">
      <button @click="emit2Parent">更新到父層</button>
    </div>
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
    parentMsg: String
  },
  data: function(){
    return {
      message: this.parentMsg
    }
  },
  methods:{
    emit2Parent(){
      this.$parent.$emit('update', this.message);
    }
  }
})

var vm = new Vue({
  el: '#app',
  data:{
    msg: 'This is a parent msg!'
  },
  methods:{
    update(value){
      this.msg = value;
    }
  },
  mounted(){
    this.$on('update', this.update);
  }
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - emit event' src='//codepen.io/mikechen2017/embed/MqmZRY/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/MqmZRY/'>Vue Component - emit event</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### 子層可透過 Event Bus 互傳值

* 舊版 Vue 如果子層要互傳值，必須先傳回父層，再由父層傳到另一個子層。
* 新版 Vue 可利用 Event Bus，讓子層不需透過父層互相傳值。
* Event Bus 建立方式： `var bus = new Vue();`，無須帶入任何參數。
* 在子層一 `bus.$emit('事件名稱', 要傳的值);`。
* 在子層二的 created 中監聽 `bus.$on('事件名稱', 要執行的程式)`。
* Event Bus 可以有很多個，要注意在同一個 Event Bus 中註冊的事件名稱是否重複。

```html

<div id="app">
  
  <my-component1></my-component1>
  <my-component2></my-component2>
</div>

<script type="text/x-template" id="my-component1">
  <div class="component">
    <span>Child1:</span>
    <input type="text" v-model="message">
    <button @click="emit2Child2">更新Child2</button>
  </div>
</script>

<script type="text/x-template" id="my-component2">
  <div class="component">
    <span>Child2:</span>
    <input type="text" v-model="message">
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
// Event Bus
var bus = new Vue();

Vue.component('my-component1',{
  template:'#my-component1',
  data: function(){
    return {
      message: '這是 Child1 的預設內容'
    }
  },
  methods:{
    emit2Child2(){
      bus.$emit('update', this.message);
    }
  }
})


Vue.component('my-component2',{
  template:'#my-component2',
  data: function(){
    return {
      message: '這是 Child2 的預設內容'
    }
  },
  created(){
    // var self = this;
    // 注意這裡是 callback function， this 不會是原本的 this。
    // 除了在外部另外宣告外，也可使用箭頭函式避掉。
    // bus.$on('update', function(value){
    //   self.message = value;
    // })
    bus.$on('update', (value)=>{
      this.message = value;
    })
  }
})
// 父層
var vm = new Vue({
  el: '#app'
})
```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - Event Bus(子層互傳值)' src='//codepen.io/mikechen2017/embed/zJweWd/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/zJweWd/'>Vue Component - Event Bus(子層互傳值)</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### 利用 :is 切換顯示的元件 + keep-alive
* 切換元件預設無法保留在該元件操作的狀態，可透過在元件外面加上 `keep-alive` 標籤解決，不會再次執行 `created` 階段。

```html

<div id="app">
  <button @click="currentView = 'view1'">View1</button>
  <button @click="currentView = 'view2'">View2</button>
  <button @click="currentView = 'view3'">View3</button>
  <keep-alive>
    <my-component :is="currentView"></my-component>
  </keep-alive>  
</div>

<script type="text/x-template" id="view1">
  <div class="component">
    <h1>View 1</h1>
    <input type="text" placeholder="輸入文字，並切換 View 試試！">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cumque eius illo officia consequuntur similique illum sint assumenda harum placeat doloremque blanditiis earum, quaerat minus, fugiat voluptate, nesciunt sit enim!</p>    
    <img src="http://lorempixel.com/400/200/sports/" alt="">
  </div>
</script>

<script type="text/x-template" id="view2">
  <div class="component">
    <h1>View 2</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cumque eius illo officia consequuntur similique illum sint assumenda harum placeat doloremque blanditiis earum, quaerat minus, fugiat voluptate, nesciunt sit enim!</p>    
    <img src="http://lorempixel.com/400/200/sports/" alt="">
  </div>
</script>

<script type="text/x-template" id="view3">
  <div class="component">
    <h1>View 3</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cumque eius illo officia consequuntur similique illum sint assumenda harum placeat doloremque blanditiis earum, quaerat minus, fugiat voluptate, nesciunt sit enim!</p>    
    <img src="http://lorempixel.com/400/200/sports/" alt="">
  </div>
</script>


```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
  >img
    width: 100%
```

```js
Vue.component('view1',{
  template:'#view1'
})

Vue.component('view2',{
  template:'#view2'
})

Vue.component('view3',{
  template:'#view3'
})

// 父層
var vm = new Vue({
  el: '#app',
  data:{
    currentView: 'view1'
  }
})

```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - :is 切換顯示的元件' src='//codepen.io/mikechen2017/embed/RYVdGb/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/RYVdGb/'>Vue Component - :is 切換顯示的元件</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>

#### 使用 slot 在元件挖洞填入

* 原本在元件的 Tag 中輸入任何文字都不會被編譯的，但如果在元件中某處放入 slot 的 Tag，就可以被傳入。
* 可以有多個 slot ，只要給它們對應的 name 即可。

```html

<div id="app">
  <my-component>
    <h1 slot="title">用 slot 挖洞</h1>
    <p slot="subtitle">副標題被我替換掉了，哈哈哈...</p>
  </my-component>
</div>

<template id="my-component">
  <div class="component">
    <slot name="title">這邊放標題文字</slot>
    <slot name="subtitle">這邊放副標題</slot>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cumque eius illo officia consequuntur similique illum sint assumenda harum placeat doloremque blanditiis earum, quaerat minus, fugiat voluptate, nesciunt sit enim!</p>    
    <img src="http://lorempixel.com/400/200/sports/" alt="">
  </div>
</template>


```

```sass
.component
  border: 1px solid #000
  padding: 10px
  margin: 10px
  color: blue
  >img
    width: 100%
```

```js
Vue.component('my-component',{
  template:'#my-component'
})

// 父層
var vm = new Vue({
  el: '#app',
  data:{
    
  }
})


```

<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='Vue Component - 用 slot 挖洞' src='//codepen.io/mikechen2017/embed/VGbNzP/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/VGbNzP/'>Vue Component - 用 slot 挖洞</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


#### http-vue-loader
* 元件可以寫成單一 vue 檔，但通常需要使用 Webpack + Vue loader 做編譯。
* 現在 vue 檔可以直接透過 `http-vue-loader` 套件進行編譯，方便測試。
* 直接引入 `<script src="https://unpkg.com/http-vue-loader"></script>` ，透過 `httpVueLoader('hello.vue')` 即可。
* 正式上線的網站，建議還是以 Webpack + Vue loader 做編譯。
* 在 vue 裡頭設定 style 如果加上 scoped，表示該樣式設定就僅限於該元件使用，就算名稱與父層或其他元件相同也不會互相汙染。

```html
<div id="app">
  <my-component></my-component>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  components:{
    'my-component': httpVueLoader('https://mike2014mike.github.io/sample/2018-09-04/hello.vue')
  }
})
```


<div class="iframe-rwd">
<iframe height='265' scrolling='no' title='http-vue-loader sample' src='//codepen.io/mikechen2017/embed/wEdbBN/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/wEdbBN/'>http-vue-loader sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
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

* [不需編譯也能載入 .vue 元件檔](https://kuro.tw/posts/2017/07/11/%E4%B8%8D%E9%9C%80%E7%B7%A8%E8%AD%AF%E4%B9%9F%E8%83%BD%E8%BC%89%E5%85%A5-vue-%E5%85%83%E4%BB%B6%E6%AA%94-%E4%BD%BF%E7%94%A8-http-vue-loader/)