"use strict"

const numberOfFilms = +prompt(`Сколько фильмов ты посмотрел?`, ``);

console.log(numberOfFilms);

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

// for(let i = 0; i < 2; i++) {
//    const a = prompt(`Один из последних просмотренных фильмов?`),
//          b = prompt(`На сколько оцените его?`);

//    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log(`done`);
//    }
//    else{
//       console.log(`try again`);
//       i--;
//    }
// }

if(personalMovieDB.count < 10) {
   console.log(`Просмотрено довольно мало фильмов`);
}
else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log(`Норм`);
}
else if(personalMovieDB.count >= 30) {
   console.log(`Filmoman`);
}
else{
   console.error(`Error`);
}

console.log(personalMovieDB);

