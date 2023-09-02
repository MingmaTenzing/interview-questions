function bestProfit(prices) {
  const pricesMap = new Map();
  let buyingPrice = [...prices].sort()[0];
  let sellingPrice = 0;

  for (let i=0; i<prices.length; i++) {
    pricesMap.set(prices[i], i +1 )
  }
  
  for (let j=pricesMap.get(buyingPrice); j<prices.length; j++) {
    if (pricesMap.get(buyingPrice) + 1 == prices.length) {
      console.log('return')
    }
    if (prices[j] > sellingPrice) {
      sellingPrice = prices[j]
    }
  }

  if (sellingPrice - buyingPrice <= 0) {
    return console.log(0)
  }
  else return console.log(sellingPrice - buyingPrice)

  
}

bestProfit([1,2 ]);
