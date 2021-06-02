$(document).ready(function () {

	$('.header__burger').click(function () {
		$('.header__burger, .header__navigation').toggleClass('active');
		$('body').toggleClass('overflow');
	});

	$('.slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 5,
		slidesToScroll: 3
	});
});