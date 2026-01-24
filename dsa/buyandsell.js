function buyandsell(prices){
    let maxprofit=0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            let profit = prices[j]-prices[i];
            if(profit>maxprofit){
                maxprofit=profit;
            }
        }
    }
    return maxprofit;
}
console.log(buyandsell([7, 1, 5, 3, 6, 4])); // 5
console.log(buyandsell([7, 6, 4, 3, 1]));   // 0