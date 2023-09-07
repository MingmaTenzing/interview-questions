function threeSum(nums) {
  const results = [];
  nums.sort((a, b) => (a, -b));

  for (i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      }
      if (sum > 0) {
        r--;
      }
      if (sum === 0) {
        results.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - r] && l < r) {
          l++;
        }
      }
    }
  }
  console.log(results);
}

threeSum([-1, 0, 1, 2, -1, -4]);
