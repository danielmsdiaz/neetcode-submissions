class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Math.max(...prices);
        let profit = 0;

        for(let i = 0; i < prices.length; i++){
            const price = prices[i];

            if(price < minPrice){
                minPrice = price;
            }

            const todayProfit = price - minPrice;

            if(todayProfit > profit){
                profit = todayProfit
            }
            
        }

        return profit
    }
}
