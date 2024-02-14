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