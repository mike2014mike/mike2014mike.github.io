---
layout:     post
title:      Linux 使用 nohup 讓指令不因登出而中斷
date:       2018-07-15 10:37:19
author:     Mike Chen
summary:    
categories: linux
thumbnail:  linux
tags:
 - linux
---

> nohup(no hang up，意思就是不要掛斷)

當使用者利用 ssh 等指令或軟體(例如Putty)登入遠端主機後，想要執行某個指令，但一旦登出或關掉 ssh 軟體，那個在背景執行的工作會跟著消失，主要原因是它的父行程被關閉了，也就是使用者剛剛關閉的 bash，那怎麼辦？nohup 可以為您強制保存背景工作，即便父行程被關閉。

```shell
cd ~/loginNode2

nohup node ~/loginNode2/app.js &

cd ~/EMS

nohup node --harmony ~/EMS/server.js &

cd ~/HYCloud

nohup node --harmony ~/HYCloud/app.js &

cd ~/python

python ~/python/schedule_demon_post_data.py start

nohup python ~/python/schedule_daily_job.py &
```

將以上shell script儲存為：server_process.sh<br>
執行方式：sh server_process.sh<br>


如果要結束某一個服務，可先下指令查詢
```
ps -ef | grep "node"
```

找到該服務的id後
```
kill xxxx
```