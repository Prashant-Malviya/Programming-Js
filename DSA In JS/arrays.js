
let person = {
    name : "Krishna",
    age : 25,
}


let arr = ["apple","banana","cherry"]

// console.log(arr.length);


// different methods for adding and removing elements in the array 

// push and pop is used to add or remove elements from the last of the array while shift and unshift is used to remove the elements from the begining of the array  

arr.push("orange")

// console.log(arr);

// console.log(arr.pop())
// console.log(arr.pop())


arr.unshift("mangos")
arr.shift()
// console.log(arr);

// push and pop are most performant than shif and unshif cause these shif and unshif costly during big operations 

// -------------------------------------
// loops 

const numbers = [12,23,4,5,2,2];

numbers.some((item,index,array) =>{
    return item > 23;
})


numbers.every((item,index,array)=>{
    return item > 20
})

const res = numbers.find((item,index,array) =>{
    return item < 12;
})

// console.log(res);



// ----------------------------------------------

const nums = [1,2,3,4];

const nums2 = [3,5,2,2];

const finalNums = [...nums,...nums2]; // spread operators

function sum(...numbers){ // rest operator
    return numbers;
}

// console.log(sum(nums,nums2));



// concat ---------------------

// const newArr = nums.concat(nums2)

// console.log(newArr)


// slice -----------------------

const fruits = ['apple','oranges','bananas','grapes'];

// console.log(fruits);

// const newFruitsArr = fruits.slice(0,3) // it takes 0 index to last index-1;


const newFruitsArr = fruits.slice(-1) //from last index it returns element in case of negative number 

// console.log("new fruites arr ",fruits);


// -------------------
// splice 

const sizes = ["small","medium","big","largest"];

//splice mehtod takes three arguments starging index uptill the provided last index and the replaced value

// and it doesn't retrun new array it modify the orginal array 

// console.log(sizes);


// const newSizes = sizes.splice(2,3,"changesFruites")

// console.log(sizes);


//Fill --------------------------------

// sizes.fill("biggest",0,2);
// sizes.fill("biggest",-1);


// console.log(sizes);


// findindex ------------------------

const index = sizes.findIndex((item) => item==='largest');

// console.log(index);


// flat --------------------

const flatArr = [1,[2,3],[[3,2],3]];

// const flatenedArray = flatArr.flat(); 
//if we call directly like this one it will flate upto one label but if we want further flatened then we have to specify
const flatenedArray = flatArr.flat(2);


// console.log(flatenedArray);


// reverse ---------------------


const reverseArr = [1,2,3,4,5,6];

reverseArr.reverse();

// console.log(reverseArr);


// -------------------------------
// sort 
const unsorted = [4,2,5,2,1,3,5,39,28];

unsorted.sort((a,b)=>a-b);
console.log(unsorted);


