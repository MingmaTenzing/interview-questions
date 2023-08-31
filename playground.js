function arrayChunk(array, size) {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    subarray = array.slice(i, i+size)

   chunkedArray.push(subarray)
  }
  console.log(chunkedArray)
}

arrayChunk([0, 1, 2, 3, 4,4,5,3,32,3], 3);
