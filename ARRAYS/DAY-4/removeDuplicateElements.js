// Remove duplicate Elements

let duplicates = [1,1,2,2,3,3,3,3,4,5,6,6,7,7,8,9,9];
let origNumbers = [];

origNumbers.push(duplicates[0]);
for(let i = 1; i < duplicates.length; i++){
  if(duplicates[i] !== duplicates[i-1]){
    origNumbers.push(duplicates[i]);
  }
}
console.log(origNumbers);

