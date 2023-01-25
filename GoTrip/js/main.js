const owl = $('.owl-carousel');
owl.owlCarousel({
	center: true,
	items: 3,
	margin: 30, 
	startPosition: 1,
	loop: true,
});


$('.slider__button-next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.slider__button-prev').click(function() {

    owl.trigger('prev.owl.carousel');
})