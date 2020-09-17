---
layout:     post
title:      C# 之 Console 基本用法整理
date:       2018-08-01 09:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  vscode
tags:
 - VSCode
 - C-Sharp
---

### 輸出文字
* Write：不會換行，若要換行需這樣寫 `Console.Write("Hello Mike!" & vbCrLf)`
* WriteLine：會自動換行 `Console.WriteLine("Hello Mike!)`

### 輸入文字
* Read：讀取輸入字串字首的ASCII `變數 = Console.Read()`
* ReadLine：讀取一整行的輸入文字字串 `變數 = Console.ReadLine()`
* ReadKey：用來當做「按下任意鍵繼續」的功能

```
Console.Write("按下任意鍵繼續…")
Console.ReadKey()
```

### 字串連接
* 使用 & 連接： `Console.Write("S=" & S)`
* 使用變數連接： `Console.Write("S={0}", S)`

### 清除所有文字
* Clear 清除主控台的所有文字：`Console.Clear()`

### 綜合範例

```csharp
using System;

namespace MyConsole {
    class Program {
        static void Main (string[] args) {
            String Input = "";

            try {
                do {
                    Console.Clear ();
                    Console.Write ("請隨便輸入文字：");
                    Input = Console.ReadLine ();
                    Console.WriteLine ("您輸入的文字是：{0}", Input);
                    Console.WriteLine ("請按任意鍵繼續，或按 Ctrl + C 離開。");
                    Console.ReadKey ();
                } while (true);
            } catch (Exception err) {
                Console.WriteLine (err);
            }

        }
    }
}
```

### 參考
* [主控台應用程式 輸入與輸出文字](http://it-easy.tw/vb-net-console-read-write/)