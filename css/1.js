
function callMethod(newMoney) {
  var money = newMoney;
  return function (price) {       // 這裡就是一個閉包，不過目前只會使用一次
    money = money - price;
    return money;
  }
}

let card1 = callMethod(1000); //卡片一儲值 1000 元
let card2 = callMethod(2000); //卡片二儲值 2000 元

//卡片一每次刷卡花費 100 元，顯示餘額(會紀錄上次的餘額)
console.log(card1(100));
console.log(card1(100));
console.log(card1(100));
console.log(card1(100));

//卡片二每次刷卡花費 150 元，顯示餘額(會紀錄上次的餘額)
console.log(card2(150));
console.log(card2(150));
console.log(card2(150));
console.log(card2(150));

//callMethod 只帶一個參數無法使用，會回傳一個 function。
console.log(callMethod(100));

//callMethod 需帶入兩個參數方能使用
//但本範例如果直接這樣用等於是一個減法 function 而已。
console.log(callMethod(100)(20));



for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100)
}

for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, 100)
  })(i)
}


var data = { value: 100 };

function f0() {
  console.log(this)
}
f0();

function f1() {
  console.log(this)
}
f1.apply(data);


function f2() {
  console.log(this)
}
f2.call(data);


function f3() {
  console.log(this)
}
var newFoo = f3.bind(data);
newFoo();



function test(a, b, c) {
  console.log(a, b, c);
}

test.apply(undefined, [1, 2, 3])
test.call(undefined, 5, 6, 7)

var arr = [1, 3, 4, 66, 74, 22, 44]
var max = Math.max.apply(undefined, arr)
//var max = Math.max(1, 3, 4, 66, 74, 22, 44)
//var max = Math.max(...arr)     //ES6 展開寫法
console.log(max);


console.log(Array.prototype.slice.call(arr));
console.log([].slice.call(arr));

function temp() {
  //arguments 是保留字，可以取得輸入的參數
  console.log(arguments);

  var arrr = [].slice.call(arguments);
  console.log(arrr);
}

temp(1, 2, 3, 4)

function temp2(...args) {
  console.log(args);
}

temp2(4, 5, 6, 7)
