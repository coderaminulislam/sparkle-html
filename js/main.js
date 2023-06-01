new WOW().init();


/***********************************/
/*         Progress Bar   */
/***********************************/
$('.ps').LineProgressbar({
  percentage: 80,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.ai').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.id').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.ui').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.ux').LineProgressbar({
  percentage: 80,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.responsive').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.html').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.css').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.js').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.c').LineProgressbar({
  percentage: 75,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.java').LineProgressbar({
  percentage: 80,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
$('.swift').LineProgressbar({
  percentage: 60,
  fillBackgroundColor: '#ffe500',
  backgroundColor: '#f4f4f4',
  radius: '0px',
  height: '6px',
  width: '100%'
});
/***********************************/
/*Add Dark Overlay if menu is open */
/***********************************/
$("html").click(function() {
  if ($('.nav').hasClass("open")) {
    $('.nav').removeClass('open');
    $('.nav-btn').toggleClass('active open-btn');
    $('#dim').toggleClass('dim'); 
  }
}); 
// Add Class To Nav/Header With Dark Background When User Scroll Down
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
      $("nav").addClass("darker-nav");
  }else {
    $("nav").removeClass("darker-nav");
  }
}); 
/***********************************/
/*         Portfolio Filter        */
/***********************************/
$('#filter a').click(function() {
  if($(this).attr('rel')) {
      $('.imgs img').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
  } else {
      $('.imgs img').show();
  }
  return false;
});
/***********************************/
/*     Number Count Animations     */
/***********************************/
$(".counter__value").countMe(1, 1);



/***********************************/
/*          Button Navbar          */
/***********************************/


const openBtn = document.querySelector('#mobile-nav');
const closeBtn = document.querySelector('#close-btn');
const offcanvasMenu = document.querySelector('nav')

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
});


   //sticky menu
   $(window).on('scroll', function(){
    var scroll=$(window).scrollTop();
    if(scroll<1){
        $(".sticky").removeClass("scroll-header");
    }
    else{
        $(".sticky").addClass("scroll-header");
    }
   })