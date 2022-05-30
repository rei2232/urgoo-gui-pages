import Thor from '../../Thor/index.js'
// Зурагт постер үзүүлэх компонент
/* Blueprint
  <div>
    <a>
      <img>
    </a>
   </div>
*/

function Poster(props, classes, img_url, redirect_url) {
  // component үүсгэх.
  this.component = Thor.Component(props)
  /*
        DocumentFragment нь яг HTML DOM шиг нүсэр биш гэхдээ document.* үйлдлүүдийг гүйцэтгэх боломжтой
        санах ойд л байх document юм. Үүнийг ашиглаж нийлмэл html код бичээд innerHTML д нь оноож болно.
  */
  let docFrag = new DocumentFragment()

  // Poster-ийг агуулах <div>.
  const wrapper = document.createElement('div')
  wrapper.className = classes
  // docFrag DOM-доо хайрцаглах div-ээ хийж өгнө.
  docFrag.appendChild(wrapper)

  // <a> элемент Poster функцийн фараметрийн дагуу үүсгэнэ.
  const a_element = document.createElement('a')
  a_element.className = classes + '-a'
  a_element.href = window.location.href + redirect_url
  a_element.target = '_self'
  // <div> дотор хийж өгнө
  docFrag.firstChild.appendChild(a_element)

  // <img> элемент Poster функцийн фараметрийн дагуу үүсгэнэ.
  const img_element = document.createElement('img')
  img_element.className = classes + '-img'
  img_element.src = img_url
  // <div>-ийн <a> дотор хийж өгнө
  docFrag.firstChild.firstChild.appendChild(img_element)

  // docFrag DOM-ийг рендерүүлнэ.
  this.render = docFrag
  return this
}
export default {Poster}