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


