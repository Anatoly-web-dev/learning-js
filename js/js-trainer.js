// === задание №1 ===
// спросить у пользователя его имя и фамилию и ответить: Привет, {имя} {фамилия}!
function getUserName() {
	const userName = prompt('Ваше имя?');
	const userSurname = prompt('Ваша фамилия?');
	alert(`Привет, ${userName} ${userSurname}!`);
}
// getUserName();

// === задание №2 ===
// Напишите функцию, переводящую темп. по Цельсию в темп. по Фаренгейту. Спросить у пользователя кол-во градусов по Цельсию и ответить: {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.'С = ('F-32)*5/9; 'F = ('C * 9/5) + 32;
function convertToCelsius() {
	const tempC = prompt('Укажите температуру в градусах Цельсия для конвертации в градусы Фаренгейта');
	if (isFinite(tempC)) {
		const tempF = (tempC * 9 / 5) + 32;
		alert(`${tempC} градусов по Цельсию равны ${tempF} градусам по Фаренгейту`);
	}
}
// convertToCelsius();

// === задание №3 ===
// Перепиcать данную мат. формулу, используя JavaScript. Запрашивать значение X и в ответ выдавать значение Y.
function getResult() {
	const x = +prompt('Введите значение X');
	if (isFinite(x)) {
		const y = (4 * Math.pow(x, 2) + 18 - 23 * x) / (5 / 9 + 18 * Math.pow(x, 3) / 33 * x) + x * 15 / 12;
		alert(`Результат: ${y}`);
	}
}
// getResult();

// === задание №4 ===
// Написать нужное название типа, чтобы alert написал 'true'.
function defineDataType() {
	let a = 12, b = 'num', c = false, d = null, e = undefined,
		f = 123.34, g = '1' + 1, h = 15 / 0, i = -'5', j = 5 == '5';
	let at, bt, ct, dt, et, ft, gt, ht, it, jt;
	at = typeof a === 'number';
	bt = typeof b === 'string';
	ct = typeof c === 'boolean';
	dt = typeof d === 'object';
	et = typeof e === 'undefined';
	ft = typeof f === 'number';
	gt = typeof g === 'string';
	ht = typeof h === 'number';
	it = typeof i === 'number';
	jt = typeof j === 'boolean';
	alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
}
// defineDataType();

// === задание №5 ===
// Запросить Катет A, Катет B, и Гипотенузу C, проверить по т. Пифагора явл. ли треугольник прямоугольным.
function checkTriangle() {
	const a = +prompt('укажите Катет А');
	const b = +prompt('укажите Катет B');
	const c = +prompt('укажите Гипотенузу C');
	const condition = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
	const answer = condition ? 'Это прямоугольный треугольник' : 'Это НЕ прямоугольный треугольник';
	alert(answer);
}
// checkTriangle();

// === задание №6 ===
// Запросить у пользователя число и отвечает "Число {} четное!" или "Число {} нечетное!"
function checkNumberType() {
	const number = +prompt('Введите число');
	if (isFinite(number)) {
		const answer = number % 2 === 0 ? `Число ${number} чётное` : `Число ${number} НЕчётное`;
		alert(answer);
	}
}
// checkNumberType();

// === задание №7 ===
// Вывести в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.
function showNumber() {
	for (let i = 0; i <= 5; i++) {
		if (i % 2 === 1) {
			console.log(i);
		}
	}

	for (let i = 5; i <= 10; i++)
		if (i % 2 === 0) {
			console.log(i);
		}
}
// showNumber();

// === задание №8 ===
// Написать функцию, кот. много раз запрашивает число, пока пользователь не введет 0 — тогда выводится сумма этих чисел.
function getNumbersSum() {
	let sum = 0;
	while (1) {
		const number = prompt('Введите число для суммирования, 0 - показать их сумму');
		if (isFinite(number)) {
			sum += +number;
		} else break;
		if (number === null || number === 0 || number === '') break;
	}
	alert(`Сумма: ${sum}`);
}
// getNumbersSum();

// === задание №9 ===
// Напишите программу, которая говорит пользователю "Введите 10", пока он не введёт 10. Затем говорит "Введите 20", потом 40 и т.д. Если пользователь вводит другое число, нужно спросить его ещё раз, пока он не введёт нужное. Когда пользователь введёт больше 100, напишите "Спасибо!" и остановите программу.
function getValues() {
	let currentNumber = 10;
	let needlyNumber;
	do {
		while (needlyNumber !== currentNumber) {
			needlyNumber = +prompt(`Введите число ${currentNumber}`);
		}
		currentNumber *= 2;
	} while (needlyNumber < 100);
	alert('Спасибо');
}
//getValues();


