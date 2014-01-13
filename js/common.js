$(document).ready(function() {

	var sidebar = $('.sidebar'),
			overlay = $('.overlay');

	// preloader
	$('.out').addClass('is-loading');

	// overlay
	overlay.click(function (){
		$(this).removeClass('is-open');
		sidebar.removeClass('is-open');
	});

	// sidebar
	function navbar(){
		var trigger = $('.sidebar-trigger');

		trigger.click(function (){
			if (sidebar.hasClass('is-open')) {
				sidebar.removeClass('is-open');
				overlay.removeClass('is-open');
			} else {
				sidebar.addClass('is-open');
				overlay.addClass('is-open');
			}
		});
	}
	navbar();


	function scroll_top() {
		var top = ($('.main').offset().top);


			if($(window).scrollTop() >= top){
				$(".sidebar-trigger").addClass('is-visible');
			}
			else {
				$(".sidebar-trigger").removeClass('is-visible');
			}

	}
	scroll_top();

	$(window).scroll(function(){
		scroll_top();
	});

	// .header height
	(function() {
		var height = $(window).height();
				header = $('.landing .header');

		header.height(height);
	})();


	// scroll to
	$('.js-scroll').click(function (){
		$('html, body').animate({
			scrollTop: $('.main').offset().top
		}, 500);
	});

	// Plax
	// $('.landing .header__bg').plaxify();
	// $.plax.enable();

});



// window resize
$(window).resize(function() {

	// .header height
	(function() {
		var height = $(window).height();
				header = $('.landing .header');

		header.height(height);
	})();

});



$(window).load(function() {
	$('.out').removeClass('is-loading');
	$('.loader').hide().remove();
	$('.trash').hide().remove();
});

