const Thor = (props) => {
    Component = () => {
        props = props
        state = new Map()
        events = new Map()
        styles = new Map()
        children = new Map()  
    }
    AddEventListener = (eventName, handlerCode) => {
        events.set(eventName, handlerCode)
    }
    render = () => {
        return `<div></div>`
    }
    setState = (state) => {
        if (states.get(state.key) != state.value) {
            states.set(state.key, state.value)
        }
    }
}
export default Thor
