---
layout:     post
title:      (SuperGIS Server)自Array畫點+標記，並依屬性畫不同顏色
date:       2018-07-02 09:37:19
author:     Mike Chen
summary:    
categories: GIS
thumbnail:  map-marked-alt
tags:
 - GIS
 - SuperGIS Server
---



* 在function InitWnd()中pMapBase.RefreshMap(true);之前加入下面程式碼：


```javascript
//==========data===========
var locations = [
    [31, '烏石港', 1.1, 1530, 24.869429, 121.83476],
    [32, '蘭陽博物館', 1.1, 2050, 24.869753, 121.83311],
    [126, '礁溪風景特定區', 1.1, 998, 24.828287, 121.7731],
    [230, '龍潭湖風景區', 1.1, 730, 24.792179, 121.73988],
    [510, '太平山森林遊樂區', 1.2, 12777, 24.497464, 121.535],
    [625, '冬山河風景特定區', 0, 0, 24.675123, 121.81611],
    [668, '國立傳統藝術中心', 0, 0, 24.686024, 121.82418],
    [740, '棲蘭森林遊樂區', 1, 858, 24.580877, 121.49482],
    [747, '南方澳', 1.3, 6471, 24.583801, 121.86643],
    [763, '蘇澳冷泉', 1.3, 5887, 24.596808, 121.851],
    [1018, '羅東運動公園', 0, 0, 24.682815, 121.75486],
    [1309, '五峰旗風景區', 0, 0, 24.831436, 121.74782],
    [1411, '梅花湖風景特定區', 0, 0, 24.641922, 121.737],
    [1471, '明池森林遊樂區', 0, 0, 24.650209, 121.46779],
    [1802, '幾米廣場', 1, 0, 24.754625, 121.75801],
    [1803, '湯圍溝溫泉公園', 1.2, 1378, 24.826994, 121.77168],
    [1804, '四圍堡車站', 1.1, 1158, 24.828867, 121.76988],
    [1805, '羅東林場', 1.1, 960, 24.684072, 121.77131],
    [1806, '金車伯朗咖啡城堡咖啡館', 0, 0, 24.884602, 121.83881],
    [1807, '清水地熱', 0, 0, 24.611674, 121.63639],
    [1808, '羅東文化工場', 1.2, 2094, 24.671871, 121.76456],
    [1809, '頭城老街', 1.1, 1801, 24.857003, 121.82419],
    [1810, '林美石磐步道', 0, 0, 24.827157, 121.73371]
];


//==========marker===========
for (i = 0; i < locations.length; i++) {
    var pt = new Point(pMapBase);
    pt.SetPoint(new MapPoint(locations[i][5], locations[i][4]));

    if (locations[i][2] == 0) {
        pt.putFillColor("red");
    }
    else {
        pt.putFillColor("green");
    }
    pt.RebuildElement();
};

//==========label===========
var labs = new Array();
for (i = 0; i < locations.length; i++) {
    var lab;
    if (locations[i][2] == 0) {
        lab = new PointLabel(pMapBase, locations[i][0], new MapPoint(locations[i][5], locations[i][4]), "red");
    }
    else {
        lab = new PointLabel(pMapBase, locations[i][0], new MapPoint(locations[i][5], locations[i][4]), "green");
    }
    lab.RebuildElement();
    labs.push(lab);
};


```


* 另外再寫個Label的function：

```javascript
function PointLabel(pMap, labelText, point, color) {
    var pNode = pMap.getHPackage();
    var m_hObj = null;
    var pThis = this;
    var m_Point = point;

    this.Hide = function () { m_hObj.style.display = "none"; }
    this.Show = function () { m_hObj.style.display = ""; }
    this.SetLabelText = function (text) {
        if (m_hObj) {
            m_hObj.innerText = text;
        }
    }

    m_hObj = pNode.ownerDocument.createElement("div");
    m_hObj.style.border = "1px";
    m_hObj.style.padding = "2px";
    m_hObj.style.marginLeft = "3px"
    m_hObj.style.backgroundColor = "#FFFFFF";
    m_hObj.style.display = (labelText) ? "block" : "none";
    m_hObj.innerText = (labelText) ? labelText : "";
    m_hObj.style.color = color;
    m_hObj.style.fontSize = "11pt"
    m_hObj.style.fontFamily = "微軟正黑體"
    m_hObj.style.opacity = 0.8;
    m_hObj.style.filter = "Alpha(opacity=80)";
    pNode.appendChild(m_hObj);
    m_hObj.style.position = "absolute";

    this.RebuildElement = function () {
        this.UpdateElement();
    }
    this.UpdateElement = function () {
        if (m_hObj == null || m_Point == null)
            return;
        var pt = pMap.FromMapPoint(m_Point.X, m_Point.Y);
        m_hObj.style.left = pt.X + "px";
        m_hObj.style.top = pt.Y + "px";
    };
    this.RebuildElement();

    this.Destroy = function () {
        if (m_hObj == null)
            return false;
        pNode.removeChild(m_hObj);
        m_hObj.innerHTML = "";
    }
    pMap.AddLayer(this);
}

```

### 成果
![成果](https://i.imgur.com/lArBUNF.jpg)


本文同時刊載於[地理資訊論壇](http://www.gisforum.com.tw/%E5%9C%B0%E7%90%86%E8%B3%87%E8%A8%8A%E8%AB%96%E5%A3%87/tabid/54/mid/369/threadid/741/scope/posts/Default.aspx#741)