---
layout:     post
title:      Python - 串接 JSON API 與檔案讀寫
date:       2018-09-25 09:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  python
tags:
 - Python
 - JSON
 - API
---

```python
import urllib.request as request
import json

# 台大網站
# url = 'https://www.ntu.edu.tw'

# 「臺北市內湖科技園區廠商名錄」API
url = 'https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=296acfa2-5d93-4706-ad58-e83cc951863c'

# 串接 API
with request.urlopen(url) as response:
    # data = response.read().decode('utf-8')

    # 利用 json 模組處理
    data = json.load(response)

# 一般網頁印出該網頁原始碼、API 印出 JSON 資料
# print(data['result']['results'])
myList = data['result']['results']

# 寫入檔案
with open('data.txt', 'w', encoding='utf-8') as file:
    for item in myList:
        file.write(item['公司名稱']+'\n')

# 讀取檔案
company_name = []
with open('data.txt', 'r', encoding='utf-8') as file:
    # file_data = file.read() # 全部讀取
    for line in file:  # 一行一行讀取
        company_name.append(line.replace('\n', ''))
# print(file_data)
print(company_name)

```


### 參考
* [Python 網路連線程式、公開資料串接 By 彭彭](https://www.youtube.com/watch?v=sUzR3QVBKIo&list=PL-g0fdC5RMboYEyt6QS2iLb_1m7QcgfHk&index=15)
* [Python 文字檔案的讀取和儲存 By 彭彭](https://www.youtube.com/watch?v=C4OkV6DrVRs&list=PL-g0fdC5RMboYEyt6QS2iLb_1m7QcgfHk&index=13)