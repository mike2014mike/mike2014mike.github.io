---
layout:     post
title:      自製口罩地圖
date:       2020-02-12 10:37:19
author:     Mike Chen
summary:    
categories: Side-Project
thumbnail:  code
tags:
 - JavaScript
 - leaflet
 - MaskMap
---


## 說明
* 武漢肺炎/新冠狀病毒(COVID-19)全球肆虐，人人都需要口罩。
* 身為攻城獅/碼農，跟風自己寫一個口罩地圖方便買口罩是一定要的啦！
* CSS 框架採用 Bootstrap，JS 採用了 jQuery。
* 地圖採用 leaflet，這是整合 OpenStreetMap 的地圖套件。
* 因為需要 Cluster 的功能，需要額外引入 MarkerCluster 才能使用。


## Code
```html

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>口罩地圖 by Mike</title>
    <style type="text/css">
        html,
        body {
            width: 100%;
            height: 100%;
        }
    </style>

    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>

    <!-- bootstrap-select -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>


    <!-- leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css">
    </link>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css">
    </link>

    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/leaflet.markercluster.js"></script>

    <style>
        .marker-cluster-small {
            background-color: rgba(181, 226, 140, 0.6);
        }

        .marker-cluster-small div {
            background-color: rgba(110, 204, 57, 0.6);
        }

        .marker-cluster-medium {
            background-color: rgba(241, 211, 87, 0.6);
        }

        .marker-cluster-medium div {
            background-color: rgba(240, 194, 12, 0.6);
        }

        .marker-cluster-large {
            background-color: rgba(253, 156, 115, 0.6);
        }

        .marker-cluster-large div {
            background-color: rgba(241, 128, 23, 0.6);
        }

        .marker-cluster {
            background-clip: padding-box;
            border-radius: 20px;
        }

        .marker-cluster div {
            width: 30px;
            height: 30px;
            margin-left: 5px;
            margin-top: 5px;

            text-align: center;
            border-radius: 15px;
            font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
        }

        .marker-cluster span {
            line-height: 30px;
        }

        /*Legend specific*/
        .legend {
            padding: 6px 8px;
            font: 14px Arial, Helvetica, sans-serif;
            background: white;
            background: rgba(255, 255, 255, 0.8);
            /*box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);*/
            /*border-radius: 5px;*/
            line-height: 24px;
            color: #555;
        }

        .legend h4 {
            text-align: center;
            font-size: 16px;
            margin: 2px 12px 8px;
            color: #777;
        }

        .legend span {
            position: relative;
            bottom: 3px;
        }

        .legend i {
            width: 18px;
            height: 18px;
            float: left;
            margin: 0 8px 0 0;
            opacity: 0.7;
        }

        .legend i.icon {
            background-size: 12px;
            background-color: rgba(255, 255, 255, 1);
        }
    </style>
</head>

<body>

    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">口罩地圖</a>
        <select class="selectpicker" id="rangeSel">
            <option value="1000">搜尋1公里內的藥局</option>
            <option value="5000">搜尋5公里內的藥局</option>
            <option value="10000">搜尋10公里內的藥局</option>
            <option value="15000">搜尋15公里內的藥局</option>
            <option value="20000">搜尋20公里內的藥局</option>
        </select>
    </nav>
    <div id="mapid" style="width: 100%; height: 90%;"></div>



    <script>

        var mymap = L.map('mapid');
        var layerGroup = L.layerGroup().addTo(mymap);
        var markers = L.markerClusterGroup();

        var mask_api = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
        var masklist = [];

        var mylon = 121.564101;
        var mylat = 25.033493;
        var range = 1000; //default search 1km

        var greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        var redIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        /*Legend specific*/
        var legend = L.control({ position: "bottomleft" });

        legend.onAdd = function (map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += "<h4>圖例</h4>";
            // div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
            // div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
            div.innerHTML += '<i class="icon" style="background-image: url(https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png);background-repeat: no-repeat;"></i><span>你的位置</span><br>';
            div.innerHTML += '<i class="icon" style="background-image: url(https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png);background-repeat: no-repeat;"></i><span>有口罩的藥局</span><br>';
            div.innerHTML += '<i class="icon" style="background-image: url(https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png);background-repeat: no-repeat;"></i><span>沒口罩的藥局</span><br>';


            return div;
        };

        legend.addTo(mymap);


        $("#rangeSel").change(function () {

            range = parseInt($('#rangeSel').val());
            // console.log(range);

            layerGroup.clearLayers();
            markers.clearLayers();

            setCircle();
            setMyPosition();
            setMaskPosition();
        })



        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(function (position) {
                // do_something(position.coords.latitude, position.coords.longitude);
                mylon = position.coords.longitude;
                mylat = position.coords.latitude;

                // console.log(mylat, mylon);

                mymap.setView([mylat, mylon], 14)

                // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | ' +
                //         'App developed by <a href="https://mike2014mike.github.io/">Mike Chen</a>'
                // }).addTo(mymap);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
                        'App developed by <a href="https://mike2014mike.github.io/">Mike Chen</a>',
                    id: 'mapbox.streets'
                }).addTo(mymap);

                setCircle();

                setMyPosition();
            });
        } else {
            /* geolocation IS NOT available */
        }

        var xhr = new XMLHttpRequest();
        xhr.open("get", mask_api);
        xhr.send();
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText).features

            data.map(function (x) {
                masklist.push({
                    name: x.properties.name,
                    address: x.properties.address,
                    adult: x.properties.mask_adult,
                    child: x.properties.mask_child,
                    lon: x.geometry.coordinates[0],
                    lat: x.geometry.coordinates[1]
                });
            })

            console.log(masklist);

            setMaskPosition();
        }


        function setMyPosition() {
            L.marker([mylat, mylon]).addTo(mymap).bindPopup("<strong>你的位置</strong>").openPopup();
        }

        function setCircle() {
            var circle = L.circle(
                [mylat, mylon],   // 圓心座標
                range,                // 半徑（公尺）
                {
                    color: 'blue',      // 線條顏色
                    fillColor: 'blue', // 填充顏色
                    fillOpacity: 0.2   // 透明度
                }
            ).addTo(layerGroup);
            console.log(mylat, mylon, range);
        }

        var range_list = [];
        function setMaskPosition() {
            range_list.length = 0;
            masklist.map(function (item, index) {
                var dis = distanceByLnglat(item.lat, item.lon, mylat, mylon);
                if (dis < range) {

                    var link = "https://www.google.com/maps/dir/?api=1&destination=" + item.lat + "," + item.lon;

                    var str = "<strong>" + item.name + "</strong><br>";
                    str += '<a target="_blank" href="' + link + '">' + item.address + '</a><br>';
                    str += "<span style='color: green;'>成人口罩:" + item.adult + "</span><br>";
                    str += "<span style='color: blue;'>兒童口罩:" + item.child + "</span><br>";
                    // str += '<button type="button" class="btn btn-secondary btn-sm btn-block">前往</button>';
                    // str += '<a target="_blank" style="color: white;" href="' + link + '" class="btn btn-secondary btn-sm btn-block" role="button">' + item.address + '</a>';


                    var myIcon = greenIcon;
                    if (item.adult == 0 || item.child == 0) myIcon = redIcon;
                    // L.marker([item.lat, item.lon], { icon: myIcon }).addTo(layerGroup).bindPopup(String(str));
                    markers.addLayer(L.marker([item.lat, item.lon], { icon: myIcon }).bindPopup(String(str))).addTo(layerGroup);

                    item.dis = dis;

                    range_list.push(item);
                }
            });

            range_list = range_list.sort(function (a, b) {
                return a.dis > b.dis ? 1 : -1;
            });

            console.log(range_list);
        }


        function distanceByLnglat(lat1, lng1, lat2, lng2) {
            var radLat1 = Rad(lat1);
            var radLat2 = Rad(lat2);
            var a = radLat1 - radLat2;
            var b = Rad(lng1) - Rad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378137.0;// 取WGS84標準參考橢球中的地球長半徑(單位:m)
            s = Math.round(s * 10000) / 10000;
            return s;
            // //下面為兩點間空間距離（非球面體）
            // var value= Math.pow(Math.pow(lng1-lng2,2)+Math.pow(lat1-lat2,2),1/2);
            // alert(value);
        }

        function Rad(d) {
            return d * Math.PI / 180.0;
        }

    </script>

</body>

</html>
```

## 成果預覽
![口罩地圖預覽](https://i.imgur.com/FVd10zG.png)

## 系統連結
[我的口罩地圖](https://mike2014mike.github.io/masksmap/)