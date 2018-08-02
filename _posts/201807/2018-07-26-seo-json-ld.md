---
layout:     post
title:      SEO - 結構化資料 JSON-LD
date:       2018-07-26 10:37:19
author:     Mike Chen
summary:    
categories: SEO
thumbnail:  sitemap
tags:
 - SEO
 - JSON-LD
---

## 參考

* [教你如何使用 Google Search 結構化資料](http://wayne265265.pixnet.net/blog/post/111646157-%E6%95%99%E4%BD%A0%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-google-search-%E7%B5%90%E6%A7%8B%E5%8C%96%E8%B3%87%E6%96%99)
* [schema.org](https://schema.org/docs/gs.html)

## 結構化資料
常見的結構化資料方式包含 Microdata 與 JSON-LD 等。

## Microdata 屬性

* itemscope : 將html內的attribute定義為item
* itemprop : 描述item的屬性
* itemtype : 定義item的種類(在 [schema.org](http://schema.org/) 中有各種類的介紹)

```html
<section itemscope itemtype="http://schema.org/Person">
  Hello, my name is
  <span itemprop="name">John Doe</span>,
  I am a
  <span itemprop="jobTitle">Graduate research assistant</span>
  at the
  <span itemprop="affiliation">University of Dreams</span>
  My friends call me
  <span itemprop="additionalName">Johnny</span>
  You can visit my homepage at
  <a href="http://www.example.com.com" itemprop="url">www.example.com</a>
  <section itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    I live at
    <span itemprop="streetAddress">1234 Peach Drive</span>
    <span itemprop="addressLocality">Warner Robins</span>
    <span itemprop="addressRegion">Georgia</span>.
  </section>
</section>
```

## JSON-LD
相同範例，以 JSON-LD 來結構化資料！只要在html的head內插入下方script即可！

```javascript
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Graduate research assistant",
  "affiliation": "University of Dreams",
  "additionalName": "Johnny",
  "url": "http://www.example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Peach Drive",
    "addressLocality": "Wonderland",
    "addressRegion": "Georgia"
  }
}
</script>
```

> JSON-LD 設定相對容易許多

## 測試

* [結構化測試工具](https://search.google.com/structured-data/testing-tool/u/0/)

