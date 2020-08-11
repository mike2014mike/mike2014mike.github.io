---
layout:     post
title:      C# WPF Debug 用的 Log 該如何寫？
date:       2020-08-10 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - WPF
---


## 說明
* 軟體開發常常會遇到一些預想不到的 Bug，Debug 的方法有很多種，例如`加入中斷點`看參數值有無異常、用`try{}catch(Exception e){ System.Console.WriteLine(e.Message);}`印出錯誤訊息、或者是`紀錄所有的操作Log`來加以分析。
* 那要如何紀錄 Log 呢？

## 思路
* 記錄 Log ，說穿了就是建立一個文字檔。
* 如果檔案不存在，就使用 `File.CreateText` 建立並直接寫入。
* 如果檔案已經存在，我們不希望文字檔被複寫蓋掉內容，而是希望一直堆疊，才能看到所有的紀錄，就要使用`File.AppendText`。
* 我們還希望能夠自動記錄下時間點，就可以用 `DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss")`自訂時間格式。


## Code
```csharp
private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            Log("現在 Window_Loaded 了");
        }
/// <summary>
/// 建立操作紀錄
/// </summary>
/// <param name="log"></param>
private void Log(string log) {
            string logFilePath = "log.txt";
            string time = "[" + DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss") + "]";

            //檔案不存在，直接寫入紀錄
            if (!File.Exists(logFilePath))
            {
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(logFilePath))
                {
                    sw.WriteLine(time + log);
                }
            }

            //檔案已存在，堆疊紀錄
            using (StreamWriter sw = File.AppendText(logFilePath))
            {
                sw.WriteLine(time + log);
            }
        }
```

## 執行後
* 會在與程式執行檔相同目錄下產生 log.txt 檔案，開啟如下。

![log.txt](https://i.imgur.com/7SxWx5W.png)