$(document).ready(function(){

	var left = $(".left");
	var right = $(".right");
	var box = $(".big.box");
	var slider = $(".casket");
	var margin = 20;
	var sliderWidth = 0;
	var complete = true;

	slider.children().each(function(){
		sliderWidth = sliderWidth + $(this).outerWidth(true);
	});

	slider.css("width", sliderWidth);

	$(".right").on("click", function(){
		if( (sliderWidth + slider.position().left) > box.width() && complete){
			complete = false;
			if( (slider.position().left - box.width() - margin + sliderWidth) >= box.width() ){
				slider.stop().animate({
					left: slider.position().left - box.width() - margin
				}, 400, function(){ complete = true; });
			}
			else{
				slider.stop().animate({
					left: slider.position().left - (sliderWidth + slider.position().left - box.width())
				}, 400, function(){ complete = true; });
			}
		}
	});

	$(".left").on("click", function(){
		if( slider.position().left < 0 && complete){
			complete = false;
			if((slider.position().left + box.width() + margin) <= 0){
				slider.stop().animate({
					left: slider.position().left + box.width() + margin
				}, 400, function(){ complete = true; });
			}
			else{
				slider.stop().animate({
					left: 0
				}, 400, function(){ complete = true; });
			}
		}
	});

});