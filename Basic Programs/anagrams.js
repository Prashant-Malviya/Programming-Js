// write a function that checks whether two strings are anagrams or not 

str1 = "listen";

str2 = "sileent";

// console.log(str1.includes(str2))

// str1.split("")

// console.log(str1);


// for(let )

const arrWithSize = new Array(5);

console.log(arrWithSize.length);

arrWithSize.push(1)
arrWithSize.push(2)
arrWithSize.push(3)
arrWithSize.push(4)
arrWithSize.push(5)
arrWithSize.push(6)

console.log(arrWithSize);



function areAnagrams(str1,str2){
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}



console.log(areAnagrams(str1,str2));

