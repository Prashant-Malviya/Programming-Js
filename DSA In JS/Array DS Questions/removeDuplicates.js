let arr = [2, 5, 7, 9, 0, 2, 4, 3, 7, 10, 1, 1, 2, 1, 12, 6];

let obj = {};
let uniqueArr = [];

// Add elements to the object as keys and track the first occurrence
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) { // If the element is not already in the object
        obj[arr[i]] = true; // Mark it as seen
        uniqueArr.push(arr[i]); // Add to the unique array
    }
}

console.log("Array with duplicates removed:", uniqueArr);
