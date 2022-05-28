import Poster from "../components/base/Poster.js"
export const getMovies = (url, list) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let movies = []
            data?.forEach((movie) => {movies.push(new Movie(movie.mid ,movie.title, movie.image_url))})
            list(movies)
        })
} 


export class Movie {
    constructor(_id, _title, _image_url) {
        this.id = _id
        this.poster = {}
        this.title = _title
        this.image_url = _image_url
    }

    
    Create() {
      this.poster = Poster.Poster(null, 'poster', this.image_url, `/movie/${this.id}` + this.id)
      return this.poster.render
    }
}