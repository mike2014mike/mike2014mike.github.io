---
layout:     post
title:      Node.js + MongoDB 增刪修查 (CRUD)
date:       2020-09-01 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - MongoDB
 - NodeJS
---


## 說明
* 以往專案上以 Node.js 當 Server 的項目，大多搭配 MongoDB 使用，這裡紀錄一下從安裝到使用的筆記。

* 標題的 CRUD 是 新增（Create，意為「建立」）、查詢（Read，意為「讀取」）、修改（Update，意為「更新」）、刪除（Delete），取四個單字字首而成。

## MongoDB 安裝與配置設定
* 安裝基本上就是一直下一步的無腦安裝，下面列了兩個載點。

* [Win10版本適用載點](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.0-signed.msi)、[Win8版本適用載點](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-3.4.24-signed.msi)

* 加入環境變數 `;C:\Program Files\MongoDB\Server\3.4\bin`
![加入環境變數](https://i.imgur.com/eyAUVOL.png)

* 建立資料庫目錄 `d:\MongoDB\data\db`

* 建立log目錄`d:\MongoDB\data\log`

* 啟動同時，指定資料庫存放位置！ `mongod --dbpath d:\MongoDB\data\db`

* 建立設定檔 mongod.cfg，內容如下：
```
systemLog:
    destination: file
    path: d:\MongoDB\data\log\mongod.log
storage:
    dbPath: d:\MongoDB\data\db
```

* 安裝設定檔 mongod.cfg，日後啟動服務就不需要再次指定路徑。
`mongod --config "D:\MongoDB\data\mongod.cfg" --install`

* 啟用服務：`net start MongoDB`

* 停用服務：`net stop MongoDB`

## MongoDB 可視化工具 (GUI)
![Robo 3T 介面](https://i.imgur.com/tEgdECM.png)

[Robo 3T 載點](https://download.studio3t.com/robomongo/windows/robo3t-1.3.1-windows-x86_64-7419c406.zip)

## MongoDB Shell 基本用法
![MongoDB Shell 基本用法](https://i.imgur.com/dwaN9sn.png)


## Node.js安裝Mongo DB driver

* 需注意安裝本文範例語法適用的版本，保險起見就像我一樣指定版本安裝。
`npm install mongodb@2.2.31 --save`
![package.json](https://i.imgur.com/cWBAwPT.png)

## 新增 (Create)
```js
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
  if (err) throw err;
  db.collection('Superstar', function (err, collection) {
    if (err) throw err;
    //collection.insert(新增內容)
    collection.insert({ id: 1, firstName: 'Mike', lastName: 'Chen' });
    collection.insert({ id: 2, firstName: 'Nicole', lastName: 'Lo' });
    collection.insert({ id: 3, firstName: 'Bill', lastName: 'Gates' });

    collection.count(function (err, count) {
      if (err) throw err;
      console.log('共 ' + count + ' 筆資料');
    });
  });
  db.close(); //關閉連線
});
```

## 查詢 (Read)
```js
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
  db.collection("Superstar", function (err, collection) {
    //collection.find(條件,callback)
    collection.find({ firstName: "Nicole" }).toArray(function (err, items) {
      if (err) throw err;
      console.log(items);
      console.log("查詢到 " + items.length + " 個符合條件);
    });

  });
  db.close(); //關閉連線
});
```

## 修改 (Update)
```js
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
  if (err) throw err;
  db.collection('Superstar', function (err, collection) {
    //collection.update(條件,更新內容,writeConcern,callback)
    collection.update({ id: 3 }, { $set: { firstName: 'Steve', lastName: 'Jobs' } },
      { w: 1 }, function (err, result) {
        if (err) throw err;
        console.log('更新成功！');
      });
  });
  db.close(); //關閉連線
});
```

## 刪除 (Delete)
```js
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
  if (err) throw err;
  db.collection('Superstar', function (err, collection) {
    //collection.remove(條件,writeConcern,callback)
    collection.remove({ id: 2 }, { w: 1 }, function (err, result) {
      if (err) throw err;
      console.log('刪除成功！');
    });
  });
  db.close(); //關閉連線
});
```