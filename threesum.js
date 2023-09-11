function threeSum(arr) {
    const sortedArray = [...arr].sort();
    const subarray = [];
    for (let i = 0; i < sortedArray.length - 2; i++) {
      if (sortedArray[i] === sortedArray[i - 1]) {
        continue;
      }
      let l = i + 1;
      let r = sortedArray.length - 1;
  
      while (l < r) {
        const sum = sortedArray[i] + sortedArray[l] + sortedArray[r];
        if (sum < 0) {
          l++;
        }
        if (sum > 0) {
          r--;
        }
        if (sum === 0) {
          subarray.push([sortedArray[i], sortedArray[l], sortedArray[r]]);
          l++;
          while (sortedArray[l] === sortedArray[l-1]  && l<r){
            l++;
          }
        }
      }
    }
    console.log(subarray);
  }
  
  threeSum([-1, 0, 1, 2, -1, -4]);
  