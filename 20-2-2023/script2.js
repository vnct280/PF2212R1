 let n = parseInt(prompt("Nhập n"));
 let i = 1;
 while (i<=n)  {
    if (i % 3 == 0) {
        document.write("Java"+"<br>");
    } else if( i % 7 == 0){
        document.write("Script"+"<br>");
    } else if( i % 3 == 0 && i %7 ==0) {
        document.write("JavaScript"+"<br>");
    } else {
        document.write(i+"<br>")
    }
    i++;
 }
