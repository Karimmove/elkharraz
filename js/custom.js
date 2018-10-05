// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//deepak after and before class start
$(window).resize(function () {
    changeDiv();
});
changeDiv();
function changeDiv() {
    if ($(window).width() <= 767) {
        $('.before').insertBefore($('.after'));
    }
    else {
        $('.before').insertBefore($('.myContent'));
    }
}
//deepak after and before class End


$(".top").click(function(){
    $("html, body").animate({scrollTop: 0}, 2000);
});



//$(window).scroll(function () {
//    if ($(window).scrollTop() >= 45) {
//        $('.header').addClass('fixed_header');
//    }
//    else {
//        $('.header').removeClass('fixed_header');
//    }
//}); 

$('.slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode:true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1, 
            }
        }]
});

$('.slick-next').click(function() {
   $('#opCity').addClass('opClass'); 

});

$(".slick-next").on("click", function() {
  $("#slider").addClass('opClass');
});
