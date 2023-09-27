function moveZeroes(nums) {
    let l = 0;
    let r = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[r] !== 0) {
        temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
  
        l++;
      }
      r++;
    }
    console.log(nums);
  }
  moveZeroes([1, 0, 2, 0]);
  