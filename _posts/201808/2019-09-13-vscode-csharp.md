---
layout:     post
title:      用 VSCode 來寫 C# 之紀錄
date:       2018-09-13 09:37:19
author:     Mike Chen
summary:    
categories: vscode
thumbnail:  vscode
tags:
 - VSCode
 - C#
---

### 緣由
小弟一直以來只要開發 C# 程式都是使用 Visual Studio 201x，但最近辦公室搬家，到新廠區，入網申請竟然說要先用程式檢查是否有安裝不合法軟體。令人感到詭異的是 Visual Studio 不論是安裝 `正式版` 或 `Express 版` 都會被說是不合法軟體，只能忍痛移除這地表最強開發神器。惟 Visual Studio Code (簡稱 VSCode ) 可以安然無恙的使用，這才讓我開始了想用 VSCode + .Net Core 開發 C#。只是光是環境建置，就遇到不少問題，這裡做些紀錄。

### 基本訊息
* Windows 8.1 x64
* VS Code 1.26.1
* .Net Core SDK 2.1.3

### 第一個錯誤訊息
出師不利，依照[這篇](https://oomusou.io/vscode/netcore/)實作，安裝了 .Net Core、保哥 .NET Core Extension Pack，執行 `dotnet new` ，結果出現下面的錯誤訊息。查其原因是需要安裝 .NET Framework 4.6.1 以上版本。

```
Failed to load the dll from [C:\Program Files\dotnet\host\fxr\2.1.3\hostfxr.dll], HRESULT: 0x8007007E
The library hostfxr.dll was found, but loading it from C:\Program Files\dotnet\host\fxr\2.1.3\hostfxr.dll failed
  - Installing .NET Core prerequisites might help resolve this problem.
     http://go.microsoft.com/fwlink/?LinkID=798306&clcid=0x409
```

### 安裝 .NET Framework 又出錯
* 安裝 [.NET Framework 4.6.1](https://download.microsoft.com/download/E/4/1/E4173890-A24A-4936-9FC9-AF930FE3FA40/NDP461-KB3102436-x86-x64-AllOS-ENU.exe) 或 [.NET Framework 4.7.2](https://www.microsoft.com/net/download/thank-you/net472) 又出錯。
* 說是 Windows Update 少裝了 [KB2919355](https://www.microsoft.com/zh-tw/download/details.aspx?id=42335) 不給裝 .NET Framework。

### 手動安裝 KB2919355 又一直失敗
* 嘗試數次手動安裝 [KB2919355](https://www.microsoft.com/zh-tw/download/details.aspx?id=42335)，跑了好久，最後都顯示尚未安裝。
![尚未安裝](https://i.imgur.com/0vaeZlZ.png)

```
官網指示：

KB2919442 是 Windows 8.1 更新的必要條件，應在安裝 KB2919355 前先進行安裝。

必須按照下列順序安裝這些 KB：
clearcompressionflag.exe、KB2919355、KB2932046、KB2959977、KB2937592、KB2938439 和 KB2934018。
```

### KB2919355 安裝失敗解法

```
步驟一、使用系統管理員權限開啟 CMD

步驟二、
Windows 8.1(x64)), 輸入:
dism /online /remove-package /packagename:Package_for_KB2919355~31bf3856ad364e35~amd64~~6.3.1.14
 
Windows 8.1(x86), 輸入:
dism /online /remove-package /packagename:Package_for_KB2919355~31bf3856ad364e35~x86~~6.3.1.14

Windows RT 8.1, 輸入:
dism /online /remove-package /packagename:Package_for_KB2919355~31bf3856ad364e35~arm~~6.3.1.14

步驟三、輸入:
dism.exe /online /cleanup-image /restorehealth

步驟四、輸入:
dism /online /cleanup-image /startcomponentcleanup

步驟五、開啟 Windows Update 檢查更新，應該就可以找到 KB2919355 進行安裝。

KB2919355 若安裝完成，記得回去安裝 .NET Framework。

```

### 安裝 KB2999226 補丁
* 如果成功安裝完成 KB2919355 和 .NET Framework，執行 dotnet new 還是出現錯誤訊息，則需安裝 [KB2999226](https://download.microsoft.com/download/C/5/D/C5D68AA1-F62E-422A-9084-4AD85CEB8D4D/WindowsUCRT.zip)。


### 終於...
為了看到下面這畫面，著實費了不少力氣
![final](https://i.imgur.com/OqHkjB3.png)


### 建立專案
* 輸入 `dotnet new console -o MyConsole`
* new : 建立新專案
* console : 建立 console 類型專案
* -o : o output，表示建立在 MyConsole 目錄下
![dotnet new](https://i.imgur.com/7dyNUNx.png)

### 載入 OmniSharp。
* 第一次開啟 C# 檔案時，會在編輯器中載入 `OmniSharp`。
* 提示需新增遺失的項目，以建置和偵錯應用程式。 選取 `Yes`。
![OmniSharp](https://i.imgur.com/uaLRHmA.png)

### 編譯 .NET Core
* 輸入 `dotnet build`
![dotnet build](https://i.imgur.com/cxvaSJU.png)

###　執行 .NET Core
* 輸入 `dotnet .\bin\Debug\netcoreapp2.1\MyConsole.dll` 或 `dotnet run`
![dotnet run](https://i.imgur.com/8uWYw5Q.png)

### 偵錯
* 確定綠色箭頭旁的下拉式清單已選取 `.NET Core Launch (console)`。
* 按編輯器邊界，或將文字游標移至編輯器中的第 9 行，然後按 F9 鍵新增中斷點。
* 若要開始偵錯，請選取 F5 或綠色箭頭。
![Debug](https://i.imgur.com/J8nBEI1.png)

### 發布為 exe 執行檔
* 在 `MyConsole.csproj` 中新增 `<RuntimeIdentifiers>win-x64;win7-x64;win81-x64</RuntimeIdentifiers>`。(可不必)
* 指定編譯目標系統 `dotnet publish -c release -r win-x64`。
* 會產生一 `release` 目錄， exe 執行檔會儲存於 `release\netcoreapp2.1\win-x64\publish\` 中。
![exe](https://i.imgur.com/E43DZYI.png)

### 編譯目標系統 Windows RID
![Windows RID](https://i.imgur.com/YCVVtNU.png)

### 參考
* [如何使用 VS Code 建立 .NET Core 開發環境 ?](https://oomusou.io/vscode/netcore/)
* [C# 與 Visual Studio Code 使用者入門](https://docs.microsoft.com/zh-tw/dotnet/core/tutorials/with-visual-studio-code)
* [Visual Studio Code创建C#项目](https://blog.csdn.net/wdeng2011/article/details/78437807)
* [HOW to INSTALL WINDOWS 8.1 UPDATE 1 PROPERLY/ KB2919355 Problem SOLVED](https://www.youtube.com/watch?v=UqPXrZDP7Q4)
* [Error: 0x80073712 when installing KB 2919355](https://answers.microsoft.com/en-us/windows/forum/windows8_1-update/error-0x80073712-when-installing-kb-2919355/c5a08cdf-6e41-4b67-b2ae-68f542070840)
* [win8.1系統KB2919355補丁安裝失敗的解決方法](https://www.itread01.com/articles/1476366306.html)
* [.NET Core RID 類別目錄](https://docs.microsoft.com/zh-tw/dotnet/core/rid-catalog)
* [.NET Core – How to publish a self-contained application (.exe)](https://blogs.msdn.microsoft.com/luisdem/2016/10/11/net-core-how-to-publish-a-self-contained-application-exe/)