const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  let str1 = "";
  let str2 = "";
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (typeof arr1[x] === typeof arr2[x]) {
        str1 += arr1[x];
        str2 += arr2[x];
      } else {
        return false;
      }
    }
    if (str1 === str2) {
      return true;
    } else return false;
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), false);
