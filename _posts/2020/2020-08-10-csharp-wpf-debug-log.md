---
layout:     post
title:      C# WPF 除錯(Debug) 用的 Log 該如何寫？
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
* 軟體開發常常會遇到一些預想不到的 Bug，Debug 的方法有很多種，例如`加入中斷點`看參數值有無異常、用`try{}catch(Exception e){ System.Console.WriteLine(e.Message);}`印出錯誤訊息等等。
* 但常常會遇到參數沒異常，也不會跳出任何錯誤訊息的時候，要如何除厝呢？這時候可能就要根據 Log 去做分析，但 Log 不會自行產生的，要如何記錄 Log 呢？

## 思路
* 記錄 Log ，說穿了就是建立一個文字檔。
* 如果檔案不存在，就使用 `File.CreateText` 建立並直接寫入；如果檔案已經存在，我們不希望內容被複寫蓋掉，而是要一直堆疊，才能看到所有的歷史記錄，就要使用`File.AppendText`。
* 如果我們還希望能夠自動記錄下時間點，就可以用 `DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss")`自訂時間格式。
* 最後我們就可以在任何您需要記錄 log 的地方，放入 Log("內容"); 來記錄。
* 以我為例，我常放在事件(Event)觸發的時候，常見如 Click, SelectionChanged, MouseDown, MouseMove, MouseUp, Gesture, TouchDown, TouchMove, TouchUp, ManipulationStarting, ManipulationDelta, ManipulationCompleted 等。
* 如果有使用 Socket 的話，則每個 Emit 和 On 都進行記錄，以確保發送和接收的邏輯都正確，不該發送的時候別發送。像我有次就是接收端應該只要接收就好，結果它接收後要做的動作剛好觸發要發送的邏輯，變成無限循環。

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