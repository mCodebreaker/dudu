var mBody;
var isIE = window.attachEvent  && navigator.userAgent.indexOf('Opera') === -1;

/**
 * 事件注册
 */
$(document).ready(function(){
	mBody = isIE ? document.documentElement : document.body;
	/* mozilla */
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	/* IE/Opera */
	window.onmousewheel = document.onmousewheel = wheel;
	$("#btn_to_head").click(function (){
		$(mBody).animate({scrollLeft:0}, 500);
	});
});

/**
 *鼠标滚动事件
 */
var wheel = function(event) {
	var delta = 0;
	if (!event) /* For IE. */
		event = window.event;
	if (event.wheelDelta) { /* IE/Opera. */
		delta = event.wheelDelta / 120;
	} else if (event.detail) {
		/** Mozilla */
		delta = -event.detail / 3;
	}
	if (delta)
		handle(delta);
	// 拦截默认滚轮事件
	if (event.preventDefault)
		event.preventDefault();
	else 
		event.returnValue = false;
}

function handle(delta) {
	mBody.scrollLeft -= delta * 50;
}