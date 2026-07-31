// Checking palindrome word
// madam , mam, mom, damad, level,radar,, noon,civic,radar,refer.

let str = "malayalam";
let j = str.length - 1;
let result = true;

for (let i = 0; i < str.length; i++){
  if (i < j){
      if (str[i] !== str[j]) {
        result = false;
      } else {

        result = true;
      }
      j--;
  }
}
console.log(result);
