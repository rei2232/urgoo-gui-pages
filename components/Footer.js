const footer_template = document.createElement('template')
footer_template.innerHTML = `
<style>
    .footer-container {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .footer-logo-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    .urgoo-logo {
        width: 60px;
    }
    .urgoo-more-logo {
        width: 130px;
    }
    .footer-nav > h3 {
        color: #FFF;
        font-family: Roboto Regular;
        font-size: 14px;
    }
    .footer-ul {
        gap: 15px;
        display: flex;
        flex-direction: column;
        padding-inline-start: 10px;
    }
    .footer-ul > a {
        text-decoration: none;
    }
    .footer-ul > a > li{
        color: #FFF;
        font-family: Roboto Regular;
        font-size: 13px;
    }
    hr.solid {
        border-top: 1px solid #837D7D;
        border-radius: 5px
    }

</style>
<footer class="footer-container">
    <div class="footer-logo-wrapper">
        <img src="/assets/images/logo.png" class="urgoo-logo" alt="urgoo logo" >
        <img src="/assets/images/urgoo-more.png" class="urgoo-more-logo" alt="urgoo logo 2">
    </div>
    
    <section class="footer-nav">
        <h3>Үндсэн</h3>
        <hr class="solid">
        <ul class="footer-ul">
            <a href="#" _target="_blank">
                <li>Эхлэл</li>
            </a>
            <a href="#" _target="_blank">
                <li>Захиалага</li>
            </a>
            <a href="#" _target="_blank">
                <li>Тун удахгүй</li>
            </a>
        </ul>
    </section>

    <section class="footer-nav">
        <h3>Үндсэн</h3>
        <hr class="solid">
        <ul class="footer-ul">
            <a href="#" _target="_blank">
                <li>Эхлэл</li>
            </a>
            <a href="#" _target="_blank">
                <li>Захиалага</li>
            </a>
            <a href="#" _target="_blank">
                <li>Тун удахгүй</li>
            </a>
        </ul>
    </section>

    <section class="footer-nav">
        <h3>Үндсэн</h3>
        <hr class="solid">
        <ul class="footer-ul">
            <a href="#" _target="_blank">
                <li>Эхлэл</li>
            </a>
            <a href="#" _target="_blank">
                <li>Захиалага</li>
            </a>
            <a href="#" _target="_blank">
                <li>Тун удахгүй</li>
            </a>
        </ul>
    </section>
</footer>
`
class Footer extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(footer_template.content.cloneNode(true));

    }

}

window.customElements.define('footer-menu', Footer)