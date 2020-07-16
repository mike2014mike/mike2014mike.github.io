---
layout:     post
title:      C# WPF Windwos 內建鼠標切換
date:       2019-04-08 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - Cursor
 - WPF
---


## 說明
* 電子白板上不同功能需對應不同鼠標，這裡程序可將全部內建鼠標做切換預覽。


## MainWindow.xaml
```xml
<Window x:Class="WPF_Cursors.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525">
    <StackPanel>
        <Border Width="377">
            <StackPanel Orientation="Horizontal"
                HorizontalAlignment="Center">
                <StackPanel Margin="10">
                    <Label HorizontalAlignment="Left">Cursor Type</Label>
                    <ComboBox Width="100"
                  SelectionChanged="CursorTypeChanged"
                  HorizontalAlignment="Left"
                  Name="CursorSelector">
                        <ComboBoxItem Content="AppStarting" />
                        <ComboBoxItem Content="ArrowCD" />
                        <ComboBoxItem Content="Arrow" />
                        <ComboBoxItem Content="Cross" />
                        <ComboBoxItem Content="HandCursor" />
                        <ComboBoxItem Content="Help" />
                        <ComboBoxItem Content="IBeam" />
                        <ComboBoxItem Content="No" />
                        <ComboBoxItem Content="None" />
                        <ComboBoxItem Content="Pen" />
                        <ComboBoxItem Content="ScrollSE" />
                        <ComboBoxItem Content="ScrollWE" />
                        <ComboBoxItem Content="SizeAll" />
                        <ComboBoxItem Content="SizeNESW" />
                        <ComboBoxItem Content="SizeNS" />
                        <ComboBoxItem Content="SizeNWSE" />
                        <ComboBoxItem Content="SizeWE" />
                        <ComboBoxItem Content="UpArrow" />
                        <ComboBoxItem Content="WaitCursor" />
                        <!--<ComboBoxItem Content="Custom" />-->
                    </ComboBox>
                </StackPanel>
                <!-- The user can select different cursor types using this ComboBox -->
                
                <StackPanel Margin="10" Orientation="Horizontal">
                    <Button Content="畫筆" Height="23" Name="btnPen" Width="75" Click="btnPen_Click" />
                    <Button Content="板擦" Height="23" Name="btnEraser" Width="75" Click="btnEraser_Click" />
                </StackPanel>
            </StackPanel>
        </Border>
        
        <!-- When the mouse pointer is over this Border -->
        <!-- the selected cursor type is shown -->
        <InkCanvas Name="DisplayArea" Height="198" Width="388"
          Margin="20" Background="AliceBlue">
            <Label HorizontalAlignment="Center">
                Move Mouse Pointer Over This Area
            </Label>
        </InkCanvas>
    </StackPanel>
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
using System.Windows.Ink;

namespace WPF_Cursors
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

        private void CursorTypeChanged(object sender, SelectionChangedEventArgs e)
        {
            ComboBox source = e.Source as ComboBox;

            if (source != null)
            {
                ComboBoxItem selectedCursor = source.SelectedItem as ComboBoxItem;

                DisplayArea.UseCustomCursor = true;


                // Changing the cursor of the Border control 
                // by setting the Cursor property
                switch (selectedCursor.Content.ToString())
                {
                    case "AppStarting":
                        DisplayArea.Cursor = Cursors.AppStarting;
                        break;
                    case "ArrowCD":
                        DisplayArea.Cursor = Cursors.ArrowCD;
                        break;
                    case "Arrow":
                        DisplayArea.Cursor = Cursors.Arrow;
                        break;
                    case "Cross":
                        DisplayArea.Cursor = Cursors.Cross;
                        break;
                    case "HandCursor":
                        DisplayArea.Cursor = Cursors.Hand;
                        break;
                    case "Help":
                        DisplayArea.Cursor = Cursors.Help;
                        break;
                    case "IBeam":
                        DisplayArea.Cursor = Cursors.IBeam;
                        break;
                    case "No":
                        DisplayArea.Cursor = Cursors.No;
                        break;
                    case "None":
                        DisplayArea.Cursor = Cursors.None;
                        break;
                    case "Pen":
                        DisplayArea.Cursor = Cursors.Pen;
                        break;
                    case "ScrollSE":
                        DisplayArea.Cursor = Cursors.ScrollSE;
                        break;
                    case "ScrollWE":
                        DisplayArea.Cursor = Cursors.ScrollWE;
                        break;
                    case "SizeAll":
                        DisplayArea.Cursor = Cursors.SizeAll;
                        break;
                    case "SizeNESW":
                        DisplayArea.Cursor = Cursors.SizeNESW;
                        break;
                    case "SizeNS":
                        DisplayArea.Cursor = Cursors.SizeNS;
                        break;
                    case "SizeNWSE":
                        DisplayArea.Cursor = Cursors.SizeNWSE;
                        break;
                    case "SizeWE":
                        DisplayArea.Cursor = Cursors.SizeWE;
                        break;
                    case "UpArrow":
                        DisplayArea.Cursor = Cursors.UpArrow;
                        break;
                    case "WaitCursor":
                        DisplayArea.Cursor = Cursors.Wait;
                        break;
                    //case "Custom":
                    //    DisplayArea.Cursor = CustomCursor;
                    //    break;
                    default:
                        break;
                }

                // If the cursor scope is set to the entire application
                // Use OverrideCursor to force the cursor for all elements
                //if (cursorScopeElementOnly == false)
                //{
                //    Mouse.OverrideCursor = DisplayArea.Cursor;
                //}
            }
        }

        private void CursorScopeSelected(object sender, RoutedEventArgs e)
        {

        }

        private void btnEraser_Click(object sender, RoutedEventArgs e)
        {
            
            DisplayArea.EditingMode = InkCanvasEditingMode.EraseByPoint;
            DisplayArea.EraserShape = new EllipseStylusShape(50.0, 50.0);
            DisplayArea.UseCustomCursor = true;
            DisplayArea.Cursor = Cursors.Hand;
        }

        private void btnPen_Click(object sender, RoutedEventArgs e)
        {
            DisplayArea.EditingMode = InkCanvasEditingMode.Ink;
            
            DisplayArea.UseCustomCursor = true;
            DisplayArea.Cursor = Cursors.Pen;
        }
    }
}

```


## 執行畫面
![執行畫面預覽]()