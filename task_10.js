// ? https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// * Удалить первый и последний символы
// Это довольно просто.
// Ваша цель - создать функцию, удаляющую первый и последний символы строки.
// Вам дается один параметр, исходная строка.
// Вам не нужно беспокоиться о строках, содержащих менее двух символов.

function deleteLetters(str) {
	const arrayStrings = str.split('');
	const deleteElem = arrayStrings.shift();
	console.log(deleteElem);
	// return arrayStrings;
}

console.log(deleteLetters('Inspirit'));
