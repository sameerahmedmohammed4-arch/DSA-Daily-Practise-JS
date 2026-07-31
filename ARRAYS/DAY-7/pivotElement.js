// Finding pivot element from an array :-


// function findPivot (arr){
// for (let i= 0; i<arr.length;i++){
//     let Lsum = 0;
//     let Rsum = 0;

//     for (let j = 0; j<i;j++){
//         Lsum += arr[j];
//     }

//     for(let k = i+1; k< arr.length;k++){
//       Rsum += arr[k];
//     }
    
//     if(Lsum === Rsum){
//         return arr[i];
//     }
//     }
//     return -1;
// }

// console.log(findPivot([1]));  //O(n**2) + O(1)


function pivotIndexOptimized(arr) {
    let totalSum = 0;

    // Find total sum
    for (let num of arr) {
        totalSum += num;
    }

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

// Example
console.log(pivotIndexOptimized([1, 7, 3, 6, 5, 6])); //  indx value 3  