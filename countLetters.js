let str = "I like to listen to my music really loud";

const letterPositions = function (input) {
  let obj = {};
  for (let x = 0; x < input.length; x++) {
    let objKeys = Object.keys(obj);
    let char = input[x];
    let arr = obj[char];
    obj[char] = [];
  }
  return obj;
};

console.log(letterPosition(str));

// Deletes key if key is " ";

// let length = Object.keys(obj).length;
//   for (let x = 0; x < length; x++) {
//     if (Object.keys(obj)[x] === " ") {
//       delete obj[" "];
//     }
//   }
