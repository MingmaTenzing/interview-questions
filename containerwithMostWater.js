function mostWater(heights) {

    let l=0;
    let r=heights.length -1; 
    let maxArea = 0;
  
  
    while (l<r) {
      const width = r - l; 
      const height = Math.min(heights[l], heights[r]);
      const area = width * height;
     if (area > maxArea) {
      maxArea = area;
     }
      if (heights[l] < heights[r]) {
        l++
      }
      else {
        r--
      }
    }
    console.log(maxArea)
  
  }
  mostWater([4,3,2,1,4])