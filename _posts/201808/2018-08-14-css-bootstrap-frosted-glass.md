---
layout:     post
title:      用 Bootstrap 做出毛玻璃效果
date:       2018-08-14 09:37:19
author:     Mike Chen
summary:    
categories: css
thumbnail:  css3
tags:
 - css
 - Bootstrap
---

### 筆記

* 參考影片中是以 `npm` 下載 Bootstrap 後，sass 以 `@import` 的方式引入。

* 若需自訂參數，將 `_variables.scss` 複製一份到其他目錄下做修改。

```scss
@import '../node_modules/bootstrap/scss/functions';
@import 'helpers/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
```

* scss 檔名前 `有底線者` ，不會被編譯，可作為 import 使用。

* _variables.scss 中的 `$theme-colors` 可自訂顏色。

* body 設定滿版

```scss
body {
  height: 100vh;
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a98ac47048f530b6d587279d52c13ab7&auto=format&fit=crop&w=1936&q=80);
  background-repeat: no-repeat;
}
```

* 利用 Bootstrap 的 `d-flex` 設定水平垂直置中 `justify-content-center` (水平) 和 `align-items-center` (垂直)

```html
<body class="d-flex justify-content-center align-items-center">
```

* 新增一個 custom-card 的 class 去覆寫 Bootstrap 的 card。

```scss
.custom-card {
  background-color: transparent; //背景透明
  border: none; //移除邊框
  box-shadow: 0px 5px 35px rgba(black, 0.5);
  border-radius: 10px;
  min-height: 50%;
  position: relative;
}
```

* html 中在 div.card 裡面再加入一個 div.card-bg，設定填滿整個 card。

```scss
.card-bg {  
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  //以上是設定填滿
  z-index: -1; //才不會擋到 card 的文字和按鈕
  border-radius: 10px;
  overflow: hidden;  //將超出外框的毛玻璃切除
}
```

* 增加偽元素

```scss
.card-bg:after {
  content: '';  
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  //以上設定 -20px 是為了讓毛玻璃向外擴一點，filter: blur(10px) 如果越大，就要外擴更大。
  background-image: url(https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a98ac47048f530b6d587279d52c13ab7&auto=format&fit=crop&w=1936&q=80);
  background-repeat: no-repeat;
  filter: blur(10px); //毛玻璃效果
  background-attachment: fixed; //以 body 為基準定位，沒設定就會以 card 定位，手機瀏覽器可能不支援
}
```

* 在 div.card-bg 下方加入一個 Bootstrap 的 Navbar

* class 移除 bg-light 就會只剩下文字

* 前面 .custom-card 的 background-color 可稍作調整

```scss
.custom-card {
  background-color: rgba(black, .3); //使用 sass 才能直接填入色彩名稱，否則需要填入 R G B A
  border: none; //移除邊框
  box-shadow: 0px 5px 35px rgba(black, 0.5);
  border-radius: 10px;
  min-height: 50%;
  position: relative;
}
```

* 兩欄垂直置中

```html
<div class="row">
	<div class="col-6 text-dark d-flex align-items-center">
		<div>
        <!-- 這邊多加一個 div 是防止 flex 水平排列的特性 -->
			<h2>Hexschool have a good time.</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto facere eligendi sit non ea atque possimus
				ab, placeat fugit minima! Expedita vero asperiores ducimus obcaecati cupiditate aliquam saepe magnam.</p>
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
				<div class="input-group-append">
					<button class="btn btn-primary" type="button">Button</button>
				</div>
			</div>
		</div>
	</div>
	<div class="col-6">
		<img src="https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fbcb7ac5274991bf1522ac40ee9233d&auto=format&fit=crop&w=1268&q=80"
		 class="img-fluid" alt="">
         <!-- 將圖片控制在欄位範圍內 `class="img-fluid"` -->
	</div>
</div>
```

* VS Code 快速整理程式碼 `Alt + Shift + F`

* input 群組做出圓角

```scss
.border-radius{
  border-radius: 50px;
}
```

```html
<div class="row">
	<div class="col-6 text-dark d-flex align-items-center">
		<div>
			<h2>Hexschool have a good time.</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto facere eligendi sit non ea atque possimus
				ab, placeat fugit minima! Expedita vero asperiores ducimus obcaecati cupiditate aliquam saepe magnam.</p>
			<div class="input-group mb-3">
                <!-- input 的 class 加入 border-radius -->
				<input type="text" class="form-control border-radius" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
				<div class="input-group-append">
                    <!-- button 的 class 加入 border-radius -->
					<button class="btn btn-primary border-radius" type="button">Button</button>
				</div>
			</div>
		</div>
	</div>
	<div class="col-6">
		<img src="https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fbcb7ac5274991bf1522ac40ee9233d&auto=format&fit=crop&w=1268&q=80"
		 class="img-fluid" alt="">
	</div>
</div>
```

### 裝飾幾何圖形

```html
<span class="rectangle"></span>
<span class="circle"></span>
<svg class="triangle" width="80" height="80">
  <!-- <polygon class="triangle-polygon" point="40,0 80,80 0,80"></polygon> -->
  <!-- 往內縮 15px -->
  <polygon class="triangle-polygon" point="40,15 65,65 15,65"></polygon>
</svg>
```

```scss
$pink: #fe6cb9;
$blue: #6cdafe;
$purple: #9c70ff;

$size: 80px;
$border-width: 15px;

.rectangle, .circle, .triangle{
  display: block;
}

.rectangle {
  width: $size;
  height: $size;
  border: $border-width solid $purple;
  //box-shadow: 5px 5px 10px $purple, 5px 5px 10px $purple inset;
  filter: drop-shadow(5px 5px 10px $purple);
}

.circle {
  width: $size;
  height: $size;
  border: $border-width solid $pink;
  border-radius: 100%;
  filter: drop-shadow(5px 5px 10px $pink);
}

.triangle {
  filter: drop-shadow(5px 5px 10px $blue);
}

.triangle-polygon {
  fill: transparent;
  stroke: $blue;
  stroke-width: $border-width;
}

```


### 實際玩玩
<div class="iframe-rwd">
    <iframe scrolling='no' title='Frosted glass 毛玻璃特效' src='//codepen.io/mikechen2017/embed/JBzOYZ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/JBzOYZ/'>Frosted glass 毛玻璃特效</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>


### 參考
* [直播切版 - 純 CSS 特效分享 (毛玻璃、幾何線框、Bootstrap 自訂變數)](https://www.youtube.com/watch?v=SmFxwLRSulM&t=8s)
* [Bootstrap 4 繁體中文手冊 (六角學院譯)](https://bootstrap.hexschool.com/)
* [Unsplash 圖庫](https://unsplash.com/)
* [WebFrontendWorkshop](https://wcc723.github.io/WorkShop-gh-pages/)