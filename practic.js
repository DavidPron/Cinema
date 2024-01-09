"use sctrict";

let numberOfFilms = +prompt("Сколько фльмов уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(),
      b = prompt(),
      c = prompt(),
      d = prompt();

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);