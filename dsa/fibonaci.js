function fibonaci(n){
    if(n===1) return 1;
    if(n===0) return 0;
    return fibonaci(n-1)+fibonaci(n-2);
}
console.log(fibonaci(6)); //8