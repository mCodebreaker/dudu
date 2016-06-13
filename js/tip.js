/* 图片标签 */
$(document).ready(function(){
	var items = $("#container li a");
	items.find(".tip").hide();
	items.bind("mouseenter", function(){
			var tip = $(this).find(".tip");
			tip.stop(true, true);
			tip.fadeIn();
		});
	items.bind("mouseleave", function(){
			$(this).find(".tip").fadeOut();
		});
});