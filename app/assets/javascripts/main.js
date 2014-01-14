$(document).ready(function(){

	var left = $(".left");
	var right = $(".right");
	var box = $(".big.box");
	var slider = $(".casket");
	var sliderWidth = 0;
	var complete = true;

	slider.children().each(function(){
		sliderWidth = sliderWidth + $(this).outerWidth(true);
	});

	slider.css("width", sliderWidth);

	$(".right").on("click", function(){
		if( (sliderWidth + slider.position().left) > box.width() && complete){
			complete = false;
			slider.stop().animate({
				left: slider.position().left - box.width() - 20
			}, 400, function(){ complete = true; });
		}
	});

	$(".left").on("click", function(){
		if( slider.position().left < 0 && complete){
			complete = false;
			slider.stop().animate({
				left: slider.position().left + box.width() + 20
			}, 400, function(){ complete = true; });
		}
	});

});