function self(nums) {
  const leftProduct = [];
  const rightProduct = [];
  const result = [];

  leftProduct[0] = 1;
  rightProduct[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
  }

  for (let i = nums.length -2; i>=0 ; i--) {
   rightProduct[i] = nums[i + 1] * rightProduct[ i + 1]
  }

 
  for (let i=0; i<nums.length; i++) {
    result[i] = rightProduct[i] * leftProduct[i];
  }
  console.log(result)
}

self([10,1,5,2]);
