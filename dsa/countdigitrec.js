function countdigitrec(n){
if(n===0) return 0;
return 1+ countdigitrec(Math.floor(n/10));
}
console.log(countdigitrec(1234)); //4