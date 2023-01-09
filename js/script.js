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

  // achievements-details.html swiper
  const achivementsDetailsMvSwiper = new Swiper(".achivementsDetailsMvSwiper", {
    loop: true,
    loopedSlides: 9,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // achievements-details.html swiper thumbs
  const achivementsDetailsMvSwiperThumbs = new Swiper(
    ".achivementsDetailsMvSwiperThumbs",
    {
      loop: true,
      loopedSlides: 9,
      slidesPerView: 9,
      centeredSlides: true,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 8,
        },
      },
      // thumbs: {
      //   swiper: achivementsDetailsMvSwiper,
      // },
    }
  );
  achivementsDetailsMvSwiper.controller.control =
    achivementsDetailsMvSwiperThumbs;
  achivementsDetailsMvSwiperThumbs.controller.control =
    achivementsDetailsMvSwiper;

  $(function () {
    // 全てのアラート文を非表示にする
    $(".alert").hide();
    // 送信ボタンをクリック
    $("#submitBtn").click(function () {
      // クリック時の処理
      var sendFlog = true;

      if (!$("#formTableCorporate").val()) {
        // 入力がない：アラート文を表示
        $("#formTableCorporate").css("background", "rgba(255,0,0,1)");
        sendFlog = false;
      }
      if (!$("#formTableName").val()) {
        // 入力がない：アラート文を表示
        $("#formTableName").css("background", "rgba(255,0,0,1)");
        sendFlog = false;
      }
      if (!$("#formTableFrigana").val()) {
        // 入力がない：アラート文を表示
        $("#formTableFrigana").css("background", "rgba(255,0,0,1)");
        sendFlog = false;
      }
      if (!$("#formTableMail").val()) {
        // 入力がない：アラート文を表示
        $("#formTableMail").css("background", "rgba(255,0,0,1)");
        sendFlog = false;
      }
      if (!$("#formTableTextarea").val()) {
        // 入力がない：アラート文を表示
        $("#formTableTextarea").css("background", "rgba(255,0,0,1)");
        sendFlog = false;
      }

      // 変数sendFlogの値をチェック
      if (sendFlog == false) {
        // フォームが送信されないようにする
        $(".xxxxx").css("color", "rgba(255,0,0,1)");
        return false;
      }
    });
  });

  // ↓消さない
});
