// ? https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// * Удалить первый и последний символы
// Это довольно просто.
// Ваша цель - создать функцию, удаляющую первый и последний символы строки.
// Вам дается один параметр, исходная строка.
// Вам не нужно беспокоиться о строках, содержащих менее двух символов.

function deleteLetters(str) {
	const arrayStrings = str.split('');
	const firstElement = arrayStrings.splice(0, 1);
	const lastElement = arrayStrings.splice(-1, 1);
	return arrayStrings.join('');
}

// codewars
function removeChar(str) {
	return str.slice(1, -1);
}

const testCases = [
	{ input: 'Вас3илийАа' },
	{ input: '21Inspirit' },
	{ input: 'nullSun213' },
	{ input: 'алAиSsdйАа' },
	{ input: 'В2силDий99' },
];

testCases.forEach(testCases => {
	const { input } = testCases;
	const removeFirstLast = deleteLetters(input);
	console.log(`
    input: ${input}, result: ${removeFirstLast};
  `);
});
