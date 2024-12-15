let str = "I am Prashant and IamPrashant";

let longestWordStr = "";

function longestWord(str){
    let words = str.split(" ");
    // console.log(words);
    

    for(let word of words){
        if(longestWord.length < word.length){
            longestWordStr = word;
        }
    }

    return longestWordStr;
}

console.log(longestWord(str));
