function insertionSort(nums) {
  for (let i=1;i<nums.length;i++) {
    while (nums[i-1] > nums[i]) {
      let temp = nums[i];
      nums[i] = nums[i-1];
      nums[i-1] = temp;
      i--
    }
    
  }
  console.log(nums)


}

insertionSort([5,6,4,1,3,2])