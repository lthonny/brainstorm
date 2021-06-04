// ? https://www.codewars.com/kata/5b853229cfde412a470000d0
// * В два раза старше
// Ваша функция принимает два аргумента:
// -текущий возраст отца (лет)
// -текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).

function twiceAsOld(dadYearsOld, sonYearsOld) {
	const multiplicationOldSon = sonYearsOld * 2;
	const subtraction = dadYearsOld - multiplicationOldSon;
	return Math.abs(subtraction);
}

console.log(twiceAsOld(55, 30));

// codewars
function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(55, 30));
