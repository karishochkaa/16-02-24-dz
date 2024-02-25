//Task 1 Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
//який виводить на екран список фільмів у вибраному жанрі.

const movies = {
  action: ['Die Hard', 'John Wick', 'The Matrix'],
  comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
  drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
  horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

 // Метод, який виводить список фільмів в заданому жанрі
  listMoviesByGenre: function (genre) {
    const moviesByGerne = this[genre];
    if (moviesByGerne){
        console.log(`Список фыльмів у ${genre} жанрі:`);
        moviesByGerne.forEach(function(movie){
            console.log(movie);
        });
    } else {
        console.log(`Жанр ${genre} не знайдено`);
    }
  },
};

// Вивести список комедій

movies.listMoviesByGenre('comedy');

// Вивести список фільмів в жанрі "sci-fi"

movies.listMoviesByGenre('sci-fi');