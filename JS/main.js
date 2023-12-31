/*
//显示加载动画
$(".gif").css("display","flex");
//调用ajax发送请求
esdpec.framework.core.getJsonResult('common/getalarmtree', function (res) {
    //请求成功后再次隐藏加载动画
    $(".gif").css("display","none");
})
*/



function openPage(no) {
  if(no == 2) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}




jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
});

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

/* 整个 HTML 页面 淡入淡出 */
$(document).ready(function () {
    $("html").fadeIn(0);
    var top = $(".top").height() + 50;
    visible(top);
});
/* 整个 HTML 页面 淡入淡出 */

/* 点击导航栏展开 */
function showNav() {
    $(document).ready(function () {
        $(".nav_xs").slideToggle("slow");
    })
}
/* 点击导航栏展开 */

/* 屏幕变大隐藏div */
function hideNav() {
    var width = $(window).width();
    if (width >= 768) {
        $(".nav_xs").css("display", "none");
    }
}
/* 屏幕变大隐藏div */

/* 首屏高度自适应 */
function visible(height) {
    $(".visible").height($(window).height() - height);
}
$(window).resize(function () {
    //浏览器大小变化
    var top = $(".top").height() + 50;
    visible(top);
    hideNav();
});
/* 首屏高度自适应 */

/* lazy 懒加载内容 */
$(window).scroll(function (event) {
    var pageTopY = $(window).scrollTop();
    var pageBottomY = $(window).scrollTop() + $(window).height();

    $(".box").each(function () {
        var boxTopY = $(this).offset().top;
        var boxCenter = boxTopY + ($(this).height() / 2);

        if (boxCenter > pageTopY && boxCenter < pageBottomY) {

            //通过判断box类的子元素是否有对应的类来执行不同动画
            if ($(this).children('.lazy').hasClass('lazy')) {
                //出现效果
                $(this).find('.lazy').removeClass('lazy');
                //动画完毕清除box类下次不重复遍历该类，提高执行效率
                $(this).removeClass('box');
            } else if ($(this).children('.progress_cover').children('.percent').hasClass('percent')) {
                //进度条效果
                var width_progress = $(this).find('p').text();
                $(this).find('.percent').animate({width: width_progress}, 2000);
                //动画完毕清除box类下次不重复遍历该类，提高执行效率
                $(this).removeClass('box');
            } else if ($(this).children('.down').hasClass('down')) {
                //淡入淡出效果
                $(this).find('.down').removeClass('down');
                //动画完毕清除box类下次不重复遍历该类，提高执行效率
                $(this).removeClass('box');
            } else if ($(this).children().hasClass('increase1')) {
                //执行increase1增长
                increase('.increase1');
                //动画完毕清除box类下次不重复遍历该类，提高执行效率
                $(this).removeClass('box');
            }else if ($(this).children().hasClass('increase2')) {
                //执行increase2增长
                increase('.increase2');
                //动画完毕清除box类下次不重复遍历该类，提高执行效率
                $(this).removeClass('box');
            }else if ($(this).children().hasClass('increase3')) {
                //执行increase3增长
                increase('.increase3');
                //动画完毕清除box类下次不重复遍历该类，提高执行效率
                $(this).removeClass('box');
            }
        }
    });
});
/* lazy 懒加载内容 */

/* 数字自动增长动画 */
function increase(className) {
    var time = 3; //自定义设置增长所用时间
    var number_text = $('.increase').find(className).text(); //获取所要增长的数量字符串
    var number = parseInt(number_text.replace(',', '')); //替换逗号获取所要增长的最终数量
    var ms = 1000 * time / number; //计算每次增加所需毫秒数
//每次计数最低时间为16ms
    if (ms < 16) {
        ms = 16;
    }
    var count = parseInt(number / (time * 1000) * ms) //计算每次count递增数量
    var num = 0;//初始值

    $('.increase').find(className).text(num); //从0开始增加
    var increase = setInterval(function () {
        num = num + count; //num递增
        $('.increase').find(className).text(num);

        if (num >= number) {
            $('.increase').find(className).text(number_text + "+"); //将最终值添加符号重新显示
            $(className).parent().removeClass('increase');
            clearInterval(increase);
        }
    }, ms)
}
/* 数字自动增长动画 */

/* 标签上升动画 */
$('.contact_text').focus(function () {
    //标签上升动画
    $(this).parent().find('.label_up').animate({top: 3, opacity: 100}, 50);
})
$('.contact_text').blur(function () {
    //如果input框有内容
    if ($(this).val() != '') {
        //标签上升动画
        $(this).parent().find('.label_up').animate({top: 3, opacity: 100}, 50);
        return;
    }
    //标签下降动画
    $(this).parent().find('.label_up').animate({top: 21, opacity: 0}, 50);
});
/* 标签上升动画 */

/* 锚点跳转动画 */
function locate(id) {
    var top = $(id).offset().top;
    $("html,body").animate({scrollTop: top}, 1000);
}
/* 锚点跳转动画 */

/* 输入框label浮动动画 */

/* 输入框label浮动动画 */