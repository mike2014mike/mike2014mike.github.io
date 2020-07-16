---
layout:     post
title:      C# WPF 加入 GIF 動畫圖檔
date:       2019-04-01 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - GIF
 - WPF
---


## 說明
* 找到一個好用的套件，可以很方便的在 WPF 中放入 GIF 圖檔。
* 這個在工作上我打算拿來用在 Loading 的動畫。


## Package
* WpfAnimatedGif.1.4.13

## MainWindow.xaml
```xml
<Window x:Class="tryGIF.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:gif="http://wpfanimatedgif.codeplex.com"
        Title="MainWindow" Height="350" Width="525">
    <!--上面的部分加上 xmlns:gif="http://wpfanimatedgif.codeplex.com"-->
        <Grid>
        <Image gif:ImageBehavior.AnimatedSource="Images/凶手是誰呢.gif" />
        <!--sample-->
        <!--記得要用[工具]->[NuGet套件管理員]->[管理方案的Nuget套件]->[搜尋WpfAnimatedGif並安裝之]-->
    </Grid>
</Window>

```



## 執行畫面
![執行畫面預覽](https://i.imgur.com/gGG23T9.gif)