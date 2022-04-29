import { isNullOrWhiteSpaces } from "./general.js";

interface SidebarMenuArgs {
	/** Selector of sidebars. Should contain id of this sidebar. */
	selectorOfSidebars: string
	/** 
		Selector for buttons that open some sidebar. 
		Should contains `data-open-sidebar='sidebarId'`.
	*/
	selectorOfSidebarButtons: string
	touchAreaElementSelector: string
}

export default class SidebarMenu {
	private sidebarButtons: NodeListOf<HTMLElement>
	public static sidebarsActiveClass: string = 'active'
	public static buttonsActiveClass: string = 'active'
	public static touchArea: HTMLElement

	constructor(arg: SidebarMenuArgs) {
		if (isNullOrWhiteSpaces(arg.selectorOfSidebars, arg.selectorOfSidebarButtons)) 
			throw '[SIDEBAR] Some selector is null or white spaces!'

		this.sidebarButtons = document.querySelectorAll(arg.selectorOfSidebarButtons);
		SidebarMenu.touchArea = document.querySelector(arg.touchAreaElementSelector);

		for (let sidebarBtn of this.sidebarButtons) {
			sidebarBtn.addEventListener('click', () => 
				this.toggleSidebar(sidebarBtn)
			)
		}
	}

	private toggleSidebar(eventButton: HTMLElement) {
		let sidebar = document.getElementById(eventButton.dataset.openSidebar);

		eventButton.classList.toggle(SidebarMenu.buttonsActiveClass);
		sidebar.classList.toggle(SidebarMenu.sidebarsActiveClass);

		SidebarMenu.touchArea ? SidebarMenu.touchArea.classList.toggle('active') : false;
	}
}

