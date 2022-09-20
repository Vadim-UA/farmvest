$(document).ready(function () {
	$(".header__burger").click(function (event) {
		$(".header__burger,.header__menu").toggleClass("active");
		$(".header__wrapper").toggleClass("active");
		$("body").toggleClass("lock");
	});
});