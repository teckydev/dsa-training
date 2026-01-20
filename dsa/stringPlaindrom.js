function isStringPalindrome(str){
    let left = 0;
    let right = str.length - 1;
    while(left<right){
        if((str[left]!== str[right])){
            console.log("Not a Palindrome");
            return false;
        }
        left++;
        right--;
    }
return true;
}
console.log(isStringPalindrome("madams")); // true