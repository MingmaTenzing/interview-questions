function validPalindrome(str) {
    if (!str) {
      return console.log(true)
    }
      const cleanString = str.toLowerCase().replaceAll(",", "").replaceAll(":","").split(" ").join("")
      //another way of doing to remove all the is by using:
      //str.replace(/[^z-z0-9]/gi,"")
      const reverseString = cleanString.split("").reverse().join("");
    
      if (reverseString == cleanString) {
        console.log(true)
      }
      else console.log(false)
    }
    
    validPalindrome("A man, a plan, a canal: Panama ")