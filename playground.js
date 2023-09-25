function sumofTwo(nums1, nums2, target)  {

  const set = new Set();
  for ( elem of nums1) {
     set.add(target - elem);
  }
  for ( num of nums2) {
    if (set.has(num)) {
      return console.log(true)
    }

  }
  console.log(false)
  
 }
 
 sumofTwo([0,12,8],[3,1,4],2)
 