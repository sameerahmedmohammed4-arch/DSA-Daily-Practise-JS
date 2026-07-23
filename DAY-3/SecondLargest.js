// Second Largest Element of an array

// Method 01 - for sorted array

let array1 = [0, 1, 2, 3, 6, 2, 7, 42,4,5,7,3,32,56,56];
array1.sort((a,b) => (a-b));
console.log(array1[array1.length -2]);


// Method 02 - for unsorted array

let array2 = [0,3,4,6,1,7,20,4,2,7,9,5,5,9,10];
let max = 0;
for(let i =0; i < array2.length; i++){
    if(array2[i] > max){
        max = array2[i];
    }
}

let maxIndex = array2.indexOf(max)
array2.splice(maxIndex, 1);
let secondMax = 0;
for(let j =0; j < array2.length; j++){
    if(array2[j] > secondMax){
        secondMax = array2[j];
    }
}

console.log("The second largest element is : ", secondMax);  // 10


// Method 03 - for unsorted array

let arr = [0,3,2,1,4];

let largest = -Infinity;
let secondLargest = -Infinity;
// console.log(0 > -Infinity);
for (let i = 0; i < arr.length; i++) {
          // 4      3  
    if (arr[i] > largest) { // T
        secondLargest = largest;  // 3
        largest = arr[i]; // 4
    }
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i]; //1
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
