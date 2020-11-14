$(document).ready(function() {
  //////////// active link top header  /////////////
  $('.nav ul li a').click(function() {
    $('.nav ul li a').removeClass('active-link');
    $(this).addClass("active-link");
  });
  //////////// swiper  /////////////
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
      },
  });
  //////////// header fixed  /////////////
  $(window).scroll(function () {
    var wts = $(this).scrollTop();
    
    $('.header .banner').css("padding-top" , "60px");
    if(wts > 30){
      $('.header .banner').css("padding-top" , "130px");
      $('.header .top-header').addClass('fixed');
    }
    else{
      $('.header .top-header').removeClass('fixed');
      $('.header .banner').css("padding-top" , "60px");
    }
  });
  //////////// question and answer links  /////////////
  $('.section-8 .freq .common .answer .nav li a').click(function() {
    $(this).siblings('.para-box').slideToggle();
    $(this).toggleClass('color-active');
    $(this).find('.plus').toggleClass('d-none-icon');
    $(this).find('.icon').toggleClass('d-block-icon');
  });

  $('.icon-bars').click(function(){
    $('.close-icon').fadeIn();
    $(this).fadeOut();
    $('.nav-bars-fixed').fadeIn();
  });
  $('.close-icon').click(function(){
    $('.icon-bars').fadeIn();
    $(this).fadeOut();
    $('.nav-bars-fixed').fadeOut();
  });
  $(window).resize(function (){
    if($(window).outerWidth() > 1200){
      $('.nav-bars-fixed').fadeOut();
      $('.close-icon').fadeOut();
    };
  });


  $('.section-8 .freq .common .question .nav li a').click(function() {
    let link = $(".section-8 .freq .common .question .nav li a").index(this);
      $('.section-8 .freq .common .answer .nav').removeClass('show');
      $('.section-8 .freq .common .answer .nav').eq(link).addClass("show");
      $('.section-8 .freq .common .answer .nav').eq(link).find('.para-box').slideUp(0);
      $('.section-8 .freq .common .answer .nav').eq(link).find('.open').addClass('active').slideDown(0);
      $('.section-8 .freq .common .answer .nav').eq(link).find('li a').removeClass('color-active');
      $('.section-8 .freq .common .answer .nav').eq(link).find('.open').siblings('a').addClass('color-active');
      $('.section-8 .freq .common .answer .nav').eq(link).find('li a .icon').removeClass("d-block-icon")
      $('.section-8 .freq .common .answer .nav').eq(link).find('li a .icon.hi').addClass('d-block-icon');
      $('.section-8 .freq .common .answer .nav').eq(link).find('li a .plus.d-none-icon').removeClass("d-none-icon")
      $('.section-8 .freq .common .answer .nav').eq(link).find('li a .plus.hi').addClass('d-none-icon')
      ////////////////border
      $('.section-8 .freq .common .question .nav li').removeClass('list-active');
      $(this).parent().addClass('list-active');
      ////////////////color
      $('.section-8 .freq .common .question .nav li a').removeClass('active-anckor');
      $(this).addClass('active-anckor');
  });
  /////////// go to top ///////////////
$(window).scroll(function() {
  let firstSectionHeight = $('.top-header').outerHeight();
  if ($(window).scrollTop() > firstSectionHeight) {
      $('.go-to').fadeIn();
  } else {
      $('.go-to').fadeOut();
  }
});

$('.go-to').click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
});


$("body").niceScroll({
  cursorcolor: "#2b56f5",
  cursorwidth: "5px",
  cursorborder: '0px'
});
$('body a').smoothScroll();
});