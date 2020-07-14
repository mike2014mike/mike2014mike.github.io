---
layout:     post
title:      Python - 人性化的條件式
date:       2018-10-03 09:37:19
author:     Mike Chen
summary:    
categories: Python
thumbnail:  python
tags:
 - Python
 - condition
---

### 說明

* 常聽人說 Python 有些地方相當人性化，這個範例就是其中一個例子。

* 在其他程式語言中，如果要判斷某數是否介於兩數字之間，以 JavaScript 來舉例通常會這樣寫：

```js
function check(x) {
  if (x >= 0 && x <= 100) {
    alert(x + ' 介於 0 和 100 之間');
  } else if (x < 0) {
    alert(x + ' 小於 0')
  } else {
    alert(x + ' 大於 100')
  }
}

var count = 0;
while (count < 3) {
  var num = prompt('請輸入數字：');
  check(num);
  count++;
}
```

* 由上述 JavaScript 範例來看，if 條件式需要 `拆成兩部分` ，並用 `&&` 或 `||` 連接，很不人性化。


### Python 可以這樣寫

```python

def check(x):
    if 0 <= x <= 100:
        print(f'{x} 介於 0 和 100 之間')
    elif x < 0:
        print(f'{x} 小於 0')
    else:
        print(f'{x} 大於 100')


count = 0
while count < 3:
    num = int(input('請輸入數字：'))
    check(num)
    count += 1

```

* 由上述 Python 範例來看，if 的條件式竟然可以跟口語描述一樣，` x 介於 0 和 100 之間`，相當人性化。

* 當然，如果想要依循其他程式語言的寫法，也是可以寫成 `x >=0 and x <= 100`。

* 注意 Python 條件式是用 `and` 或 `or` 連接。

### 參考

* [How do I check whether an int is between the two numbers?](https://stackoverflow.com/questions/13628791/how-do-i-check-whether-an-int-is-between-the-two-numbers)
