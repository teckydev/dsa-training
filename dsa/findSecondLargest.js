function findSecondLargest(arr){
if(arr.length < 2){
    return null; // Not enough elements to find the second largest
}
let first = -Infinity;
let second = -Infinity;
for(let i=0; i < arr.length; i++){
    if(arr[i]>first){
        second = first;
        first = arr[i];
    }else if(arr[i]>second && arr[i] !== first){
        second = arr[i];
}


}
return second;
}
console.log(findSecondLargest([10, 5, 20, 8, 15]));