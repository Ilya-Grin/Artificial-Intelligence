const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__navigation');
const body = document.querySelector('body');

function burgerClick() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('overflow');
}