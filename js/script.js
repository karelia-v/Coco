
$(document).ready(function() {
	$('.header-menu__icon').click(function(event) {
		$('.header-menu__icon, .header-menu').toggleClass('active');
	});
});





//-----------КАРТА--------------


// Создает обработчик события window.onLoad
YMaps.jQuery(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(30.731240, 46.472055), 19);
})










   /* $(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	var headerMenu=$('.header-menu');
	var headerLang=$('.header-top-lang');
	if(w<767) {
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();*/
