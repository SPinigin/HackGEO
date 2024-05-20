let string1 = "Hello";
let string2 = "World";

let comb = string1 + " " + string2;

function click1() {
    alert(comb);
}

let favoriteMovies = ["The Shawshank Redemption", "Inception", "The Dark Knight", "Forrest Gump"];
console.log("Исходный массив:", favoriteMovies);
favoriteMovies.unshift("Pulp Fiction");
console.log("Массив после добавления фильма в начало:", favoriteMovies);
favoriteMovies.pop();
console.log("Массив после удаления последнего фильма:", favoriteMovies);
favoriteMovies.push("The Matrix");
console.log("Массив после добавления фильма в конец:", favoriteMovies);
favoriteMovies.shift();
console.log("Массив после удаления первого фильма:", favoriteMovies);
