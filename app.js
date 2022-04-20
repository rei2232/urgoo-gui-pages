import {getMovies} from './modules/Movie.js'
const url = './data/movie.json'
let routes = {}
let templates = {}
let root_div = document.getElementById('root')
function home() {

}
function movie() {

}
function route(path, template) {
    if (typeof template == 'function') {
        return routes[path] = template;
    }
    else if (typeof template == 'string') {
        return routes[path] = templates[template]
    } else
        return;
}
function template (name, templateFunction) {
    return templates[name] = templateFunction
}
template('home', function() {
    home()
})
template('movie', function() {
    movie()
})
route('/', 'home')
route('/movie', 'movie')

function resolveRoute(route) {
    try {
        return routes[route]
    } catch (e) {
        throw new Error(`Route ${route} not found`)
    }
}
function router(evt) {
    let url = window.location.hash.slice(1) || '/'
    let route = resolveRoute(url)

    route()
}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
// JSON өгөгдлөөс Poster компонентийг ашиглан Poster зургуудыг үүсгэх
getMovies(url, (movies) => {
    movies.forEach((movie) => {
        root_div.appendChild(movie.Create())
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

