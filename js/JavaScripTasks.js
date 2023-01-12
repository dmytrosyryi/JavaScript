'use strict';






    





// <!-- 2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] -->





function secondTask(data = [5, 10, 'Shopping', 20, 'Homework']){
let result = [];
data.forEach( i  => {
    
    if (typeof(i) === "number"){
        result[i] = i *2;
    }
 else if (typeof(i) === "string"){
    result [i] =  `${i} - done!`;
    } 
});

console.log(result);
return result;
}
secondTask(['kurwa', 16]);





