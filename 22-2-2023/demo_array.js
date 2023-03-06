// khai báo mảng
let nameList = ["Long", "Hien", "Phuc"];
let numberList = [1 ,2 ,3 ,4 ,5]
let info = ["Long", "longlamduc@gmail.com", true, 5.0,];
let weekday = new Array("Monday", "Tuesday", "Wednesday" + "<br>");
document.write(nameList + "<br>");
// kiểm tra kiểu dữ liệu của mảng\
document.write(typeof( nameList)+"<br>");
// truy vấn 1 phần tử trong mảng
let numbers = [1, 2 , 3, 4, 5];
//  in ra giá trị 4 trong mảng
document.write(`Mảng ban đầu là: ${numbers}`+"<br>");
document.write(`phần tử tại vị trí 3 trong mảng có giá trị là: ${numbers[3]}`+"<br>");
// thay đổi giá trị tại index 3
numbers[3]= 10;
document.write(`Mảng sau khi thay đổi giá trị: ${numbers}`+"<br>");
document.write(`phần tử tại vị trí 3 trong mảng có giá trị là: ${numbers[3]}`);