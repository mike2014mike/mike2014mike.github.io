---
layout:     post
title:      Python - JSON
date:       2018-10-01 09:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  python
tags:
 - Python
 - JSON
---

### Python JSON 的兩個函式

* json.dumps(): 相當於 JS 的 JSON.stringify()。
* json.loads(): 相當於 JS 的 JSON.parse()。

```python
# 轉 JSON 字串
data1 = {
    'name' : 'Mike',
    'gender' : 'male'
}
 
json_str = json.dumps(data1)
print ("原始數據：", repr(data1))
print ("JSON 字串：", json_str)
 
# 轉 JSON 物件(字典)
data2 = json.loads(json_str)
print ("data2['name']: ", data2['name'])
print ("data2['gender']: ", data2['gender'])

```


### JSON 檔案讀寫

```python
# 寫檔
with open('data.json', 'w') as _file:
    json.dump(data, _file)
 
# 讀檔
with open('data.json', 'r') as _file:
    data = json.load(_file)
```

### 差異

* 有 s ：程式內部轉換 `json.dumps()` 或 `json.loads()` 

* 無 s ：檔案讀寫轉換 `json.dump()` 或 `json.load()` 