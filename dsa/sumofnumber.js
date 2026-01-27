function sumofnumber(n) {
    if(n===1){
        return 1;
    }
    return n + sumofnumber(n-1);
}
console.log(sumofnumber(5)); //15