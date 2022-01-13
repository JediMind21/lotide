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

const eqObjects = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let vals1 = Object.values(obj1);
  let vals2 = Object.values(obj2);
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    if (eqArrays(keys1, keys2) && eqArrays(vals1, vals2)) {
      return true;
    } else return false;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 3, 4] };
const cd4 = { c: "1", d: [3, 4] };
console.log(eqObjects(cd3, cd2));
console.log(eqObjects(cd3, cd4));
