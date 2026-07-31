// Maximum differenc in given array 

let arr = [5, 1, 7, 9, 2, 6, 3];

let smallElm = arr[0]
let maxDifference = 0;

for(let i = 1; i < arr.length; i++){
  let difference = arr[i] - smallElm;
  if(maxDifference < difference){
    maxDifference = difference;
  }
  if(arr[i] < smallElm){
    smallElm = arr[i];
  }
}
console.log(maxDifference);
console.log(smallElm);