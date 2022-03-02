
/*===< for change classes >=================================================== */
$(document).ready(function(){
   $('.icon-menu').click(function(event){
       $('.icon-menu,.menu__body').toggleClass('active')
       $('.page').toggleClass('lock')
   });
});


/*===< for IBG technology jQuery >=================================================== */
function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
         }
      });
   }
   
   ibg();
/* ======================================================================================== */

/*===< slider >=================================================== */
/* $(document).ready(function(){ */
   $('.testimonials__block').slick({
      //infinite: true,
      dots:true,
      arrows:false,
      accessibility:false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      //adaptiveHeight:true,
      nextArrow:'<button type="button" class="slick-next"></button>',
      prevArrow:'<button type="button" class="slick-prev"></button>',
      responsive: [{
         breakpoint: 768,
         settings: {}
      }]
});

/*===< for IBG technology pure JS >=================================================== */

 /*   function ibg(){

      let ibg=document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
      }
      }
      
      ibg(); */
/* ======================================================================================== */

/* $(document).ready(function(){
   $('.header__burger').click(function(event){
       $('.header__burger,.header__menu').toggleClass('active')
       $('body').toggleClass('lock')
   });
}); */


/* $('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
   $(this).toggleClass('active');
   $('.munu__body').toggleClass('active');
   ('body').toggleClass('lock');
});

function ibg(){
   $.each($('ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg(); */
