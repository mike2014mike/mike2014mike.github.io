---
layout:     post
title:      廣告機-接駁車等待時間更新
date:       2020-07-10 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - KIOSK
 - Digital-Signage
---


## 任務說明
* 最近接到任務，虎躍廠和頂埔廠廣告機顯示的接駁車路線整併更新案。
* 紅藍線整成環廠線，成功線時刻也有異動，所以廣告機上的等待時間區塊需要更新。
* 等待時間計算是使用js運算的，舊版是已轉調的前輩寫的，我接手除了更新以外，也稍作優化。
* 原本是放一個背景圖，預留了時間顯示的區塊；我則是將背景圖的部分完全以css實作。
* 原本有許多重複的程式碼，我將其模組化，以便重複利用。
* 頂埔廠的等待時間當然與虎躍不同，而且成功線不會經過頂埔廠。原本並沒針對頂埔廠特別處理，我將網頁改為可帶入參數，切換為頂埔廠的顯示模式。


## 舊版畫面
![舊版畫面](https://i.imgur.com/fwkbHwi.png)

## 舊版程式碼
```html
 <html> 
	<head>
		<META http-equiv="content-type" content="text/html; charset=UTF-8">
		<style>
			html 
			{
				overflow: hidden; 
			}
			body
			{
				margin: 0;
				background-color: transparent;
				background: #000000 url(car_bg.jpg) no-repeat fixed top left;
			}
		</style>
	<style type="text/css">
		body,table {
			color: yellow;
			font-size:22pt;
			font-weight:bold;
			font-family:tahoma, arial, helvetica, sans-serif;
			line-height:36pt;
			height:61px;
		}
		.TRed {background: transparent; padding-left:120px; }
		.TBlu {background: transparent; padding-left:120px; }
		.TGre {background: transparent; padding-left:120px; }
		.TBlk {background: #000000;}
	</style>
	<script language="JavaScript">
		var P1Table = [0820,0840,0900,0920,0940,1000,1020,1040,1100,1120,1140,1320,1340,1400,1420,1440,1500,1520,1540,1600,1620,1640];
		var P2Table = [0834,0854,0914,0934,0954,1014,1034,1054,1114,1134,1154,1334,1354,1414,1434,1454,1514,1534,1554,1614,1634,1654];
		var P3Table = [0820,0840,0900,0920,0940,1000,1020,1040,1100,1120,1140,1200,1325,1345,1405,1425,1445,1505,1525,1545,1605,1625,1645,1705];
		var P4Table = [1745,1800,1820,1840,2105,2135,2205,2235,2305];//永寧捷運站
		var P5Table = [1815,1845,1900,1920,1940,2000,2020,2040,2100,2115,2145];//頂埔捷運站
		var P6Table = [1740,1750,1800,1810,1820,1830,1840,1850,1905,1920,1935,1950,2005,2020,2035,2055,2115,2135,2155];//成功停車場
		
		var P1Time, P2Time, P3Time, P4Time, P5Time, P6Time;
		var Tar1 = '';//往頂埔廠:
		var Tar2 = '';//往民生廠:
		var Tar3 = '';//往停車場:
		var Message1, Message2, Message3;
		
		function ShowTime(){
			var NowDate = new Date();
			var h = NowDate.getHours();
			var m = NowDate.getMinutes();
			//h = 17;
			//m = 30;
			
			
			var ctime = parseInt(((h<=9)? "0" + h : "" + h) + ((m<=9)? "0" + m : "" + m), 10);
			P1Time = P1Table[0].toString();
			for (var i = 0; i < P1Table.length; i++) {if(P1Table[i]>ctime){P1Time = P1Table[i].toString();break;}}
			if(P1Time.length==3) P1Time = "0" + P1Time;

			P2Time = P2Table[0].toString();
			for (var i = 0; i < P2Table.length; i++) {if(P2Table[i]>ctime){P2Time = P2Table[i].toString();break;}}
			if(P2Time.length==3) P2Time = "0" + P2Time;

			P3Time = P3Table[0].toString();
			for (var i = 0; i < P3Table.length; i++) {if(P3Table[i]>ctime){P3Time = P3Table[i].toString();break;}}
			if(P3Time.length==3) P3Time = "0" + P3Time;
			
			P4Time = P4Table[0].toString();
			for (var i = 0; i < P4Table.length; i++) {if(P4Table[i]>ctime){P4Time = P4Table[i].toString();break;}}
			if(P4Time.length==3) P4Time = "0" + P4Time;
			
			P5Time = P5Table[0].toString();
			for (var i = 0; i < P5Table.length; i++) {if(P5Table[i]>ctime){P5Time = P5Table[i].toString();break;}}
			if(P5Time.length==3) P5Time = "0" + P5Time;
			
			P6Time = P6Table[0].toString();
			for (var i = 0; i < P6Table.length; i++) {if(P6Table[i]>ctime){P6Time = P6Table[i].toString();break;}}
			if(P6Time.length==3) P6Time = "0" + P6Time;
			
			var hh, mm;
			
		if(ctime < 1720){//17:20以前
			//P1:頂埔廠
			hh = parseInt(P1Time.substr(0,2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
			mm = parseInt(P1Time.substr(2,2), 10);

			if(hh<h){//隔天第一班
				hh = hh + 24;
			}
			if(mm<m){//分比較小
				hh = hh - 1;
				mm = mm + 60;
			}
			if(hh-h==0){
				if(mm-m<=1)
					Message1 = Tar1 + '準備發車';
				else
					Message1 = Tar1 + '等候' + (mm-m) + '分';
			}else{
				if(h >= 16 && h <= 23) 
					Message1 = Tar1 + '已無接駁車';
				else
					Message1 = Tar1 + '等候' + (hh-h) + '時' + (mm-m) + '分';
			}

			//P2:民生廠
			hh = parseInt(P2Time.substr(0,2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
			mm = parseInt(P2Time.substr(2,2), 10);

			if(hh<h){//隔天第一班
				hh = hh + 24;
			}
			if(mm<m){//分比較小
				hh = hh - 1;
				mm = mm + 60;
			}
			if(hh-h==0){
				if(mm-m<=1)
					Message2 = Tar2+'準備發車';
				else
					Message2 = Tar2 + '等候' + (mm-m) + '分';
			}else{
				if(h >= 16 && h <= 23) 
					Message2 = Tar2 + '已無接駁車';
				else
					Message2 = Tar2 + '等候' + (hh-h) + '時' + (mm-m) + '分';
			}
			
			//P3:停車廠
			hh = parseInt(P3Time.substr(0,2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
			mm = parseInt(P3Time.substr(2,2), 10);

			if(hh<h){//隔天第一班
				hh = hh + 24;
			}
			if(mm<m){//分比較小
				hh = hh - 1;
				mm = mm + 60;
			}
			if(hh-h==0){
				if(mm-m<=1)
					Message3 = Tar3 + '準備發車';
				else
					Message3 = Tar3 + '等候' + (mm-m) + '分';
			}else{
				if(h >= 16 && h <= 23) 
					Message3 = Tar3 + '已無接駁車';
				else
					Message3 = Tar3 + '等候' + (hh-h) + '時' + (mm-m) + '分';
			}
			document.body.style.backgroundImage="url(car_bg.jpg)";//改变背景图片
			
		}else{//17:20以後
			//P4:永寧捷運站
			hh = parseInt(P4Time.substr(0,2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
			mm = parseInt(P4Time.substr(2,2), 10);

			if(hh<h){//隔天第一班
				hh = hh + 24;
			}
			if(mm<m){//分比較小
				hh = hh - 1;
				mm = mm + 60;
			}
			if(hh-h==0){
				if(mm-m<=1)
					Message1 = Tar1 + '準備發車';
				else
					Message1 = Tar1 + '等候' + (mm-m) + '分';
			}else{
				if(h >= 23 && m >= 05) 
					Message1 = Tar1 + '已無接駁車';
				else
					Message1 = Tar1 + '等候' + (hh-h) + '時' + (mm-m) + '分';
			}

			//P5:頂埔捷運站
			hh = parseInt(P5Time.substr(0,2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
			mm = parseInt(P5Time.substr(2,2), 10);

			if(hh<h){//隔天第一班
				hh = hh + 24;
			}
			if(mm<m){//分比較小
				hh = hh - 1;
				mm = mm + 60;
			}
			if(hh-h==0){
				if(mm-m<=1)
					Message2 = Tar2+'準備發車';
				else
					Message2 = Tar2 + '等候' + (mm-m) + '分';
			}else{
				if(h >= 22 && h <= 23) 
					Message2 = Tar2 + '已無接駁車';
				else
					Message2 = Tar2 + '等候' + (hh-h) + '時' + (mm-m) + '分';
			}
			
			//P6:停車廠
			hh = parseInt(P6Time.substr(0,2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
			mm = parseInt(P6Time.substr(2,2), 10);

			if(hh<h){//隔天第一班
				hh = hh + 24;
			}
			if(mm<m){//分比較小
				hh = hh - 1;
				mm = mm + 60;
			}
			if(hh-h==0){
				if(mm-m<=1)
					Message3 = Tar3 + '準備發車';
				else
					Message3 = Tar3 + '等候' + (mm-m) + '分';
			}else{
				if(h >= 22 && h <= 23) 
					Message3 = Tar3 + '已無接駁車';
				else
					Message3 = Tar3 + '等候' + (hh-h) + '時' + (mm-m) + '分';
			}
			
			document.body.style.backgroundImage="url(car_bg1.jpg)";//改变背景图片

		}
			
			//Alax{+
			
			//Alax+}
			
			
//Htest-			setTimeout('ShowTime()',30000);
		}

		// height of the scrollerbox (pixels)
		var scrollerheight= 94

		// height of the background
		var bg_height= 61

		// horizonal position: distance to the top border of the window (pixels)
		var scrollertop= 0
		
		// vertical position: distance to the left border of the window (pixels)
		var scrollerleft= 0
		
		// borderwidth of the scroller
		var scrollerborder= 0

		// font attributes of the title
		var font_face="Verdana"
		var font_color="yellow"
		
		// set 1 for bold title, set 0 for normal title
		var titlebold=0
		
		// set 'right', 'left' or 'center' to align the title
		var titlealign="left"
		
		// set 'top', 'middle' or 'bottom' to align the title
		var title_Valign="bottom"

		// standstill between the messages (milliseconds)
//Htest-		var standstill=60000
		
		// Do not edit below this line
		var pre_titlebold
		var after_titlebold
		
		var cliptop=56
		var clipbottom=0
		var clipleft=0
		var clipright=897
		var contenttext
		
		var step=2
		var pause=10
		
		if (titlebold==1) {
			pre_titlebold="<b>"
			after_titlebold="</b>"
		}
		else if (titlebold==0) {
			pre_titlebold=""
			after_titlebold=""
		}
		
		function initiate() {
			contenttext="<table border='0' width='897' cellspacing='0' cellpadding='0'>"
			contenttext+="<tr valign='"+title_Valign+"'>"
			contenttext+="<td align="+titlealign+" width='34.3%' height='"+scrollerheight+"' class='TRed'>"
			contenttext+="<font face='"+font_face+"' color='"+font_color+"'>"
			contenttext+=pre_titlebold
			contenttext+=Message1
			contenttext+=after_titlebold
			contenttext+="</font></td>"
			contenttext+="<td align="+titlealign+" width='33.3%' height='"+scrollerheight+"' class='TBlu'>"
			contenttext+="<font face='"+font_face+"' color='"+font_color+"'>"
			contenttext+=pre_titlebold
			contenttext+=Message2
			contenttext+=after_titlebold
			contenttext+="</font></td>"
			contenttext+="<td align="+titlealign+" width='33%' height='"+scrollerheight+"' class='TGre'>"
			contenttext+="<font face='"+font_face+"' color='"+font_color+"'>"
			contenttext+=pre_titlebold
			contenttext+=Message3
			contenttext+=after_titlebold
			contenttext+="</font></td></tr></table>"

			document.getElementById('scrollertext').innerHTML=contenttext
			document.getElementById('scrollertext').style.top=scrollertop+scrollerheight
			document.getElementById('scrollertext').style.left=scrollerleft
			document.getElementById('scrollertext').style.clip="rect("+cliptop+"px,"+clipright+"px,"+clipbottom+"px,"+clipleft+"px)"

			scrollin()
		}

		function scrollin(){
			var temptop = parseInt(document.getElementById('scrollertext').style.top, 10) //style.top是字串，無法做加減，所以先轉換
			if (temptop > scrollertop){
				clipbottom+=step
				document.getElementById('scrollertext').style.clip="rect("+cliptop+"px,"+clipright+"px,"+clipbottom+"px,"+clipleft+"px)"
				if( (temptop-step) < scrollertop ) temptop = scrollertop + step	//top不要比scrollertop高，避免下面有黑邊
				document.getElementById('scrollertext').style.top = temptop - step
				var timer=setTimeout("scrollin()",pause)
			}
			else {
				clearTimeout(timer)
				checkseconds()
			}
		}

		function checkseconds(){
			var NowDate = new Date();
			var timer = setTimeout("checkseconds()", 1000)
			if(NowDate.getSeconds() == 0){
				clearTimeout(timer)
				scrollout()
			}
		}

		function scrollout(){
			var temptop = parseInt(document.getElementById('scrollertext').style.top, 10) //style.top是字串，無法做加減，所以先轉換
			if (temptop > (scrollertop-scrollerheight)) {
				cliptop+=step
				document.getElementById('scrollertext').style.clip="rect("+cliptop+"px,"+clipright+"px,"+clipbottom+"px,"+clipleft+"px)"
				document.getElementById('scrollertext').style.top = temptop - step
				var timer=setTimeout("scrollout()",pause)
			}
			else {
				clearTimeout(timer)
				cliptop=0
				clipbottom=0
				ShowTime()
				initiate()
			}
		}
	</script>
	</head>
	<body id="body" onload="ShowTime(), initiate()">
		<div id="scrollertext" style="position:absolute;"></div>
	</body> 
</html>

```

## 新版畫面
![新版畫面](https://i.imgur.com/qBSwt1U.png)

## 新版程式碼
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>接駁等候時刻_mike</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      font-family: 'Microsoft JhengHei', tahoma, arial, helvetica, sans-serif;
    }

    body {
      background-color: black;
    }

    .parent {
      display: flex;
    }

    .grid {
      display: inline-block;
      width: 405px;
      height: 100px;
      padding: 20px;

      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7d7e7d+0,0e0e0e+100;Black+3D */
      background: rgb(125, 126, 125);
      /* Old browsers */
      background: -moz-linear-gradient(top, rgba(125, 126, 125, 1) 0%, rgba(14, 14, 14, 1) 100%);
      /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(125, 126, 125, 1) 0%, rgba(14, 14, 14, 1) 100%);
      /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(125, 126, 125, 1) 0%, rgba(14, 14, 14, 1) 100%);
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7d7e7d', endColorstr='#0e0e0e', GradientType=0);
      /* IE6-9 */

    }

    .info {
      display: inline-block;
      position: absolute;
    }

    .line-name {
      color: white;
      font-size: 22px;
      font-weight: bold;
      width: 300px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 20px;
    }

    .wait-time {
      margin-top: 5px;
      color: yellow;
      font-size: 30px;
      font-weight: bold;
      background-color: black;
      width: 300px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      border-radius: 20px;
    }

    .line-query {
      color: white;
      font-size: 25px;
      font-weight: bold;
      width: 300px;
      height: 35px;
      line-height: 35px;
      text-align: center;
    }

    .pink {
      background-color: #F788EE;
    }

    .green {
      background-color: #69E781;
    }
  </style>
