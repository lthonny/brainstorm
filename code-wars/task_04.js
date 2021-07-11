// ? https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
// * Таблица умножения числа
// Ваша цель - вернуть таблицу умножения для числа, которое всегда является целым числом от 1 до 10.
// Например, таблица умножения (строка) для числа == 5 выглядит так:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. Вы можете использовать \ n в строке, чтобы перейти к следующей строке.
// Примечание: новые строки следует добавлять между строками, но в конце не должно быть конечных символов новой строки.

const n = 5;

function multiplicationTable(n) {
	let i = 1;
	const strMultiplication = [];
	while (i <= 10) {
		strMultiplication.push(`${i} * ${n} = ${i * n}`);
		i++;
	}
	return strMultiplication.join('\n');
}

console.log(multiplicationTable(n));

// * codewars
const n = 5;

const multiTable = n =>
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `${i} * ${n} = ${i * n}`).join('\n');
console.log(multiTable(n));
