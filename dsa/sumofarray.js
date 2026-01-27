function sumofarray(arr,index=0) {
if(index === arr.length){
    return 0;
}
return arr[index] + sumofarray(arr,index+1);
}
console.log(sumofarray([1, 2, 3, 4, 5])); //15