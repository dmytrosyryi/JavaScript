'use strict';


// <!-- 2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] -->



function secondTask(){
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

    

