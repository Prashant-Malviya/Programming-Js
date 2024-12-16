// write a function to find the largest number in an array

const numbers = [2,3,5,2,4,5,5,5,99];

function findLargest(numbers){
    let largest = 0;

    for(number of numbers){
        if(number > largest){
            largest = number
        }
    }

    return largest;
}

console.log(findLargest(numbers));
