
// Move All Zeros to the End

// let arr = [0,3,0,5,2,4,0];
// let count = 0;
// for (let i = 0; i<arr.length; i++){
//     if(arr[i] === 0){
//         count++;
//         arr.splice(i,1);
//        arr.push(0)
// }
// }
// console.log(arr);


         //0  1  2  3  4  5  6  7  8
let arr = [1, 0, 5, 0];

let j = 0; //2
          // 2
for (let i = 0; i < arr.length; i++){
         // 0 F
    if (arr[i] !== 0) {

        // 5     0        0            5
        [arr[i], arr[j]] = [arr[j], arr[i]];    

        j++;
    }
}

console.log(arr);

// Time complexity : O(n) , Space complexity : O(1)