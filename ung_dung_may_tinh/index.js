let cong = document.getElementById("cong");
let tru = document.getElementById("tru");
let nhan = document.getElementById("nhan");
let chia = document.getElementById("chia");
let a = parseInt( document.getElementById("input1").innerHTML);
let b = parseInt(document.getElementById("input2").innerHTML);

cong.addEventListener("click", () => {
     
    alert(+a+b);
});
