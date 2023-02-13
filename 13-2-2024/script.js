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