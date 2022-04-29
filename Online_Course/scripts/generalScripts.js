// scroll-elements //
import ScrollController from './modules/scrollToElement.js';
/*
    Use if you want to use buttons for scrolling.
    How it works?
    When you press a button of scrollButtonsSelector, you scroll to the block
    indicated in data-scroll-to attribute of this scrollButton.
*/
let scrollController = new ScrollController({
    scrollButtonsSelector: '[data-scroll-to]',
    // Use it so that a fixed header is taken into account when scrolling.
});
// fsnavmenu //
import FsNavmenu from './modules/fsNavmenu.js';
new FsNavmenu({
    burgerSelector: '#burgerButton',
    fsNavmenuSelector: '.fullscreen-navmenu',
    buttonsSelector: '.fs-element',
    autoPadding: true,
});
FsNavmenu.fsNavmenuActiveClass = 'active';
FsNavmenu.burgerActiveClass = 'active';
// modal window //
import ModalWindowMenu from './modules/modalWindow.js';
/*
    It works like this:
    Finds all elements that contain data-modal-link and .modal-closer.
    The first ones trigger the event of opening the modal window, the second ones close it.
    After clicking on one of these elements,
    it looks for a block with a name inside data-modal-link and gives it the "active" class.

    Also, when pressed, turns off the scrolling page.
*/
new ModalWindowMenu({
    modalLinksSelector: '[data-modal-link]',
    modalClosersSelector: '.modal-closer',
    fsMenuSelector: '.fullscreen-navmenu',
    // smooth transition is calculated automatically, specify it for a modal
});
