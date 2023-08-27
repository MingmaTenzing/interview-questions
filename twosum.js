function TwoSum() {
    const sum = 5;
    const array = [10, 2, 3, 4, 5, 6];
    const dummyarrray = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] + array[i] == sum) {
          dummyarrray.push(array[j], array[i]);
          console.log(dummyarrray);
        }
      }
    }
  }
  
  TwoSum();
  