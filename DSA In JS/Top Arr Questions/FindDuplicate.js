// Find duplicates in O(n) time and O(n) extra space
/*

Given an array arr[] of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. The task is to find the repeating numbers.

Note: The repeating element should be printed only once.

Example: 

Input: n = 7, arr[] = [1, 2, 3, 6, 3, 6, 1]
Output: 1, 3, 6
Explanation: The numbers 1 , 3 and 6 appears more than once in the array.


Input : n = 5, arr[] = [1, 2, 3, 4 ,3]
Output: 3
Explanation: The number 3 appears more than once in the array.

*/

function duplicates(nums){

    const freqMap = {};
    const result = [];

    for(let num of nums){
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    for(let key in freqMap){
        if(freqMap[key] > 1){
            result.push(parseInt(key))
        }
    }

    if(result.length === 0)
        result.push(-1)

    return result
}

// console.log(duplicates([1, 2, 3, 6, 3, 6, 1]));


function duplicatesAnother(nums){
    const n = nums.length;

    const freqArr = new Array(n).fill(0);

    const result = [];

    for(const num of nums){
        console.log("num ",num);
        
        freqArr[num]++;
        // console.log(freqArr);
        console.log(freqArr[num]);
        
    }

    for(let i=0;i<n;i++){
        if(freqArr[i] > 1)
            result.push(i);
    }

    if(result.length === 0) result.push(-1);

    return result;
}

console.log(duplicatesAnother([1, 2, 3, 6, 3, 6, 1]));
