$(function(){
    // banner part start
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="fa-solid fa-arrow-left left-arrow"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right right-arrow"></i>',
        dots: false,
        speed: 2000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      
    // banner part end


    // Extra button part start

    $(".extra-btn").click(function(){
      $("html,body").animate({
          scrollTop: 0
        })
    })

    // Extra button part end

    // scroll part start

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()

        if(scrolling > 20){
          $(".main-nav").addClass("nav-bg")
        }
        else{
          $(".main-nav").removeClass("nav-bg")
        }

        if(scrolling > 20){
          $(".extra-btn").fadeIn(200);
        }
      else{
          $(".extra-btn").fadeOut(200);
        }
          
    })

    // scroll part end

      lightbox.option({

      'resizeDuration': 200,
      'wrapAround': true

      })

      $('.service-main').slick({

      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      vertical: true,
      nextArrow: '<i class="fa-solid fa-angle-down down-arrow"></i>',
      prevArrow: '<i class="fa-solid fa-angle-up up-arrow"></i>',
      speed: 2000,
      infinite: true,
      autoplay:true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });

    
    $('.comment-text-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows:false,
      asNavFor: '.comment-img-main'
    });   
      $('.comment-img-main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.comment-text-main',
      centerMode: true,
      centerPadding:'0',
      vertical: true,
      focusOnSelect: true,
      nextArrow: '<i class="fa-solid fa-angle-down comment-img-down-arrow"></i>',
      prevArrow: '<i class="fa-solid fa-angle-up comment-img-up-arrow"></i>',
      speed: 2000,
      infinite: true,
      autoplay:true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });

    $('.counter').counterUp({
      delay: 100,
      time: 8000,
  });


  $('.company-main').slick({

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    speed: 2000,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 481,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
    ]

  });

})