const words = ["ground", "control", "to", "major", "tom"];

const takeUntil = function (array, arg, callBack) {
  const result = [];
  for (let item of array) {
    if (item !== arg) {
      result.push(callBack(item));
    } else {
      result.push(callBack(item));
      break;
    }
  }
  return result;
};

console.log(takeUntil(words, "to", item => item));
