$(document).ready(function() {
	window.onload = function() {

	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removeDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");

		$(".form-callback h4").text(dataText);
		$(".form-callback [name=admin-data]").val(dataForm);
	});

	$("a#single_image").fancybox();
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});


	$('.portfolio_item').isotope({
		itemSelector: '.single_item',
		layoutMode: 'fitRows',
	});
	$('.portfolio_item').isotope({
		filter: '.art'
	});

	$('.portfolio_filter ul li').click(function() {
		$('.portfolio_filter ul li').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.portfolio_item').isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
	$("form#callback").submit(function() { 
				$.ajax({ 
				type: "POST", 
				url: "mail.php", 
				data: $(this).serialize() 

				}).done(function() { 

						$.magnificPopup.open({ 
						items: { 
						src: '<div class="thanks-popup white-popup-block"><p>Спасибо за заявку. Мы свяжемся с вами в ближайшее время</p></div>', 
						type: 'inline' 
						} 
					});
					setTimeout(function() { 

						$.magnificPopup.close(); 

						$("form#callback").trigger("reset"); 

						}, 5000); 
					}); 
				return false; 
				});

	$("form#com").submit(function() { 
				$.ajax({ 
				type: "POST", 
				url: "mail.php", 
				data: $(this).serialize() 

				}).done(function() { 

						$.magnificPopup.open({ 
						items: { 
						src: '<div class="thanks-popup white-popup-block"><p>Спасибо за заявку. Мы свяжемся с вами в ближайшее время</p></div>', 
						type: 'inline' 
						} 
					});
					setTimeout(function() { 

						$.magnificPopup.close(); 

						$("form#com").trigger("reset"); 

						}, 5000); 
					}); 
				return false; 
				});
}
})
