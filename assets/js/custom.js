(function ($) {
	'use strict';
	$(".navbar-form").hide()
	// Preloader JS
	$(function () {
		$('body').addClass('loaded');
	});


	// Go To Top JS
	// Scroll Event
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});

	// Click Event JS
	$('.go-top').on('click', function () {
		$("html, body").animate({ scrollTop: "0" }, 100);
	});

	// navbar click show search 
	$(".navbar-search").click(function () {
		$(".navbar-form").fadeToggle("slow", "linear")
	})

	// Owl-Carousel JS
	$('.owl-carousel2').owlCarousel({
		loop: true,
		margin: 25,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 15,
			},
			420: {
				items: 2,
				margin: 15,
			},
			600: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	})

	$('.owl-carousel1').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		nav: false,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1200: {
				items: 4,
			}
		}
	})



})(jQuery);
