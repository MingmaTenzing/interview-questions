function binarySearch(nums, target) {
    let l = 0;
    let r = nums.length - 1;
  
    while (l <= r) {
      mid = Math.floor((l + r) / 2);
  
      if (nums[mid] < target) {
        l = mid + 1;
      }
      if (nums[mid] > target) {
        r = mid - 1;
      }
      if (nums[mid] == target) {
        return console.log(mid)
      }
    }
    
  }
  binarySearch([-2,-1,4,5,7], -1);
  