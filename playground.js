function stockTrading(prices) {

  let l=0;
 let maxProfit = 0;
  for (r=1; r<prices.length; r++) {
      profit = prices[r] - prices[l];
      if (profit < 0 ) {
        l=r
      }
      else if (profit > maxProfit) {
        maxProfit = profit;
      } 
       
  }
  console.log(maxProfit)


}

stockTrading([2,9,18,9,2])