// Even and Odd co
let array = [2, 3, 4, 5, 6, 7, 8, 9, 12, 35, 60];
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i <= array.length - 1; i++){
    if (array[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(`Number of evens : ${evenCount}`); //6
console.log(`Number of odds : ${oddCount}`); //5