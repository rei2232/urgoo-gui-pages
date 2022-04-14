// Event бүртгэх модул
// Document доторх бүх классуудаас хайлт хийж тухайн listener функцийг ажлуулна.
// (params): классын нэр, ямар эвэнт болох, ажиллах функц
function EventBubble(className, type, listener) {
  document.addEventListener(type, (e) => {
    if (e.target.classList.contains(className)) {
      listener()
    }
  })
}
// TODO: document дотроос хайх биш, тухайн элементийг parent нүдээс хайж event-ээ нэмдэг модул бичих
export {EventBubble}