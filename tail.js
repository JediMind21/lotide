const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const words = ["Donkey", "Rhino", "Giraffe"];

const tail = function (input) {
  input.shift();
  return input;
};

const result = tail(words);

assertEqual(result.length, 2);
assertEqual(result[0], "Donkey");
assertEqual(result[0], "Rhino");
