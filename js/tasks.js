'use strict';
// === задание №1 ===
/*
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

const answer = prompt('Какое «официальное» название JavaScript?', 'ECMAScript');
if (answer == 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Не знаете? ECMAScript!');
}
*/

// === задание №2 ===
// напишите код, который получает число через prompt, а затем выводит в alert:
//  1, если значение больше нуля,
//  -1, если значение меньше нуля,
//  0, если значение равно нулю.
/*
const number = prompt('Введите число', '');
if (number > 0) {
	alert('1');
} else if (number < 0) {
	alert('-1');
} else {
	alert('0');
}
*/

// === задание №3 ===
//Перепишите конструкцию if с использованием условного оператора '?':
/*
let result;
if (a + b < 4) {
	result = 'Мало';
} else {
	result = 'Много';
}
*/
/*
const a = 2, b = 2;
const result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);
*/

// === задание №4 ===
// Перепишите if..else с использованием нескольких операторов '?'.
/*
const login = prompt('Введите логин');
let message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
		(login == '') ? 'Нет логина' : '';
console.log(message);
*/

// === задание №5 ===
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно
/*
const age = +prompt('Укажите ваш возраст', '');
if (age >= 14 && age <= 90) {
	alert('Верно! Указанное число в диапазоне от 14 до 90!');
}
*/
// === задание №6 ===
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно
// const age = +prompt('Укажите ваш возраст', '');
/*
if (!(age >= 14 && age <= 90)) {
	alert('Верно! Указанное число не находится в диапазоне от 14 до 90!');
}

if (age < 14 || age > 90) {
	alert('Верно! Указанное число не находится в диапазоне от 14 до 90!');
}
*/

// === задание №7 ===
// Напишите код, который будет спрашивать логин с помощью prompt. Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю». Пароль проверять так: Если введён пароль «Я главный», то выводить «Здравствуйте!», Иначе – «Неверный пароль», При отмене – «Отменено».
/*
const login = prompt('Укажите ваш логин', '');

if (login == 'Админ') {

	const password = prompt('Введите пароль');
	if (password == 'Я главный') {
		alert('Здравствуйте!');
	} else if (password === '' || password === null) {
		alert('Отменено!');
	} else {
		alert('Неверный пароль!');
	}

} else if (login === '' || login === null) {
	alert('Отменено!');
} else {
	alert('Я вас не знаю!');
}
*/

// === задание №8 ===
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
/*
for (let i = 0; i < 3; i++) {
	alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
}
*/

// === задание №9 ===
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
/*
let number;
do {
	number = prompt('Введите число больше 100');
} while (number <= 100 && number !== null);
*/

// === задание №10 ===
// Напишите if..else, соответствующий следующему switch:
/*
let browser = 'Edge';
if (browser == 'Edge') {
	alert('You\'ve got the Edge!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
	alert('Okay we support these browsers too');
} else {
	alert('We hope that this page looks ok!');
}
*/

// === задание №11 ===
// Перепишите код с использованием одной конструкции switch
/*
const number = +prompt('Введите число между 0 и 3', '')
switch (number) {
	case 0:
		alert('Вы ввели число 0');
		break;

	case 1:
		alert('Вы ввели число 1');
		break;

	case 2:
		alert('Вы ввели число 2');
		break;
}
*/

// === задание №12 ===
// Перепишите функцию, чтобы она возвращала true, если параметр age больше 18, но без if, в одну строку.
// Сделайте два варианта функции checkAge: Используя оператор ? Используя оператор ||
/*
function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}
*/
/*
function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}

let checkAge1 = function (age) {
	return (age > 18) || confirm('Родители разрешили?');
}
*/

// === задание №13 ===
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// let min = (a, b) => (a < b) ? a : b;

// === задание №14 ===
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
/*
function pow(x, n) {
	if (!(n > 0 && isFinite(n))) return;
	return x ** Math.floor(n);
}
let x = +prompt('Число');
let n = +prompt('В какую степень возвести?');
console.log(pow(x, n));
*/

// === задание №15 ===
// Замените код Function Expression стрелочной функцией:
/*
const sayYes = () => alert('Вы согласились.');
const sayNo = () => alert('Вы отменили выполнение.');
const ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask('Вы согласны?', sayYes, sayNo);
*/

