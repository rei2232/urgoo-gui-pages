import {getMovies} from './modules/Movie.js'
const apiUrl = 'https://urgooapi.azurewebsites.net/api'
let root_div = document.getElementById('root')

// Api-аас татсан өгөгдөлөө ашиглан Poster компонентийг ашиглан Poster зургуудыг үүсгэх
getMovies(apiUrl + '/ListMovie', (movies) => {
    movies.forEach((movie) => {
        root_div.appendChild(movie.Create())
    })
})

