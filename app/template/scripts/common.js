$(document).ready(function($) {

	var serviceHoverClass = 'services__item_unhover'
	$('.services__item').hover(function() {
		$('.services__item').addClass(serviceHoverClass);
		$(this).removeClass(serviceHoverClass);
	}, function() {
		$('.services__item').removeClass(serviceHoverClass);
	});

	$('.reviews__list').slick({
		appendArrows: $('.reviews__arrows .container'),
		prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="../uploads/icons/arrow-right.svg" alt="" /></button>',
		nextArrow: '<buttont ype="button" class="slick-next slick-arrows"><img src="../uploads/icons/arrow-right.svg" alt="" /></button>'
	})
	$('[href = "#dropdown"]').click(function(event) {
		event.preventDefault();
		var ul = $(this).siblings('ul');
		ul.toggle(0);
	});

	var panel = $('.panel');
});