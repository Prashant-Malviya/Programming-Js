let str = " I am   a   white space  string";
// let strArr = str.split(" ");
// console.log(strArr);




function removeWhiteSpace(str){
    let strArr = str.split(" ");
    let removedSpaces = "";

    for(word of strArr){
        if(word != " "){
            removedSpaces += word;
        }
    }

    return removedSpaces;

}
// console.log(removeWhiteSpace(str));

// in regex 
// the \s pattern matches whitespaces characters, including spaces, tabs, and line breaks while the g flag is used to perform a floval search and rpelace , replacing all occrencess

removeSpacesUsingRegex = (str)=> str.replace(/\s/g,"")

// console.log(removeSpacesUsingRegex(str));


console.log(typeof(null));
