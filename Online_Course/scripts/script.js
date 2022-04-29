//? If you are making a multi-page site, i recommend dividing the contents of this file
//? into several parts and connecting them to each page separately.
//? Also, TSDoc is used here, so read the tips. Try hover on some constructor.
// accordion //
import Accordion from './modules/accord.js';
/* Attention,
    the display property for inactive accordion elements
    does not allow them to be hidden.
    If you need to use it, set it via the active element class.
*/
let someAccrod = new Accordion({
    btnsSelector: '.how-we-do__accord-button',
    contentBlocksSelector: '.accord-cont-item',
    // smooth transition is calculated automatically, specify it for the contentBlocks
    activeFirstElements: true,
});
someAccrod.buttonsActiveClass = 'active';
someAccrod.contentActiveClass = 'active';
//? your scripts //
