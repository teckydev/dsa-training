function isPalinfrome(num){
let original = num;
let reversed = 0;
while(num>0){
let digit = num%10;
reversed = reversed *10 + digit;
num = Math.floor(num/10)
}
// return original === reversed;
if(original === reversed){
    console.log("Palindrome");
    return true;
}
console.log("Not a Palindrome");
return false;
}
console.log(isPalinfrome(121)); // true