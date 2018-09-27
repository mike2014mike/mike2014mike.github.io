---
layout:     post
title:      用騰訊雲 Cloud Studio 玩 Django
date:       2018-09-26 09:37:19
author:     Mike Chen
summary:    
categories: python
thumbnail:  python
tags:
 - python
 - 騰訊雲
 - Cloud Studio
 - Django
---

### 緣由

* 最近發現一個好用的東西 - 騰訊雲(Cloud Studio)，可線上快速創建開發環境，編程並測試。

* 現在註冊可以免費使用 180 天。

![180](https://i.imgur.com/0mCGhgN.png)

* 今天就嘗試用 Cloud Studio 來玩 Django 吧！

* Django 是一個開放原始程式碼的 Web 框架，由 Python 寫成。


### 起手式步驟

* 在 Cloud Studio 安裝 Django

```
python -m pip install --upgrade pip setuptools

python -m pip install django
```

* 利用查看版本指令，檢查是否安裝成功

```
django-admin --version
```

* 建立專案

```
django-admin startproject HelloWorld
```

* 切換到專案目錄

```
cd HelloWorld/
```

* 啟動服務

```
python manage.py runserver 0.0.0.0:8080
```

![runserver](https://i.imgur.com/OUeK9lu.png)

* 添加訪問連結

![addlink](https://i.imgur.com/PA4e9yu.png)


* setting.py 設定 ALLOWED_HOSTS

```python
ALLOWED_HOSTS = ['*']
```

![ALLOWED_HOSTS](https://i.imgur.com/R5YTzc8.png)

* 預設網頁歡迎畫面

![welcome](https://i.imgur.com/AT4X9Qh.png)

* 增加 view.py

```
cd HelloWorld/
echo > view.py
```

* view.py 程式碼

```python
from django.http import HttpResponse
 
def hello(request):
    return HttpResponse("Hello world ! ")
```

* 修改 HelloWorld/HelloWorld/urls.py

```python
from django.conf.urls import url
 
from . import view
 
urlpatterns = [
    url(r'^$', view.hello),
]
```

* 目前的目錄架構

![folder](https://i.imgur.com/s3u4XPp.png)

* 目前網頁畫面

![new](https://i.imgur.com/1gfXUwX.png)



### 模板 Template

* 回到 HelloWorld 專案根目錄，創建 templates 目錄，並建立 hello.html

```
cd ..
mkdir templates
cd templates/
echo > hello.html
```

* 目前目錄架構

![folder](https://i.imgur.com/i3wG2BL.png)

* hello.html

```html
<h1>{{ hello }}</h1>
```

* 修改 setting.py

```python
'DIRS': [BASE_DIR+"/templates",],
```

![setting.py](https://i.imgur.com/qwqA8Pm.png)

* 修改 view.py

```python
from django.shortcuts import render
 
def hello(request):
    context          = {}
    context['hello'] = 'Hello World!'
    return render(request, 'hello.html', context)
```

* 修改 urls.py 調整 Router

```python
from django.conf.urls import url
 
from . import view

urlpatterns = [
    url(r'^hello$', view.hello),
]
```

![new link](https://i.imgur.com/slLrzq1.png)

* 新增 base.html

![base.html](https://i.imgur.com/YMvLpmt.png)


* 修改 hello.html

![hello.html](https://i.imgur.com/kCmgpwX.png)

* 網頁畫面

![new](https://i.imgur.com/jD6q6Na.png)


### 建立 APP

* 在 Django 中要使用資料庫，必須先建立 APP

```
python manage.py startapp myAPP
```

![APP folder](https://i.imgur.com/IgvhiWJ.png)

* 修改 settings.py

```python
INSTALLED_APPS = [
    'myAPP', # 加入這個
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```


### 資料庫

* Django 預設資料庫使用 db.sqlite3，在 setting.py 可看到

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

* 利用 [Migration](https://docs.djangoproject.com/en/1.8/topics/migrations/) 把資料庫的 table 建出來。

```
python manage.py migrate
```

![Migration](https://i.imgur.com/xbpkz6u.png)

* 修改 myAPP/models.py

```python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.utils.timezone import now

class Member(models.Model):
    name = models.CharField(max_length=256)
    group_name = models.CharField(max_length=256)

    def __str__(self):
        return '%s of %s' % (self.name, self.group_name)


class History(models.Model):
    member = models.ForeignKey(Member, related_name="draw_histories")
    # now() will return datetime.utcnow()
    time = models.DateTimeField(default=now)

    def __str__(self):
        return '%s at %s' % (self.member.name, self.time)
```


* Migration the tracker of model changes

> 每次更動 database model 都要跑 migration，確保 code 與資料庫狀態一致。

```
python manage.py makemigrations myAPP
```

![Migration the tracker of model changes](https://i.imgur.com/zXFIGlS.png)

* 有了新的 migration 就要同步資料庫的狀態

```
python manage.py migrate
```

![migrate](https://i.imgur.com/J7fWVkN.png)

### 參考

* [Django 教程](http://www.runoob.com/django/django-tutorial.html)

* [為程式人寫的 Django Tutorial](https://github.com/uranusjr/django-tutorial-for-programmers)

* [用 Django 與 SQLite 架抽籤網站](https://blog.liang2.tw/posts/2015/10/django-draw-member/#django-server)