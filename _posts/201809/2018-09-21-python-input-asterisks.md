---
layout:     post
title:      Python - 輸入密碼顯示為星號
date:       2018-09-21 09:37:19
author:     Mike Chen
summary:    
categories: Python
thumbnail:  python
tags:
 - Python
---

```python
import msvcrt
import sys

def getpass(prompt='Password: '):
    count = 0
    chars = []
    for x in prompt:
        msvcrt.putch(bytes(x, 'utf8'))
    while True:
        new_char = msvcrt.getch()
        if new_char in b'\r\n':
            break
        elif new_char == b'\0x3':  # ctrl + c
            raise KeyboardInterrupt
        elif new_char == b'\b':
            if chars and count >= 0:
                count -= 1
                chars = chars[:-1]
                msvcrt.putch(b'\b')
                msvcrt.putch(b'\x20')  # space
                msvcrt.putch(b'\b')
        else:
            if count < 0:
                count = 0
            count += 1
            chars.append(new_char.decode('utf8'))
            msvcrt.putch(b'*')
    return ''.join(chars)


pwd = getpass()
print('\r\nThw password is: ', pwd)


```


### 參考
* [控制台输入密码的方法](https://www.cnblogs.com/lovebread/archive/2010/11/09/1872774.html)