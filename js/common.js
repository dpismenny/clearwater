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
		var trigger = $('.js-trigger');

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
				$(".js-trigger").addClass('is-visible');
			}
			else {
				$(".js-trigger").removeClass('is-visible');
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

	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var start_visibility = window_top + window_height;
		
		$(".visibility").each(function(){
			
			var block_position = $(this).offset().top;
			
			if(start_visibility > block_position){
				$(this).addClass('is-visible');
			}
		});
	}
	visibility();

// window scroll
	$(window).scroll(function(){
		visibility();
	});

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

