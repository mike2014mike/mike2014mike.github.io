---
layout:     post
title:      C# POST JSON to Node.js
date:       2020-07-23 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - POST
 - JSON
 - NodeJS
---


## 說明
* 目前專案上的架構是 WPF(C#) 應用程式要與 Node.js 伺服器溝通。
* 這邊紀錄了如何從 C# POST JSON 到伺服器以及伺服器端如何接收 POST 過來的 JSON 經過 Parser 取值並回傳值。

## Package
* Newtonsoft.Json

## WPF 端

```csharp

private void btnTest_Click(object sender, RoutedEventArgs e)
        {
            //要傳遞的參數Sample
            Object postData =
                new 
                {
                    name = "mike",
                    pw = "abc"
                };
            string response = PostJson("http://localhost:8080/jsonTest", postData);
            MessageBox.Show(response);

        }

public string PostJson(string url, Object postData)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/json";        

            string postBody = JsonConvert.SerializeObject(postData);    

            using (StreamWriter sw = new StreamWriter(request.GetRequestStream()))
            {
                sw.Write(postBody);
            }

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            using (StreamReader sr = new StreamReader(response.GetResponseStream()))
            {
                string result = sr.ReadToEnd();

                return result;
            }


        }
```


## Node.js 端

```js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 建立 application/json parser
var jsonParser = bodyParser.json();

// 建立 application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//以 JSON 傳來的用 jsonParser
app.post('/jsonTest', jsonParser, function (req, res) {

  console.log(req.body.name, req.body.pw);
  res.send("收到 JSON 啦");
})

var port = 8080;

server.listen(port, function () {
  console.log('Express started on http://localhost:' + port + ' \r\npress Ctrl+C to terminate.');
});
```
