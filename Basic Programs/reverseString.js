function reverseString(str){
    let reversed = "";

    for (let i = str.length-1; i>=0; i--){
        reversed += str[i]
    }
    return reversed;
}

// console.log(reverseString("Prashant and Mohan"));


function reverseAnotherString(str){
    return str.split("").reverse().join("");
}

// console.log(reverseAnotherString("Prashant"));

 str = "mohan and shyam"

// console.log(str.split(" "))