// === задание №10 ===
// Написать ф-ю, получающую число и выводящую в консоль обратный отсчет, начиная с этого числа.
function countDown(n) {
	for (let i = n; n > 0; n--) {
		console.log(i--);
	}
}
// countDown(3);

// === задание №11 ===
// Написать ф-ю, возвращаеющую результат: указанный процент от указанного числа.
function getPercents(percent, number) {
	const result = percent * number / 100;
	console.log(result);
}
//getPercents(20, 200);

// === задание №12 ===
//Написать ф-ю, которая повторяет слово указанное количество раз
function repeatWord(word, count) {
	let strRepeat = '';
	for (let i = 1; i <= count; i++) {
		strRepeat += `${word}${i}, `;
	}
	return strRepeat;
}
// console.log(repeatWord('Слово', 5));

// === задание №13 ===
// Напишите ф-ю с аргументом а, которая возвращает ф-ю, принимающую b и возвращает a + b.
function createAdder(a) {
	return function addA(b) {
		return a + b;
	}
}
const add5 = createAdder(5);
// console.log(add5(5)) // Должно получиться 10
// console.log(add5(12)) // Должно получиться 17

// === задание №14 ===
// Напишите ф-ю, принимающую номер месяца и возвращающую его название.
function getMonth(n) {
	if (n > 0 && n <= 12) {
		if (n === 1) return 'Январь';
		if (n === 2) return 'Февраль';
		if (n === 3) return 'Март';
		if (n === 4) return 'Апрель';
		if (n === 5) return 'Май';
		if (n === 6) return 'Июнь';
		if (n === 7) return 'Июль';
		if (n === 8) return 'Август';
		if (n === 9) return 'Сентябрь';
		if (n === 10) return 'Октябрь';
		if (n === 11) return 'Ноябрь';
		if (n === 12) return 'Декабрь';
	}
	return 'Неправильно указан номер месяца! Проверьте вводимые данные';
}
// console.log(getMonth(8)); // 'август'

// === задание №15 ===
// Написать стрелочную ф-ю без 'return', принимаюшую имя, фамилию, возраст, приветствие с дефолтными значениями 
const sayHello = (
	name = 'Иван',
	surname = 'Иванов',
	age = 10,
	greeting = 'Привет') =>
	`${greeting}, ${name} ${surname}, тебе ${age} лет`;
//alert(sayHello());
//alert(sayHello('Дима'));
//alert(sayHello('Евгений', 'Петров', 25, 'Здравствуйте, '));

// === задание №16 ===
// Написать ф-ю, принимающую 2 строки и возврающую true, если эти строки равны без учета регистра.
function checkEqualString(str1, str2) {
	return (str1.toLowerCase() === str2.toLowerCase());
}
// console.log(checkEqualString('привет', 'пРивЕТ'));

// === задание №17 ===
// Написать ф-ю, принимающую ссылку на раздел сайта Reddit и возвращающую название раздела.
function showCiteChapterName() {
	const redditUrl = `https://www.reddit.com/r/worldnews/`;
	function getChapterName(url) {
		const index = url.indexOf('/r/');
		return url.slice(index + 3, -1);
	}
	console.log(getChapterName(redditUrl));
}
//showCiteChapterName();

// === задание №18 ===
// Написать ф-ю, принимающую массив чисел и возвращающую перевернутый отрицательный массив.
const reverseAndNegate = (arr) => arr.map(item => item * -1).reverse();
// console.log(reverseAndNegate([-5, 4, 2, 0]));

// === задание №19 ===
// Написать ф-ю, принимающую массив чисел и сначала к каждому чётному числу прибавляет 4, у каждого нечётного отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.
function calculate(arr) {
	return arr
		.map(item => item % 2 == 0 ? item += 4 : item -= 2)
		.filter(item => item % 13 !== 0)
		.reduce((akk, item) => akk += item);
}
// console.log(calculate([15, 2, 3, 5, 6])); // должна вернуть 20.

// === задание №20 ===
// Написать ф-ю, принимающую массив сокращенных записей количества лайков и возвращающую массив чисел 
const likes = ['10k', '2.3k', '5k', '32', '28.4k'];
const transformUpvotes = (arr) =>
	arr.map(item => item.includes('k') ?
		parseFloat(item) * 1000 : parseFloat(item));
