const assertEqual = function (actual, expected) {
	if (actual !== expected) {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	} else if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	}
};

// const findKeyByValue = function (obj, value) {
// 	for (const key in obj) {
// 		if (obj[key] === value) {
// 			return key;
// 		}
// 	}
// };

const objOfObjs = {
	"Blue Hill": { stars: 1 },
	Akaleri: { stars: 3 },
	noma: { stars: 2 },
	elBulli: { stars: 3 },
	Ora: { stars: 2 },
	Akelarre: { stars: 3 },
};

// findKey(
// 	{
// 		"Blue Hill": { stars: 1 },
// 		Akaleri: { stars: 3 },
// 		noma: { stars: 2 },
// 		elBulli: { stars: 3 },
// 		Ora: { stars: 2 },
// 		Akelarre: { stars: 3 },
// 	},
// 	x => x.stars === 2
// ); // => "noma"

function find(obj, callback) {
	for (let key in obj) {
		let innerObj = obj[key];
		if (callback(innerObj)) return key;
	}
}

console.log(find(objOfObjs, x => x.stars === 2));
console.log(
	find(objOfObjs, function (x) {
		return x.stars === 2;
	})
);

assertEqual(
	find(objOfObjs, x => x.stars === 2),
	"noma"
);
assertEqual(
	find(objOfObjs, x => x.stars === 2),
	"bradly"
);
