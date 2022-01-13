const assertArraysEqual = function (arr1, arr2) {
  let str1 = "";
  let str2 = "";
  if (arr1.length !== arr2.length) {
    return "🛑🛑🛑 Assertion Failed: The arrays are NøT equal D=";
  } else if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (typeof arr1[x] === typeof arr2[x]) {
        str1 += arr1[x];
        str2 += arr2[x];
      } else {
        return "🛑🛑🛑 Assertion Failed: The arrays are NøT equal D=";
      }
    }
  }
  if (str1 === str2) {
    return "✅✅✅ Assertion Passed: The arrays are equal!";
  } else {
    return "🛑🛑🛑 Assertion Failed: The arrays are NøT equal D=";
  }
};

let words = ["pig", "toilet", "party", "shelter"];

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, "2", 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual(words, ["pig"]));
console.log(
  assertArraysEqual(words, ["pig", "toilet", "party", "shelter"])
);
