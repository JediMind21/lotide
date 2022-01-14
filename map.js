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

const assertArraysEqual = function (value, expected) {
  const actual = eqArrays(value.arr1, value.arr2);
  if (actual === expected) {
    console.log(
      `✅✅✅ Assertion Passed: ${value.arr1} === ${value.arr2}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${value.arr1} !== ${value.arr2}`
    );
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const frstLet = map(words, x => x[0]);
const lastLet = map(words, word => word[word.length - 1]);
const revWord = map(words, word => {
  let str = "";
  for (let x = word.length - 1; x >= 0; x--) {
    str += word[x];
  }
  return str;
});

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 3];
const areEq = eqArrays(arr1, arr2);
assertArraysEqual({ arr1, arr2 }, true);
assertArraysEqual({ arr1, arr2 }, false);
