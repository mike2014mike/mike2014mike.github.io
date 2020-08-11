---
layout:     post
title:      C# WPF 從 Resources 複製檔案另存
date:       2020-08-11 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - WPF
---


## 說明
* 白板專案上有個功能，是要從 Resources 複製一初始圖片檔案另存。

![Resources 中的圖片](https://i.imgur.com/SkubYQj.png)

## 思路
* 利用 `Properties.Resources.Whiteboard` 找到該資源，圖片型別為 `System.Drawing.Bitmap`。
* 使用 `File.WriteAllBytes` 存檔，第一個參數是存檔路徑，第二個參數是資料來源，型別為 `byte[]`。所以需要另外寫一個函式 `BitmapToBytes` 做轉換。

![File.WriteAllBytes說明](https://i.imgur.com/jcadM4Z.png)

## Code
```csharp
//我的文件夾下以專案 Title 建立的資料夾
string SaveFolder = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "\\" + this.Title + "\\";

//確保該目錄存在
if (Directory.Exists(SaveFolder) == false)
            {
                try { Directory.CreateDirectory(SaveFolder); }
                catch { }
            }

//將資源圖片另存
File.WriteAllBytes(SaveFolder + "Whiteboard.jpg", BitmapToBytes(Properties.Resources.Whiteboard));

//型別轉換
public static byte[] BitmapToBytes(System.Drawing.Bitmap Bitmap)
        {
            MemoryStream ms = null;
            try
            {
                ms = new MemoryStream();
                Bitmap.Save(ms, Bitmap.RawFormat);
                byte[] byteImage = new Byte[ms.Length];
                byteImage = ms.ToArray();
                return byteImage;
            }
            catch (ArgumentNullException ex)
            {
                throw ex;
            }
            finally
            {
                ms.Close();
            }
        } 
```
