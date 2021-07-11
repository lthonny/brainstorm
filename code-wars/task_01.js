// ? https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// * Повтор строки
// Напишите функцию с именем repeatStr, которая повторяет заданную строку ровно n раз.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(quantity, repetitionElement) {
	return repetitionElement.repeat(quantity);
}

const testCases = [
	{ quantity: 6, data: 'hello' },
	{ quantity: 3, data: 'lo' },
	{ quantity: 7, data: 'I' },
	{ quantity: 4, data: 'el' },
];

testCases.forEach(testCases => {
	const { quantity, data } = testCases;
	const repeat = repeatStr(quantity, data);
	console.log(`
    quantity: ${quantity}, data: ${data} --- result: ${repeat};
  `);
});
