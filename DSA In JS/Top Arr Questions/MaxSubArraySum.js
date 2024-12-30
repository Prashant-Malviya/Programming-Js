/*
Maximum Subarray Sum – Kadane’s Algorithm
Last Updated : 11 Sep, 2024
Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.

Examples:

Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.


Input: arr[] = {-2, -4}
Output: –2
Explanation: The subarray {-2} has the largest sum -2.


Input: arr[] = {5, 4, 1, 7, 8}
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.

*/

function maxSubarraySum(arr) {
    // code here
    let result = arr[0];
    let subArr = [];
    
    for(let i=0;i<arr.length;i++){
        
        let currentSum = 0;
        
        for(let j=i;j<arr.length;j++){
            
            let k = 0;

            subArr[i][k] = arr[j]
            console.log(subArr);
            
            
            currentSum += arr[j];
            
            result = Math.max(result,currentSum);
        }
    }
    
    return result;
}
//O(n^2) <-- TC

console.log(maxSubarraySum([2, 3, -8, 7, -1, 2, 3]));
