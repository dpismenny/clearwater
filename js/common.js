$(document).ready(function() {

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

	$('.overlay').click(function (){
		$(this).removeClass('is-open');
		$('.popup').removeClass('is-open');
		$('.popup').slideUp();
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