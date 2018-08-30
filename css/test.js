// 立即函式
// jQuery 寫法
// $(function(){

// })

// JS 寫法
// (function(){

// })()


// ================== Scope 問題 ==================
// scope let, var
// {
//   var a = 123;
//   let b = 456;
// }
// console.log(a);
// console.log(b);


// for (var a = 0; a < 5; a++) {

// }
// console.log(a);

// for (let b = 0; b < 5; b++) {

// }
// console.log(b);


// ================== Hoisting 問題 ==================
// 一開始只寫 console 的時候， a 是 not defined
// console.log(a);
// var a = 3;
// // 一旦後面寫個同名的 function，就會提升到前面，a 顯示為一個函式，function 優先權較高
// function a() {

// }

// 如果改成 let ，會報錯，提示需要先宣告再使用
// console.log(b);
// let b = 3;
// function b() {

// }


// ================== Dead Zone ==================
// var a = 'Mike';
// {
//   console.log(a);
//   // scope 裡面可以取到外面的值
//   var a = 123;
//   console.log(a);
// }

// let a = 'Mike';
// {
//   console.log(a);
//   let a = 123;
//   console.log(a);
// }

// ================== const ==================
// const name = 'Mike';
// name = 'Michelle'

// const obj = {
//   name: 'Mike'
// }

// obj.name = 'Michelle';
// console.log(obj);

// obj = {
//   name: 'Michelle'
// }

// ================== 箭頭函式 ==================
// 傳統寫法一
// function abc() {
//   return 'abc';
// }

// 傳統寫法二：避免 Hoisting 的 function 優先問題發生，程式相對穩定
// let abc = function () {
//   return 'abc';
// }

// 箭頭函式
// let abc = () => {
//   return 'abc'
// };

// 大括號內如果只有一行可以省略
// 箭頭函式預設會 return，所以 return 也省略
// let abc = () => 'abc';

// console.log(abc());


// ES5 設定預設值寫法
// function test1(a, b, c, d) {

//   a = a || 'AAA'
//   b = b || 'BBB'
//   c = c || 'CCC'
//   d = d || 'DDD'

//   console.log(a, b, c, d);
// }
// console.log(test1());

// ES6 預設值寫法
// function test1_ES6(a = 'AAA', b = 'BBB', c = 'CCC', d = 'DDD') {
//   console.log(a, b, c, d);
// }
// console.log(test1_ES6());




// ES5 設定預設值寫法
function test2(obj) {

  obj = obj || {}
  obj.a = obj.a || 'AAA'
  obj.b = obj.b || 'BBB'
  obj.c = obj.c || 'CCC'
  obj.d = obj.d || 'DDD'

  console.log(obj);
}
console.log(test2());

// ES6 預設值寫法 - 物件拆解
function test2_ES6({ a = 'AAA', b = 'BBB', c = 'CCC', d = 'DDD' }) {
  console.log(a, b, c, d);
}
console.log(test2_ES6({ a: 'Mike' }));