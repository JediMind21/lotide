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

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const middle = function (arr) {
  let middle = [];
  let index = Math.floor(arr.length / 2);

  for (let x = 0; x < arr.length; x++) {
    if (arr.length % 2 !== 0) {
      middle.push(arr[index]);
      break;
    } else if (arr.length % 2 === 0) {
      middle.push(arr[index - 1]) && middle.push(arr[index]);
      break;
    }
  }
  return middle;
};

let arr = [2, 3, 6, 8, 4, 1];

console.log(middle(arr));
