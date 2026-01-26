function moveZeroes(nums) {
    console.log("movwe zeroes");
let k = 0 ;
for(let i = 0;i < nums.length;i++){
    if(nums[i]!==0){
        nums[k]=nums[i];
        k++;
    }   
}
while(k<nums.length){
    nums[k]=0;
    k++;
}
}
// Test
let arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr,"move zero"); // [1,3,12,0,0]