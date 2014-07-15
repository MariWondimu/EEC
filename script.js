$(".slideShow li").each(function(index){
	if($(this).attr("id")!="slide1")
	$(this).hide()
});
function autoSlider(){
	return window.setInterval(function(){
	$(".slideShow li:eq(0)").hide().next().fadeIn(1000).end().appendTo(".slideShow");
	},3000);
}
$(document).ready(function(){
	autoSlider();
});
