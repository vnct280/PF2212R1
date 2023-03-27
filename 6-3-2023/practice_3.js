let nStart = parseInt(prompt("input nStart"));
let nEnd = parseInt(prompt("input nEnd"));
function findPrime(nStart, nEnd){
    for (let i = nStart; i <= nEnd; i ++){
        if (isPrimeNumber(i)){
            console.log(i + " ");
        }
    }}
    findPrime(nStart, nEnd);