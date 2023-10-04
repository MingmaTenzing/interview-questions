function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
      let currentMin = i;
  
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[currentMin]) {
          currentMin = j;
        }
      }
      let temp = nums[i];
      nums[i] = nums[currentMin];
      nums[currentMin] = temp;
    }
    console.log(nums)
  }
  
  selectionSort([3,4,0,2]);
  