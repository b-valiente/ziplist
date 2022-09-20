const testArray = [1, 2, 3];
const testArray2 = ['a', 'b', 'c'];

function zipList(arr1, arr2) {
  const newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i], arr2[i]);
  }
  return newArray;
}
console.log(zipList(testArray, testArray2));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(testArray, testArray2));
