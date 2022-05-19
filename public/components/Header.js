const header_template = document.createElement('template')
header_template.innerHTML = `
<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .top-menu {
        width: 70%;
        position: absolute;
        top: 0;
        height: 70px;
        background: rgb(29,28,28);
        background: linear-gradient(180deg, rgba(29,28,28,1) 53%, rgba(29,28,28,0.8990678546809349) 80%, rgba(23,21,21,0.05593059977897408) 100%);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .top-menu-logo {
        filter: brightness(0) invert(1);
    }
    .top-menu-items {
        display: flex;
        list-style: none;
        gap: 35px;
    }
    .top-menu-items > li > a {
        font-family: Roboto Mono Regular;
        font-size: 15px;
        color: #FFF;
        text-decoration: none;
    }
</style>
<header class="header">
<nav class="top-menu">
    <img src="./assets/images/imaxblue.png" class="top-menu-logo" alt="urgoo logo">
    <ul class="top-menu-items">
        <li><a href="#" target="_self">Эхлэх</a></li>
        <li><a href="#" target="_blank">Тун удахгүй</a></li>
        <li><a href="#" target="_blank">Захиалага</a></li>
    </ul>
</nav>
</header>
`
class Header extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(header_template.content.cloneNode(true));

    }

}

window.customElements.define('header-menu', Header)