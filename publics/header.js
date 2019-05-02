$(window).scroll(function(){
    var sticky = $('#my-header'),
        nav = $('.classy-navbar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 50) {
        sticky.addClass('fixed');
        nav.css({'height':'70px'});
    }
    else {
        sticky.removeClass('fixed');
        nav.css({'height':'100px'});
    }
  });