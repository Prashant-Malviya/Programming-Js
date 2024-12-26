/*

you are given an array prices where prices[i] is the price of a given stock on the ith day.
you want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.
return the maximum profit, if you cannot achieve any profit, return 0

input: prices = [7,1,5,3,6,4] o/p:5;
input: pirces = [7,6,4,3,1] o/p:0;

*/


function maxProfit(prices){
    let globalProfit = 0;

    for(let i=0; i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            const currentProfit = prices[j] - prices[i];

            if(currentProfit > globalProfit)
                globalProfit = currentProfit;
        }
    }

    return globalProfit;
}

const prices = [7,6,4,8,9,12]

// console.log(maxProfit(prices));

// -----------------------

// greedy algorithm approach 

const maxProfitGreedy = function(prices){
    let minStockPurchasePrice = prices[0] || 0;

    let profit = 0;

    for(let i=1; i<prices.length;i++){
        
        if(prices[i] < minStockPurchasePrice){
            minStockPurchasePrice = prices[i];
        }
        // console.log(prices[i]);
        
        profit = Math.max(profit,prices[i]-minStockPurchasePrice);
    }

    return profit;
}

maxProfitGreedy(prices)

