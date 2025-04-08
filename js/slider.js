$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1200,
      dots: true,
      infinite: true,
      fade: true,
      arrows: false,
      slidesToShow: 1,

      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow : 1,
                arrows: false,

            }
        },
      ]
    });
});
$(document).ready(function () {
  $('.news__content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.prev-2'),
    nextArrow: $('.next-2'),

       responsive: [
            {
                breakpoint: 1180, // При ширине 1024px и меньше
                settings: {
                    slidesToShow: 2 // Показывать 2 слайда
                }
            },
            {
                breakpoint: 768, // При ширине 768px и меньше
                settings: {
                    slidesToShow: 1 // Показывать 1 слайд
                }
            }
        ]
  });
});	
