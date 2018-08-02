---
layout:     post
title:      javascript 爬資料透過RegExp轉JSON
date:       2018-07-18 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - 正規表示法
 - RegExp
 - 爬蟲
 - JSON
---

假設我們爬到的網頁程式碼如下：

```html
<ul class="dropdown-menu" id="regionMenu" role="menu">
    <li><a href="#taipei_city">臺北市</a></li>
    <li><a href="#new_taipei_city">新北市</a></li>
    <li><a href="#taichung_city">台中市</a></li>
    <li><a href="#tainan_city">臺南市</a></li>
    <li><a href="#kaohsiung_city">高雄市</a></li>
    <li><a href="#keelung_city">基隆市</a></li>
    <li><a href="#taoyuan_country">桃園市</a></li>
    <li><a href="#hsinchu_city">新竹市</a></li>
    <li><a href="#hsinchu_country">新竹縣</a></li>
    <li><a href="#miaoli_country">苗栗縣</a></li>
    <li><a href="#changhua_country">彰化縣</a></li>
    <li><a href="#nantou_country">南投縣</a></li>
    <li><a href="#yunlin_country">雲林縣</a></li>
    <li><a href="#chiayi_city">嘉義市</a></li>
    <li><a href="#chiayi_country">嘉義縣</a></li>
    <li><a href="#pingtung_country">屏東縣</a></li>
    <li><a href="#yilan_country">宜蘭縣</a></li>
    <li><a href="#hualien_country">花蓮縣</a></li>
    <li><a href="#taitung_country">台東縣</a></li>
    <li><a href="#penghu_country">澎湖縣</a></li>
    <li><a href="#kinmen_country">金門縣</a></li>
    <li><a href="#lienchiang_country">連江縣</a></li>
</ul>
```

要如何將TAG和NAME取出，並轉換為JSON格式呢？

{% highlight javascript %}
var myString = '<ul class="dropdown-menu" id="regionMenu" role="menu"><li><a href="#taipei_city">臺北市</a></li><li><a href="#new_taipei_city">新北市</a></li><li><a href="#taichung_city">台中市</a></li><li><a href="#tainan_city">臺南市</a></li><li><a href="#kaohsiung_city">高雄市</a></li><li><a href="#keelung_city">基隆市</a></li><li><a href="#taoyuan_country">桃園市</a></li><li><a href="#hsinchu_city">新竹市</a></li><li><a href="#hsinchu_country">新竹縣</a></li><li><a href="#miaoli_country">苗栗縣</a></li><li><a href="#changhua_country">彰化縣</a></li><li><a href="#nantou_country">南投縣</a></li><li><a href="#yunlin_country">雲林縣</a></li><li><a href="#chiayi_city">嘉義市</a></li><li><a href="#chiayi_country">嘉義縣</a></li><li><a href="#pingtung_country">屏東縣</a></li><li><a href="#yilan_country">宜蘭縣</a></li><li><a href="#hualien_country">花蓮縣</a></li><li><a href="#taitung_country">台東縣</a></li><li><a href="#penghu_country">澎湖縣</a></li><li><a href="#kinmen_country">金門縣</a></li><li><a href="#lienchiang_country">連江縣</a></li></ul>';
var regex = /href="#(.*?)<\/a>/g;
var temp = myString.match(regex);
// console.log(temp);

var process = temp.map(function (ele) {
    return ele.replace(/href="#/g, '').replace(/"/g, '').replace(/<\/a>/g, '');
})
// console.log(process);

var tagArray = [];
var placeArray = [];

process.map(function (ele) {
    tagArray.push(ele.match(/(.*?)>/g)[0].replace(/>/g, ''));
    placeArray.push(ele.match(/>(.*)/g)[0].replace(/>/g, ''));
})

// console.log(tagArray);
// console.log(placeArray);


var myJSON = [];
tagArray.map(function (ele, i) {
    myJSON.push({ tag: ele, place: placeArray[i] });
})
console.log(JSON.stringify(myJSON));
document.write(JSON.stringify(myJSON));
{% endhighlight %}


我們可以在[這個網站](https://regex101.com/)線上測試正規表達式
![regular expressions 101](https://i.imgur.com/hBidyDx.png)


最後結果就變成


{% highlight json %}
[
    { "tag": "taipei_city", "place": "臺北市" },
    { "tag": "new_taipei_city", "place": "新北市" },
    { "tag": "taichung_city", "place": "台中市" },
    { "tag": "tainan_city", "place": "臺南市" },
    { "tag": "kaohsiung_city", "place": "高雄市" },
    { "tag": "keelung_city", "place": "基隆市" },
    { "tag": "taoyuan_country", "place": "桃園市" },
    { "tag": "hsinchu_city", "place": "新竹市" },
    { "tag": "hsinchu_country", "place": "新竹縣" },
    { "tag": "miaoli_country", "place": "苗栗縣" },
    { "tag": "changhua_country", "place": "彰化縣" },
    { "tag": "nantou_country", "place": "南投縣" },
    { "tag": "yunlin_country", "place": "雲林縣" },
    { "tag": "chiayi_city", "place": "嘉義市" },
    { "tag": "chiayi_country", "place": "嘉義縣" },
    { "tag": "pingtung_country", "place": "屏東縣" },
    { "tag": "yilan_country", "place": "宜蘭縣" },
    { "tag": "hualien_country", "place": "花蓮縣" },
    { "tag": "taitung_country", "place": "台東縣" },
    { "tag": "penghu_country", "place": "澎湖縣" },
    { "tag": "kinmen_country", "place": "金門縣" },
    { "tag": "lienchiang_country", "place": "連江縣" }
]
{% endhighlight %}