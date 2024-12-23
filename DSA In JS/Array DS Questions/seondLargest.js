// Q1 - second largest number

// Input: [12,3,45,29,20] o/p:29

const secondLargestNumber = (arr)=>{
    let largestNum = Number.NEGATIVE_INFINITY;
    let seondLargestNum = Number.NEGATIVE_INFINITY;
    
    for(let i=0;i<arr.length;i++){//O(n)
        if(arr[i] > largestNum){
            largestNum = arr[i];
            seondLargestNum = largestNum;
        }else if(arr[i] != largestNum && arr[i] > secondLargestNumber){
            seondLargestNum = arr[i];
        }
    }
    return seondLargestNum;

}
// TC O(n);

// ----------------------------------------

const arr = [35,2,11,32,35,39];

// console.log(secondLargestNumber(arr));

function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr)); //O(n) to create a newt set time complexity is O(n);

    uniqueArr.sort((a,b)=>{ // O(nlogn); sort method
        return b-a;
    })

    if(uniqueArr.length >=2){
        return uniqueArr[1];
    }else{
        return -1;
    }
}
// so this algorithm has O(nlogn)

// console.log(secondLargest(arr));


// ------------------------------



