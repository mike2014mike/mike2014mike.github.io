---
layout:     post
title:      C# WPF的滑鼠、觸控事件偵測和自訂縮小放大關閉等按鈕
date:       2020-07-20 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - WPF
 - TOUCH
 - MOUSE
---


## 說明
* 最近電子白板出現了一個 BUG，為了判別是滑鼠/觸控造成的，需要程式來偵測滑鼠與觸控事件。
* 目標是偵測視窗右上角的放大、縮小、關閉等按鈕的所有事件。


## 思路
* 因為要同時能偵測`滑鼠(Mouse)`與`觸控(Touch)`，我直覺就是直接使用 WPF。
* 原生放大、縮小、關閉等按鈕預設應該是無法偵測事件的(如果可以請告訴我，謝謝)，所以只能自己刻一套。
* 因為我只是要 Mouse 和 Touch 的所有事件，所以有加上條件`if (eventName.Contains("Mouse") || eventName.Contains("Touch")){...}`。如果拿掉，就會將所有偵測到的事件都顯示出來。

## XAML

```xml
<Window x:Class="WpfApplication1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="滑鼠/觸控事件偵測程序" Height="350" Width="525" WindowStartupLocation="CenterScreen" WindowState="Normal" WindowStyle="None"
        ResizeMode="CanResizeWithGrip" AllowsTransparency="True" Loaded="Window_Loaded">
    <Window.Resources>


        <Style x:Key="TitleButtonStyle" TargetType="Button">
            <Setter Property="Padding" Value="11,3" />
            <Setter Property="FontSize" Value="15" />
            <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate TargetType="Button">
                        <Grid>
                            <Grid Background="Transparent">
                                <Border x:Name="BackgroundAnimation" Background="{TemplateBinding Background}" />
                                <Rectangle
                                    x:Name="BackgroundGradient"
                                    Fill="Black"
                                    Opacity="0" />
                            </Grid>

                            <ContentPresenter
                                x:Name="contentPresenter"
                                Margin="{TemplateBinding Padding}"
                                HorizontalAlignment="{TemplateBinding HorizontalContentAlignment}"
                                VerticalAlignment="{TemplateBinding VerticalContentAlignment}"
                                Content="{TemplateBinding Content}"
                                ContentTemplate="{TemplateBinding ContentTemplate}" />
                            <Rectangle
                                x:Name="DisabledVisualElement"
                                Fill="#FFFFFFFF"
                                IsHitTestVisible="false"
                                Opacity="0"
                                RadiusX="3"
                                RadiusY="3" />
                            <Rectangle
                                x:Name="FocusVisualElement"
                                Margin="1"
                                IsHitTestVisible="false"
                                Opacity="0"
                                RadiusX="2"
                                RadiusY="2"
                                Stroke="#FF6DBDD1"
                                StrokeThickness="1" />
                            <VisualStateManager.VisualStateGroups>
                                <VisualStateGroup x:Name="CommonStates">
                                    <VisualState x:Name="Normal" />
                                    <VisualState x:Name="MouseOver">
                                        <Storyboard>
                                            <DoubleAnimation
                                                Storyboard.TargetName="BackgroundGradient"
                                                Storyboard.TargetProperty="Opacity"
                                                To="0.2"
                                                Duration="0" />
                                        </Storyboard>
                                    </VisualState>
                                    <VisualState x:Name="Pressed">
                                        <Storyboard>
                                            <DoubleAnimation
                                                Storyboard.TargetName="BackgroundGradient"
                                                Storyboard.TargetProperty="Opacity"
                                                To="0.4"
                                                Duration="0" />
                                        </Storyboard>
                                    </VisualState>
                                    <VisualState x:Name="Disabled">
                                        <Storyboard>
                                            <DoubleAnimation
                                                Storyboard.TargetName="DisabledVisualElement"
                                                Storyboard.TargetProperty="Opacity"
                                                To=".55"
                                                Duration="0" />
                                        </Storyboard>
                                    </VisualState>
                                </VisualStateGroup>

                            </VisualStateManager.VisualStateGroups>
                        </Grid>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
            <Style.Triggers>
                <Trigger Property="IsMouseOver" Value="True">
                    <Setter Property="Foreground" Value="White" />
                </Trigger>
            </Style.Triggers>
        </Style>

    </Window.Resources>
    
    <Canvas Name="canvas" Background="Green">
        <RichTextBox Name="txtLog" VerticalScrollBarVisibility="Hidden" Foreground="Yellow" Background="#50000000"
                     Width="{Binding Path=ActualWidth, ElementName=canvas}"
                Height="{Binding Path=ActualHeight, ElementName=canvas}"
                     ></RichTextBox>
        
        <Grid Name="custToolbar" Width="{Binding Path=ActualWidth, ElementName=canvas}" MouseDown="custToolbar_MouseDown">
            <Rectangle Fill="White" />
            <Label Content="滑鼠/觸控事件偵測程序"></Label>
            <StackPanel
                Margin="0,0,5,0"
                HorizontalAlignment="Right"
                VerticalAlignment="Top"
                Orientation="Horizontal">
                <Button
                    Height="30"
                    Name="btnMin"
                    Background="Transparent" Content="0"
                    FontFamily="Webdings"
                    Style="{StaticResource TitleButtonStyle}"
                    ToolTip="最小化" Click="btnMin_Click" />
               
                <Button
                    Name="btnMax"
                    Background="Transparent" Content="1"
                    FontFamily="Webdings"
                    Style="{StaticResource TitleButtonStyle}"
                    ToolTip="最大化" Click="btnMax_Click" />
                <Button
                    Name="btnClose"
                    Width="50"
                    Background="#C65050" Content="r"
                    FontFamily="Webdings"
                    Foreground="White"
                    Style="{StaticResource TitleButtonStyle}"
                    ToolTip="關閉" Click="btnClose_Click" />
            </StackPanel>

            
        </Grid>
        
        
        
        <Border x:Name="border" BorderBrush="Black" BorderThickness="1" 
                Width="{Binding Path=ActualWidth, ElementName=canvas}"
                Height="{Binding Path=ActualHeight, ElementName=canvas}"
                >
        </Border>
    </Canvas>
</Window>

```

