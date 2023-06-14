const array = [1,2,3,4,5,6,7];
const target = 3;
const result =[];

function twoSum() {

  for (let i=0; i<array.length; i++) {

   for (let j=i+1; j<array.length; j++) {
   if (array[i] + array[j] == target){
    result.push(array[i], array[j])
    console.log(result)

   }
}
}
}
twoSum();