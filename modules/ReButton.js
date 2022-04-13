import {Thor} from './Thor.js'
export default class ReButton {
    constructor(props) {
        this.OnButtonClick = null
    }
    render() {
        return `
            <div
                id="${this.props.name}_number"
                data-value="0">0
            </div>
            <button
                id="${this.props.name}"
                onclick="${this.OnButtonClick}"
            >
                ${this.props.name}
            </button>
        `
    }
}