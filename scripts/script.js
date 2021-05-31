const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__navigation');

function burgerClick() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}