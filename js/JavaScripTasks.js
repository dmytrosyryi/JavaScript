'use strict';


// <!-- 2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] -->


// Если есть какой-то исходный массив либо другие данные, (покажу на текущем примере) то нужно делать его как дэфолтный. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
function secondTask(data = [5, 10, 'Shopping', 20, 'Homework']) {
  // Дальше идет какая-то логика и т.д.
  // ВСЕГДА (!) создавай переменную которая будет возращаться как результат функции
  // Она будет всегда типа, который мы возвращаем
  let result = []

  // Почему тут было let i = 1 ??? С нуля же начинаем
  for (let i = 0; i < data.length; i++) {
    const item = data[i]

    // Учти, что везде используется уже item
    if (typeof(item) === "number") {
      result[i] = item * 2;
      
    // Тут у тебя было: else if (typeof(data) === "string"){
    // Всмысле ты проверяешь data? Ты же изначально сделал его массивом :-D
    } else if (typeof(item) === "string") {
      result[i] = ${item} - done!
    }
  }
 
  // Очень часто "не работает" у тебя тут. Ты возвращаешь значение, а не выводишь в консоль
  // 
  console.log(result);
  return result;
}

// Тут вызываем аля с исходными
secondTask()

// дальше чисто для себя проверить
secondTask([1, 2, 3, 'CHO-KAK'])

// Кстати  if (typeof(item) === "number") { можно заменить на ->
// if (typeof item === "number") - Так красивеее


// Сделай secondTask___v2, с той же задачей, но используя .map (Если проходил)
// Если нет, то forEach


function secondTask___ШЛВ(){
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 1; i < data.length; i++){
        if (typeof(data) === "number"){
            data [i] = data [i]*2;
        }
     else if (typeof(data) === "string"){
        return  `${data} - done!`;
        }
    } 
    console.log(data);
    return data;  
}
secondTask();
console.log(secondTask());



// <!-- 3.Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ] -->

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for(let i = 1; i <= data.lenght; i++){

    }

}


// <!-- 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка' -->

function calculateVolumeAndArea(length){
    if (typeof (length) !== "number" || length < 0 || !Number.isInteger(length)){
        return 'При вычислении произошла ошибка';}
    let volume = 0,
        area = 0;
    volume = length * length * length;
    area = 6 * (length * length);
    return `Объем куба:${volume} , площадь всей поверхности: ${area}`; 
  
}
calculateVolumeAndArea(5);

    

