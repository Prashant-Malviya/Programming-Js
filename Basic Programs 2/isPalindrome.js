// Palindrome number 
// An integer is a palindrome when it reads the same forward and backward 

// x = 121 ---------> o/p: true 

const isPalindrome = function(x){

    // if(x<0)

    return x<0 ? false :  x === +x.toString().split("").reverse().join("");
}


console.log(isPalindrome(101))