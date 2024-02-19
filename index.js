// Задание 1. Выведите все элементы массива с индексами, которые делятся на 3. Количество элементов массива равно n.

const doFilter = [10, 30, 12, 3, 7, 6, 9];

const results = doFilter.filter((doFilter) => doFilter % 3 === 0)
console.log(results);

//Задание 2. Выведите все четные элементы массива. Количество элементов массива равно n.

const num = [10, 30, 4, 1, 0, 50, 82, 100];

const isEven = num.filter((num) => num % 2 === 0)
console.log(isEven);
console.log(isEven.length);

//Задание 3. Дан массив, состоящий из слов. Замените первую букву каждого слова на заглавную. 
//Вывести результат в виде строки.
//Например, a=['В','лесу','родилась','елочка'] -> s="В Лесу Родилась Елочка"

const a = ['В','лесу','родилась','елочка']

const doUpper = (array) => {
    const mass = []
    for (let i = 0; i < array.length; i += 1) {
        const oldWord = array[i];
        const newWord = oldWord[0].toUpperCase() + oldWord.slice(1);
        mass.push(newWord);
    }
    return mass.join(' ');
}

console.log(doUpper(a));

//Задание 4. Дана строка. Поменяйте местами первую и последнюю букву каждого слова. Используйте методы split и join.
// Например, s="В лесу родилась елочка" -> s1= “В уесл ьодиласр алочке”

const b = 'В лесу родилась ёлочка';

const doRevers = (b) => {
    const words = b.split(' ');
    const mas = words.map(word => {
        if (word.length > 1) {
            return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
        }
        return word;
    });
    return mas.join(' ');
};

console.log(doRevers(b));

//Задание 5. Сформируйте массив, состоящий из вещественных чисел. Выведите положительные элементы массива на экран.
//Определите количество положительных элементов массива. Найти произведение отрицательных элементов массива.

const nums = [3, 2, 10, -1, 0, -20, -100, 99, 34, -44, -1];

for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) {
        console.log(nums[i]);
    } 
};

const doFilters = nums.filter((num) => num > 0)
console.log(doFilters.length);

let result = 1;
for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < 0) {
        result *= nums[i]
    }
}

console.log(result);

//Задание 6. В массиве целых чисел определить число инверсий. Инверсией называется пара элементов, в которой большее число расположено слева от меньшего. 
//Например, 24 35 29 44 8 22 4 содержит 3 инверсии.

function inversionArray(array) {
  if (array.length <= 1) {
    return array;
  }

  const result = []

  for (let index = 0; index <= array.length; index += 2) {
    if (!array[index + 1]) {
      result.push(array[index])
      break;
    }

    if (array[index] > array[index + 1]) {
      result.push(array[index], array[index + 1])
    } else {
      result.push(array[index + 1], array[index])
    }

  }

  return result;
}

const myArray = [3, 23, 100, 1, 30, 46, 654]

console.log(inversionArray(myArray));

//Задание 7. Разработайте программу, в которой существуют два массива с ростом игроков двух команд (в см). Определить,
// имеются ли в данных командах игроки одинакового роста.

let team1 = [180, 185, 175, 190, 195];
let team2 = [170, 175, 180, 185, 190];

console.log("Рост игроков первой команды:");
for (let i = 0; i < team1.length; i++) {
    console.log(team1[i]);
};

console.log("Рост игроков второй команды");
for (let i = 0; i < team2.length; i++) {
    console.log(team2[i]);
};


//Задание 8. Разработайте программу, которая определяет, 
//имеется ли в заданном целочисленном массиве arr(10) хотя бы одна пара совпадающих по значению элементов.

const findCouple = (array1) => {
    let result = false;
    for (let i = 0; i < array1.length; i += 1) {
        const doFilter1 = array1.filter((element) => element == array1[i])
        if (doFilter1.length >= 2) {
            result = true;
            break
        } 
    }
    return result;
};

const mass = [0, 10, 100, 20, 55, 33, 140, 1000, 10]
console.log(findCouple(mass));

//Задание 9. Создать двумерный массив размерностью 3 строки на 3 столбца. Посчитать сумму элементов двумерного массива.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let sum = 0

for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
        sum += arr[i][j]    
    }
    
};

console.log(`${'Cумма элементов массива'}: ${sum}`);

//Задание 10. Создать двумерный массив размерностью 4x3. Посчитать количество цифр, значение которых меньше 10.

const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

let sum2 = 0;

for (let i = 0; i < arr2.length; i += 1) {
    for (let j = 0; j < arr2[i].length; j += 1) {
        if (arr2[i][j] < 10) {
            sum2++;
        }
    }
    
};

console.log(sum2);

//Задание 11. Создать двумерный массив размерностью 4x4. Выведите индексы максимального элемента массива.


const arr3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let sum3 = 0;

for (let i = 0; i < arr3.length; i += 1) {
    for (let j = 0; j < arr3[i].length; j += 1) {
        const letMax = Math.max(...arr3);
        const index = arr3.indexOf(letMax);
    }    
};



