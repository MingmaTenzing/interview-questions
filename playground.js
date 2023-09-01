function steps(n) {
  for (let col = 0; col < n; col++) {
    let steps = "";

    for (let row = 0; row < n; row++) {
      if (row <= col) {
        steps += "#";
      } else steps += " ";
    }
    console.log(steps)
  }
}

steps(4);
