---
layout:     post
title:      TypeScript 入坑
date:       2018-08-03 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - JavsScript
 - TypeScript
---

### 筆記
* TypeScript 是一個提供 `強型別` 語法的 JavaScript `超集合` (Superset)，TypeScript 包含了完整的 JavsScript 的語言特性。

![超集合](https://i.imgur.com/tKcLkTY.png)

* 安裝 VS Code 好用套件 `Quokka.js` 

![Quokka.js](https://i.imgur.com/fa5AvFd.png)

* `Ctrl + Shift + P` ，輸入 `Quokka` ，選擇 `New TypeScript File` (透過這方式建立的檔案會自動啟動 Quokka)

![Ctrl + K + T](https://i.imgur.com/E8OqViD.png)

* 輸入完 console.log 會立即顯示結果，滑鼠移動到變數名稱上會顯示型別。

![Type alert 1](https://i.imgur.com/gTxEoXS.png)

* 這裡我們故意給原 string 變數一個數字，在變數底下會顯示紅色波浪符提示，滑鼠移動到變數名稱上會顯示不該把數字指定給 string 變數。

![Type alert 2](https://i.imgur.com/kFJEMUT.png)

* Quokka.js 可以拿來測試程式碼，不需要啟動瀏覽器，相當方便。

* TypeScript `重構` 優勢優於 JavaScript。

* 游標點在變數 name 上，按下 `F2` ，輸入新的變數名稱，可發現所有用到的地方都會跟著變動。

![重構](https://i.imgur.com/2hb4jcy.png)

* TypeScript 可轉譯為 不同版本的 JavaScript，最低支援到 `ES3` 。

* ``Ctrl + `(反單引號) `` 開出 VS Code 內建的終端機，安裝編譯器 `npm install -g typescript`

* 若 VS Code 的終端機無 `系統管理員權限` ，請到該捷徑點選右鍵 > 內容 > 相容性，勾選 `「以系統管理員的身分執行此程式」`

![以系統管理員的身分執行此程式](https://i.imgur.com/ogMHYoP.png)

* 輸入 `tsc -v` 確認版本 >= 1.5，否則無法使用

![typescript版本](https://i.imgur.com/b4SuufV.png)

* 若版本 < 1.5 ，請到 `環境變數` >> `系統變數` >> `Path` 移除 `C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.0\`，重新啟動 VS Code ，再回來檢查版本。
![系統變數](https://i.imgur.com/tYh8mgN.png)

* 終端機 `cd` 到專案目錄，輸入 `tsc --init`，會產生一個 `tsconfig.json` 檔，可設定要輸出的 JavaScript 版本。

![target](https://i.imgur.com/XXs5wLo.png)

* 輸入 `tsc -w` ，可在每次存檔的時候自動編譯成 JavaScript。

![watch](https://i.imgur.com/x6RAzPi.png)

* 要取消自動編譯，只要 `Ctrl + C` 即可。

![Ctrl + C](https://i.imgur.com/4yUumd9.png)

* 單獨編譯某個 ts 檔，則是 `tsc test.ts`。

* 紅色波浪符提醒 `const(常數) 不能變動` ，但用 let 的話就安全過關。

![const](https://i.imgur.com/PzAbp9X.png)

* 若不想寫 TypeScript ，但想在 JS 內使用 TS 的型別檢查，可直接在 JS 最上方加入  `// @ts-check`，如下 a 就會報錯。

```javascript
// @ts-check
var a = 1;
a = 'Mike';
```

* 多型別寫法

```javascript
let m: string | number = 1;
m = "Mike"
```

* function 指定參數型別寫法，如果參數給錯誤型別就會報錯

```javascript
function getName(name: string) {
    return `${name} !!!`
}
```

![function參數](https://i.imgur.com/eyBEQMj.png)

* function 參數也可以多型別

```javascript
function sum(n: number | string) {
    //讓使用者可以同時輸入數字或文字
    //如果是文字就轉型為數字
    if (typeof n === 'string') {
        n = parseInt(n);
    }
    return n + n;
}

console.log(sum(1));
console.log(sum("2"));
```

![function多型別](https://i.imgur.com/EpaLFYc.png)

* 啟動 Quokka.js 的方法：`Ctrl + Shift + P` ，輸入 `Quokka` ，選擇 `Start on Current File`

![啟動 Quokka](https://i.imgur.com/cMhrcuA.png)


### 資料型別

```js
//Number 
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Stirng
let person: string = "Mike"; //可以用 ""
let age: number = 37;
let sentence: string = `Oh, ${person} is ${age} years old.`; //也可以用 `${}`
//上面等於 "Oh, " + person + " is " + age + " years old."

//Array
let list: number[] = [1, 2, 3];

//Tuple
let x: [string, number]; // Array中包含不同型別的變數用 Tuple
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
x[3] = true // Error 往後的變數只能是一開始設定的 string 或 number
```


### 型別註釋

```js
//以往在 JS中函數的參數是不需要宣告參數的型別
function greeter(person) {
    return "Hello, " + person;
}

//但是這樣沒人知道 person是甚麼，到底是物件還是字串？
//所以 TS強制要求參數要註釋型別 person: string這樣一看就知道是字串
function greeter(person: string) {
    return "Hello, " + person;
}
```

### ES6 為什麼要用 let

![let](https://i.imgur.com/KhnoaVB.png)


### let...of...用法

```js
let list = [4, 5, 6];
for (let i of list) { 
    console.log(i);
}

//上面TS寫法等同於下面JS寫法

let list = [4, 5, 6];
for (let _i = 0; _i < list.length; _i++) {
    var num = list[_i];
    console.log(num);
}
```


### Interfaces 

```js
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Mike", lastName: "Chen" };

console.log(greeter(user));
```


### Classes

```js
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("蒙奇", "D.", "魯夫");

console.log(greeter(user));
```


### class 繼承

```js
class Human {
    static hands: number = 2;
    static legs: number = 2;
}

class Woman extends Human {
    static gender: string = 'female';
}
```

### interface 繼承

```js
interface Shape {
    area(): number;
}

interface Color {
    RGB: string;
}

interface Thing extends Color, Shape {
}
```


### 參考
* [從 TypeScript 學習 JavaScript](https://www.youtube.com/watch?v=seNBnxXHj9E)
* [TypeScript新手入門](https://hackmd.io/s/rkITEOYX)
* [TypeScript -- Angular 2 的寫作靈魂](https://ithelp.ithome.com.tw/articles/10186280)