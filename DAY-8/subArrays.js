// Print possible sub arrays of given array

// How to Generate All Subarrays
// Idea
// First loop → Starting index
// Second loop → Ending index
// Third loop → Print elements from start to end

// let arr = [2, 4, 5, 3]; 

for (let i = 0; i < arr.length; i++){ // i = start
    // i =  0 
    // //   
    for (let j = i; j < arr.length; j++) {            
        //  j  = 0 1 2 3
       let subArr = [];
                        //  0 
        for (let k = i; k < j + 1; k++){ 
                                 // 0  1   2      3 
            subArr.push(arr[k])  // 2, 2,4 2,4,5  2,4,5,3
        }
        console.log(subArr);
    }   
}  

// Time complexity: O(n^3)