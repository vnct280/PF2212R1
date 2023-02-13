// bài 1
let btnAction1 = document.getElementById("btn-action-1");
    btnAction1.addEventListener("click", () => {
        let length = parseInt(document.getElementById("length").value);
        let width = parseInt(document.getElementById("width").value);  
        if (length == width) {
            alert("đây là hình vuông");
        } else {
            alert("đây là hình chữ nhật");
        }
    });
    // Bài 2
    let btnAction2 = document.getElementById("btn-action-2");
    btnAction2.addEventListener("click", () => {
        let a = parseInt(document.getElementById("number-a").value);
        let b = parseInt(document.getElementById("number-b").value);  
        if (a > b) {
            alert(`Số ${a} là số lớn nhất`);  
        } if (b > a) {
            alert(`Số ${b} là số lớn nhất`);
        } if (a==b) {
            alert("a b bằng nhau");
        }
    });
// Bài 3
let btnAction3 = document.getElementById("btn-action-3");
    btnAction3.addEventListener("click", () => {
        let n = parseInt(document.getElementById("n").value);
        
       n >= 0 ? alert(`Giá trị tuyệt đối của n là ${+(n)}`) : alert(`Giá trị tuyệt đối của n là ${-(n)}`);
    });
    // Bài 4
    let btnAction4 = document.getElementById("btn-action-4");
    btnAction4.addEventListener("click", () => {
        let day = parseInt(document.getElementById("day").value);
            if (day < 2 ) 
            alert("Null");
            else if (day == 2) 
            alert("Monday");
            else if (day == 3) 
            alert("Tuesday");
            else if (day == 4) 
            alert("Wenesday");
            else if (day == 5) 
            alert("Thurday");
            else if (day == 6) 
            alert("Friday");
            else if (day == 7) 
            alert("Satuday");
            else if (day == 8) 
            alert("Sunday");
            else alert("Null");
        

    });
