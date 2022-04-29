const rowViewContentClass = 'block-with-filter__lects'
const gridViewContentClass = 'block-with-filter__grid-lects'
const lectsGridViewClass = 'lecture_column'

let rowButton = document.querySelector('#rowView');
let gridButton = document.querySelector('#gridView');
let contentBlock = document.querySelector('.block-with-filter__content');

let lects = document.querySelectorAll('.lecture');

rowButton.addEventListener('click', changeContentVisible);
gridButton.addEventListener('click', changeContentVisible);


function changeContentVisible(e: Event) {
	if (e.currentTarget == rowButton) {
		contentBlock.classList.add(rowViewContentClass)
		contentBlock.classList.remove(gridViewContentClass)

		for (let lect of lects) {
			lect.classList.remove(lectsGridViewClass)
		}
	} else {
		contentBlock.classList.remove(rowViewContentClass)
		contentBlock.classList.add(gridViewContentClass)

		for (let lect of lects) {
			lect.classList.add(lectsGridViewClass)
		}
	}
}