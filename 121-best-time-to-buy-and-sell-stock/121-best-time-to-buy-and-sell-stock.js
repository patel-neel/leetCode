/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = prices => {
    let profit = 0;
    let lowestPrice = Infinity;
    for (let i = 0; i < prices.length; i++){
        lowestPrice = Math.min(lowestPrice, prices[i]);
        profit = Math.max(profit, prices[i] - lowestPrice)
    }
    return profit;
};