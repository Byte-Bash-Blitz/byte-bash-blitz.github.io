document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = '#605aca';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });
});

  
$(document).ready(function(){
    $('.event-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Adjust as needed
      dots: true,
      arrows: false
    });
  });