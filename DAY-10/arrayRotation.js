// Rotate array right by one position

         //0  1  2  3  4
let arr = [1, 2, 3, 4, 5]; // 5,1,2,3,5,4
let last = arr[arr.length - 1];
         // 0
for (let i = arr.length-1; i >0;i--){
     //       // 
    arr[i] = arr[i-1];  
}

 arr[0]= last;

console.log(arr);

// Rotate array left by one position

let arr2 = [1,2,3,4,5]; // [2,3,4,5,1 ]
let first = arr2[0];
for(let i = 0; i < arr2.length-1; i++){
    arr2[i] = arr2[i+1];
}

arr2[arr2.length-1] = first;
console.log(arr2);
