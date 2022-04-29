import{isNullOrWhiteSpaces}from"./general.js";export default class SpoilerMenu{constructor(e){if(isNullOrWhiteSpaces(e.btnsSelector,e.contentBlocksSelector)||e.maxWorkWidth<0||e.animationDuration<0)throw"[SPOILERS] Incorrect arguments!";if(SpoilerMenu.spoilerButtons=document.querySelectorAll(e.btnsSelector),SpoilerMenu.spoilerContentElements=document.querySelectorAll(e.contentBlocksSelector),SpoilerMenu.spoilerButtons.length!=SpoilerMenu.spoilerContentElements.length)throw"[SPOILERS] The count of spoiler buttons and spoiler content-elements must be more than zero.";SpoilerMenu.spoilerVisibleWidth=e.maxWorkWidth,SpoilerMenu.animationDuration=e.animationDuration,this.toggleToSpoilers(),window.addEventListener("resize",this.toggleToSpoilers)}toggleToSpoilers(){for(let e=0;e<SpoilerMenu.spoilerContentElements.length;e++)window.innerWidth<=SpoilerMenu.spoilerVisibleWidth?(SpoilerMenu.spoilerContentElements[e].classList.add("uspoiler-content-active"),SpoilerMenu.spoilerContentElements[e].hidden=!0,SpoilerMenu.spoilerButtons[e].classList.add("uspoiler-btn-active")):(SpoilerMenu.spoilerContentElements[e].classList.remove("uspoiler-content-active"),SpoilerMenu.spoilerContentElements[e].hidden=!1,SpoilerMenu.spoilerButtons[e].classList.remove("uspoiler-btn-active"));for(let e of SpoilerMenu.spoilerButtons)e.addEventListener("click",this.toggleSpoilerState)}toggleSpoilerState(e){let t=e.currentTarget,o=t.nextElementSibling;!1===o.classList.contains("_slide")&&(toggleSpoilerAnimation(o,SpoilerMenu.animationDuration),t.classList.toggle(SpoilerMenu.btnActiveClass),o.classList.toggle(SpoilerMenu.contentActiveClass))}}function spoilerUp(e,t){if(!1===e.classList.contains("_slide")){e.classList.add("_slide");let o=e.style;o.transitionProperty="height, margin, padding",o.transitionDuration=t+"ms",o.height=e.clientHeight+"px",e.clientHeight,o.overflow="hidden",o.height="0",o.paddingTop="0",o.paddingBottom="0",o.marginTop="0",o.marginBottom="0",window.setTimeout((()=>{e.hidden=!0,o.removeProperty("height"),o.removeProperty("padding-top"),o.removeProperty("padding-bottom"),o.removeProperty("margin-top"),o.removeProperty("margin-bottom"),o.removeProperty("overflow"),o.removeProperty("transition-duration"),o.removeProperty("transition-property"),e.classList.remove("_slide")}),t)}}function spoilerDown(e,t){if(!1===e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden&&(e.hidden=!1);let o=e.style,i=e.clientHeight;o.overflow="hidden",o.height="0",o.paddingTop="0",o.paddingBottom="0",o.marginTop="0",o.marginBottom="0",e.clientHeight,o.transitionProperty="height, margin, padding",o.transitionDuration=t+"ms",o.height=i+"px",o.removeProperty("padding-top"),o.removeProperty("padding-bottom"),o.removeProperty("margin-top"),o.removeProperty("margin-bottom"),window.setTimeout((()=>{o.removeProperty("height"),o.removeProperty("overflow"),o.removeProperty("transition-duration"),o.removeProperty("transition-property"),e.classList.remove("_slide")}),t)}}function toggleSpoilerAnimation(e,t){return e.hidden?spoilerDown(e,t):spoilerUp(e,t)}SpoilerMenu.btnActiveClass="active",SpoilerMenu.contentActiveClass="active";