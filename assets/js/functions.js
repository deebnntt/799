$(document).ready(function(){
  //Hamburger
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    $('.menu').toggleClass('block');
	});

  //Menu hover
  $(".menu-li").mouseenter(function () {
      var image = $(this).attr("data-id");
      $(".menu-image").hide();
      $("#" + image).show();
  });
  $(".menu-li").mouseleave(function () {
      $(".menu-image").hide();
  });

  //Slick Slider
  $('.availabilities-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true,
    prevArrow: $(".left-half"),
    nextArrow: $(".right-half"),
  });

  //Stacking Plan
  $("g").mouseenter(function() {
      $(this).find("rect").attr("fill", "#000");
      $(this).find("text").attr("fill", "#fff");
   });
  $("g").mouseleave(function() {
    $(this).find("rect").attr("fill", "none");
    $(this).find("text").attr("fill", "#000");
   });

}); //end document on ready functions


$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}

$(".scroll").click(function () {
	console.log('clicked')
	$(".second").scrollView();
});


$(".stack-row").click(function () {
		var id = $(this).attr("data-id");
		if ($(this).hasClass("active")) {
			$(".floorplan").slideUp(500);
			$(this).removeClass("active");
		} else {
			$(".floorplan").slideUp(500);
			$("#" + id).slideDown(500);
			$(".stack-row").removeClass("active");
			$(this).addClass("active");
		}
});

$(".g").click(function () {
    var id = $(this).attr("data-id");
		// var view = parseInt(id) + 1;
    $(".floorplan").slideUp(500);
		$("#table-area").scrollView();
    $("#" + id).slideDown(500);
    $(".stack-row").removeClass("active");
    $("#level-" + id).addClass("active");
});

$(".x").click(function () {
    $(".floorplan").slideUp(500);
    $(".stack-row").removeClass("active");
});
