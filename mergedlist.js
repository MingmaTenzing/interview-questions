function mergedList(list1, list2) {
  const combinedlist = [];
  if (list1.length > list2.length) {
    console.log(list1);
  } else if (list2.length > list1.length) {
    console.log(list2);
  } else if (list1.length == list2.length) {
    for (let i = 0; i < list1.length; i++) {
      combinedlist.push(list1[i], list2[i]);
    }
    console.log(combinedlist);
  }
}

mergedList([], []);
