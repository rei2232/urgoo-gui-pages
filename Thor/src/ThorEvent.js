// Event бүртгэх модул
// Document доторх бүх классуудаас хайлт хийж тухайн listener функцийг ажлуулна.
// тухайн элементийг parent нүдээс хайж event-ээ нэмдэг
// (params): классын нэр, ямар эвэнт болох, ажиллах функц
function EventBubble(parent, className, type, listener) {
  parent.addEventListener(type, (e) => {
    if (e.target.classList.contains(className)) {
      listener()
    }
  })
}

export {EventBubble}