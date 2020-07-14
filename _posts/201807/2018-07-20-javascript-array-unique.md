---
layout:     post
title:      JavaScript 取得array不重複元素值
date:       2018-07-20 10:37:19
author:     Mike Chen
summary:    
categories: JavaScript
thumbnail:  code
tags:
 - javascript
 - array
---


## Code
```javascript
<script src="jquery-1.12.0.min.js"></script>

<script>
    var arr = ["Mike", "Jack", "May", "John", "Jay", "May", "Su", "John", "Andy"];
    document.writeln('原始陣列：' + arr.join("、") + '<br>');

    function GetUnique(inputArray) {

        var outputArray = [];

        for (var i = 0; i < inputArray.length; i++) {

            if ((jQuery.inArray(inputArray[i], outputArray)) == -1) {

                outputArray.push(inputArray[i]);

            }

        }

        return outputArray;

    }

    var arr2 = GetUnique(arr);
    document.writeln('移除重複者後：' + arr2.join("、") + '<br>');
</script>
```

## Result
```
原始陣列：Mike、Jack、May、John、Jay、May、Su、John、Andy
移除重複者後：Mike、Jack、May、John、Jay、Su、Andy
```
