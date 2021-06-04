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
	const bab = [];
	for (let i = 0; i < mergedArray.length; i++) {
		if (mergedArray[i] === mergedArray[i + 1]) {
			bab.push(mergedArray[i]);
		}
	}
	console.log(bab);
}
// well([2, 3, 4]);

well([
	['bad', 'bAd', 'bad'], // плохо
	['bad', 'bAd', 'bad'],
	['bad', 'bAd', 'bad'],
]);

// well([
// 	['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], // Опубликовать
// 	['bad'],
// 	['gOOd', 'BAD'],
// ]);

// well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]);  // Я чувствую запах серии!

var randomArray = ['ball', 'ball', 'tree', 'ball', 'tree', 'bus', 'car'];
var itemCount = {};

randomArray.forEach(function (value) {
	if (value in itemCount) itemCount[value] = itemCount[value] + 1;
	else itemCount[value] = 1;
});

console.log(itemCount);
