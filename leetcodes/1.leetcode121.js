function getMaxProfit (prices){

    let min =prices[0];
    let profit =0;

    for(let i=0; i<prices.length ; i++){
        if(prices[i] - min > profit){
            profit = prices[i] - min
        }
        if(prices[i] < min ){
            min =prices[i]
        }
    }
    return profit
}

console.log(getMaxProfit([7,1,5,3,6,4])) 