const prices = [10, 6, 3, 9, 11, 5, 3, 7, 9, 15, 3, 3, 4];


// O(n) time & O(1) space
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

print(maxProfit(prices))
