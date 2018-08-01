---
layout:     post
title:      ASP.NET PostBack 畫面會往上跳解法
date:       2018-08-23 09:37:19
author:     Mike Chen
summary:    
categories: ASP.NET
thumbnail:  browser
tags:
 - ASP.NET
 - PostBack
---

### 問題

按按鈕後，會因為 PostBack 的關係，導致畫面會往上跳。

### 解法

* ASP.NET在Page指示詞中加入下面這段，就可以達到固定在原本位置的效果

```
MaintainScrollPositionOnPostback ="true"
```

### MIS2000老師示範

<div class="videoWrapper">
    <iframe src="https://www.youtube.com/embed/jsYSIbqJC_E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>