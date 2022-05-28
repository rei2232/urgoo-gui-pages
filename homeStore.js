import {getMovies} from './modules/Movie.js'
const apiUrl = 'http://127.0.0.1:3001/api/'
let root_div = document.getElementById('root')

// Api-аас татсан өгөгдөлөө ашиглан Poster компонентийг ашиглан Poster зургуудыг үүсгэх
getMovies(apiUrl + 'movie/list', (movies) => {
    movies.forEach((movie) => {
        root_div.appendChild(movie.Create())
    })
})

