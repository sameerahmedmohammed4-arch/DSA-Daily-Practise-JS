// Find the average of array

let numbers = [2, 4, 3, 5, 6, 9, 5, 1];
let sum = 0;
for (let i = 0; i <= numbers.length-1; i++){
    sum += numbers[i];
}
let average = sum/numbers.length
console.log("The average of given array :",average); // 4.37