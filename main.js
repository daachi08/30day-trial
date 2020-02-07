
// スワイパー 
$(function() {var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  breakpoints: 
  {
    767: {
      slidesPerView: 1.5, //スライド表示枚数
      spaceBetween: 0,
      initialSlide: 1, 
      loop: true, 
    }
  },
  slidesPerView: 2.4, //スライド表示枚数
  spaceBetween: 0,
  initialSlide: 1,
  loop: true, 
  })
});

// アコーディオンメニュー
$(function(){
  $('.accordion-menu-item-link').each(function(){
    $(this).on('click',function(){
      $(this).toggleClass('on');
      $("+.submenu",this).slideToggle();
      return false;
    });
  }); 
});

  // ドロワーメニュー

  $(function() {

    $('.menu-trigger').on('click',function(){
        if($(this).hasClass('active')){
          $(this).removeClass('active');
          $('nav').removeClass('open');
          $('.overlay').removeClass('open');
        } else {
          $(this).addClass('active');
          $('nav').addClass('open');
          $('.overlay').addClass('open');
        }
      });
      $('.overlay').on('click',function(){
        if($(this).hasClass('open')){
          $(this).removeClass('open');
          $('.menu-trigger').removeClass('active');
          $('nav').removeClass('open');      
        }
      });
});


