---
layout:     post
title:      C# WPF 上傳檔案至 IIS Server 並產生 QRCode
date:       2019-01-09 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - IIS
 - WPF
 - QRCode
---


## 說明
* 上傳檔案是工作上很常見的功能，這範例是上傳到 IIS 伺服器的目錄下。
* 上傳完成後會產生 QRCode。

## Package
* ZXing.Net 0.12.0.0 for .net4.0

## Default.aspx.cs
```csharp
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        
        for (int i = 0; i < Request.Files.Count; i++)
        {
            HttpPostedFile file = Request.Files[i];
            var fileName = Path.GetFileName(file.FileName);
            var path = Path.Combine(Server.MapPath("~/uploads"), fileName);
            file.SaveAs(path);
            Response.Write("上傳成功");
        }        
    }
}

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


                    //使用 ZXing 產生 QR Code
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
![執行畫面預覽](https://i.imgur.com/OdFyEmv.png)