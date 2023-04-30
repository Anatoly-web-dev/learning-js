function addSmoothLinks() {
	const menuSmoothLinks = document.querySelectorAll('.header__sub-link, .content__link');
	if (menuSmoothLinks.length > 0) {
		menuSmoothLinks.forEach(link => link.addEventListener('click', (e) => {
			const header = document.querySelector('.header');
			const headerHeight = header.clientHeight +
				parseInt(getComputedStyle(header).paddingTop) +
				parseInt(getComputedStyle(header).paddingBottom);
			const currentPageAddress = location.href;
			const targetPageFullAddress = link.getAttribute('href');
			const strIndexEnd = targetPageFullAddress.indexOf('.html');
			const targetPageName = targetPageFullAddress.slice(2, strIndexEnd);
			if (currentPageAddress.includes(targetPageName)) {
				e.preventDefault();
				const strIndexStart = targetPageFullAddress.indexOf('#');
				const smoothLinkAddress = targetPageFullAddress.slice(strIndexStart);
				const smoothLinkTarget = document.querySelector(`${smoothLinkAddress}`);
				const smoothLinkTargetValue = smoothLinkTarget.getBoundingClientRect().top + scrollY - headerHeight;
				window.scrollTo({
					top: smoothLinkTargetValue,
					behavior: "smooth"
				});
			}
		}));
	}
}

function addMenuBurger() {
	const headerNavigationMenu = document.querySelector('.header__navigation-menu');
	const headerMenuArrows = document.querySelectorAll('.header__item-arrow');
	const headerBurgerMenu = document.querySelector('.header__burger-menu');
	const headerMenuLinks = document.querySelectorAll('.header__link, .header__sub-link');

	if (headerMenuArrows.length > 0) {
		headerMenuArrows.forEach(arrow => arrow.addEventListener('click', (e) => {
			arrow.parentElement.classList.toggle('active');
		}));
	}

	if (headerBurgerMenu) {
		const body = document.body;
		headerBurgerMenu.addEventListener('click', (e) => {
			headerBurgerMenu.classList.toggle('active');
			headerNavigationMenu.classList.toggle('active');
			if (headerBurgerMenu.classList.contains('active') &&
				headerNavigationMenu.classList.contains('active')) {
				body.style.overflow = 'hidden';
			} else {
				body.style.overflow = 'auto';
			}
		});

		if (headerMenuLinks.length > 0) {
			headerMenuLinks.forEach(link => link.addEventListener('click', (e) => {
				headerBurgerMenu.classList.remove('active');
				headerNavigationMenu.classList.remove('active');
				body.style.overflow = 'auto';
				headerMenuArrows.forEach(arrow => arrow.parentElement.classList.remove('active'));
			}));
		}
	}
}

function scrollPage() {
	const header = document.querySelector('.header');
	const headerHeight = header.clientHeight +
		parseInt(getComputedStyle(header).paddingTop) +
		parseInt(getComputedStyle(header).paddingBottom);
	window.scrollBy(0, -headerHeight - 30);
}

function addInteractive() {
	addSmoothLinks();
	addMenuBurger();
	scrollPage();
}

window.onload = addInteractive;