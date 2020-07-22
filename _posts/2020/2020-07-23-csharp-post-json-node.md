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
* 這邊紀錄了如何從 C# GET/POST 參數到伺服器以及伺服器端如何接收 GET/POST 過來的參數並回傳值。
* POST 的部分分別示範了，傳 JSON 和利用組字串的方式 POST 傳送與接收方法。
* 伺服器端可依據傳送的類型，使用不同的 Parser 處理參數。

## Package
* Newtonsoft.Json

## WPF 端

```csharp
// GET - Param
private void btnGetTest_Click(object sender, RoutedEventArgs e)
        {
            
            string response = GetParam("http://localhost:8080/checkGet?name=mike&pw=qaz");
            MessageBox.Show(response);

        }

public string GetParam(string url)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";
            
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            using (StreamReader sr = new StreamReader(response.GetResponseStream()))
            {
                string result = sr.ReadToEnd();

                return result;
            }
        }

// POST - JSON
private void btnJsonTest_Click(object sender, RoutedEventArgs e)
        {
            string url = "http://localhost:8080/checkJson";
            //要傳遞的參數Sample
            Object postData =
                new 
                {
                    name = "mike",
                    pw = "abc"
                };
            string response = PostJson(url, postData);
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

//POST - 組字串
private void btnParamTest_Click(object sender, RoutedEventArgs e)
        {
            
            string url = "http://localhost:8080/checkParam";
            string postData "name=nicole&pw=123";//要傳遞的參數Sample
            string response = PostParam(url, postData);
            MessageBox.Show(response);

        }

public string PostParam(string url, string param)
        {            
            byte[] bs = Encoding.ASCII.GetBytes(param);

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = bs.Length;

            using (Stream rs = request.GetRequestStream())
            {
                rs.Write(bs, 0, bs.Length);
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

//GET 接受參數，使用 req.query.xxx
app.get('/checkGet', function (req, res) {

  console.log(req.query.name, req.query.pw);

  res.send("收到 GET 資料啦");
})

//以 JSON 傳來的用 jsonParser
app.post('/checkJson', jsonParser, function (req, res) {

  console.log(req.body.name, req.body.pw);
  res.send("收到 POST 來的 JSON 啦");
})

//以 x-www-form-urlencoded 傳來的用 urlencodedParser
app.post('/checkParam', urlencodedParser, function (req, res) {

  console.log(req.body.name, req.body.pw);
  res.send("收到 POST 來的 x-www-form-urlencoded 啦");
})

var port = 8080;

server.listen(port, function () {
  console.log('Express started on http://localhost:' + port + ' \r\npress Ctrl+C to terminate.');
});
```
