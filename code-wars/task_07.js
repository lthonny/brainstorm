// ? https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// * Площадь или периметр
// Вам даны длина и ширина 4-стороннего многоугольника. Многоугольник может быть прямоугольником или квадратом.
// Если это квадрат, верните его площадь. Если это прямоугольник, верните его периметр.
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Примечание: для целей этого ката вы будете считать, что это квадрат, если его длина и ширина равны, в противном случае это прямоугольник.

function careaOrPerimeter(lenght, width) {
	if (lenght === width) {
		return lenght * width;
	} else {
		return 2 * (lenght + width);
	}
}

console.log(careaOrPerimeter(6, 10));

// codewars
const areaOrPerimeter = function (lenght, width) {
	return lenght === width ? lenght * width : 2 * (lenght + width);
};
console.log(areaOrPerimeter(6, 10));
