const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;


hamb.addEventListener('click', hambActiv);
menu.addEventListener('click', closePopup);

function hambActiv (e) {
	e.preventDefault();
	popup.classList.toggle('click');
	body.classList.toggle('active');
	clonePopup();
	

	
}

function clonePopup () {
	popup.appendChild(menu);
	menu.id= ('menuClone');
	menu.classList.remove('menu');


}

function closePopup () {
	popup.classList.remove('click');
	body.classList.remove('active');


}




//slider

$(function(){
	$('.bike-slider, .slider__item').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay:true,
		autoplaySpeed: 3000


	});

// link
		$(".popup, .menu, .bike__column").on("click","a", function (event) {
			event.preventDefault();
	
			var id  = $(this).attr('href'),
	
				top = $(id).offset().top-20;
			
			$('body,html').animate({scrollTop: top},1500);
		});

})


