const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
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
  if (arr1Str === arr2Str) {
    return true;
  } else {
    return false;
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false);
