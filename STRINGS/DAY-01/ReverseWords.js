// Reversing the words present in a string
// Example "Hello World" --> "World Hello".


// using in built methods

// let str1 = "SAA REEE GAAA MAAA PAAA DAAA NISA";
// let arr1 = str1.split(" ").reverse().join(" ");
// console.log(arr1);


// using recursion

let str = "REEE GAAA MAAA PAAA DAAA NISA";
let arr = str.split(" ");
console.log(arr);
function reverse(arr, index) {
    if (index < 0) {
        return "";
    }
    if (index === 0) {
        return arr[index]
    }
    return arr[index] + " " + reverse(arr,index-1);
}
let result = reverse(arr,arr.length-1);
console.log(result);
