const eqObjects = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let vals1 = Object.values(obj1);
  let vals2 = Object.values(obj2);
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
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    if (eqArrays(keys1, keys2) && eqArrays(vals1, vals2)) {
      return true;
    } else return false;
  }
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(
      `✅✅✅ Assertion Passed: Object ${actual} === ${expected}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: Object ${actual} !== ${expected}`
    );
  }
};

const person1 = {
  name: `Brandon`,
  age: 28,
  height: `5' 10"`,
};

const person2 = {
  name: `Brandon`,
  age: 28,
  height: `5' 10"`,
};

const person3 = {
  name: `Darian`,
  age: 32,
  height: `6' 3"`,
};

assertObjectsEqual(eqObjects(person1, person2), true);
assertObjectsEqual(eqObjects(person2, person3), true);
