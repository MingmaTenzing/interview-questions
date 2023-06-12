const nums = [0,1,2,9,4];
const target = 3;
const twosumArr = [];

function twosum() { 

    for (let i=0; i<nums.length; i++) {
 
    for (let j=i+1; j<nums.length; j++) {
        if (nums[j] + nums[i] == target) {
            twosumArr.push(nums[i], nums[j])
            console.log(twosumArr)
        }
    }
}
}

twosum();
