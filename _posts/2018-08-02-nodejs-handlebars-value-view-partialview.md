---
layout:     post
title:      【Node.js】handlebars 傳值給 View 和 Partial View
date:       2018-08-02 10:37:19
author:     Mike Chen
summary:    
categories: Node.js
thumbnail:  code
tags:
 - javascript
 - Node.js 
 - handlebars
 - Partial View
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



### test.handlebars

```

{{>test_partial}}
<script>
    console.log('{{name}}');
    var data = '{{name}}';
    document.writeln('<p style="color: blue;">[View] ' + data + '是' + '{{job}}' + '</p>');

</script>


```

### test_partial.handlebars

```

<script>
    console.log('{{partials.test_partial.1.name}}');
    document.writeln('<p style="color: green;">[Partial View] ' + '{{partials.test_partial.0.name}}' + '是' + '{{partials.test_partial.0.job}}' + '</p>');
    document.writeln('<p style="color: green;">[Partial View] ' + '{{partials.test_partial.1.name}}' + '是' + '{{partials.test_partial.1.job}}' + '</p>');

</script>


```

### main.handlebars

```
<!doctype html>
<html>
<head>
<title>傳值給View和Partial View</title> 

</head>
<body>
    {{{ body }}}

</body>
</html>
```