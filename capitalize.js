function capitalize(str) {
  let capString = "";

  for (let i = 0; i < str.length; i++) {
    if (i == 0 || str[i - 1] == " ") {
      capString = capString + str[i].toUpperCase();
    } else {
      capString = capString + str[i];
    }
  }
  console.log(capString);
}

capitalize("a green apple");

//MORE CLEANER WAY

function Cap(str) {
  const array = str.split(" ");
  const capArray = [];
  for (word of array) {
    const capitalize = word[0].toUpperCase() + word.slice(1);
    capArray.push(capitalize);
  }
console.log(capArray.join(" "))
}

Cap("a green apple");
