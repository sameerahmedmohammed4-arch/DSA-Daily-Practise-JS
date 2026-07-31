// Find the largest element in arrays


let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = 0;
for (let i = 0; i <= array.length - 1; i++){
    if (array[i] > max) {
        max = array[i];
    }
}
console.log("The largest element in given array : ", max); // 9