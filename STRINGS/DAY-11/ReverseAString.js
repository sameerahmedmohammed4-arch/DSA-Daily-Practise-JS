// Reverse a string

// Method 1

// let str = 'abdul';
// let reverse = '';
// for(let i= str.length-1; i >= 0; i--){
//   reverse += str[i];
// }

// console.log(reverse);

// Method 2 

let str = "ekanS";
let arr = str.split("");
let j = str.length - 1;

for (let i = 0; i < str.length; i++){
    if (i < j) {
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j--;
        // console.log(str);
    }
}
console.log(arr.join("-"));



// Method 3
// let str1 = "Phoenix";
// let arr = str1.split('');// [ 'P', 'h' ,'o', 'e','n','i','x']
// let reverse = String(arr.reverse());
// console.log(reverse);

// let reverse = '';
// for(let i= str1.length-1; i >= 0; i--){
//   reverse += arr[i];
// }

// console.log(reverse);
//
//
//
//
//
