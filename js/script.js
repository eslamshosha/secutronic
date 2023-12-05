let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();
  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    $("body").toggleClass("overflow");
  });
  $(".close-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    $("body").toggleClass("overflow");
  });
  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  // $(".nav-head .close-btn").click(function () {
  //   $(".navgition").removeClass("reset-left");
  //   $(".menu-bars .bars").toggleClass("open-bars");
  //   $("body").removeClass("overflow");
  // });

  //fixed nav3
  $stickyVision = $(".second-vision");
  $stickySecondLogo = $(".second-logo");
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
      $stickySecondLogo.addClass("active");
      $stickyVision.addClass("active");
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
      $stickySecondLogo.removeClass("active");
      $stickyVision.removeClass("active");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
      $stickySecondLogo.removeClass("active");
      $stickyVision.removeClass("active");
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  if ($(window).width() <= 1199) {
    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-div").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-div").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
      }
    });
    $(".overlay-box").click(function () {
      $(".cats-div").slideToggle(400);
    });
  }
  if ($(window).width() <= 991) {
    //slide down menu
    $(".sub-head").click(function (e) {
      e.preventDefault();
      $(this).siblings(".sub-menu-nav").slideToggle(400);
      $(".sub-head").not(this).siblings(".sub-menu-nav").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
      }
    });
    $(".overlay-box").click(function () {
      $("sub-menu-nav").slideToggle(400);
    });
  }
  ///////// ** main** /////////
  var main = new Swiper(".main-slider .swiper", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    preloadImages: false,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  // for counter //
  const sectionExists =
    document.getElementsByClassName("counter-cont").length > 0;

  if (sectionExists) {
    var a = 0;
    function countFunction() {
      $(".counter-num").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              if (this.countNum < 10) {
                $this.text("0" + Math.floor(this.countNum));
              } else {
                $this.text(Math.floor(this.countNum));
              }
            },
            complete: function () {
              if (this.countNum < 10) {
                $this.text("0" + this.countNum);
              } else {
                $this.text(this.countNum);
              }
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
    // if ($(window).width() <= 767) {
    //   window.onload(countFunction());
    // }
    $(window).scroll(function () {
      var oTop = $(".counter-cont").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        countFunction();
      }
    });
    var oTop = $(".counter-cont").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      countFunction();
    }
  } else {
  }
  ///////// **solutions-section** /////////
  var screen = new Swiper(".solutions-slider .swiper", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".solutions-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".solutions-slider .swiper-btn-next",
      prevEl: ".solutions-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  ///////// **services-section** /////////
  var screenServices = new Swiper(".services-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-slider .swiper-btn-next",
      prevEl: ".services-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// ** clients-section** /////////
  var clients = new Swiper(".clients-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    grid: {
      rows: 3,
      fill: "row",
    },
    pagination: {
      el: ".clients-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients-slider .swiper-btn-next",
      prevEl: ".clients-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **awards-section** /////////
  var screenProject = new Swiper(".awards-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".awards-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".awards-slider .swiper-btn-next",
      prevEl: ".awards-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **projects-section** /////////
  var screenProject = new Swiper(".projects-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projects-slider .swiper-btn-next",
      prevEl: ".projects-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **news-section** /////////
  var screenNews = new Swiper(".news-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-slider .swiper-btn-next",
      prevEl: ".news-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **events-section** /////////
  var screenEvents = new Swiper(".events-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".events-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".events-slider .swiper-btn-next",
      prevEl: ".events-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top - 40,
      },
      1000
    );
  });
  lazyLoad();
});
//lazy load

function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    // img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}
