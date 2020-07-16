---
layout:     post
title:      Windows 修改管理者帳密方法
date:       2018-08-16 09:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  windows
tags:
 - Windows
 - Server
 - BIOS
 - Ubuntu
---

### Windows 2008 Server修改管理者帳密方法
1. 主機 BIOS 使用光碟機開機
2. 使用 Windows Server 2008 R2 Standard Edition 光碟片開機
3. 在【系統復原選項】視窗中選擇【使用可協助修正 Windows 啟動問題的修復工具。選取要修復的作業系統】後按【下一步】
4. 選擇【命令提示字元】
5. 此時應該在光碟機的槽，請切換到您的系統槽，例如 C:，之後切換到 【Windows\System32】資料夾下
6. 將【放大鏡 Magnify.exe】執行檔備份，執行指令 【rename Magnify.exe Magnify.exe.bak】
7. 改用【命令提示字元 cmd.exe】執行檔取代剛才的放大鏡執行檔，執行指令【copy cmd.exe Magnify.exe】
8. 將主機重新啟動並退出光碟片
9. 在登入畫面時點選左下角工具列，然後勾選【放大鏡 (也就是要呼叫 命令提示字元)】後按下【確定】，此時就會彈出【命令提示字元】視窗
10. 使用指令【net user administrator "weithenn"】 將管理者密碼修改為 weithenn，接著就可以關閉命令提示字元視窗
11. 使用剛才設定的管理者密碼登入 Windows Server 2008

### Windows 7修改管理者帳密方法
1. 使用Ubuntu 系統安裝光碟開機，修改 system32 資料夾裡的 cmd.exe 與 osk.exe 兩個檔案名稱。
2. 「osk.exe」改名為「osk-001.exe」；「cmd.exe」改名為「osk.exe」。
3. 登入Windows 7畫面時，請按一下畫面左下角的「輕鬆存取」按鈕，勾選「不用鍵盤輸入（螢幕小鍵盤）」這項目後，於命令輸入視窗輸入「net user」再按「Enter」鍵，可以看到目前電腦中全部使用者帳號的名稱。
4. 如果要修改其中一個帳號的密碼，請輸入：net user 帳號名稱 新的密碼