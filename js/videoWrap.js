$(function () {
  //현재 보여주는 배너가 몇번째인지를 체크할 변수


  //배너 한개의 너비값


  //복사되기 전 배너의 개수


  var wWidth = $(window).outerWidth();
  var showBanner = 0;
  var showCount = 2;
  var first = $(".banner>li:lt(1)").clone();
  var last = $(".banner>li:gt(1)").clone();
  $(".banner").append(first);
  $(".banner").prepend(last);
  var bannerCount = $(".banner>li").length;
  console.log(bannerCount)
  var bannerWidth = bannerCount * 100 / showCount;
  $(".banner").outerWidth(bannerWidth + "%");
  var bannerLiWidth = $(".banner").outerWidth() / bannerCount;
  $(".banner>li").outerWidth(bannerLiWidth);

  //

  $(".banner>li").width(bannerLiWidth)
  $(".banner").outerWidth(bannerWidth + "%");
  function moveBanner() {
    $(".banner").stop().animate({
      "left": -showBanner * bannerLiWidth
    }, 1000, function () {

    });
    if (wWidth > 767) {


      $(".banner>li").eq(showBanner + 1).addClass("active").siblings().removeClass("active")
    }
  }

  //right
  $(".rightBtn").on("click", function () {
    2
    if (showBanner == bannerLiWidth) {
      showBanner = 0;
      $(".banner").css("left", 0)
    }
    showBanner++;
    moveBanner();
  })
  //left
  $(".leftBtn").on("click", function () {
    if (showBanner == 0) {
      showBanner = bannerLiWidth;
      $(".banner").css("left", -bannerLiWidth * liWidth)
    }
    showBanner--;
    moveBanner();
  })


  function BannerInit() {
    showBanner = 0;
    if (wWidth > 767) {
      $(".banner>li").eq(1).addClass("active")
        .siblings().removeClass("active");
    } else {
      $(".banner>li").addClass("active");
    }

    if (wWidth > 767) {
      showCount = 2;
      $(".banner").css({
        "margin-left": -bannerLiWidth / 2,
        "left": 0
      });
    }
    else {
      showCount = 1;
      $(".banner").css({
        "margin-left": 0,
        "left": 0
      });
      bannerLiWidth = $(".banner").outerWidth() / bannerCount
    }
    bannerWidth = bannerCount * 100 / showCount;
    $(".banner").outerWidth(bannerWidth + "%");
    bannerLiWidth = $(".banner").outerWidth() / bannerCount;
    $(".banner>li").outerWidth(bannerLiWidth);
  }
  $(window).on("resize", function () {

    wWidth = $(window).outerWidth();
    BannerInit();
  })
  BannerInit();
})