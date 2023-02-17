let btnaction = document.getElementById("btn-action-1");
btnaction.addEventListener("click", () =>{
    let n = parseFloat( document.getElementById("n").value );
    let total = 0;
    for(let i = 1; i <= n; i++ ){
        total +=i;
        
    }
    alert (`kết quả là ${total}`);
});