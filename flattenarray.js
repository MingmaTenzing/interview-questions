function flattenArray( nums) {
    
  const result =[];

  function flattenHelper(nums) {
    for (elem of nums) {
      if (Array.isArray(elem)){
        flattenHelper(elem);
      }
      else result.push(elem)
    }

  }
  flattenHelper();
   }
   flattenArray([1,2,3,[4,[5]]])