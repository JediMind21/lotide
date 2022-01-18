const middle = function (arr) {
	let middle = [];
	let index = Math.floor(arr.length / 2);

	for (let x = 0; x < arr.length; x++) {
		if (arr.length % 2 !== 0) {
			middle.push(arr[index]);
			break;
		} else if (arr.length % 2 === 0) {
			middle.push(arr[index - 1]) && middle.push(arr[index]);
			break;
		}
	}
	return middle;
};

module.exports = middle;


