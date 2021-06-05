// * https://www.codewars.com/kata/525f50e3b73515a6db000b83
// ! Создать номер телефона
// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9),
// который возвращает строку этих чисел в форме номера телефона.
// Пример:
// createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает «(123) 456-7890»
// Возвращенный формат должен быть правильным для выполнения этой задачи.
// Не забывайте пробел после закрывающих скобок!

function createPhoneNumber(numbers) {
	const countryСode = numbers.splice(0, 3).join('');
	const cityСode = numbers.splice(0, 3).join('');
	const subscriberPhoneNumber = numbers.splice(0, 4).join('');
	const fullNumbers = `(${countryСode}) ${cityСode}-${subscriberPhoneNumber}`;
	return fullNumbers;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// codewars

function createPhoneNumber(numbers) {
	const format = '(xxx) xxx-xxxx';

	for (var i = 0; i < numbers.length; i++) {
		format = format.replace('x', numbers[i]);
	}

	return format;
}
