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
    return false;
  } else if (arr1Str === arr2Str) {
    return true;
  }
};

const eqObjects = function (obj1, obj2) {
  let arrKeys1 = Object.keys(obj1);
  let arrKeys2 = Object.keys(obj2);
  let arrVals1 = Object.values(obj1);
  let arrVals2 = Object.values(obj2);
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else if (
    assertArraysEqual(arrKeys1, arrKeys2) &&
    assertArraysEqual(arrKeys1, arrKeys2) &&
    assertArraysEqual(arrKeys1, arrKeys2)
  ) {
    return true;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));
