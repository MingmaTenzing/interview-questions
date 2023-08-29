function validAnagram(strA, strB) {
  let charMapA = new Map();
  let charMapB = new Map();

  for (char of strA) {
    charMapA.set(char, charMapA.get(char) + 1 || 1);
  }
  for (char of strB) {
    charMapB.set(char, charMapB.get(char) + 1 || 1);
  }
  if (charMapA.size !== charMapB.size) {
    return console.log(false);
  }

  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
      return console.log(false)
    }

    return console.log(true);
  }
}
validAnagram("test", "pest");
