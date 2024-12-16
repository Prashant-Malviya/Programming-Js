let word1 = "racecar"

function checkPalindrom(str1){
    let word2 = str1.split("");
    let reverseWord = "";

    for(let i = word2.length-1;i>=0;i--){
        reverseWord += word2[i];
    }
    // console.log(reverseWord);
    
    return reverseWord === str1;
}


console.log(checkPalindrom(word1));


function anotherWayOfPalindromCheck(str1){
    const reverseStr = str1.split("").reverse().join("");
    return reverseStr === str1
}

console.log(anotherWayOfPalindromCheck(word1));
