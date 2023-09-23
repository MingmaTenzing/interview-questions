function flattenArray( nums) {
    const result =[];
   
   function flattenArrayhelper(nums) {
     for (elem of nums) {
       if (Array.isArray(elem)) {
         flattenArrayhelper(elem);
       }
       else result.push(elem)
     }
   
   }
   flattenArrayhelper(nums);
   console.log(result)
   }
   flattenArray([1,2,3,[4,5]])