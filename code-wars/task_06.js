// ? https://www.codewars.com/kata/53369039d7ab3ac506000467
// * Преобразуйте логические значения в строки «Да» или «Нет».
// Завершите метод, который принимает логическое значение и возвращает строку «Да» для истины или строку «Нет» для ложного

function boolToWord(bool) {
	return bool ? 'Yes' : 'No';
}

console.log(boolToWord('0'));
