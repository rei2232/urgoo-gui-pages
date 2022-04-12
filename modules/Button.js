const template = document.createElement('template')
class Button extends HTMLElement {
    constructor() {
        super()
		this.shadow = this.attachShadow({mode: 'open'})
    }
	connectedCallback() {
		this.render()
	}
	render() {
		this.shadow.innerHTML = `
		<button type="button"></button>
		`
	}
}
customElements.define('Button', Button)