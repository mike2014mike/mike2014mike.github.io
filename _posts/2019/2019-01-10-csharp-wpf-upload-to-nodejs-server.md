---
layout:     post
title:      C# WPF 上傳檔案至 Node.js Server 並產生 QRCode
date:       2019-01-10 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - NodeJS
 - WPF
 - QRCode
---


## 說明
* 上傳檔案是工作上很常見的功能，這範例是上傳到 Node.js 伺服器的目錄下。
* 上傳完成後會產生 QRCode，QRCode可以是 Server 端或 Client 端產生。
* 差別只在回傳的是檔案連結，或是QRCode連結。

## Package
* ZXing.Net 0.12.0.0 for .net4.0

## index.js
```js
var express = require('express');
var app = express();
var server = require('http').Server(app);
// var io = require('socket.io')(server);
var path = require('path');
var request = require('request');
// 檔案上傳處理模組
var formidable = require('formidable');
var fs = require('fs');

var QRCode = require('qrcode');

//public
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

// 分析首頁
app.post('/fileupload', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    // fields 是額外傳送的參數
    // console.log(fields.room);

    // files 是上傳的檔案
    console.log(files.file);

    var oldpath = files.file.path;
    var oriname = files.file.name; // 原始檔名
    // var newname = new Date().getTime() + '.' + getFileExtension(oriname); // 新檔名
    var newpath = path.join(__dirname + '/public/upload/' + oriname); // 儲存路徑

    // 從 C 槽搬到 D 槽，不同裝置需用下面的寫法
    var readStream = fs.createReadStream(oldpath)
    var writeStream = fs.createWriteStream(newpath);

    readStream.pipe(writeStream);

    readStream.on("end", function () {
      fs.unlinkSync(oldpath);


      var link = "http://localhost:8080/upload/" + oriname;
      var qrcode_filename = newpath.replace('.png', '') + '_qrcode.png';

      //方法一：利用 Google Chart API 來產生 QRCode
      // var url = "http://chart.apis.google.com/chart?cht=qr&chl=" + link + "&chs=200x200";
      // download(url, qrcode_filename, function () {
      //   // 上傳完成傳至 client 的訊息
      //   var returnMsg = link.replace('.png', '') + '_qrcode.png';
      //   // res.send({ success: true });
      //   res.send(returnMsg);
      // });

      //方法二：自己產生 QRCode
      // QRCode.toFile(qrcode_filename, link, {
      //   // color: {
      //   //   dark: '#00F',  // Blue dots
      //   //   light: '#0000' // Transparent background
      //   // },
      //   width: 200
      // }, function (err) {
      //   if (err) console.log(err);
      //   // 上傳完成傳至 client 的訊息
      //   var returnMsg = link.replace('.png', '') + '_qrcode.png';
      //   // res.send({ success: true });
      //   res.send(returnMsg);
      // })
    });
  });

  res.send("上傳成功");
})



var port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log("Listening on " + port);
  // console.log('Express started on http://localhost:' + port + ' \r\npress Ctrl+C to terminate.');
});




// 下載 Google Chart API 產生之 QRCode 圖檔
var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


```

## MainWindow.xaml
```xml
<Window x:Class="WPF_uploadTest.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525">
    <Grid>
        <Button Content="上傳圖片" Height="23" HorizontalAlignment="Left" Margin="12,12,0,0" Name="button1" VerticalAlignment="Top" Width="75" Click="button1_Click" />
        <TextBox Height="258" HorizontalAlignment="Left" Margin="12,41,0,0" Name="textBox1" VerticalAlignment="Top" Width="239" />
        <Image Height="200" HorizontalAlignment="Left" Margin="280,66,0,0" Name="image1" Stretch="Fill" VerticalAlignment="Top" Width="200" />
    </Grid>
</Window>

```

## MainWindow.xaml.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.IO;
using System.Net;
using System.Web;
using ZXing;
using System.Drawing;
using System.Drawing.Imaging;

