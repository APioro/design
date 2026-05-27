$(document).ready(function(){
	setMarqueeContents();
});

$(window).resize(function(){
	setMarqueeContents();
});

function setMarqueeContents(){
	let windowWidth = $(window).innerWidth(); // Width of the window
	let textWidth = $('.marquee__content > .marquee__text').outerWidth(); // Width of the text
	let numberOfCopies = Math.ceil(windowWidth / textWidth) + 1; // enough copies to fill the window plus one
	
	$('.marquee').css('--textWidth', textWidth); // Assign the text width as a CSS variable to compute the animation
	
	$('.marquee__copies').html(""); // Clear the marquee copies container
	
	for(var i = 0; i < numberOfCopies; i++){ // Fill the copies container with extra copies of the text
    $('.marquee__content > .marquee__text').clone().appendTo('.marquee__copies');
	}
}