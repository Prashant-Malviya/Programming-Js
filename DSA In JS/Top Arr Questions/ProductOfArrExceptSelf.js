/*
Product of Array Except Self

Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. 

Example : 

Input: arr[] = {10, 3, 5, 6, 2}
Output: prod[] = {180, 600, 360, 300, 900}
Explanation :
Product of all except 10 = 3 * 5 * 6 * 2 = 180
Product of all except 3 = 10 * 5 * 6 * 2 = 600
Similarly for remaining elements, we have 
10 * 3 * 6 * 2 = 360, 
10 * 3 * 5 * 2 = 300 
10 * 3 * 6 * 5 = 900

Input: arr[] = {1, 2, 3, 4, 5}
Output: prod[] = {120, 60, 40, 30, 24 }
Explanation : 
2 * 3 * 4 * 5 = 120, 
1 * 3 * 4 * 5 = 60
1 * 2 * 4 * 5 = 40
1 * 2 * 3 * 5 = 30
1 * 2 * 3 * 4 = 24


*/


function productArrExceptSelf(nums){
    
    let n = nums.length;
    let productArr = new Array(n);
    

    for(let i=0;i<n;i++){
        let totalProduct = 1;
        for(let j=0;j<n;j++){

            if(i==j) continue;
            
            totalProduct *= nums[j];
            
        }

        productArr[i] = totalProduct;
        
    }

    return productArr;

}//TC O(n^2);

// console.log(productArrExceptSelf([10, 3, 5, 6, 2]));


function productArrayExceptSelfOptimise(nums){

    let n = nums.length;

    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);
    let product = new Array(n).fill(1);

    for(let i=1;i<n;i++){
        left[i] = nums[i-1]*left[i-1];
    }

    for(let j=n-2;j>=0;j--){
        right[j] = nums[j+1]*right[j+1];
    }

    for(let i=0;i<n;i++){
        product[i] = left[i]*right[i];
    }

    return product;
}


console.log(productArrayExceptSelfOptimise([10, 3, 5, 6, 2]))
