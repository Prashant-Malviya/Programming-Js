/*

Minimum in a Sorted and Rotated Array

Given a sorted array of distinct elements arr[] of size n that is rotated at some unknown point, the task is to find the minimum element in it. 

Examples: 

Input: arr[] = [5, 6, 1, 2, 3, 4]
Output: 1
Explanation: 1 is the minimum element present in the array.


Input: arr[] = [3, 1, 2]
Output: 1
Explanation: 1 is the minimum element present in the array.


Input: arr[] = [4, 2, 3]
Output: 2
Explanation: 2 is the only minimum element in the array.

*/

class Solution {
    // Function to find the minimum element in a sorted and rotated array.
    findMin(arr) {
        // your code here
        
        // let minimum = arr[0];
        
        // for(let i=1;i<arr.length;i++){
            
        //   minimum =  Math.min(minimum,arr[i]);
        // }
        
        // return minimum; //O(n)<--TC and O(1) <--- SC
        
        // --------------------------
        
        let low = 0, high = arr.length-1;
        
        while(low < high){
            
            if(arr[low] < arr[high])
                return arr[low];
            
            
            const mid = Math.floor((low+high)/2);
            
            if(arr[mid] > arr[high])
                low = mid+1;
            
            else high = mid;

        }
            return arr[low];
    }
}  // O(log n) <-------- TC and O(1) space Complexity