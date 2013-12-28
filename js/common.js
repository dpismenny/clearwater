$(document).ready(function() {

	// $('#nav').localScroll(800);

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	// $('.header').parallax("50%", 0.4);
	$('section.about').parallax("50%", 0.1);
	$('section.production').parallax("50%", 0.1);
	$('section.service').parallax("50%", 0.1);
	$('section.delivery').parallax("50%", 0.1);
	// $('.bg').parallax("50%", 0.4);
	$('section.quality').parallax("50%", 0.1);


	// $(".header").bind('mousemove', function(e){
	// 	$.easing.smoothmove = function (x, t, b, c, d) {
	// 	return -c *(t/=d)*(t-2) + b;
	// 	    };

	// 	$(this).animate({
	// 	  // 'background-position-x': e.pageX,
	// 	  'background-position-y': e.pageY
	// 	}, {queue:false,duration:400,easing:'smoothmove'});

	// });


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
		var btntrigger = $('.js-btn-trigger'),
				sidebar = $('.sidebar');

		btntrigger.click(function (){
			if (sidebar.hasClass('is-active')) {
				sidebar.removeClass('is-active');
				overlay.removeClass('is-open');
				$('body').removeClass('is-fixed');
			} else {
				sidebar.addClass('is-active');
				overlay.addClass('is-open');
				$('body').addClass('is-fixed');
			}
			return false;
		});
	}
	navbar();


	function scroll_top() {
		var top = ($('.container').offset().top);

		function btntrigger_show () {
			if($(window).scrollTop() >= top){
				$(".btn-trigger").addClass('is-active');
			}
			else {
				$(".btn-trigger").removeClass('is-active');
			}
		}
		btntrigger_show();
	}
	scroll_top();

	function scrollSection() {
		var el = $('.section');
		el.each(function(){
			var top = $(this).offset().top - 300;
			var wnd_top = $(window).scrollTop();

			if (wnd_top >= top) {
				$(this).addClass('is-visible');
			}
			else{
				$(this).removeClass('is-visible');
			}
		})
	}
	scrollSection();




	$(window).scroll(function(){
		scroll_top();
		scrollSection();
	});





	overlay.click(function (){
		$(this).removeClass('is-open');
		$('body').removeClass('is-fixed');
		$('.popup').removeClass('is-open');
		$('.popup').slideUp();
		$('.sidebar').removeClass('is-active');
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