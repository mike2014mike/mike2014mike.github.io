---
layout:     post
title:      C# 日期時間相減 (TimeSpan)
date:       2018-08-02 10:37:19
author:     Mike Chen
summary:    
categories: C#
thumbnail:  code
tags:
 - C#
---

```csharp
DateTime start = DateTime.Now;   
DateTime end = DateTime.Now;
//C#的日期型態可直接相減並傳回TimeSpan物件
TimeSpan ts = end - start;
 
//時間差換算成秒
String s1 = ts.TotalSeconds.ToString();
//時間差換算成分
String s2 = ts.TotalMinutes.ToString();
```