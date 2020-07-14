---
layout:     post
title:      衛星影像查詢流程
date:       2018-07-02 09:37:19
author:     Mike Chen
summary:    
categories: GIS
thumbnail:  map-marked-alt
tags:
 - GIS
 - Aster
 - GeoEye
 - Satellite 
---

以下連結可能都已經失效，僅記錄之前查詢的方式！

### Aster 衛星影像查詢
* [Aster查詢網址1](http://www.gdem.aster.ersdac.or.jp/search.jsp)
* [Aster查詢網址2](http://imsweb.aster.ersdac.or.jp/ims/html/MainMenu/MainMenu.html)
* [USGS](http://earthexplorer.usgs.gov/)


### GeoEye 衛星影像查詢
1. [GeoEye查詢網址](http://geofuse.geoeye.com/advanced/SearchOptions/UploadFile.aspx)
2. 上傳小林村區域後會列出可選擇符合需求的衛星影像。
3. 注意上傳之shp節點數(Feature Vertices)要控制在200內，座標系統WGS84，須包含SHP, SHX, DBF, and PRJ等檔案，並壓成zip。
4. 提供衛星影像的有Aster, Spot, Formosat(2m), Quick bird, Modis, IKONOS(1m), GeoEye(0.5m)。
5. 計算小林村面積，注意座標系統WGS84的話，欄位計算出來的面積不能用，因為單位是弧度，需要轉成97再計算。



### 注意：
1. 有圖有真相：各項參數只能當參考，那種用電腦算出來的統計數值，只是用來誤導消費者而已，如「雲覆率」。
2. 無論是何種衛星影像，採購前一定要先對其進行通盤的了解，波段、解析度、使用者的需求、目的、規格等，已免造成不必要的糾紛。
