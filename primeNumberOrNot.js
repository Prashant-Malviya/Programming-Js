
const arr = [3,5,7,23,31]

function isPrime(number){
   for(let i = 0; i<=number/2; i++){
    if(number % i === 0){
        return false;
    }
   }

   return true;
}

function checkPrimeNumber(number){

    let count = 0;

    for(let num of arr){
        if(!isPrime(num))
            count++;
    }

    return count;
}

console.log(checkPrimeNumber(arr));
