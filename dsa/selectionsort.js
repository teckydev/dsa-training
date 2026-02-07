function selectionsort(arr){
let n = arr.length;
for(let i=0;i<n-1;i++){
    let min = i;
    for(let j = i+1;j<n;j++){
        if(arr[j]<arr[min]){
            min = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
return  arr;
}
console.log(selectionsort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]