function mergeTwoLists(l1, l2) {
  if (!l1) return console.log(l2);
  else if (!l2) return console.log(l2);
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    console.log(l1);
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    console.log(l2);
  }
}
mergeTwoLists([1, 2, 3, 4], [5, 6, 7, 8]);
