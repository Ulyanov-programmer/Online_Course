import{isNullOrWhiteSpaces,sleep}from"./general.js";export default class Accordion{constructor(t){if(this.isToggling=!1,this.buttonsActiveClass="active",this.contentActiveClass="active",isNullOrWhiteSpaces(t.btnsSelector,t.contentBlocksSelector))throw"[ACCORDION] Incorrect arguments!";this.buttons=document.querySelectorAll(t.btnsSelector),this.contentElements=document.querySelectorAll(t.contentBlocksSelector);let e=document.querySelector(t.contentBlocksSelector);if(this.animationDuration=1e3*parseFloat(getComputedStyle(e).getPropertyValue("transition-duration"))+100,this.buttons.length!=this.contentElements.length)throw"[ACCORDION] The count of buttons and content-elements is not equal.";t.activeFirstElements&&(this.buttons[0].classList.add("active"),this.contentElements[0].classList.add("active"));for(let s of this.buttons)s.addEventListener("click",(()=>this.toggleActiveElements(s)));for(let s of this.contentElements)if(0==s.classList.contains("active")){s.setAttribute("hidden",""),s.style.display="none"}}toggleActiveElements(t){if(t.classList.contains("active")||this.isToggling)return;this.isToggling=!0;for(let s of this.buttons)s.classList.remove("active");t.classList.add("active");let e=this.contentElements[t.dataset.toggleElemNumber];for(let s of this.contentElements){let t=s;s.classList.remove("active"),setTimeout((async()=>{s!=e?(s.setAttribute("hidden",""),t.style.display="none"):(e.removeAttribute("hidden"),t.style.display=""),await sleep(30),e.classList.add("active"),this.isToggling=!1}),this.animationDuration)}}}