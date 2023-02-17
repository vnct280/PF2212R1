let ip = parseInt(document.getElementById("ip"));
let btaction= document.getElementById("btaction");
btaction.addEventListener("click", () => {
    if ( ip % 2 ==0) {
        alert("chẵn");
    } else{
        alert("lẻ");
    }
}); 
