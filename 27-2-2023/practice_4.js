array1 =["Hello", "take"];
array2 =["Dear", "Sir"];
array3=[];
array4=[];
for (let i in array1)
{ for(let j in array2){
    array3.push(array1[i]+array2[j]+"   ");
}   
}
document.write(array3 );




// array3.push(array1[0] + array2[i]);
// array4.push( array1[1] +array2[i]);
// array5 = array3+'  '  + array4;