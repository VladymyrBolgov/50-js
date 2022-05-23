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
