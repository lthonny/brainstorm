// ? https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
// * Колодец идей - более сложная версия
// На каждую хорошую идею ката, кажется, найдется довольно много плохих!
// В этом ката вам нужно проверить предоставленный двумерный массив (x) на наличие хороших идей «хороших» и плохих идей «плохих».
// Если есть одна или две хорошие идеи, верните «Опубликовать!», Если их больше двух, верните «Я чувствую запах серии!».
// Если хороших идей нет, как это часто бывает, верните «Fail!».
// Подмассивы могут быть разной длины.
// Решение должно быть нечувствительным к регистру (т.е. хорошее, хорошее и хорошее - все считается хорошей идеей).
// Все входные данные не могут быть строковыми

function well(arr) {
	const mergedArray = [].concat(...arr);
	const arrtoUpperCase = mergedArray.map(element => {
		if (typeof element == 'string') {
			return element.toUpperCase();
		}
	});

	const good = [];
	const result = [];
	arrtoUpperCase.forEach(element => {
		if (element == 'GOOD') {
			good.push(element);
		}
	});

	if (good.length > 3) {
		result.push('I smell a series!');
	} else if (good.length <= 2 && good.length > 0) {
		result.push('Publish!');
	} else if (good.length == 0) {
		result.push('Fail!');
	}
	console.log(result.join(''));
	return result.join('');
}

well([
	['bad', 'bAd', 'bad'],
	['bad', 'bAd', 'bad'],
	['bad', 'bAd', 'bad'],
]);

// codewars
function well(x) {
	var count = 0;
	x.forEach(function (arr) {
		arr.forEach(function (elem) {
			if (typeof elem === 'string' && elem.toLowerCase() === 'good') {
				count++;
			}
		});
	});
	if (count === 0) {
		console.log('Fail!');
		// return 'Fail!';
	}
	console.log(count > 2 ? 'I smell a series!' : 'Publish!');
	// return count > 2 ? 'I smell a series!' : 'Publish!';
}

well([
	['bad', 'bAd', 'bad'],
	['bad', 'bAd', 'bad'],
	['bad', 'bAd', 'bad'],
]);
