function maxCharacter(str) {
  let charMap = {};
  let maxValue = 0;
  let maxChar =""


  for (let char of str) {
   if(!charMap[char]){
    charMap[char] = 1;
   }
   else{
    charMap[char] = charMap[char] + 1;
   }
  }


for ( let char in charMap) {
   if (charMap[char] > maxValue) {
    maxValue = charMap[char];
    maxChar = char;
    
   }


}

console.log(maxChar)

}



maxCharacter("aaaabbbccd")