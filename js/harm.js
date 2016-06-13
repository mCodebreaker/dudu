/* 圆点 */
$(document).ready(function(){
	var items = $("#harm .item p");
	items.next("span").hide();
	items.bind("mouseenter", function(){
			var dot = $(this).next("span");
			dot.stop(true, true);
			dot.fadeIn();
		});
	items.bind("mouseleave", function(){
			$(this).next("span").fadeOut();
		});
});