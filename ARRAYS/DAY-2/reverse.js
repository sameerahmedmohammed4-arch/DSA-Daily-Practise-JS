// Reverse an array

// Method 1
// Reversing the array by creating a new array.
let letters = [1,2,3,4,5,6,7,8];
let reversedLetters = [];
for (let i = letters.length - 1; i >= 0; i--){
    reversedLetters.push(letters[i]);
}
console.log(reversedLetters);

// Method 2
// Changing Original array 
let nums = [7,6,5,4,3,2,1];
nums.reverse();
console.log(nums);