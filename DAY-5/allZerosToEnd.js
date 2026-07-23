
// Move All Zeros to the End


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

// ________________________________________________________________________________________________________________

//Moving all zeroes to start

let arr = [1, 0, 5, 0];

let j = 0;

for (let i = 0; i < arr.length; i++){
         // 0 F
    if (arr[i] === 0) {

        [arr[i], arr[j]] = [arr[j], arr[i]];    

        j++;
    }
}
console.log(arr);
