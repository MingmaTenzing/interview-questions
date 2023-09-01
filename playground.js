function pyramid(n) {
  const colWidth = n*2 -1
  const middleCol = Math.floor(colWidth/2)

  for (let row =0; row<n; row++) {

    let steps = "";
    for (let col =0; col<colWidth; col++) {

      if (col >= middleCol - row && col <= middleCol + row){
        steps += "#"
      }
      else steps += " ";
    }
    console.log(steps)
  }


}

pyramid(4)