---
layout:     post
title:      JavaScript 比大小：為何 1<2<3 為真，而 3>2>1 為否？
date:       2020-12-08 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
---


## 一個蠻有趣的 JS 題目
判斷下面會印出甚麼？
```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

## 從數學角度來看：
兩個應該都會印出 true，但實際上...

```js
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false
```

## 第一次比較：
`由左而右依序比較`，1<2 的結果得到 true，而 3>2 的結果也得到 true，所以...

```js
console.log((1 < 2) < 3);
console.log((3 > 2) > 1);
```

變成

```js
console.log(true < 3);
console.log(true > 1);
```

## 第二次比較：
因為是數字才能比大小，所以 `true 會自動轉型為數字 1`，可以理解如下：

```js
console.log(Number(true) < 3);
console.log(Number(true) > 1);
```

變成

```js
console.log(1 < 3); // true
console.log(1 > 1); // false
```

## 除了 JavaScript，VB.net也會有相同情況

VB.net
```vb
Console.WriteLine(1<2<3) 'True
Console.WriteLine(3>2>1) 'False
```


## 其他強型別程式語言則會直接報錯

C#
```csharp
Console.WriteLine(1<2<3);
// error CS0019: Operator `<' cannot be applied to operands of type `bool' and `int'
```

Ruby
```ruby
puts 1<2<3;
# undefined method `<' for true:TrueClass (NoMethodError)
```

Java
```java
System.out.println(1<2<3);
// error: bad operand types for binary operator '<'
//       System.out.println(1<2<3);
//                             ^
// first type:  boolean
// second type: int
```

Golang
```go
package main

import "fmt"

func main() {
  fmt.Printf(1<2<3)
  fmt.Printf(3>2>1)
}
// ./main.go:6: cannot convert 3 to type bool
// ./main.go:6: invalid operation: 1 < 2 < 3 (mismatched types bool and int)
// ./main.go:7: cannot convert 1 to type bool
// ./main.go:7: invalid operation: 3 > 2 > 1 (mismatched types bool and int)
```


## Python 是例外
Python 相對人性，支援連續比較。

Python
```python
print (1<2<3);
# True
print (3>2>1);
# True
```

Python 連續比較時等價於使用 and 運算，所以本題在 Python 眼裡其實是這樣的

Python
```python
print (1<2 and 2<3);
# True
print (3>2 and 2>1);
# True
```