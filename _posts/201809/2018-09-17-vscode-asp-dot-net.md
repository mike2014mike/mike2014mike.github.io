---
layout:     post
title:      用 VSCode 來寫 ASP.NET Core 網站
date:       2018-09-17 09:37:19
author:     Mike Chen
summary:    
categories: .NET Core
thumbnail:  vscode
tags:
 - VSCode
 - C#
 - .Net Core SDK
 - ASP.NET Core
---
## 從 Hello World 開始

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


## 生命週期

### 程式進入點
* 預設從 Program.cs 的 Program.Main 做為程式進入點，再從程式進入點把 ASP.NET Core 網站實例化。
* Program.Main 透過 BuildWebHost 方法取得 WebHost 後，再啟動 WebHost；WebHost 就是 ASP.NET Core 的網站實體。
* WebHost.CreateDefaultBuilder：透過此方法建立 WebHost Builder。WebHost Builder 是用來產生 WebHost 的物件。可以在 WebHost 產生之前設定一些前置準備動作，當 WebHost 建立完成時，就可以使用已準備好的物件等。
* UseStartup：設定該 Builder 產生的 WebHost 啟動後，要執行的類別。
* Build：當前置準備都設定完成後，就可以跟 WebHost Builder 呼叫此方法實例化 WebHost，並得到該實例。
* Run：啟動 WebHost。

### Startup.cs 內容
* ConfigureServices 是用來將服務註冊到 DI 容器用的。這個方法可不實做，並不是必要的方法。
* Configure 是必要的方法，一定要實作。但 Configure 方法的參數並不固定，參數的實例都是從 WebHost 注入進來，可依需求增減需要的參數。
* IApplicationBuilder 是最重要的參數也是必要的參數，Request 進出的 Pipeline 都是透過 ApplicationBuilder 來設定。

### Program.cs 改寫

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace MyWebsite {
    public class Program {
        public static void Main (string[] args) {
            Output ("Application - Start");
            var webHost = BuildWebHost (args);
            Output ("Run WebHost");
            webHost.Run ();
            Output ("Application - End");
        }

        public static IWebHost BuildWebHost (string[] args) {
            Output ("Create WebHost Builder");
            var webHostBuilder = WebHost.CreateDefaultBuilder (args)
                .ConfigureServices (services => {
                    Output ("webHostBuilder.ConfigureServices - Called");
                })
                .Configure (app => {
                    Output ("webHostBuilder.Configure - Called");
                })
                .UseStartup<Startup> ();

            Output ("Build WebHost");
            var webHost = webHostBuilder.Build ();

            return webHost;
        }

        public static void Output (string message) {
            Console.WriteLine ($"[{DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")}] {message}");
        }
    }
}
```

### Startup.cs 改寫

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace MyWebsite {
    public class Startup {
        public Startup () {
            Program.Output ("Startup Constructor - Called");
        }

        public void ConfigureServices (IServiceCollection services) {
            Program.Output ("Startup.ConfigureServices - Called");
        }

        public void Configure (IApplicationBuilder app, IApplicationLifetime appLifetime) {
            appLifetime.ApplicationStarted.Register (() => {
                Program.Output ("ApplicationLifetime - Started");
            });

            appLifetime.ApplicationStopping.Register (() => {
                Program.Output ("ApplicationLifetime - Stopping");
            });

            appLifetime.ApplicationStopped.Register (() => {
                Thread.Sleep (5 * 1000);
                Program.Output ("ApplicationLifetime - Stopped");
            });

            app.Run (async (context) => {
                await context.Response.WriteAsync ("Hello World!");
            });

            // For trigger stop WebHost
            var thread = new Thread (new ThreadStart (() => {
                Thread.Sleep (5 * 1000);
                Program.Output ("Trigger stop WebHost");
                appLifetime.StopApplication ();
            }));
            thread.Start ();

            Program.Output ("Startup.Configure - Called");
        }
    }
}
```

![liftcycle](https://i.imgur.com/nRkq8bc.png)
![流程示意圖](https://i.imgur.com/RwAy1mz.png)


## 參考
* [ASP.NET Core 2 系列 - 從頭開始](https://blog.johnwu.cc/article/ironman-day01-asp-net-core-starting.html)
* [ASP.NET Core 2 系列 - 程式生命週期 ](https://blog.johnwu.cc/article/ironman-day02-asp-net-core-application-lifetime.html)