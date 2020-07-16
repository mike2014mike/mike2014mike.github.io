---
layout:     post
title:      批次檔設定公司網路(同時外內網)
date:       2018-07-04 09:37:19
author:     Mike Chen
summary:    批次檔設定公司網路(同時外內網)
categories: Work
thumbnail:  sitemap
tags:
- Batch-file

---

### 同時內外網

打開記事本輸入下方內容

```
@echo off

echo 正在進行內外網設定中，請稍候……

echo 刪除所有0.0.0.0的路由
route delete 0.0.0.0

echo 加入外網(wifi)
route -p add 0.0.0.0 mask 0.0.0.0 192.168.1.1

echo 降低內網優先權(值越低優先權越高)
route -p add 10.0.0.0 mask 255.0.0.0 10.61.17.254 metric 60

echo 設定完成！！

echo. & pause
```

另存為 `同時內外網.bat` ，按右鍵 `以系統管理員身分執行` 即可。


### 定時執行版本

打開記事本輸入下方內容

```
@echo off

:: 時間格式化
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%" & set "MS=%dt:~15,3%"
set "datestamp=%YYYY%%MM%%DD%" & set "timestamp=%HH%%Min%%Sec%" & set "fullstamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%-%MS%"
:: echo datestamp: "%datestamp%"
:: echo timestamp: "%timestamp%"
:: echo fullstamp: "%fullstamp%"

:_start

echo [%fullstamp%]
echo 正在進行內外網設定中，請稍候……

echo 刪除所有0.0.0.0的路由
route delete 0.0.0.0

echo 加入外網(wifi)
route -p add 0.0.0.0 mask 0.0.0.0 192.168.1.1

echo 降低內網優先權(值越低優先權越高)
route -p add 10.0.0.0 mask 255.0.0.0 10.61.17.254 metric 60

echo 設定完成！！

ping 127.0.0.1 -n 300 -w 1000 > nul

echo [%fullstamp%]

echo 300 秒到了！！ 

GOTO _start


echo. & pause
```

另存為 `同時內外網_定時執行.bat` ，按右鍵 `以系統管理員身分執行` 即可。


### 只連內網

打開記事本輸入下方內容

```
@echo off

echo 正在進行內外網設定中，請稍候……

echo 啟用乙太網路
netsh interface set interface "乙太網路" enabled

echo 停用 Wi-Fi
netsh interface set interface "Wi-Fi" disabled

echo 刪除所有0.0.0.0的路由
route delete 0.0.0.0

echo 加入內網
route -p add 0.0.0.0 mask 0.0.0.0 10.61.17.254

echo 設定完成！！

echo. & pause
```

另存為 `只連內網.bat` ，按右鍵 `以系統管理員身分執行` 即可。


### 只連外網

打開記事本輸入下方內容

```
@echo off

echo 正在進行內外網設定中，請稍候……

echo 停用乙太網路
netsh interface set interface "乙太網路" disabled

echo 啟用 Wi-Fi
netsh interface set interface "Wi-Fi" enabled

echo 刪除所有0.0.0.0的路由
route delete 0.0.0.0

echo 加入外網(wifi)
route -p add 0.0.0.0 mask 0.0.0.0 192.168.1.1

echo 設定完成！！

echo. & pause
```

另存為 `只連外網.bat` ，按右鍵 `以系統管理員身分執行` 即可。



### 雙網卡內外網同時使用的方法

#### 方法一：

首先機器需要有兩張網卡，分別連線內外網上

```
外網 (internet) 地址：192.168.1.8，遮罩：255.255.255.0，網關：192.168.1.1
內網 (intranet) 地址：172.23.1.8，遮罩：255.255.255.0，網關：172.23.1.1
```

如果按正常的設置方法設置每張網卡的ip地址和網關，再到 CMD 下使用 `route print` 查看時會看到

```
Network Destination Netmask Gateway Interface Metric
0.0.0.0 0.0.0.0 192.168.1.1 192.168.1.8
0.0.0.0 0.0.0.0 172.23.1.1 172.23.1.8
```

