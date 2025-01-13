/*
Remove Duplicates from sorted array
*/

// input [1,2,2,2] output 2, [1,2,_]

// function removeDuplicates(nums){
//     for(let i=0; i<nums.length-1;i++){
//         if(nums[i] === nums[i+1]){

//             nums.splice(i+1,1);
//             // console.log('befor',i);

//             i--;
//             // console.log('after',i);

//         }
//     }
//     return nums.length;
// }

// const arr = [1,2,2,2,4,4,4,23,23,22,22];

// console.log(removeDuplicates(arr))

// without js methods = two pointer approach

function removeDuplicatesWithoutMethods(nums) {
  if (nums.length === 1) return 1;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;

      nums[i] = nums[j];
    }
  } 
  //

  return i + 1;
}
console.log(removeDuplicatesWithoutMethods([1,2,2,3,3,4,4,2,1]));
// removeDuplicatesWithoutMethods([1, 2, 2, 3, 3, 4, 4, 2, 1]);
