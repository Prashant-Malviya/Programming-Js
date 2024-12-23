// Rotate array by k

/*
Given an integer array nums, rotate the array to the right by k steps where k is non negative

input:- [1,2,3,4,5,6,7], k = 3 ----> o/p [5,6,7,1,2,3,4]
input:- [-1,-100,3,99], k=2 ----> o/p [3,99,-1,-100]

*/


function rotateArray(nums,k){
    let size = nums.length;

    if(k > size){
        k = k % size;
    }

    const rotated = nums.splice(size - k, size) 
    nums.unshift(...rotated);

    return nums;
} //TC : O(n)
const arr =  [1,2,3,4,5,6,7];


// console.log(rotateArray(arr,3));


function rotateArrayOptimised(nums,k){
    let size = nums.length;

    if(k > size){
        k = k%size;
    }

    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);

    return nums;
}
// Time complexity  O(n);

function reverse(nums,left,right){
    while(left < right){
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArrayOptimised(arr,3));

