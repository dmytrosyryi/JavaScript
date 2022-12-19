"use strict";



// // ПРАКТИКА!!!




const numberOfFilms = prompt ("Сколько фильмов вы уже просмотрели?",'');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gender: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt ("Один из последних просмотреных фильмов?",''),
          b = prompt ("На сколько оцените его?",'');
    
    if (a != null && b != null && a != '' && b != '' && a.length <50){
    personalMovieDB. movies [a] = b;
    console.log ('done');}
    else{
        console.log ("error");
        i--;
    }
}
if (personalMovieDB.count < 10 ){
    console.log('мало');
}else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
    console.log('достаточно');
}else if (personalMovieDB.count >= 30){
    console.log('много');
}else {
    console.log('ошибка');
}


let num = 0;
while (num < 2){
    num++;
    const a = prompt ("Один из последних просмотреных фильмов?",''),
          b = prompt ("На сколько оцените его?",'');
    if (a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB. movies [a] = b;
            console.log ('done');}
    else{
            console.log ("error");
            i--;
            }

}