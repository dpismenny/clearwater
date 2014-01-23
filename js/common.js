// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			  // 3. This function creates an <iframe> (and YouTube player)
			  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'PCbVpHfAB_4',
      playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'fs': 1 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      }
    });
  }

			  // 4. The API will call this function when the video player is ready.
			  function onPlayerReady(event) {
			    event.target.playVideo();
			  }

			  // 5. The API calls this function when the player's state changes.
			  //    The function indicates that when playing a video (state=1),
			  //    the player should play for six seconds and then stop.
			  var done = false;
			  function onPlayerStateChange(event) {
			    if (event.data == YT.PlayerState.PLAYING && !done) {
			      setTimeout(stopVideo, 6000);
			      done = true;
			    }
			  }
			  function stopVideo() {
			    player.stopVideo();
			  }

$(document).ready(function() {







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
			$(this).removeClass('is-video-open');
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
		}
		return false;
	});

	$('.js-popup-callback').click(function(){
		if ($('.popup_callback').hasClass('is-open')) {
			$('.popup_callback').removeClass('is-open');
		} else {
			$('.popup_callback').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});

	$('.js-popup-online').click(function(){
		if ($('.popup_online').hasClass('is-open')) {
			$('.popup_online').removeClass('is-open');
		} else {
			$('.popup_online').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});

	$('.js-play').click(function(){
		if ($('.v-player').hasClass('is-open')) {
			$('.v-player').removeClass('is-open');
			player.stopVideo();
		}
		else {
			$('.v-player').addClass('is-open');
			$('.overlay').addClass('is-video-open');
			//player.stopVideo();
			player.playVideo();
		}
		return false;
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










});


$(window).load(function() {
	$('.out').removeClass('is-loading');
	$('.loader').hide().remove();
	$('.trash').hide().remove();
});

