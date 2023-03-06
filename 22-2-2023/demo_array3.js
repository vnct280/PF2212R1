// các thuộc tính và phương thức của mảng
let nameList = ["Anthony", "Bella", "Chris"];
document.write(`Mảng ban đầu: ${nameList}`+"<br>");

// Độ dài của mảng
document.write(`Độ dài của mảng là:  ${nameList.length}`+"<br>"+"<br>");
nameList.push("David");
document.write(`Mảng sau khi thêm David là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi thêm David là: ${nameList.length}`+"<br>"+"<br>");

// Thêm 1 phần  tử vào mảng
nameList[nameList.length]="Emily";
document.write(`Mảng sau khi thêm Emily là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi thêm Emily là: ${nameList.length}`+"<br>"+"<br>");

nameList[nameList.length]="Federick";
document.write(`Mảng sau khi thêm Federick là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi thêm Federick là: ${nameList.length}`+"<br>"+"<br>");

// Xóa 1 phần tử trong mảng
// cách 1
let removeitem = nameList.shift(); // xóa phần tử đầu tiên của mảng
document.write(`Phần tử đã bị xóa: ${removeitem}` +"<br>"+"<br>");
document.write(`Mảng sau khi shift là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi shift là: ${nameList.length}`+"<br>"+"<br>");
removeitem = nameList.shift(); // xóa phần tử đầu tiên của mảng
document.write(`Phần tử đã bị xóa: ${removeitem}` +"<br>"+"<br>");
document.write(`Mảng sau khi shift là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi shift là: ${nameList.length}`+"<br>"+"<br>");
// cách 2 pop
removeitem = nameList.pop(); // xóa phần tử cuối của mảng
document.write(`Phần tử đã bị xóa: ${removeitem}` +"<br>"+"<br>");
document.write(`Mảng sau khi shift là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi shift là: ${nameList.length}`+"<br>"+"<br>");
removeitem = nameList.pop(); 
document.write(`Phần tử đã bị xóa: ${removeitem}` +"<br>"+"<br>");
document.write(`Mảng sau khi shift là: ${nameList}`+"<br>"+"<br>");
document.write(`Độ dài của mảng sau khi shift là: ${nameList.length}`+"<br>"+"<br>");

