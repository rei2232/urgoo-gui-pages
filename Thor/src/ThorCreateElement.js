function CreateElement(type, props) {
  let elem = document.createElement(type)
  // props-оор html элементийн аттрибутуудыг үүсгэх
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const attr = document.createAttribute(key)
      attr.value = props[key]
      elem.setAttributeNode(attr)
    }
  }
  return elem
}
export {CreateElement}