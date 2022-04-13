import {getMovies} from './modules/Movie.js'
import ReButton from './modules/ReButton.js'
const url = './data/movie.json'
getMovies(url, (movies) => {
    movies.forEach((movie) => {
        document.getElementById('root').innerHTML += movie.Create()
    })
})

let button = new ReButton({name: "Click it!!!"})
document.getElementById('root').insertAdjacentHTML("afterbegin", button.render())


 