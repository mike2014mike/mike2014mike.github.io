var ul = document.querySelector('ul');
var list = ul.querySelectorAll('li');
for (var i = 0; i < list.length; i++) {
    ul.appendChild(document.createElement('li'));
}//这个时候就创建了3个新的li，添加在ul列表上。 
console.log(list.length) //输出的结果仍然是3，不是此时li的数量6


var ul = document.getElementsByTagName('ul')[0];
var list = ul.getElementsByTagName('li');
for (var i = 0; i < 5; i++) {
    ul.appendChild(document.createElement('li'));
}
console.log(list.length)//此时输出的结果就是3+5=8