即指向 `0.0.0.0` 的有兩個網關，這样就會出現路由衝突，兩個網路都不能連。
如何實現同時連兩個網路？那要用到 `route命令`

第一步：`route delete 0.0.0.0` "刪除所有0.0.0.0的路由"

第二步：`route add 0.0.0.0 mask 0.0.0.0 192.168.1.1` "添加0.0.0.0網路路由"這個是主要的，意思就是你可以上外網.

第三步：`route add 172.23.0.0 mask 255.0.0.0 172.23.1.1` "添加172.23.0.0網路路由"，注意遮罩 (mask)) 为 255.0.0.0 ，而不是 255.255.255.0 ，這樣內部的多網段才可用。

這時就可以同時連兩個網路了，但碰到一個問題，使用上述命令添加的路由在系統重新開機後會自動遺失，怎样保存現有的路由表呢？
`route add -p` 添加靜態路由，即重新開機後，路由不會遺失。注意使用前要在 tcp/ip 設置裡去掉接在企業內部網的網卡的網關

<hr>

#### 方法二：

1. 設置其中接internet的網卡的網關为10.0.0.1，启用後就是默認網關
--注：這是對應外網的網卡，按照你們單位外網的ip分配情況，在TCP/IP屬性中配置好 ip、掩碼、DNS
2. 將連接單位內部網的網卡IP配好後，設網關設置为空（即不設網關），启用後，此時內網無法通過網關路由
3. 進入CMD，運行：route -p add 192.0.0.0 mask 255.0.0.0 192.168.0.1 metric 1
--注：意思是將192*的IP包的路由網關設为192.168.0.1 ，-P 参數代表永久寫入路由表，建議先不加此参數，實踐通過後在寫上去
4. OK！同時启用兩個網卡，兩個網關可以同時起作用了，兩個子網也可以同時連了，關機重启後也不用重設！


<hr>

#### 方法三：

```
Network Destination： 表示路由的網路目的地，可以是 IP 網段或IP位址。
Net mask：表示子網路遮罩，用來配合 Network Destination 的運算。
Gateway：是封包欲送往的 IP 位址，如果目的 IP 位址與 Net mask 作 AND 邏輯運算，剛好與 Network Destination 相同，封包就會送到此 Gateway 的 IP 位址。
Interface： 是此電腦送出封包的 IP 位址。
Metric： 則是傳送成本的參考數字，通常與網路連接速度有關，Windows XP 本身有自動計算 Metric 的能力， 100Mbps 的網路速度 Metric 設為 20，迴路（loopback）的 Metric 設為 1，越低的 Metric 表示速度越快。

以上這些名詞都是在 命令提示字元 模式下，打上route print會出現的。(顯示目前路由表狀態)

再來介紹一下常用的route指令介紹

● route add 用來加入路由路徑

例如：route add 192.168.0.0 mask 255.255.0.0 192.168.1.1 if 0x2 metric 20

格式：route add Network Destination、Net mask、Gateway、Interface 和 metric。

● route -p add 用來永久加入路由路徑，使用-p 參數可以保留路徑設定，不會因為電腦重開機而消失。

● route delete用來刪除路由路徑。

例如：route delete 192.168.0.0 mask 255.255.0.0

● route change用來修改現有的路徑設定。

例如：route change 192.168.0.0 mask 255.255.0.0 192.168.1.1 if 0x2 metric 10

``` 

* 操作環境：

  1. 無線網卡 x 1，負責對外網路

  2. 有線網卡 x 1，負責區域網路


* 步驟：

1. 刪除兩個 0.0.0.0 mask 0.0.0.0 的 route rule。(因為有兩張網路卡，所以會有兩個)

```
route delete 0.0.0.0
``` 

2. 將所有IP位址設定經由無線網路卡連線。

```
route -p add 0.0.0.0 mask 0.0.0.0 192.168.1.1
```
 
3. 將區域網路的IP位址設定經由區域網路卡連線。

```
route -p add 10.0.0.0 mask 255.0.0.0 10.61.17.254 metric 60
```
 
經由以上三行指令修改過後，只要是10.*.*.*的 IP 都會經由有線網路卡連線。其它的 IP 位址都會經由無線網路卡連線。