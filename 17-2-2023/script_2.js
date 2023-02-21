// nhập vào 1 số nguyên dương n. Tính giai thừa
// giai thừa được tính bằng
// n! = n*(n-1)*(n-2)*..... 1
// ví dụ 5! = 5*4*3*2*1
let n = parseInt(prompt("nhập n"));
let factorial = 1;
for(let i = 1; i <= n; i++){
    factorial *= i; 
    
}
document.write(factorial + "  ");