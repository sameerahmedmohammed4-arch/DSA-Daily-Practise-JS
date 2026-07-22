// Second Largest Element of an array

// Method 01 - for sorted array

let array1 = [0, 1, 2, 3, 6, 2, 1, 7, 42,4,5,7,3,32,56];
array1.sort((a,b) => (a-b));
console.log(array1[array1.length -2]);


// Method 02 - for unsorted array

let array2 = [0, 3,4,6,1,7,20,4,2,7,9,5,5,];
let max = 0;
for (let  i =0; i<=array2.length-1;i++){
    if (array2[i] > max){
        max = array2[i];
    }
}
let maxIndex = array2.indexOf(max);
array2.splice(maxIndex,1)
console.log(array2);

let secondMax = 0;
for(let j = 0;j<=array2.length -1 ;j++){
    if (array2[j] > secondMax){
        secondMax = array2[j];
    }
}
console.log("The second largest element is : ", secondMax);  // 9


// Method 03 - for unsorted array

let arr = [0, 3, 4, 6, 1, 7, 20, 4, 2, 7, 9, 5, 5];

let largest = -Infinity;
let secondLargest = -Infinity;
console.log(0 > -Infinity);
for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;  // 9
        largest = arr[i]; // 20
    }                                     
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);;
