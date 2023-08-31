function steps(n) {
  
  for (let row = 0; row < n; row++) {
    let steps = ""
  
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        steps += "#";
      } else steps += "  ";
    }
    console.log(steps)
  }
}

steps(3);
