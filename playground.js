function twoSortedSum(arr, target) {
  l=0;
  r= arr.length -1; 

  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum <target) {
      l++
    }
    else if (sum>target) {
      r--
    }
    else  return console.log([l,r])
  }



}

twoSortedSum([2,4,7,8],9)