</head>

<body>

  <div class="parent">
    <div class="grid" style="border-right: 1px solid gray;">
      <!-- #F788EE -->
      <img src="bus_pink.png" height="90" alt="">
      <div class="info">
        <div class="line-name pink">環 廠 線</div>
        <div class="wait-time" id="line1"></div>
        <div class="line-query">查詢路線 >></div>
      </div>

    </div>
    <div class="grid">
      <!-- #69E781 -->
      <img src="bus_green.png" height="90" alt="">
      <div class="info">
        <div class="line-name green">成 功 線</div>
        <div class="wait-time" id="line2"></div>
        <div class="line-query">查詢路線 >></div>
      </div>
    </div>
  </div>


  <script language="JavaScript">

    var name = getValue("name");
    var P1Table = "0820 0840 0900 0920 0940 1000 1020 1040 1100 1120 1140 1320 1340 1400 1420 1440 1500 1520 1540 1600 1620 1640".split(" ");
    var P2Table = "0820 0840 0900 0920 0940 1000 1020 1040 1100 1120 1140 1200 1325 1345 1405 1425 1445 1505 1525 1545 1605 1625 1645 1705".split(" ");
    var dinpuTable = "0825 0845 0905 0925 0945 1005 1025 1045 1105 1125 1145 1325 1345 1405 1425 1445 1505 1525 1545 1605 1625 1645 ".split(" ");
    var old_Msg1, old_Msg2;

    function getMessage(PTable) {
      var NowDate = new Date();
      var h = NowDate.getHours();
      var m = NowDate.getMinutes();

      var ctime = parseInt(((h <= 9) ? "0" + h : "" + h) + ((m <= 9) ? "0" + m : "" + m), 10);

      var PTime = PTable[0].toString();
      for (var i = 0; i < PTable.length; i++) { if (PTable[i] > ctime) { PTime = PTable[i].toString(); break; } }
      if (PTime.length == 3) PTime = "0" + PTime;


      var hh, mm;

      hh = parseInt(PTime.substr(0, 2), 10);	//要指定使用10進位轉換，否則08、09這些數字會轉成0
      mm = parseInt(PTime.substr(2, 2), 10);

      if (hh < h) {//隔天第一班
        hh = hh + 24;
      }
      if (mm < m) {//分比較小
        hh = hh - 1;
        mm = mm + 60;
      }

      var Message = '';
      if (hh - h == 0) {
        if (mm - m <= 1)
          Message = '準備發車';
        else
          Message = '等候' + (mm - m) + '分';
      } else {
        if (h >= 16 && h <= 23)
          Message = '已無接駁車';
        else
          Message = '等候' + (hh - h) + '時' + (mm - m) + '分';
      }

      return Message;

    }

    function ShowTime() {
      var line1 = document.getElementById('line1');
      line1.innerHTML = (name == "dinpu" ? getMessage(dinpuTable) : getMessage(P1Table));

      var line2 = document.getElementById('line2');
      line2.innerHTML = (name == "dinpu" ? "無停靠頂埔廠" : getMessage(P2Table));

      setTimeout('ShowTime()', 1000);
    }


    ShowTime();



    function getValue(varname) {
      var url = window.location.href;
      if (url.indexOf('?') != -1) {
        var qparts = url.split("?");
        if (qparts.length == 0) { return ""; }
        var query = qparts[1];
        var vars = query.split("&amp;");
        var value = "";
        for (i = 0; i < vars.length; i++) {
          var parts = vars[i].split("=");
          if (parts[0] == varname) {
            value = parts[1];
            break;
          }
        }
        value = unescape(value);
        value.replace(/\+/g, " ");
        return value;
      } else {
        return "";
      }

    }
  </script>
</body>

</html>
```

## 新版廣告機畫面
![新版廣告機畫面-環廠線](https://i.imgur.com/4m73st1.jpg)

![新版廣告機畫面-成功線](https://i.imgur.com/j37qkwO.jpg)