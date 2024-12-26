// return the index of where the fibonacci number present 

var fib = function(n){
    const arr = [0,1];

    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    // console.log(arr);
    
    return arr[n];
}
fib(12);

// console.log(fib(7))

var recurFib =  function(n){
    if(n<=1)
        return n;


    return recurFib(n-1) + recurFib(n-2)
}


// console.log(recurFib(7));


const fibShort = (n) => (n <= 1 ? n : fib(n-1) + fib(n-2));


console.log(fibShort(7));
