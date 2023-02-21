// nhập vào số hàng đầu tiên và công sai của cấp số cộng
// in ra 10 số hạng đầu tiên của cấp số cộng đó
// ví dụ: số hạng đầu tiên là 3 và công sai là 5
// in ra: 3 8 13 18 23 28 33 38 43 48
let n = parseInt(prompt("nhập n"));
let d = parseInt(prompt("nhập công sai"));
document.write(n+ ' ');

for(let i = 0; i <9; i++ ){
    n += d;
    document.write(n+ '  ');
} 

