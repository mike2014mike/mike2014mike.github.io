---
layout:     post
title:      C# WPF 電子時鐘、碼表、試用提示
date:       2019-04-16 10:37:19
author:     Mike Chen
summary:    
categories: Side-Project
thumbnail:  code
tags:
 - C-Sharp
 - WPF
---


## 說明
* 未來部分地方需要電子時鐘與碼表的畫面，這邊也先實作出來備用。
* 順便實作了計算使用者的使用時間，可應用在試用時間提醒。


## MainWindow.xaml
```xml
<Window x:Class="WPF_Clock.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525">
    <Grid Name="panel" Background="Black">
        <Image Height="115" HorizontalAlignment="Left" Margin="42,104,0,0" Name="imgH1" Stretch="Uniform" VerticalAlignment="Top" Width="72" Source="/WPF_Clock;component/Images/0.png" />
        <Image Height="115" HorizontalAlignment="Left" Margin="120,104,0,0" Name="imgH2" Source="/WPF_Clock;component/Images/0.png" Stretch="Uniform" VerticalAlignment="Top" Width="72" />
        <Image Height="115" HorizontalAlignment="Left" Margin="210,104,0,0" Name="imgM1" Source="/WPF_Clock;component/Images/0.png" Stretch="Uniform" VerticalAlignment="Top" Width="72" />
        <Image Height="115" HorizontalAlignment="Left" Margin="288,104,0,0" Name="imgM2" Source="/WPF_Clock;component/Images/0.png" Stretch="Uniform" VerticalAlignment="Top" Width="72" />
        <Image Height="59" HorizontalAlignment="Left" Margin="366,160,0,0" Name="imgS1" Source="/WPF_Clock;component/Images/0.png" Stretch="Uniform" VerticalAlignment="Top" Width="42" />
        <Image Height="59" HorizontalAlignment="Left" Margin="406,160,0,0" Name="imgS2" Source="/WPF_Clock;component/Images/0.png" Stretch="Uniform" VerticalAlignment="Top" Width="42" />
        <Label Content=":" Height="115" HorizontalAlignment="Left" Margin="186,104,0,0" Name="label1" VerticalAlignment="Top" Foreground="#FFFF4A00" Width="24" FontSize="72" />
        <Button Content="時鐘" Height="23" HorizontalAlignment="Left" Margin="42,33,0,0" Name="button1" VerticalAlignment="Top" Width="75" Click="button1_Click" />
        <Button Content="碼表開始" Height="23" HorizontalAlignment="Left" Margin="135,33,0,0" Name="button2" VerticalAlignment="Top" Width="75" Click="button2_Click" />
        <Button Content="停止" Height="23" HorizontalAlignment="Left" Margin="235,33,0,0" Name="button3" VerticalAlignment="Top" Width="75" Click="button3_Click" />
        <Button Content="歸零" Height="23" HorizontalAlignment="Left" Margin="333,33,0,0" Name="button4" VerticalAlignment="Top" Width="75" Click="button4_Click" />
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
using System.Drawing;
using System.Windows.Threading;

namespace WPF_Clock
{
    /// <summary>
    /// MainWindow.xaml 的互動邏輯
    /// </summary>
    public partial class MainWindow : Window
    {
        //將0~9數字圖片儲存在Image陣列中  
        private BitmapImage[] image = new BitmapImage[10];

        private DispatcherTimer ShowTimer, UsingTimer;

        private DateTime timeStart, usingTimeStart;

        

        public MainWindow()
        {
            InitializeComponent();

            for (int i = 0; i < 10; i++)
            {
                image[i] = new BitmapImage(new Uri("/WPF_Clock;component/Images/" + i.ToString() + ".png", UriKind.Relative));              
            }

            usingTimeStart = DateTime.Now;

            UsingTimer = new System.Windows.Threading.DispatcherTimer();
            UsingTimer.Tick += new EventHandler(UsingTimerMessage);//起個Timer一直獲取當前時間
            UsingTimer.Interval = new TimeSpan(0, 0, 0, 1, 0);
            UsingTimer.Start();

            
        }
        //===================
        public void UsingTimerMessage(object sender, EventArgs e)
        {
            DateTime timeEnd = DateTime.Now;
            TimeSpan differ = timeEnd - usingTimeStart;

            if (differ.Seconds >= 10)
            {
                MessageBox.Show("您已經使用了10秒");
                UsingTimer.Stop();

                usingTimeStart = DateTime.Now;
                UsingTimer.Start();
            }
        }
        
        //===================
        private void button1_Click(object sender, RoutedEventArgs e)
        {
            ShowTimer = new System.Windows.Threading.DispatcherTimer();
            ShowTimer.Tick += new EventHandler(ShowCurTimer);//起個Timer一直獲取當前時間
            ShowTimer.Interval = new TimeSpan(0, 0, 0, 1, 0);
            ShowTimer.Start();
        }
        //===================
        public void ShowCurTimer(object sender, EventArgs e)
        {
            int hh = DateTime.Now.Hour;                       //取得小時數字  
            int hh1 = hh / 10;
            int hh2 = hh % 10;
            imgH1.Source = image[hh1];
            imgH2.Source = image[hh2];

            int mm = DateTime.Now.Minute;                      //取得分鐘數字  
            int mm1 = mm / 10;
            int mm2 = mm % 10;
            imgM1.Source = image[mm1];
            imgM2.Source = image[mm2];

            int ss = DateTime.Now.Second;                       //取得秒數字  
            int ss1 = ss / 10;
            int ss2 = ss % 10;
            imgS1.Source = image[ss1];
            imgS2.Source = image[ss2];
        }


        private void button2_Click(object sender, RoutedEventArgs e)
        {
            timeStart = DateTime.Now;

            ShowTimer = new System.Windows.Threading.DispatcherTimer();
            ShowTimer.Tick += new EventHandler(ShowCurTimer2);//起個Timer一直獲取當前時間
            ShowTimer.Interval = new TimeSpan(0, 0, 0, 0, 500);
            ShowTimer.Start();

            
        }

        public void ShowCurTimer2(object sender, EventArgs e)
        {
            DateTime timeEnd = DateTime.Now;
            TimeSpan differ = timeEnd - timeStart;

            int hh = differ.Hours;                       //取得小時數字  
            int hh1 = hh / 10;
            int hh2 = hh % 10;
            imgH1.Source = image[hh1];
            imgH2.Source = image[hh2];

            int mm = differ.Minutes;                      //取得分鐘數字  
            int mm1 = mm / 10;
            int mm2 = mm % 10;
            imgM1.Source = image[mm1];
            imgM2.Source = image[mm2];

            int ss = differ.Seconds;                       //取得秒數字  
            int ss1 = ss / 10;
            int ss2 = ss % 10;
            imgS1.Source = image[ss1];
            imgS2.Source = image[ss2];
        }

        private void button3_Click(object sender, RoutedEventArgs e)
        {
            if (ShowTimer != null)
                ShowTimer.Stop();
        }

        private void button4_Click(object sender, RoutedEventArgs e)
        {
            if (ShowTimer!=null)
                ShowTimer.Stop();

            foreach (UIElement tObj in panel.Children)
            {
                if ((tObj is System.Windows.Controls.Image) == false) // 若不是 button 則跳過.
                    continue;
                System.Windows.Controls.Image tImage = (System.Windows.Controls.Image)tObj;
                tImage.Source = image[0];
            }
        }
    }
}

```


## 執行畫面
![執行畫面預覽](https://i.imgur.com/MdG5s9B.gif)