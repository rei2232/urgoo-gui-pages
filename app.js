import {getMovies} from './modules/Movie.js'
import Thor from './Thor'
import ReButton from './components/base/ReButton.js'
import Poster from "./components/base/Poster.js";
const url = './data/movie.json'
// JSON өгөгдлөөс Poster компонентийг ашиглан Poster зургуудыг үүсгэх
getMovies(url, (movies) => {
    movies.forEach((movie) => {
        document.getElementById('root').appendChild(movie.Create())
    })
})

// ReButton компонентийг үүсгэхдээ (params): аттрибут, элементийн доторх текст, класс нэр гэж үүсгэнэ.
//const btn = ReButton.ReButton({name: 'button primary'},'Click me!!!','btn-primary')
// ReButton ий render-ийг root элементрүү хийж хуудас рүү рендэр хийнэ.
// document.getElementById('root').appendChild(btn.render)
//ReButton onClick буюу товч дээр дарахаар ажиллах функцийг
// EventBubble гэсэн функц руу тухайн товчны (params): классын нэр, ямар эвэнт болох, ажиллах функц зэргийг оруулна.
// Thor.EventBubble(document,'btn-primary','click', btn.onClick)
//
//
// Poster компонент үүсгэж рендерлэнэ.
// const poster = Poster.Poster(null, 'poster', './assets/images/spider-poster.jpg', '#')
// document.getElementById('root').appendChild(poster.render)

