// spoiler //
import SpoilerMenu from './modules/spoiler.js';

new SpoilerMenu({
	btnsSelector: '.spoiler-btn',
	contentBlocksSelector: '.spoiler-content',
	maxWorkWidth: 10000,
	animationDuration: 200,
})
SpoilerMenu.btnActiveClass = 'active'
SpoilerMenu.contentActiveClass = 'active'