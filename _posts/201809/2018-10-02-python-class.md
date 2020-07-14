---
layout:     post
title:      Python - class
date:       2018-10-02 09:37:19
author:     Mike Chen
summary:    
categories: Python
thumbnail:  python
tags:
 - Python
 - class
---

### Python class

```python
class Human:
    skin_color = 'yellow'

    # class 起手式，屬性可給預設值
    def __init__(self, name='No name'):
        self.name = name

    # class 實例方法：第一個參數必需是 self
    def say(self, msg):
        print('{name}: {message}'.format(name=self.name, message=msg))
        self.sayHi()  # 任何地方調用靜態方法

    def sing(self):
        print('{name}: yo yo yo ~~~(唱歌)'.format(name=self.name))

    # class 類方法：第一個參數必需是 cls，可在實例方法中以 self.get_skin_color() 調用
    @classmethod
    def get_skin_color(cls):
        return cls.skin_color

    # class 靜態方法：參數可有可無，可在實例方法中以 self.sayHi() 調用，也可直接以 Human.sayHi() 在任何地方調用。
    @staticmethod
    def sayHi():
        print("hi hi")


# 給 name 建立實體
mike = Human("Mike")
# 調用實例方法
mike.say('Hi')
mike.sing()
# 調用類方法
mike_color = mike.get_skin_color()
print(mike_color)

# 不給 name 建立實體(採用預設值)
test = Human()
# 調用實例方法
test.say('Hello')
test.sing()
# 調用類方法
test_color = test.get_skin_color()
print(test_color)

# 任何地方調用靜態方法
Human.sayHi()
```


### 執行結果

```
C:\Users\Mike\Desktop\python_test>python test.py
Mike: Hi
hi hi
Mike: yo yo yo ~~~(唱歌)
yellow
No name: Hello
hi hi
No name: yo yo yo ~~~(唱歌)
yellow
hi hi

```


### 存款與取款範例

```python
class Account:
    def __init__(self, number, name):
        self.number = number
        self.name = name
        self.balance = 0

    def deposit(self, amount):  # 存款動作: amount代表存入金額
        if amount <= 0:
            raise ValueError('must be positive')
        self.balance += amount

    def withdraw(self, amount):  # 取款動作: amount代表取款金額
        if amount <= self.balance:
            self.balance -= amount
        else:
            raise RuntimeError('balance not enough')


acct1 = Account('000-123–456–789', 'Mike')  # 開一個帳戶
acct1.deposit(100)
acct1.withdraw(30)
print('餘額：', acct1.balance)  # 餘額是 70

```


### 參考

* [關於Python的類別(Class)...基本篇](https://medium.com/@weilihmen/%E9%97%9C%E6%96%BCpython%E7%9A%84%E9%A1%9E%E5%88%A5-class-%E5%9F%BA%E6%9C%AC%E7%AF%87-5468812c58f2)

* [正确理解Python中的 @staticmethod @classmethod方法](https://zhuanlan.zhihu.com/p/28010894)