---
layout:     post
title:      用 VSCode 來寫 ASP.NET 網站
date:       2018-09-17 09:37:19
author:     Mike Chen
summary:    
categories: vscode
thumbnail:  vscode
tags:
 - VSCode
 - C#
 - .Net Core SDK
 - ASP.NET Core
---

### 建立網站專案
* 建立專案資料夾 `MyWebsite`，然後執行 .NET Core CLI 建置網站的指令 `dotnet new web`。
![dotnet new web](https://i.imgur.com/gdmGlnz.png)

```
obj/                            # 專案暫存目錄
wwwroot/                        # 預設網站根目錄 (空的)
MyWebsite.csproj                # 專案檔
Program.cs                      # 程式進入檔
Startup.cs                      # 啟動網站設定
```

### 啟動網站
* 啟動網站指令： `dotnet run`。
![dotnet run](https://i.imgur.com/ewLUsCU.png)
![website](https://i.imgur.com/MkFrP0e.png)

### 參考
* [ASP.NET Core 2 系列 - 從頭開始](https://blog.johnwu.cc/article/ironman-day01-asp-net-core-starting.html)