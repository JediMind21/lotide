const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function (array, callback) {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
};

const frstLet = map(words, x => x[0]);
const lastLet = map(words, word => word[word.length - 1]);
const revWord = map(words, word => {
	let str = '';
	for (let x = word.length - 1; x >= 0; x--) {
		str += word[x];
	}
	return str;
});

module.exports = map;
