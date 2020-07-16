---
layout:     post
title:      C# WPF 自訂滑鼠圖示實作板擦功能
date:       2019-09-06 10:37:19
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
* 電子白板有板擦需求，雖然沒要求圖示也變成板擦，但我還是實作出來了就先放這備用吧！


## MainWindow.xaml

```xml
<Window x:Class="WPF_CustomCursor.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525" WindowState="Maximized">
    
    <Grid>
        <InkCanvas Name="inkcanvas" Background="DarkGreen"></InkCanvas>
        <StackPanel Orientation="Horizontal" VerticalAlignment="Top">
            <Button Content="板擦" Height="23" Name="btnEraser" Width="61" Click="btnEraser_Click" />
            <Button Content="粉筆" Height="23" Name="btnPen" Width="61" Click="btnPen_Click" />
        </StackPanel>
        
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
using System.Runtime.InteropServices;
using System.Windows.Interop;
using Microsoft.Win32.SafeHandles;
using System.Windows.Ink;

namespace WPF_CustomCursor
{
    /// <summary>
    /// MainWindow.xaml 的互動邏輯
    /// </summary>
    public partial class MainWindow : Window
    {
        

        public MainWindow()
        {
            InitializeComponent();
            
            inkcanvas.EditingMode = InkCanvasEditingMode.Ink;
            inkcanvas.DefaultDrawingAttributes.Color = Colors.White;
            inkcanvas.UseCustomCursor = true;
            inkcanvas.Cursor = Cursors.Pen;
        }

        private void btnEraser_Click(object sender, RoutedEventArgs e)
        {
            Bitmap img = new Bitmap(Application.GetResourceStream(new Uri(@"/WPF_CustomCursor;component/Images/eraser.png", UriKind.Relative)).Stream);

            Bitmap resizeImg = CursorHelper.Resize(img, 0.5);

            inkcanvas.Cursor = CursorHelper.InternalCreateCursor(resizeImg, resizeImg.Width / 2, resizeImg.Height / 2);

            inkcanvas.EditingMode = InkCanvasEditingMode.EraseByPoint;
            inkcanvas.EraserShape = new RectangleStylusShape(resizeImg.Width, resizeImg.Height);
        }

        private void btnPen_Click(object sender, RoutedEventArgs e)
        {
            inkcanvas.EditingMode = InkCanvasEditingMode.Ink;
            inkcanvas.Cursor = Cursors.Pen;
        }

        
    }
}

```

## CursorHelper.cs

```csharp
using System;
using System.IO;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using System.Windows;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using Microsoft.Win32.SafeHandles;

namespace WPF_CustomCursor
{
    public class CursorHelper
    {
        private static class NativeMethods
        {
            //參考 http://msdn.microsoft.com/en-us/library/ms648052(v=vs.85).aspx ，做出一樣的Struct，用來複寫系統的游標。
            public struct IconInfo
            {
                public bool fIcon;
                public int xHotspot;
                public int yHotspot;
                public IntPtr hbmMask;
                public IntPtr hbmColor;
            }

            [DllImport("user32.dll")]
            public static extern SafeIconHandle CreateIconIndirect(ref IconInfo icon);

            [DllImport("user32.dll")]
            public static extern bool DestroyIcon(IntPtr hIcon);

            [DllImport("user32.dll")]
            [return: MarshalAs(UnmanagedType.Bool)]
            public static extern bool GetIconInfo(IntPtr hIcon, ref IconInfo pIconInfo);
        }

        [SecurityPermission(SecurityAction.LinkDemand, UnmanagedCode = true)]
        private class SafeIconHandle : SafeHandleZeroOrMinusOneIsInvalid
        {
            public SafeIconHandle()
                : base(true)
            {
            }

            override protected bool ReleaseHandle()
            {
                return NativeMethods.DestroyIcon(handle);
            }
        }

        /// <summary>
        /// 透過Bitmap建立圖形游標
        /// </summary>
        /// <param name="bitmap">要當成游標的Bitmap</param>
        /// <param name="xHotSpot">游標頂點的X軸位移</param>
        /// <param name="yHotSpot">游標頂點的Y軸位移</param>
        /// <returns>自訂的游標物件</returns>
        public static Cursor InternalCreateCursor(System.Drawing.Bitmap bitmap, int xHotSpot, int yHotSpot)
        {
            var iconInfo = new NativeMethods.IconInfo();
            NativeMethods.GetIconInfo(bitmap.GetHicon(), ref iconInfo);

            iconInfo.xHotspot = xHotSpot;
            iconInfo.yHotspot = yHotSpot;
            iconInfo.fIcon = false;

            SafeIconHandle cursorHandle = NativeMethods.CreateIconIndirect(ref iconInfo);
            return CursorInteropHelper.Create(cursorHandle);
        }

        /// <summary>
        /// 用來以UIElement建立自定游標
        /// </summary>
        /// <param name="element">要當成游標的UIElement</param>
        /// <param name="xHotSpot">游標頂點的X軸位移</param>
        /// <param name="yHotSpot">游標頂點的Y軸位移</param>
        /// <returns>自訂的游標物件</returns>
        public static Cursor CreateCursor(UIElement element, int xHotSpot = 0, int yHotSpot = 0)
        {
            element.Measure(new Size(double.PositiveInfinity, double.PositiveInfinity));
            element.Arrange(new Rect(new Point(), element.DesiredSize));

            RenderTargetBitmap renderTargetBitmap = new RenderTargetBitmap(
                (int)element.DesiredSize.Width, (int)element.DesiredSize.Height,
                96, 96, PixelFormats.Pbgra32);

            renderTargetBitmap.Render(element);

            var encoder = new PngBitmapEncoder();
            encoder.Frames.Add(BitmapFrame.Create(renderTargetBitmap));

            using (var memoryStream = new MemoryStream())
            {
                encoder.Save(memoryStream);
                using (var bitmap = new System.Drawing.Bitmap(memoryStream))
                {
                    return InternalCreateCursor(bitmap, xHotSpot, yHotSpot);
                }
            }
        }

        public static System.Drawing.Bitmap Resize(System.Drawing.Bitmap originImage, Double times)
        {
            int width = Convert.ToInt32(originImage.Width * times);
            int height = Convert.ToInt32(originImage.Height * times);

            return Process(originImage, originImage.Width, originImage.Height, width, height);
        }

        private static System.Drawing.Bitmap Process(System.Drawing.Bitmap originImage, int oriwidth, int oriheight, int width, int height)
        {
            System.Drawing.Bitmap resizedbitmap = new System.Drawing.Bitmap(width, height);
            System.Drawing.Graphics g = System.Drawing.Graphics.FromImage(resizedbitmap);
            g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.High;
            g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
            g.Clear(System.Drawing.Color.Transparent);
            g.DrawImage(originImage, new System.Drawing.Rectangle(0, 0, width, height), new System.Drawing.Rectangle(0, 0, oriwidth, oriheight), System.Drawing.GraphicsUnit.Pixel);
            return resizedbitmap;
        }
    }
}


```

## 執行畫面
![執行畫面預覽](https://i.imgur.com/ncUIydu.png)