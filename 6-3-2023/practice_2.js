let number = parseInt(prompt("number"));
function isPrimeNumber(number) {
    for (let i = 2; i < number; i ++) {
        if (number %i==0)
        return  false;
    }
    return true;
}
console.log(isPrimeNumber(number));
par