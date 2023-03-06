/**Viết hàn solveEquation() để giải phương trình bậc nhất
 * ax+b=0 với a va b là 2 tham số đầu vào. Ví dụ:
 * solveEquation(2,-4)
 * output: 2
 * 
 */
let a  = parseInt(prompt("Please input a"));
let b  = parseInt(prompt("Please input b"));
function solveEquation(a,b){
    let x = -b/a;
    if(a==0 && b==0){
        console.log("Phương trình vô số nghiệm");
    } else if(a==0 && b!=0){
        console.log("Phương trình vô  nghiệm");
    } else
             
            console.log(x);
}
solveEquation(a,b)