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