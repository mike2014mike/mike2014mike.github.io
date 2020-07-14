---
layout:     post
title:      Python - tuple, list, dict, set
date:       2018-09-20 09:37:19
author:     Mike Chen
summary:    
categories: Python
thumbnail:  python
tags:
 - Python
 - tuple
 - list
 - dict
 - set
---

### tuple(元組)
* 長相：`tup1 = (1, 2, 3, 4, 5)` 或 `tup2 = 1, 2, 3, 4, 5`。
* 特性：值不可改。
* 連接：tuple 間可連接 `tup3 = tup1 + tup2`

### list(列表)：類似 JavaScript 的 Array
* 長相：`list1 = [1, 2, 3, 4, 5]`。
* 特性：值可改，可排序，遞增 `list1.sort()`；遞減 `list1.reverse()`。
* 增： 增值到最後 `list1.append(6)`；增值到指定位置 `list1.insert(0, 0)`。
* 刪： 刪最後的值 `list1.pop()`；刪特定值 `list1.remove(0)`。

### dict(字典)：類似 JavaScript 的 Object
* 長相： `dict = { 'name': 'Mike', 'gender': 'male'}`。
* 特性： `{key: value}` key 是唯一，不可重複； value 可改。
* 增： `dict['age'] = 33`。
* 刪： `del dict['age']` 或 `dict.pop('age')`。
* 取 keys/ values： `dict.keys()` , `dict.values()`，可用 `list(dict.keys())` 轉換為列表。
* 複製： `dict2 = dict.copy()`。
* 取值： `dict['age']` 或 `dict.get('age')`，後者就算無該 key 也不會報錯。

### set(集合)
* 長相：`set1 = {1, 2, 3, 4, 5}`。
* 特性：值不可重複、不可改，會自動移除重複值，set 之間可運算。
* 增： `set1.add(6)`。
* 刪： `set1.remove(6)` 或 `set1.discard(6)`，若無該值 discard 不會報錯。
* 交集聯集運算。

```python
# 創建 set1
set1 = {1, 2, 3, 4, 5}

# 創建 set2，讓其每個元素是 set1 的 2 倍
for x in set1: set2.add(x * 2) # set2 = {2, 4, 6, 8, 10}

# 交集
set1 & set2 #{2, 4}

# set1 移除交集
set1 - set2

# 聯集
set1 | set2

# 聯集後移除交集
set1 ^ set2

```


### 參考
* [python的dict,set,list,tuple应用详解](https://cn.aliyun.com/jiaocheng/493737.html?spm=5176.100033.1.8.165937ecimix0T)