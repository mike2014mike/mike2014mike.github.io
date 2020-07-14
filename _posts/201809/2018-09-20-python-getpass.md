---
layout:     post
title:      Python - getpass 隱藏輸入文字
date:       2018-09-20 09:37:19
author:     Mike Chen
summary:    
categories: Python
thumbnail:  python
tags:
 - Python
 - getpass
---

### getpass

```python
import getpass
acc = input('請輸入帳號：')
pwd = getpass.getpass('請輸入密碼：')
```


### 猜數字遊戲

```python
import getpass
import os

print('【猜數字出題】')
start = int(input('輸入起始值：'))
end = int(input('輸入結束值：'))
answer = int(getpass.getpass('輸入答案：'))

# 清除畫面
# os.system("clear") # Linux
os.system("cls") # Windows

print('【開始猜數字囉！】')
print(str(start) + ' 到 ' + str(end) + ' 猜一數字')

guess = 0

while guess != answer:
    guess = int(input('請猜一數字：'))

    if guess > 0 and guess <= 100:
        if guess < answer:
            start = guess
            print('>> 介於 ' + str(start) + ' 到 ' + str(end) + ' 之間')
        elif guess > answer:
            end = guess
            print('>> 介於 ' + str(start) + ' 到 ' + str(end) + ' 之間')
        else:
            print('答對囉！')
    else:
        print('超出範圍')

```


### 參考
* [python getpass模块：隐藏不显示输入的密码](http://blog.51cto.com/guyuyuan/1933271)