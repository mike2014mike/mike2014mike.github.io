---
layout:     post
title:      python - 人性化的時間庫 arrow
date:       2018-10-03 09:37:19
author:     Mike Chen
summary:    
categories: python
thumbnail:  python
tags:
 - python
 - condition
---

### Python 內建的 time 用法

```python
import time

print("時間：", time.localtime(time.time()))

print('時間(基本格式化)：', time.asctime(time.localtime(time.time())))

# 格式化成 2018-10-03 09:45:39形式
print('時間(進階格式化)：', time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))

s = "2018-10-03 09:45:39"
print('時間戳：', time.mktime(time.strptime(s, "%Y-%m-%d %H:%M:%S")))
```


### 安裝 arrow

```
pip install arrow
```


### arrow 用法

```python
import arrow

# 取得當下時間

print('現在時間', arrow.now())

print('UTC時間', arrow.utcnow())


# 時間形式轉換

print('時間(格式化)：', arrow.now().format("YYYY-MM-DD HH:mm:ss"))

print('時間戳：', arrow.now().timestamp)

print('字串轉為 arrow 物件', arrow.get("2018-10-03 09:45:55", "YYYY-MM-DD HH:mm:ss"))

print('時間戳轉為 arrow 物件：', arrow.get("1538531139.0"))

# 直接產生 arrow 物件

print('直接產生 arrow 物件：', arrow.Arrow(2018, 10, 3))

# 時間推移

t = arrow.now()

print('前一天：', t.shift(days=-1))

print('前一周：', t.shift(weeks=-1))

print('前一月：', t.shift(months=-1))

print('前一年：', t.shift(years=-1))

print('前一小時：', t.shift(hours=-1))

print('人性化描述：', t.shift(hours=-1).humanize(locale='zh_tw'))


```

### 參考

* [Arrow-一个最好用的日期时间Python处理库](https://www.jianshu.com/p/c878bb1c48c1)

* [完整字串格式](https://arrow.readthedocs.io/en/latest/#tokens)

* [Github](https://github.com/crsmithdev/arrow)