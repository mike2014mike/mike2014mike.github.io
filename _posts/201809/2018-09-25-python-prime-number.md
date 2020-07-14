---
layout:     post
title:      python - 質數
date:       2018-09-25 09:37:19
author:     Mike Chen
summary:    
categories: python
thumbnail:  python
tags:
 - python
 - 質數
---

```python
def is_prime(n):
    for i in range(2, n):
        if n % i == 0:  # 整除，i 是 n 的因數，所以 n 不是質數。
            return False
    return True     # 都沒有人能整除，所以 n 是質數。


def get_prime(n):
    prime_num = []
    for i in range(2, n+1):   # 產生 2 到 n 的數字。
        i_is_prime = is_prime(i)    # 判斷 i 是否為質數。
        if i_is_prime:              # 如果是，印出來。
            prime_num.append(i)
    print(prime_num)


num = int(input('請輸入一個數字：'))  # 得到輸入值 n。
get_prime(num)


```


### 參考
* [輸入一數字 n，印出 2 到 n 之間的質數](https://gist.github.com/uranusjr/581ba170cc5a42bdd3ff56ede01994ae)

* [Python 质数判断](http://www.runoob.com/python3/python3-prime-number.html)