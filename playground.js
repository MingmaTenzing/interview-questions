function maxSubarray(nums) {
  let maxSum = 0;

  for (let i=0; i<nums.length; i++) {

    let sum =0; 
    for (let j=i; j<nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum)

    }
  }
console.log(maxSum)
}

maxSubarray([-2,1,-3,4,-1,2,-5,0])