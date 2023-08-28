function reversInt(number) {
  let string = number.toString();
  let reverseString ="";
  
  


  for (let i=0; i<string.length; i++) {
    reverseString = string[i] + reverseString; 

  }

  console.log(parseInt(reverseString))

}

reversInt(2334)