---
layout:     post
title:      C# WPF ini 設定檔讀寫
date:       2019-01-10 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - ini
 - WPF
---


## 說明
* ini 是很多應用程式常用的設定檔，這裡實作了讀寫的方式。

## SetupIniIP.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;

namespace WPF_Setup_ini
{
    class SetupIniIP
    {
        public string path;
        [DllImport("kernel32", CharSet = CharSet.Unicode)]
        private static extern long WritePrivateProfileString(string section,
        string key, string val, string filePath);
        [DllImport("kernel32", CharSet = CharSet.Unicode)]
        private static extern int GetPrivateProfileString(string section,
        string key, string def, StringBuilder retVal,
        int size, string filePath);
        public void IniWriteValue(string Section, string Key, string Value, string inipath)
        {
            WritePrivateProfileString(Section, Key, Value, AppDomain.CurrentDomain.BaseDirectory + "\\" + inipath);
        }
        public string IniReadValue(string Section, string Key, string inipath)
        {
            StringBuilder temp = new StringBuilder(255);
            int i = GetPrivateProfileString(Section, Key, "", temp, 255, AppDomain.CurrentDomain.BaseDirectory + "\\" + inipath);
            return temp.ToString();
        }
    }
}

```


## MainWindow.xaml
```xml
<Window x:Class="WPF_Setup_ini.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525" Loaded="Window_Loaded" Closed="Window_Closed">
    <Grid>
        <TextBox Height="23" HorizontalAlignment="Left" Margin="86,12,0,0" Name="textBox_path" VerticalAlignment="Top" Width="342" IsEnabled="False" IsReadOnly="True" />
        <Label Content="儲存路徑：" Height="28" HorizontalAlignment="Left" Margin="20,12,0,0" Name="label1" VerticalAlignment="Top" />
        <Button Content="選取" Height="23" Margin="434,12,34,0" Name="button1" VerticalAlignment="Top" Click="button1_Click" />
        <CheckBox Content="自動儲存" Height="16" HorizontalAlignment="Left" Margin="401,54,0,0" Name="checkBox_autosave" VerticalAlignment="Top" />
        <ComboBox Height="23" HorizontalAlignment="Left" Margin="86,82,0,0" Name="comboBox1" VerticalAlignment="Top" Width="65" Loaded="comboBox1_Loaded" SelectionChanged="comboBox1_SelectionChanged" />
        <Label Content="字型大小：" Height="28" HorizontalAlignment="Left" Margin="20,82,0,0" Name="label2" VerticalAlignment="Top" />
        <Slider Height="23" HorizontalAlignment="Left" Margin="86,132,0,0" Name="slider1" VerticalAlignment="Top" Width="342" Maximum="100" TickPlacement="BottomRight" TickFrequency="10" IsSnapToTickEnabled="True"/>
        <TextBox Height="23" HorizontalAlignment="Left" Margin="430,132,0,0" Name="textBox_value"
                 VerticalAlignment="Top" Width="39" Text="{Binding ElementName=slider1, Path=Value, UpdateSourceTrigger=PropertyChanged}" />
        <Label Content="壓縮比例：" Height="28" HorizontalAlignment="Left" Margin="20,127,0,0" Name="label3" VerticalAlignment="Top" />
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
using System.IO;
using System.Windows.Forms;

namespace WPF_Setup_ini
{
    /// <summary>
    /// MainWindow.xaml 的互動邏輯
    /// </summary>
    public partial class MainWindow : Window
    {
        public string filename = "setting.ini";
        SetupIniIP ini = new SetupIniIP();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            FolderBrowserDialog path = new FolderBrowserDialog();
            path.ShowDialog();
            textBox_path.Text = path.SelectedPath;
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                if (File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\" + filename))
                {
                    textBox_path.Text = ini.IniReadValue("Setting", "SavePath", filename);
                    checkBox_autosave.IsChecked = Convert.ToBoolean(ini.IniReadValue("Setting", "AutoSave", filename));
                    comboBox1.SelectedIndex = Convert.ToInt32(ini.IniReadValue("Setting", "FontSize", filename));
                    slider1.Value = Convert.ToInt32(ini.IniReadValue("Setting", "CompressRatio", filename));
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            ini.IniWriteValue("Setting", "SavePath", textBox_path.Text, filename);
            ini.IniWriteValue("Setting", "AutoSave", checkBox_autosave.IsChecked.ToString(), filename);
            ini.IniWriteValue("Setting", "FontSize", comboBox1.SelectedIndex.ToString(), filename);
            ini.IniWriteValue("Setting", "CompressRatio", textBox_value.Text, filename);
        }

        private void comboBox1_Loaded(object sender, RoutedEventArgs e)
        {
            // ... A List.
            List<string> data = new List<string>();
            data.Add("大");
            data.Add("中");
            data.Add("小");
            data.Add("極小");
            
            // ... Assign the ItemsSource to the List.
            comboBox1.ItemsSource = data;

            // ... Make the first item selected.
            if (!File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\" + filename))
            {
                comboBox1.SelectedIndex = 0;
            }
            
        }

        private void comboBox1_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            
            // ... Set SelectedItem as Window Title.
            string value = comboBox1.SelectedItem as string;
            //this.Title = "Selected: " + value;
        }
    }
}


```


## 執行畫面
![執行畫面預覽](https://i.imgur.com/pHTJVaG.gif)