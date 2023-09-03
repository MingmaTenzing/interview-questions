function stockTrading(prices) {


  let l=0;
  
  let maxProfit = 0;
  
  for (let r=1; r<prices.length; r++) {
    const profit = prices[r] - prices[l];
    if (profit > 0) {
      maxProfit =  Math.max(maxProfit, profit)
    }
    else l=r
  }
  console.log(maxProfit)
  
  
  
  
  
  }
  
  stockTrading([8,3,6,1,6,4,7]);
  