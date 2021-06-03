$(document).ready(function () {

	$('.header__burger').click(function () {
		$('.header__burger, .header__navigation').toggleClass('active');
		$('body').toggleClass('overflow');
	});

	$('.slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 10000,
		infinite: true,
		arrows: false,
		speed: 300,
		adaptiveHeight: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});