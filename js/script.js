jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
  topBtn.hide();

  // headerの表示設定(index)
  $(window).scroll(function () {
    // var position = $(this).scrollTop();
    // console.log(position);
    // if ($(this).scrollTop() > 70) {
    if ($(this).scrollTop() > 1000) {
      // 指定px以上のスクロールでボタンを表示
      $("header").css("background", "rgba(17, 17, 17, 1)");
      // topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      $("header").css("background", "rgba(17, 17, 17, 0.5)");
      // topBtn.fadeOut();
    }
  });

  // header-subの表示設定(index以外)
  var variable = $(".header-sub");
  $(window).on("scroll", function () {
    // var position = $(this).scrollTop();
    // console.log(position);
    if ($(this).scrollTop() > 300) {
      variable.css("background", "rgba(17, 17, 17, 1)");
    } else {
      variable.css("background", "rgba(17, 17, 17, 0.5)");
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".js-drawerMenu").click(function () {
    $(".js-drawerMenu").toggleClass("js-drawerMenu-open");
    $(".js-mobile__menu").toggleClass("js-mobile__menu-open");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // swiper@8
  var swiper = new Swiper(".mySwiper1", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    loop: false,
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    slidesPerView: 1,
    centeredSlides: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
  });

  var swiper = new Swiper(".mvSwiper", {
    loop: true,
    effect: "fade",
    speed: 2000,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // ↓消さない
});
