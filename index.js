// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// // console.log(clients.slice(1, -1)); // ["Ajax", "Poly"]    -  хіба не така відповідь має бути - ["Ajax", "Kiwi"]
// console.log(clients.slice(1, -3)); // ["Ajax", "Poly"]    -  хіба не така відповідь має бути - ["Ajax", "Kiwi"]

// Присвоєння по значенню - прості типи даних (string, number, boolean, null, undefined)
// Присвоєння по посиланню - масиви та обєкти

// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = numbers;

// console.log(numbers === numbers2);

// console.log([1, 2, 3] === [1, 2, 3]);

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// console.log("a");
// alert("b");
// console.log("c");

// # Модуль 2. Занятие 3. Массивы

// ## Example 1 - Базовые операции с массивом - done

// 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Выведите в консоль первый элемент массива.
// 4. Выведите в консоль последний элемент массива. Код должен работать для массива
//    произвольной длины.
// 5. Удалите первый элемент и выведите его в консоль.
// 6. Вставьте «Country» и «Reggy» в начало массива.

// ```js
// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// // genres.unshift("Country", "Reggy");
// genres.splice(0, 0, "Country", "Reggy");
// console.log(genres);
// ```

// ## Example 2 - Массивы и строки - done

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// которых хранятся в переменной `values` в виде строки. Значения гарантированно
// разделены пробелом.

// ```js
// const values = "8 11";
// const valuesArray = values.split(" ");
// // const result = Number(valuesArray[0]) + Number(valuesArray[1]);
// const result = +valuesArray[0] + +valuesArray[1];

// console.log(result);
// console.log(valuesArray);
// ```

// ## Example 3 - Перебор массива - done

// Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// Нумерация элементов должна начинаться с `1`.

// ```js
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i += 1) {
//   const index = i + 1;
//   const element = fruits[i];
//   console.log(`${index}:${element}`);
// }

// for (let fruit of fruits) {
//   const index = fruits.indexOf(fruit) + 1;
//   console.log(`${index}:${fruit}`);
// }
// ```

// ## Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// соответствие. Количество имен и телефонов гарантированно одинаковое.

// ```js
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// console.log("namesArray", namesArray);
// console.log("phonesArray", phonesArray);

// for (let name of namesArray) {
//   // 1) name = 'Jacob' => namesArray.indexOf(name) => 0 => index = 0 => phonesArray[0] => 89001234567
//   // 2) name = 'William' => namesArray.indexOf(name) => 1 => index = 1 => phonesArray[1] => 89001112233
//   // 3) name = 'Solomon' => namesArray.indexOf(name) => 2 => index = 2 => phonesArray[2] => 890055566377
//   // 4) name = 'Artemis' => namesArray.indexOf(name) => 3 => index = 3 => phonesArray[3] => 890055566300
//   // порядковий номер імені та телефону
//   const index = namesArray.indexOf(name);
//   console.log(`${name} - ${phonesArray[index]}`);
// }

// // 1) Зробити з рядочка масив - split
// // 2) Отримати доступ до імені - змінна в for of
// // 3) Знайти порядковий номер імені в масиві - indexOf
// // 4) Співставити порядковий номер імені з телефоном - достукатися до телефону по індексу
// // 5) Вивести результат в консольку - consolr.log()

// ```

// ## Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.

// ```js
// const string = 'Welcome to the future';
// ```

// ## Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.

// ```js
// const string = 'Welcome to the future';
// ```

// ```js
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// ```

// ## Example 7 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// любого массива чисел. Используй цикл для решения задачи.

// ```js
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
// ```


/////// lesson 4 module 2

// # Модуль 2. Занятие 4. Функции

// ## Example 1 - Индекс массы тела

// Напиши функцию `calcBMI(weight, height)` которая рассчитывает и возвращает
// индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на
// квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть
// заданы в виде `24.7` или `24,7`, то есть в качестве разделителя дробной части
// может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// ```js
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
// ```

// ## Example 2 - Меньшее из чисел

// Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

// ```js
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// ```

// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.

// ```js
// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));
// ```

// ## Example 4 - Логирование элементов

// Напиши функцию `logItems(items)`, которая получает массив и использует цикл
// `for`, который для каждого элемента массива будет выводить в консоль сообщение в
// формате `<номер элемента> - <значение элемента>`. Нумерация элементов должна
// начинаться с `1`.

// Например для первого элемента массива `['Mango', 'Poly', 'Ajax']` с индексом `0`
// будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.

// ```js
// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

// ## Example 5 - Логирование контактов

// Напиши функцию `printContactsInfo(names, phones)` которая выводит в консоль имя
// и телефонный номер пользователя. В параметры `names` и `phones` будут переданы
// строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и
// телефонов в строках указывают на соответствие. Количество имен и телефонов
// гарантированно одинаковое.

// ```js
// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
// ```

// ## Example 6 - Поиск наибольшего элемента

// Напиши функцию `findLargestNumber(numbers)`которая ищет самое большое число в
// массиве.

// ```js
// function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.

// ```js
// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

// ## Example 8 - Форматирование времени

// Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
// (количество минут) в строку в формате часов и минут `HH:MM`.

// ```js
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

// ## Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов `courses`:

// - `addCourse(name)` - добавляет курс в конец коллекции
// - `removeCourse(name)` - удаляет курс из коллекции
// - `updateCourse(oldName, newName)` - изменяет имя на новое

// ```js
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```