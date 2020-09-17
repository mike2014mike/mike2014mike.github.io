---
layout:     post
title:      【Node.js】handlebars 傳值給 View 和 Partial View
date:       2018-08-02 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - NodeJS
 - Handlebars
---

### 檔案架構

```
server.js
node_modules
views/partials/test_partial.handlebars
views/layouts/main.handlebars
views/test.handlebars
```

### server.js

```javascript
var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path');

// handlebars 設定
var handlebars = require('express3-handlebars').create({
    defaultLayout: 'main',
    partialsDir: ['views/partials/'],
    helpers: {
        sayHello: function (name) { console.log("Hello " + name) }
    },
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//public
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

//路由
app.get('/test', function (req, res) {
    //view 使用 res.locals 傳值
    var data1 = {
        name: ['Mike', 'Nicole'],
        job: '工程師'
    };
	res.locals = data1;
	
    //partial view 使用 res.locals.partials 傳值
    if (!res.locals.partials) {
        res.locals.partials = {};
    }
    var data2 = {
        name: ['Hebe', 'Lucky'],
        job: '業務員'
    };

	var result = [];
	result.push(data1);
	result.push(data2);
    //res.locals.partials.test_partial = data2;
	res.locals.partials.test_partial = result;
    res.render('test');
});

var port = 4000;

server.listen(port, function () {
    console.log('Express started on http://localhost:' + port + '; \r\npress Ctrl+C to terminate.');
});

```


### 其他檔案
* [test.handlebars](https://mike2014mike.github.io/sample/2018-08-02/test.handlebars)
* [test_partial.handlebars](https://mike2014mike.github.io/sample/2018-08-02/test_partial.handlebars)
* [main.handlebars](https://mike2014mike.github.io/sample/2018-08-02/main.handlebars)

