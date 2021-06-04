// ? https://www.codewars.com/kata/57cc981a58da9e302a000214
// * Достаточно мал? - Новичок
// Вам будет предоставлен массив и предельное значение.
// Вы должны убедиться, что все значения в массиве ниже или равны предельному значению.
// Если да, верните true. В противном случае верните false.
// Вы можете считать, что все значения в массиве являются числами.

function smallEnough(arr, limit) {
	function bruteForceArr(element) {
		return element <= limit;
	}
	return arr.every(bruteForceArr);
}

console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));

// сodewars
function smallEnough(arr, limit) {
	return Math.max(...arr) <= limit;
}
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
