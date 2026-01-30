function powerNum(x,n){
if(n===0) return 1;
return x * powerNum(x,n-1)
}
console.log(powerNum(2,3)); //8
console.log(powerNum(3,4)); //81