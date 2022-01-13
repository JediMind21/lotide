const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const newArr = [];
  for (let item in allItems) {
    let val = allItems[item];
    if (itemsToCount[val]) {
      newArr.push(val);
    }
  }
  const count = {};
  newArr.forEach(name => {
    count[name] = (count[name] || 0) + 1;
  });
  return count;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
