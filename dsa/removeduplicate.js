function removeDuplicate(arr) {
if(arr.length===0) return 0
let slow = 0;
for(let fast=1;fast<arr.length;fast++){
    if(arr[fast]!=arr[slow]){
        slow++;
        arr[slow]=arr[fast];
    }
}
return slow+1;
}
let arr = [1, 1, 2, 2, 3];
let k = removeDuplicate(arr);

console.log(k);           // 3
console.log(arr.slice(0, k)); // [1, 2, 3]