// console.log(transformUpvotes(likes)); // [10000, 2300, 5000, 32, 28400].

// === задание №21 ===
// Написать ф-ю, принимающую массив users, и возвращающую объект со средним возрастом и именем самого старшего человека.
const users = [
	{ name: 'Мария', age: 30 }, { name: 'Владимир', age: 40 },
	{ name: 'Андрей', age: 35 }, { name: 'Кирилл', age: 32 },
	{ name: 'Виталий', age: 21 }, { name: 'Анна', age: 46 },
];
function getInfo(arr) {
	const averageAgeValue = arr.reduce((akk, item) =>
		akk += +item.age, 0) / arr.length;
	const userAgeValues = arr.map(item => item.age);
	const maxAge = Math.max(...userAgeValues);
	const user = arr.find(item => item.age === maxAge);
	return { averageAge: averageAgeValue, oldestUserName: user.name };
}
// console.log(getInfo(users));

// === задание №22 ===
// Написать ф-ю, принимающую массив массивов и возвращающую объект вида: {ключ1: 'значение1', ключ2: 'значение2'}.
const array = [['ключ1', 'значение1'], ['ключ2', 'значение2']];
const getObjectFromArray = (arr) => Object.fromEntries(arr);
// console.log(getObjectFromArray(array));

// === задание №23 ===
// Написать ф-ю, принимающую строку и возвращающую кол-во букв в этой строке в виде объекта.
function countChars(str) {
	let obj = {};
	let lowerStr = str.toLowerCase();
	let arr = lowerStr.split('');
	arr.forEach(item => {
		if (obj[item] === undefined) {
			obj[item] = 0;
		}
		obj[item]++;
	});
	return obj;
}
// console.log(countChars('Арарат')); // должен вернуть: { а: 3, р: 2, т: 1 }.

// === задание №24 ===
// Переписать ф-ю, используя замыкания так, чтобы она писала в консоль ТОЛЬКО при первых трёх вызовах.
function sayHi(name, count) {
	return function updateCounter() {
		if (count > 0) {
			console.log(`Hello, ${name}`);
		}
		count--;
	}
}
const sayHelloAndrew = sayHi('Andrew', 3);
// Замыкание используется для сохранения результата после каждого вызова функции. 
// sayHelloAndrew(); // сработает
// sayHelloAndrew(); // сработает
// sayHelloAndrew(); // сработает
// sayHelloAndrew(); // не сработает
// sayHelloAndrew(); // не сработает
// sayHelloAndrew(); // не сработает
// sayHelloAndrew(); // не сработает

// === задание №25 ===
// Написать ф-ю, печатающаю цифру каждую секунду, от 1 до n. используя setTimeout
function showCountNumber(n) {
	let count = 1;
	setTimeout(function start() {
		console.log(count++);
		if (count <= n) {
			setTimeout(start, 1000);
		}
	}, 1000);
}
// showCountNumber(3);

// === задание №26 ===
// Написать ф-ю, печатающаю цифру каждую секунду, от 1 до n. используя setInterval
function showCountNum(n) {
	let count = 1;
	let timeId = setInterval(() => {
		console.log(count++);
		if (count > n) clearInterval(timeId);
	}, 1000);
}
// showCountNum(5);

// === задание №27 ===
// Написать ф-ю, принимающую мин. и макс. значение и возвращающую целое случайное число
const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

// === задание №28 ===
// Сверстать 5 параграфов с текстом. С помощью JS поменять цвет фона каждого параграфа на случайный каждую секунду. 
function changeTextBgColor() {

	function createContent() {
		const section = document.createElement('section');
		const div = document.createElement('div');
		div.classList.add('text-block');
		section.append(div);
		for (let i = 1; i <= 5; i++) {
			const p = document.createElement('p');
			p.textContent = `Параграф №${i}`;
			div.append(p);
		}
		document.querySelector('.section').after(section);
	}
	createContent();

	setTimeout(function changeColorEverySecond() {
		const paragraphs = document.querySelectorAll('.text-block p');
		const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		paragraphs.forEach(item => {
			item.style.backgroundColor = colors[getRandomNumber(0, colors.length - 1)];
		});
		setTimeout(changeColorEverySecond, 1000);
	}, 1000);
}
// changeTextBgColor();

