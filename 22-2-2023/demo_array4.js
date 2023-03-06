// các thuộc tính vàphương thức của mảng - join, reverse, sort
let nameList = ["Anthony ", "Bella ", "Chris ", "Luis ", "Jake ", "Zenny "];

// Đảo ngược mảng 
document.write(`Mảng trước khi reverse là: ${nameList} ` +"<br>");
nameList.reverse();
document.write(`Mảng sau khi reverse là: ${nameList}`+"<br>");

// sắp xếp lại các phần tử trong mảng 
document.write(`Mảng trước khi sort là: ${nameList} ` +"<br>");
nameList.sort();
document.write(`Mảng sau khi sort là: ${nameList} ` +"<br>");
// nối các phần tử trong  mảng lại thành chuỗi
console.log(nameList.join("---"));