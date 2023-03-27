// mô tả 1 lớp phân số, lớp này gồm 2 thuộc tính là tuSo, mauSo
class PhanSo{
    constructor(tuSo, mauSo){
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }
    add (other){ //other là 1 đối tương phân số khác 
        // Phân số 1 đại diện  bằng  this, 2 đại  diện bằng other
       let tuSoCong= this.tuSo * other.mauSo + other.tuSo * this.mauSo;
       let mauSoCong= this.mauSo * other.mauSo;
       console.log(`${tuSoCong}/${mauSoCong}`);
    }
    subtract(other1){
        let tuSoTru = this.tuSo* other1.mauSo - this.mauSo*other1.tuSo
        let mauSoTru = this.mauSo *  other1.mauSo;
        console.log(`${tuSoTru}/${mauSoTru}`);
    }
    multiply (other3){
        let tuSoNhan = this.tuSo * other3.tuSo;
        let mauSoNhan= this.mauSo * other3.mauSo;
        console.log(`${tuSoNhan}/${mauSoNhan}`);
    }
    divide (other4){
        let tuSoChia = this.tuSo * other4.mauSo;
        let mauSoChia = this.mauSo * other4.tuSo;
        console.log(`${tuSoChia}/${mauSoChia}`);
    }


}
let ps1 = new PhanSo(3,5);
let ps2 = new PhanSo(4, 5);
ps1.add(ps2);
ps1.subtract(ps2);
ps1.multiply(ps2);
ps1.divide(ps2);