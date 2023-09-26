function sumofTwo(nums1,nums2,target) {

  const set = new Set();
  for (let elem of nums1) {

    set.add(elem)
  }
  for (let elem of nums2) {
    if (set.has(elem)) {
      return console.log(true);
    }
  }
  console.log(false)

}

sumofTwo([1,2,3],[5,2],8)