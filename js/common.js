$(document).ready(function() {

	var overlay = $('.overlay');

	// .header height
	(function() {
		var height = $(window).height();
				header = $('.header');

		header.height(height);
	})();

	// slide-btn scroll
	$('.js-slide').click(function (){
		$('html, body').animate({
			scrollTop: $('#numbers').offset().top
		}, 500);
		return false;
	});


	$('.js-popup-order').click(function (){
		$('.popup_callback').hide();
		$('.overlay').addClass('is-open');
		$('.popup_order').slideToggle().toggleClass('is-open');
	});

	$('.js-popup-callback').click(function (){
		$('.popup_order').hide();
		$('.overlay').addClass('is-open');
		$('.popup_callback').slideToggle().toggleClass('is-open');
		return false;
	});



	function navbar(){
		var navtrigger = $('.js-nav-trigger'),
				menu = $('.main-navigation');

		navtrigger.click(function (){
			if (menu.hasClass('is-active')) {
				menu.removeClass('is-active');
				overlay.removeClass('is-open');
				$('body').removeClass('is-fixed');
			} else {
				menu.addClass('is-active');
				overlay.addClass('is-open');
				$('body').addClass('is-fixed');
			}
			return false;
		});
	}
	navbar();


	function scroll_top() {
		var top = ($('.main').offset().top);

		function navtrigger_show () {
			if($(window).scrollTop() >= top){
				$(".nav-trigger").addClass('is-active');
			}
			else {
				$(".nav-trigger").removeClass('is-active');
			}
		}
		navtrigger_show();
	}
	scroll_top();

	$(window).scroll(function(){
		scroll_top();
	});




	overlay.click(function (){
		$(this).removeClass('is-open');
		$('body').removeClass('is-fixed');
		$('.popup').removeClass('is-open');
		$('.popup').slideUp();
		$('.main-navigation').removeClass('is-active');
	});

});



// window resize
$(window).resize(function() {

	// .header height
	(function() {
		var height = $(window).height();
				header = $('.header');

		header.height(height);
	})();

});







































	// (function() {
	// 	var link = $('link');

	// 	$('button').on('click', function() {
	// 		var $this = $(this),
	// 			stylesheet = $this.data('file');

	// 		link.attr('href', stylesheet + '.css');

	// 		$this
	// 			.siblings('button')
	// 				.removeAttr('disabled')
	// 				.end()
	// 			.attr('disabled', 'disabled');
	// 	});
	// })();