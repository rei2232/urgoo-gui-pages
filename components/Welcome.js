import ReButton from "./base/ReButton.js";
import Thor from "../Thor";
const welcome_template = document.createElement('template')

const btn = ReButton.ReButton({name: 'welcome button'},'Тасалбар захиалах','welcome-btn')

welcome_template.innerHTML = `
<style>
    .welcome-container {
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-content: center;
    }
    .welcome-background {
        width: 65%;
        height: 100%;
        background-image: url('../assets/images/main-back.jpg');
        height: 500px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: self-end;
        justify-content: center;
    }
    .welcome-right-tent {
        width: 25%;
        height: 485px;
        position: absolute;
        background: rgb(23,21,21);
        background: linear-gradient(90deg, rgba(23,21,21,1) 39%, rgba(23,21,21,1) 74%, rgba(23,21,21,0.18370436553527658) 100%);
    }
    .welcome-left-tent {
        width: 25%;
        height: 485px;
        right: 0;
        top: 0;
        position: absolute;
        background: rgb(23,21,21);
        background: linear-gradient(270deg, rgba(23,21,21,1) 39%, rgba(23,21,21,1) 74%, rgba(23,21,21,0.18370436553527658) 100%);
    }
    /*.welcome-bottom-tent {*/
    /*    width: 100%;*/
    /*    height: 108px;*/
    /*    position: absolute;*/
    /*    top: 415px;*/
    /*    background: rgb(23,21,21);*/
    /*    background: linear-gradient(0deg, rgba(23,21,21,1) 39%, rgba(23,21,21,1) 74%, rgba(23,21,21,0.18370436553527658) 100%);*/
    /*}*/
    .welcome-title {
        margin-bottom: 60px;
    }
    .welcome-title-hgroup {
        color: #FFF;
        font-family: "Comfortaa Regular", sans-serif;
        font-weight: bold;
        text-align: center;
        text-shadow: 4px 1px 3px rgba(0,0,0,0.51);
        line-height: 25px;
    }
    #welcome-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .welcome-btn {
       background-color: #20344B;
      border-radius: 13px;
      height: 45px;
      width: 300px;
      font-family: 'COMFORTAA REGULAR';
      color: #FFF;
      font-size: 16px;
      border: none;
      text-shadow: 4px 1px 3px rgb(0 0 0 / 51%);
      transition: 1s ease;
    }
    .welcome-btn:hover{
        cursor: pointer;
    }
    .phone-alt {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: 8px;
    }
    .phone-desc {
      color: #FFF;
      font-family: 'Roboto Regular', serif;
      font-size: 13px;
    }
    .phone-logos > img {
        width: 25px;
    }
</style>
  <div class="welcome-right-tent"></div>
  <div class="welcome-container">
      <div class="welcome-background">
          <div class="welcome-title">
              <hgroup class="welcome-title-hgroup">
                  <h1><b>Every film</b></h1>
                  <h1><b>Every day</b></h1>
                  <h1><b>Every experience</b></h1>
              </hgroup>
              <div id="welcome-btn-container">
                    ${btn.render.outerHTML}
              </div>
              <div class="phone-alt">
                <label class="phone-desc">The movie theater ticket ordering. Also available on</label>
                <span class="phone-logos">
                    <img src="../assets/images/apple-logo.png" class="apple-logo" alt="apple logo">
                    <img src="../assets/images/android-logo.png" class="android-logo" alt="android logo">
                </span>
            </div>
          </div>
      </div>
  </div>
  <div class="welcome-left-tent"></div>
<!--  <div class="welcome-bottom-tent"></div>-->
`
class Welcome extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(welcome_template.content.cloneNode(true));
    Thor.EventBubble(this.shadowRoot,'welcome-btn', 'click', btn.onClick)
  }
}

window.customElements.define('welcome-view', Welcome)