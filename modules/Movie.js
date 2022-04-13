export const getMovies = (url, list) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let movies = []
            data.movies.forEach((movie) => {movies.push(new Movie(movie.title, movie.image_url))})
            list(movies)
        })
} 


export class Movie {
    constructor(_title, _image_url) {
        this.title = _title
        this.image_url = _image_url
    }

    
    Create() {
        return `
        <style>
            .poster {
                width: 200px;
            }
        </style>
        <a href="#" _target="_self" style="text-decoration: none;">
         <img class="poster" src="${this.image_url}" alt="${this.title} poster"> 
        </a>
        `
    }
}