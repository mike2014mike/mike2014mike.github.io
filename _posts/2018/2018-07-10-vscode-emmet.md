---
layout:     post
title:      VSCode內建Emmet用法
date:       2018-07-10 09:37:19
author:     Mike Chen
summary:    VSCode內建Emmet用法
categories: Work
thumbnail:  vscode
tags:
 - VSCode
 - Emmet
---

一、輸入

```
ul>li*6>a[#]{link}
```

按下tab，就會變成

```
<ul>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
</ul>
```


二、輸入

```
ul.album>li.pic*2>a[href="#"]>img[src="http://fakeimg.pl/200x200/113300/ffffff/?text=image" alt="mike"]
```

按下tab，就會變成

```
<ul class="album">
    <li class="pic"><a href="#"><img src="http://fakeimg.pl/200x200/113300/ffffff/?text=image" alt="mike"></a></li>
    <li class="pic"><a href="#"><img src="http://fakeimg.pl/200x200/113300/ffffff/?text=image" alt="mike"></a></li>
</ul>
```



三、輸入

```
#wrap>(header>h1+ul>li*5>a)+(main>div*3)+(footer>p)
```

按下tab，就會變成

```
<div id="wrap">
    <header>
        <h1></h1>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <main>
        <div></div>
        <div></div>
        <div></div>
    </main>
    <footer>
        <p></p>
    </footer>
</div>
```