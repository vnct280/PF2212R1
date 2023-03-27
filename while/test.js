let num = prompt("Enter a number: ");
let total = 0;

while( num != -1 ) {
   num = prompt("Enter a number: ");
   alert(num);
   //phần code tính tổng
   total += num;
} console.log(total);