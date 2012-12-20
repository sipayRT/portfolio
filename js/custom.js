$(document).ready(function() {
	timeflag = 0;
	
	//logo change image
	$('[data-js="logo-link"]').hover(
		function(){
			theTime = new Date();
			theTime = theTime.getTime();
			if((theTime - timeflag) > 1000){
				$('.logo-link-image-active').fadeOut(500);
				timeflag = theTime;
			}
		},
		function(){
			$('.logo-link-image-active').fadeIn(500);
		}
	);

	// parallax
	$(window).bind('scroll',function(e){
	    parallaxScroll();
		menuWalk();
	});
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		
		top1 = (100+(scrolled*.25))+'px';
	    $('.parallax-box-1').animate({'top':top1}, 100);
	}


	// menu walk
	
	function menuWalk(){
		if($(window).scrollTop() > 50){
		 	$('header[role="always-top"]').addClass('always-top');
		}else{
			$('header[role="always-top"]').removeClass('always-top');
		}
	}
	
	
	/* open/close accordeon */
	if($('[data-js="show-hidden-content"]').length > 0){
		$('[data-js="accordeon-item"]').click(function(){
			if($(this).hasClass('show')){
				$(this).removeClass('show');
				$(this).parent().removeClass('faq-opened');
				$(this).find('.hidden-content').slideUp();
			}else{
				$(this).addClass('show');
				$(this).parent().addClass('faq-opened');
				$(this).find('.hidden-content').slideDown();
			}
		});
		
	}
	/* END open/close accordeon */
	
	/* portfolio item hover */
	$('.portfolio-thumbs-item').hover(
		function(){
			$(this).find('.portfolio-thumbs-item-site-desc-link').animate({'bottom':'0'}, 300);
		},
		function(){
			$(this).find('.portfolio-thumbs-item-site-desc-link').animate({'bottom':'-30px'}, 300);
		}
	);
	/* end portfolio item hover */
	
	/* popup */
	$('[data-js="popup-open"]').click(function(act){
		
		slideCount = $('.portfolio-thumbs').children().length;
		slideIndex = $('[data-js="popup-open"]').index(this);
		allImagesContainer = [];
		$('[data-js="popup-open"]').each(function(){
			//allImagesContainer.push(this);
			allImagesContainer[allImagesContainer.length] = $(this);
		});
		bf = allImagesContainer.toString();
		alert(bf)
		
		return false;
		nextSlide = slideIndex + 1;
		prevSlide = ((slideIndex - 1) <= 0) ? (slideCount - 1) : slideIndex - 1;
		stopSlide = slideCount - 1;
/*		popupSlider = '<div class="popup-content-wrap">
							<div class="popup-content">
								<div class="close-popup-button"></div>
								<div class="popup-image-wrap">' + $('[data-js="image-slider"] .field-items').html() + '</div>
								<div class="popup-buttons">
									<div class="popup-button-item prev"></div>
									<div class="popup-button-item next"></div>
								</div>
							</div>
						</div>';*/
		$('body').prepend('<div class="popup-bg"></div>');
		$('body').prepend(popupSlider);
		$('.popup-image-wrap .field-item-'+slideIndex).animate({'z-index': '1', 'opacity': '1'}, 500);
		return false;
			
		// next slide
		$('.popup-button-item.next').live('click', function(event){
			if(!event.isPropagationStopped()){
				$('.popup-image-wrap .field-item').each(function(){
					$(this).animate({'z-index': '0', 'opacity': '0'}, 500);
				});
				if(nextSlide > stopSlide){
					$('.popup-image-wrap .field-item-0').animate({'z-index': '1', 'opacity': '1'});
					nextSlide = 1;
					prevSlide = stopSlide;
					
				}else{
					$('.popup-image-wrap .field-item-' + nextSlide).animate({'z-index': '1', 'opacity': '1'}, 500);
					nextSlide ++;
					if(prevSlide == stopSlide){
						prevSlide = 0;
					}else{
						prevSlide ++;
					}
				}
				event.stopPropagation();
			}
			
		});
		// prev slide
		$('.popup-button-item.prev').live('click', function(event){
			if(!event.isPropagationStopped()){
				prevHide = (prevSlide >= stopSlide) ? 0 : (prevSlide + 1);
				$('.popup-image-wrap .field-item').each(function(){
					$(this).animate({'z-index': '0', 'opacity': '0'}, 500);
				});
				if(prevSlide >= 0){
					$('.popup-image-wrap .field-item-' + prevSlide).animate({'z-index': '1', 'opacity': '1'}, 500);
					if(nextSlide <= 0){
						nextSlide = stopSlide;
					}else{
						nextSlide --;
					}
					prevSlide --;
				}else{
					$('.popup-image-wrap .field-item-' + stopSlide).animate({'z-index': '1', 'opacity': '1'}, 500);
					nextSlide = 0;
					prevSlide = stopSlide - 1;
				}
				event.stopPropagation();
			}
		});
		
		
		
		
		
		
		
		
		
		
		
	});
	/* end popup */
	
	// site down
	$('[data-js="site-down"]').click(function(){
		if($.support.htmlSerialize == true){		
			bh = $(window).height();
			bw = $(window).width();
			$('.rotate-wrap').css({
				'-webkit-transform':'rotate(90deg)',
			    '-moz-transform':'rotate(90deg)',
			    '-o-transform':'rotate(90deg)',
			    '-ms-transform':'rotate(90deg)',
			    'transform':'rotate(90deg)',
				'width':bh,
				'margin-top':(bh/2),
				'margin-left':(bw/2)
			});
			$('header[role="always-top"]').width('100%');
			
			setTimeout('alert("Ну вот...доигрались. Давай f5 жми :)")', 3000);
		}else{
			alert('в это браузере ничего не получится :(');	
		}
		return false;
	});
		
});

function popupImageSlider(act){
	


	
}

