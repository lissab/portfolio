var main = function () {
  "use strict";

	$(window).scroll(function() {
	if ($(window).scrollTop() > 150) {
	$('.main').addClass('navigatiebalk');
	} 
	else {
	$('.main').removeClass('navigatiebalk');
	}
	});

	$('nav a').click(function(event) {
	var id = $(this).attr("href");
	var offset = 55;
	var target = $(id).offset().top - offset;

	$('html, body').animate({scrollTop: target}, 500);
	event.preventDefault();
	});

	setInterval(nextfoto, 5000);}
  	function nextfoto() {

	if ($('.foto5').hasClass('select')) {
		$('.foto5').fadeOut(1000, function() {
	    $('.foto5').removeClass('select');
	    $('.foto6').fadeIn(1000, function () {
	    $('.foto6').addClass('select');
	    });
	    });
	 }

	else if ($('.foto6').hasClass('select')) {
	    $('.foto6').fadeOut(1000, function() {
	    $('.foto6').removeClass('select');
	    $('.foto7').fadeIn(1000, function () {
	    $('.foto7').addClass('select');
	    });
	    });
	}

	else {
	    $('.foto7').fadeOut(1000, function() {
	    $('.foto7').removeClass('select');
	    $('.foto5').fadeIn(1000, function () {
	    $('.foto5').addClass('select');
	    });
	    });
	}
}

$("document").ready(main);