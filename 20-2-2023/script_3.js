// Viết chương trình nhập vào 1 số n và đếm xem n có bao nhiêu chữ 
// số, sau đó tính tổng các chữ số là bao nhiêu
// ví dụ n = 12345
// output: 1 +2 +3 +4 +5 = 15; 12345 có 5 chữ số
let n = parseInt(prompt("nhập n:"));
let number = n;
let totalValue =0;
let totalDigit = 0;
while(n > 0) {
    totalValue += n%10
    n = Math.floor(n /10);
    totalDigit++;
    document.write(`Tổng các chữ số của ${number} là ${totalValue} <br>`);
}

document.write(`${number} có ${totalDigit} chữ số`);

