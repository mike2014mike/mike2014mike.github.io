---
layout:     post
title:      SEO - robots.txt製作
date:       2018-07-26 10:37:19
author:     Mike Chen
summary:    
categories: SEO
thumbnail:  sitemap
tags:
 - SEO
 - robots.txt
---

## 參考

* [robots.txt用途與使用範例教學](https://www.awoo.com.tw/blog/2018/03/robotstxt-crawl/)
* [Google Robots.txt 規範](https://developers.google.com/search/reference/robots_txt?hl=zh-tw)

## 參數

* User-agent => 定義下述規則對哪些搜尋引擎生效，即是對象。
* Disallow => 指定哪些目錄或檔案類型不想被檢索，需指名路徑，否則將會被忽略。
* Allow => 指定哪些目錄或檔案類型可能被檢索，需指名路徑，否則將會被忽略。
* Sitemap => 指定網站內的sitemap檔案放置位置，需使用絕對路徑。


## 應用

1. 允許所有搜尋引擎檢索所有內容(通常建議使用)

```
User-agent: *
Disallow:
```

2. 拒絕所有搜尋引擎檢索所有內容(正式環境請避免使用)

```
User-agent: *
Disallow: /
```

3. 拒絕Google搜圖的爬蟲檢索/images/底下所有內容

```
User-agent: Googlebot-image
Disallow:/images/
```

4. [萬用字元]拒絕所有搜尋引擎檢索網站內png為副檔名的圖檔

```
User-agent: *
Disallow: *.png$
```

5. [萬用字元]拒絕Bing搜尋引擎檢索網站內/wp-admin目錄底下所有內容及網站內開頭為test的所有檔名

```
User-agent: bingbot
Disallow: /wp-admin/
Disallow: ^test*
```

## 本站robots.txt

```
User-agent: *
Disallow:
Sitemap: https://mike2014mike.github.io/sitemap.xml
```

## 測試

* [Google Search Console](https://www.google.com/webmasters/tools/home?hl=zh-TW)
* [Bing Webmaster](https://www.bing.com/toolbox/webmaster)

## 注意事項

* robots.txt的檔案命名方式必須為 `全小寫` 字母（ `robots.txt` ），請記得加上 `s` ，若命名為Robots.txt或robots.TXT等皆為不正確的命名方式，將會被搜索引擎的爬蟲忽略。
* robots.txt檔案只能放在網站的 `根目錄` 底下，若非根目錄則不會被發現。若網址如果是 https://www.abc.com/blog/index.html，需要能使用 https://www.abc.com/robots.txt 看到才行。