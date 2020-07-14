---
layout:     post
title:      Google表單客製化介面
date:       2018-07-27 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - javascript
 - Vue
---


## 建置Google表單
沿用之前Google APP Script API我做的一個簡單的[投票頁面](https://docs.google.com/forms/d/1fzW2SGMgQX7RXzfSmk_xd6Jf6XucEtwuHJDef8NMtNs/viewform?edit_requested=true)，僅做 demo 用，並沒真的抽獎活動。<br>

## 開始客製化
* 檢視原始碼 > 搜尋 `entry.`
* 找到投票項目的 `entry.` ，記住後面的ID，這邊我們找到 `entry.482109751`，待會會用到。
![entry](https://i.imgur.com/TJaADO7.png)

* 搜尋 `formResponse` 或者 `form action`，這裡我們找到

```
https://docs.google.com/forms/d/e/1FAIpQLSdv3XxvzqgA8MzYToxevaRyD1PK84RqQ0WjIgqm7CQMLzAfdQ/formResponse
```

![formResponse](https://i.imgur.com/VO4JQdA.png)

* 在HTML刻出我們想要的畫面，假設我都只要radio button，那記得所有的name都給他剛剛找到的entry ID `entry.482109751`

```html
<div id="app">
  <form ref="formElement" @submit.prevent="response">
    <fieldset>
      <legend>請選擇您喜愛的熱賣商品</legend>
      <input type="radio" name="entry.482109751" value="明治巧克力">明治巧克力</input>
      <input type="radio" name="entry.482109751" value="金莎巧克力">金莎巧克力</input>
      <input type="radio" name="entry.482109751" value="七七乳加巧克力">七七乳加巧克力</input>
      <input type="radio" name="entry.482109751" value="雷神巧克力">雷神巧克力</input>
    </fieldset>
    <button>Submit</button>
    
  </form>
</div>
```

* 加上一點CSS

```css
html {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-family: Microsoft JhengHei, Arial, Helvetica, sans-serif;
}

div:first-of-type{
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label{
  margin-right: 15px;
  line-height: 32px;
}

input{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  border-radius: 50%;
  width: 16px;
  height: 16px;
  
  border: 2px solid #999;
  transition: 0.2s all linear;
  outline: none;
  margin-right: 5px;
  
  position: relative;
  top: 4px;
}

input:checked{
  border: 6px solid black;
}

button,legend{
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus{
  color: #999;
}

button:active{
  background-color: #fff;
  color: #000;
  outline: 1px solid black;
}

```


* JS的部分，在用axios做post送出的url，設定為剛剛找到的 `formResponse` ，就大功告成啦！如此就可以擺脫Google Form預設的版型囉！

```javascript
var vm = new Vue({
  el: '#app',
  data(){
    return{
      
    }
  },
  methods:{
    response(){
      var self = this;
      var formElement = self.$refs.formElement;
      var formData = new FormData(formElement);
      var url = 'https://docs.google.com/forms/d/e/1FAIpQLSdv3XxvzqgA8MzYToxevaRyD1PK84RqQ0WjIgqm7CQMLzAfdQ/formResponse';
      axios.post(url, formData).then(function(response){
        console.log(response);
      })
    }
  }
})
```


CodePen
<div class="iframe-rwd">
    <iframe scrolling='no' title='Customize Google Form' src='//codepen.io/mikechen2017/embed/WJdVzv/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/WJdVzv/'>Customize Google Form</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>
