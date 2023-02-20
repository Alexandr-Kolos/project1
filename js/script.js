"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Do you have 18 years old?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your last name?", "");
// answers[2] = prompt("How old are you?", "");

// document.write(answers);
// console.log(typeof(answers));


const numberOfFilms = +prompt("How many films do you watched already?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);