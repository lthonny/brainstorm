// ? https://www.codewars.com/kata/59ff4709ba2a14501500003a
// * Порядок веса
// Учитывая массив строк, отсортируйте массив в порядке веса от легкого к тяжелому.
// Единицы измерения веса - граммы (G), килограммы (KG) и тонны (T).
// Массивы всегда будут содержать правильные и положительные значения, а также буквы в верхнем регистре.

function arrange(arr) {
	const sortedArray = arr.sort(
		(a, b) =>
			a.replace('T', '000000').replace('KG', '000').replace('G', '') -
			b.replace('T', '000000').replace('KG', '000').replace('G', '')
	);
	return sortedArray;
}
console.log(arrange(['400G', '100T', '150KG', '100G']));

// codewars

function arrange(arr) {
	const sorted = w => {
		if (w.slice(-2) === 'KG') {
			return w.slice(0, -2) * 1;
		} else if (w.slice(-1) === 'T') {
			return w.slice(0, -1) * 1000;
		} else return w.slice(0, -1) * 0.001;
	};
	return arr.sort((a, b) => sorted(a) - sorted(b));
}
console.log(arrange(['400G', '100T', '150KG', '100G']));
