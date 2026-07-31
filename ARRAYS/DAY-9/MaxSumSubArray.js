// Maximum Subarray Sum

//CODE:

let arr = [2, 4, 5, 3];
let maxSum = 0;
let maxSubArr = []; // Stores the final subarray with the maximum sum

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let currentSum = 0;
        let subArr = [];

        for (let k = i; k <= j; k++) {
            subArr.push(arr[k]);
            currentSum += arr[k];
        }

        // Check for max sum after the full subarray is built
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxSubArr = [...subArr]; // Copy the current subarray
        }
    }
}

console.log("Max Sum:", maxSum);
console.log("Subarray with Max Sum:", maxSubArr);


//Optimized Approach:

let arr2 = [2,4,5,3];

let maximumSum = arr2[0];
let currSum = arr2[0];

for(let i = 1; i < arr2.length; i++){
    currSum = Math.max(arr2[i], currSum + arr2[i]); //(3, 11 + 3) -> 14
    maximumSum = Math.max(maximumSum , currSum);            // (11,14) -> 14
}
// console.log(`current sum is: ${currSum}`);
console.log(`max sum is: ${maximumSum}`);

