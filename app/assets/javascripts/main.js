$(document).ready(function(){

	var left = $(".left");
	var right = $(".right");
	var box = $(".big.box");
	var slider = $(".casket");
	var sliderWidth = 0;

	slider.children().each(function(){
		sliderWidth = sliderWidth + $(this).width();
	});

	slider.css("width", sliderWidth);

	$(".right").on("click", function(){
		if( (sliderWidth + slider.position().left) > box.width() ){
			slider.animate({ left: slider.position().left - box.width() - 20 }, 500 );
		}
	});

	$(".left").on("click", function(){
		if( slider.position().left != 0 ){
			slider.animate({ left: slider.position().left + box.width() + 20 }, 500 );
		}
	});

});