$(function() {
  const windowHeight = $(window).height(); // ウインドウの高さを取得

  $(window).on('scroll', function () {
    // fv後追加
    if ($(this).scrollTop() > windowHeight) {
      $('.js-fix').addClass('after-fv');
    } else {
      $('.js-fix').removeClass('after-fv');
    }
  });

  // ナビゲーション
  $('.js-hg').on('click', function () {
    let rightVal = 0;
    if ($(this).hasClass('show-hg')) {
      rightVal = -1000;
      $(this).removeClass('show-hg');
    } else {
      $(this).addClass('show-hg');
    }
    
    $('.nav-item>a').on('click', function () {
      rightVal = -1000;
      $(this).removeClass('show-hg');
    });

    $('.js-nav').stop().animate( {
      right: rightVal
    }, 300);
  });

});
