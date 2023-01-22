"use strict";

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// V_2
const newStudents = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Konstatyn",
  "Sam",
];

function sortStudentsByGroups(arr) {
  let studentSort = [];
  studentSort = arr.sort();
  let result = [];
  for (let i = 0; i < studentSort.length; i++) {
    result.push(studentSort.splice(0, 3));
  }
  studentSort.length > 0
    ? result.push(`Оставшиеся студенты: ${studentSort}`)
    : result.push(`Оставшиеся студенты: -  `);
  return result;
}
console.log(sortStudentsByGroups(newStudents));

// V_1
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Konstatyn",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const teamA = [],
    teamB = [],
    teamC = [],
    str = [];
  arr.forEach((item, i) => {
    if (i < 3) {
      teamA.push(arr[i]);
    } else if (i < 6) {
      teamB.push(arr[i]);
    } else if (i < 9) {
      teamC.push(arr[i]);
    } else {
      str.push(arr[i]);
    }
  });
  return [
    teamA,
    teamB,
    teamC,
    "Оставшиеся студенты" + `${str.length > 0 ? ` - ${str}` : " -"}`,
  ];
}
console.log(sortStudentsByGroups(students));
