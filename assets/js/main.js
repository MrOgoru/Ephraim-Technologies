//navigation
const text = document.querySelector(".down");
const move = document.querySelector(".sow")

text.addEventListener("click", function () {
  move.classList.toggle('sow');

});

document.querySelector('.main-btn').addEventListener('click', () => document.querySelector('.mobile-nav')
  .classList.toggle('show'));

document.querySelector('.dropdown').addEventListener('click', () => document.querySelector('.shown')
  .classList.toggle('open'));

//sliders
$('.single-item').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
  nextArrow: ('.next'),
  prevArrow: ('.prev'),
});

$('.p-slick').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//animate on scroll


// Initi AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function () {
  aos_init();
});

(jQuery);