## CS

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

namespace WpfApplication1
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


        private string getTime() {
            return DateTime.Now.ToString("tt HH:mm:ss");
        }

       

        

        private void btnClose_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void btnMin_Click(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Minimized;
        }

        
        private void btnMax_Click(object sender, RoutedEventArgs e)
        {
            if (this.WindowState == WindowState.Normal)
            {
                this.WindowState = WindowState.Maximized;
                btnMax.ToolTip = "還原";
                btnMax.Content = "2";
            }
            else {
                this.WindowState = WindowState.Normal;
                btnMax.ToolTip = "最大化";
                btnMax.Content = "1";
            }
        }

        

        private void custToolbar_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.LeftButton == MouseButtonState.Pressed)
                this.DragMove();

            if (e.ClickCount == 2) btnMax_Click(null, null);
        }

        /// <summary>
        /// This is used for debugging, when your looking for a specific event
        /// </summary>
        public void RegisterAllEvents(Type type, FrameworkElement target)
        {
            var events = EventManager.GetRoutedEvents();
            foreach (var routedEvent in events)
            {
                EventManager.RegisterClassHandler(type,
                                    routedEvent, new RoutedEventHandler((sender, args) =>
                                    {
                                        string btnName = ((Button)sender).Name;
                                        if (sender != target)
                                            return;
                                        //System.Diagnostics.Debug.WriteLine(args.OriginalSource + "=>" + args.RoutedEvent);
                                        string eventName = args.RoutedEvent.ToString();

                                        if (eventName.Contains("Mouse") || eventName.Contains("Touch"))
                                        {
                                            txtLog.AppendText(getTime() + ": [" + btnName + "] " + eventName + "\n");
                                            txtLog.ScrollToEnd();
                                        }

                                        
                                    }));
            }
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            RegisterAllEvents(typeof(Button), btnMin);
            RegisterAllEvents(typeof(Button), btnMax);
            RegisterAllEvents(typeof(Button), btnClose);
        }
    }
}

```

## 執行畫面
![執行畫面預覽](https://i.imgur.com/NAeOz0L.png)