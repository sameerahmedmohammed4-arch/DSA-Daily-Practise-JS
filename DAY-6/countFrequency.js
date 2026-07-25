// Frequency of an element in an array

// for sorted array
let arr = [2,2,2,2,3,4,5,6];
let target = 2;
let j = arr.length -1;
let frequency = 0;
// arr.sort((a,b) => (a-b)); // [ 2 , 2 , 2 , 3 , 4 , 5 , 6]
for (let i = 0; i < arr.length; i++){
    if (arr[i] === target) {
              // 2           6 
        while (arr[i] !== arr[j-1]) {
            j--;
        }
        frequency = j - i;
        break;
    }
}
console.log(frequency);


// for unsorted array
let arr1 = [9,2,3,4,2,2,5,6];
let target2 = 2;
let count = 0;
for (let i =0 ; i< arr1.length;i++){
    if(arr1[i] == target2){
        count++;
    }
}
console.log("frequency : ", count);