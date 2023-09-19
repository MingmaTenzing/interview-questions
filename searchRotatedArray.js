function searchRotatedArray(nums, target) {
    let l=0;
    let r= nums.length - 1; 
  
    while (l <=r) {
      const mid = Math.floor((l+r)/2);
      if (nums[mid] <target) {
        l = mid  +1;
      }
      if (nums[mid] > target) {
        r = mid - 1; 
  
    }
    if (nums[mid] === target) {
      return console.log(mid);
    }
  
    }
  
  }
  
  searchRotatedArray([8,9,10,0,1,2,3,4,5,6],1)