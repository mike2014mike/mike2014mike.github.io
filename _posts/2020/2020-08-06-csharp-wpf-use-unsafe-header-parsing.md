---
layout:     post
title:      C# WPF 抓圖遇到「伺服器認可通訊協定違規....」例外
date:       2020-08-06 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - WPF
---


## 說明
* 雲端電子白板專案遇到向伺服器抓圖更新的時候，遇到 `「伺服器認可通訊協定違規. Section=ResponseStatusLine」` 的例外而報錯。

![伺服器認可通訊協定違規](https://i.imgur.com/MyA6Bok.png)

* 請示 Google 大神後，找到解決的方式是在 Web.Config 或 App.Config 裡面加上下面這串設定值，也就是要設定 `useUnsafeHeaderParsing="true"`。

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <system.net>
        <settings>
            <httpWebRequest useUnsafeHeaderParsing="true" />
        </settings>
    </system.net>
</configuration>
```
* But... WPF 似乎沒有 App.Config 這個檔案，如果是透過程式動態設定，就如下：

```csharp
using System.Configuration;
using System.Net.Configuration;
// System.Configuration.dll 記得加入參考

private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //解決「伺服器認可通訊協定違規. Section=...」問題
            var config = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
            var settings = (SettingsSection)config.GetSection("system.net/settings");
            settings.HttpWebRequest.UseUnsafeHeaderParsing = true;
            config.Save(ConfigurationSaveMode.Modified);
            ConfigurationManager.RefreshSection("system.net/settings");
        }
```

* 編譯後可發現會產生 `appname.vshost.exe.Config` 這個檔案，將其複製一份，更名為 `appname.exe.Config` 即可，內容其實跟前面的 xml 是一樣的。

*  註： appname 就是你自己的專案名稱/應用程式名稱。