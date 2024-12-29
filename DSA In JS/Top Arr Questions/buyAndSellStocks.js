/*

Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.

Note: Stock must be bought before being sold.

Examples:

Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
Output: 8
Explanation: Buy for price 1 and sell for price 9. 


Input: prices[] = {7, 6, 4, 3, 1} 
Output: 0
Explanation: Since the array is sorted in decreasing order, 0 profit can be made without making any transaction.

Input: prices[] = {1, 3, 6, 9, 11} 
Output: 10
Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1]

*/


function buyAndSellStocks(prices){
    let n = prices.length;
    let res = 0;

    for(let i=0;i<n;i++){ //this runs for buying

        for(let j = i+1;j<prices.length;j++){
            res = Math.max(res,prices[j]-prices[i])
        }
    }
    return res;
} //TC:- O(n^2)

// console.log(buyAndSellStocks([7, 10, 1, 3, 6, 9, 2]));

function buyAndSellStocksOptimise(prices){

    let minSoFar = prices[0];
    let res = 0;


    for(let i=1;i<prices.length;i++){
        console.log('before',minSoFar);
        
        minSoFar = Math.min(minSoFar,prices[i]);

        console.log('after',minSoFar);
        

        res = Math.max(res,prices[i] - minSoFar);
    }

    return res;
} //TC:- O(n)

console.log(buyAndSellStocksOptimise([7, 10, 1, 3, 6, 9, 2]));
