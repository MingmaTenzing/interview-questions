function insertionSort(nums) {

for (let i=1; i<nums.length; i++) {
  while (nums[i] < nums[i-1]){
    let temp = nums[i];
    nums[i] = nums[i-1];
    nums[i-1] = temp;
    i--
  }

}
console.log(nums)

}

insertionSort([9,7,5,2,8,4] )