// ? https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// * Убрать восклицательные знаки
// Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function removeExclamationMarks(string) {
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

// codewars
function removeExclamationMarks(s) {
	return s.replace(/!/g, ''); // delete global sign
}

const testCases = [
	{ input: '!hello!vasil!!' },
	{ input: 'HELLO!!0!' },
	{ input: 'asasdASs9!' },
	{ input: 'ПРИВЕТУЛИ!' },
];

testCases.forEach(testCases => {
	const { input } = testCases;
	const removeCharacter = removeExclamationMarks(input);
	console.log(`
    input: ${input}, result: ${removeCharacter};
  `);
});
