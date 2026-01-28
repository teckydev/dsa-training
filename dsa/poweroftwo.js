function poweoftwo(n){
if(n===1) return true
if(n%2!==0) return false
return poweoftwo(n/2)
}
console.log(poweoftwo(8)); //32