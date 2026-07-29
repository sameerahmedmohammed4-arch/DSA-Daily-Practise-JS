//Right Rotate Array by K positions

let arr = [1, 2, 3, 4, 5, 6];  
let k = 350;
k = k %  arr.length; //8 % 6 = 2


for(let i = 0; i < k; i++){   // O(k)

    let last = arr[arr.length-1];

    for(let j = arr.length-1; j > 0; j--){ // O (n)
        
        arr[j] = arr[j-1];
    }
    arr[0] = last;

}
console.log(arr);//[5,6,1,2,3,4] O(n*k)


//Right Rotate Array by n positions

let arr2 = [1, 2, 3, 4, 5, 6];  

let n = 350;
n = n %  arr2.length; //8 % 6 = 2
    
for (let x = 0; x < n; x++){ 
    let first = arr2[0]; // 2
                
    for (let y = 0; y < arr2.length-1; y++){ // [2,3,4,5,1]
        // 4    // 4
        arr2[j] = arr2[y + 1]; // [3,4,5,1,1]
    }
    arr2[arr2.length-1] = first; // [3,4,5,1,2]
}
console.log(arr2);
