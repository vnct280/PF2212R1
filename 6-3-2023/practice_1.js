let year = parseInt(prompt("Please input year"));
function isLeapYear(year){
    if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
        console.log(year + " la nam nhuan.");
        } else{
            console.log(year + " la nam khong nhuan.");
      
}}
isLeapYear(year);