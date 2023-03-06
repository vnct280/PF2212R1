/**
 * Bài 2: viết hàm transformStr() nhận vào tham số string và 
 * in ra string ở dạng uppercase  và lowercase. Ví dụ:
 * transformStr(`Funtion is Magic!`);
 * Output:
 * Lowercase: `funtion is magic!`
 * Uppercase: `FUNTION IS MAGIC!`
 */
let string = prompt("Please input String");
 function transformStr(string){
    let up= string.toUpperCase();
    let lw= string.toLowerCase();
    console.log(`UpperCase: ${up}`);
    console.log(`LowerCase : ${lw}`);
 }
 transformStr(string);