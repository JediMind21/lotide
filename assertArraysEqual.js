const assertArraysEqual = function (arr1, arr2) {
  arr1Str = "";
  arr2Str = "";
  for (num of arr1) {
    num.toString();
    arr1Str += num;
  }
  for (num of arr2) {
    num.toString();
    arr2Str += num;
  }
  if (arr1Str !== arr2Str) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else if (arr1Str === arr2Str) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 2, 3]);
