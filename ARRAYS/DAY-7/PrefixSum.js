// FInding sum of two indices of an array with a query (prefix sum).
// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//   sum += arr[i];
//  }  //O(n)
// let partSum = 0;
// let n = 4;

// for (let j = 0; j <= n;j++){
//     partSum += arr[j];
// }  //O(n)
// console.log(sum);       // 
// console.log(partSum);

// Time Complexity : 0(n) + O(n)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let prefix = []; //1

//Initially declaring first element i.e index[0] as equal
prefix[0] = arr[0];

for (let i = 1; i < arr.length; i++){ 
    prefix[i] = prefix[i - 1] + arr[i]; // [1,3,6,10,15, 21,28,36,45];
}
console.log(prefix);  

let right = 9;
let left = 2;

let sum3 = prefix[right-1] -  prefix[left-1];
                   
console.log( sum3);



// let arr = [1, 3, 6, 10, 15, 21, 28, 36, 45];
// let right = 4;
// let left = 0;

// // If left is 0, we don't subtract anything (use 0)
// let sum3 = arr[right] - (left > 0 ? arr[left - 1] : 0); 

// console.log(sum3); // Output: 15 0(n) + 0(1) + 0(1)

// When Should You Use Prefix Sum?

// Use Prefix Sum when the problem asks for:

// Sum of elements in a range (L to R)
// Multiple range sum queries on the same array
// Counting frequencies over ranges
// Cumulative sums
// Subarray sum problems (often combined with a Hash Map)