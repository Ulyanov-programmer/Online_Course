// sidebar //
import SidebarMenu from './modules/sidebar.js';
new SidebarMenu({
    selectorOfSidebars: '#sidebar',
    selectorOfSidebarButtons: '[data-open-sidebar]',
    touchAreaElementSelector: '.sidebar-swipe-wrapper',
});
SidebarMenu.sidebarsActiveClass = 'active';
SidebarMenu.buttonsActiveClass = 'active';
// SwipeMenu //
import SwipeElement, { ChangePlane } from "./modules/swipeMenu.js";
new SwipeElement({
    touchStartAreaSelector: '.sidebar-swipe-wrapper',
    swipableElementSelector: '#sidebar',
    changePlane: ChangePlane.ToLeft,
    swipeSensitivity: 0.3,
});
