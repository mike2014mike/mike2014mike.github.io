function check(x) {
  if (x >= 0 && x <= 100) {
    alert('x 介於 0 和 100 之間');
  } else if (x < 0) {
    alert('x 小於 0')
  } else {
    alert('x 大於 100')
  }
}

var count = 0;
while (count < 3) {
  var num = prompt('請輸入數字：');
  check(num);
  count++;
}