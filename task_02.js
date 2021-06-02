// ? https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// * Убрать восклицательные знаки
// Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function RemoveExclamationMarks(string) {
	const characterArray = string.split('');
	const newArray = [];

	characterArray.forEach(item => {
		if (item != '!') {
			newArray.push(item);
		}
		return item;
	});
	return newArray.join('');
}

const testCases = [
	{ input: '!hello!vasil!!' },
	{ input: 'HELLO!!0!' },
	{ input: 'asasdASs9!' },
	{ input: 'ПРИВЕТУЛИ!' },
];

testCases.forEach(testCases => {
	const { input } = testCases;
	const removeCharet = RemoveExclamationMarks(input);
	console.log(`
    input: ${input}, result: ${removeCharet};
  `);
});
