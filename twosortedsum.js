/// whenever you are soliving a problem 
///that uses pointer like L and R, 
/// its better to use the while loop instead of for looop
//// using while loop solution is at the bottom

function twoSortedSum(arr, target) {
    let l = 0;
    let r = arr.length - 1;
  
    for (let i = 0; i < arr.length; i++) {
      sum = arr[l] + arr[r];
  
      if (sum < target) {
        l += 1;
      } else if (sum > target) {
        r -= 1;
      } else {
        return console.log([l, r]);
      }
    }
    
  }
  
  twoSortedSum([10,30], 40);
  
  
  
  //// using while LOOP 
  
  function twoSortedSumWhileLoop(arr,target) {
  
  let l=0;
  let r=arr.length -1; 
  
  while (l<r) {
     const sum = arr[l] + arr[r]
  
     if (sum < target) {
      l++
     }
     else if (sum>target) {
      r--
     }
     else return console.log([l,r]);
  }
  
  }
  twoSortedSumWhileLoop([10,30],40)