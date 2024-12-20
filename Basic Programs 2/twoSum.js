//two sum 

const twoSum = function (nums,target){

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target)
                return [i,j];
        }
    }
}

// console.log(twoSum([2,3,4,5,6],9));


//using objects

const twoSumObj = function(nums,target){
    var obj = {};

    for(let i=0;i<nums.length;i++){

        var n = nums[i]

        // console.log(obj[target - n]);
        console.log(obj);
        

        if(obj[target - n] >=0)
            return [obj[target - n],i];
        else obj[n] = i;
    } 

    // '2' : 0
    // '4' : 1
    // '5'
}

// console.log(twoSumObj([2,4,5,2,5,2],9));

let obj = {};

obj[2] = 10;
obj[3] = "q";

console.log([obj[2],1]);

console.log(obj[1]);

