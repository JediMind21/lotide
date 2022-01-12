const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

let str = "I like to listen to my music really loud";

const countLetters = function (input) {
  let obj = {};
  for (let char of input) {
    obj[char] = (obj[char] || 0) + 1;
  }
  console.log(obj);
};

countLetters(str);
