
// JavaScript Document

//adjust();
//$(window).resize(adjust);
//
//function adjust() {
//  var devicewidth = parseInt($("html").css("width"));
//  if (devicewidth <= 750) {
//      var devicefontsize = (devicewidth / 320) * 20;//计算当前设备自适应字体大小
//      console.log(devicefontsize)
//      $("html").css("font-size", devicefontsize + "px");
//  }else {
//      $("html").css("font-size", "46.875px");
//  }
//}


(function (doc, win) {
	var docEl = doc.documentElement, //获取html标签
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);