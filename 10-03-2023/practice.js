let  canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
function veHinh(){
    let banKinh = ParseInt(document.getElementById("bankinh").value);
    let mau = document.getElementById("mau").value;
    let x = ParseInt(document.getElementById("tamX").value);
    let y = ParseInt(document.getElementById("tamY").value);
    let ht = new Circle(banKinh,mau ,tamX ,tamY);
    ht.draw(contex);
}
class Circle{
    constructor(radius, color, x ,y){
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;

    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.PI * Math.pow(this.radius * 2);
    }
    draw(mycontext){
        mycontext.beginPath();
        mycontext.arc(this.x, this.y,this.radius,0,2*Math.Pi)
        mycontext.strokeStyle = this.color;
        mycontext.stroke();
    }
}
