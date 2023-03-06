/**
 * Bài 1:
 * Viết hàm sumEven() nhận vào 1 số `n` và in ra tổng  các số chẵn từ 2 đến n
 * ví dụ sumEven(10)
 * output: 30
 */
let n = parseInt(prompt("Please input n"));
function sumEven(n){
    let result  =0;
    for (let i = 2; i<=n; i+=2){
        result +=i;
    }
    console.log(result);

}
sumEven(n);


