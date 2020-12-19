let numberOfFilms = +prompt("how many movies did you watch?"); //1

let personalMovieDb = {
    count : +`${numberOfFilms}`,
    movies : {},
    actors : {},
    genres: [],
    privat : false
}; //2
console.log(personalMovieDb.count);


let question_first = prompt("Your last movie is");
let question_second = prompt("How many stars?");
let answ1 = prompt("Your last movie is");
let answ2 = prompt("How many stars?");



personalMovieDb.movies [question_first] = question_second;
personalMovieDb.movies [answ1] = answ2;

console.log(personalMovieDb);
