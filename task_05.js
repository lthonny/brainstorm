// ? https://www.codewars.com/kata/57a083a57cb1f31db7000028
// * Степени 2
// Завершите функцию, которая принимает на вход неотрицательное целое число n и
// возвращает список всех степеней двойки с показателем от 0 до n (включительно)
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push(2 ** i);
	}
	return arr;
}

console.log(powersOfTwo(1));

// codewars
function powersOfTwo(n) {
	var result = [];
	for (var i = 0; i <= n; i++) {
		result.push(Math.pow(2, i));
	}
	return result;
}