// === задание №16 ===
//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
/*
function getSum(a, b) {
	a = +prompt('Число а?');
	b = +prompt('Число b?');
	return a + b;
}
alert(getSum(3, 5));
*/

// === задание №17 ===
// Как правильно округлить 6.35?
/*
console.log(1.35.toFixed(1)); // 1.4
console.log(Math.round(6.35 * 10) / 10); // 6.3
*/

// === задание №18 ===
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт. Функция должна возвращать числовое значение.
/*
function readNumber() {
	let number;

	do {
		number = prompt('Введите число');
	} while (!isFinite(number));

	if (number === null || number === '') return null;

	return +number;
}

console.log(readNumber());
*/

// === задание №19 ===
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно). Любое число из интервала min..max должно появляться с одинаковой вероятностью.
/*
function randomInteger(min, max) {
	const randomNumber = min + Math.random() * (max + 1 - min);
	return Math.floor(randomNumber);
}
console.log(randomInteger(5, 10));
*/

// === задание №20 ===
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
/*
function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('василий'));
*/

// === задание №21 ===
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
/*
function checkSpam(str) {
	str = str.toLowerCase();
	if (str.includes('viagra'.toLowerCase()) ||
		str.includes('XXX'.toLowerCase())) {
		return true;
	} else {
		return false;
	}
}
*/

// === задание №22 ===
// Создайте функцию extractCurrencyValue(str), которая будет из строки выделять числовое значение и возвращать его.
/*
function extractCurrencyValue(str) {
	return parseInt(str.slice(1));
}
console.log(extractCurrencyValue('$120'));
*/

// === задание №23 ===
/*
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length - 1 / 2)] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');
*/

// === задание №24 ===
// Напишите функцию sumInput(), которая: Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
/*
function sumInput() {
	let numbers = [];

	while (true) {
		let number = prompt('Введите число для сложения');
		if (!isFinite(number) || number === null || number === '') break;
		numbers.push(+number);
	};

	let result = numbers.reduce((akk, num) => akk += num, 0);
	return result;
}
console.log(sumInput());
*/

// === задание №25 ===
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
/*
function camelize(str) {
	return str
		.split('-')
		.map((elem, index) => (index > 0) ? elem[0].toUpperCase() + elem.slice(1) : elem)
		.join('');
}
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
*/

// === задание №26 ===

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
/*
function filterRange(arr, a, b) {
	if (isFinite(a) && isFinite(b) && a <= b) {
		let filteredArray = arr.filter(item => item >= a && item <= b);
		return filteredArray;
	}
	return arr;
}
let numbers = [2, 3, 4, 5, 10, 15, 17];
console.log(filterRange(numbers, 5, 15));
*/

// === задание №27 ===
// Сортировать в порядке по убыванию
/*
let arrNumbers = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arrNumbers);
*/

// === задание №28 ===
// Создайте функцию copySorted(arr), которая будет возвращать отсортированную копию массива.
/*
let words = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
	return arr.concat().sort();
}

let sortedWords = copySorted(words);

console.log(sortedWords);
console.log(words);
*/

// === задание №29 ===

// У вас есть массив объектов users, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

// let names = users.map(elem => elem.name); - решение из учебника
let names = [];
users.forEach(elem => names.push(elem.name));

console.log(names);
*/

// === задание №30 ===
// У вас есть массив объектов users, и у каждого из объектов есть name, surname и id. Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
/*
let persons = [
	{ name: 'Вася', surname: 'Пупкин', id: 1, },
	{ name: 'Петя', surname: 'Иванов', id: 2, },
	{ name: 'Маша', surname: 'Петрова', id: 3, },
];

let otherFormatPersons = persons.map(elem => ({
	fullName: `${elem.name} ${elem.surname}`,
	id: elem.id,
}));

console.log(otherFormatPersons[0].fullName);
*/

// === задание №31 ===
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
/*
let siteUsers = [
	{ name: "Вася", age: 25 },
	{ name: "Петя", age: 30 },
	{ name: "Маша", age: 28 },
];

function sortByAge(arr) {
	return arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

console.log(sortByAge(siteUsers));
*/

