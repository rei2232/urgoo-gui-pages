import {getMovies} from './modules/Movie.js'
import Thor from './Thor'

const url = './data/movie.json'
getMovies(url, (movies) => {
    movies.forEach((movie) => {
        document.getElementById('root').innerHTML += movie.Create()
    })
})
const prop = 'passed'
let CustomComponent = Thor.Component('aaaa',null,null)
console.log(CustomComponent.props)

