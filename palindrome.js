function palindrome(str) {
  let reverseString = "";

  for (let i = 0; i < str.length; i++) {
    reverseString = str[i] + reverseString;
  }
  if (reverseString == str) {
    console.log(true);
  } else console.log(false);
}

palindrome("test");

function shortPalindrome(str) {
  let reverseString = str.split("").reverse("").join("");
  if (reverseString == str) {
    console.log(true);
  } else console.log(false);
}
shortPalindrome("abba");
