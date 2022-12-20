"use strict";

// ЗАДАНИЯ!!!


for (let i = 5; i < 11; i++){
    console.log (i);
}
for (let i = 20; i >= 10; --i){
    if (i === 12) break;
    console.log (i);
}
for (let i = 2; i <= 10; i++){   
    if(i%3 === 0) continue;
 
    console.log (i);
}
 
 let num = 1;
  while ( num <= 10) {
    num++;      
    if(num === 3) continue;
    if(num=== 5) continue;
    if(num === 7) continue;
    if(num === 9) continue;
    console.log (num);
    num++;
 }

 
 for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
let num = 2;
  while ( num < 16) {
    num++;      
    if(num%2 === 0) continue;
    console.log (num);
    }


    {
      let arrayOfNumbers = [];
    
        for (let i = 5; i < 11; i++) {
            arrayOfNumbers[i - 4] = i;
        }
    
        console.log(arrayOfNumbers);
        return arrayOfNumbers;
    }

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;


 




    function sayHello(name)  {
        return `Привет, ${name}!`;
    }
    
    sayHello('Alex');
    console.log(sayHello);
    
    function returnNeighboringNumbers(num) {
        return [num-1, num, num + 1];

    }
    function getMathResult(num,times) {
        if(typeof (times) !== 'number'||times <= 0 ){
            return num;
        }
    let str = '';
    for (let i = 1; i <= times; i++){
        if (i === times ){
            str += `${i*num}`;
        }else{
            str += `${i*num}---`;
        }
    }
    return str;

    }
    getMathResult(10,5);
    console.log(getMathResult);



//     Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

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
}
console.log(secondTask);