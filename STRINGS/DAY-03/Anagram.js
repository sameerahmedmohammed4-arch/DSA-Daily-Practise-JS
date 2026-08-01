// Valid Anagram

// Two strings are anagrams if they contain the same characters with the same frequency, but the order can be different.

// Example
// s = "listen" shall --> halls
// t = "silent" 

// let str1 = "silent";
// let str2 = "listen";

// if (str1.length !== str2.length){
//   console.log("The length of the two strings is not equal!");
// }else{
//   let arr1 = str1.split("").sort();
//   let arr2 = str2.split("").sort();
//   console.log(arr1,arr2);
//   let freq1 = {};
//   let freq2 = {};
//   for ( let i = 0; i<arr1.length;i++){
//     if(freq1[arr1[i]]){
//       freq1[arr1[i]] = freq1[arr1[i]] + 1;
//     }else{
//         freq1[arr1[i]] = 1;
//       }
//     }
//     for ( let i = 0; i<arr2.length;i++){
//     if(freq2[arr2[i]]){
//       freq2[arr2[i]] = freq2[arr2[i]] + 1;
//     }else{
//         freq2[arr2[i]] = 1;
//       }
//     }
//     console.log(freq1, freq2);
//     let result = "valid Anagram";

//     for (let key in freq1) {
//         if (freq1[key] !== freq2[key]) {
//             result = "Invalid Anagram!";
//         } 
//     }
//     console.log(result);
// }

//OPTIMISED CODE

let str1 = "silenet";
let str2 = "listien";

if (str1.length !== str2.length) {
    console.log("Invalid Anagram!");
} else {
    let arr1 = str1.split("").sort();
    let arr2 = str2.split("").sort();

    let freq1 = {};
    let freq2 = {};

    // Build frequency objects
    for (let i = 0; i < arr1.length; i++) {
        freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1; //  'e' : 2
        freq2[arr2[i]] = (freq2[arr2[i]] || 0) + 1;
    }

    let result = "Valid Anagram!";

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            result = "Invalid Anagram!";
            break;
        }
    }

    console.log(freq1);
    console.log(freq2);
    console.log(result);
}