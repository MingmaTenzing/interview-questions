function insertionSort(nums) {

  for (let i=1; i<nums.length; i++) {

    while (nums[i-1]> nums[i]) {
      
        let temp = nums[i-1];
        nums[i-1] = nums[i];
        nums[i] = temp;
        i--;
      }
    }
    
    
    console.log(nums)
  }




insertionSort([9,7,5,2,8,4])