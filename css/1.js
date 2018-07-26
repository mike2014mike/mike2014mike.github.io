function detectBrowser() {
    var sAgent = navigator.userAgent.toLowerCase();
    this.isIE6 = (sAgent.indexOf("msie 6.0") != -1);
    this.isIE7 = (sAgent.indexOf("msie 7.0") != -1);
    this.isIE8 = (sAgent.indexOf("msie 8.0") != -1);
    this.isIE9 = (sAgent.indexOf("msie 9.0") != -1);
    this.isIE10 = (sAgent.indexOf("msie 10.0") != -1);
    this.isIE11 = (sAgent.indexOf("gecko") != -1);
    this.isIE = (sAgent.indexOf("msie") != -1); //IE6.0-7
    this.isFF = (sAgent.indexOf("firefox") != -1);//firefox
    this.isSa = (sAgent.indexOf("safari") != -1);//safari
    this.isOp = (sAgent.indexOf("opera") != -1);//opera
    this.isNN = (sAgent.indexOf("netscape") != -1);//netscape
    this.isCh = (sAgent.indexOf("chrome") != -1);//chrome
    this.isMa = this.isIE;//marthon
    this.isOther = (!this.isIE && !this.isFF && !this.isSa && !this.isOp && !this.isNN && !this.isSa);//unknown Browser
}

var oBrowser = new detectBrowser();

if (oBrowser.isIE6) {
    $('#detectbrowser').text("Internet Explorer 6");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isIE7) {
    $('#detectbrowser').text("Internet Explorer 7");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isIE8) {
    $('#detectbrowser').text("Internet Explorer 8");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isIE9) {
    $('#detectbrowser').text("Internet Explorer 9");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isIE10) {
    $('#detectbrowser').text("Internet Explorer 10");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isIE11) {
    $('#detectbrowser').text("Internet Explorer 11");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isSa && !oBrowser.isCh) {
    $('#detectbrowser').text("Safari");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isOp) {
    $('#detectbrowser').text("Opera");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isCh && oBrowser.isSa) {
    $('#detectbrowser').text("Chrome");//這裡可以修改你要顯示的訊息 及 處理事情
}
if (oBrowser.isFF) {
    $('#detectbrowser').text("Firefox");//這裡可以修改你要顯示的訊息 及 處理事情
}
