// write a function that returns the number of vowels in a string 

// console.log("hellow world");

const str = "aeiou and i am happy"

arrStr = str.toLowerCase().split(" ");

console.log(arrStr);

const vowels = ["a","e","i","o","u"];



function counNumberOfVowels(str){
    let count = 0;

    // for(char of arrStr){
        // if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        //     count++;
        // }
    // }
    for(let char of str.toLowerCase()){
        console.log(char);
        
        if(vowels.includes(char)){
            count++;
        }
    }
    

    return count;

}

// console.log(counNumberOfVowels(str));





