function threeSum(arr) {
  const newArr = arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == newArr[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = newArr.length - 1;

    while (l < r) {
      const sum = newArr[i] + newArr[l] + newArr[r];
  if (sum < 0) {
    l++
  }
  if (sum>0) {
    r--
  }
  if (sum == 0 ) {
    result.push([newArr[i], newArr[l], newArr[r]])
    l++;
    if (newArr[l] == newArr[l-1] ) {
      l++
    }
  }
    }
  }
  console.log(result)
}

threeSum([-2,-2,0,0,1,1,2,2]);
