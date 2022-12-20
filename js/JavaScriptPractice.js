"use strict";



// // ПРАКТИКА!!!




let numberOfFilms;

function start(){
    numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?",'');
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?",'');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
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

}
rememberMyFilms();


function detectPeronalLevel(){
    if (personalMovieDB.count < 10 ){
        console.log('мало');
    }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
        console.log('достаточно');
    }else if (personalMovieDB.count >= 30){
        console.log('много');
    }else {
        console.log('ошибка');
    }
}
detectPeronalLevel();

function C(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
detectPeronalLevel(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();