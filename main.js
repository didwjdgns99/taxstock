$(document).ready(function(){

    window.addEventListener("scroll" , () => {
        if(window.scrollY > 50){
            $(".header").addClass("active")
            $(".header a").addClass("active")
        }else{
            $(".header").removeClass("active")
            $(".header a").removeClass("active")
        }
    })


    $('.head_list li').mouseenter(function(){
      $('.overlay').addClass('active')
    });

    $('.head_list li').mouseleave(function(){
      $('.overlay').removeClass('active')
    });

    
//--------------------서브메뉴리스트----------------------
    $('.head_list li').mouseenter(function(){
      $(this).children('.sub_menu').addClass('active')
    });

    $('.head_list li').mouseleave(function(){
      $(this).children('.sub_menu').removeClass('active')
    });
var timer;

$('.head_list li').mouseenter(function () {
  //clearTimeout(timer);
  $(this).children('.sub_menu').addClass('active');
});

$('.head_list li').mouseleave(function () {
  var $submenu = $(this).children('.sub_menu');
  timer = setTimeout(function () {
    $submenu.removeClass('active');
  }, 300);
});

$('.sub_menu').mouseenter(function () {
  clearTimeout(timer);
});

$('.sub_menu').mouseleave(function () {
  var $submenu = $(this);
  timer = setTimeout(function () {
    $submenu.removeClass('active');
  }, 300);
});

//-----------햄버거------------------

$('.hamburger').click(function(){
  $('.hamburger').toggleClass('active')
  $('.m_sub_list').toggleClass('active')
  $('.overlay').toggleClass('active');
});

$('.category-header').click(function() {
  $(this).siblings('.subcategory').find('li').toggleClass('active');
});



//-----------------윈도우셋 메인-------------------
  setTimeout(function() {
    $('.l_cul_01').animate({ 
        height: '514px'  // 원하는 크기로 변경  
     },);  // 애니메이션 지속 시간: 0.5초 (500ms)
    }, 500);  // 0.5초 후 실행

  setTimeout(function() {
    $('.l_cul_02').animate({ 
         height: '270px'  // 원하는 크기로 변경
       },);  // 애니메이션 지속 시간: 0.5초 (500ms)
     }, 500);  // 0.5초 후 실행

  setTimeout(function(){
      $('.l_cul_02_img').addClass('active')
      $('.l_cul_02_img img').addClass('active')
    },500);

  setTimeout(function() {


    $('.r_cul_01').animate({ 
         height: '270px'  // 원하는 크기로 변경
       },);  // 애니메이션 지속 시간: 0.5초 (500ms)
     }, 500);  // 0.5초 후 실행

  setTimeout(function() {
    $('.r_cul_02').animate({ 
       height: '514px'  // 원하는 크기로 변경
        },);  // 애니메이션 지속 시간: 0.5초 (500ms)
      }, 500);  // 0.5초 후 실행

  setTimeout(function () {
  var windowWidth = $(window).width(); // jQuery로 창 너비 가져오기
  var newHeight = windowWidth <= 500 ? '400px' : '514px';
  


  $('.r_cul_02').animate({ 
    height: newHeight
  }, 500);  // 애니메이션 지속 시간: 0.5초
}, 500);  // 0.5초 후 실행    


      setTimeout(function() {
  $('.main_title_img').addClass('active');
}, 600);

      setTimeout(function(){
        $('.top_txt_01 span').addClass('active');
        $('.top_txt_02 span').addClass('active');
      }, 1000);


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "2",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        speed:6000,
        breakpoints: {

    1201: {
      slidesPerView: 4
    },
     751: {
      slidesPerView: 3
    }
  }
      });

  $('.q01').on('click',function(){
    $('.answer_01').toggleClass('active');
  });

});