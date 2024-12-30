/*

Maximum Product Subarray

Given an integer array, the task is to find the maximum product of any subarray.

Examples:

Input: arr[] = {-2, 6, -3, -10, 0, 2}
Output: 180
Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180


Input: arr[] = {-1, -3, -10, 0, 60}
Output: 60
Explanation: The subarray with maximum product is {60}.


*/

function maxProductSubArr(arr){

    let n = arr.length;

    let result = arr[0];

    for(let i=0;i<n;i++){

        let product = 1;

        for(let j=i;j<n;j++){

            product *= arr[j];

            if(product > result){
                result = product ;
            }
        }
    }

    return result;

}//O(n^2)

console.log(maxProductSubArr([-2, 6, -3, -10, 0, 2]));



class Solution {
    maxProduct(arr) {
        // Check if the array is empty
        if (arr.length === 0) {
            return 0; // No elements to compute
        }

        // Initialize variables
        let currMax = arr[0]; // Current maximum product ending at the current index
        let currMin = arr[0]; // Current minimum product ending at the current index
        let maxProd = arr[0]; // Overall maximum product

        // Helper functions to compute max and min manually
        function max(a, b, c) {
            return a > b ? (a > c ? a : c) : (b > c ? b : c);
        }

        function min(a, b, c) {
            return a < b ? (a < c ? a : c) : (b < c ? b : c);
        }

        // Iterate through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            const num = arr[i]; // Current element

            // Calculate potential maximum and minimum products
            const temp = max(num, currMax * num, currMin * num); // Temporary maximum
            currMin = min(num, currMax * num, currMin * num);    // Update current minimum
            currMax = temp; // Update current maximum

            // Update the overall maximum product
            maxProd = max(maxProd, currMax, currMin);
        }

        return maxProd; // Return the maximum product of any subarray
    }
}
// O(n) TC and O(1) space