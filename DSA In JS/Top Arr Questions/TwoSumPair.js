/*
Two Sum – Pair with given Sum
Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. This problem is a variation of 2Sum problem.

Examples: 

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.


Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.

*/

//bruteforce

function findTwoSumPairBrute(nums, target) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    //O(n)
    for (let j = i + 1; j < n; j++) {
      // n
      if (nums[i] + nums[j] === target) return true;
    }
  }

  return false;
} //time complexity : O(n^2)

// console.log(findTwoSumPair([0, -1, 2, -3, 1],5))
// -3,-1,1,2

// using two pointer approach
function findTwoSumPairOptimise(nums, target) {
  let left = 0,
    right = nums.length - 1;

  nums.sort((a, b) => a - b); // modifies original arr

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return true;
    } else if (sum < target) left++;
    else right--;
  }

  return false;
} //O(nlog(n))

// console.log(findTwoSumPairOptimise([0, -1, 2, -3, 1],-2));

//using set method in js
function findTwoSumPairMoreOptimise(nums, target) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; //[0, -1, 2, -3, 1],-2
    console.log("complement =", target, " - ", nums[i], " = ", complement);

    if (set.has(complement)) {
      return true;
    }

    set.add(nums[i]);
    console.log(set);
  }

  return false;
}
//TC :- O(n);

// SC:- O(n);

// findTwoSumPairMoreOptimise([0, -1, 2, -3, 1],-2);

console.log(findTwoSumPairMoreOptimise([0, -1, 2, -3, 1], -2));