// === задание №32 ===
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
/*
let numbers = [1, 2, 3];

let getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

function shuffle(arr) {
	let fillingUpArray = [];
	for (let i = 0; arr.length > 0; i++) {
		let randomIndex = getRandomInteger(0, arr.length - 1);
		let deletedElement = arr.splice(randomIndex, 1);
		fillingUpArray.push(deletedElement[0]);
		console.log(arr);
	}
	return fillingUpArray;
}

console.log(shuffle(numbers));
*/

// === задание №33 ===
// Напишите функцию getAverageAge(users), кот. принимает массив объектов со свойством age и возвращает средний возраст.
/*
let users = [
	{ name: 'Марфа', age: 30, },
	{ name: 'Моисей', age: 60, },
	{ name: 'Соломон', age: 20, },
	{ name: 'Евлампия', age: 50, },
];

const getAverageAge = (arr) =>
	arr.reduce((akk, item) => akk += item.age, 0) / arr.length;

console.log(getAverageAge(users));
*/

// === задание №34 ===
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы
/*
let replayWords =
	['А', 'почему', 'почему', 'почему', 'был', 'светофор', 'зелёный', 'всё', 'потому', 'потому', 'потому'];

function unique(arr) {
	let uniqueWords = [];
	arr.forEach(element => {
		if (!uniqueWords.includes(element)) {
			uniqueWords.push(element);
		}
	});
	return uniqueWords;
}

console.log(unique(replayWords));
*/

// === задание №35 ===

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
/*
let cars = { model: 'BMW', color: 'red', year: 2021, maxSpeed: 240, ['number of seats ']: 5, ['has mileage']: false, };

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

console.log(isEmpty(cars));
*/

// === задание №36 ===

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Если объект salaries пуст, то результат должен быть 0.
/*
let salaries = { John: 100, Ann: 160, Pete: 130, };

function getSalariSum(obj) {
	let sum = 0;
	for (let key in obj) {
		sum += obj[key];
	}
	return sum;
}

console.log(getSalariSum(salaries));
*/

// === задание №37 ===

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
/*
let menu = { width: 200, height: 300, title: 'My menu', };

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			obj[key] *= 2;
		}
	}
	return obj;
}

console.log(multiplyNumeric(menu));
*/

// === задание №38 ===
// Создайте объект calculator(калькулятор) с тремя методами:
// read()(читать) запрашивает два значения и сохраняет их как свойства объекта.
// 	sum()(суммировать) возвращает сумму сохранённых значений.
// 		mul()(умножить) перемножает сохранённые значения и возвращает результат.
/*
let calculator = {
	read: function () {
		this.num1 = +prompt('Число 1');
		this.num2 = +prompt('Число 2');
		return this;
	},
	sum: function () {
		return this.num1 + this.num2;
	},
	mul: function () {
		return this.num1 * this.num2;
	},
}

calculator.read();
let result = calculator.mul();
console.log(result);


// Синтаксис создания метода объекта
let car = {
	brand: 'Ford',
	model: 'Focus',
	method: fun
};

function fun() {
	console.log(car.model)
}

car.method();
*/
// === задание №39 ===
/*
let player = {
	name: 'Ivan',
	age: 30,
	['has wife?']: true,
	address: {
		city: 'Moscow',
		street: 'Lenina',
		house: 6,
	},
	showUserInfo() {
		const userInfo = `Имя: ${this.name};
Возраст: ${this.age};
Женат? ${this['has wife?']};
Город: ${this.address.city};
Улица: ${this.address.street};
Дом: ${this.address.house};`
		return userInfo;
	}
}

console.log(player.showUserInfo());
*/

// === задание №40===
/*
function User(name, age) {
	this.name = name;
	this.age = age;
	this.city = 'Moscow';
}

let user1 = new User('Вася', 30);
let user2 = new User('Петя', 27);
let user3 = new User('Петя', 27);
*/

// === задание №41===
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения. Используя setInterval. Используя рекурсивный setTimeout.
/*
function printNumbers(from, to) {
	let current = from;
	let timerId = setInterval(() => {
		console.log(current);
		if (current == to) {
			clearInterval(timerId);
		}
		current++;
	}, 1000);
}

printNumbers(1, 5);

function printNumbers1(from, to) {
	let current = from;
	setTimeout(function go() {
		console.log(current);
		if (current < to) {
			setTimeout(go, 1000);
		}
		current++;
	}, 1000);
}

//printNumbers1(1, 5);
*/

// === задание №42===