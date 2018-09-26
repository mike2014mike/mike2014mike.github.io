---
layout:     post
title:      python - threading
date:       2018-09-25 09:37:19
author:     Mike Chen
summary:    
categories: python
thumbnail:  python
tags:
 - python
 - threading
---

當串接兩個 API，要做資料整合處理的時候，必須兩個 API 都收到 response 才能進行處理，這時候就會用到多執行緒的概念。

### 建立子執行緒

```python
import threading
import time

# 子執行緒的工作函數
def job():
  for i in range(5):
    print("Child thread:", i)
    time.sleep(1)

# 建立一個子執行緒
t = threading.Thread(target = job)

# 執行該子執行緒
t.start()

# 主執行緒繼續執行自己的工作
for i in range(3):
  print("Main thread:", i)
  time.sleep(1)

# 等待 t 這個子執行緒結束
t.join()

print("Done.")

```


### 多個子執行緒與參數

```python
import threading
import time

# 子執行緒的工作函數
def job(num):
  print("Thread", num)
  time.sleep(1)

# 建立 5 個子執行緒
threads = []
for i in range(5):
  threads.append(threading.Thread(target = job, args = (i,)))
  threads[i].start()

# 主執行緒繼續執行自己的工作
# ...

# 等待所有子執行緒結束
for i in range(5):
  threads[i].join()

print("Done.")
```


### 物件導向

```python
import threading
import time

# 子執行緒類別
class MyThread(threading.Thread):
  def __init__(self, num):
    threading.Thread.__init__(self)
    self.num = num

  def run(self):
    print("Thread", self.num)
    time.sleep(1)

# 建立 5 個子執行緒
threads = []
for i in range(5):
  threads.append(MyThread(i))
  threads[i].start()

# 主執行緒繼續執行自己的工作
# ...

# 等待所有子執行緒結束
for i in range(5):
  threads[i].join()

print("Done.")
```


### 佇列（Queue）

```python
import time
import threading
import queue

# Worker 類別，負責處理資料
class Worker(threading.Thread):
  def __init__(self, queue, num):
    threading.Thread.__init__(self)
    self.queue = queue
    self.num = num

  def run(self):
    while self.queue.qsize() > 0:
      # 取得新的資料
      msg = self.queue.get()

      # 處理資料
      print("Worker %d: %s" % (self.num, msg))
      time.sleep(1)

# 建立佇列
my_queue = queue.Queue()

# 將資料放入佇列
for i in range(10):
  my_queue.put("Data %d" % i)

# 建立兩個 Worker
my_worker1 = Worker(my_queue, 1)
my_worker2 = Worker(my_queue, 2)

# 讓 Worker 開始處理資料
my_worker1.start()
my_worker2.start()

# 等待所有 Worker 結束
my_worker1.join()
my_worker2.join()

print("Done.")
```


### 鎖定（Lock）

```python
import time
import threading
import queue

class Worker(threading.Thread):
  def __init__(self, queue, num, lock):
    threading.Thread.__init__(self)
    self.queue = queue
    self.num = num
    self.lock = lock

  def run(self):
    while self.queue.qsize() > 0:
      msg = self.queue.get()

      # 取得 lock
      lock.acquire()
      print("Lock acquired by Worker %d" % self.num)

      # 不能讓多個執行緒同時進的工作
      print("Worker %d: %s" % (self.num, msg))
      time.sleep(1)

      # 釋放 lock
      print("Lock released by Worker %d" % self.num)
      self.lock.release()

my_queue = queue.Queue()
for i in range(5):
  my_queue.put("Data %d" % i)

# 建立 lock
lock = threading.Lock()

my_worker1 = Worker(my_queue, 1, lock)
my_worker2 = Worker(my_queue, 2, lock)

my_worker1.start()
my_worker2.start()

my_worker1.join()
my_worker2.join()

print("Done.")
```


### 旗標（Semaphore）

```python
import time
import threading
import queue

class Worker(threading.Thread):
  def __init__(self, queue, num, semaphore):
    threading.Thread.__init__(self)
    self.queue = queue
    self.num = num
    self.semaphore = semaphore

  def run(self):
    while self.queue.qsize() > 0:
      msg = self.queue.get()

      # 取得旗標
      semaphore.acquire()
      print("Semaphore acquired by Worker %d" % self.num)

      # 僅允許有限個執行緒同時進的工作
      print("Worker %d: %s" % (self.num, msg))
      time.sleep(1)

      # 釋放旗標
      print("Semaphore released by Worker %d" % self.num)
      self.semaphore.release()

my_queue = queue.Queue()
for i in range(5):
  my_queue.put("Data %d" % i)

# 建立旗標
semaphore = threading.Semaphore(2)

my_worker1 = Worker(my_queue, 1, semaphore)
my_worker2 = Worker(my_queue, 2, semaphore)
my_worker3 = Worker(my_queue, 3, semaphore)

my_worker1.start()
my_worker2.start()
my_worker3.start()

my_worker1.join()
my_worker2.join()
my_worker3.join()

print("Done.")
```



### 參考
* [Python 多執行緒 threading 模組平行化程式設計教學](https://blog.gtwang.org/programming/python-threading-multithreaded-programming-tutorial/)