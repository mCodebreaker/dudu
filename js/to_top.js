/**
 * 回到顶部
 */
$(document).ready(function(){
	var isIE = window.attachEvent  && navigator.userAgent.indexOf('Opera') === -1;
	body = isIE ? document.documentElement : document.body;
	$("#btn_to_top").click(function (){
		$(body).animate({scrollTop:0}, 500);
	});
});