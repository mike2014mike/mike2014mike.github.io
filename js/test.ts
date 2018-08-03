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