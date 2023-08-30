function stringifyId(arr) {
  const uniqueIds = [];
  const ids = arr.map((details, _) => details.id)
  for (checkId of ids) {
    if (checkId !== uniqueIds.find((id) => id == checkId)) {
      uniqueIds.push(checkId);
    }
  }
  console.log(uniqueIds.join(", "))
}


// top tech way 
// const idArray = arr.map((obj) => obj.id)
// const uniqueArray = [...new Set(idArray)]
//console.log(uniqueArray.join(", "))

stringifyId([
  { id: "ABC", name: "Ming" },
  { id: "abc", name: "Ting" },
  { id: "CBA", name: "sher" },
  { id: "CBA", name: "sher" },
  { id: "abc", name: "sher" },
]);
