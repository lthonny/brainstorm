// ? https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// * Сократите имя из двух слов
// ! Напишите функцию для преобразования имени в инициалы.
// Это ката состоит из двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их
// Должно получиться так:
// Sam Harris => S.H
// Patrick Feeney => P.F

function nameСonversion(nameAndSurname) {
	const name = nameAndSurname.split(' ');
	return (
		name[0].charAt(0).toLocaleUpperCase() +
		'.' +
		name[1].charAt(0).toLocaleUpperCase()
	);
}

console.log(nameСonversion('Sam Harris'));
