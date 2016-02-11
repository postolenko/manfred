$(document).ready(function() {


	$(".respmenubtn").click(function() {

		console.log($(".menu-nav-box").offset().top);

		if ( $(".menu-nav-box").offset().left < 0 ) {

			$(".respmenubtn").addClass("respmenubtn-active");

			$(".menu-nav-box").stop().animate({"left": 0}, 900);

		} else {

			$(".respmenubtn").removeClass("respmenubtn-active");

			$(".menu-nav-box").stop().animate({"left": -110 + "%" }, 900);

		}


	});


});