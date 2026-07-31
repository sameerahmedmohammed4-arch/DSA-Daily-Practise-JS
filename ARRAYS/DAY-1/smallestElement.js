// Find the smallest element

let numbers = [12,45,78,89,56,23,15,14,11];

let min = numbers[0];
for (let i = 0; i<= numbers.length - 1; i++){
    if (min > numbers[i]){
        min = numbers[i];
    }
}
console.log("The Smallest number in an array:" , min); // 11
