'use strict';


// <!-- // 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку -->




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = '';
    arr.lenght === 0 ?  result = 'Нет доступных валют' : result = 'Доступные валюты:\n';
    arr.forEach(function(i,item){
        if(i !== missingCurr){
            result += `${i}\n`; 
        }
    });
    console.log(result);
    return result;
}
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');

// CДЕЛАЛ ПО ЭТОМУ ПРИМЕРУ

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr){
    let str = '';
    arr.lenght === 0 ? str = `Семья пуста`: str = `Семья состоит из: `;
    arr.forEach(names => {
        str += `${names }` 
    });
    console.log(str);
    return str;  
}
showFamily(family);



// <!-- 2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] -->

   function secondTask(){
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];
    for (let i = 0; i < data.length; i++){
        const item = data [i];
        if (typeof(item) === "number"){
            result [i] = item *2;
        }
     else if (typeof(item) === "string"){
        result [i] =  `${item} - done!`;
        }
    } 
    console.log(result);
    return result;  
}
secondTask();

   //   V_2
function secondTask(data = [5, 10, 'Shopping', 20, 'Homework']){
let result = [];
data.forEach(function( i , item)  {
    if (typeof(i) === "number"){
        result[i, item] = i *2;
    }
 else if (typeof(i) === "string"){
    result [i,item] =  `${i} - done!`;
    } 
});

console.log(result);
return result;
}
secondTask();







// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


function getTimeFromMinutes(time) {
    let result = '';
    if (typeof(time)!== 'number' || time < 0 || !Number.isInteger(time)){
        result = "Ошибка, проверьте данные";
    }
    // ХЗ ЧТО ДЕЛАТЬ ДАЛЬШЕ
console.log (result);
return result;
}
getTimeFromMinutes(2.3);






// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)





// CНАЧАЛО СДЕЛАЛ ТАК НО РАБОТАЛО НЕ ПРАВИЛЬНО

function findMaxNumber(a,b,c,d) {
    let result = '';
    if(typeof (a,b,c,d) !== 'number' ){
        result = '0';
    }else{
        result = Math.max(a,b,c,d);
    }
    console.log(result);
    return result;

}
findMaxNumber('1','2','6',4);


function findMaxNumber(a,b,c,d) {
    let result = '';
    if(typeof (a !== 'number' ||
               b !== 'number' ||
               c !== 'number' ||
               d !== 'number' )){
        result = '0';
    }else{
        result = Math.max(a,b,c,d);
    }
    console.log(result);
    return result;

}
findMaxNumber('1','2','6',4);
