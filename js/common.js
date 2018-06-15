$(document).ready(function() {
	

	$(window).scroll( function (){
	var st = $(this).scrollTop();

		$(".parallax_elem_one").css({
			'transform' : "translate(0%, " + st/7 + "% "
		});

		$(".parallax_elem_two").css({
			'transform' : "translate(0%, " + st/8 + "% "
		});
		$(".parallax_elem_tree").css({
			'transform' : "translate(0%, " + st/7 + "% "
		});

		$(".parallax_elem_four").css({
			'transform' : "translate(0%, " + st/8 + "% "
		});
		$(".parallax_elem_five").css({
			'transform' : "translate(0%, " + st/7 + "% "
		});

		$(".parallax_elem_six").css({
			'transform' : "translate(0%, " + st/8 + "% "
		});
	});
	$('.owl-carousel').owlCarousel({
	nav: false,
	loop:false,
	margin: 0,
	items: 6,
	responsive:{
		320:{
			items:4
		},
		600:{
			items:4
		},
		1000:{
			items:6
		}
	}
	});

	$('.reviews_carousel').slick({
		dots: false,
		infinite: false,
		speed: 300,
		autoplay: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".modal_show").fancybox({
		padding: 0
	});




	//Плавный скролл до блока .div по клику на .scroll
	$(function(){

	$('a[data-target="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


	});


	// Маска для формы телефона

    $(".mobile").mask("+7 (999) 999-99-99");

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
    $("#form").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
	});

	// Скрыть - раскрыть блок

	// $('.toggle_menu').on('click', function() {

    //    $('.main_navigation').slideToggle(300, function(){
           
    //         if( $(this).css('display') === "none"){
    //             $(this).removeAttr('style');
    //         }

    //    });

	// });
	
	// Скрыть - раскрыть блок

	$(document).on('click', '.toggle_menu', function(){
		$(this).toggleClass('on');
		$('.main_navigation').slideToggle( function(){
			if( $(this).css('display') === "none"){
						$(this).removeAttr('style');
			}
		});
		return false; // non important
	  });

	// Скрыть - раскрыть блок(множество)

	$(".closed-block").click(function () { 
		if ($(this).hasClass("active")) {  
		$(this).parents().children(".open-block").slideUp("slow"); 
		$(this).removeClass("active"); 
		} 
		else {  
		$(this).parents().children(".open-block").slideDown("slow"); 
		$(this).addClass("active"); 

		} 
	});


// Меню для сайта

	//   $('a').on('click', function(e){
	//     e.preventDefault();
	//   });
	    
	//   $('#ddmenu li').hover(function () {
	//      clearTimeout($.data(this,'timer'));
	//      $('.ul_none',this).stop(true,true).fadeIn(600);
	//   }, function () {
	//     $.data(this,'timer', setTimeout($.proxy(function() {
	//       $('.ul_none',this).stop(true,true).fadeOut(600);
	//     }, this), 100));
	//   });

// переключение с красивым появлением  

  	$('.num-link a').click(function(e) {
        e.preventDefault();
        $('.num-link .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.inf_lk').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
	});
	
		//Карусель
	// class="owl-carousel owl-theme"
	//Документация: http://owlgraphic.com/owlcarousel/
	


});
/* Меню Гамбургер*/
// jQuery( ".btn_drop" ).click(function(event) {
// 	event.stopPropagation();
// 	jQuery(this).parent().find('.submenu').first().toggle();
// 	jQuery(this).parent().find('li').mouseleave(function(){  
// 	  var thisUI = jQuery(this);
// 	  jQuery('html').click(function(){
// 		thisUI.hide();
// 		jQuery('html').unbind('click');
// 	  });
// 	});
//   });
  
//   jQuery( ".submenu" ).click(function(e) {
// 	e.stopPropagation();
// 	//$(".submenu").not($(this).parent()).hide();
// 	//$(this).siblings().find('.submenu').first().toggle();
// 	$(".submenu").siblings().find('.submenu').first().toggle();
//   });
	$(document).mouseup(function(e) {
		var container = $(".main_navigation li");
		if (container.has(e.target).length === 0){
			$(".submenu").hide();
			$('.btn_drop').removeClass('active');
		}
	});

	$('.btn_drop').click(function(e) {
		e.preventDefault();

		var tab = $(this).attr('href');

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(".submenu").removeAttr('style');
		}
		else {
			$('.btn_drop').removeClass('active');
			$(this).addClass('active');
			$('.submenu').not(tab).css({'display':'none'});
			$(tab).fadeIn(400);
		}
	});



	 /* Слик слайдер */
	var $status = $('.pagingInfo');
	var $slickElement = $('.slider_cool');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        ($status.text(i + '/' + slick.slideCount ));
    });
	 $('.slider_cool').slick({
		dots: false,
		infinite: false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: true,
	  });

	    window.onload= function() {
			document.getElementById('toggler').onclick = function() {
				openbox('box', this);
				return false;
			};
		};
		function openbox(id, toggler) {
			var div = document.getElementById(id);
			if(div.style.display == 'block') {
				div.style.display = 'none';
			}
			else {
				div.style.display = 'block';
			}
		}

		// $('.reviews_carousel').slick({
		// 	slidesToShow: 2,
		// 	dots: false,
		// 	infinite: false,
		// 	slidesToScroll: 1,
		// 	autoplay: false,
		// 	autoplaySpeed: 2000,
		// 	arrows: true,
		//   });
		
		

		//   $(window).bind('scroll',function(e){
		// 	parallaxScroll();
		//    });
		  
	

		// $(window).on('mousemove', function(e) {
		// 	var w = $(window).width();
		// 	var h = $(window).height();

		// 	var offsetX = 0.5 - e.pageX / w;
		// 	var offsetY = 0.5 - e.pageY / h;

		// 	$(".parallax").each(function(i,el){
		// 		var offset = parseInt($(el).data('offset'));

		// 		var translate = "translate3d(" + Math.round(offsetX * offset)
		// 		+ "px," + Math.round(offsetY * offset) + "px, 0px";

		// 		$(el).css({
		// 			'transform':translate
		// 		})

		// 	})
		// });



	

		
		

