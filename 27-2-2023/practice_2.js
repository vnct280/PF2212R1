//  Bài 2: Hãy tạo ra một mảng  mới bằng cách 
//cộng các phần tử tương ứng của mảng  cũ theo index tương ứng
let array1 =["M", "na", "i", "Ke"];
let array2 =["y", "me", "s", "lly"];
//['my', 'name', 'is', 'kelly'] 
let array3 = [];
for(let i in array1){
    array3.push( array1[i] + array2[i]);
}

document.write(array3);