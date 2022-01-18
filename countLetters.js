let str = 'I like to listen to my music really loud';

const countLetters = function (input) {
	let obj = {};
	for (let x = 0; x < input.length; x++) {
		let objKeys = Object.keys(obj);
		let char = input[x];
		let arr = obj[char];
		obj[char] = (obj[char] || 0) + 1;
	}
	return obj;
};

// console.log(countLetters(str));

module.exports = countLetters;
