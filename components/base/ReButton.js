import Thor from '../../Thor/index.js'
function ReButton(props, text, classes) {
  // component үүсгэх.
  this.component = Thor.Component(props)
  // button html элементээ үүсгэх.
  this.element = Thor.CreateElement('button', props)
  this.element.classList.add(classes)
  // Орж ирсэн текстээ элементийн дотор бичнэ.
  this.element.textContent = text
  // onClick буюу товч дээр дарах үеийн ажиллах функц
  this.onClick = () => {
    console.log('ReButton event clicked: ', classes)
  }
  // button html элементээ render гэсэн хувьсагчид хадгална.
  this.render = this.element
  return this
}


export default {ReButton}