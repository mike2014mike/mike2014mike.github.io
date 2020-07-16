---
layout:     post
title:      C# WPF 延遲幾秒後執行
date:       2019-09-05 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - WPF
---


## 說明
* 這是提示使用者可以滑動的動畫，2秒後要讓它隱藏。
* GIF 動畫是使用之前介紹過的 WpfAnimatedGif。

## Package
* WpfAnimatedGif.1.4.13

## MainWindow.xaml
```xml
<Window x:Class="WPF_DelayCall.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:gif="http://wpfanimatedgif.codeplex.com"
        Title="MainWindow" Height="350" Width="525" Background="DarkGreen">
    <Canvas>
        <Button Content="Show" Canvas.Left="10" Canvas.Top="10" Height="23" HorizontalAlignment="Left" Margin="60,38,0,0" Name="button1" VerticalAlignment="Top" Width="75" Click="button1_Click" />
        <Image Name="swipeGIF" Canvas.Left="10" Canvas.Top="100" Width="400" Visibility="Collapsed"
               gif:ImageBehavior.AnimatedSource="/WPF_DelayCall;component/img/swipe1.gif" />
    </Canvas>
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
using System.Threading;
using System.Windows.Threading;

namespace WPF_DelayCall
{
    /// <summary>
    /// MainWindow.xaml 的互動邏輯
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            swipeGIF.Visibility = System.Windows.Visibility.Visible;


            //方法一：
            DelayCall(2000, () =>
            {
                swipeGIF.Visibility = System.Windows.Visibility.Collapsed;
            });

            //方法二：
            //StartCloseTimer();
        }

        public void DelayCall(int msec, Action fn)
        {
            // Grab the dispatcher from the current executing thread
            Dispatcher d = Dispatcher.CurrentDispatcher;

            // Tasks execute in a thread pool thread
            new System.Threading.Tasks.Task(() =>
            {
                System.Threading.Thread.Sleep(msec);   // delay

                // use the dispatcher to asynchronously invoke the action 
                // back on the original thread
                d.BeginInvoke(fn);
            }).Start();
        }

        private void StartCloseTimer()
        {
            DispatcherTimer timer = new DispatcherTimer();
            timer.Interval = TimeSpan.FromSeconds(2); // 2秒
            timer.Tick += TimerTick;
            timer.Start();
        }

        private void TimerTick(object sender, EventArgs e)
        {
            DispatcherTimer timer = (DispatcherTimer)sender;
            timer.Stop();
            timer.Tick -= TimerTick;

            swipeGIF.Visibility = System.Windows.Visibility.Collapsed;
        }
    }
}

```


## 執行畫面
![執行畫面預覽](https://i.imgur.com/2sboKpQ.gif)