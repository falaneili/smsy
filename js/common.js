$(function(){
  $(".sec").hover(function(){
    $(this).css("background", "#409EFF");
    $(this).find(".exeion").stop(true, false).slideDown(300);
  },function(){
    $(this).css("background", "#007fff");
    $(this).find(".exeion").stop(true, false).slideUp(300);
  })
})

/*轮播图*/
var swiper = new Swiper('.banner-swiper,.detail-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*首页常见问题向上滚动*/
function kehu_top() {
  //常见问题
  var speed = 60; //数字越大速度越慢
  var tab = document.getElementById("kehu");
  var tab1 = document.getElementById("zheng");
  var tab2 = document.getElementById("xtop");
  tab2.innerHTML = tab1.innerHTML;

  function Marquee() {
    if (tab2.offsetHeight - tab.scrollTop <= 0) {
      tab.scrollTop = 0;
    } else {
      var tmp = tab.scrollTop;
      tab.scrollTop++;
      if (tab.scrollTop == tmp) {
        tab.scrollTop = 1;
      }
    }
  }
  var MyMar = setInterval(Marquee, speed);

  tab.onmouseover = function () {
    clearInterval(MyMar);
  };
  tab.onmouseout = function () {
    MyMar = setInterval(Marquee, speed);
  };
}
kehu_top();


/*选项卡JS*/
$(document).ready(function () {
  $('.ct:gt(0)').hide();
  var hdw = $('.pro-bd a');
  //hdw.hover(function() {
  //    $(this).addClass('current').siblings().removeClass('current');
  //});
  hdw.click(function () {
    $(this).addClass('current').siblings().removeClass();
    var hdw_index = hdw.index(this);
    $('.ct').eq(hdw.index(this)).show().siblings().hide();
  });
});



/*在线客服*/
function b() {
  //h = $(window).height();
  t = $(document).scrollTop();
  if (t > 200) {
    $('.btn_top').fadeIn('slow');
  } else {
    $('.btn_top').fadeOut('slow');
  }
}
$(document).ready(function (e) {
  b();
  $('.btn_top').click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, 1000); //滚回顶部的时间，越小滚的速度越快~
  })
});

$(window).scroll(function (e) {
  b();
});



/*设为首页 加入收藏*/
// 设置为主页 
function SetHome(obj, vrl) {
  try {
    obj.style.behavior = 'url(#default#homepage)';
    obj.setHomePage(vrl);
  } catch (e) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      } catch (e) {
        alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
      }
      var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
      prefs.setCharPref('browser.startup.homepage', vrl);
    } else {
      alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
    }
  }
}
// 加入收藏 兼容360和IE6 
function shoucang(sTitle, sURL) {
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, "");
    } catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
  }
}



