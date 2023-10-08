function rotatedBinarySearch(nums, target) {

  let l=0; 
  let r= nums.length - 1 ;

  while (l<=r) {
    const mid = Math.floor((l+r)/2);
     if (nums[mid] < nums[r]) {
      l = mid + 1; 
     }
     if (nums[mid] > nums[l]) {
      r = mid-1;
     }
     if (nums[mid] === target) {
      return console.log(mid)
     }
  }



}

rotatedBinarySearch([4,5,6,7,8,9,1,2,3], 2)