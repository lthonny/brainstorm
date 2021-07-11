// ? https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// * Найдите первый непоследовательный номер

const arr = [3, 4, 5, 6, 7, 8, 10, 11];

function firstNonConsecutive(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] + 1 !== arr[i + 1]) {
			return arr[i + 1];
		}
	}
	return null;
}

console.log(firstNonConsecutive([0, 1, 2, 3, 4, 6, 7, 8, 9]));

//codewars

function firstNonConsecutive(arr) {
	let counter = arr[0]; //base comparison value variable
	for (let i = 1; i < arr.length; i++) {
		//comparison
		if (arr[i] != counter + 1) {
			return arr[i];
		}
		counter++;
	}
	return null; //default return
}
console.log(firstNonConsecutive([2, 3, 4, 6, 7, 8, 9]));
