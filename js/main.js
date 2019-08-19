(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#client-testimonial");
    owl.owlCarousel({
      navigation: true,
      pagination: false,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      addClassActive: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [480,1],
      itemsMobile : [479,1],
    });   
    $('#client-testimonial').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('#client-testimonial').find('.owl-next').html('<i class="lni-chevron-right"></i>');


    /* showcase Slider
    =============================*/
     var owl = $(".showcase-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        margin:10,
        stopOnHover: true,
        autoPlay: true,
        items: 5,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });



  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {          
      var scrollPos = $(window).scrollTop()
        if (scrollPos > 100) {
            $('.header-top-area').addClass('menu-bg');                       
        } else {
            $('.header-top-area').removeClass('menu-bg');           
        }

        if (scrollPos > 1500 && scrollPos < 3000) {
          $('li.nav-item .btn-singin').hide();
        }else{
          $('.nav-item .btn-singin').show();
        }
    });

  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation
   ========================================================================== */


    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

  $('.show-coures-range').on('click', function(){
    var $course = $(this).closest('.feature-info');
    $course.find('.hide-coures-range').show();
    $course.find('.range-table').show();
    $(this).hide();
  });

  $('.hide-coures-range').on('click', function(){
    var $course = $(this).closest('.feature-info');
    $course.find('.show-coures-range').show();
    $course.find('.range-table').hide();
    $(this).hide();
  });

  $('.get-course-btn').on('click', function(){
    $('#getCourse .course-name').text($(this).closest('.feature-info h4').contents().get(0).nodeValue);
    $('[name="course_id"]').val($(this).data("id"));  
   
    $('#getCourseForm')[0].reset();
    $('#getCourse').modal("show");
  });

  $('#getCourseForm').on('submit', function(e){
    e.preventDefault();   
    if(this.checkValidity()){
      var data = $('#getCourseForm').serializeArray();   
      console.log(data);
      $('#getCourseForm').hide();
      $('.course-success ').show();
    }
    
  });

  $('#getCourse').on('hide.bs.modal', function (e) {
    console.log("sdsdsdsd");
    $('#getCourseForm').show();
    $('.course-success ').hide();
  });

}(jQuery));

