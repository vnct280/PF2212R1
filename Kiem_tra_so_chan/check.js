let bt_action= document.getElementById("btaction");
bt_action.addEventListener("click", () => {
    let ip = parseInt(document.getElementById("id").value);
   if(ip % 2==0){
    alert("Chẵn");
   } else{
    alert("lẻ");
   }
});