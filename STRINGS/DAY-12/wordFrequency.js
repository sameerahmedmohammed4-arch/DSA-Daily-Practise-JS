// Given a string containing multiple words separated by spaces, count how many times each word appears and store the result in an object.

let str = "hello world hello javascript hello javascript";
let arr = str.split(" ");
let frequency  = {}; // {"hello": 2, world : 1}
let count =  0;

for (let i = 0; i < arr.length; i++){
    // 'hello'
    if(frequency[arr[i]]){
      frequency[arr[i]] = frequency[arr[i]]  + 1;
    } else{
      frequency[arr[i]] = 1;
    }
    // frequency[arr[i]] = 1;
    
}
console.log(frequency);

