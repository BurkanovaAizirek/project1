//1)--В массив const brandsArr = ['google', 'apple', 'microsoft'] добавьте строки 'xiaomi', 'huawei', 'oneplus'
// Для сохранения новых элементов используйте как минимум два разных способа, экспериментируйте и постарайтесь понять разницу между разными способами. 
//Выведите результаты всех найденных способов в консоль.

const brandsArr = ['google','apple','microsoft'];
brandsArr.push('xiaomi', 'huawei', 'oneplus');//добавили элементы в массив
console.log(brandsArr); 

const brandArr = ['google','apple','microsoft'];
brandArr.splice(3,5,'xiaomi', 'huawei', 'oneplus');//добавили элементы по индексам
console.log(brandArr);
// 2)-- Создайте массив имен и с добавьте в конец массива новое имя использую prompt
// после таким же образом добавляем второе имя, только уже в начало массива

var arrNames = ["Aizirek","John","Alina"];
arrNames.push = prompt("введите имя");
console.log(arrNames);
arrNames.unshift("Bereke");
console.log(arrNames);

//3)-- У вас есть массив colors, содержащий цвета
// Используйте метод splice, чтобы удалить второй элемент массива и затем добавить новый элемент "green". 
//Выведите обновленный массив в консоль.

const colors = ["blue","gray","black","aqua"];
colors.splice(2,1,"green");
console.log(colors);

// У вас есть массив numbers, содержащий числа от 1 до 10.
// Используйте метод slice, чтобы получить подмассив, содержащий элементы с пятого по восьмой включительно
let numbers =[1,2,3,4,5,6,7,8,9,10];
const array = numbers.slice(4,8);
console.log(array);