function anagram(s,t){
const strA = s.split("").sort().join("");
const strB = t.split("").sort().join("");

if (strA == strB) {
    console.log(true)
}
else console.log(false);
}

anagram('bbb', 'bbbb')