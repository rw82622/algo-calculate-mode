exports.calculateMode = (argList) => {
  // initialize your variables (UNIQUE_ITEMS, COUNT, RESULT)
  let uniqueItems = set(argList);
  let count = [];
  let result = [];
  // find the count of each unique item in ARG_LIST and add it to COUNT
  for (let item of uniqueItems) {
    count.push(argList.filter((e) => e === item).length) }
  // add the most frequent items to RESULT
  for (let index in count) {
    if (count[Number(index)] === Math.max(...count)) {
      result.push(uniqueItems[Number(index)]); }}
  return result;
};

function set(arg1) {
  let myArr = [];
  for (let item of arg1) {
    if (!myArr.includes(item)) {
      myArr.push(item);
    }
  }
  return myArr;
}