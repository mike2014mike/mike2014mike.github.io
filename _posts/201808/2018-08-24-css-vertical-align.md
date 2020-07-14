---
layout:     post
title:      CSS 垂直置中 8 種方法
date:       2018-08-24 09:37:19
author:     Mike Chen
summary:    
categories: CSS
thumbnail:  css3
tags:
 - css
 - 垂直置中
---

CSS 的垂直置中一直是讓工程師很頭大的問題，Amos 大神列出了 23 種方法，但這邊只列出幾個我比較常用的 8 種方法，應該足夠應付大多數情況了。

1. Line-height 
> 時機：單行文字垂直置中技巧

一個 div ，不設定 height (高度)，而是設定 line-height，且 line-height 要大於 font-size，就可以達到文字垂直置中效果，水平置中使用 text-align: center 即可。而範例中 div 本身的水平置中是使用 margin: auto。


```html
<h2>1.line-height 單行</h2>
<div class="content">【三字經】 作者：王應麟　南宋</div>
```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.content{
  width: 400px;
  background: #ccc;
  line-height:100px;
	text-align: center;
	margin: auto;
}
```


<div class="iframe-rwd">
    <iframe scrolling='no' title='1.line-height 單行垂直置中' src='//codepen.io/mikechen2017/embed/QVbxEL/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/QVbxEL/'>1.line-height 單行垂直置中</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>

2. Display: table-cell
> 時機：多物件/多行的垂直置中技巧

要夾三層，最外層 display: table，設定寬高；中間層 display: table-cell，並設定 vertical-align: middle;(垂直置中)；最內層 content。


```html
<h2>2.display: table-cell</h2>
<div class="box-table">
	<div class="box-table-cell">
		<div class="content">
			<p class="title">【三字經】</p>
			<p>人之初，性本善；性相近，習相遠。</p>
			<p>苟不教，性乃遷；教之道，貴以專。</p>
			<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
			<p>竇燕山，有義方；教五子，名俱揚。</p>
			<p>養不教，父之過；教不嚴，師之惰。</p>
		</div>
	</div>
</div>

```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box-table{
  width: 500px;
  height: 250px;	
	display: table;  
	border: 1px solid #aaa;	
	margin: auto;
}
.box-table-cell{  
	display: table-cell;
  vertical-align: middle;	
}
.content{
  width: 400px;
  background: #ccc;
	text-align: center;
  margin: auto;
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='2.display: table-cell 垂直置中方式' src='//codepen.io/mikechen2017/embed/KxpBER/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/KxpBER/'>2.display: table-cell 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>



3. absolute + translate(-50%, -50%) 垂直置中方式
> 時機：多物件/多行的垂直置中技巧

最方便手法，先將左上角絕對定位到 top:50%; left: 50%;，也就是中心點的位置，再使用 CCS3 的 transform: translate(-50%, -50%); 根據物件本身的寬高的一半偏移回去。


```html
<h2>3.absolute + translate(-50%, -50%)</h2>
<div class="box">
  <div class="content">
    <p class="title">【三字經】</p>
		<p>人之初，性本善；性相近，習相遠。</p>
		<p>苟不教，性乃遷；教之道，貴以專。</p>
		<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
		<p>竇燕山，有義方；教五子，名俱揚。</p>
		<p>養不教，父之過；教不嚴，師之惰。</p>
  </div>
</div>
```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box{
  width: 500px;
  height: 250px;
  border: 1px solid #aaa;
  margin: auto;
  position: relative;
}
.content{
  width: 400px;
  background: #ccc;
  position: absolute;
  top:50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  /*
  transform: translate(x (left),y (top));
  transform:translateX() 表示水平位移 ;
  transform:translateY() 表示垂直位移 ;
  */
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='3.absolute + translate(-50%, -50%) 垂直置中方式' src='//codepen.io/mikechen2017/embed/jvPpWm/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/jvPpWm/'>4.absolute + translate(-50%, -50%) 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>


4. positon: absolute + margin: auto
> 時機：多物件/多行的垂直置中技巧

缺點是定位物件必須有固定的寬高（px 或 %）才能正常置中。


```html
<h2>4.absolute + margin: auto</h2>
<div class="box">
  <div class="content">
    <p class="title">【三字經】</p>
		<p>人之初，性本善；性相近，習相遠。</p>
		<p>苟不教，性乃遷；教之道，貴以專。</p>
		<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
		<p>竇燕山，有義方；教五子，名俱揚。</p>
		<p>養不教，父之過；教不嚴，師之惰。</p>
  </div>
