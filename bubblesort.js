function bubbleSort(nums) { 

    for (let i=0; i<nums.length; i++) {
     for (let j=1; j<nums.length; j++) {
       if (nums[j]< nums[j - 1]) {
         temp = nums[j];
         nums[j] = nums[j - 1];
         nums[j-1] = temp;
   
       }
     }
   }
   console.log(nums)
   
    }
   bubbleSort([9,5,2,7,8])