namespace WPF_uploadTest
{
    /// <summary>
    /// MainWindow.xaml 的互動邏輯
    /// </summary>
    public partial class MainWindow : Window
    {
        public static double PercentUploaded;
        public static string FileName = "test.png";
        public static string Result;
        public static string FilePath;
        public static bool Completed;
        public static string Error;
        public static string UploadAPI = "http://localhost:80/fileupload/Default.aspx";
        public static string UploadPath = "http://localhost:80/fileupload/uploads/";

        public MainWindow()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            // Create OpenFileDialog 
            Microsoft.Win32.OpenFileDialog dlg = new Microsoft.Win32.OpenFileDialog();

            // Set filter for file extension and default file extension 
            dlg.DefaultExt = ".png";
            dlg.Filter = "PNG Files (*.png)|*.png";

            // Display OpenFileDialog by calling ShowDialog method 
            Nullable<bool> result = dlg.ShowDialog();

            // Get the selected file name and display in a TextBox 
            if (result == true)
            {
                // Open document 
                FilePath = dlg.FileName;
                FileName = dlg.SafeFileName;
            }

            Uri address = new Uri(UploadAPI);
            WebClient client = new WebClient();
            client.UploadFileAsync(address, FilePath);
            client.UploadFileCompleted += new UploadFileCompletedEventHandler(client_UploadFileCompleted);
            client.UploadProgressChanged += new UploadProgressChangedEventHandler(client_UploadProgressChanged);
        }

        void client_UploadProgressChanged(object sender, UploadProgressChangedEventArgs e)
        {
            //throw new NotImplementedException();
            
            PercentUploaded = e.ProgressPercentage;
            string msg = string.Format("已經上傳 {0} / {1} bytes.\r\n{2} % 已完成...\r\n", e.BytesSent, e.TotalBytesToSend, e.ProgressPercentage);
            textBox1.Text = msg;
        }

        void client_UploadFileCompleted(object sender, UploadFileCompletedEventArgs e)
        {
            //throw new NotImplementedException();
            if (e.Error != null)
            {
                Error = e.Error.ToString();
                Console.WriteLine(Error);
                textBox1.Text += Error + "\r\n";
            }
            else
            {
                PercentUploaded = 100;
                Completed = true;

                try {
                    Result = Encoding.UTF8.GetString(e.Result);
                    //Console.WriteLine("File upload Completed!");
                    textBox1.Text += "檔案已上傳完成！ \r\n";
                    //Console.WriteLine("Server Response: " + Result);
                    textBox1.Text += "伺服器回應: " + Result + "\r\n";


                    //方法一：讀取 Node 產生的 QR Code
                    //var bitmapImage = new BitmapImage();
                    //bitmapImage.BeginInit();
                    //bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
                    //bitmapImage.StreamSource = ReadImageFromUrl(Result);
                    //bitmapImage.EndInit();
                    //image1.Source = bitmapImage; 


                    //方法二：使用 ZXing 產生 QR Code
                    BarcodeWriter bw = new BarcodeWriter();
                    bw.Format = BarcodeFormat.QR_CODE;
                    bw.Options.Width = 200;
                    bw.Options.Height = 200;
                    Bitmap bitmap = bw.Write(UploadPath + FileName);
                    using (MemoryStream memory = new MemoryStream())
                    {
                        bitmap.Save(memory, ImageFormat.Png);
                        memory.Position = 0;
                        BitmapImage bitmapImage = new BitmapImage();
                        bitmapImage.BeginInit();
                        bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
                        bitmapImage.StreamSource = memory;                        
                        bitmapImage.EndInit();
                        image1.Source = bitmapImage;
                    }
                    
                }catch(Exception err){
                
                }
                           
            }
        }

        private Stream ReadImageFromUrl(string urlImagePath)
        {

            Uri uri = new Uri(urlImagePath);

            WebRequest webRequest = WebRequest.Create(uri);

            Stream stream = webRequest.GetResponse().GetResponseStream();

            return stream;
        }

    }
}

```


## 執行畫面
![執行畫面預覽](https://i.imgur.com/ilMlgQW.png)