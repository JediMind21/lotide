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
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else if (arr1Str === arr2Str) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const without = function (source, itemsToRemove) {
  let comp = typeof source[0];
  newArrOfNums = [];
  newArrOfStrs = [];
  for (let x = 0; x < source.length; x++) {
    if (typeof source[x] !== comp) {
      newArrOfNums.push(source[x]);
    } else {
      newArrOfStrs.push(source[x]);
    }
  }
  let comp2 = typeof itemsToRemove[0];
  itmsToRmvNums = [];
  itmsToRmvStrs = [];
  for (let x = 0; x < itemsToRemove.length; x++) {
    if (typeof itemsToRemove[x] !== typeof comp2) {
      itmsToRmvNums.push(itemsToRemove[x]);
    } else {
      itmsToRmvStrs.push(itemsToRemove[x]);
    }
  }
  let without = [];
  for (let num of itmsToRmvNums) {
    for (let x = 0; x < source.length; x++) {
      if (num === source[x]);
      without.push(source.splice(x + 1, 1)[0]);
    }
  }
  for (let num of itmsToRmvStrs) {
    for (let x = 0; x < source.length; x++) {
      if (num === source[x]);
      without.push(source.splice(x, 1)[0]);
    }
  }

  console.log(without);

  // The code above creates new arrays, seperating out strings from numbers. for each input(input1 = source and input2 = itemsToRemove(4 arrays total)). I am going to come back to this problem as I am exhausted from it.

  // Below I have solved the problem using the filter method, however, I would like to complete it with a more algorithmic approach using for loops and conditionals, etc. but for now this one liner solves all my problems.

  // let without = source.filter(item => !itemsToRemove.includes(item));

  // return without;
};

without(["1", "2", 4, 7], ["1", 4]); // ===> ["2", 7];
without(["1", "2", "4", 7], ["1", 4]); // ===> ["2", "4", 7];
without([1, "2", "4", 7], [1, 4, 7]); // ===> ["2", "4"];

const rndmWrds = ["Squid", "Ward", "Sponge", "Bob"];
console.log(without(rndmWrds, ["Ward", "Sponge"]));

assertArraysEqual(rndmWrds, ["Squid", "Ward", "Sponge", "Bob"]);
