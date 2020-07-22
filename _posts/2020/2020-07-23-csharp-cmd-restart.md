---
layout:     post
title:      C# 利用 cmd 重新啟動
date:       2020-07-23 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - CMD
---


## 說明
* 目前專案 WPF 程式有個重新啟動的需求，可利用 CMD 的方式達成。


## WPF 端

```csharp
private void btnRestart_Click(object sender, RoutedEventArgs e)
        {
            ProcessStartInfo Info = new ProcessStartInfo();
            Info.Arguments = "/C choice /C Y /N /D Y /T 1 & START \"\" \"" + Application.ResourceAssembly.Location + "\"";
            Info.WindowStyle = ProcessWindowStyle.Hidden;
            Info.CreateNoWindow = true;
            Info.FileName = "cmd.exe";
            Process.Start(Info);
            Process.GetCurrentProcess().Kill();
        }
```