</div>
```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box{
  width: 500px;
  height: 400px;
  border: 1px solid #aaa;
  margin: auto;
  position: relative;
}
.content{
  width: 80%;
  background: #ccc;
  height: 30%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
	text-align: center;
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='4.absolute + margin: auto 垂直置中方式' src='//codepen.io/mikechen2017/embed/qMdKzJ/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/qMdKzJ/'>5.absolute + margin: auto 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>


5. Flex + align-items 垂直置中方式
> 時機：多物件/多行的垂直置中技巧

使用 Flex 可以超容易做到水平垂直置中，只要使用justify-content: center; 和 align-items: center; 即可。


```html
<h2>5.Flex + align-items</h2>
<div class="box">
  <div class="content">
    <p class="title">【三字經】</p>
		<p>人之初，性本善；性相近，習相遠。</p>
		<p>苟不教，性乃遷；教之道，貴以專。</p>
		<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
		<p>竇燕山，有義方；教五子，名俱揚。</p>
		<p>養不教，父之過；教不嚴，師之惰。</p>
  </div>
</div>
```

```css
h2{
  text-align: center;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box{
  width: 500px;
  height: 250px;
  border: 1px solid #aaa;
  margin: auto;
	display: flex;
  justify-content: center;
  align-items: center; 
}
.content{
  width: 400px;
  background: #ccc;
	text-align: center;
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='5.Flex + align-items 垂直置中方式' src='//codepen.io/mikechen2017/embed/MqwBJr/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/MqwBJr/'>5.Flex + align-items 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>


6. Flex/Grid + margin 垂直置中方式
> 時機：多物件/多行的垂直置中技巧

同樣使用 Flex/Grid，但這次只要在父層物件設定 display: flex/grid，接著在需要垂直置中的物件上設定 margin: auto 即可自動置中囉。

```html
<h2>6.Flex/Grid + margin 垂直置中方式</h2>
<div class="box">
  <div class="content">
    <p class="title">【三字經】</p>
		<p>人之初，性本善；性相近，習相遠。</p>
		<p>苟不教，性乃遷；教之道，貴以專。</p>
		<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
		<p>竇燕山，有義方；教五子，名俱揚。</p>
		<p>養不教，父之過；教不嚴，師之惰。</p>
  </div>
</div>
```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box{
  width: 500px;
  height: 250px;
  border: 1px solid #aaa;
  margin: auto;
	display: flex;
/* 	display: grid; */
}
.content{
  width: 400px;
  background: #ccc;
  margin: auto;
	text-align: center;
}
```


<div class="iframe-rwd">
    <iframe scrolling='no' title='6.Flex + margin 垂直置中方式' src='//codepen.io/mikechen2017/embed/PdqBKz/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/PdqBKz/'>6.Flex + margin 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>

7. Grid + template
> 時機：多物件/多行的垂直置中技巧

Grid 最令人驚豔的就是這個 template 的功能了，簡直就是把區塊當畫布在使用一般，我們僅需要把樣板設定成三列，就能搞定垂直置中啦。

```html
<h2>7.Grid + template</h2>
<div class="box">
  <div class="content">
    <p class="title">【三字經】</p>
		<p>人之初，性本善；性相近，習相遠。</p>
		<p>苟不教，性乃遷；教之道，貴以專。</p>
		<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
		<p>竇燕山，有義方；教五子，名俱揚。</p>
		<p>養不教，父之過；教不嚴，師之惰。</p>
  </div>
</div>
```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box{
  width: 500px;
  height: 250px;
  border: 1px solid #aaa;
  margin: auto;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: 
    '. . .'
    '. mike .'
    '. . .';
}
.content{
  width: 400px;
  background: #ccc;
	text-align: center;
  grid-area: mike;
}
```


<div class="iframe-rwd">
    <iframe scrolling='no' title='7.Grid + template 垂直置中方式' src='//codepen.io/mikechen2017/embed/RYPBQW/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/RYPBQW/'>7.Grid + template 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>

8. Grid + place-items/place-content
> 時機：多物件/多行的垂直置中技巧

place-items 是 align-items 與 justify-items 的縮寫；place-content 是 align-content 與 justify-content 的縮寫。

```html
<h2>8.Grid + place-items</h2>
<div class="box">
  <div class="content">
    <p class="title">【三字經】</p>
		<p>人之初，性本善；性相近，習相遠。</p>
		<p>苟不教，性乃遷；教之道，貴以專。</p>
		<p>昔孟母，擇鄰處；子不學，斷機杼。</p>
		<p>竇燕山，有義方；教五子，名俱揚。</p>
		<p>養不教，父之過；教不嚴，師之惰。</p>
  </div>
</div>
```

```css
h2{
  text-align: center;
	margin-bottom: 20px;
}
.title{
	border-bottom: 1px solid #fff;
	padding: 5px;
}
.box{
  width: 500px;
  height: 250px;
  border: 1px solid #aaa;
  margin: auto;
  display: grid;
  place-items: center;
/* 	place-content: center; */
}
.content{
  width: 400px;
  background: #ccc;
	text-align: center
}
```

<div class="iframe-rwd">
    <iframe scrolling='no' title='8.Grid + place-items 垂直置中方式' src='//codepen.io/mikechen2017/embed/GXJBYj/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/GXJBYj/'>8.Grid + place-items 垂直置中方式</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</div>




### 參考
* [CSS垂直置中技巧，我只會23個，你會幾個？](http://csscoke.com/2018/08/21/css-vertical-align/)