// Viết 1 trang web quản lí sách trong 1 cửa hàng
// Mỗi quyển sách sẽ gồm: Tên, thể loại, giá tiền, số lượng
// Trang web sẽ có các chức năng chính như sau:
//  1. Thêm sách vào cửa hàng
//  2. Tìm kiếm thông tin theo tên sách
//  3. Điều chỉnh số lượng sách (cho phép tăng hoặc giảm số lượng)
//  4. Xóa một loại sách ra khỏi cửa hàng
class Book{
    constructor(name, catelory, price, quantity){
        this.name = name;
        this.catelory = catelory;
        this.price = price;
        this.quantity = quantity;
        
    }
}
let bookList =[];
// *add new book
let btnadd = document.getElementById("btn-add");
btnadd.addEventListener('click', () =>{
        let bookName = document.getElementById("book-name").value;
        let bookCatelory = document.getElementById("book-catelory").value;
        let bookPrice = parseInt(document.getElementById("book-price").value);
        let bookQuantity= parseInt(document.getElementById("book-quantity").value);
        let newBook = new Book(bookName, bookCatelory, bookPrice, bookQuantity);
        bookList.push(newBook);
        console.log(bookList);
        

});
//Search & delete book
    function seachBook(){
        let searchName = document.getElementById("search-name").value;
        let check = false;
        // loop through each item in book list
        for (let i in bookList){
           if (bookList[i].name.includes(searchName)){
            check = true;
           document.getElementById("book-name").value = bookList[i].name;
           document.getElementById("book-catelory").value = bookList[i].catelory;
           document.getElementById("book-price").value = bookList[i].price;
           document.getElementById("book-quantity").value = bookList[i].quantity;
            
            console.log(bookList[i]);
            break;
           }
        }
        if (check == false){
            alert("no book found");
        }
        
    }
// delete
    function deleteBook(){       
        let check = false;       
        for (let i in bookList){
           if (bookList[i].name.includes(searchName)){
            check = true;                      
            console.log(bookList[i]);
            bookList.splice(i,1);
            break;
           }
        }
        if (check == false){
            alert("no book found");
        }}
// Update Book
function UpdateBook(){     
    let     bookName = document.getElementById("book-name").value;
        let bookCatelory = document.getElementById("book-catelory").value;
        let bookPrice = parseInt(document.getElementById("book-price").value);
        let bookQuantity= parseInt(document.getElementById("book-quantity").value);  
    let check = false;       
    for (let i in bookList){
       if (bookList[i].name.includes(bookName)){
        bookList[i].catelory = bookCatelory;
        bookList[i].price = bookPrice;   
        bookList[i].quantity=bookQuantity;   
        check =true;            
        console.log(bookList[i]);
        break;
       }
    }
    if (check == false){
        alert("no book found");
    }}
    

