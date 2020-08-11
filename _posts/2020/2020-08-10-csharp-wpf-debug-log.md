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
* 軟體開發常常會遇到一些預想不到的 Bug，Debug 的方法有很多種，例如`加入中斷點`查看參數值有無異常、用`try{...}catch(Exception e){ System.Console.WriteLine(e.Message);}`印出錯誤訊息等等。
* 但很多時候會遇到參數沒異常，甚至不會跳出任何錯誤訊息的時候，那要如何除錯呢？這時候就要根據 Log 去做分析、除錯、甚至做到能防呆，因為使用者不一定會按照我們的邏輯去操作。例如原本我們預期守規矩的使用者是先按了A才按B，但就是會有使用者直接去按B，結果導致出錯閃退，連錯誤訊息都看不到，這時基本防呆方法就是先讓B沒法按，按A後才能按B；又或者按B的時候程式先判斷是否按過A，按過A才繼續執行，沒按過就跳出提示。
* 前面的操作順序，如果使用者沒自首，要如何得知呢？就是從 Log 來看，但 Log 並不會自行產生，要如何記錄 Log 呢？

## 思路
* 記錄 Log ，說穿了就是建立一個文字檔，例如 log.txt。
* 如果檔案不存在，就使用 `File.CreateText` 建立並直接寫入；如果檔案已經存在，我們不希望內容被複寫蓋掉，而是要一直堆疊，才能看到所有的歷史記錄，就要使用`File.AppendText`。
* 如果我們還希望能夠自動記錄下時間點，就可以用 `DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss")`自訂時間格式。
* 最後我們就可以在任何您需要記錄的地方，放入 `Log("內容");` 來記錄。
* 以我為例，我常放在事件(Event)觸發的時候，常見如 Click, SelectionChanged, MouseDown, MouseMove, MouseUp, Gesture, TouchDown, TouchMove, TouchUp, ManipulationStarting, ManipulationDelta, ManipulationCompleted 等。
* 如果有使用 Socket 的話，則建議每個 Emit 和 On 都進行記錄，以確保發送和接收的邏輯都正確，不該發送的時候別發送。像我有次就是接收端應該只要接收就好，結果它接收後要做的動作剛好觸發要發送的邏輯，變成無限循環。
* 再來就是前面提到的 `try{...}catch{...}` 攔截的錯誤訊息，也可做記錄，避免程式直接閃退看不出端倪。
* 第二個參數 isPrepend 是考慮到有些人習慣將最新的 log 放在最上面可使用。

## Code
```csharp
        /// <summary>
        /// 建立操作紀錄
        /// </summary>
        /// <param name="log"></param>
        /// <param name="isPrepend"></param>
        private void Log(string log, bool isPrepend = false)
        {
            string logFilePath = AutoSaveFolder + "log.txt";
            //string logFilePath = "log.txt";
            string time = "[" + DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss") + "] ";
            log = time + log;

            //紀錄log
            if (!File.Exists(logFilePath))
            {
                using (StreamWriter sw = File.CreateText(logFilePath))
                {
                    sw.WriteLine(log);
                }
            }


            if (!isPrepend)
            {
                // 插入最後一行
                using (StreamWriter sw = File.AppendText(logFilePath))
                {
                    sw.WriteLine(log);
                }
            }
            else
            {
                List<string> list = new List<string>();
                // 先讀取歷史log
                using (StreamReader sr = File.OpenText(logFilePath))
                {
                    string s = "";
                    while ((s = sr.ReadLine()) != null)
                    {
                        list.Add(s);
                    }
                }

                // 直接複寫，先寫入當前log，再寫入歷史log
                using (StreamWriter sw = File.CreateText(logFilePath))
                {
                    sw.WriteLine(log);
                    foreach (string it in list.ToArray())
                    {
                        sw.WriteLine(it);
                    }
                }
            }

        }
```

## 執行結果

* 第二參數不給值的話，預設 isPrepend = false 是 Append。
```csharp
Log("記錄內容");
```

![Append](https://i.imgur.com/3Fr5HNK.png)

* 第二參數如果給 true 是 Prepend。
```csharp
Log("記錄內容", true);
```

![Prepend](https://i.imgur.com/UPrIiWD.png)