var messageBox;                    //訊息視窗物件  
var pMap;                      //初始化地圖物件
function InitWnd(text, xx, yy) {
    //------------------初始化地圖--------------------
    var infotext = '';         //地標名稱及訊息視窗內容
    if (text)
        infotext = text;


    var markerPoint = new TGOS.TGPoint(xx, yy);                              //地標坐標位置
    var imgUrl = "http://api.tgos.nat.gov.tw/TGOSMAPAPI/images/Sample/marker1.png";         //標記點圖示來源
    var pOMap = document.getElementById("map");
    var mapOptiions = {
        scaleControl: false,                //不顯示比例尺
        navigationControl: true,     //顯示地圖縮放控制項
        navigationControlOptions: {        //設定地圖縮放控制項
            controlPosition: TGOS.TGControlPosition.TOP_LEFT,  //控制項位置
            navigationControlStyle: TGOS.TGNavigationControlStyle.SMALL         //控制項樣式
        },
        mapTypeControl: false                   //不顯示地圖類型控制項
    };
    pMap = new TGOS.TGOnlineMap(pOMap, TGOS.TGCoordSys.EPSG3826, mapOptiions);    //建立地圖,選擇TWD97坐標
    pMap.setZoom(12);                                   //初始地圖縮放層級
    pMap.setCenter(markerPoint);   //初始地圖中心點

    //------------------建立標記點---------------------
    var markerImg = new TGOS.TGImage(imgUrl, new TGOS.TGSize(38, 33), new TGOS.TGPoint(0, 0), new TGOS.TGPoint(10, 33));       //設定標記點圖片及尺寸大小
    var pTGMarker = new TGOS.TGMarker(pMap, markerPoint, '', markerImg); //建立機關單位標記點

    //-----------------建立訊息視窗--------------------
    var InfoWindowOptions = {
        maxWidth: 4000,       //訊息視窗的最大寬度
        pixelOffset: new TGOS.TGSize(5, -30),         //InfoWindow起始位置的偏移量, 使用TGSize設定, 向右X為正, 向上Y為負 
        zIndex: 99                                //視窗堆疊順序
    };
    messageBox = new TGOS.TGInfoWindow(infotext, markerPoint, InfoWindowOptions);          //建立訊息視窗                                                                  
    //TGOS.TGEvent.addListener(pTGMarker, "click", openInfoWindow);   //滑鼠監聽事件--開啟訊息視窗
    //TGOS.TGEvent.addListener(pTGMarker, "mouseout", closeInfoWindow);     //滑鼠監聽事件--關閉訊息視窗
}

function openInfoWindow() {      //開啟訊息視窗函式
    messageBox.open(pMap);
}

function closeInfoWindow() {      //關閉訊息視窗函式
    messageBox.close();
}
