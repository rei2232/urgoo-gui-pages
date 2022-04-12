import {getMovies} from './modules/Movie.js'

const url = './data/movie.json'
console.log(url)
getMovies(url, (movies) => {
    movies.forEach((movie) => {
        document.getElementById('ongoing-poster-wrapper').innerHTML += movie.Create()
    })
})

 