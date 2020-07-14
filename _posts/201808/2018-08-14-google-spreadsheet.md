---
layout:     post
title:      用 Google 試算表爬資料
date:       2018-08-14 09:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - JavaScript
---


### Google 試算表資料爬取工具

* importDATA – 讀取網路上的 CSV / TSV 檔
* importHTML — 讀取網頁表格
* importXML — 讀取任意網頁內容
* 使用 Magic JSON 匯入 json 檔


### importDATA 讀取 CSV 檔

* [新北市各區人數統計表](http://mike2014mike.github.io/sample/2018-08-14/new-taipei-people.csv) 是從政府開放平台的 [這裡](https://data.gov.tw/dataset/26555) 備份下來的，以免被官方移除，範例就跑不動了。

* 在 Google 試算表中任一儲存格輸入：

```js
=importDATA("http://mike2014mike.github.io/sample/2018-08-14/new-taipei-people.csv")
```

![importDATA](https://i.imgur.com/FKI057o.png)


### importHTML 讀取網頁表格

* 若我們想要匯入維基百科中[「各國人均國民總收入列表」](https://zh.wikipedia.org/wiki/%E5%90%84%E5%9B%BD%E4%BA%BA%E5%9D%87%E5%9B%BD%E6%B0%91%E6%80%BB%E6%94%B6%E5%85%A5%E5%88%97%E8%A1%A8)中的「高收入組」資料

* 在 Google 試算表中任一儲存格輸入：

```js
=importHTML("https://zh.wikipedia.org/wiki/各國人均國民總收入列表", "table", 2)
```

![importHTML](https://i.imgur.com/YsmVtf8.png)


### importXML 讀取任意網頁內容

* 這裡會使用到 XML Path Language (XPath)，XPath 長得有點像目錄結構或網址的寫法，他使用斜線分格、並利用標籤名做找查。

* Google Chrome 瀏覽器提供了「Copy XPath」的功能，可以讓我們直接複製任意網頁內容的 XPath 。

* 找到想要的內容後，點擊右鍵選擇「檢查」，再到該程式碼點擊右鍵選擇「Copy」→「Copy XPath」

![Copy XPath](https://i.imgur.com/aOjq75f.png)

```
//*[@id="main-container"]/div[2]/div[2]/div[2]/a
```

* 路徑經過些許嘗試後，最後的指令碼如下

```
=importXML("https://www.ptt.cc/bbs/Beauty/index.html","//*/div[2]/*/div[@class='title']/a")
```

![importXML](https://i.imgur.com/nhEe4Pb.png)


### 分析

* 取出貼文分類 ( 於儲存格 B1 執行 )

```
=regexextract(A1,"\[[^\]]+\]")
```

* 條列分類種類 ( 於儲存格 C1 執行 )

```
=unique(B:B)
```

* 計算各分類數量 ( 於儲存格 D1 執行 )

```
=counta(filter(B:B,B:B=C1))
```

執行後的結果如下

![執行結果](https://i.imgur.com/8vh4VZ7.png)


### 注意

> Google 試算表只能對付「靜態」網頁，也就是資料與結構都是在遠端電腦產生的網頁類型，若碰到使用 JavaScript 做內容動態載入或需要登入的個人化頁面，我們便還是得靠進一步的網頁分析與開發爬蟲程式才能順利取得我們想要的資料了。

### 參考
* [無痛爬梳自己來，用 Google Spreadsheet 爬取網頁資料](http://blog.infographics.tw/2016/11/google-spreadsheet-data-scraping/)
* [新北市各區人數統計表](https://data.gov.tw/dataset/26555)
* [xpath在HTML解析中的应用（加强版）](https://blog.csdn.net/Raptor/article/details/4516441)