// === задание №29 ===
// Создайте кнопку, которая при клике создает другую кнопку, которая, в свою очередь, создаёт другую кнопку, и т.д.
function createCloneButtons() {
	const cloneBtn = document.createElement('button');
	cloneBtn.textContent = 'Создать новую кнопку';
	document.querySelector('section').append(cloneBtn);
	cloneBtn.addEventListener('click', createNewButton);
	let count = 1;

	function createNewButton() {
		const button = document.createElement('button');
		button.textContent = `Новая кнопка ${count}`;
		++count;
		button.addEventListener('click', () => {
			createNewButton();
		});
		document.querySelector('.section').append(button);
	}
}
// createCloneButtons();

// === задание №30 ===
// Создать accordion. При нажатии на заголовок показать / скрыть блок с текстом под ним.
function createAccordeon() {
	const accordeonTitle = document.querySelector('.accordeon__title');
	const accordeonTextBlock = document.querySelector('.accordeon__text-block');
	accordeonTitle.addEventListener('click', () => {
		accordeonTitle.classList.toggle('active');
		accordeonTextBlock.classList.toggle('active');
	});
}
createAccordeon();

// === задание №31 ===
// Вывести на экран надпись «Ширина экрана {width} пикселей» и обновлять её при изменении ширины экрана.
function showCurrentScreenWidth() {
	const section = document.createElement('section');
	section.classList.add('section');
	section.innerHTML = `<h3 class="screen-size__title">
			Ширина экрана: <span class="screen-size-info">
			${innerWidth}</span> пикселей</h3>`;
	document.querySelector('.section').after(section);
	function updateWidthLabel() {
		section.innerHTML = `<h3 class="screen-size__title">
			Ширина экрана: <span class="screen-size-info">
			${innerWidth}</span> пикселей</h3>`;
	}
	window.addEventListener('resize', updateWidthLabel);
}
showCurrentScreenWidth();

// === задание №32 ===
// Написать ф-ю вызывающую колбэк с задержкой
function serverMock(callback, latency) {
	setTimeout(callback, latency);
}

// ф-я-сallback возвращает массив, содержащий объекты случайно сгенерированных товаров со случайной длиной от 5 до 10
function getRandomProductsList() {
	// массив наименований
	const items = ['Часы', 'Наушники', 'Рюкзак', 'Смарт-часы',
		'Смартфон', 'Пауэр Банк', 'Зонт', 'Планшет', 'Кепка', 'Очки'];
	// Каждый товар содержит поля price (случайное число от 300 до 10000) и name (случайное наименование из массива).
	const products = items.map(() => ({
		name: getRandomProduct(items),
		price: getRandomPrice(),
	}));
	// получаем массив со случайной длиной от 5 до 10 элементов
	products.splice(0, getRandomNumber(0, 5));
	console.dir(products); // выводим в консоль

	// ф-и генерирующие случайный продукт и случайную цену на него
	function getRandomProduct(arr) {
		return arr[getRandomNumber(0, arr.length - 1)];
	}

	function getRandomPrice() {
		return `${getRandomNumber(300, 10000)} рублей`;
	}

	return products; // возвращаем массив
}

// serverMock(getRandomProductsList, 3000);

// === задание №33 ===
// Написать ф-ю multiply(a, b), которая умножает a на b с помощью сложения и рекурсии.
function multiply(a, b) {
	if (a === 0 || b === 0) return 0;
	if (b < 0) return -1 * multiply(a, -1 * b);
	if (b === 1) return a;
	return a + multiply(a, b - 1);
}
// console.log(multiply(30, 1));

// === задание №34 ===
// Написать ф-ю, которая возводит a в степень b с помощью умножения и рекурсии.
function pow(a, b) {
	if (b === 1) return a;
	if (b < 0) return 1 / pow(a, -1 * b);
	if (a === 0) return 0;
	if (b === 0) return 1;
	return a * pow(a, b - 1);
}
// console.log(pow(5, 5));

// === задание №35 ===
// Написать ф-ю, которая возвращает n-ое число Фибонначи. Числа Фибоначчи — последовательность чисел, в которой первые два числа равны 1 и 1, а каждое последующее число равно сумме двух предыдущих чисел.

function getFibNumber(n) {
	if (n <= 2) return 1;
	return getFibNumber(n - 2) + getFibNumber(n - 1);
}
// console.log(getFibNumber(10));

// === задание №36 ===
// Факториал числа n (n!) — это произведение натуральных чисел от 1 до n. Напишите функцию fac(n).
function factorial(n) {
	if (n <= 1) return n;
	return n * factorial(n - 1);
}
// console.log(factorial(3), factorial(1), factorial(5), factorial(10))

