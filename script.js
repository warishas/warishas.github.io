$(document).ready(function(){
	var contentSection = $('.content-section');
	var navigation = $('nav');
	
	//when a nav link is clicked, smooth scroll to the section
	navigation.on('click', 'a', function(event){
		smoothScroll($(this.hash));
	});
	
	//update navigation on scroll...
	$(window).on('scroll', function(){
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();


	
	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $('nav a[href="#' + sectionName + '"]');
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
				{
					navigationMatch.addClass('active-section');
				}
			else {
				navigationMatch.removeClass('active-section');
			}
		});
	}
	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top
		}, 800);
	}



	/////SLIDESHOW
	var slideIndex = 1;
	showSlides(slideIndex);
	
	// Next/previous controls
	function plusSlides (n) {
		showSlides(slideIndex += n);
	}
	
	// Thumbnail image controls
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active";
	}
});