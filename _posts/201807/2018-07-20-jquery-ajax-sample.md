---
layout:     post
title:      jQuery AJAX Sample
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - jQuery
 - AJAX
---


```javascript
$(document).ready(function(){
  $.ajax({
    //async: false, //啟用同步請求，預設 async:true 啟動非同步方，
    method: 'GET', //jQuery 1.9.0 之前的版本使用 type: 'GET' 
    dataType: "json",
    url: 'https://randomuser.me/api/?results=10' //隨機產生10組資料
  })
  .done(function(msg){ //不建議使用success
    console.log(msg.results[0]);//全部資料
    msg.results.map((ele)=>{
      $('#sample').append('<li>Name: ' + ele.name.first +' '+ ele.name.last + '<br>Email: ' + ele.email+'</li>');
    })
  })
  .fail(function(err){
    console.log(err);
  })
})
```

`success 是jQuery中成功回調的傳統名稱，它被定義為ajax調用中的一個選項。 然而，由於 $.Deferreds 和更複雜的回調實現，done 是實現成功回調的首選方法，因為它可以在任何 deferred 上調用。`

`jQuery 1.8中將不推薦使用jqXHR.success（），jqXHR.error（）和jqXHR.complete（）回調。請改用jqXHR.done（），jqXHR.fail（）和jqXHR.always（）。`


下面我在CodePen有做一個範例，可參考。

<div class="iframe-rwd">
    <iframe scrolling='no' title='jQuery - AJAX sample' src='//codepen.io/mikechen2017/embed/MBbPNm/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mikechen2017/pen/MBbPNm/'>jQuery - AJAX sample</a> by Mike Chen (<a href='https://codepen.io/mikechen2017'>@mikechen2017</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</div>