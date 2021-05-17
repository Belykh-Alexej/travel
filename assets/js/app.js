/*
    1. id="header"  id для работы в js
        -при скроле страницы выдавать class="fixed"

    2. id="travel"
        -необходимо измерять его высоту, чтоб при его пересечении появилась навигация
        -если scrollOffset больше или равно выcоты travel, то хедеру выдается class="fixed"
*/

$(function () {
	var header = $("#header"),
		// в перемнную var travelH сохраняем высоту блока travelH
		travelH = $("#travel").innerHeight(),
		scrollOffset = $(window).scrollTop;

	// ! FIXED HEADER

	// только зашли на страницу, сразу выполняеться эта функция (показывает при обновлении навигацию)
	// выполняеться функция checkScroll и отправляеться  в нее значение scrollOffset
	checkScroll(scrollOffset);

	/*     @@@@@@@@@@@@    Относиться к скролу страницы и отображению навигации
	// скролим страницу
	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		// if (если если scrollOffset больше или равно выcоты travel
		//{то для хедера выдадим class="fixed"}
		//
		//    if (если если scrollOffset больше или равно выcоты travel
		if (scrollOffset >= travelH) {
			// {то для хедера выдадим class="fixed"}
			header.addClass("fixed");
		}

		// иначе у хедера удалим class="fixed"
		else {
			header.removeClass("fixed");
        }
        
        @@@@@@@@@@@@    Относиться к скролу страницы и отображению навигации
*/

	$(window).on("scroll", function () {
		// -скролим страницу
		// -обновляеться значение скрола: scrollOffset
		scrollOffset = $(this).scrollTop();
		// -отправляеться значение в функцию: scrollOffset
		// ! продолжение ниже
		checkScroll(scrollOffset);
	});

	// todo чтоб меню показывалось при обновлении страницы, без скрола

	// ! продолжение тут
	// -получаем значение в функции: scrollOffset
	function checkScroll(scrollOffset) {
		if (scrollOffset >= travelH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* //   !    Smooth scroll   (плавный скролл к элементам)
			!  не будет    */

	// Menu NAV toggle

	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();

		// крест/полоски
		$(this).toggleClass("active");
		// меню откр. закр.
		$("#nav").toggleClass("active");
	});
});
