/*
Truncate the text
Write a function called truncate that checks the length of a given string - str, and if it surpasses a specified maximum length, maxlength, it replaces the end of the sting with the character "..." so that the length matches the maxium length

input: str = I am prashant
output: 'prashant'

*/

function truncate(str,maxlength){
    if(str.length > maxlength){
        return str.slice(0,maxlength) + "...";
    }else{
        return str;
    }
}

console.log(truncate("I am Prashant",5));


// ------------------------------

// Q - Palindrome number

// input x = 121 y= 121

// o/p - true

const isPalindrome = function(x){

    // if(x < 0) return false;

    return x<0 ? false: x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(111);
// console.log(res);


// ---------------------------------------

// Q -> given two strings x and y, return the hamming distance between them.

//  x = "hello", y = "hwllr"

function hammingDistance(x,y){
    if(x.length !== y.length){
        throw new Error("Strings must be of same length")
    }

    let distance = 0;

    for(let i=0; i<x.length; i++){
        if(x[i] !== y[i]){
            distance++;
        }
    }
    return distance
}

console.log(hammingDistance("hellow","hwllrw"));


//Q- Anagram or not

const isAnagram = function (s,t){
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s===t;
}


const isAnagram2 = function(s,t){
    if(s.length != t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(let i=0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for(const key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true;
}
// console.log(isAnagram('anagram','nagaram'));
// console.log(isAnagram2('anagram','nagaram'));
