/**Viết chương trình nhập vào 1 số nguyên n
 * và kiểm tra n có phải là số nguyên tố hay không
 */
let n = parseInt(prompt("nhập n:"));
i=2;
totalDevisor =0;
while(i < n){
    if(n % i == 0){
        totalDevisor +=1;
        break;
    }
    i++;
}
if(totalDevisor == 0){
    document.write(`${n} là số nguyên tố`)
} else {
    document.write(`${n} không phải là số nguyên tố`);
}