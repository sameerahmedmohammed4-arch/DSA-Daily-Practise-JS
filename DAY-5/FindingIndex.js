//Finding index value without using index!!!!

let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 8;

for (let i = 0; i < arr.length; i++){
  if(arr[i] === target){
    console.log(`The index Value of the element ${target} is:`,i);
  }
}

