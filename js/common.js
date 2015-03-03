

$(document).ready(function() {

// $('.fancybox').fancybox({
//   padding: 0,
//   helpers: {
//     overlay: {
//       locked: false
//     }
//   }
// });

// $('input, textarea').placeholder();

$('.sorry__overlay, .sorry__close').click(function(event) {
	$('body').addClass('is-hiddensorry');
});

$( '#years' ).on( 'cycle-update-view', function( event, opts ) {
    // your event handler code here
    //alert('a');
    console.log(opts.currSlide);
    $('.slider__menu-item').removeClass('is-active')
    $('.slider__menu-item:not(.is-hidden)').eq(opts.currSlide).addClass('is-active');

    // argument opts is the slideshow's option hash
});
//$()
$('.slider__menu2 .slider__menu-item').click(function(event) {
	
	gotome = $('.slider__menu-item:not(.is-hidden)').index( this )
	$( '#years' ).cycle('goto', gotome);
});





	// function onYouTubeIframeAPIReady() {
	//   var player;
	//   player = new YT.Player('player', {
	//     videoId: 'M7lc1UVf-VE',
	//     playerVars: { 'autoplay': 1, 'controls': 0 },
	//     events: {
	//       'onReady': onPlayerReady,
	//       'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
	//       'onStateChange': onPlayerStateChange,
	//       'onError': onPlayerError
	//     }
	//   });
	// }


	var sidebar = $('.sidebar'),
			overlay = $('.overlay');

	// preloader
	$('.out').addClass('is-loading');

	// overlay
	overlay.click(function (){
			$(this).removeClass('is-open');
			$(this).removeClass('is-open-popup');
			//$(this).removeClass('is-video-open');
			$('.popup_control').removeClass('is-open');
			$('.popup_callback').removeClass('is-open');
			$('.popup_online').removeClass('is-open');
			$('.v-player').removeClass('is-open');
			sidebar.removeClass('is-open');
	});

	$('.js-popup-control').click(function(){
		if ($('.popup_control').hasClass('is-open')) {
			$('.popup_control').removeClass('is-open');
		} else {
			$('.popup_control').addClass('is-open');
			$('.overlay').addClass('is-open');
			$('.overlay').addClass('is-open-popup');
		}
		return false;
	});

	$('.js-popup-callback').click(function(){
		if ($('.popup_callback').hasClass('is-open')) {
			$('.popup_callback').removeClass('is-open');
		} else {
			$('.popup_callback').addClass('is-open');
			$('.overlay').addClass('is-open');
			$('.overlay').addClass('is-open-popup');
		}
		return false;
	});

	$('.js-popup-online').click(function(){
		if ($('.popup_online').hasClass('is-open')) {
			$('.popup_online').removeClass('is-open');
		} else {
			$('.popup_online').addClass('is-open');
			$('.overlay').addClass('is-open');
			$('.overlay').addClass('is-open-popup');
		}
		return false;
	});
	// opening video
	function is_touch_device() {
	  return 'ontouchstart' in window // works on most browsers 
	      //|| 'onmsgesturechange' in window; // works on ie10
	}
	function isFunction(possibleFunction) {
	  return (typeof(possibleFunction) == typeof(Function));
	}
	t = is_touch_device();
	if(!t){
		$('.js-play').click(function(event){
			event.preventDefault();
			$('.popup-video').addClass('is-open');
			playVideo();
			return false;
			
		});
		// closing video
		$('.popup-video__close').on('click', function(event) {
			$('.popup-video').removeClass('is-open');
			stopVideo();
		});
	}
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
	if($(".main").length > 0){
		scroll_top();
	}

	$(".unit-pager a").click(function (){
		var page = $(this).attr("href");

		$(".unit-pager__item").removeClass('is-active');
		$(this).parent().addClass('is-active');
		$('html, body').animate({
			scrollTop: $(page).offset().top - 35
		}, 500);
		return false;
	});

	$(".equipment-menu a").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top - 10
		}, 500);
		return false;
	});

	$("#excurs").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 500);
		return false;
	});

	$("#costid").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top - 70
		}, 500);
		return false;
	});

	// scroll pager main page

	function pager_scroll(){
		$(".unit").each(function(){
			var pos = $(this).offset().top;
			var id = $(this).attr('id');
			if( $(window).scrollTop() >= (pos - 100)){
				$(".unit-pager__item").removeClass('is-active');
				$('[href = #'+id+']').parent().addClass('is-active');
			}
		});
	}


	// pager on main page

	function scroll_unit() {
		var top = ($('.unit-wrap').offset().top - 35);
		var bottom = ($('.quality').offset().top - 35);

		if($(window).scrollTop() > top){
				$(".unit-pager").addClass('is-visible');
		}
		if($(window).scrollTop() > bottom){
			$(".unit-pager").removeClass('is-visible');
		}
		if($(window).scrollTop() < top){
			$(".unit-pager").removeClass('is-visible');
		}
	}

	$(window).scroll(function(){
	  	if($(".main").length > 0){
	  	 scroll_top();
	  	}
	  	if($(".unit-wrap").length > 0){
	  	 	scroll_unit();
	  	 	pager_scroll();
	  	}
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
	$('.js-scroll-testing').click(function (){
		$('html, body').animate({
			scrollTop: $('.testing').offset().top
		}, 500);
	});

	// Plax
	// $('.landing .header__bg').plaxify();
	// $.plax.enable();


	// visibility 

	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var start_visibility = window_top + window_height;
		
		$(".visibility").each(function(){
			
			var block_position = $(this).offset().top;
			
			if(start_visibility >= block_position){
				$(this).addClass('is-visible');
			}
		});
	}
	visibility();


  function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
             tab_link.bind("click", function() {
             var index = $(this).attr("href");
             tab_link.removeClass("is-active");
             tab_link.parent().removeClass("is-active");
             $(this).addClass("is-active");
             $(this).parent().addClass("is-active");
             tab_cont.hide();
             $(this).parents(".js-tab-group").find("."+index).show();
                    return false;
                });
            });
    }
  tab();

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





	//$('js-play-fordesktop').replacewith($(''))




});


$(window).load(function() {
	$('.out').removeClass('is-loading');
	$('.loader').hide().remove();
	$('.trash').hide().remove();
	$('.header__bottle').addClass('is-visible');
});

