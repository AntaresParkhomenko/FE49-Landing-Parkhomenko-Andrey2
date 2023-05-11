const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(document).ready(function() {
    $('header__burger').click(function(event) {
      $('.header__burger,.header-navigation').toggleClass('active');
    })
  })