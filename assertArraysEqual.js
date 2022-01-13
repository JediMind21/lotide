const assertArraysEqual = function (arr1, arr2) {
  let str1 = "";
  let str2 = "";
  if (arr1.length !== arr2.length) {
    srt1 = false;
  } else if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (typeof arr1[x] === typeof arr2[x]) {
        str1 += arr1[x];
        str2 += arr2[x];
      } else {
        str1 = false;
      }
    }
  }
  if (str1 === str2) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal!");
  } else
    console.log(
      "🛑🛑🛑 Assertion Failed: The arrays are NøT equal D="
    );
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, "2", 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 2, 3]);
