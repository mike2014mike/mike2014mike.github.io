// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// let result1 = inventors.filter((ele) => {
//     return ele.year >= 1500 && ele.year < 1600;
// })

//箭頭函數如果寫成一行，沒有大小括號，會自動 return
let result1 = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600);
// console.log(result1);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

// let result2 = inventors.map((ele) => {
//     return (`${ele.first} ${ele.last}`);
// })
let result2 = inventors.map(ele => `${ele.first} ${ele.last}`);
// console.log(result2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// let result3 = inventors.sort(function (a, b) {
//     // <0, =0, >0
//     return a.year - b.year;
// })

let result3 = inventors.sort((a, b) => a.year - b.year);
// console.log(result3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// forEach 的作法
let total = 0;
inventors.forEach(function (ele) {
    total += ele.passed - ele.year;
})
// console.log(total);

//使用 map + reduce
// let lives = inventors.map(ele => ele.passed - ele.year);
// // console.log(lives);
// let result4 = lives.reduce(function (a, b) {
//     return a + b;
// }, 0)

//使用 reduce
let result4 = inventors.reduce(function (total, ele) {
    return total + (ele.passed - ele.year);
}, 0)
// console.log(result4);

// 5. Sort the inventors by years lived

//使用 reduce
let order = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
// console.log(order);

// 在原本陣列加上 live 會比較好看
inventors.map((ele) => {
    ele.live = ele.passed - ele.year;
})
let result5 = inventors.sort((a, b) => a.live - b.live);
// console.log(result5);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 在上述網址，直接使用開發者工具去 querySelectorAll 取得 NodeList，再透過 Array.from 轉為陣列，使用 map 等方法處理。

// 7. sort Exercise
// Sort the people alphabetically by last name

let result7 = people.sort((a, b) => a.split(', ')[1] > b.split(', ')[1] ? 1 : -1);
// console.log(result7);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// forEach 的作法
let myObj = {};
data.forEach(function (ele) {
    if (!myObj[ele]) {
        //不存在的話給它 1
        myObj[ele] = 1;
    } else {
        //存在就 + 1
        myObj[ele] += 1;
    }
})
// console.log(myObj);

let result8 = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }
    return obj;
}, {})
console.log(result8);