// === задание №37 ===
// Написать ф-ю, которая возвращает true, если str — валидный JSON
let jsonString = `{
	"name": "Иван",
	"age": 32,
	"is_Admin": false,
	"address": {
		"city": "Moskow",
		"street": "Рижская",
		"house": 3
	},
	"numbers_array": [3, 4, 6, 10],
	"auto": null
}`;

function checkValidJson(str) {
	if (!str || typeof str !== 'string') {
		return false;
	}
	try {
		JSON.parse(str);
		return true;
	} catch (error) {
		return false;
	}
}
// console.log(checkValidJson(jsonString));

// === задание №38 ===
// Написать ф-ю, создающую объект с методами: увеличивающий n на 1; печатающий n в консоль; устанавливающий новый n.
function CreateCounter(n) {
	this.number = n;
	this.count = function () {
		return this.number++;
	}
	this.print = function () {
		console.log(this.number);
	}
	this.set = function (n) {
		return this.number = n;
	}
}
/*
const object = new CreateCounter(5);
object.count();
object.print();
object.set(3);
object.count();
object.print();
*/

// === задание №39 ===
// Написать ф-ю, принимающую % и возвращающую true с вероятностью {chance}%, а false с вероятностью {100-chance}%.
function checkLuck(chance) {
	if (!(chance > 0 && chance < 100)) return;
	const probability = chance / 100;
	return Math.random() <= probability;
}
// Т.е., если вызвать checkLuck(25) 1000 раз, то примерно 250 раз она должна вернуть true.
const tries = {
	[true]: 0,
	[false]: 0,
}
/*
for (let i = 0; i < 10000000; i++) {
	tries[checkLuck(25)]++;
}
console.log(tries);
*/

// === задание №40 ===
// Переписать serverMock(callback, latency), используя Promise. С вероятностью 30% Promise должен упасть с ошибкой.
// Напишите функцию serverMock(latency), которая принимает необходимую задержку и возвращает Promise с массивом products, содержащим объекты товаров. Каждый товар содержит поля price (случайное число от 300 до 10000) и name (случайное наименование из массива наименований). Через {latency} миллисекунд функция вызывает resolve() со случайно сгенерированным массивом товаров длиной от 5 до 10. Выведите в консоль массив товаров и ошибку, если она произошла.

// const promise = new Promise((resolve, reject) => {
// 	const condition = false || true;
// 	if (!condition) {
// 		reject(condition);
// 	} else {
// 		resolve(condition);
// 	}
// });

// promise.then((result) => {
// 	return result;
// }).then((data) => {
// 	//console.log(data);
// }).catch((error) => {
// 	//console.log(error);
// })

// === задание №41 ===
// Написать ф-ю, подбросываюшая монетку, кот. летит от 50 до 200 миллисекунд. И с шансом 50% выпадает орёл или решка. 
function flipCoin() {
	// случайное число от мин. до макс.
	const randomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
	// проверяет удачу с указанным процентом успешного выполнения
	function checkChance(percent) {
		const chance = percent / 100;
		return chance > Math.random();
	}
	// ф-я возвращает promise со строкой 'heads' или 'tails'
	const coinToss = new Promise((res, rej) => {
		setTimeout(() => {
			if (checkChance(50)) {
				res('heads');
			} else {
				res('tails');
			}
		}, randomNumber(50, 200));
	});
	return coinToss;
}
// Создаем массив промисов длиной 1000
// map возвращает для каждого элемента массив результатов выполнения ф-и 
// const coinTosses = Array.from({ length: 1000 }).map(() => flipCoin());
// // Подбросить 1000 монет одновременно и посчитать, сколько раз выпала решка, а сколько — орёл. Используйте Promise.all
// Promise.all(coinTosses).then(results => {
// 	const counts = { tails: 0, heads: 0 }; // создаем объект со свойствами орел и решка для подсчета результата
// 	results.forEach((result) => counts[result]++); // перезаписывает на каждой итерации значения свойст объекта
// 	console.log(counts);
// });

// === задание №42 ===
// Напишите функцию delay(ms), которую можно использовать в виде await delay(100) в асинхронных функциях, чтобы остановить выполнение на 1000 мс. Посчитайте от 1 до 10 секунд в консоль, используя эту функцию и обычный цикл for.
async function startСountdown() {
	for (let i = 0; i <= 10; i++) {
		await delay(1000);
		console.log(i);
	}

	function delay(ms) {
		return new Promise((res) => setTimeout(res, ms));
	}
}
// startСountdown();