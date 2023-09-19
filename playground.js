function mininRotated(nums) {
let l=0;
let r= nums.length -1; 

while (l<r) {
  const mid = Math.floor((l+r)/2);
  if (nums[mid] > nums[mid + 1]) {
    l = mid + 1
  }
  else r = mid; 
}
return console.log(nums[l])
}
mininRotated([7,9,12,3,4])