const countOnly = function (allItems, itemsToCount) {
  const newArr = [];
  for (let item of allItems) {
    if (itemsToCount[item]) {
      newArr.push(item);
    }
  }
  const count = {};
  for (let name of newArr) {
    count[name] = (count[name] || 0) + 1;
  }
  return count;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const firstNamesToCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

console.log(countOnly(firstNames, firstNamesToCount));
