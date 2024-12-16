// remove duplicate element from an array

const arr = [1,2,3,4,5,4,2,1]




function removeDuplicates(arr){
    arr.sort();
    let newArr = [];
    let j = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i] != arr[i-1]){
            newArr[j++] = arr[i-1];
        }
    }

    if(arr[arr.length-1] != arr[arr.length-2] )
        newArr[j] = arr[arr.length-1]

    return newArr;
}


// console.log(removeDuplicates(arr));

function removeDuplicates1(arr){
    const uniqueElements = [];

    for (let i=0;i<arr.length; i++){
        if(uniqueElements.indexOf(arr[i]) === -1){
            // console.log(indexOf(arr[i]));
            
            uniqueElements.push(arr[i]);
        }
    }

    return uniqueElements;
} // O(n^2) time complexity

// removeDuplicates1(arr);
// console.log(removeDuplicates1(arr));

function removeDuplicates2(arr){
    const uniqueSet = new Set(arr);

    return Array.from(uniqueSet);
}

const arr2 = [3,4,3,2,4,2,5,4,4,4,2,5,6,77,7,7,7]
// console.log(removeDuplicates2(arr2));

// this takes O(n) time complexity

function removeDuplicates3(arr){
    let newArr = [];

    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
} //o(n^2) since outer loop runs of n times while inner loop includes method takes o(m) time in worst time it is around o(n^2) so thats by O(n^2);

function removeDuplicates4(arr){
    arr.sort((a,b)=>a-b);

    let newArr = [arr[0]];

    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates4(arr))