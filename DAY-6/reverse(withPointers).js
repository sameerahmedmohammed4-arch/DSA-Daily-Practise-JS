// Reverse the array with pointers
         //0  1  2  3  4  5  6
let arr = [1, 5, 2, 6, 7, 8];

let j = arr.length - 1; // 5 4 3 2 1
            // 
for (let i = 0; i < arr.length; i++){
        
    if (i < j) { 

        [arr[i], arr[j]] = [arr[j], arr[i]];

        j--;
    }
}

console.log(arr);

// O/P : [8, 7, 6, 2, 5, 1]